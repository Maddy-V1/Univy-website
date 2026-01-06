/**
 * Demo Request Model
 * Schema for demo request submissions
 */

const mongoose = require('mongoose');

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
        city: {
            type: String,
            trim: true,
            maxlength: [100, 'City cannot exceed 100 characters'],
        },
        state: {
            type: String,
            trim: true,
            maxlength: [100, 'State cannot exceed 100 characters'],
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
        requirements: [{
            type: String,
            trim: true,
        }],
        interestedPlan: {
            type: String,
            enum: [
                'Essentials',
                'Campus Connect',
                'Professional',
                'Enterprise',
                'Custom',
                'Not sure',
                '',
            ],
        },
        currentChallenge: {
            type: String,
            trim: true,
            maxlength: [1000, 'Current challenge cannot exceed 1000 characters'],
        },
        additionalMessage: {
            type: String,
            trim: true,
            maxlength: [1000, 'Additional message cannot exceed 1000 characters'],
        },
        preferredContact: {
            type: String,
            enum: ['Email', 'Phone', 'WhatsApp', 'Video Call', ''],
        },
        urgency: {
            type: String,
            enum: [
                'ASAP (within 24 hours)',
                'This week',
                'Next week',
                'Just exploring',
                '',
            ],
        },
        status: {
            type: String,
            enum: ['pending', 'contacted', 'scheduled', 'completed', 'closed'],
            default: 'pending',
        },
        followedUp: {
            type: Boolean,
            default: false,
        },
        demoDate: {
            type: Date,
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
demoRequestSchema.index({ email: 1 });
demoRequestSchema.index({ status: 1 });
demoRequestSchema.index({ collegeSize: 1 });
demoRequestSchema.index({ createdAt: -1 });

const DemoRequest = mongoose.model('DemoRequest', demoRequestSchema);

module.exports = DemoRequest;
