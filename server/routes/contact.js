import express from 'express';
import { ContactQuery } from '../models/ContactQuery.js';
import { isMongoConnected, readFallbackDB, writeFallbackDB } from '../db.js';
import { authenticateToken, requireAdmin } from './auth.js';

export const contactRouter = express.Router();

// 1. PUBLIC SUBMIT CONTACT QUERY
contactRouter.post('/', async (req, res) => {
  try {
    const { name, email, phone, branchPreference, subject, message } = req.body;

    if (!name || !phone || !message) {
      return res.status(400).json({ error: 'Name, phone number, and message details are required.' });
    }

    let savedQuery;

    if (isMongoConnected) {
      const created = await ContactQuery.create({
        name,
        email: email || 'N/A',
        phone,
        branchPreference: branchPreference || 'Main Rajendra Nagar Branch',
        subject: subject || 'General OPD Query',
        message,
        status: 'New'
      });
      savedQuery = {
        id: created._id.toString(),
        name: created.name,
        email: created.email,
        phone: created.phone,
        branchPreference: created.branchPreference,
        subject: created.subject,
        message: created.message,
        status: created.status,
        createdAt: created.createdAt
      };
    } else {
      const db = readFallbackDB();
      const newQuery = {
        id: `qry-${Date.now()}`,
        name,
        email: email || 'N/A',
        phone,
        branchPreference: branchPreference || 'Main Rajendra Nagar Branch',
        subject: subject || 'General OPD Query',
        message,
        status: 'New',
        createdAt: new Date().toISOString()
      };
      db.queries.unshift(newQuery);
      writeFallbackDB(db);
      savedQuery = newQuery;
    }

    return res.status(201).json({
      message: 'Your inquiry has been submitted successfully to Nalanda ENT Center desk.',
      query: savedQuery
    });

  } catch (err) {
    console.error('Contact Submit Error:', err);
    return res.status(500).json({ error: 'Server error while submitting your inquiry.' });
  }
});

// 2. ADMIN ONLY - GET ALL CONTACT QUERIES
contactRouter.get('/', authenticateToken, requireAdmin, async (req, res) => {
  try {
    if (isMongoConnected) {
      const queries = await ContactQuery.find().sort({ createdAt: -1 });
      const mapped = queries.map(q => ({
        id: q._id.toString(),
        name: q.name,
        email: q.email,
        phone: q.phone,
        branchPreference: q.branchPreference,
        subject: q.subject,
        message: q.message,
        status: q.status,
        createdAt: q.createdAt
      }));
      return res.json({ queries: mapped });
    } else {
      const db = readFallbackDB();
      return res.json({ queries: db.queries });
    }
  } catch (err) {
    console.error('Fetch Queries Error:', err);
    return res.status(500).json({ error: 'Server error while fetching contact queries.' });
  }
});

// 3. ADMIN ONLY - UPDATE QUERY STATUS
contactRouter.patch('/:id', authenticateToken, requireAdmin, async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    if (!status || !['New', 'In Progress', 'Resolved'].includes(status)) {
      return res.status(400).json({ error: 'Invalid status. Choose New, In Progress, or Resolved.' });
    }

    let updatedQuery;

    if (isMongoConnected) {
      const updated = await ContactQuery.findByIdAndUpdate(id, { status }, { new: true });
      if (!updated) return res.status(404).json({ error: 'Query record not found.' });
      updatedQuery = {
        id: updated._id.toString(),
        name: updated.name,
        email: updated.email,
        phone: updated.phone,
        branchPreference: updated.branchPreference,
        subject: updated.subject,
        message: updated.message,
        status: updated.status,
        createdAt: updated.createdAt,
        updatedAt: updated.updatedAt
      };
    } else {
      const db = readFallbackDB();
      const queryIndex = db.queries.findIndex(q => (q.id || q._id) === id);
      if (queryIndex === -1) return res.status(404).json({ error: 'Query record not found.' });

      db.queries[queryIndex].status = status;
      db.queries[queryIndex].updatedAt = new Date().toISOString();
      writeFallbackDB(db);
      updatedQuery = db.queries[queryIndex];
    }

    return res.json({
      message: `Query status updated to '${status}'.`,
      query: updatedQuery
    });

  } catch (err) {
    console.error('Update Query Status Error:', err);
    return res.status(500).json({ error: 'Server error updating query status.' });
  }
});
