/**
 * Quote Request API Routes
 * POST /api/quote - Submit quote request
 * GET /api/quote - Get all quote requests (admin)
 */

import { apiHandler, ApiError } from '@/lib/apiHandler';
import { connectDB } from '@/lib/db';
import { sendEmail } from '@/lib/email';
import { validateQuoteForm } from '@/lib/validation';
import CustomQuote from '@/models/CustomQuote';

async function handler(req, res) {
  await connectDB();

  if (req.method === 'POST') {
    return submitQuoteRequest(req, res);
  } else if (req.method === 'GET') {
    return getAllQuoteRequests(req, res);
  }

  throw new ApiError(405, 'Method not allowed');
}

async function submitQuoteRequest(req, res) {
  const errors = validateQuoteForm(req.body);
  if (errors.length > 0) {
    return res.status(400).json({
      success: false,
      message: 'Validation failed',
      errors,
    });
  }

  const quoteData = {
    ...req.body,
    ipAddress: req.headers['x-forwarded-for'] || req.socket?.remoteAddress,
    userAgent: req.headers['user-agent'],
  };

  const quoteRequest = new CustomQuote(quoteData);
  await quoteRequest.save();

  // Send admin notification
  try {
    await sendEmail({
      to: process.env.ADMIN_EMAIL,
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
        
        <hr>
        <p><strong>Action Required:</strong> Prepare and send proposal!</p>
      `,
    });
  } catch (e) {
    console.error('Admin email failed:', e.message);
  }

  // Send confirmation to user
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
  } catch (e) {
    console.error('Confirmation email failed:', e.message);
  }

  res.status(201).json({
    success: true,
    message: 'Quote request submitted successfully. We will send you a proposal within 48 hours!',
    data: { id: quoteRequest._id },
  });
}

async function getAllQuoteRequests(req, res) {
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
}

export default apiHandler(handler);
