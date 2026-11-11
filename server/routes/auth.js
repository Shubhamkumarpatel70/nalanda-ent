import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { createHash } from 'crypto';
import { ContactQuery } from '../models/ContactQuery.js';
import { EmailRestriction } from '../models/EmailRestriction.js';
import { User } from '../models/User.js';
import { AccountDeletionRequest } from '../models/AccountDeletionRequest.js';
import { isMongoConnected, readFallbackDB, writeFallbackDB } from '../db.js';

export const authRouter = express.Router();
export const JWT_SECRET = process.env.JWT_SECRET || 'nalanda_ent_super_secret_jwt_key_2026';

export function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ error: 'Access denied. No authentication token provided.' });
  }

  try {
    const verified = jwt.verify(token, JWT_SECRET);
    req.user = verified;
    next();
  } catch (err) {
    return res.status(403).json({ error: 'Invalid or expired authentication token.' });
  }
}

export async function requireAdmin(req, res, next) {
  try {
    if (!req.user?.id) return res.status(403).json({ error: 'Administrator privileges required.' });
    const current = isMongoConnected
      ? await User.findById(req.user.id).select('role')
      : readFallbackDB().users.find(u => (u.id || u._id) === req.user.id);
    if (!current || current.role !== 'admin') return res.status(403).json({ error: 'Administrator privileges required.' });
    req.currentUser = current;
    next();
  } catch (err) {
    return res.status(500).json({ error: 'Unable to verify administrator access.' });
  }
}

// 1. SIGNUP ENDPOINT - Default role is strictly 'user'
authRouter.post('/signup', async (req, res) => {
  try {
    const { name, email, phone, password } = req.body;

    if (!name || !email || !phone || !password) {
      return res.status(400).json({ error: 'Name, email, mobile number, and password are required.' });
    }

    const normalizedPhone = String(phone).replace(/\D/g, '');
    if (!/^[6-9]\d{9}$/.test(normalizedPhone)) {
      return res.status(400).json({ error: 'Enter a valid 10-digit Indian mobile number.' });
    }

    if (password.length < 6) {
      return res.status(400).json({ error: 'Password must be at least 6 characters long.' });
    }

    const normalizedEmail = String(email).trim().toLowerCase();
    const emailHash = createHash('sha256').update(normalizedEmail).digest('hex');
    const now = new Date();
    if (isMongoConnected) {
      const blocked = await EmailRestriction.findOne({ emailHash, expiresAt: { $gt: now } }).lean();
      if (blocked) return res.status(403).json({ code: 'EMAIL_RESTRICTED', error: 'This email cannot be used for 90 days after the previous account deletion. Please use another email address.', expiresAt: blocked.expiresAt });
    } else {
      const fallback = readFallbackDB();
      fallback.emailRestrictions = (fallback.emailRestrictions || []).filter(item => new Date(item.expiresAt) > now);
      writeFallbackDB(fallback);
      const blocked = fallback.emailRestrictions.find(item => item.emailHash === emailHash);
      if (blocked) return res.status(403).json({ code: 'EMAIL_RESTRICTED', error: 'This email cannot be used for 90 days after the previous account deletion. Please use another email address.', expiresAt: blocked.expiresAt });
    }

    let newUserObj;

    if (isMongoConnected) {
      const existingUser = await User.findOne({ email: normalizedEmail });
      if (existingUser) {
        return res.status(400).json({ error: 'An account with this email already exists.' });
      }

      const passwordHash = await bcrypt.hash(password, 10);
      const created = await User.create({
        name,
        email: email.toLowerCase(),
        phone: normalizedPhone,
        passwordHash,
        role: 'user' // Default role is strictly 'user'
      });

      newUserObj = { id: created._id.toString(), name: created.name, email: created.email, phone: created.phone || '', role: created.role };
    } else {
      const db = readFallbackDB();
      const existingUser = db.users.find(u => u.email.toLowerCase() === normalizedEmail);
      if (existingUser) {
        return res.status(400).json({ error: 'An account with this email already exists.' });
      }

      const passwordHash = await bcrypt.hash(password, 10);
      const newFallback = {
        id: `usr-${Date.now()}`,
        name,
        email: email.toLowerCase(),
        phone: normalizedPhone,
        passwordHash,
        role: 'user',
        createdAt: new Date().toISOString()
      };
      db.users.push(newFallback);
      writeFallbackDB(db);

      newUserObj = { id: newFallback.id, name: newFallback.name, email: newFallback.email, phone: newFallback.phone || '', role: newFallback.role };
    }

    const token = jwt.sign(
      { id: newUserObj.id, name: newUserObj.name, email: newUserObj.email, role: newUserObj.role },
      JWT_SECRET,
      { expiresIn: '7d' }
    );

    return res.status(201).json({
      message: 'Account created successfully!',
      token,
      user: newUserObj
    });

  } catch (err) {
    console.error('Signup Error:', err);
    return res.status(500).json({ error: 'Server error during registration.' });
  }
});

// 2. LOGIN ENDPOINT
authRouter.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: 'Email and password are required.' });
    }

    let userFound;

    if (isMongoConnected) {
      const user = await User.findOne({ email: email.toLowerCase() });
      if (!user) return res.status(401).json({ error: 'Invalid email or password.' });
      const validPassword = await bcrypt.compare(password, user.passwordHash);
      if (!validPassword) return res.status(401).json({ error: 'Invalid email or password.' });

      userFound = { id: user._id.toString(), name: user.name, email: user.email, phone: user.phone || '', role: user.role };
    } else {
      const db = readFallbackDB();
      const user = db.users.find(u => u.email.toLowerCase() === email.toLowerCase());
      if (!user) return res.status(401).json({ error: 'Invalid email or password.' });
      const validPassword = await bcrypt.compare(password, user.passwordHash);
      if (!validPassword) return res.status(401).json({ error: 'Invalid email or password.' });

      userFound = { id: user.id || user._id, name: user.name, email: user.email, phone: user.phone || '', role: user.role };
    }

    const token = jwt.sign(
      { id: userFound.id, name: userFound.name, email: userFound.email, role: userFound.role },
      JWT_SECRET,
      { expiresIn: '7d' }
    );

    return res.json({
      message: 'Login successful!',
      token,
      user: userFound
    });

  } catch (err) {
    console.error('Login Error:', err);
    return res.status(500).json({ error: 'Server error during login.' });
  }
});

// 3. ME ENDPOINT
authRouter.get('/me', authenticateToken, async (req, res) => {
  try {
    if (isMongoConnected) {
      const user = await User.findById(req.user.id);
      if (!user) return res.status(404).json({ error: 'User account not found.' });
      return res.json({ user: { id: user._id.toString(), name: user.name, email: user.email, phone: user.phone || '', role: user.role } });
    } else {
      const db = readFallbackDB();
      const user = db.users.find(u => (u.id || u._id) === req.user.id);
      if (!user) return res.status(404).json({ error: 'User account not found.' });
      return res.json({ user: { id: user.id || user._id, name: user.name, email: user.email, phone: user.phone || '', role: user.role } });
    }
  } catch (err) {
    return res.status(500).json({ error: 'Server error checking session.' });
  }
});


// Submit an account deletion request. Accounts are not deleted automatically.
authRouter.post('/account-deletion', authenticateToken, async (req, res) => {
  try {
    const reason = String(req.body.reason || '').trim();
    if (reason.length < 5 || reason.length > 1000) return res.status(400).json({ error: 'Please provide a reason (5–1000 characters).' });
    const account = isMongoConnected ? await User.findById(req.user.id) : readFallbackDB().users.find(u => (u.id || u._id) === req.user.id);
    if (!account) return res.status(404).json({ error: 'Account not found.' });
    if (isMongoConnected) {
      const pending = await AccountDeletionRequest.findOne({ userId: req.user.id, status: 'Pending' });
      if (pending) return res.status(409).json({ error: 'A deletion request is already pending.' });
      const request = await AccountDeletionRequest.create({ userId: req.user.id, name: account.name, email: account.email, phone: account.phone || '', reason, status: 'Pending' });
      return res.status(201).json({ message: 'Account deletion request submitted.', request });
    }
    const db = readFallbackDB(); db.deletionRequests ||= [];
    if (db.deletionRequests.some(r => r.userId === req.user.id && r.status === 'Pending')) return res.status(409).json({ error: 'A deletion request is already pending.' });
    const request = { id: 'del-' + Date.now(), userId: req.user.id, name: account.name, email: account.email, phone: account.phone || '', reason, status: 'Pending', createdAt: new Date().toISOString() };
    db.deletionRequests.unshift(request); writeFallbackDB(db);
    return res.status(201).json({ message: 'Account deletion request submitted.', request });
  } catch (err) { console.error('Deletion request error:', err); return res.status(500).json({ error: 'Unable to submit deletion request.' }); }
});

authRouter.get('/account-deletion', authenticateToken, requireAdmin, async (req, res) => {
  try {
    const requests = isMongoConnected
      ? await AccountDeletionRequest.find().sort({ createdAt: -1 }).lean()
      : (readFallbackDB().deletionRequests || []).slice().sort((a,b) => new Date(b.createdAt)-new Date(a.createdAt));
    return res.json({ requests: requests.map(r => ({ id: String(r._id || r.id), userId: r.userId, name: r.name, email: r.email, phone: r.phone, reason: r.reason, status: r.status, createdAt: r.createdAt })) });
  } catch (err) { return res.status(500).json({ error: 'Unable to load deletion requests.' }); }
});

authRouter.patch('/account-deletion/:id', authenticateToken, requireAdmin, async (req, res) => {
  try {
    const status = req.body.status;
    if (!['Reviewed', 'Rejected', 'Completed'].includes(status)) return res.status(400).json({ error: 'Invalid request status.' });

    if (isMongoConnected) {
      const request = await AccountDeletionRequest.findById(req.params.id);
      if (!request) return res.status(404).json({ error: 'Request not found.' });
      if (status === 'Completed' && request.status !== 'Completed') {
        const account = await User.findById(request.userId).select('email phone');
        if (account) {
          const emailHash = createHash('sha256').update(String(account.email).trim().toLowerCase()).digest('hex');
          const expiresAt = new Date(Date.now() + 90 * 24 * 60 * 60 * 1000);
          await EmailRestriction.findOneAndUpdate({ emailHash }, { emailHash, expiresAt }, { upsert: true, new: true });
          const digits = String(account.phone || '').replace(/\D/g, '').slice(-10);
          const phonePattern = digits ? new RegExp(digits.split('').join('\\D*') + '$') : null;
          const filters = [{ email: account.email }];
          if (phonePattern) filters.push({ phone: phonePattern });
          await Promise.all([ContactQuery.deleteMany({ $or: filters }), User.deleteOne({ _id: account._id })]);
        }
        request.userId = 'deleted';
        request.name = 'Deleted user';
        request.email = 'deleted@redacted.invalid';
        request.phone = '';
        request.reason = 'Personal data erased after account deletion.';
      }
      request.status = status;
      await request.save();
      return res.json({ message: status === 'Completed' ? 'Account and related contact queries deleted. Email restricted for 90 days.' : 'Deletion request updated.', request: { id: String(request._id), name: request.name, email: request.email, phone: request.phone, reason: request.reason, status: request.status, createdAt: request.createdAt } });
    }

    const db = readFallbackDB();
    db.deletionRequests ||= [];
    db.emailRestrictions ||= [];
    db.queries ||= [];
    const request = db.deletionRequests.find(r => (r.id || r._id) === req.params.id);
    if (!request) return res.status(404).json({ error: 'Request not found.' });
    if (status === 'Completed' && request.status !== 'Completed') {
      const account = db.users.find(u => (u.id || u._id) === request.userId);
      if (account) {
        const emailHash = createHash('sha256').update(String(account.email).trim().toLowerCase()).digest('hex');
        const expiresAt = new Date(Date.now() + 90 * 24 * 60 * 60 * 1000).toISOString();
        db.emailRestrictions = db.emailRestrictions.filter(item => item.emailHash !== emailHash);
        db.emailRestrictions.push({ emailHash, expiresAt });
        const digits = String(account.phone || '').replace(/\D/g, '').slice(-10);
        const normalizePhone = value => String(value || '').replace(/\D/g, '').slice(-10);
        db.queries = db.queries.filter(q => String(q.email || '').trim().toLowerCase() !== String(account.email || '').trim().toLowerCase() && !(digits && normalizePhone(q.phone) === digits));
        db.users = db.users.filter(u => (u.id || u._id) !== request.userId);
      }
      request.userId = 'deleted';
      request.name = 'Deleted user';
      request.email = '';
      request.phone = '';
      request.reason = 'Personal data erased after account deletion.';
    }
    request.status = status;
    request.updatedAt = new Date().toISOString();
    writeFallbackDB(db);
    return res.json({ message: status === 'Completed' ? 'Account and related contact queries deleted. Email restricted for 90 days.' : 'Deletion request updated.', request });
  } catch (err) {
    console.error('Account deletion completion error:', err);
    return res.status(500).json({ error: 'Unable to complete account deletion.' });
  }
});

// Admin user directory and role management. Role is persisted in the active database.
authRouter.get('/users', authenticateToken, requireAdmin, async (req, res) => {
  try {
    const users = isMongoConnected
      ? await User.find().select('name email phone role createdAt').sort({ createdAt: -1 }).lean()
      : readFallbackDB().users.slice().sort((a,b) => new Date(b.createdAt)-new Date(a.createdAt));
    return res.json({ users: users.map(u => ({ id: String(u._id || u.id), name: u.name, email: u.email, phone: u.phone || '', role: u.role, createdAt: u.createdAt })) });
  } catch (err) { return res.status(500).json({ error: 'Unable to load users.' }); }
});

authRouter.patch('/users/:id/role', authenticateToken, requireAdmin, async (req, res) => {
  try {
    const role = req.body.role;
    if (!['user', 'admin'].includes(role)) return res.status(400).json({ error: 'Role must be user or admin.' });
    if (req.params.id === req.user.id && role !== 'admin') return res.status(400).json({ error: 'You cannot remove your own administrator role.' });
    let updated;
    if (isMongoConnected) {
      updated = await User.findByIdAndUpdate(req.params.id, { role }, { new: true }).select('name email phone role');
    } else {
      const db = readFallbackDB(); const user = db.users.find(u => (u.id || u._id) === req.params.id);
      if (user) { user.role = role; writeFallbackDB(db); updated = user; }
    }
    if (!updated) return res.status(404).json({ error: 'User not found.' });
    return res.json({ message: 'User role updated in database.', user: { id: String(updated._id || updated.id), name: updated.name, email: updated.email, phone: updated.phone || '', role: updated.role } });
  } catch (err) { return res.status(500).json({ error: 'Unable to update user role.' }); }
});
