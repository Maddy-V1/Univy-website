/**
 * Contact Model
 * Schema for contact form submissions
 */

const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'Name is required'],
            trim: true,
            minlength: [2, 'Name must be at least 2 characters'],
            maxlength: [100, 'Name cannot exceed 100 characters'],
        },
        collegeName: {
            type: String,
            required: [true, 'College name is required'],
            trim: true,
            minlength: [3, 'College name must be at least 3 characters'],
            maxlength: [200, 'College name cannot exceed 200 characters'],
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
        message: {
            type: String,
            trim: true,
            maxlength: [1000, 'Message cannot exceed 1000 characters'],
        },
        status: {
            type: String,
            enum: ['new', 'contacted', 'closed'],
            default: 'new',
        },
        ipAddress: {
            type: String,
        },
        userAgent: {
            type: String,
        },
        notes: {
            type: String,
            maxlength: [500, 'Notes cannot exceed 500 characters'],
        },
    },
    {
        timestamps: true,
    }
);

// Indexes
contactSchema.index({ email: 1 });
contactSchema.index({ status: 1 });
contactSchema.index({ createdAt: -1 });

const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;
