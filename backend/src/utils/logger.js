/**
 * Logger Utility
 * Centralized logging for the application
 */

const env = require('../config/env');

// ANSI color codes for console output
const colors = {
    reset: '\x1b[0m',
    red: '\x1b[31m',
    green: '\x1b[32m',
    yellow: '\x1b[33m',
    blue: '\x1b[34m',
    magenta: '\x1b[35m',
    cyan: '\x1b[36m',
    gray: '\x1b[90m',
};

/**
 * Format timestamp
 */
const getTimestamp = () => {
    return new Date().toISOString();
};

/**
 * Format log message
 */
const formatMessage = (level, message, meta = {}) => {
    const timestamp = getTimestamp();
    const metaStr = Object.keys(meta).length ? JSON.stringify(meta) : '';
    return `[${timestamp}] [${level.toUpperCase()}] ${message} ${metaStr}`;
};

/**
 * Logger object with different log levels
 */
const logger = {
    /**
     * Info level - general information
     */
    info: (message, meta = {}) => {
        const formatted = formatMessage('info', message, meta);
        console.log(`${colors.green}${formatted}${colors.reset}`);
    },

    /**
     * Warn level - warnings
     */
    warn: (message, meta = {}) => {
        const formatted = formatMessage('warn', message, meta);
        console.warn(`${colors.yellow}${formatted}${colors.reset}`);
    },

    /**
     * Error level - errors
     */
    error: (message, meta = {}) => {
        const formatted = formatMessage('error', message, meta);
        console.error(`${colors.red}${formatted}${colors.reset}`);
    },

    /**
     * Debug level - only in development
     */
    debug: (message, meta = {}) => {
        if (env.nodeEnv === 'development') {
            const formatted = formatMessage('debug', message, meta);
            console.log(`${colors.cyan}${formatted}${colors.reset}`);
        }
    },

    /**
     * HTTP level - for request logging
     */
    http: (message, meta = {}) => {
        const formatted = formatMessage('http', message, meta);
        console.log(`${colors.magenta}${formatted}${colors.reset}`);
    },
};

module.exports = logger;
