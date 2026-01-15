/**
 * Health Check API
 */

import { apiHandler } from '@/lib/apiHandler';
import { connectDB } from '@/lib/db';

async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  try {
    await connectDB();
    res.status(200).json({
      success: true,
      message: 'College Tech - Univy API is running!',
      timestamp: new Date().toISOString(),
      environment: process.env.NODE_ENV || 'development',
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Database connection failed',
    });
  }
}

export default apiHandler(handler);
