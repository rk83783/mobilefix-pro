# 🧪 Testing Guide - MobileFix Pro Backend

## Quick Start Testing

### 🎯 Prerequisites
1. Open the website in a browser
2. Open Browser Developer Console (F12)
3. Go to Console tab to see backend logs

---

## 1. Testing Contact Form Backend

### Steps:
1. Navigate to `contact.html`
2. Fill out the contact form:
   - First Name: John
   - Last Name: Doe  
   - Email: john@example.com
   - Phone: +917205702493
   - Subject: Product Support
   - Priority: High
   - Message: "I need help with..."
   - Check "I agree to terms"
3. Click "Send Message"

### Expected Results:
✅ Success modal appears  
✅ Console shows:
```
✅ Contact submission stored: {id: "CNT_xxx", ...}
📧 Auto-reply sent to: john@example.com
🔔 Admin notification sent
```

### Verify in Console:
```javascript
// Check contact submissions
JSON.parse(localStorage.getItem('contactSubmissions'))

// Check admin notifications
JSON.parse(localStorage.getItem('adminNotifications'))

// Check email log
JSON.parse(localStorage.getItem('emailLog'))

// Get stats
window.backendAPI.getContactSubmissionStats()
```

---

## 2. Testing User Registration

### Steps:
1. Navigate to `login.html`
2. Click "Register" tab
3. Fill registration form:
   - First Name: Rajesh
   - Last Name: Kumar
   - Email: rajesh@gmail.com
   - Phone: +919876543210
   - Business Name: Kumar Mobile Shop
   - Password: Test@123
   - Confirm Password: Test@123
   - Check "I agree to terms"
4. Click "Create Account"

### Expected Results:
✅ Success modal appears with "Account Created Successfully!"  
✅ Console shows:
```
✅ User registered successfully: rajesh@gmail.com
```
✅ Automatically switches to Login tab after 3 seconds

### Verify in Console:
```javascript
// Check registered users
JSON.parse(localStorage.getItem('users'))

// Check welcome email sent
JSON.parse(localStorage.getItem('emailLog'))

// Get user stats
window.backendAPI.getUserStats()
```

---

## 3. Testing User Login

### Steps:
1. Navigate to `login.html`
2. Use credentials from registration:
   - Email: rajesh@gmail.com
   - Password: any password (demo mode accepts any)
3. Optionally check "Remember me"
4. Click "Sign In"

### Expected Results:
✅ Success modal shows "Login Successful!"  
✅ Console shows:
```
✅ User logged in: rajesh@gmail.com
```
✅ Redirects to products.html after 2 seconds  
✅ User data stored in session/localStorage

### Verify in Console:
```javascript
// Check current user
JSON.parse(sessionStorage.getItem('currentUser'))
// or
JSON.parse(localStorage.getItem('currentUser'))

// Check auth token
sessionStorage.getItem('authToken')
```

---

## 4. Testing Password Reset

### Steps:
1. Navigate to `login.html`
2. Click "Forgot Password?"
3. Enter email: rajesh@gmail.com
4. Click "Send Reset Link"

### Expected Results:
✅ Modal closes  
✅ Success notification shows "Reset Link Sent!"  
✅ Console shows email sent

### Verify in Console:
```javascript
// Check reset tokens
JSON.parse(localStorage.getItem('resetTokens'))

// Check email log for reset email
JSON.parse(localStorage.getItem('emailLog')).filter(e => e.type === 'password_reset')
```

---

## 5. Testing Admin Dashboard

### Steps:
1. Navigate to `admin.html`
2. Login first if not logged in
3. View dashboard statistics

### Expected Results:
✅ Dashboard shows real stats from localStorage  
✅ Console shows:
```
🏢 Admin dashboard loaded successfully!
📊 Dashboard features ready
📊 Dashboard loaded with real stats: {...}
```

### Test Dashboard Features:
```javascript
// Get dashboard stats
window.backendAPI.getDashboardStats()

// Get all orders
window.backendAPI.getAllOrders()

// Get all users
window.backendAPI.getAllUsers()

// Get contact submissions
window.backendAPI.getAllContactSubmissions()
```

---

## 6. Testing Order Management

### Steps in Console:
```javascript
// Create a test order (simulated)
const testOrder = {
  id: 'ORD123',
  customerEmail: 'test@example.com',
  total: 1299,
  status: 'pending',
  timestamp: new Date().toISOString()
};

const orders = JSON.parse(localStorage.getItem('orders') || '[]');
orders.push(testOrder);
localStorage.setItem('orders', JSON.stringify(orders));

// Update order status
window.backendAPI.updateOrderStatus('ORD123', 'shipped');

// Check email sent
JSON.parse(localStorage.getItem('emailLog')).filter(e => e.type === 'order_status')
```

---

## 7. Testing Admin Notifications

### Check notifications:
```javascript
// Get all notifications
window.backendAPI.getAdminNotifications()

// Get unread count
window.backendAPI.getUnreadNotificationCount()

// Mark as read
window.backendAPI.markNotificationAsRead('NOT_xxx')
```

---

## 8. Testing Activity Logging

### Check admin activities:
```javascript
// Get recent activities
window.backendAPI.getRecentAdminActivities(10)

// Log a custom activity
window.backendAPI.logAdminActivity('test_action', 'Testing activity log', 'admin')
```

---

## 9. Testing Product Management

### Test in Console:
```javascript
// Create a new product
window.backendAPI.saveProduct({
  name: 'Universal OLED Display Pro',
  category: 'display',
  price: 1499,
  originalPrice: 1799,
  description: 'Premium OLED display',
  stock: 50,
  status: 'active'
});

// Delete a product
window.backendAPI.deleteProduct('PRD_xxx');

// Check products
JSON.parse(localStorage.getItem('adminProducts'))
```

---

## 10. Testing Analytics

### Get analytics data:
```javascript
// Get dashboard statistics
const stats = window.backendAPI.getDashboardStats();
console.table(stats.users);
console.table(stats.orders);
console.table(stats.contacts);

// Get sales data for charts
const salesData = window.backendAPI.getSalesData('week');
console.table(salesData);
```

---

## 🔍 Debugging Tips

### View All LocalStorage Data:
```javascript
// See all keys
Object.keys(localStorage)

// View specific data
console.table(JSON.parse(localStorage.getItem('users')))
console.table(JSON.parse(localStorage.getItem('contactSubmissions')))
console.table(JSON.parse(localStorage.getItem('orders')))
```

### Clear All Data:
```javascript
// Clear all localStorage (reset)
localStorage.clear()

// Or clear specific items
localStorage.removeItem('users')
localStorage.removeItem('contactSubmissions')
```

### Monitor Backend API:
```javascript
// Check if backend is loaded
console.log('Backend API:', window.backendAPI)

// List all available functions
console.log(Object.keys(window.backendAPI))
```

---

## 📊 Sample Data Generator

### Populate with test data:
```javascript
// Create 5 test users
for(let i = 1; i <= 5; i++) {
  window.backendAPI.registerUser({
    firstName: `User${i}`,
    lastName: `Test`,
    email: `user${i}@test.com`,
    phone: `+9198765432${i}0`,
    businessName: `Shop ${i}`,
    password: 'test123',
    terms: true
  });
}

// Create 5 test contact submissions
for(let i = 1; i <= 5; i++) {
  window.backendAPI.storeContactSubmission({
    firstName: `Contact${i}`,
    lastName: `Test`,
    email: `contact${i}@test.com`,
    phone: `+9198765432${i}0`,
    subject: 'product',
    priority: ['low', 'medium', 'high'][i % 3],
    message: `Test message ${i}`,
    agree: true
  });
}

console.log('✅ Test data created!');
```

---

## ✅ Success Checklist

- [ ] Contact form submits successfully
- [ ] Auto-reply email logged
- [ ] Admin notification created
- [ ] User registration works
- [ ] Welcome email sent
- [ ] Login authentication works
- [ ] Password reset generates token
- [ ] Admin dashboard loads stats
- [ ] Order status updates
- [ ] Email notifications sent
- [ ] Activity logging works
- [ ] Product management functional
- [ ] Analytics data available

---

## 🎯 Expected Console Output

When everything is working, you should see:
```
🚀 Backend simulation loaded successfully!
📊 API available at window.backendAPI
💾 All data stored in localStorage
📞 Contact page loaded successfully!
💬 WhatsApp integration ready
📊 Contact form backend simulation active
🔐 Authentication system loaded successfully!
💡 Demo accounts: any email/password combination works
🏢 Admin dashboard loaded successfully!
📊 Dashboard features ready
```

---

## 🚨 Common Issues

### Issue: "backendAPI is not defined"
**Solution:** Make sure `backend.js` is loaded before other scripts:
```html
<script src="backend.js"></script>
<script src="script.js"></script>
<script src="contact.js"></script>
```

### Issue: Data not persisting
**Solution:** Check if localStorage is enabled and not in incognito mode

### Issue: Emails not showing in emailLog
**Solution:** Check console for errors. Verify backend.js is loaded.

---

## 📱 Mobile Testing

Test on mobile devices:
1. Open in mobile browser
2. Use Chrome DevTools mobile view
3. Access localStorage via console
4. Test all forms and features

---

**Happy Testing! 🎉**

All backend features are fully functional and ready to use!
