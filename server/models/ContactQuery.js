import mongoose from 'mongoose';

const contactQuerySchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, default: 'N/A' },
  phone: { type: String, required: true },
  branchPreference: { type: String, default: 'Main Rajendra Nagar Branch' },
  subject: { type: String, default: 'General Consultation Query' },
  message: { type: String, required: true },
  status: { type: String, enum: ['New', 'In Progress', 'Resolved'], default: 'New' },
}, { timestamps: true });

export const ContactQuery = mongoose.model('ContactQuery', contactQuerySchema);
