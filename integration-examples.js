/**
 * Example Integration Code
 * Copy these examples to your existing JavaScript files
 */

// ============================================
// FOR auth.js - Login/Register Page
// ============================================

// Replace your existing login function
async function handleLogin(event) {
    event.preventDefault();
    
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    const submitBtn = event.target.querySelector('button[type="submit"]');
    
    // Show loading state
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Logging in...';
    
    try {
        // Call Django backend
        const response = await API.auth.login(email, password);
        
        console.log('✅ Login successful:', response);
        
        // Show success message
        showToast('✅ Welcome back, ' + response.user.full_name + '!', 'success');
        
        // Redirect to homepage after 1 second
        setTimeout(() => {
            window.location.href = 'index.html';
        }, 1000);
        
    } catch (error) {
        console.error('❌ Login failed:', error);
        
        // Show error message
        showToast('❌ ' + (error.message || 'Invalid credentials'), 'error');
        
        // Reset button
        submitBtn.disabled = false;
        submitBtn.innerHTML = '<i class="fas fa-sign-in-alt"></i> Sign In';
    }
}

// Replace your existing register function
async function handleRegister(event) {
    event.preventDefault();
    
    const formData = {
        email: document.getElementById('regEmail').value,
        password: document.getElementById('regPassword').value,
        password_confirm: document.getElementById('regConfirmPassword').value,
        full_name: document.getElementById('regName').value,
        phone: document.getElementById('regPhone').value || ''
    };
    
    const submitBtn = event.target.querySelector('button[type="submit"]');
    
    // Validate passwords match
    if (formData.password !== formData.password_confirm) {
        showToast('❌ Passwords do not match', 'error');
        return;
    }
    
    // Show loading state
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Creating Account...';
    
    try {
        // Call Django backend
        const response = await API.auth.register(formData);
        
        console.log('✅ Registration successful:', response);
        
        // Show success message
        showToast('✅ Account created! Welcome ' + response.user.full_name, 'success');
        
        // Redirect to homepage
        setTimeout(() => {
            window.location.href = 'index.html';
        }, 1500);
        
    } catch (error) {
        console.error('❌ Registration failed:', error);
        
        // Parse error message
        let errorMsg = 'Registration failed';
        if (error.data && error.data.email) {
            errorMsg = error.data.email[0];
        } else if (error.message) {
            errorMsg = error.message;
        }
        
        showToast('❌ ' + errorMsg, 'error');
        
        // Reset button
        submitBtn.disabled = false;
        submitBtn.innerHTML = '<i class="fas fa-user-plus"></i> Create Account';
    }
}

// Add event listeners (place at bottom of auth.js)
document.addEventListener('DOMContentLoaded', () => {
    // Login form
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', handleLogin);
    }
    
    // Register form
    const registerForm = document.getElementById('registerForm');
    if (registerForm) {
        registerForm.addEventListener('submit', handleRegister);
    }
});


// ============================================
// FOR script.js - Homepage
// ============================================

// Add this to your script.js
document.addEventListener('DOMContentLoaded', () => {
    // Update UI based on login status
    updateAuthUI();
    
    // Load user data if logged in
    if (API.isAuthenticated()) {
        loadUserData();
    }
});

// Update authentication UI
function updateAuthUI() {
    const loginBtn = document.querySelector('.login-btn');
    const userInfoElement = document.querySelector('.user-info');
    
    if (API.isAuthenticated()) {
        const user = API.getCurrentUser();
        
        // Update login button
        if (loginBtn) {
            loginBtn.innerHTML = `
                <i class="fas fa-user"></i> 
                ${user.full_name || user.email}
                <i class="fas fa-caret-down"></i>
            `;
            loginBtn.href = 'javascript:void(0)';
            
            // Add dropdown menu
            const dropdown = document.createElement('div');
            dropdown.className = 'user-dropdown';
            dropdown.innerHTML = `
                <a href="#" onclick="viewProfile()">
                    <i class="fas fa-user"></i> Profile
                </a>
                <a href="#" onclick="viewOrders()">
                    <i class="fas fa-shopping-bag"></i> My Orders
                </a>
                <a href="#" onclick="logout()">
                    <i class="fas fa-sign-out-alt"></i> Logout
                </a>
            `;
            
            loginBtn.parentElement.style.position = 'relative';
            loginBtn.parentElement.appendChild(dropdown);
            
            loginBtn.addEventListener('click', (e) => {
                e.preventDefault();
                dropdown.classList.toggle('show');
            });
        }
        
        // Show user info
        if (userInfoElement) {
            userInfoElement.innerHTML = `
                <span>Welcome, ${user.full_name || user.email}!</span>
                ${user.is_membership_active ? '<span class="badge">Premium</span>' : ''}
            `;
            userInfoElement.style.display = 'block';
        }
        
    } else {
        // Not logged in
        if (loginBtn) {
            loginBtn.innerHTML = '<i class="fas fa-sign-in-alt"></i> Login';
            loginBtn.href = 'login.html';
        }
        
        if (userInfoElement) {
            userInfoElement.style.display = 'none';
        }
    }
}

// Load user data
async function loadUserData() {
    try {
        const user = await API.auth.getProfile();
        console.log('User data loaded:', user);
        
        // Update cart count if user has saved items
        // updateCartCount();
        
    } catch (error) {
        console.error('Failed to load user data:', error);
    }
}

// Logout function
async function logout() {
    if (!confirm('Are you sure you want to logout?')) return;
    
    try {
        await API.auth.logout();
        showToast('✅ Logged out successfully', 'success');
        
        setTimeout(() => {
            window.location.href = 'login.html';
        }, 1000);
        
    } catch (error) {
        console.error('Logout error:', error);
        // Force logout even if API call fails
        API.clearAuth();
        window.location.href = 'login.html';
    }
}

// View profile
function viewProfile() {
    window.location.href = 'profile.html'; // Create this page
}

// View orders
function viewOrders() {
    window.location.href = 'orders.html'; // Create this page
}


// ============================================
// FOR admin.js - Admin Dashboard
// ============================================

// Add authentication check at the top of admin.js
document.addEventListener('DOMContentLoaded', () => {
    // Check authentication
    if (!API.isAuthenticated()) {
        alert('Please login to access admin panel');
        window.location.href = 'login.html';
        return;
    }
    
    const user = API.getCurrentUser();
    
    // Check if user is admin (basic check - improve this later)
    if (!user.email.includes('admin') && !user.is_staff) {
        alert('Access denied. Admin privileges required.');
        window.location.href = 'index.html';
        return;
    }
    
    // Display admin name
    document.getElementById('adminName').textContent = user.full_name || user.email;
    
    // Load dashboard data
    loadAdminDashboard();
});

// Load admin dashboard data
async function loadAdminDashboard() {
    try {
        // Get user profile with admin data
        const user = await API.auth.getProfile();
        
        console.log('Admin user:', user);
        
        // TODO: Load statistics, orders, etc.
        // This will be implemented when we create admin API endpoints
        
    } catch (error) {
        console.error('Failed to load dashboard:', error);
        showToast('Failed to load dashboard data', 'error');
    }
}


// ============================================
// FOR cart.js - Shopping Cart
// ============================================

// Update checkout to require login
async function proceedToCheckout() {
    // Check if user is logged in
    if (!API.isAuthenticated()) {
        showToast('Please login to checkout', 'warning');
        
        // Save current cart
        localStorage.setItem('redirect_after_login', 'cart.html');
        
        // Redirect to login
        setTimeout(() => {
            window.location.href = 'login.html';
        }, 1500);
        
        return;
    }
    
    // User is logged in - proceed with checkout
    const user = API.getCurrentUser();
    
    // Pre-fill shipping info from user profile
    document.getElementById('shippingName').value = user.full_name || '';
    document.getElementById('shippingEmail').value = user.email;
    document.getElementById('shippingPhone').value = user.phone || '';
    document.getElementById('shippingAddress').value = user.address || '';
    document.getElementById('shippingCity').value = user.city || '';
    document.getElementById('shippingState').value = user.state || '';
    document.getElementById('shippingPincode').value = user.pincode || '';
    
    // Show checkout section
    showCheckoutSection();
}

// Create order (when payment is complete)
async function createOrder(orderData) {
    try {
        const order = await API.orders.create(orderData);
        
        console.log('Order created:', order);
        
        // Clear cart
        localStorage.removeItem('cart');
        
        // Show success
        showToast('✅ Order placed successfully!', 'success');
        
        // Redirect to order confirmation
        window.location.href = 'order-success.html?order=' + order.order_number;
        
    } catch (error) {
        console.error('Failed to create order:', error);
        showToast('❌ Failed to place order', 'error');
    }
}


// ============================================
// HELPER FUNCTIONS (Add to script.js or create utils.js)
// ============================================

// Show toast notification
function showToast(message, type = 'info') {
    // Create toast element
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.innerHTML = `
        <i class="fas fa-${getToastIcon(type)}"></i>
        <span>${message}</span>
    `;
    
    // Add to page
    document.body.appendChild(toast);
    
    // Show toast
    setTimeout(() => toast.classList.add('show'), 100);
    
    // Hide and remove after 3 seconds
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

function getToastIcon(type) {
    const icons = {
        success: 'check-circle',
        error: 'exclamation-circle',
        warning: 'exclamation-triangle',
        info: 'info-circle'
    };
    return icons[type] || 'info-circle';
}

// Add toast styles (add to your CSS file)
const toastStyles = `
.toast {
    position: fixed;
    top: 20px;
    right: 20px;
    background: white;
    padding: 15px 20px;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    display: flex;
    align-items: center;
    gap: 10px;
    transform: translateX(400px);
    transition: transform 0.3s ease;
    z-index: 10000;
}

.toast.show {
    transform: translateX(0);
}

.toast-success {
    border-left: 4px solid #4CAF50;
    color: #4CAF50;
}

.toast-error {
    border-left: 4px solid #f44336;
    color: #f44336;
}

.toast-warning {
    border-left: 4px solid #ff9800;
    color: #ff9800;
}

.toast-info {
    border-left: 4px solid #2196F3;
    color: #2196F3;
}

.user-dropdown {
    display: none;
    position: absolute;
    top: 100%;
    right: 0;
    background: white;
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    border-radius: 8px;
    min-width: 200px;
    margin-top: 10px;
    z-index: 1000;
}

.user-dropdown.show {
    display: block;
}

.user-dropdown a {
    display: block;
    padding: 12px 20px;
    color: #333;
    text-decoration: none;
    transition: background 0.2s;
}

.user-dropdown a:hover {
    background: #f5f5f5;
}

.user-dropdown a i {
    margin-right: 10px;
    width: 20px;
}
`;


// ============================================
// TESTING IN BROWSER CONSOLE
// ============================================

/*
Open browser console (F12) and test:

// Test registration
API.auth.register({
    email: 'test@example.com',
    password: 'TestPass123!',
    password_confirm: 'TestPass123!',
    full_name: 'Test User',
    phone: '+919876543210'
}).then(console.log).catch(console.error);

// Test login
API.auth.login('test@example.com', 'TestPass123!')
    .then(r => console.log('Logged in:', r))
    .catch(e => console.error('Login failed:', e));

// Check status
console.log('Authenticated:', API.isAuthenticated());
console.log('User:', API.getCurrentUser());

// Get profile
API.auth.getProfile().then(console.log);

// Update profile
API.auth.updateProfile({
    full_name: 'Updated Name',
    phone: '+919999999999'
}).then(console.log);

// Logout
API.auth.logout().then(() => console.log('Logged out'));
*/


// ============================================
// SUMMARY
// ============================================

/*
STEPS TO INTEGRATE:

1. Add to ALL HTML files (before closing </body>):
   <script src="api-client.js"></script>

2. Update auth.js:
   - Replace login function with handleLogin
   - Replace register function with handleRegister

3. Update script.js:
   - Add updateAuthUI() function
   - Call on page load

4. Update admin.js:
   - Add authentication check

5. Update cart.js:
   - Add login check before checkout

6. Test:
   - Start Django backend
   - Open website
   - Try registration
   - Try login
   - Check user state persists

DONE! Your website is now connected to Django backend! 🎉
*/
