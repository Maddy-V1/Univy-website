/**
 * Email Utility
 * Send emails using Nodemailer
 */

const nodemailer = require('nodemailer');
const env = require('../config/env');
const logger = require('./logger');

// Create transporter
let transporter = null;

/**
 * Initialize email transporter
 */
const initTransporter = () => {
    if (transporter) return transporter;

    // Check if email credentials are configured
    if (!env.emailUser || !env.emailPass) {
        logger.warn('Email credentials not configured. Email sending disabled.');
        return null;
    }

    transporter = nodemailer.createTransport({
        host: env.emailHost,
        port: env.emailPort,
        secure: env.emailPort === 465, // true for 465, false for other ports
        auth: {
            user: env.emailUser,
            pass: env.emailPass,
        },
    });

    // Verify connection
    transporter.verify((error, success) => {
        if (error) {
            logger.error('Email transporter verification failed:', error.message);
        } else {
            logger.info('Email transporter ready');
        }
    });

    return transporter;
};

/**
 * Send email
 * @param {Object} options - Email options
 * @param {string} options.to - Recipient email
 * @param {string} options.subject - Email subject
 * @param {string} options.html - HTML content
 * @param {string} [options.text] - Plain text content (optional)
 * @param {string} [options.from] - Sender email (optional, defaults to config)
 */
const sendEmail = async ({ to, subject, html, text, from }) => {
    const transport = initTransporter();

    if (!transport) {
        logger.warn(`Email not sent (no transporter): ${subject} to ${to}`);
        // In development, just log and return success
        if (env.nodeEnv === 'development') {
            logger.info('Development mode: Email would have been sent');
            return { success: true, message: 'Email skipped (development mode)' };
        }
        throw new Error('Email service not configured');
    }

    const mailOptions = {
        from: from || `"College Tech - Univy" <${env.emailUser}>`,
        to,
        subject,
        html,
        text: text || html.replace(/<[^>]*>/g, ''), // Strip HTML for plain text
    };

    try {
        const info = await transport.sendMail(mailOptions);
        logger.info(`Email sent: ${subject} to ${to} (${info.messageId})`);
        return { success: true, messageId: info.messageId };
    } catch (error) {
        logger.error(`Email failed: ${subject} to ${to} - ${error.message}`);
        throw error;
    }
};

/**
 * Send admin notification
 * @param {string} subject - Email subject
 * @param {string} html - HTML content
 */
const notifyAdmin = async (subject, html) => {
    return sendEmail({
        to: env.adminEmail,
        subject: `[Univy Admin] ${subject}`,
        html,
    });
};

module.exports = {
    sendEmail,
    notifyAdmin,
    initTransporter,
};
