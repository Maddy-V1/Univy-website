/**
 * Demo Request API Routes
 * POST /api/demo - Submit demo request
 * GET /api/demo - Get all demo requests (admin)
 */

import { apiHandler, ApiError } from '@/lib/apiHandler';
import { connectDB } from '@/lib/db';
import { sendEmail } from '@/lib/email';
import { validateDemoForm } from '@/lib/validation';
import DemoRequest from '@/models/DemoRequest';

async function handler(req, res) {
  await connectDB();

  if (req.method === 'POST') {
    return submitDemoRequest(req, res);
  } else if (req.method === 'GET') {
    return getAllDemoRequests(req, res);
  }

  throw new ApiError(405, 'Method not allowed');
}

async function submitDemoRequest(req, res) {
  const errors = validateDemoForm(req.body);
  if (errors.length > 0) {
    return res.status(400).json({
      success: false,
      message: 'Validation failed',
      errors,
    });
  }

  const demoData = {
    ...req.body,
    ipAddress: req.headers['x-forwarded-for'] || req.socket?.remoteAddress,
    userAgent: req.headers['user-agent'],
  };

  const demoRequest = new DemoRequest(demoData);
  await demoRequest.save();

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://univy.in';

  // Send admin notification
  try {
    await sendEmail({
      to: process.env.ADMIN_EMAIL,
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
      `,
    });
  } catch (e) {
    console.error('Admin email failed:', e.message);
  }

  // Send confirmation to user
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
        
        <p>In the meantime, explore our <a href="${siteUrl}/services">services</a> and <a href="${siteUrl}/pricing">pricing</a>.</p>
        
        <hr>
        <p>Best regards,<br>The Univy Team</p>
      `,
    });
  } catch (e) {
    console.error('Confirmation email failed:', e.message);
  }

  res.status(201).json({
    success: true,
    message: 'Demo request submitted successfully. Our team will contact you within 24 hours!',
    data: { id: demoRequest._id },
  });
}

async function getAllDemoRequests(req, res) {
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
}

export default apiHandler(handler);
