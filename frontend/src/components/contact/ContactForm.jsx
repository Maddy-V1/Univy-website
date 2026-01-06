/**
 * ContactForm Component
 * Multi-purpose contact/demo request form
 */

import { useState } from 'react';
import { FaPaperPlane, FaCheckCircle, FaExclamationCircle } from 'react-icons/fa';
import Button from '../common/Button';
import { useForm, validators } from '../../hooks/useForm';
import { submitContact, submitDemoRequest } from '../../utils/api';
import { COLLEGE_TYPES, COLLEGE_SIZES, URGENCY_OPTIONS, CONTACT_METHODS } from '../../utils/constants';

const formStyles = {
    form: {
        background: 'rgba(255, 255, 255, 0.9)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        border: '1px solid rgba(255, 255, 255, 0.3)',
        borderRadius: 'var(--radius-2xl)',
        padding: 'var(--space-10)',
        boxShadow: 'var(--shadow-xl)',
    },
    title: {
        fontFamily: 'var(--font-display)',
        fontSize: 'var(--text-2xl)',
        fontWeight: 'var(--font-bold)',
        color: 'var(--neutral-900)',
        marginBottom: 'var(--space-2)',
        textAlign: 'center',
    },
    subtitle: {
        fontSize: 'var(--text-base)',
        color: 'var(--neutral-600)',
        textAlign: 'center',
        marginBottom: 'var(--space-8)',
    },
    row: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: 'var(--space-4)',
    },
    group: {
        marginBottom: 'var(--space-5)',
    },
    label: {
        display: 'block',
        marginBottom: 'var(--space-2)',
        fontWeight: 'var(--font-medium)',
        color: 'var(--neutral-700)',
        fontSize: 'var(--text-sm)',
    },
    required: {
        color: '#DC2626',
        marginLeft: '2px',
    },
    input: {
        width: '100%',
        padding: 'var(--space-4)',
        border: '2px solid var(--neutral-200)',
        borderRadius: 'var(--radius-md)',
        fontSize: 'var(--text-base)',
        transition: 'all var(--transition-base)',
        background: 'var(--white)',
    },
    inputFocus: {
        outline: 'none',
        borderColor: 'var(--primary-blue)',
        boxShadow: '0 0 0 4px rgba(37, 99, 235, 0.1)',
    },
    inputError: {
        borderColor: '#DC2626',
    },
    select: {
        appearance: 'none',
        backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e")`,
        backgroundPosition: 'right 0.75rem center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '1.5em 1.5em',
        paddingRight: 'var(--space-10)',
    },
    textarea: {
        minHeight: '120px',
        resize: 'vertical',
    },
    error: {
        color: '#DC2626',
        fontSize: 'var(--text-xs)',
        marginTop: 'var(--space-1)',
        display: 'flex',
        alignItems: 'center',
        gap: 'var(--space-1)',
    },
    submitBtn: {
        marginTop: 'var(--space-4)',
    },
    success: {
        textAlign: 'center',
        padding: 'var(--space-10)',
    },
    successIcon: {
        width: '80px',
        height: '80px',
        background: 'linear-gradient(135deg, #10B981 0%, #06B6D4 100%)',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '0 auto var(--space-6)',
        fontSize: '2.5rem',
        color: 'var(--white)',
    },
    successTitle: {
        fontFamily: 'var(--font-display)',
        fontSize: 'var(--text-2xl)',
        fontWeight: 'var(--font-bold)',
        color: 'var(--neutral-900)',
        marginBottom: 'var(--space-4)',
    },
    successText: {
        color: 'var(--neutral-600)',
        fontSize: 'var(--text-base)',
    },
    errorAlert: {
        background: '#FEF2F2',
        border: '1px solid #FECACA',
        borderRadius: 'var(--radius-md)',
        padding: 'var(--space-4)',
        marginBottom: 'var(--space-6)',
        display: 'flex',
        alignItems: 'center',
        gap: 'var(--space-3)',
        color: '#B91C1C',
    },
};

const ContactForm = ({ type = 'contact', title, subtitle }) => {
    const [focusedField, setFocusedField] = useState(null);

    // Initial values based on form type
    const initialValues =
        type === 'demo'
            ? {
                collegeName: '',
                collegeType: '',
                collegeSize: '',
                city: '',
                state: '',
                contactPerson: '',
                role: '',
                email: '',
                phone: '',
                interestedPlan: '',
                currentChallenge: '',
                preferredContact: '',
                urgency: '',
            }
            : {
                name: '',
                collegeName: '',
                role: '',
                email: '',
                phone: '',
                message: '',
            };

    // Validation function
    const validate = (values) => {
        const errors = {};

        if (type === 'demo') {
            if (!values.collegeName?.trim()) errors.collegeName = 'College name is required';
            if (!values.collegeType) errors.collegeType = 'Please select college type';
            if (!values.collegeSize) errors.collegeSize = 'Please select college size';
            if (!values.contactPerson?.trim()) errors.contactPerson = 'Contact person is required';
            if (!values.email?.trim()) errors.email = 'Email is required';
            else if (validators.email(values.email)) errors.email = validators.email(values.email);
            if (!values.phone?.trim()) errors.phone = 'Phone is required';
            else if (validators.phone(values.phone)) errors.phone = validators.phone(values.phone);
        } else {
            if (!values.name?.trim()) errors.name = 'Name is required';
            if (!values.collegeName?.trim()) errors.collegeName = 'College name is required';
            if (!values.email?.trim()) errors.email = 'Email is required';
            else if (validators.email(values.email)) errors.email = validators.email(values.email);
            if (!values.phone?.trim()) errors.phone = 'Phone is required';
            else if (validators.phone(values.phone)) errors.phone = validators.phone(values.phone);
        }

        return errors;
    };

    // Submit handler
    const handleFormSubmit = async (values) => {
        if (type === 'demo') {
            await submitDemoRequest(values);
        } else {
            await submitContact(values);
        }
    };

    const {
        values,
        errors,
        isSubmitting,
        submitError,
        submitSuccess,
        handleChange,
        handleBlur,
        handleSubmit,
        getError,
        resetForm,
    } = useForm(initialValues, validate, handleFormSubmit);

    const getInputStyle = (fieldName) => ({
        ...formStyles.input,
        ...(focusedField === fieldName ? formStyles.inputFocus : {}),
        ...(getError(fieldName) ? formStyles.inputError : {}),
    });

    // Success state
    if (submitSuccess) {
        return (
            <div style={formStyles.form}>
                <div style={formStyles.success}>
                    <div style={formStyles.successIcon}>
                        <FaCheckCircle />
                    </div>
                    <h3 style={formStyles.successTitle}>
                        {type === 'demo' ? 'Demo Request Received!' : 'Message Sent!'}
                    </h3>
                    <p style={formStyles.successText}>
                        {type === 'demo'
                            ? "Thank you for your interest! Our team will contact you within 24 hours to schedule your personalized demo."
                            : "Thank you for reaching out! We'll get back to you as soon as possible."}
                    </p>
                    <Button
                        variant="secondary"
                        onClick={resetForm}
                        style={{ marginTop: 'var(--space-6)' }}
                    >
                        Send Another
                    </Button>
                </div>
            </div>
        );
    }

    return (
        <form style={formStyles.form} onSubmit={handleSubmit} noValidate>
            <h2 style={formStyles.title}>
                {title || (type === 'demo' ? 'Request a Demo' : 'Get in Touch')}
            </h2>
            <p style={formStyles.subtitle}>
                {subtitle ||
                    (type === 'demo'
                        ? 'Fill in your details and we\'ll schedule a personalized demo for your college.'
                        : "Have a question? We\'d love to hear from you.")}
            </p>

            {/* Error Alert */}
            {submitError && (
                <div style={formStyles.errorAlert}>
                    <FaExclamationCircle />
                    <span>{submitError}</span>
                </div>
            )}

            {/* Contact Form Fields */}
            {type === 'contact' && (
                <>
                    <div style={formStyles.row}>
                        <div style={formStyles.group}>
                            <label style={formStyles.label}>
                                Your Name<span style={formStyles.required}>*</span>
                            </label>
                            <input
                                type="text"
                                name="name"
                                value={values.name}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                onFocus={() => setFocusedField('name')}
                                placeholder="Enter your full name"
                                style={getInputStyle('name')}
                            />
                            {getError('name') && (
                                <span style={formStyles.error}>
                                    <FaExclamationCircle /> {getError('name')}
                                </span>
                            )}
                        </div>
                        <div style={formStyles.group}>
                            <label style={formStyles.label}>
                                College Name<span style={formStyles.required}>*</span>
                            </label>
                            <input
                                type="text"
                                name="collegeName"
                                value={values.collegeName}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                onFocus={() => setFocusedField('collegeName')}
                                placeholder="Enter college name"
                                style={getInputStyle('collegeName')}
                            />
                            {getError('collegeName') && (
                                <span style={formStyles.error}>
                                    <FaExclamationCircle /> {getError('collegeName')}
                                </span>
                            )}
                        </div>
                    </div>

                    <div style={formStyles.row}>
                        <div style={formStyles.group}>
                            <label style={formStyles.label}>Your Role</label>
                            <input
                                type="text"
                                name="role"
                                value={values.role}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                onFocus={() => setFocusedField('role')}
                                placeholder="e.g., Principal, HOD, Student Cell"
                                style={getInputStyle('role')}
                            />
                        </div>
                        <div style={formStyles.group}>
                            <label style={formStyles.label}>
                                Email<span style={formStyles.required}>*</span>
                            </label>
                            <input
                                type="email"
                                name="email"
                                value={values.email}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                onFocus={() => setFocusedField('email')}
                                placeholder="your@email.com"
                                style={getInputStyle('email')}
                            />
                            {getError('email') && (
                                <span style={formStyles.error}>
                                    <FaExclamationCircle /> {getError('email')}
                                </span>
                            )}
                        </div>
                    </div>

                    <div style={formStyles.group}>
                        <label style={formStyles.label}>
                            Phone<span style={formStyles.required}>*</span>
                        </label>
                        <input
                            type="tel"
                            name="phone"
                            value={values.phone}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            onFocus={() => setFocusedField('phone')}
                            placeholder="+91 XXXXX XXXXX"
                            style={getInputStyle('phone')}
                        />
                        {getError('phone') && (
                            <span style={formStyles.error}>
                                <FaExclamationCircle /> {getError('phone')}
                            </span>
                        )}
                    </div>

                    <div style={formStyles.group}>
                        <label style={formStyles.label}>Message</label>
                        <textarea
                            name="message"
                            value={values.message}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            onFocus={() => setFocusedField('message')}
                            placeholder="Tell us how we can help..."
                            style={{ ...getInputStyle('message'), ...formStyles.textarea }}
                        />
                    </div>
                </>
            )}

            {/* Demo Form Fields */}
            {type === 'demo' && (
                <>
                    <div style={formStyles.row}>
                        <div style={formStyles.group}>
                            <label style={formStyles.label}>
                                College Name<span style={formStyles.required}>*</span>
                            </label>
                            <input
                                type="text"
                                name="collegeName"
                                value={values.collegeName}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                onFocus={() => setFocusedField('collegeName')}
                                placeholder="Enter college name"
                                style={getInputStyle('collegeName')}
                            />
                            {getError('collegeName') && (
                                <span style={formStyles.error}>
                                    <FaExclamationCircle /> {getError('collegeName')}
                                </span>
                            )}
                        </div>
                        <div style={formStyles.group}>
                            <label style={formStyles.label}>
                                College Type<span style={formStyles.required}>*</span>
                            </label>
                            <select
                                name="collegeType"
                                value={values.collegeType}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                onFocus={() => setFocusedField('collegeType')}
                                style={{ ...getInputStyle('collegeType'), ...formStyles.select }}
                            >
                                <option value="">Select type</option>
                                {COLLEGE_TYPES.map((type) => (
                                    <option key={type} value={type}>
                                        {type}
                                    </option>
                                ))}
                            </select>
                            {getError('collegeType') && (
                                <span style={formStyles.error}>
                                    <FaExclamationCircle /> {getError('collegeType')}
                                </span>
                            )}
                        </div>
                    </div>

                    <div style={formStyles.row}>
                        <div style={formStyles.group}>
                            <label style={formStyles.label}>
                                College Size<span style={formStyles.required}>*</span>
                            </label>
                            <select
                                name="collegeSize"
                                value={values.collegeSize}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                onFocus={() => setFocusedField('collegeSize')}
                                style={{ ...getInputStyle('collegeSize'), ...formStyles.select }}
                            >
                                <option value="">Select size</option>
                                {COLLEGE_SIZES.map((size) => (
                                    <option key={size} value={size}>
                                        {size}
                                    </option>
                                ))}
                            </select>
                            {getError('collegeSize') && (
                                <span style={formStyles.error}>
                                    <FaExclamationCircle /> {getError('collegeSize')}
                                </span>
                            )}
                        </div>
                        <div style={formStyles.group}>
                            <label style={formStyles.label}>
                                Contact Person<span style={formStyles.required}>*</span>
                            </label>
                            <input
                                type="text"
                                name="contactPerson"
                                value={values.contactPerson}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                onFocus={() => setFocusedField('contactPerson')}
                                placeholder="Your name"
                                style={getInputStyle('contactPerson')}
                            />
                            {getError('contactPerson') && (
                                <span style={formStyles.error}>
                                    <FaExclamationCircle /> {getError('contactPerson')}
                                </span>
                            )}
                        </div>
                    </div>

                    <div style={formStyles.row}>
                        <div style={formStyles.group}>
                            <label style={formStyles.label}>
                                Email<span style={formStyles.required}>*</span>
                            </label>
                            <input
                                type="email"
                                name="email"
                                value={values.email}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                onFocus={() => setFocusedField('email')}
                                placeholder="your@email.com"
                                style={getInputStyle('email')}
                            />
                            {getError('email') && (
                                <span style={formStyles.error}>
                                    <FaExclamationCircle /> {getError('email')}
                                </span>
                            )}
                        </div>
                        <div style={formStyles.group}>
                            <label style={formStyles.label}>
                                Phone<span style={formStyles.required}>*</span>
                            </label>
                            <input
                                type="tel"
                                name="phone"
                                value={values.phone}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                onFocus={() => setFocusedField('phone')}
                                placeholder="+91 XXXXX XXXXX"
                                style={getInputStyle('phone')}
                            />
                            {getError('phone') && (
                                <span style={formStyles.error}>
                                    <FaExclamationCircle /> {getError('phone')}
                                </span>
                            )}
                        </div>
                    </div>

                    <div style={formStyles.group}>
                        <label style={formStyles.label}>Current Challenge (Optional)</label>
                        <textarea
                            name="currentChallenge"
                            value={values.currentChallenge}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            onFocus={() => setFocusedField('currentChallenge')}
                            placeholder="What's your biggest campus management challenge?"
                            style={{ ...getInputStyle('currentChallenge'), ...formStyles.textarea }}
                        />
                    </div>
                </>
            )}

            {/* Submit Button */}
            <div style={formStyles.submitBtn}>
                <Button
                    type="submit"
                    variant="primary"
                    size="large"
                    fullWidth
                    loading={isSubmitting}
                    rightIcon={<FaPaperPlane />}
                >
                    {isSubmitting
                        ? 'Sending...'
                        : type === 'demo'
                            ? 'Request Demo'
                            : 'Send Message'}
                </Button>
            </div>
        </form>
    );
};

export default ContactForm;
