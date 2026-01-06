/**
 * Contact Controller
 * Handles contact form submissions
 */

const Contact = require('../models/Contact');
const { sendEmail } = require('../utils/email');
const logger = require('../utils/logger');
const env = require('../config/env');

/**
 * Submit contact form
 */
exports.submitContact = async (req, res, next) => {
    try {
        const { name, collegeName, role, email, phone, message } = req.body;

        // Create contact record
        const contact = new Contact({
            name,
            collegeName,
            role,
            email,
            phone,
            message,
            ipAddress: req.ip,
            userAgent: req.get('User-Agent'),
        });

        await contact.save();

        // Send notification email to admin
        try {
            await sendEmail({
                to: env.adminEmail,
                subject: `New Contact Form Submission - ${collegeName}`,
                html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>College:</strong> ${collegeName}</p>
          <p><strong>Role:</strong> ${role || 'Not specified'}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Message:</strong> ${message || 'No message'}</p>
          <hr>
          <p><small>Submitted at: ${new Date().toLocaleString()}</small></p>
        `,
            });
        } catch (emailError) {
            // Log email error but don't fail the request
            logger.error('Failed to send admin notification email:', emailError.message);
        }

        // Send confirmation email to user
        try {
            await sendEmail({
                to: email,
                subject: 'Thank you for contacting Univy!',
                html: `
          <h2>Thank you for reaching out, ${name}!</h2>
          <p>We've received your message and will get back to you within 24 hours.</p>
          <p>In the meantime, feel free to explore our <a href="${env.frontendUrl}/services">services</a>.</p>
          <hr>
          <p>Best regards,<br>The Univy Team</p>
        `,
            });
        } catch (emailError) {
            logger.error('Failed to send confirmation email:', emailError.message);
        }

        logger.info(`New contact submission from ${email}`);

        res.status(201).json({
            success: true,
            message: 'Contact form submitted successfully. We will get back to you soon!',
            data: {
                id: contact._id,
            },
        });
    } catch (error) {
        next(error);
    }
};

/**
 * Get all contacts (admin)
 */
exports.getAllContacts = async (req, res, next) => {
    try {
        const { status, page = 1, limit = 20 } = req.query;

        const query = {};
        if (status) query.status = status;

        const contacts = await Contact.find(query)
            .sort({ createdAt: -1 })
            .skip((page - 1) * limit)
            .limit(parseInt(limit, 10));

        const total = await Contact.countDocuments(query);

        res.status(200).json({
            success: true,
            data: contacts,
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
 * Get contact by ID
 */
exports.getContactById = async (req, res, next) => {
    try {
        const contact = await Contact.findById(req.params.id);

        if (!contact) {
            return res.status(404).json({
                success: false,
                message: 'Contact not found',
            });
        }

        res.status(200).json({
            success: true,
            data: contact,
        });
    } catch (error) {
        next(error);
    }
};

/**
 * Update contact status
 */
exports.updateContactStatus = async (req, res, next) => {
    try {
        const { status, notes } = req.body;

        const contact = await Contact.findByIdAndUpdate(
            req.params.id,
            { status, notes },
            { new: true, runValidators: true }
        );

        if (!contact) {
            return res.status(404).json({
                success: false,
                message: 'Contact not found',
            });
        }

        res.status(200).json({
            success: true,
            message: 'Contact status updated',
            data: contact,
        });
    } catch (error) {
        next(error);
    }
};
