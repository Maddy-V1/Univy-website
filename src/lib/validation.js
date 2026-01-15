/**
 * Validation Utilities
 */

export function validateEmail(email) {
  const re = /^\S+@\S+\.\S+$/;
  return re.test(email);
}

export function validateRequired(value, fieldName) {
  if (!value || (typeof value === 'string' && !value.trim())) {
    return `${fieldName} is required`;
  }
  return null;
}

export function validateLength(value, fieldName, min, max) {
  if (value && value.length < min) {
    return `${fieldName} must be at least ${min} characters`;
  }
  if (value && value.length > max) {
    return `${fieldName} cannot exceed ${max} characters`;
  }
  return null;
}

export function validateContactForm(data) {
  const errors = [];

  const nameError = validateRequired(data.name, 'Name') || validateLength(data.name, 'Name', 2, 100);
  if (nameError) errors.push({ field: 'name', message: nameError });

  const collegeError = validateRequired(data.collegeName, 'College name') || validateLength(data.collegeName, 'College name', 3, 200);
  if (collegeError) errors.push({ field: 'collegeName', message: collegeError });

  const emailError = validateRequired(data.email, 'Email');
  if (emailError) {
    errors.push({ field: 'email', message: emailError });
  } else if (!validateEmail(data.email)) {
    errors.push({ field: 'email', message: 'Please provide a valid email' });
  }

  const phoneError = validateRequired(data.phone, 'Phone number');
  if (phoneError) errors.push({ field: 'phone', message: phoneError });

  return errors;
}

export function validateDemoForm(data) {
  const errors = [];

  const collegeError = validateRequired(data.collegeName, 'College name');
  if (collegeError) errors.push({ field: 'collegeName', message: collegeError });

  const typeError = validateRequired(data.collegeType, 'College type');
  if (typeError) errors.push({ field: 'collegeType', message: typeError });

  const sizeError = validateRequired(data.collegeSize, 'College size');
  if (sizeError) errors.push({ field: 'collegeSize', message: sizeError });

  const contactError = validateRequired(data.contactPerson, 'Contact person');
  if (contactError) errors.push({ field: 'contactPerson', message: contactError });

  const emailError = validateRequired(data.email, 'Email');
  if (emailError) {
    errors.push({ field: 'email', message: emailError });
  } else if (!validateEmail(data.email)) {
    errors.push({ field: 'email', message: 'Please provide a valid email' });
  }

  const phoneError = validateRequired(data.phone, 'Phone number');
  if (phoneError) errors.push({ field: 'phone', message: phoneError });

  return errors;
}

export function validateQuoteForm(data) {
  const errors = [];

  const collegeError = validateRequired(data.collegeName, 'College name');
  if (collegeError) errors.push({ field: 'collegeName', message: collegeError });

  const sizeError = validateRequired(data.collegeSize, 'College size');
  if (sizeError) errors.push({ field: 'collegeSize', message: sizeError });

  const contactError = validateRequired(data.contactPerson, 'Contact person');
  if (contactError) errors.push({ field: 'contactPerson', message: contactError });

  const emailError = validateRequired(data.email, 'Email');
  if (emailError) {
    errors.push({ field: 'email', message: emailError });
  } else if (!validateEmail(data.email)) {
    errors.push({ field: 'email', message: 'Please provide a valid email' });
  }

  const phoneError = validateRequired(data.phone, 'Phone number');
  if (phoneError) errors.push({ field: 'phone', message: phoneError });

  if (!data.selectedServices || !Array.isArray(data.selectedServices) || data.selectedServices.length === 0) {
    errors.push({ field: 'selectedServices', message: 'At least one service must be selected' });
  }

  return errors;
}
