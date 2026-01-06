/**
 * Demo Routes
 * API routes for demo requests
 */

const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const demoController = require('../controllers/demoController');
const { validate } = require('../middleware/validation');

// Validation rules
const demoValidation = [
    body('collegeName')
        .trim()
        .notEmpty()
        .withMessage('College name is required')
        .isLength({ max: 200 })
        .withMessage('College name cannot exceed 200 characters'),
    body('collegeType')
        .notEmpty()
        .withMessage('College type is required')
        .isIn([
            'Engineering',
            'Arts & Science',
            'Commerce',
            'Management',
            'Medical',
            'Multi-disciplinary',
            'Other',
        ])
        .withMessage('Invalid college type'),
    body('collegeSize')
        .notEmpty()
        .withMessage('College size is required')
        .isIn([
            '<500 students',
            '500-1000 students',
            '1000-3000 students',
            '3000-5000 students',
            '5000+ students',
        ])
        .withMessage('Invalid college size'),
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
    body('currentChallenge')
        .optional()
        .trim()
        .isLength({ max: 1000 })
        .withMessage('Current challenge cannot exceed 1000 characters'),
];

/**
 * @route   POST /api/demo
 * @desc    Submit demo request
 * @access  Public
 */
router.post('/', demoValidation, validate, demoController.submitDemoRequest);

/**
 * @route   GET /api/demo
 * @desc    Get all demo requests (admin)
 * @access  Private (TODO: Add auth middleware)
 */
router.get('/', demoController.getAllDemoRequests);

/**
 * @route   GET /api/demo/:id
 * @desc    Get single demo request by ID
 * @access  Private (TODO: Add auth middleware)
 */
router.get('/:id', demoController.getDemoRequestById);

/**
 * @route   PUT /api/demo/:id/status
 * @desc    Update demo request status
 * @access  Private (TODO: Add auth middleware)
 */
router.put('/:id/status', demoController.updateDemoStatus);

module.exports = router;
