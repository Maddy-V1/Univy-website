/**
 * Demo Controller
 * Handles demo request submissions
 */

const DemoRequest = require('../models/DemoRequest');
const { sendEmail } = require('../utils/email');
const logger = require('../utils/logger');
const env = require('../config/env');

/**
 * Submit demo request
 */
exports.submitDemoRequest = async (req, res, next) => {
    try {
        const demoData = {
            ...req.body,
            ipAddress: req.ip,
            userAgent: req.get('User-Agent'),
        };

        const demoRequest = new DemoRequest(demoData);
        await demoRequest.save();

        // Send notification email to admin
        try {
            await sendEmail({
                to: env.adminEmail,
                subject: `🎯 New Demo Request - ${demoData.collegeName}`,
                html: `
          <h2>New Demo Request Received!</h2>
          <h3>College Information</h3>
          <p><strong>College:</strong> ${demoData.collegeName}</p>
          <p><strong>Type:</strong> ${demoData.collegeType}</p>
          <p><strong>Size:</strong> ${demoData.collegeSize}</p>
          
          <h3>Contact Details</h3>
          <p><strong>Name:</strong> ${demoData.contactPerson}</p>
          <p><strong>Email:</strong> ${demoData.email}</p>
          <p><strong>Phone:</strong> ${demoData.phone}</p>
          
          <h3>Additional Info</h3>
          <p><strong>Current Challenge:</strong> ${demoData.currentChallenge || 'Not specified'}</p>
          <p><strong>Urgency:</strong> ${demoData.urgency || 'Not specified'}</p>
          
          <hr>
          <p><strong>Action Required:</strong> Follow up within 24 hours!</p>
          <p><small>Submitted at: ${new Date().toLocaleString()}</small></p>
        `,
            });
        } catch (emailError) {
            logger.error('Failed to send admin notification email:', emailError.message);
        }

        // Send confirmation email to user
        try {
            await sendEmail({
                to: demoData.email,
                subject: 'Your Demo Request - Univy',
                html: `
          <h2>Thank you for requesting a demo, ${demoData.contactPerson}!</h2>
          <p>We're excited that <strong>${demoData.collegeName}</strong> is interested in Univy.</p>
          <p>Our team will contact you within <strong>24 hours</strong> to schedule your personalized demo.</p>
          
          <h3>What to Expect</h3>
          <ul>
            <li>30-minute personalized demo</li>
            <li>Q&A session with our team</li>
            <li>Custom solution discussion</li>
            <li>Pricing overview</li>
          </ul>
          
          <p>In the meantime, you can explore our <a href="${env.frontendUrl}/services">services</a> and <a href="${env.frontendUrl}/pricing">pricing</a>.</p>
          
          <hr>
          <p>Best regards,<br>The Univy Team</p>
        `,
            });
        } catch (emailError) {
            logger.error('Failed to send confirmation email:', emailError.message);
        }

        logger.info(`New demo request from ${demoData.email} - ${demoData.collegeName}`);

        res.status(201).json({
            success: true,
            message: 'Demo request submitted successfully. Our team will contact you within 24 hours!',
            data: {
                id: demoRequest._id,
            },
        });
    } catch (error) {
        next(error);
    }
};

/**
 * Get all demo requests (admin)
 */
exports.getAllDemoRequests = async (req, res, next) => {
    try {
        const { status, page = 1, limit = 20 } = req.query;

        const query = {};
        if (status) query.status = status;

        const demoRequests = await DemoRequest.find(query)
            .sort({ createdAt: -1 })
            .skip((page - 1) * limit)
            .limit(parseInt(limit, 10));

        const total = await DemoRequest.countDocuments(query);

        res.status(200).json({
            success: true,
            data: demoRequests,
            pagination: {
                page: parseInt(page, 10),
                limit: parseInt(limit, 10),
                total,
                pages: Math.ceil(total / limit),
            },
        });
    } catch (error) {
        next(error);
    }
};

/**
 * Get demo request by ID
 */
exports.getDemoRequestById = async (req, res, next) => {
    try {
        const demoRequest = await DemoRequest.findById(req.params.id);

        if (!demoRequest) {
            return res.status(404).json({
                success: false,
                message: 'Demo request not found',
            });
        }

        res.status(200).json({
            success: true,
            data: demoRequest,
        });
    } catch (error) {
        next(error);
    }
};

/**
 * Update demo request status
 */
exports.updateDemoStatus = async (req, res, next) => {
    try {
        const { status, notes, demoDate, followedUp } = req.body;

        const demoRequest = await DemoRequest.findByIdAndUpdate(
            req.params.id,
            { status, notes, demoDate, followedUp },
            { new: true, runValidators: true }
        );

        if (!demoRequest) {
            return res.status(404).json({
                success: false,
                message: 'Demo request not found',
            });
        }

        res.status(200).json({
            success: true,
            message: 'Demo request status updated',
            data: demoRequest,
        });
    } catch (error) {
        next(error);
    }
};
