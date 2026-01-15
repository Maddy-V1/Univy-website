/**
 * Demo Request API Routes - Single Request
 * GET /api/demo/:id - Get demo request by ID
 * PUT /api/demo/:id - Update demo request status
 */

import { apiHandler, ApiError } from '@/lib/apiHandler';
import { connectDB } from '@/lib/db';
import DemoRequest from '@/models/DemoRequest';

async function handler(req, res) {
  await connectDB();
  const { id } = req.query;

  if (req.method === 'GET') {
    return getDemoRequestById(req, res, id);
  } else if (req.method === 'PUT') {
    return updateDemoStatus(req, res, id);
  }

  throw new ApiError(405, 'Method not allowed');
}

async function getDemoRequestById(req, res, id) {
  const demoRequest = await DemoRequest.findById(id);

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
}

async function updateDemoStatus(req, res, id) {
  const { status, notes, demoDate, followedUp } = req.body;

  const demoRequest = await DemoRequest.findByIdAndUpdate(
    id,
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
}

export default apiHandler(handler);
