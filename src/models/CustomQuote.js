/**
 * Custom Quote Model
 */

import mongoose from 'mongoose';

const customQuoteSchema = new mongoose.Schema(
  {
    collegeName: {
      type: String,
      required: [true, 'College name is required'],
      trim: true,
      maxlength: 200,
    },
    collegeSize: {
      type: String,
      required: [true, 'College size is required'],
    },
    contactPerson: {
      type: String,
      required: [true, 'Contact person name is required'],
      trim: true,
      maxlength: 100,
    },
    role: { type: String, trim: true, maxlength: 100 },
    email: {
      type: String,
      required: [true, 'Email is required'],
      trim: true,
      lowercase: true,
      match: [/^\S+@\S+\.\S+$/, 'Please provide a valid email'],
    },
    phone: {
      type: String,
      required: [true, 'Phone number is required'],
      trim: true,
    },
    selectedServices: [{ type: String, required: true }],
    additionalRequirements: { type: String, trim: true, maxlength: 2000 },
    budget: { type: String, trim: true, maxlength: 100 },
    timeline: { type: String, trim: true, maxlength: 100 },
    currentSystem: { type: String, trim: true, maxlength: 500 },
    status: {
      type: String,
      enum: ['pending', 'proposal-sent', 'negotiating', 'closed-won', 'closed-lost'],
      default: 'pending',
    },
    proposalSent: { type: Boolean, default: false },
    proposalDate: Date,
    quotedAmount: String,
    notes: { type: String, maxlength: 1000 },
    ipAddress: String,
    userAgent: String,
  },
  { timestamps: true }
);

customQuoteSchema.index({ email: 1 });
customQuoteSchema.index({ status: 1 });
customQuoteSchema.index({ createdAt: -1 });

export default mongoose.models.CustomQuote || mongoose.model('CustomQuote', customQuoteSchema);
