/**
 * Quote Request API Routes - Single Request
 * GET /api/quote/:id - Get quote request by ID
 * PUT /api/quote/:id - Update quote request status
 */

import { apiHandler, ApiError } from '@/lib/apiHandler';
import { connectDB } from '@/lib/db';
import CustomQuote from '@/models/CustomQuote';

async function handler(req, res) {
  await connectDB();
  const { id } = req.query;

  if (req.method === 'GET') {
    return getQuoteRequestById(req, res, id);
  } else if (req.method === 'PUT') {
    return updateQuoteStatus(req, res, id);
  }

  throw new ApiError(405, 'Method not allowed');
}

async function getQuoteRequestById(req, res, id) {
  const quoteRequest = await CustomQuote.findById(id);

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
}

async function updateQuoteStatus(req, res, id) {
  const { status, notes, proposalSent, proposalDate, quotedAmount } = req.body;

  const quoteRequest = await CustomQuote.findByIdAndUpdate(
    id,
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
}

export default apiHandler(handler);
