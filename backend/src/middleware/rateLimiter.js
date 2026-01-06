/**
 * Rate Limiter Middleware
 * Prevents abuse and DDoS attacks
 */

const rateLimit = require('express-rate-limit');

/**
 * General API rate limiter
 * 100 requests per 15 minutes per IP
 */
const apiLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // Limit each IP to 100 requests per windowMs
    message: {
        success: false,
        message: 'Too many requests from this IP, please try again after 15 minutes',
    },
    standardHeaders: true, // Return rate limit info in headers
    legacyHeaders: false, // Disable X-RateLimit-* headers
});

/**
 * Stricter rate limiter for form submissions
 * 10 requests per hour per IP
 */
const formLimiter = rateLimit({
    windowMs: 60 * 60 * 1000, // 1 hour
    max: 10, // Limit each IP to 10 form submissions per hour
    message: {
        success: false,
        message: 'Too many form submissions from this IP, please try again after an hour',
    },
    standardHeaders: true,
    legacyHeaders: false,
});

/**
 * Very strict limiter for authentication (if needed later)
 * 5 requests per 15 minutes per IP
 */
const authLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 5,
    message: {
        success: false,
        message: 'Too many login attempts, please try again after 15 minutes',
    },
    standardHeaders: true,
    legacyHeaders: false,
});

module.exports = {
    apiLimiter,
    formLimiter,
    authLimiter,
};
