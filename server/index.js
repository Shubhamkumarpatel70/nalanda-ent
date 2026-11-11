import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { connectDB, isMongoConnected, readFallbackDB, writeFallbackDB } from './db.js';
import { authRouter } from './routes/auth.js';
import { contactRouter } from './routes/contact.js';
import { AccountDeletionRequest } from './models/AccountDeletionRequest.js';
import { EmailRestriction } from './models/EmailRestriction.js';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({
  origin: '*',
  credentials: true
}));

app.use(express.json());

// Initialize MongoDB Connection
connectDB();

const purgeExpiredEmailRestrictions = async () => {
  const now = new Date();
  try {
    if (isMongoConnected) {
      // Explicit scheduled cleanup complements MongoDB TTL indexes.
      await Promise.all([
        AccountDeletionRequest.deleteMany({ status: 'Completed', purgeAt: { $lte: now } }),
        EmailRestriction.deleteMany({ expiresAt: { $lte: now } })
      ]);
      return;
    }
    const db = readFallbackDB();
    const beforeRestrictions = (db.emailRestrictions || []).length;
    const beforeRequests = (db.deletionRequests || []).length;
    db.emailRestrictions = (db.emailRestrictions || []).filter(item => new Date(item.expiresAt) > now);
    // Keep anonymized deletion progress records for 90 days after admin completion.
    db.deletionRequests = (db.deletionRequests || []).filter(item => !item.purgeAt || new Date(item.purgeAt) > now);
    if (db.emailRestrictions.length !== beforeRestrictions || db.deletionRequests.length !== beforeRequests) writeFallbackDB(db);
  } catch (error) {
    console.error('Expired account-deletion data cleanup failed:', error);
  }
};
purgeExpiredEmailRestrictions();
setInterval(purgeExpiredEmailRestrictions, 60 * 60 * 1000).unref();

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Nalanda ENT Center Backend API is operational' });
});

app.use('/api/auth', authRouter);
app.use('/api/contact', contactRouter);

app.listen(PORT, () => {
  console.log(`====================================================`);
  console.log(`🚀 Nalanda ENT Center Backend Server running on port ${PORT}`);
  console.log(`🔑 Pre-seeded Admin: admin@nalandaent.com / Admin@123`);
  console.log(`====================================================`);
});
