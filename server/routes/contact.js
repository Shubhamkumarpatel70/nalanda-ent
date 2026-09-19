import express from 'express';
import { readDB, writeDB } from '../db.js';
import { authenticateToken, requireAdmin } from './auth.js';

export const contactRouter = express.Router();

// 1. PUBLIC SUBMIT CONTACT QUERY
contactRouter.post('/', (req, res) => {
  try {
    const { name, email, phone, branchPreference, subject, message } = req.body;

    if (!name || !phone || !message) {
      return res.status(400).json({ error: 'Name, phone number, and message details are required.' });
    }

    const db = readDB();

    const newQuery = {
      id: `qry-${Date.now()}`,
      name,
      email: email || 'N/A',
      phone,
      branchPreference: branchPreference || 'Main Rajendra Nagar Branch',
      subject: subject || 'General OPD Query',
      message,
      status: 'New', // New, In Progress, Resolved
      createdAt: new Date().toISOString()
    };

    db.queries.unshift(newQuery);
    writeDB(db);

    return res.status(201).json({
      message: 'Your inquiry has been submitted successfully to Nalanda ENT Center desk.',
      query: newQuery
    });

  } catch (err) {
    console.error('Contact Submit Error:', err);
    return res.status(500).json({ error: 'Server error while submitting your inquiry.' });
  }
});

// 2. ADMIN ONLY - GET ALL CONTACT QUERIES
contactRouter.get('/', authenticateToken, requireAdmin, (req, res) => {
  try {
    const db = readDB();
    return res.json({
      queries: db.queries
    });
  } catch (err) {
    console.error('Fetch Queries Error:', err);
    return res.status(500).json({ error: 'Server error while fetching contact queries.' });
  }
});

// 3. ADMIN ONLY - UPDATE QUERY STATUS
contactRouter.patch('/:id', authenticateToken, requireAdmin, (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    if (!status || !['New', 'In Progress', 'Resolved'].includes(status)) {
      return res.status(400).json({ error: 'Invalid status. Choose New, In Progress, or Resolved.' });
    }

    const db = readDB();
    const queryIndex = db.queries.findIndex(q => q.id === id);

    if (queryIndex === -1) {
      return res.status(404).json({ error: 'Query record not found.' });
    }

    db.queries[queryIndex].status = status;
    db.queries[queryIndex].updatedAt = new Date().toISOString();
    writeDB(db);

    return res.json({
      message: `Query status updated to '${status}'.`,
      query: db.queries[queryIndex]
    });

  } catch (err) {
    console.error('Update Query Status Error:', err);
    return res.status(500).json({ error: 'Server error updating query status.' });
  }
});
