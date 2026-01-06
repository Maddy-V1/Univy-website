/**
 * College Tech - Univy API Utilities
 * API configuration and HTTP request functions
 */

import axios from 'axios';

// ========================
// API CONFIGURATION
// ========================
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

// Create axios instance with default config
const api = axios.create({
    baseURL: API_BASE_URL,
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    },
});

// Request interceptor (for logging, auth tokens, etc.)
api.interceptors.request.use(
    (config) => {
        // Add any request modifications here (e.g., auth tokens)
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Response interceptor (for error handling)
api.interceptors.response.use(
    (response) => {
        return response.data;
    },
    (error) => {
        // Handle specific error cases
        const message = error.response?.data?.message || error.message || 'Something went wrong';

        // You can add toast notifications or error logging here
        console.error('API Error:', message);

        return Promise.reject({
            message,
            status: error.response?.status,
            data: error.response?.data,
        });
    }
);

// ========================
// CONTACT API
// ========================

/**
 * Submit contact form
 * @param {Object} data - Contact form data
 * @param {string} data.name - Full name
 * @param {string} data.collegeName - College name
 * @param {string} data.role - Role/designation
 * @param {string} data.email - Email address
 * @param {string} data.phone - Phone number
 * @param {string} [data.message] - Optional message
 * @returns {Promise} API response
 */
export const submitContact = async (data) => {
    return api.post('/contact', data);
};

// ========================
// DEMO REQUEST API
// ========================

/**
 * Submit demo request
 * @param {Object} data - Demo request form data
 * @returns {Promise} API response
 */
export const submitDemoRequest = async (data) => {
    return api.post('/demo', data);
};

// ========================
// CUSTOM QUOTE API
// ========================

/**
 * Submit custom quote request
 * @param {Object} data - Quote request form data
 * @returns {Promise} API response
 */
export const submitQuoteRequest = async (data) => {
    return api.post('/quote', data);
};

// ========================
// NEWSLETTER API
// ========================

/**
 * Subscribe to newsletter
 * @param {string} email - Email address
 * @returns {Promise} API response
 */
export const subscribeNewsletter = async (email) => {
    return api.post('/newsletter/subscribe', { email });
};

// ========================
// HEALTH CHECK
// ========================

/**
 * Check if API is running
 * @returns {Promise} API health status
 */
export const checkApiHealth = async () => {
    return api.get('/health');
};

// ========================
// EXPORT DEFAULT AXIOS INSTANCE
// ========================
export default api;
