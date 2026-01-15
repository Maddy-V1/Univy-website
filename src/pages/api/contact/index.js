/**
 * Contact API Routes
 * POST /api/contact - Submit contact form
 * GET /api/contact - Get all contacts (admin)
 */

import { apiHandler, ApiError } from '@/lib/apiHandler';
import { connectDB } from '@/lib/db';
import { sendEmail } from '@/lib/email';
import { validateContactForm } from '@/lib/validation';
import Contact from '@/models/Contact';

async function handler(req, res) {
  await connectDB();

  if (req.method === 'POST') {
    return submitContact(req, res);
  } else if (req.method === 'GET') {
    return getAllContacts(req, res);
  }

  throw new ApiError(405, 'Method not allowed');
}

async function submitContact(req, res) {
  const errors = validateContactForm(req.body);
  if (errors.length > 0) {
    return res.status(400).json({
      success: false,
      message: 'Validation failed',
      errors,
    });
  }

  const { name, collegeName, role, email, phone, message } = req.body;

  const contact = new Contact({
    name,
    collegeName,
    role,
    email,
    phone,
    message,
    ipAddress: req.headers['x-forwarded-for'] || req.socket?.remoteAddress,
    userAgent: req.headers['user-agent'],
  });

  await contact.save();

  // Send notification emails (non-blocking)
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://univy.in';

  try {
    await sendEmail({
      to: process.env.ADMIN_EMAIL,
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
  } catch (e) {
    console.error('Admin email failed:', e.message);
  }

  try {
    await sendEmail({
      to: email,
      subject: 'Thank you for contacting Univy!',
      html: `
        <h2>Thank you for reaching out, ${name}!</h2>
        <p>We've received your message and will get back to you within 24 hours.</p>
        <p>In the meantime, feel free to explore our <a href="${siteUrl}/services">services</a>.</p>
        <hr>
        <p>Best regards,<br>The Univy Team</p>
      `,
    });
  } catch (e) {
    console.error('Confirmation email failed:', e.message);
  }

  res.status(201).json({
    success: true,
    message: 'Contact form submitted successfully. We will get back to you soon!',
    data: { id: contact._id },
  });
}

async function getAllContacts(req, res) {
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
}

export default apiHandler(handler);
