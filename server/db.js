import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import { User } from './models/User.js';
import { ContactQuery } from './models/ContactQuery.js';

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/nalanda_ent';

export let isMongoConnected = false;

// Fallback in-memory / file store if local MongoDB daemon is not running
import fs from 'fs';
import path from 'path';
const DB_FILE = path.join(process.cwd(), 'server', 'data_store.json');

const initialFallbackData = {
  users: [
    {
      _id: "usr-admin-1",
      id: "usr-admin-1",
      name: "Clinic Administrator",
      email: "admin@nalandaent.com",
      passwordHash: bcrypt.hashSync("Admin@123", 10),
      role: "admin",
      createdAt: new Date().toISOString()
    }
  ],
  queries: [
    {
      _id: "qry-101",
      id: "qry-101",
      name: "Ramesh Jha",
      email: "ramesh.jha@gmail.com",
      phone: "+91 98350 12345",
      branchPreference: "Rajendra Nagar Main Branch",
      subject: "Eardrum perforation surgery consultation query",
      message: "Respected Dr. Nalanda, I have chronic ear discharge for 3 years. I want to visit Rajendra Nagar branch next Tuesday for microscopic tympanoplasty examination.",
      status: "New",
      createdAt: new Date(Date.now() - 3600000 * 24 * 2).toISOString()
    }
  ]
};

export function readFallbackDB() {
  try {
    if (!fs.existsSync(DB_FILE)) {
      const dir = path.dirname(DB_FILE);
      if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
      fs.writeFileSync(DB_FILE, JSON.stringify(initialFallbackData, null, 2), 'utf-8');
      return initialFallbackData;
    }
    return JSON.parse(fs.readFileSync(DB_FILE, 'utf-8'));
  } catch (err) {
    return initialFallbackData;
  }
}

export function writeFallbackDB(data) {
  try {
    const dir = path.dirname(DB_FILE);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(DB_FILE, JSON.stringify(data, null, 2), 'utf-8');
  } catch (err) {}
}

export async function connectDB() {
  try {
    await mongoose.connect(MONGODB_URI, {
      serverSelectionTimeoutMS: 3000 // Quick timeout if no local MongoDB service
    });
    isMongoConnected = true;
    console.log('✅ Connected to MongoDB database:', MONGODB_URI);

    // Auto-seed admin user if not exists in MongoDB
    const adminExists = await User.findOne({ email: 'admin@nalandaent.com' });
    if (!adminExists) {
      const passwordHash = await bcrypt.hash('Admin@123', 10);
      await User.create({
        name: 'Clinic Administrator',
        email: 'admin@nalandaent.com',
        passwordHash,
        role: 'admin'
      });
      console.log('🔑 Auto-seeded MongoDB Admin: admin@nalandaent.com / Admin@123');
    }
  } catch (err) {
    isMongoConnected = false;
    console.log('ℹ️ MongoDB server not detected locally. Operating in persistent database file mode.');
  }
}
