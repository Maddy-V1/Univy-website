/**
 * College Tech - Univy API Utilities
 * API configuration and HTTP request functions
 */

import axios from 'axios';

// ========================
// API CONFIGURATION
// ========================
// In combined deployment, API routes are at /api (same origin)
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || '/api';

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
        const message = error.response?.data?.message || error.message || 'Something went wrong';
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
 */
export const submitContact = async (data) => {
    return api.post('/contact', data);
};

// ========================
// DEMO REQUEST API
// ========================

/**
 * Submit demo request
 */
export const submitDemoRequest = async (data) => {
    return api.post('/demo', data);
};

// ========================
// CUSTOM QUOTE API
// ========================

/**
 * Submit custom quote request
 */
export const submitQuoteRequest = async (data) => {
    return api.post('/quote', data);
};

// ========================
// NEWSLETTER API
// ========================

/**
 * Subscribe to newsletter
 */
export const subscribeNewsletter = async (email) => {
    return api.post('/newsletter/subscribe', { email });
};

// ========================
// HEALTH CHECK
// ========================

/**
 * Check if API is running
 */
export const checkApiHealth = async () => {
    return api.get('/health');
};

export default api;
