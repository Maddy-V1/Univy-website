/**
 * Demo Request Model
 */

import mongoose from 'mongoose';

const demoRequestSchema = new mongoose.Schema(
  {
    collegeName: {
      type: String,
      required: [true, 'College name is required'],
      trim: true,
      maxlength: [200, 'College name cannot exceed 200 characters'],
    },
    collegeType: {
      type: String,
      required: [true, 'College type is required'],
      enum: [
        'Engineering',
        'Arts & Science',
        'Commerce',
        'Management',
        'Medical',
        'Multi-disciplinary',
        'Other',
      ],
    },
    collegeSize: {
      type: String,
      required: [true, 'College size is required'],
      enum: [
        '<500 students',
        '500-1000 students',
        '1000-3000 students',
        '3000-5000 students',
        '5000+ students',
      ],
    },
    city: { type: String, trim: true, maxlength: 100 },
    state: { type: String, trim: true, maxlength: 100 },
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
    requirements: [{ type: String, trim: true }],
    interestedPlan: {
      type: String,
      enum: ['Essentials', 'Campus Connect', 'Professional', 'Enterprise', 'Custom', 'Not sure', ''],
    },
    currentChallenge: { type: String, trim: true, maxlength: 1000 },
    additionalMessage: { type: String, trim: true, maxlength: 1000 },
    preferredContact: {
      type: String,
      enum: ['Email', 'Phone', 'WhatsApp', 'Video Call', ''],
    },
    urgency: {
      type: String,
      enum: ['ASAP (within 24 hours)', 'This week', 'Next week', 'Just exploring', ''],
    },
    status: {
      type: String,
      enum: ['pending', 'contacted', 'scheduled', 'completed', 'closed'],
      default: 'pending',
    },
    followedUp: { type: Boolean, default: false },
    demoDate: Date,
    notes: { type: String, maxlength: 1000 },
    ipAddress: String,
    userAgent: String,
  },
  { timestamps: true }
);

demoRequestSchema.index({ email: 1 });
demoRequestSchema.index({ status: 1 });
demoRequestSchema.index({ createdAt: -1 });

export default mongoose.models.DemoRequest || mongoose.model('DemoRequest', demoRequestSchema);
