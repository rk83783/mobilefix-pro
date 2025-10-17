/**
 * MobileFix Pro - API Client
 * Connect your frontend website with Django backend
 * 
 * Usage:
 * 1. Include this file in your HTML: <script src="api-client.js"></script>
 * 2. Use the API object to make calls: API.auth.login(email, password)
 */

// Configuration
const API_CONFIG = {
    BASE_URL: 'http://127.0.0.1:8000/api',  // Change to your production URL
    TIMEOUT: 30000,  // 30 seconds
    TOKEN_KEY: 'access_token',
    REFRESH_KEY: 'refresh_token',
    USER_KEY: 'current_user'
};

// Helper: Get stored token
function getToken() {
    return localStorage.getItem(API_CONFIG.TOKEN_KEY);
}

// Helper: Get refresh token
function getRefreshToken() {
    return localStorage.getItem(API_CONFIG.REFRESH_KEY);
}

// Helper: Save tokens
function saveTokens(access, refresh) {
    localStorage.setItem(API_CONFIG.TOKEN_KEY, access);
    if (refresh) {
        localStorage.setItem(API_CONFIG.REFRESH_KEY, refresh);
    }
}

// Helper: Clear authentication data
function clearAuth() {
    localStorage.removeItem(API_CONFIG.TOKEN_KEY);
    localStorage.removeItem(API_CONFIG.REFRESH_KEY);
    localStorage.removeItem(API_CONFIG.USER_KEY);
}

// Helper: Save user data
function saveUser(user) {
    localStorage.setItem(API_CONFIG.USER_KEY, JSON.stringify(user));
}

// Helper: Get current user
function getCurrentUser() {
    const userStr = localStorage.getItem(API_CONFIG.USER_KEY);
    return userStr ? JSON.parse(userStr) : null;
}

// Helper: Check if user is authenticated
function isAuthenticated() {
    return !!getToken();
}

// Core API request function
async function apiRequest(endpoint, options = {}) {
    const url = `${API_CONFIG.BASE_URL}${endpoint}`;
    
    // Default headers
    const headers = {
        'Content-Type': 'application/json',
        ...options.headers
    };
    
    // Add authorization token if available
    const token = getToken();
    if (token && !options.skipAuth) {
        headers['Authorization'] = `Bearer ${token}`;
    }
    
    // Request configuration
    const config = {
        method: options.method || 'GET',
        headers,
        ...options
    };
    
    // Add body if provided
    if (options.body && typeof options.body === 'object') {
        config.body = JSON.stringify(options.body);
    }
    
    try {
        const response = await fetch(url, config);
        
        // Handle 401 Unauthorized - try to refresh token
        if (response.status === 401 && !options.skipAuth && !endpoint.includes('/auth/refresh/')) {
            const refreshed = await refreshAccessToken();
            if (refreshed) {
                // Retry request with new token
                headers['Authorization'] = `Bearer ${getToken()}`;
                const retryResponse = await fetch(url, { ...config, headers });
                return await handleResponse(retryResponse);
            } else {
                // Refresh failed, logout user
                clearAuth();
                throw new Error('Session expired. Please login again.');
            }
        }
        
        return await handleResponse(response);
        
    } catch (error) {
        console.error('API Request Error:', error);
        throw error;
    }
}

// Handle API response
async function handleResponse(response) {
    const contentType = response.headers.get('content-type');
    const isJson = contentType && contentType.includes('application/json');
    
    const data = isJson ? await response.json() : await response.text();
    
    if (!response.ok) {
        const error = new Error(data.message || data.error || 'API request failed');
        error.status = response.status;
        error.data = data;
        throw error;
    }
    
    return data;
}

// Refresh access token
async function refreshAccessToken() {
    const refreshToken = getRefreshToken();
    if (!refreshToken) return false;
    
    try {
        const response = await fetch(`${API_CONFIG.BASE_URL}/auth/refresh/`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ refresh: refreshToken })
        });
        
        if (response.ok) {
            const data = await response.json();
            saveTokens(data.access, data.refresh || refreshToken);
            return true;
        }
        return false;
    } catch (error) {
        console.error('Token refresh failed:', error);
        return false;
    }
}

// ============================================
// API MODULES
// ============================================

// Authentication API
const authAPI = {
    /**
     * Register a new user
     * @param {Object} userData - { email, password, password_confirm, full_name, phone }
     * @returns {Promise<Object>} { user, access, refresh, message }
     */
    async register(userData) {
        const data = await apiRequest('/auth/register/', {
            method: 'POST',
            body: userData,
            skipAuth: true
        });
        
        // Save tokens and user
        saveTokens(data.access, data.refresh);
        saveUser(data.user);
        
        return data;
    },
    
    /**
     * Login user
     * @param {string} email 
     * @param {string} password 
     * @returns {Promise<Object>} { user, access, refresh, message }
     */
    async login(email, password) {
        const data = await apiRequest('/auth/login/', {
            method: 'POST',
            body: { email, password },
            skipAuth: true
        });
        
        // Save tokens and user
        saveTokens(data.access, data.refresh);
        saveUser(data.user);
        
        return data;
    },
    
    /**
     * Logout current user
     * @returns {Promise<Object>}
     */
    async logout() {
        const refreshToken = getRefreshToken();
        
        try {
            await apiRequest('/auth/logout/', {
                method: 'POST',
                body: { refresh: refreshToken }
            });
        } finally {
            // Clear local storage regardless of API response
            clearAuth();
        }
        
        return { message: 'Logged out successfully' };
    },
    
    /**
     * Get current user profile
     * @returns {Promise<Object>} User profile data
     */
    async getProfile() {
        const data = await apiRequest('/auth/profile/');
        saveUser(data);
        return data;
    },
    
    /**
     * Update user profile
     * @param {Object} profileData - { full_name, phone, address, city, state, pincode }
     * @returns {Promise<Object>} Updated user data
     */
    async updateProfile(profileData) {
        const data = await apiRequest('/auth/profile/', {
            method: 'PUT',
            body: profileData
        });
        saveUser(data);
        return data;
    },
    
    /**
     * Change user password
     * @param {string} oldPassword 
     * @param {string} newPassword 
     * @param {string} newPasswordConfirm 
     * @returns {Promise<Object>}
     */
    async changePassword(oldPassword, newPassword, newPasswordConfirm) {
        return await apiRequest('/auth/change-password/', {
            method: 'POST',
            body: {
                old_password: oldPassword,
                new_password: newPassword,
                new_password_confirm: newPasswordConfirm
            }
        });
    },
    
    /**
     * Refresh access token
     * @returns {Promise<boolean>}
     */
    async refreshToken() {
        return await refreshAccessToken();
    }
};

// Products API (placeholder - will be implemented later)
const productsAPI = {
    /**
     * Get all products
     * @param {Object} params - { search, category, brand, page, page_size }
     * @returns {Promise<Object>}
     */
    async list(params = {}) {
        const queryString = new URLSearchParams(params).toString();
        return await apiRequest(`/products/${queryString ? '?' + queryString : ''}`);
    },
    
    /**
     * Get product details
     * @param {number} id 
     * @returns {Promise<Object>}
     */
    async get(id) {
        return await apiRequest(`/products/${id}/`);
    },
    
    /**
     * Search products
     * @param {string} query 
     * @returns {Promise<Object>}
     */
    async search(query) {
        return await apiRequest(`/products/search/?q=${encodeURIComponent(query)}`);
    }
};

// Orders API (placeholder - will be implemented later)
const ordersAPI = {
    /**
     * Get user orders
     * @returns {Promise<Array>}
     */
    async list() {
        return await apiRequest('/orders/');
    },
    
    /**
     * Create new order
     * @param {Object} orderData 
     * @returns {Promise<Object>}
     */
    async create(orderData) {
        return await apiRequest('/orders/', {
            method: 'POST',
            body: orderData
        });
    },
    
    /**
     * Get order details
     * @param {number} id 
     * @returns {Promise<Object>}
     */
    async get(id) {
        return await apiRequest(`/orders/${id}/`);
    }
};

// Payments API (placeholder - will be implemented later)
const paymentsAPI = {
    /**
     * Create Razorpay order
     * @param {number} amount 
     * @returns {Promise<Object>}
     */
    async createRazorpayOrder(amount) {
        return await apiRequest('/payments/razorpay/create/', {
            method: 'POST',
            body: { amount }
        });
    },
    
    /**
     * Verify Razorpay payment
     * @param {Object} paymentData 
     * @returns {Promise<Object>}
     */
    async verifyRazorpayPayment(paymentData) {
        return await apiRequest('/payments/razorpay/verify/', {
            method: 'POST',
            body: paymentData
        });
    }
};

// Uploads API (placeholder - will be implemented later)
const uploadsAPI = {
    /**
     * Upload image
     * @param {File} file 
     * @param {string} category 
     * @returns {Promise<Object>}
     */
    async uploadImage(file, category = 'other') {
        const formData = new FormData();
        formData.append('file', file);
        formData.append('category', category);
        
        return await apiRequest('/uploads/image/', {
            method: 'POST',
            body: formData,
            headers: {} // Let browser set Content-Type for FormData
        });
    },
    
    /**
     * Upload document
     * @param {File} file 
     * @returns {Promise<Object>}
     */
    async uploadDocument(file) {
        const formData = new FormData();
        formData.append('file', file);
        
        return await apiRequest('/uploads/document/', {
            method: 'POST',
            body: formData,
            headers: {} // Let browser set Content-Type for FormData
        });
    }
};

// ============================================
// PUBLIC API OBJECT
// ============================================

const API = {
    // Configuration
    config: API_CONFIG,
    
    // Core functions
    request: apiRequest,
    
    // Authentication helpers
    isAuthenticated,
    getCurrentUser,
    clearAuth,
    
    // API modules
    auth: authAPI,
    products: productsAPI,
    orders: ordersAPI,
    payments: paymentsAPI,
    uploads: uploadsAPI
};

// Make API available globally
window.API = API;

// Export for module systems
if (typeof module !== 'undefined' && module.exports) {
    module.exports = API;
}

console.log('✅ MobileFix Pro API Client loaded successfully');
console.log('📡 API Base URL:', API_CONFIG.BASE_URL);
console.log('🔐 Authenticated:', isAuthenticated());
