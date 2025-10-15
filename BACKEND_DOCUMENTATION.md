# 🚀 Backend Functionality Documentation

## Overview
This document explains the **complete backend simulation** implemented for MobileFix Pro website using **localStorage** as the database.

---

## ✅ Features Implemented

### 1. 📞 **Contact Form Backend** (`backend.js`)

#### Functions:
- **`storeContactSubmission(data)`** - Stores contact form submissions
  - Generates unique submission ID (CNT_XXXXX)
  - Stores in localStorage
  - Sends admin notification
  - Sends auto-reply email to customer
  
- **`getAllContactSubmissions()`** - Retrieves all submissions
- **`updateContactSubmissionStatus(id, status, notes)`** - Updates submission status
- **`getContactSubmissionStats()`** - Returns statistics:
  - Total submissions
  - By status (pending, responded, closed)
  - By priority (urgent, high, medium, low)
  - Today's submissions

#### Data Structure:
```javascript
{
  id: "CNT_abc123xyz",
  firstName: "John",
  lastName: "Doe",
  email: "john@example.com",
  phone: "+91123456789",
  businessName: "John's Repair Shop",
  subject: "membership",
  priority: "medium",
  message: "I want to know about...",
  newsletter: true,
  timestamp: "2024-01-15T10:30:00.000Z",
  status: "pending",
  responseStatus: "awaiting_response",
  assignedTo: "Support Team"
}
```

---

### 2. 👥 **User Management Backend**

#### Functions:
- **`registerUser(userData)`** - Registers new users
  - Validates email uniqueness
  - Generates user ID (USR_XXXXX)
  - Sends welcome email
  - Returns success/error status
  
- **`loginUser(email, password)`** - Authenticates users
  - Updates last login time
  - Returns user object
  
- **`getAllUsers()`** - Gets all registered users
- **`updateUserStatus(userId, status)`** - Updates user status
- **`getUserStats()`** - Returns user statistics

#### Data Structure:
```javascript
{
  id: "USR_xyz789abc",
  firstName: "Rajesh",
  lastName: "Kumar",
  email: "rajesh@example.com",
  phone: "+917205702493",
  businessName: "Kumar Mobile Shop",
  registrationDate: "2024-01-15T10:00:00.000Z",
  status: "active",
  membershipStatus: "active",
  emailVerified: true,
  lastLogin: "2024-01-16T14:30:00.000Z"
}
```

---

### 3. 🛒 **Order Management Backend**

#### Functions:
- **`getAllOrders()`** - Retrieves all orders
- **`updateOrderStatus(orderId, status)`** - Updates order status
  - Maintains status history
  - Sends email notification to customer
  
- **`getOrderStats()`** - Returns order statistics:
  - Total orders
  - By status (pending, processing, shipped, delivered, cancelled)
  - Today's orders
  - Total revenue

#### Order Statuses:
- `pending` - Order placed, awaiting processing
- `processing` - Being prepared for shipment
- `shipped` - Out for delivery
- `delivered` - Successfully delivered
- `cancelled` - Order cancelled

---

### 4. 🔐 **Authentication Backend**

#### Functions:
- **`requestPasswordReset(email)`** - Initiates password reset
  - Generates reset token (RST_XXXXX)
  - Sets 1-hour expiry
  - Sends reset email
  
- **`sendWelcomeEmail(email, firstName)`** - Sends welcome email on registration
- **`sendPasswordResetEmail(email, token)`** - Sends password reset link

#### Email Log Structure:
```javascript
{
  id: "EMAIL_abc123",
  to: "customer@example.com",
  subject: "Welcome to MobileFix Pro!",
  body: "Dear Customer...",
  timestamp: "2024-01-15T10:30:00.000Z",
  status: "sent",
  type: "welcome" // or "auto_reply", "password_reset", "order_status"
}
```

---

### 5. 🔔 **Admin Notifications Backend**

#### Functions:
- **`sendAdminNotification(submission)`** - Creates admin notifications
- **`getAdminNotifications()`** - Retrieves all notifications
- **`markNotificationAsRead(notificationId)`** - Marks notification as read
- **`getUnreadNotificationCount()`** - Returns unread count

#### Notification Types:
- `contact_submission` - New contact form submission
- `new_order` - New order placed
- `user_register` - New user registration
- `low_stock` - Product low stock alert

---

### 6. 📦 **Product Management Backend**

#### Functions:
- **`saveProduct(productData)`** - Creates/updates products
  - Auto-generates product ID (PRD_XXXXX)
  - Logs admin activity
  
- **`deleteProduct(productId)`** - Deletes product
  - Logs admin activity

---

### 7. 📊 **Analytics Backend**

#### Functions:
- **`getDashboardStats()`** - Returns comprehensive statistics
  - User stats
  - Order stats
  - Contact stats
  - Notification counts
  
- **`getSalesData(period)`** - Returns sales data for charts
  - Daily sales for last week
  - Order counts and revenue

---

### 8. 📝 **Activity Logging**

#### Functions:
- **`logAdminActivity(action, description, userId)`** - Logs all admin actions
  - Keeps last 100 activities
  - Timestamps all actions
  
- **`getRecentAdminActivities(limit)`** - Retrieves recent activities

#### Activity Types:
- `user_login` - User logged in
- `user_register` - New user registered
- `product_create` - Product created
- `product_update` - Product updated
- `product_delete` - Product deleted
- `order_update` - Order status updated
- `user_update` - User status updated

---

## 🎯 How to Use

### In Contact Form (contact.js):
```javascript
// When form is submitted
const submission = window.backendAPI.storeContactSubmission(contactData);
console.log('Submission ID:', submission.id);

// Get all submissions (admin panel)
const submissions = window.backendAPI.getAllContactSubmissions();

// Get stats
const stats = window.backendAPI.getContactSubmissionStats();
```

### In Admin Panel (admin.js):
```javascript
// Get dashboard statistics
const stats = window.backendAPI.getDashboardStats();

// Get notifications
const notifications = window.backendAPI.getAdminNotifications();
const unreadCount = window.backendAPI.getUnreadNotificationCount();

// Update order status
window.backendAPI.updateOrderStatus('ORD123', 'shipped');

// Log activity
window.backendAPI.logAdminActivity('order_update', 'Order shipped');
```

### In Authentication (auth.js):
```javascript
// Register user
const result = window.backendAPI.registerUser(userData);
if (result.success) {
  console.log('User registered:', result.user);
}

// Login user
const loginResult = window.backendAPI.loginUser(email, password);
if (loginResult.success) {
  console.log('Login successful:', loginResult.user);
}

// Request password reset
window.backendAPI.requestPasswordReset(email);
```

---

## 💾 LocalStorage Keys Used

| Key | Purpose |
|-----|---------|
| `contactSubmissions` | All contact form submissions |
| `adminNotifications` | Admin notification queue |
| `emailLog` | All sent emails (simulated) |
| `users` | All registered users |
| `orders` | All orders |
| `adminProducts` | Products managed by admin |
| `adminActivities` | Admin activity log |
| `resetTokens` | Password reset tokens |
| `currentUser` | Currently logged in user |
| `authToken` | Authentication token |
| `cart` | Shopping cart data |

---

## 📧 Email Simulation

All emails are logged to `emailLog` in localStorage. Email types:
- **Auto-reply** - Sent when contact form submitted
- **Welcome** - Sent when user registers
- **Password Reset** - Sent when password reset requested
- **Order Status** - Sent when order status changes

---

## 🔒 Security Features

1. **Email Uniqueness** - Prevents duplicate registrations
2. **Password Reset Tokens** - Time-limited (1 hour)
3. **Session Management** - localStorage vs sessionStorage based on "Remember Me"
4. **Activity Logging** - All admin actions are logged
5. **Status Tracking** - Comprehensive status management

---

## 📊 Statistics Available

### User Statistics:
- Total users
- Active/inactive users
- New users this month
- Users with active membership

### Order Statistics:
- Total orders
- Orders by status
- Today's orders
- Total revenue

### Contact Statistics:
- Total submissions
- By status
- By priority
- Today's submissions

---

## 🚀 Testing the Backend

### Test Contact Form:
1. Go to `contact.html`
2. Fill and submit form
3. Open browser console
4. Check `localStorage.contactSubmissions`
5. Check `localStorage.adminNotifications`
6. Check `localStorage.emailLog`

### Test Registration:
1. Go to `login.html`
2. Click "Register" tab
3. Fill form and submit
4. Check `localStorage.users`
5. Check `localStorage.emailLog` for welcome email

### Test Admin Panel:
1. Go to `admin.html`
2. All data is loaded from localStorage
3. Try updating statuses
4. Check activity log

---

## 📝 Notes

- All data persists in browser localStorage
- Clear localStorage to reset all data
- For production, replace with real backend API calls
- Email simulation creates email logs instead of sending real emails
- All IDs are auto-generated with prefixes (CNT_, USR_, ORD_, PRD_, etc.)

---

## 🎓 For Future Enhancement

To connect to a real backend:
1. Replace localStorage calls with API fetch calls
2. Add authentication headers
3. Implement real email service (SendGrid, AWS SES, etc.)
4. Add database (MongoDB, PostgreSQL, etc.)
5. Implement real-time notifications (WebSockets)

---

**Backend Status:** ✅ Fully Functional  
**Data Persistence:** ✅ LocalStorage  
**Email System:** ✅ Simulated  
**Authentication:** ✅ Working  
**Admin Panel:** ✅ Integrated  
**Contact Form:** ✅ Complete

---

**Created by:** Qoder AI  
**Last Updated:** 2024-01-16
