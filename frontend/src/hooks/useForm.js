/**
 * College Tech - Univy Custom Form Hook
 * Reusable form handling with validation
 */

import { useState, useCallback } from 'react';

/**
 * Custom hook for handling form state and validation
 * @param {Object} initialValues - Initial form values
 * @param {Function} validate - Validation function that returns errors object
 * @param {Function} onSubmit - Submit handler function
 * @returns {Object} Form state and handlers
 */
export const useForm = (initialValues, validate, onSubmit) => {
    const [values, setValues] = useState(initialValues);
    const [errors, setErrors] = useState({});
    const [touched, setTouched] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitError, setSubmitError] = useState(null);
    const [submitSuccess, setSubmitSuccess] = useState(false);

    /**
     * Handle input change
     */
    const handleChange = useCallback((e) => {
        const { name, value, type, checked } = e.target;

        setValues((prev) => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value,
        }));

        // Clear error when user starts typing
        if (errors[name]) {
            setErrors((prev) => {
                const newErrors = { ...prev };
                delete newErrors[name];
                return newErrors;
            });
        }
    }, [errors]);

    /**
     * Handle value change (for custom components)
     */
    const setValue = useCallback((name, value) => {
        setValues((prev) => ({
            ...prev,
            [name]: value,
        }));
    }, []);

    /**
     * Handle input blur (for validation)
     */
    const handleBlur = useCallback((e) => {
        const { name } = e.target;

        setTouched((prev) => ({
            ...prev,
            [name]: true,
        }));

        // Validate single field
        if (validate) {
            const validationErrors = validate(values);
            if (validationErrors[name]) {
                setErrors((prev) => ({
                    ...prev,
                    [name]: validationErrors[name],
                }));
            }
        }
    }, [values, validate]);

    /**
     * Handle form submission
     */
    const handleSubmit = useCallback(async (e) => {
        if (e) {
            e.preventDefault();
        }

        setSubmitError(null);
        setSubmitSuccess(false);

        // Validate all fields
        if (validate) {
            const validationErrors = validate(values);

            if (Object.keys(validationErrors).length > 0) {
                setErrors(validationErrors);
                // Mark all fields as touched
                const allTouched = Object.keys(values).reduce((acc, key) => {
                    acc[key] = true;
                    return acc;
                }, {});
                setTouched(allTouched);
                return;
            }
        }

        setIsSubmitting(true);

        try {
            await onSubmit(values);
            setSubmitSuccess(true);
            // Reset form on success
            setValues(initialValues);
            setTouched({});
            setErrors({});
        } catch (error) {
            setSubmitError(error.message || 'Something went wrong. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    }, [values, validate, onSubmit, initialValues]);

    /**
     * Reset form to initial state
     */
    const resetForm = useCallback(() => {
        setValues(initialValues);
        setErrors({});
        setTouched({});
        setIsSubmitting(false);
        setSubmitError(null);
        setSubmitSuccess(false);
    }, [initialValues]);

    /**
     * Set form values (for pre-filling)
     */
    const setFormValues = useCallback((newValues) => {
        setValues((prev) => ({
            ...prev,
            ...newValues,
        }));
    }, []);

    /**
     * Get field props for easy spreading
     */
    const getFieldProps = useCallback((name) => ({
        name,
        value: values[name] || '',
        onChange: handleChange,
        onBlur: handleBlur,
    }), [values, handleChange, handleBlur]);

    /**
     * Check if field has error
     */
    const hasError = useCallback((name) => {
        return touched[name] && errors[name];
    }, [touched, errors]);

    /**
     * Get error message for field
     */
    const getError = useCallback((name) => {
        return touched[name] ? errors[name] : null;
    }, [touched, errors]);

    return {
        // State
        values,
        errors,
        touched,
        isSubmitting,
        submitError,
        submitSuccess,

        // Handlers
        handleChange,
        handleBlur,
        handleSubmit,
        resetForm,
        setValue,
        setFormValues,

        // Utilities
        getFieldProps,
        hasError,
        getError,
    };
};

/**
 * Common validation rules
 */
export const validators = {
    required: (value, fieldName = 'This field') => {
        if (!value || (typeof value === 'string' && !value.trim())) {
            return `${fieldName} is required`;
        }
        return null;
    },

    email: (value) => {
        if (!value) return null;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
            return 'Please enter a valid email address';
        }
        return null;
    },

    phone: (value) => {
        if (!value) return null;
        const phoneRegex = /^[+]?[(]?[0-9]{1,4}[)]?[-\s./0-9]*$/;
        if (!phoneRegex.test(value) || value.replace(/\D/g, '').length < 10) {
            return 'Please enter a valid phone number';
        }
        return null;
    },

    minLength: (value, min, fieldName = 'This field') => {
        if (!value) return null;
        if (value.length < min) {
            return `${fieldName} must be at least ${min} characters`;
        }
        return null;
    },

    maxLength: (value, max, fieldName = 'This field') => {
        if (!value) return null;
        if (value.length > max) {
            return `${fieldName} must be less than ${max} characters`;
        }
        return null;
    },
};

export default useForm;
