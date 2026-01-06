/**
 * Express Server Entry Point
 * Main application configuration and startup
 */

const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

// Import configuration
const { connectDatabase } = require('./config/database');
const env = require('./config/env');

// Import middleware
const { errorHandler, notFound } = require('./middleware/errorHandler');
const { apiLimiter } = require('./middleware/rateLimiter');

// Import routes
const contactRoutes = require('./routes/contact');
const demoRoutes = require('./routes/demo');
const quoteRoutes = require('./routes/quote');

// Import logger
const logger = require('./utils/logger');

// Initialize Express app
const app = express();

// ===========================================
// MIDDLEWARE CONFIGURATION
// ===========================================

// Security headers
app.use(helmet());

// CORS configuration
app.use(cors({
    origin: env.frontendUrl,
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
}));

// Request parsing
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// HTTP request logging
if (env.nodeEnv === 'development') {
    app.use(morgan('dev'));
} else {
    app.use(morgan('combined'));
}

// Rate limiting (apply to all API routes)
app.use('/api', apiLimiter);

// ===========================================
// ROUTES
// ===========================================

// Health check endpoint
app.get('/api/health', (req, res) => {
    res.status(200).json({
        success: true,
        message: 'College Tech - Univy API is running!',
        timestamp: new Date().toISOString(),
        environment: env.nodeEnv,
    });
});

// API routes
app.use('/api/contact', contactRoutes);
app.use('/api/demo', demoRoutes);
app.use('/api/quote', quoteRoutes);

// Root endpoint
app.get('/', (req, res) => {
    res.json({
        name: 'College Tech - Univy API',
        version: '1.0.0',
        status: 'running',
        documentation: '/api/health',
    });
});

// ===========================================
// ERROR HANDLING
// ===========================================

// 404 handler
app.use(notFound);

// Global error handler
app.use(errorHandler);

// ===========================================
// SERVER STARTUP
// ===========================================

const PORT = env.port;

const startServer = async () => {
    try {
        // Connect to MongoDB
        await connectDatabase();
        logger.info('✅ Connected to MongoDB');

        // Start server
        app.listen(PORT, () => {
            logger.info(`🚀 Server running on port ${PORT}`);
            logger.info(`📍 Environment: ${env.nodeEnv}`);
            logger.info(`🌐 Frontend URL: ${env.frontendUrl}`);
            logger.info(`📡 API Health: http://localhost:${PORT}/api/health`);
        });
    } catch (error) {
        logger.error('❌ Failed to start server:', error.message);
        process.exit(1);
    }
};

// Handle unhandled promise rejections
process.on('unhandledRejection', (err) => {
    logger.error('Unhandled Promise Rejection:', err);
    // Close server and exit
    process.exit(1);
});

// Handle uncaught exceptions
process.on('uncaughtException', (err) => {
    logger.error('Uncaught Exception:', err);
    process.exit(1);
});

// Start the server
startServer();

module.exports = app;
