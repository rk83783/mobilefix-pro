# 🔗 API Integration Guide - MobileFix Pro

## Complete guide to connect your frontend with Django backend

---

## 📋 Table of Contents

1. [Quick Setup](#quick-setup)
2. [API Client Usage](#api-client-usage)
3. [Authentication Examples](#authentication-examples)
4. [Integration with Existing Pages](#integration-with-existing-pages)
5. [Error Handling](#error-handling)
6. [Advanced Features](#advanced-features)

---

## 🚀 Quick Setup

### Step 1: Start Django Backend

```powershell
# Navigate to backend folder
cd c:\Users\Rakesh\.cursor\mobile-repair-website\backend

# Activate virtual environment
.\venv\Scripts\activate

# Start server
python manage.py runserver
```

**Backend will run at:** `http://127.0.0.1:8000`

### Step 2: Include API Client in Your HTML

Add this line to **ALL your HTML files** (index.html, login.html, products.html, etc.):

```html
<!-- Add BEFORE your existing script files -->
<script src="api-client.js"></script>
```

**Example in login.html:**
```html
<!DOCTYPE html>
<html>
<head>
    <!-- ... existing head content ... -->
</head>
<body>
    <!-- ... existing body content ... -->
    
    <!-- API Client (ADD THIS) -->
    <script src="api-client.js"></script>
    
    <!-- Your existing scripts -->
    <script src="auth.js"></script>
</body>
</html>
```

---

## 📡 API Client Usage

The API client provides a simple `API` object with all methods you need.

### Check Authentication Status

```javascript
// Check if user is logged in
if (API.isAuthenticated()) {
    console.log('User is logged in!');
    const user = API.getCurrentUser();
    console.log('User:', user);
} else {
    console.log('User is not logged in');
}
```

### Get Current User

```javascript
const user = API.getCurrentUser();
console.log('Email:', user.email);
console.log('Name:', user.full_name);
console.log('Membership:', user.is_membership_active);
```

---

## 🔐 Authentication Examples

### 1. User Registration

```javascript
// Registration form handler
async function handleRegister(event) {
    event.preventDefault();
    
    const formData = {
        email: document.getElementById('email').value,
        password: document.getElementById('password').value,
        password_confirm: document.getElementById('confirmPassword').value,
        full_name: document.getElementById('fullName').value,
        phone: document.getElementById('phone').value
    };
    
    try {
        const response = await API.auth.register(formData);
        
        // Success! User is now registered and logged in
        console.log('Registration successful!', response);
        
        // Show success message
        showToast('Registration successful! Welcome ' + response.user.full_name, 'success');
        
        // Redirect to dashboard or home
        setTimeout(() => {
            window.location.href = 'index.html';
        }, 1500);
        
    } catch (error) {
        console.error('Registration failed:', error);
        
        // Show error message
        showToast(error.message || 'Registration failed', 'error');
    }
}
```

### 2. User Login

```javascript
// Login form handler
async function handleLogin(event) {
    event.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    try {
        const response = await API.auth.login(email, password);
        
        // Success! User is now logged in
        console.log('Login successful!', response);
        
        // Show success message
        showToast('Welcome back, ' + response.user.full_name + '!', 'success');
        
        // Update UI
        updateUserUI(response.user);
        
        // Redirect to home or previous page
        setTimeout(() => {
            window.location.href = 'index.html';
        }, 1500);
        
    } catch (error) {
        console.error('Login failed:', error);
        showToast(error.message || 'Invalid email or password', 'error');
    }
}
```

### 3. User Logout

```javascript
// Logout handler
async function handleLogout() {
    try {
        await API.auth.logout();
        
        // Success! User is logged out
        showToast('Logged out successfully', 'success');
        
        // Redirect to login page
        setTimeout(() => {
            window.location.href = 'login.html';
        }, 1000);
        
    } catch (error) {
        console.error('Logout error:', error);
        // Still clear local data even if API call fails
        API.clearAuth();
        window.location.href = 'login.html';
    }
}
```

### 4. Get User Profile

```javascript
// Load user profile
async function loadUserProfile() {
    try {
        const user = await API.auth.getProfile();
        
        // Display user data
        document.getElementById('userName').textContent = user.full_name || user.email;
        document.getElementById('userEmail').textContent = user.email;
        document.getElementById('userPhone').textContent = user.phone || 'Not provided';
        document.getElementById('membershipStatus').textContent = 
            user.is_membership_active ? 'Active' : 'Inactive';
        
    } catch (error) {
        console.error('Failed to load profile:', error);
        showToast('Failed to load profile', 'error');
    }
}

// Call on page load
if (API.isAuthenticated()) {
    loadUserProfile();
}
```

### 5. Update User Profile

```javascript
// Update profile handler
async function handleUpdateProfile(event) {
    event.preventDefault();
    
    const profileData = {
        full_name: document.getElementById('fullName').value,
        phone: document.getElementById('phone').value,
        address: document.getElementById('address').value,
        city: document.getElementById('city').value,
        state: document.getElementById('state').value,
        pincode: document.getElementById('pincode').value
    };
    
    try {
        const updatedUser = await API.auth.updateProfile(profileData);
        
        // Success!
        showToast('Profile updated successfully!', 'success');
        
        // Update UI
        updateUserUI(updatedUser);
        
    } catch (error) {
        console.error('Update failed:', error);
        showToast(error.message || 'Failed to update profile', 'error');
    }
}
```

### 6. Change Password

```javascript
// Change password handler
async function handleChangePassword(event) {
    event.preventDefault();
    
    const oldPassword = document.getElementById('oldPassword').value;
    const newPassword = document.getElementById('newPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    
    // Validate
    if (newPassword !== confirmPassword) {
        showToast('New passwords do not match', 'error');
        return;
    }
    
    try {
        await API.auth.changePassword(oldPassword, newPassword, confirmPassword);
        
        // Success!
        showToast('Password changed successfully!', 'success');
        
        // Clear form
        event.target.reset();
        
    } catch (error) {
        console.error('Password change failed:', error);
        showToast(error.message || 'Failed to change password', 'error');
    }
}
```

---

## 🔧 Integration with Existing Pages

### Update `auth.js` (Login/Register Page)

Replace your existing login/register functions:

```javascript
// In your auth.js file

// Registration Tab - Update the submit handler
document.getElementById('registerForm')?.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const formData = {
        email: document.getElementById('regEmail').value,
        password: document.getElementById('regPassword').value,
        password_confirm: document.getElementById('regConfirmPassword').value,
        full_name: document.getElementById('regName').value,
        phone: document.getElementById('regPhone').value
    };
    
    const submitBtn = e.target.querySelector('button[type="submit"]');
    submitBtn.disabled = true;
    submitBtn.textContent = 'Creating Account...';
    
    try {
        const response = await API.auth.register(formData);
        
        showToast('✅ Account created successfully!', 'success');
        
        setTimeout(() => {
            window.location.href = 'index.html';
        }, 1500);
        
    } catch (error) {
        showToast('❌ ' + (error.message || 'Registration failed'), 'error');
        submitBtn.disabled = false;
        submitBtn.textContent = 'Create Account';
    }
});

// Login Tab - Update the submit handler
document.getElementById('loginForm')?.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    
    const submitBtn = e.target.querySelector('button[type="submit"]');
    submitBtn.disabled = true;
    submitBtn.textContent = 'Logging in...';
    
    try {
        const response = await API.auth.login(email, password);
        
        showToast('✅ Welcome back, ' + response.user.full_name + '!', 'success');
        
        setTimeout(() => {
            window.location.href = 'index.html';
        }, 1500);
        
    } catch (error) {
        showToast('❌ ' + (error.message || 'Invalid credentials'), 'error');
        submitBtn.disabled = false;
        submitBtn.textContent = 'Sign In';
    }
});
```

### Update `script.js` (Homepage)

Add user state management:

```javascript
// In your script.js file

// Check authentication on page load
document.addEventListener('DOMContentLoaded', () => {
    updateAuthUI();
});

// Update UI based on authentication state
function updateAuthUI() {
    const loginBtn = document.querySelector('.login-btn');
    const userMenu = document.querySelector('.user-menu'); // If you have one
    
    if (API.isAuthenticated()) {
        const user = API.getCurrentUser();
        
        // Update login button to show user name
        if (loginBtn) {
            loginBtn.textContent = user.full_name || user.email;
            loginBtn.href = '#';
            loginBtn.addEventListener('click', (e) => {
                e.preventDefault();
                showUserMenu();
            });
        }
        
        // Show user menu if exists
        if (userMenu) {
            userMenu.style.display = 'block';
        }
        
    } else {
        // User not logged in - show login button
        if (loginBtn) {
            loginBtn.textContent = 'Login';
            loginBtn.href = 'login.html';
        }
        
        if (userMenu) {
            userMenu.style.display = 'none';
        }
    }
}

// Logout function
function logout() {
    API.auth.logout().then(() => {
        showToast('Logged out successfully', 'success');
        updateAuthUI();
        setTimeout(() => {
            window.location.href = 'login.html';
        }, 1000);
    });
}
```

### Protect Admin Page

Add authentication check to `admin.html`:

```javascript
// In admin.js or at the top of admin.html <script>

// Check if user is authenticated and is admin
document.addEventListener('DOMContentLoaded', () => {
    if (!API.isAuthenticated()) {
        // Not logged in - redirect to login
        window.location.href = 'login.html';
        return;
    }
    
    const user = API.getCurrentUser();
    
    // Check if user is admin (you can add is_staff field to user model)
    if (!user.email.includes('admin')) {  // Simple check - improve this
        alert('Access denied. Admin only.');
        window.location.href = 'index.html';
        return;
    }
    
    // Load admin data
    loadAdminDashboard();
});
```

---

## ⚠️ Error Handling

### Try-Catch Pattern

Always use try-catch when calling API methods:

```javascript
try {
    const response = await API.auth.login(email, password);
    // Handle success
} catch (error) {
    // Handle error
    console.error('Error:', error);
    
    // Access error details
    console.log('Status:', error.status);
    console.log('Message:', error.message);
    console.log('Data:', error.data);
    
    // Show user-friendly message
    showToast(error.message || 'Something went wrong', 'error');
}
```

### Handle Specific Errors

```javascript
try {
    await API.auth.login(email, password);
} catch (error) {
    if (error.status === 401) {
        showToast('Invalid email or password', 'error');
    } else if (error.status === 500) {
        showToast('Server error. Please try again later.', 'error');
    } else if (error.message.includes('network')) {
        showToast('Network error. Check your connection.', 'error');
    } else {
        showToast(error.message || 'Login failed', 'error');
    }
}
```

---

## 🚀 Advanced Features

### Auto Token Refresh

The API client automatically refreshes expired tokens:

```javascript
// You don't need to do anything - it handles it automatically!
// If token expires during a request, it will:
// 1. Try to refresh the token
// 2. Retry the original request
// 3. If refresh fails, logout the user

const user = await API.auth.getProfile();
// ✅ Works even if token expired - auto-refreshes!
```

### Custom Request

For custom API calls not covered by the client:

```javascript
// Make custom API request
const data = await API.request('/custom-endpoint/', {
    method: 'POST',
    body: { custom: 'data' }
});
```

### Upload Files

```javascript
// Upload product image
const fileInput = document.getElementById('productImage');
const file = fileInput.files[0];

try {
    const response = await API.uploads.uploadImage(file, 'product');
    console.log('Image uploaded:', response.file_url);
    showToast('Image uploaded successfully!', 'success');
} catch (error) {
    showToast('Upload failed: ' + error.message, 'error');
}
```

---

## 🧪 Testing the Integration

### Test in Browser Console

Open your browser console (F12) and try:

```javascript
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
    .then(console.log)
    .catch(console.error);

// Check if logged in
console.log('Authenticated:', API.isAuthenticated());
console.log('Current user:', API.getCurrentUser());

// Test profile
API.auth.getProfile().then(console.log).catch(console.error);

// Test logout
API.auth.logout().then(() => console.log('Logged out!'));
```

---

## 📝 Complete Example: Login Page Integration

Here's a complete working example for your login page:

```html
<!DOCTYPE html>
<html>
<head>
    <title>Login - MobileFix Pro</title>
    <link rel="stylesheet" href="auth.css">
</head>
<body>
    <div class="auth-container">
        <form id="loginForm">
            <h2>Login</h2>
            <input type="email" id="email" placeholder="Email" required>
            <input type="password" id="password" placeholder="Password" required>
            <button type="submit">Sign In</button>
        </form>
    </div>
    
    <!-- Include API Client -->
    <script src="api-client.js"></script>
    
    <!-- Your login script -->
    <script>
        document.getElementById('loginForm').addEventListener('submit', async (e) => {
            e.preventDefault();
            
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            
            try {
                const response = await API.auth.login(email, password);
                alert('Welcome back, ' + response.user.full_name + '!');
                window.location.href = 'index.html';
            } catch (error) {
                alert('Login failed: ' + error.message);
            }
        });
    </script>
</body>
</html>
```

---

## 🎯 Next Steps

1. ✅ **Include api-client.js** in all HTML files
2. ✅ **Update auth.js** with API calls
3. ✅ **Test registration and login**
4. ✅ **Update navigation** to show user state
5. ✅ **Protect admin pages**
6. ✅ **Add profile management**

---

## 🆘 Troubleshooting

### CORS Errors

If you see CORS errors in console:

1. Check backend is running: `http://127.0.0.1:8000`
2. Check `.env` file has: `CORS_ALLOWED_ORIGINS=http://localhost:8080`
3. Restart Django server after changing .env

### 401 Unauthorized

- Token expired: API auto-refreshes
- Invalid token: Clear storage and login again
- Not logged in: Redirect to login page

### Network Errors

- Backend not running: Start Django server
- Wrong URL: Check `API_CONFIG.BASE_URL` in api-client.js
- Firewall: Allow port 8000

---

## ✅ Checklist

- [ ] Backend server running on port 8000
- [ ] api-client.js included in HTML files
- [ ] Login form updated to use API.auth.login()
- [ ] Register form updated to use API.auth.register()
- [ ] Logout button connected to API.auth.logout()
- [ ] User state checked on page load
- [ ] Admin page protected with authentication check
- [ ] Error handling implemented
- [ ] Success messages shown to users

---

**Ready to connect your website to the backend! 🚀**

For more details, check:
- `api-client.js` - Full API client code
- Backend `README.md` - API endpoint documentation
- Backend `QUICKSTART.md` - Backend setup guide
