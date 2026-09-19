import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { User } from '../models/User.js';
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

export function requireAdmin(req, res, next) {
  if (!req.user || req.user.role !== 'admin') {
    return res.status(403).json({ error: 'Access denied. Administrator privileges required.' });
  }
  next();
}

// 1. SIGNUP ENDPOINT - Default role is strictly 'user'
authRouter.post('/signup', async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ error: 'Name, email, and password are required.' });
    }

    if (password.length < 6) {
      return res.status(400).json({ error: 'Password must be at least 6 characters long.' });
    }

    let newUserObj;

    if (isMongoConnected) {
      const existingUser = await User.findOne({ email: email.toLowerCase() });
      if (existingUser) {
        return res.status(400).json({ error: 'An account with this email already exists.' });
      }

      const passwordHash = await bcrypt.hash(password, 10);
      const created = await User.create({
        name,
        email: email.toLowerCase(),
        passwordHash,
        role: 'user' // Default role is strictly 'user'
      });

      newUserObj = { id: created._id.toString(), name: created.name, email: created.email, role: created.role };
    } else {
      const db = readFallbackDB();
      const existingUser = db.users.find(u => u.email.toLowerCase() === email.toLowerCase());
      if (existingUser) {
        return res.status(400).json({ error: 'An account with this email already exists.' });
      }

      const passwordHash = await bcrypt.hash(password, 10);
      const newFallback = {
        id: `usr-${Date.now()}`,
        name,
        email: email.toLowerCase(),
        passwordHash,
        role: 'user',
        createdAt: new Date().toISOString()
      };
      db.users.push(newFallback);
      writeFallbackDB(db);

      newUserObj = { id: newFallback.id, name: newFallback.name, email: newFallback.email, role: newFallback.role };
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

      userFound = { id: user._id.toString(), name: user.name, email: user.email, role: user.role };
    } else {
      const db = readFallbackDB();
      const user = db.users.find(u => u.email.toLowerCase() === email.toLowerCase());
      if (!user) return res.status(401).json({ error: 'Invalid email or password.' });
      const validPassword = await bcrypt.compare(password, user.passwordHash);
      if (!validPassword) return res.status(401).json({ error: 'Invalid email or password.' });

      userFound = { id: user.id || user._id, name: user.name, email: user.email, role: user.role };
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
      return res.json({ user: { id: user._id.toString(), name: user.name, email: user.email, role: user.role } });
    } else {
      const db = readFallbackDB();
      const user = db.users.find(u => (u.id || u._id) === req.user.id);
      if (!user) return res.status(404).json({ error: 'User account not found.' });
      return res.json({ user: { id: user.id || user._id, name: user.name, email: user.email, role: user.role } });
    }
  } catch (err) {
    return res.status(500).json({ error: 'Server error checking session.' });
  }
});
