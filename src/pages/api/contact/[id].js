/**
 * Contact API Routes - Single Contact
 * GET /api/contact/:id - Get contact by ID
 * PUT /api/contact/:id - Update contact status
 */

import { apiHandler, ApiError } from '@/lib/apiHandler';
import { connectDB } from '@/lib/db';
import Contact from '@/models/Contact';

async function handler(req, res) {
  await connectDB();
  const { id } = req.query;

  if (req.method === 'GET') {
    return getContactById(req, res, id);
  } else if (req.method === 'PUT') {
    return updateContactStatus(req, res, id);
  }

  throw new ApiError(405, 'Method not allowed');
}

async function getContactById(req, res, id) {
  const contact = await Contact.findById(id);

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
}

async function updateContactStatus(req, res, id) {
  const { status, notes } = req.body;

  const contact = await Contact.findByIdAndUpdate(
    id,
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
}

export default apiHandler(handler);
