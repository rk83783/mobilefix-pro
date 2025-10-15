// Authentication JavaScript
document.addEventListener('DOMContentLoaded', function() {
    initializeAuth();
    setupEventListeners();
});

// Initialize authentication system
function initializeAuth() {
    // Check if user is already logged in
    const currentUser = getCurrentUser();
    if (currentUser && window.location.pathname.includes('login.html')) {
        // Redirect to dashboard if already logged in
        window.location.href = 'admin.html';
    }
    
    // Setup tab switching
    setupTabs();
    
    // Setup form validation
    setupFormValidation();
}

// Setup event listeners
function setupEventListeners() {
    // Tab switching
    document.querySelectorAll('.auth-tab').forEach(tab => {
        tab.addEventListener('click', handleTabSwitch);
    });
    
    // Form submissions
    document.getElementById('loginFormElement').addEventListener('submit', handleLogin);
    document.getElementById('registerFormElement').addEventListener('submit', handleRegister);
    document.getElementById('forgotPasswordForm').addEventListener('submit', handleForgotPassword);
    
    // Password strength checker
    document.getElementById('registerPassword').addEventListener('input', checkPasswordStrength);
    
    // Confirm password validation
    document.getElementById('registerConfirmPassword').addEventListener('input', validatePasswordMatch);
    
    // Social auth buttons
    document.querySelectorAll('.social-btn').forEach(btn => {
        btn.addEventListener('click', handleSocialAuth);
    });
}

// Tab switching functionality
function setupTabs() {
    const tabs = document.querySelectorAll('.auth-tab');
    const forms = {
        login: document.getElementById('loginForm'),
        register: document.getElementById('registerForm')
    };
    
    function switchTab(activeTab) {
        tabs.forEach(tab => tab.classList.remove('active'));
        Object.values(forms).forEach(form => form.style.display = 'none');
        
        activeTab.classList.add('active');
        const tabType = activeTab.dataset.tab;
        forms[tabType].style.display = 'block';
    }
    
    // Set initial tab
    switchTab(document.querySelector('.auth-tab.active'));
}

function handleTabSwitch(e) {
    const tabs = document.querySelectorAll('.auth-tab');
    const forms = {
        login: document.getElementById('loginForm'),
        register: document.getElementById('registerForm')
    };
    
    tabs.forEach(tab => tab.classList.remove('active'));
    Object.values(forms).forEach(form => form.style.display = 'none');
    
    e.target.classList.add('active');
    const tabType = e.target.dataset.tab;
    forms[tabType].style.display = 'block';
    
    // Clear any existing errors
    clearAllErrors();
}

// Form validation setup
function setupFormValidation() {
    // Real-time validation for email fields
    document.querySelectorAll('input[type="email"]').forEach(input => {
        input.addEventListener('blur', validateEmail);
        input.addEventListener('input', clearError);
    });
    
    // Real-time validation for required fields
    document.querySelectorAll('input[required]').forEach(input => {
        input.addEventListener('blur', validateRequired);
        input.addEventListener('input', clearError);
    });
    
    // Phone number validation
    document.querySelectorAll('input[type="tel"]').forEach(input => {
        input.addEventListener('blur', validatePhone);
        input.addEventListener('input', clearError);
    });
}

// Validation functions
function validateEmail(e) {
    const email = e.target.value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const errorElement = document.getElementById(e.target.id + 'Error');
    
    if (email && !emailRegex.test(email)) {
        showError(errorElement, 'Please enter a valid email address');
        return false;
    }
    
    hideError(errorElement);
    return true;
}

function validateRequired(e) {
    const value = e.target.value.trim();
    const errorElement = document.getElementById(e.target.id + 'Error');
    
    if (!value) {
        showError(errorElement, 'This field is required');
        return false;
    }
    
    hideError(errorElement);
    return true;
}

function validatePhone(e) {
    const phone = e.target.value.trim();
    const phoneRegex = /^[+]?[0-9\s\-\(\)]{10,}$/;
    const errorElement = document.getElementById(e.target.id + 'Error');
    
    if (phone && !phoneRegex.test(phone)) {
        showError(errorElement, 'Please enter a valid phone number');
        return false;
    }
    
    hideError(errorElement);
    return true;
}

function checkPasswordStrength(e) {
    const password = e.target.value;
    const strengthElement = document.getElementById('passwordStrength');
    
    if (!password) {
        strengthElement.className = 'password-strength';
        return;
    }
    
    let strength = 0;
    
    // Length check
    if (password.length >= 8) strength++;
    
    // Character variety checks
    if (/[a-z]/.test(password)) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[^A-Za-z0-9]/.test(password)) strength++;
    
    if (strength <= 2) {
        strengthElement.className = 'password-strength weak';
    } else if (strength <= 3) {
        strengthElement.className = 'password-strength medium';
    } else {
        strengthElement.className = 'password-strength strong';
    }
}

function validatePasswordMatch() {
    const password = document.getElementById('registerPassword').value;
    const confirmPassword = document.getElementById('registerConfirmPassword').value;
    const errorElement = document.getElementById('registerConfirmPasswordError');
    
    if (confirmPassword && password !== confirmPassword) {
        showError(errorElement, 'Passwords do not match');
        return false;
    }
    
    hideError(errorElement);
    return true;
}

// Error handling functions
function showError(element, message) {
    if (element) {
        element.textContent = message;
        element.classList.add('show');
    }
}

function hideError(element) {
    if (element) {
        element.classList.remove('show');
    }
}

function clearError(e) {
    const errorElement = document.getElementById(e.target.id + 'Error');
    hideError(errorElement);
}

function clearAllErrors() {
    document.querySelectorAll('.error-message').forEach(error => {
        hideError(error);
    });
}

// Password toggle functionality
function togglePassword(fieldId) {
    const field = document.getElementById(fieldId);
    const toggle = field.nextElementSibling;
    const icon = toggle.querySelector('i');
    
    if (field.type === 'password') {
        field.type = 'text';
        icon.className = 'fas fa-eye-slash';
    } else {
        field.type = 'password';
        icon.className = 'fas fa-eye';
    }
}

// Login handling with backend integration
async function handleLogin(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const loginData = {
        email: formData.get('email'),
        password: formData.get('password'),
        remember: formData.get('remember') === 'on'
    };
    
    // Validate form
    if (!validateLoginForm(loginData)) {
        return;
    }
    
    // Show loading state
    const submitBtn = e.target.querySelector('button[type="submit"]');
    setLoadingState(submitBtn, true);
    
    try {
        // Simulate API call
        await simulateApiCall(1500);
        
        // Use backend API for login
        const result = window.backendAPI.loginUser(loginData.email, loginData.password);
        
        if (!result.success) {
            throw new Error(result.error);
        }
        
        const user = result.user;
        
        // Store user session
        storeUserSession(user, loginData.remember);
        
        // Log activity
        window.backendAPI.logAdminActivity('user_login', `${user.email} logged in`);
        
        // Show success and redirect
        showSuccess('Login Successful!', 'Welcome back! Redirecting to your dashboard...');
        
        setTimeout(() => {
            window.location.href = user.isAdmin ? 'admin.html' : 'products.html';
        }, 2000);
        
    } catch (error) {
        showError(document.getElementById('loginPasswordError'), error.message || 'Invalid email or password');
    } finally {
        setLoadingState(submitBtn, false);
    }
}

// Register handling with backend integration
async function handleRegister(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const registerData = {
        firstName: formData.get('firstName'),
        lastName: formData.get('lastName'),
        email: formData.get('email'),
        phone: formData.get('phone'),
        businessName: formData.get('businessName'),
        password: formData.get('password'),
        confirmPassword: formData.get('confirmPassword'),
        terms: formData.get('terms') === 'on',
        newsletter: formData.get('newsletter') === 'on'
    };
    
    // Validate form
    if (!validateRegisterForm(registerData)) {
        return;
    }
    
    // Show loading state
    const submitBtn = e.target.querySelector('button[type="submit"]');
    setLoadingState(submitBtn, true);
    
    try {
        // Simulate API call
        await simulateApiCall(2000);
        
        // Use backend API for registration
        const result = window.backendAPI.registerUser(registerData);
        
        if (!result.success) {
            throw new Error(result.error);
        }
        
        // Log activity
        window.backendAPI.logAdminActivity('user_register', `New user registered: ${registerData.email}`);
        
        // Show success
        showSuccess(
            'Account Created Successfully!', 
            'Welcome to MobileFix Pro! Please check your email for verification instructions.'
        );
        
        // Clear form
        e.target.reset();
        
        // Switch to login tab after delay
        setTimeout(() => {
            document.querySelector('[data-tab="login"]').click();
        }, 3000);
        
    } catch (error) {
        showError(document.getElementById('registerEmailError'), error.message || 'Registration failed. Please try again.');
    } finally {
        setLoadingState(submitBtn, false);
    }
}

// Forgot password handling with backend integration
async function handleForgotPassword(e) {
    e.preventDefault();
    
    const email = e.target.email.value;
    
    if (!email) {
        showError(document.getElementById('forgotEmailError'), 'Please enter your email address');
        return;
    }
    
    const submitBtn = e.target.querySelector('button[type="submit"]');
    setLoadingState(submitBtn, true);
    
    try {
        // Simulate API call
        await simulateApiCall(1500);
        
        // Use backend API for password reset
        const result = window.backendAPI.requestPasswordReset(email);
        
        if (!result.success) {
            throw new Error(result.error);
        }
        
        closeForgotPassword();
        showSuccess(
            'Reset Link Sent!', 
            `Password reset instructions have been sent to ${email}`
        );
        
        e.target.reset();
        
    } catch (error) {
        showError(document.getElementById('forgotEmailError'), error.message || 'Failed to send reset link. Please try again.');
    } finally {
        setLoadingState(submitBtn, false);
    }
}

// Social authentication
function handleSocialAuth(e) {
    const provider = e.currentTarget.classList.contains('google-btn') ? 'Google' : 'WhatsApp';
    
    showNotification(`${provider} authentication would be implemented here`, 'info');
    
    // In a real app, this would redirect to OAuth provider
    console.log(`Authenticating with ${provider}`);
}

// Form validation functions
function validateLoginForm(data) {
    let isValid = true;
    
    if (!data.email) {
        showError(document.getElementById('loginEmailError'), 'Email is required');
        isValid = false;
    }
    
    if (!data.password) {
        showError(document.getElementById('loginPasswordError'), 'Password is required');
        isValid = false;
    }
    
    return isValid;
}

function validateRegisterForm(data) {
    let isValid = true;
    
    // Check required fields
    const requiredFields = ['firstName', 'lastName', 'email', 'phone', 'password', 'confirmPassword'];
    requiredFields.forEach(field => {
        if (!data[field]) {
            showError(document.getElementById(`register${field.charAt(0).toUpperCase() + field.slice(1)}Error`), 'This field is required');
            isValid = false;
        }
    });
    
    // Check password match
    if (data.password !== data.confirmPassword) {
        showError(document.getElementById('registerConfirmPasswordError'), 'Passwords do not match');
        isValid = false;
    }
    
    // Check password strength
    if (data.password && data.password.length < 8) {
        showError(document.getElementById('registerPasswordError'), 'Password must be at least 8 characters long');
        isValid = false;
    }
    
    // Check terms acceptance
    if (!data.terms) {
        showError(document.getElementById('registerTermsError'), 'You must agree to the terms and conditions');
        isValid = false;
    }
    
    return isValid;
}

// Utility functions
function setLoadingState(button, loading) {
    if (loading) {
        button.classList.add('loading');
        button.disabled = true;
    } else {
        button.classList.remove('loading');
        button.disabled = false;
    }
}

function generateId() {
    return 'user_' + Math.random().toString(36).substr(2, 9);
}

function simulateApiCall(delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simulate occasional failures for demo
            if (Math.random() < 0.1) {
                reject(new Error('API Error'));
            } else {
                resolve();
            }
        }, delay);
    });
}

// Session management
function storeUserSession(user, remember) {
    const storage = remember ? localStorage : sessionStorage;
    storage.setItem('currentUser', JSON.stringify(user));
    storage.setItem('authToken', 'demo_token_' + user.id);
}

function storeUserData(user) {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));
}

function getCurrentUser() {
    const sessionUser = sessionStorage.getItem('currentUser');
    const localUser = localStorage.getItem('currentUser');
    
    if (sessionUser) return JSON.parse(sessionUser);
    if (localUser) return JSON.parse(localUser);
    
    return null;
}

function logout() {
    sessionStorage.removeItem('currentUser');
    sessionStorage.removeItem('authToken');
    localStorage.removeItem('currentUser');
    localStorage.removeItem('authToken');
    
    window.location.href = 'login.html';
}

// Modal functions
function showForgotPassword() {
    document.getElementById('forgotPasswordModal').style.display = 'flex';
}

function closeForgotPassword() {
    document.getElementById('forgotPasswordModal').style.display = 'none';
}

function showSuccess(title, message) {
    document.getElementById('successTitle').textContent = title;
    document.getElementById('successMessage').textContent = message;
    document.getElementById('successModal').style.display = 'flex';
}

function closeSuccessModal() {
    document.getElementById('successModal').style.display = 'none';
}

// Notification system
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle'}"></i>
        <span>${message}</span>
    `;
    
    Object.assign(notification.style, {
        position: 'fixed',
        top: '20px',
        right: '20px',
        background: type === 'success' ? '#96A78D' : type === 'error' ? '#f56565' : '#3182ce',
        color: 'white',
        padding: '1rem 1.5rem',
        borderRadius: '0.5rem',
        boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
        zIndex: '10000',
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
        transform: 'translateX(100%)',
        transition: 'transform 0.3s ease'
    });
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 10);
    
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Initialize password visibility toggles
document.addEventListener('DOMContentLoaded', function() {
    // Add click handlers for password toggles
    document.querySelectorAll('.password-toggle').forEach(toggle => {
        toggle.addEventListener('click', function() {
            const input = this.previousElementSibling;
            const icon = this.querySelector('i');
            
            if (input.type === 'password') {
                input.type = 'text';
                icon.className = 'fas fa-eye-slash';
            } else {
                input.type = 'password';
                icon.className = 'fas fa-eye';
            }
        });
    });
});

console.log('🔐 Authentication system loaded successfully!');
console.log('💡 Demo accounts: any email/password combination works');