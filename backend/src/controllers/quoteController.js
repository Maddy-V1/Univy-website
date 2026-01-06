/**
 * Quote Controller
 * Handles custom quote request submissions
 */

const CustomQuote = require('../models/CustomQuote');
const { sendEmail } = require('../utils/email');
const logger = require('../utils/logger');
const env = require('../config/env');

/**
 * Submit quote request
 */
exports.submitQuoteRequest = async (req, res, next) => {
    try {
        const quoteData = {
            ...req.body,
            ipAddress: req.ip,
            userAgent: req.get('User-Agent'),
        };

        const quoteRequest = new CustomQuote(quoteData);
        await quoteRequest.save();

        // Send notification email to admin
        try {
            await sendEmail({
                to: env.adminEmail,
                subject: `💰 New Custom Quote Request - ${quoteData.collegeName}`,
                html: `
          <h2>New Custom Quote Request!</h2>
          <h3>College Information</h3>
          <p><strong>College:</strong> ${quoteData.collegeName}</p>
          <p><strong>Size:</strong> ${quoteData.collegeSize}</p>
          
          <h3>Contact Details</h3>
          <p><strong>Name:</strong> ${quoteData.contactPerson}</p>
          <p><strong>Role:</strong> ${quoteData.role || 'Not specified'}</p>
          <p><strong>Email:</strong> ${quoteData.email}</p>
          <p><strong>Phone:</strong> ${quoteData.phone}</p>
          
          <h3>Selected Services</h3>
          <ul>
            ${quoteData.selectedServices.map(s => `<li>${s}</li>`).join('')}
          </ul>
          
          <h3>Additional Info</h3>
          <p><strong>Requirements:</strong> ${quoteData.additionalRequirements || 'None specified'}</p>
          <p><strong>Budget:</strong> ${quoteData.budget || 'Not specified'}</p>
          <p><strong>Timeline:</strong> ${quoteData.timeline || 'Not specified'}</p>
          <p><strong>Current System:</strong> ${quoteData.currentSystem || 'Not specified'}</p>
          
          <hr>
          <p><strong>Action Required:</strong> Prepare and send proposal!</p>
          <p><small>Submitted at: ${new Date().toLocaleString()}</small></p>
        `,
            });
        } catch (emailError) {
            logger.error('Failed to send admin notification email:', emailError.message);
        }

        // Send confirmation email to user
        try {
            await sendEmail({
                to: quoteData.email,
                subject: 'Your Custom Quote Request - Univy',
                html: `
          <h2>Thank you for your interest, ${quoteData.contactPerson}!</h2>
          <p>We've received your custom quote request for <strong>${quoteData.collegeName}</strong>.</p>
          
          <h3>Services Requested</h3>
          <ul>
            ${quoteData.selectedServices.map(s => `<li>${s}</li>`).join('')}
          </ul>
          
          <h3>What Happens Next</h3>
          <ol>
            <li>Our team will review your requirements</li>
            <li>We'll prepare a customized proposal</li>
            <li>You'll receive the proposal within 48 hours</li>
            <li>We'll schedule a call to discuss details</li>
          </ol>
          
          <p>If you have any questions, feel free to reply to this email.</p>
          
          <hr>
          <p>Best regards,<br>The Univy Team</p>
        `,
            });
        } catch (emailError) {
            logger.error('Failed to send confirmation email:', emailError.message);
        }

        logger.info(`New quote request from ${quoteData.email} - ${quoteData.collegeName}`);

        res.status(201).json({
            success: true,
            message: 'Quote request submitted successfully. We will send you a proposal within 48 hours!',
            data: {
                id: quoteRequest._id,
            },
        });
    } catch (error) {
        next(error);
    }
};

/**
 * Get all quote requests (admin)
 */
exports.getAllQuoteRequests = async (req, res, next) => {
    try {
        const { status, page = 1, limit = 20 } = req.query;

        const query = {};
        if (status) query.status = status;

        const quoteRequests = await CustomQuote.find(query)
            .sort({ createdAt: -1 })
            .skip((page - 1) * limit)
            .limit(parseInt(limit, 10));

        const total = await CustomQuote.countDocuments(query);

        res.status(200).json({
            success: true,
            data: quoteRequests,
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
 * Get quote request by ID
 */
exports.getQuoteRequestById = async (req, res, next) => {
    try {
        const quoteRequest = await CustomQuote.findById(req.params.id);

        if (!quoteRequest) {
            return res.status(404).json({
                success: false,
                message: 'Quote request not found',
            });
        }

        res.status(200).json({
            success: true,
            data: quoteRequest,
        });
    } catch (error) {
        next(error);
    }
};

/**
 * Update quote request status
 */
exports.updateQuoteStatus = async (req, res, next) => {
    try {
        const { status, notes, proposalSent, proposalDate, quotedAmount } = req.body;

        const quoteRequest = await CustomQuote.findByIdAndUpdate(
            req.params.id,
            { status, notes, proposalSent, proposalDate, quotedAmount },
            { new: true, runValidators: true }
        );

        if (!quoteRequest) {
            return res.status(404).json({
                success: false,
                message: 'Quote request not found',
            });
        }

        res.status(200).json({
            success: true,
            message: 'Quote request status updated',
            data: quoteRequest,
        });
    } catch (error) {
        next(error);
    }
};
