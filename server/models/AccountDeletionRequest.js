import mongoose from 'mongoose';

const accountDeletionRequestSchema = new mongoose.Schema({
  userId: { type: String, required: true, index: true },
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, default: '' },
  reason: { type: String, required: true, maxlength: 1000 },
  status: { type: String, enum: ['Pending', 'Reviewed', 'Rejected', 'Completed'], default: 'Pending' }
}, { timestamps: true });

export const AccountDeletionRequest = mongoose.model('AccountDeletionRequest', accountDeletionRequestSchema);
