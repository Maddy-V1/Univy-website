/**
 * Error Handler Middleware
 * Centralized error handling
 */

const logger = require('../utils/logger');
const env = require('../config/env');

/**
 * 404 Not Found handler
 */
const notFound = (req, res, next) => {
    const error = new Error(`Not Found - ${req.originalUrl}`);
    res.status(404);
    next(error);
};

/**
 * Global error handler
 */
const errorHandler = (err, req, res, next) => {
    // Log the error
    logger.error(`Error: ${err.message}`, {
        stack: err.stack,
        path: req.path,
        method: req.method,
    });

    // Determine status code
    let statusCode = res.statusCode === 200 ? 500 : res.statusCode;

    // Handle specific error types
    if (err.name === 'ValidationError') {
        statusCode = 400;
    } else if (err.name === 'CastError') {
        statusCode = 400;
        err.message = 'Invalid ID format';
    } else if (err.code === 11000) {
        // MongoDB duplicate key error
        statusCode = 400;
        err.message = 'Duplicate field value entered';
    }

    // Send error response
    res.status(statusCode).json({
        success: false,
        message: err.message,
        ...(env.nodeEnv === 'development' && {
            stack: err.stack,
            error: err,
        }),
    });
};

module.exports = {
    notFound,
    errorHandler,
};
