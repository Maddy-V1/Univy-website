/**
 * API Handler Wrapper for Vercel Serverless
 * Provides consistent error handling and CORS
 */

export function apiHandler(handler) {
  return async (req, res) => {
    // Handle CORS preflight
    if (req.method === 'OPTIONS') {
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
      res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
      return res.status(200).end();
    }

    try {
      await handler(req, res);
    } catch (error) {
      console.error('API Error:', error);

      const statusCode = error.statusCode || 500;
      const message = error.message || 'Internal server error';

      res.status(statusCode).json({
        success: false,
        message,
        ...(process.env.NODE_ENV === 'development' && { stack: error.stack }),
      });
    }
  };
}

export class ApiError extends Error {
  constructor(statusCode, message) {
    super(message);
    this.statusCode = statusCode;
  }
}
