/**
 * Custom Quote Model
 * Schema for custom quote requests
 */

const mongoose = require('mongoose');

const customQuoteSchema = new mongoose.Schema(
    {
        collegeName: {
            type: String,
            required: [true, 'College name is required'],
            trim: true,
            maxlength: [200, 'College name cannot exceed 200 characters'],
        },
        collegeSize: {
            type: String,
            required: [true, 'College size is required'],
        },
        contactPerson: {
            type: String,
            required: [true, 'Contact person name is required'],
            trim: true,
            maxlength: [100, 'Name cannot exceed 100 characters'],
        },
        role: {
            type: String,
            trim: true,
            maxlength: [100, 'Role cannot exceed 100 characters'],
        },
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
        selectedServices: [{
            type: String,
            required: true,
        }],
        additionalRequirements: {
            type: String,
            trim: true,
            maxlength: [2000, 'Additional requirements cannot exceed 2000 characters'],
        },
        budget: {
            type: String,
            trim: true,
            maxlength: [100, 'Budget cannot exceed 100 characters'],
        },
        timeline: {
            type: String,
            trim: true,
            maxlength: [100, 'Timeline cannot exceed 100 characters'],
        },
        currentSystem: {
            type: String,
            trim: true,
            maxlength: [500, 'Current system description cannot exceed 500 characters'],
        },
        status: {
            type: String,
            enum: ['pending', 'proposal-sent', 'negotiating', 'closed-won', 'closed-lost'],
            default: 'pending',
        },
        proposalSent: {
            type: Boolean,
            default: false,
        },
        proposalDate: {
            type: Date,
        },
        quotedAmount: {
            type: String,
        },
        notes: {
            type: String,
            maxlength: [1000, 'Notes cannot exceed 1000 characters'],
        },
        ipAddress: {
            type: String,
        },
        userAgent: {
            type: String,
        },
    },
    {
        timestamps: true,
    }
);

// Indexes
customQuoteSchema.index({ email: 1 });
customQuoteSchema.index({ status: 1 });
customQuoteSchema.index({ createdAt: -1 });

const CustomQuote = mongoose.model('CustomQuote', customQuoteSchema);

module.exports = CustomQuote;
