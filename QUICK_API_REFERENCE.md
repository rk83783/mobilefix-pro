# 🚀 Quick API Reference - MobileFix Pro

## One-Page Cheat Sheet

---

## ⚡ Quick Start

### 1. Start Backend
```powershell
cd backend
.\venv\Scripts\activate
python manage.py runserver
```

### 2. Add to HTML (before closing `</body>`)
```html
<script src="api-client.js"></script>
```

### 3. Use the API
```javascript
// Login
await API.auth.login(email, password);

// Register
await API.auth.register({ email, password, password_confirm, full_name, phone });

// Get profile
await API.auth.getProfile();

// Logout
await API.auth.logout();
```

---

## 📡 All API Methods

### Authentication

| Method | Usage | Returns |
|--------|-------|---------|
| `API.auth.register(data)` | Register new user | `{user, access, refresh}` |
| `API.auth.login(email, password)` | Login user | `{user, access, refresh}` |
| `API.auth.logout()` | Logout user | `{message}` |
| `API.auth.getProfile()` | Get user profile | `{user}` |
| `API.auth.updateProfile(data)` | Update profile | `{user}` |
| `API.auth.changePassword(old, new, confirm)` | Change password | `{message}` |

### User Helpers

| Method | Usage | Returns |
|--------|-------|---------|
| `API.isAuthenticated()` | Check if logged in | `boolean` |
| `API.getCurrentUser()` | Get current user | `{user}` or `null` |
| `API.clearAuth()` | Clear all auth data | `void` |

### Products (Coming Soon)

| Method | Usage |
|--------|-------|
| `API.products.list(params)` | Get all products |
| `API.products.get(id)` | Get product by ID |
| `API.products.search(query)` | Search products |

### Orders (Coming Soon)

| Method | Usage |
|--------|-------|
| `API.orders.list()` | Get user orders |
| `API.orders.create(data)` | Create new order |
| `API.orders.get(id)` | Get order by ID |

### Payments (Coming Soon)

| Method | Usage |
|--------|-------|
| `API.payments.createRazorpayOrder(amount)` | Create Razorpay order |
| `API.payments.verifyRazorpayPayment(data)` | Verify payment |

---

## 💻 Code Examples

### Registration
```javascript
const data = {
    email: 'user@example.com',
    password: 'Password123!',
    password_confirm: 'Password123!',
    full_name: 'John Doe',
    phone: '+919876543210'
};

try {
    const response = await API.auth.register(data);
    console.log('Registered:', response.user);
    // User is now logged in automatically
} catch (error) {
    console.error('Error:', error.message);
}
```

### Login
```javascript
try {
    const response = await API.auth.login('user@example.com', 'Password123!');
    console.log('Logged in:', response.user);
    // Token is saved automatically
} catch (error) {
    console.error('Login failed:', error.message);
}
```

### Check Login Status
```javascript
if (API.isAuthenticated()) {
    const user = API.getCurrentUser();
    console.log('User:', user.full_name);
    console.log('Email:', user.email);
} else {
    console.log('Not logged in');
}
```

### Get Profile
```javascript
try {
    const user = await API.auth.getProfile();
    console.log('Profile:', user);
} catch (error) {
    if (error.status === 401) {
        // Not authenticated
        window.location.href = 'login.html';
    }
}
```

### Update Profile
```javascript
const updates = {
    full_name: 'John Updated',
    phone: '+919999999999',
    address: '123 Main St',
    city: 'Mumbai',
    state: 'Maharashtra',
    pincode: '400001'
};

try {
    const user = await API.auth.updateProfile(updates);
    console.log('Updated:', user);
} catch (error) {
    console.error('Update failed:', error.message);
}
```

### Logout
```javascript
try {
    await API.auth.logout();
    console.log('Logged out');
    window.location.href = 'login.html';
} catch (error) {
    // Still clear local data
    API.clearAuth();
    window.location.href = 'login.html';
}
```

---

## 🔧 Integration Steps

### Step 1: Update login.html
```html
<!-- Add before closing body tag -->
<script src="api-client.js"></script>
<script>
    document.getElementById('loginForm').addEventListener('submit', async (e) => {
        e.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        
        try {
            await API.auth.login(email, password);
            alert('Login successful!');
            window.location.href = 'index.html';
        } catch (error) {
            alert('Login failed: ' + error.message);
        }
    });
</script>
```

### Step 2: Update index.html
```html
<script src="api-client.js"></script>
<script>
    // Check login status
    if (API.isAuthenticated()) {
        const user = API.getCurrentUser();
        document.getElementById('userName').textContent = user.full_name;
    }
    
    // Logout function
    function logout() {
        API.auth.logout().then(() => {
            window.location.href = 'login.html';
        });
    }
</script>
```

### Step 3: Protect admin.html
```html
<script src="api-client.js"></script>
<script>
    // Check authentication
    if (!API.isAuthenticated()) {
        alert('Please login');
        window.location.href = 'login.html';
    }
</script>
```

---

## ⚠️ Error Handling

### Standard Pattern
```javascript
try {
    const response = await API.auth.login(email, password);
    // Success
} catch (error) {
    // Error
    console.error('Status:', error.status);
    console.error('Message:', error.message);
    console.error('Data:', error.data);
}
```

### Common Errors
```javascript
if (error.status === 400) {
    // Bad request - validation error
    console.log('Validation error:', error.data);
}

if (error.status === 401) {
    // Unauthorized - not logged in or token expired
    window.location.href = 'login.html';
}

if (error.status === 403) {
    // Forbidden - not allowed
    alert('Access denied');
}

if (error.status === 404) {
    // Not found
    alert('Resource not found');
}

if (error.status === 500) {
    // Server error
    alert('Server error. Please try again later.');
}
```

---

## 🎯 Common Tasks

### Show User Name
```javascript
if (API.isAuthenticated()) {
    const user = API.getCurrentUser();
    document.querySelector('.user-name').textContent = user.full_name || user.email;
}
```

### Redirect if Not Logged In
```javascript
if (!API.isAuthenticated()) {
    window.location.href = 'login.html';
}
```

### Protect a Page
```javascript
document.addEventListener('DOMContentLoaded', () => {
    if (!API.isAuthenticated()) {
        alert('Please login to access this page');
        window.location.href = 'login.html';
        return;
    }
    
    // Page is protected - load data
    loadPageData();
});
```

### Pre-fill Form with User Data
```javascript
async function prefillForm() {
    const user = await API.auth.getProfile();
    
    document.getElementById('name').value = user.full_name || '';
    document.getElementById('email').value = user.email;
    document.getElementById('phone').value = user.phone || '';
    document.getElementById('address').value = user.address || '';
}
```

---

## 🧪 Test in Console

Open browser console (F12) and run:

```javascript
// Test registration
API.auth.register({
    email: 'test@test.com',
    password: 'Test123!',
    password_confirm: 'Test123!',
    full_name: 'Test User'
}).then(console.log);

// Test login
API.auth.login('test@test.com', 'Test123!').then(console.log);

// Check status
console.log(API.isAuthenticated());
console.log(API.getCurrentUser());

// Get profile
API.auth.getProfile().then(console.log);

// Logout
API.auth.logout().then(() => console.log('Logged out'));
```

---

## 📝 Configuration

### Change Backend URL
```javascript
// In api-client.js, line 10:
const API_CONFIG = {
    BASE_URL: 'https://your-backend-url.com/api',  // Change this
    // ... rest of config
};
```

### Token Storage Keys
```javascript
const API_CONFIG = {
    TOKEN_KEY: 'access_token',      // localStorage key for access token
    REFRESH_KEY: 'refresh_token',   // localStorage key for refresh token
    USER_KEY: 'current_user'        // localStorage key for user data
};
```

---

## ✅ Checklist

- [ ] Backend server running (`python manage.py runserver`)
- [ ] `api-client.js` included in HTML files
- [ ] Login form calls `API.auth.login()`
- [ ] Register form calls `API.auth.register()`
- [ ] Logout button calls `API.auth.logout()`
- [ ] Check `API.isAuthenticated()` on page load
- [ ] Protected pages redirect to login
- [ ] Error handling implemented
- [ ] Success messages shown

---

## 🆘 Quick Troubleshooting

| Problem | Solution |
|---------|----------|
| CORS error | Check backend `.env` has your frontend URL |
| 401 Unauthorized | Token expired - auto-refreshes or redirect to login |
| Network error | Backend not running or wrong URL |
| Import errors | Make sure `api-client.js` is loaded first |
| Token not saving | Check localStorage is enabled in browser |

---

## 📚 Full Documentation

- **API Integration Guide**: `API_INTEGRATION_GUIDE.md`
- **Integration Examples**: `integration-examples.js`
- **Backend API Docs**: `backend/README.md`
- **Backend Setup**: `backend/QUICKSTART.md`

---

**Ready to connect! 🚀**

Copy the examples above and integrate them into your existing JavaScript files!
