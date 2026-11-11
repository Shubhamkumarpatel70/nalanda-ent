import mongoose from 'mongoose';

const emailRestrictionSchema = new mongoose.Schema({
  // Retain only a one-way digest; never store the original email in this collection.
  emailHash: { type: String, required: true, unique: true, index: true },
  expiresAt: { type: Date, required: true, index: { expires: 0 } }
}, { timestamps: true });

export const EmailRestriction = mongoose.model('EmailRestriction', emailRestrictionSchema);
