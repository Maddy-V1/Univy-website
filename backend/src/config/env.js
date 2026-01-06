/**
 * Environment Configuration
 * Centralized environment variable management
 */

require('dotenv').config();

const env = {
    // Server
    port: process.env.PORT || 5000,
    nodeEnv: process.env.NODE_ENV || 'development',

    // Database
    mongodbUri: process.env.MONGODB_URI || 'mongodb://localhost:27017/college-tech-univy',

    // Email
    emailHost: process.env.EMAIL_HOST || 'smtp.gmail.com',
    emailPort: parseInt(process.env.EMAIL_PORT, 10) || 587,
    emailUser: process.env.EMAIL_USER || '',
    emailPass: process.env.EMAIL_PASS || '',

    // Admin
    adminEmail: process.env.ADMIN_EMAIL || 'admin@univy.com',
    adminName: process.env.ADMIN_NAME || 'Univy Admin',

    // CORS
    frontendUrl: process.env.FRONTEND_URL || 'http://localhost:3000',

    // Security
    jwtSecret: process.env.JWT_SECRET || 'default-secret-change-in-production',
};

// Validate required environment variables in production
if (env.nodeEnv === 'production') {
    const required = ['MONGODB_URI', 'EMAIL_USER', 'EMAIL_PASS', 'JWT_SECRET'];
    const missing = required.filter(key => !process.env[key]);

    if (missing.length > 0) {
        throw new Error(`Missing required environment variables: ${missing.join(', ')}`);
    }
}

module.exports = env;
