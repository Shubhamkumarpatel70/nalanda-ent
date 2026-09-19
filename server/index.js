import express from 'express';
import cors from 'cors';
import { authRouter } from './routes/auth.js';
import { contactRouter } from './routes/contact.js';

const app = express();
const PORT = process.env.PORT || 5000;

// Enable CORS for frontend Vite application
app.use(cors({
  origin: '*',
  credentials: true
}));

app.use(express.json());

// API Health Check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Nalanda ENT Center Backend API is operational' });
});

// Route Modules
app.use('/api/auth', authRouter);
app.use('/api/contact', contactRouter);

app.listen(PORT, () => {
  console.log(`====================================================`);
  console.log(`🚀 Nalanda ENT Center Backend Server running on port ${PORT}`);
  console.log(`🔑 Pre-seeded Admin: admin@nalandaent.com / Admin@123`);
  console.log(`====================================================`);
});
