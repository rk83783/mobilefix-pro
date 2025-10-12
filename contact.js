// Contact Page JavaScript
document.addEventListener('DOMContentLoaded', function() {
    initializeContactPage();
    setupEventListeners();
    initializeFAQ();
});

// Initialize contact page
function initializeContactPage() {
    // Setup character counter for message field
    const messageField = document.getElementById('message');
    const charCount = document.getElementById('charCount');
    
    if (messageField && charCount) {
        messageField.addEventListener('input', function() {
            const currentLength = this.value.length;
            charCount.textContent = currentLength;
            
            // Change color based on character limit
            if (currentLength > 950) {
                charCount.style.color = '#f56565';
            } else if (currentLength > 800) {
                charCount.style.color = '#ed8936';
            } else {
                charCount.style.color = '#4a5568';
            }
        });
    }
}

// Setup event listeners
function setupEventListeners() {
    // Contact form submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactSubmission);
    }
    
    // Form validation
    setupFormValidation();
    
    // Social links
    setupSocialLinks();
}

// Form validation setup
function setupFormValidation() {
    // Real-time validation for required fields
    document.querySelectorAll('input[required], select[required], textarea[required]').forEach(field => {
        field.addEventListener('blur', validateField);
        field.addEventListener('input', clearFieldError);
    });
    
    // Email validation
    document.querySelectorAll('input[type="email"]').forEach(field => {
        field.addEventListener('blur', validateEmail);
    });
    
    // Phone validation
    document.querySelectorAll('input[type="tel"]').forEach(field => {
        field.addEventListener('blur', validatePhone);
    });
}

// Validate individual field
function validateField(e) {
    const field = e.target;
    const value = field.value.trim();
    const errorElement = document.getElementById(field.id + 'Error');
    
    if (!value && field.hasAttribute('required')) {
        showFieldError(errorElement, 'This field is required');
        return false;
    }
    
    hideFieldError(errorElement);
    return true;
}

// Validate email
function validateEmail(e) {
    const email = e.target.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const errorElement = document.getElementById(e.target.id + 'Error');
    
    if (email && !emailRegex.test(email)) {
        showFieldError(errorElement, 'Please enter a valid email address');
        return false;
    }
    
    hideFieldError(errorElement);
    return true;
}

// Validate phone
function validatePhone(e) {
    const phone = e.target.value.trim();
    const phoneRegex = /^[+]?[0-9\s\-\(\)]{10,}$/;
    const errorElement = document.getElementById(e.target.id + 'Error');
    
    if (phone && !phoneRegex.test(phone)) {
        showFieldError(errorElement, 'Please enter a valid phone number');
        return false;
    }
    
    hideFieldError(errorElement);
    return true;
}

// Show field error
function showFieldError(element, message) {
    if (element) {
        element.textContent = message;
        element.classList.add('show');
    }
}

// Hide field error
function hideFieldError(element) {
    if (element) {
        element.classList.remove('show');
    }
}

// Clear field error on input
function clearFieldError(e) {
    const errorElement = document.getElementById(e.target.id + 'Error');
    hideFieldError(errorElement);
}

// Handle contact form submission
async function handleContactSubmission(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const contactData = {
        firstName: formData.get('firstName'),
        lastName: formData.get('lastName'),
        email: formData.get('email'),
        phone: formData.get('phone'),
        businessName: formData.get('businessName'),
        subject: formData.get('subject'),
        priority: formData.get('priority'),
        message: formData.get('message'),
        newsletter: formData.get('newsletter') === 'on',
        agree: formData.get('agree') === 'on'
    };
    
    // Validate form
    if (!validateContactForm(contactData)) {
        return;
    }
    
    // Show loading state
    const submitBtn = document.getElementById('submitBtn');
    setLoadingState(submitBtn, true);
    
    try {
        // Simulate API call
        await simulateApiCall(2000);
        
        // Store contact submission (in real app, send to server)
        storeContactSubmission(contactData);
        
        // Show success modal
        showSuccessModal();
        
        // Reset form
        e.target.reset();
        document.getElementById('charCount').textContent = '0';
        
    } catch (error) {
        showNotification('Failed to send message. Please try again.', 'error');
    } finally {
        setLoadingState(submitBtn, false);
    }
}

// Validate contact form
function validateContactForm(data) {
    let isValid = true;
    
    // Required fields validation
    const requiredFields = ['firstName', 'lastName', 'email', 'phone', 'subject', 'message'];
    requiredFields.forEach(field => {
        if (!data[field]) {
            const errorElement = document.getElementById(field + 'Error');
            showFieldError(errorElement, 'This field is required');
            isValid = false;
        }
    });
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (data.email && !emailRegex.test(data.email)) {
        showFieldError(document.getElementById('emailError'), 'Please enter a valid email address');
        isValid = false;
    }
    
    // Phone validation
    const phoneRegex = /^[+]?[0-9\s\-\(\)]{10,}$/;
    if (data.phone && !phoneRegex.test(data.phone)) {
        showFieldError(document.getElementById('phoneError'), 'Please enter a valid phone number');
        isValid = false;
    }
    
    // Message length validation
    if (data.message && data.message.length > 1000) {
        showFieldError(document.getElementById('messageError'), 'Message must be less than 1000 characters');
        isValid = false;
    }
    
    // Terms agreement validation
    if (!data.agree) {
        showFieldError(document.getElementById('agreeError'), 'You must agree to the terms and conditions');
        isValid = false;
    }
    
    return isValid;
}

// Set loading state for button
function setLoadingState(button, loading) {
    const btnText = button.querySelector('.btn-text');
    const btnLoader = button.querySelector('.btn-loader');
    
    if (loading) {
        btnText.style.display = 'none';
        btnLoader.style.display = 'inline-flex';
        button.disabled = true;
    } else {
        btnText.style.display = 'inline';
        btnLoader.style.display = 'none';
        button.disabled = false;
    }
}

// Simulate API call
function simulateApiCall(delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simulate occasional failures for demo
            if (Math.random() < 0.05) {
                reject(new Error('API Error'));
            } else {
                resolve();
            }
        }, delay);
    });
}

// Store contact submission
function storeContactSubmission(data) {
    const submissions = JSON.parse(localStorage.getItem('contactSubmissions') || '[]');
    const submission = {
        ...data,
        id: generateId(),
        timestamp: new Date().toISOString(),
        status: 'pending'
    };
    
    submissions.push(submission);
    localStorage.setItem('contactSubmissions', JSON.stringify(submissions));
    
    console.log('Contact submission stored:', submission);
}

// Generate unique ID
function generateId() {
    return 'contact_' + Math.random().toString(36).substr(2, 9);
}

// Show success modal
function showSuccessModal() {
    const modal = document.getElementById('successModal');
    if (modal) {
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }
}

// Close success modal
function closeSuccessModal() {
    const modal = document.getElementById('successModal');
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

// Setup social links
function setupSocialLinks() {
    document.querySelectorAll('.social-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const platform = this.querySelector('span').textContent;
            
            // In a real app, these would link to actual social profiles
            showNotification(`Opening ${platform}... (Demo mode)`, 'info');
            
            // Simulate opening social media
            console.log(`Would open ${platform} profile`);
        });
    });
}

// FAQ functionality
function initializeFAQ() {
    document.querySelectorAll('.faq-question').forEach(question => {
        question.addEventListener('click', function() {
            const faqItem = this.parentElement;
            const isActive = faqItem.classList.contains('active');
            
            // Close all FAQ items
            document.querySelectorAll('.faq-item').forEach(item => {
                item.classList.remove('active');
            });
            
            // Open clicked item if it wasn't active
            if (!isActive) {
                faqItem.classList.add('active');
            }
        });
    });
}

// Notification system
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle'}"></i>
        <span>${message}</span>
    `;
    
    // Styles
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
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 10);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (document.body.contains(notification)) {
                document.body.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

// Contact method interactions
document.addEventListener('DOMContentLoaded', function() {
    // WhatsApp contact
    document.querySelectorAll('.method-icon').forEach((icon, index) => {
        icon.parentElement.addEventListener('click', function() {
            const method = this.querySelector('.method-details h4').textContent;
            
            if (method.includes('WhatsApp')) {
                const phone = '+917205702493';
                const message = encodeURIComponent('Hello! I need help with mobile repair services.');
                window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
            } else if (method.includes('Email')) {
                window.open('mailto:support@mobilefixpro.com?subject=Support Request', '_blank');
            } else if (method.includes('Phone')) {
                window.open('tel:+917205702493', '_blank');
            }
        });
    });
});

console.log('📞 Contact page loaded successfully!');
console.log('💬 WhatsApp integration ready');// Contact Page JavaScript
document.addEventListener('DOMContentLoaded', function() {
    initializeContactPage();
    setupEventListeners();
    initializeFAQ();
});

// Initialize contact page
function initializeContactPage() {
    // Setup character counter for message field
    const messageField = document.getElementById('message');
    const charCount = document.getElementById('charCount');
    
    if (messageField && charCount) {
        messageField.addEventListener('input', function() {
            const currentLength = this.value.length;
            charCount.textContent = currentLength;
            
            // Change color based on character limit
            if (currentLength > 950) {
                charCount.style.color = '#f56565';
            } else if (currentLength > 800) {
                charCount.style.color = '#ed8936';
            } else {
                charCount.style.color = '#4a5568';
            }
        });
    }
}

// Setup event listeners
function setupEventListeners() {
    // Contact form submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactSubmission);
    }
    
    // Form validation
    setupFormValidation();
    
    // Social links
    setupSocialLinks();
}

// Form validation setup
function setupFormValidation() {
    // Real-time validation for required fields
    document.querySelectorAll('input[required], select[required], textarea[required]').forEach(field => {
        field.addEventListener('blur', validateField);
        field.addEventListener('input', clearFieldError);
    });
    
    // Email validation
    document.querySelectorAll('input[type="email"]').forEach(field => {
        field.addEventListener('blur', validateEmail);
    });
    
    // Phone validation
    document.querySelectorAll('input[type="tel"]').forEach(field => {
        field.addEventListener('blur', validatePhone);
    });
}

// Validate individual field
function validateField(e) {
    const field = e.target;
    const value = field.value.trim();
    const errorElement = document.getElementById(field.id + 'Error');
    
    if (!value && field.hasAttribute('required')) {
        showFieldError(errorElement, 'This field is required');
        return false;
    }
    
    hideFieldError(errorElement);
    return true;
}

// Validate email
function validateEmail(e) {
    const email = e.target.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const errorElement = document.getElementById(e.target.id + 'Error');
    
    if (email && !emailRegex.test(email)) {
        showFieldError(errorElement, 'Please enter a valid email address');
        return false;
    }
    
    hideFieldError(errorElement);
    return true;
}

// Validate phone
function validatePhone(e) {
    const phone = e.target.value.trim();
    const phoneRegex = /^[+]?[0-9\s\-\(\)]{10,}$/;
    const errorElement = document.getElementById(e.target.id + 'Error');
    
    if (phone && !phoneRegex.test(phone)) {
        showFieldError(errorElement, 'Please enter a valid phone number');
        return false;
    }
    
    hideFieldError(errorElement);
    return true;
}

// Show field error
function showFieldError(element, message) {
    if (element) {
        element.textContent = message;
        element.classList.add('show');
    }
}

// Hide field error
function hideFieldError(element) {
    if (element) {
        element.classList.remove('show');
    }
}

// Clear field error on input
function clearFieldError(e) {
    const errorElement = document.getElementById(e.target.id + 'Error');
    hideFieldError(errorElement);
}

// Handle contact form submission
async function handleContactSubmission(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const contactData = {
        firstName: formData.get('firstName'),
        lastName: formData.get('lastName'),
        email: formData.get('email'),
        phone: formData.get('phone'),
        businessName: formData.get('businessName'),
        subject: formData.get('subject'),
        priority: formData.get('priority'),
        message: formData.get('message'),
        newsletter: formData.get('newsletter') === 'on',
        agree: formData.get('agree') === 'on'
    };
    
    // Validate form
    if (!validateContactForm(contactData)) {
        return;
    }
    
    // Show loading state
    const submitBtn = document.getElementById('submitBtn');
    setLoadingState(submitBtn, true);
    
    try {
        // Simulate API call
        await simulateApiCall(2000);
        
        // Store contact submission (in real app, send to server)
        storeContactSubmission(contactData);
        
        // Show success modal
        showSuccessModal();
        
        // Reset form
        e.target.reset();
        document.getElementById('charCount').textContent = '0';
        
    } catch (error) {
        showNotification('Failed to send message. Please try again.', 'error');
    } finally {
        setLoadingState(submitBtn, false);
    }
}

// Validate contact form
function validateContactForm(data) {
    let isValid = true;
    
    // Required fields validation
    const requiredFields = ['firstName', 'lastName', 'email', 'phone', 'subject', 'message'];
    requiredFields.forEach(field => {
        if (!data[field]) {
            const errorElement = document.getElementById(field + 'Error');
            showFieldError(errorElement, 'This field is required');
            isValid = false;
        }
    });
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (data.email && !emailRegex.test(data.email)) {
        showFieldError(document.getElementById('emailError'), 'Please enter a valid email address');
        isValid = false;
    }
    
    // Phone validation
    const phoneRegex = /^[+]?[0-9\s\-\(\)]{10,}$/;
    if (data.phone && !phoneRegex.test(data.phone)) {
        showFieldError(document.getElementById('phoneError'), 'Please enter a valid phone number');
        isValid = false;
    }
    
    // Message length validation
    if (data.message && data.message.length > 1000) {
        showFieldError(document.getElementById('messageError'), 'Message must be less than 1000 characters');
        isValid = false;
    }
    
    // Terms agreement validation
    if (!data.agree) {
        showFieldError(document.getElementById('agreeError'), 'You must agree to the terms and conditions');
        isValid = false;
    }
    
    return isValid;
}

// Set loading state for button
function setLoadingState(button, loading) {
    const btnText = button.querySelector('.btn-text');
    const btnLoader = button.querySelector('.btn-loader');
    
    if (loading) {
        btnText.style.display = 'none';
        btnLoader.style.display = 'inline-flex';
        button.disabled = true;
    } else {
        btnText.style.display = 'inline';
        btnLoader.style.display = 'none';
        button.disabled = false;
    }
}

// Simulate API call
function simulateApiCall(delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simulate occasional failures for demo
            if (Math.random() < 0.05) {
                reject(new Error('API Error'));
            } else {
                resolve();
            }
        }, delay);
    });
}

// Store contact submission
function storeContactSubmission(data) {
    const submissions = JSON.parse(localStorage.getItem('contactSubmissions') || '[]');
    const submission = {
        ...data,
        id: generateId(),
        timestamp: new Date().toISOString(),
        status: 'pending'
    };
    
    submissions.push(submission);
    localStorage.setItem('contactSubmissions', JSON.stringify(submissions));
    
    console.log('Contact submission stored:', submission);
}

// Generate unique ID
function generateId() {
    return 'contact_' + Math.random().toString(36).substr(2, 9);
}

// Show success modal
function showSuccessModal() {
    const modal = document.getElementById('successModal');
    if (modal) {
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }
}

// Close success modal
function closeSuccessModal() {
    const modal = document.getElementById('successModal');
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

// Setup social links
function setupSocialLinks() {
    document.querySelectorAll('.social-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const platform = this.querySelector('span').textContent;
            
            // In a real app, these would link to actual social profiles
            showNotification(`Opening ${platform}... (Demo mode)`, 'info');
            
            // Simulate opening social media
            console.log(`Would open ${platform} profile`);
        });
    });
}

// FAQ functionality
function initializeFAQ() {
    document.querySelectorAll('.faq-question').forEach(question => {
        question.addEventListener('click', function() {
            const faqItem = this.parentElement;
            const isActive = faqItem.classList.contains('active');
            
            // Close all FAQ items
            document.querySelectorAll('.faq-item').forEach(item => {
                item.classList.remove('active');
            });
            
            // Open clicked item if it wasn't active
            if (!isActive) {
                faqItem.classList.add('active');
            }
        });
    });
}

// Notification system
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle'}"></i>
        <span>${message}</span>
    `;
    
    // Styles
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
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 10);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (document.body.contains(notification)) {
                document.body.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

// Contact method interactions
document.addEventListener('DOMContentLoaded', function() {
    // WhatsApp contact
    document.querySelectorAll('.method-icon').forEach((icon, index) => {
        icon.parentElement.addEventListener('click', function() {
            const method = this.querySelector('.method-details h4').textContent;
            
            if (method.includes('WhatsApp')) {
                const phone = '+917205702493';
                const message = encodeURIComponent('Hello! I need help with mobile repair services.');
                window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
            } else if (method.includes('Email')) {
                window.open('mailto:support@mobilefixpro.com?subject=Support Request', '_blank');
            } else if (method.includes('Phone')) {
                window.open('tel:+917205702493', '_blank');
            }
        });
    });
});

console.log('📞 Contact page loaded successfully!');
console.log('💬 WhatsApp integration ready');