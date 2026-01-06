/**
 * Contact Routes
 * API routes for contact form
 */

const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const contactController = require('../controllers/contactController');
const { validate } = require('../middleware/validation');

// Validation rules
const contactValidation = [
    body('name')
        .trim()
        .notEmpty()
        .withMessage('Name is required')
        .isLength({ min: 2, max: 100 })
        .withMessage('Name must be between 2 and 100 characters'),
    body('collegeName')
        .trim()
        .notEmpty()
        .withMessage('College name is required')
        .isLength({ min: 3, max: 200 })
        .withMessage('College name must be between 3 and 200 characters'),
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
    body('role')
        .optional()
        .trim()
        .isLength({ max: 100 })
        .withMessage('Role cannot exceed 100 characters'),
    body('message')
        .optional()
        .trim()
        .isLength({ max: 1000 })
        .withMessage('Message cannot exceed 1000 characters'),
];

/**
 * @route   POST /api/contact
 * @desc    Submit contact form
 * @access  Public
 */
router.post('/', contactValidation, validate, contactController.submitContact);

/**
 * @route   GET /api/contact
 * @desc    Get all contact submissions (admin)
 * @access  Private (TODO: Add auth middleware)
 */
router.get('/', contactController.getAllContacts);

/**
 * @route   GET /api/contact/:id
 * @desc    Get single contact by ID
 * @access  Private (TODO: Add auth middleware)
 */
router.get('/:id', contactController.getContactById);

/**
 * @route   PUT /api/contact/:id/status
 * @desc    Update contact status
 * @access  Private (TODO: Add auth middleware)
 */
router.put('/:id/status', contactController.updateContactStatus);

module.exports = router;
