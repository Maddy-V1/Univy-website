/**
 * Validation Middleware
 * Handles express-validator results
 */

const { validationResult } = require('express-validator');

/**
 * Validate request and return errors if any
 */
const validate = (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        const formattedErrors = errors.array().map(err => ({
            field: err.path,
            message: err.msg,
            value: err.value,
        }));

        return res.status(400).json({
            success: false,
            message: 'Validation failed',
            errors: formattedErrors,
        });
    }

    next();
};

module.exports = { validate };
