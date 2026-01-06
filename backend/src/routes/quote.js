/**
 * Quote Routes
 * API routes for custom quote requests
 */

const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const quoteController = require('../controllers/quoteController');
const { validate } = require('../middleware/validation');

// Validation rules
const quoteValidation = [
    body('collegeName')
        .trim()
        .notEmpty()
        .withMessage('College name is required')
        .isLength({ max: 200 })
        .withMessage('College name cannot exceed 200 characters'),
    body('collegeSize')
        .trim()
        .notEmpty()
        .withMessage('College size is required'),
    body('contactPerson')
        .trim()
        .notEmpty()
        .withMessage('Contact person name is required')
        .isLength({ max: 100 })
        .withMessage('Name cannot exceed 100 characters'),
    body('email')
        .trim()
        .notEmpty()
        .withMessage('Email is required')
        .isEmail()
        .withMessage('Please provide a valid email')
        .normalizeEmail(),
    body('phone')
        .trim()
        .notEmpty()
        .withMessage('Phone number is required'),
    body('selectedServices')
        .isArray({ min: 1 })
        .withMessage('At least one service must be selected'),
    body('additionalRequirements')
        .optional()
        .trim()
        .isLength({ max: 2000 })
        .withMessage('Additional requirements cannot exceed 2000 characters'),
];

/**
 * @route   POST /api/quote
 * @desc    Submit custom quote request
 * @access  Public
 */
router.post('/', quoteValidation, validate, quoteController.submitQuoteRequest);

/**
 * @route   GET /api/quote
 * @desc    Get all quote requests (admin)
 * @access  Private (TODO: Add auth middleware)
 */
router.get('/', quoteController.getAllQuoteRequests);

/**
 * @route   GET /api/quote/:id
 * @desc    Get single quote request by ID
 * @access  Private (TODO: Add auth middleware)
 */
router.get('/:id', quoteController.getQuoteRequestById);

/**
 * @route   PUT /api/quote/:id/status
 * @desc    Update quote request status
 * @access  Private (TODO: Add auth middleware)
 */
router.put('/:id/status', quoteController.updateQuoteStatus);

module.exports = router;
