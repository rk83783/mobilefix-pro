// Backend Simulation for MobileFix Pro
// This file simulates backend functionality using localStorage

// ==================== CONTACT FORM BACKEND ====================

// Enhanced contact submission storage
function storeContactSubmission(data) {
    const submissions = JSON.parse(localStorage.getItem('contactSubmissions') || '[]');
    const submission = {
        ...data,
        id: 'CNT' + Math.random().toString(36).substr(2, 9).toUpperCase(),
        timestamp: new Date().toISOString(),
        status: 'pending',
        responseStatus: 'awaiting_response',
        assignedTo: 'Support Team',
        priority: data.priority || 'medium'
    };
    
    submissions.push(submission);
    localStorage.setItem('contactSubmissions', JSON.stringify(submissions));
    
    // Send notifications
    sendAdminNotification(submission);
    sendAutoReplyEmail(data.email, submission.id);
    
    console.log('✅ Contact submission stored:', submission);
    return submission;
}

// Send admin notification
function sendAdminNotification(submission) {
    const notifications = JSON.parse(localStorage.getItem('adminNotifications') || '[]');
    notifications.unshift({
        id: 'NOT' + Math.random().toString(36).substr(2, 9).toUpperCase(),
        type: 'contact_submission',
        title: 'New Contact Form Submission',
        message: `${submission.firstName} ${submission.lastName} submitted a ${submission.subject} inquiry`,
        submissionId: submission.id,
        timestamp: new Date().toISOString(),
        read: false,
        priority: submission.priority
    });
    localStorage.setItem('adminNotifications', JSON.stringify(notifications));
    console.log('🔔 Admin notification created');
}

// Send auto-reply email (simulated)
function sendAutoReplyEmail(email, submissionId) {
    const emailLog = JSON.parse(localStorage.getItem('emailLog') || '[]');
    emailLog.push({
        id: 'EMAIL' + Math.random().toString(36).substr(2, 9).toUpperCase(),
        to: email,
        subject: 'Thank you for contacting MobileFix Pro',
        body: `Dear Customer,

Thank you for reaching out to us. Your inquiry (ID: ${submissionId}) has been received and assigned to our support team.

We aim to respond within 24 hours during business days.

Best regards,
MobileFix Pro Support Team`,
        timestamp: new Date().toISOString(),
        status: 'sent',
        type: 'auto_reply'
    });
    localStorage.setItem('emailLog', JSON.stringify(emailLog));
    console.log('📧 Auto-reply email sent to:', email);
}

// Get all contact submissions
function getAllContactSubmissions() {
    return JSON.parse(localStorage.getItem('contactSubmissions') || '[]');
}

// Update submission status
function updateContactSubmissionStatus(submissionId, status, notes) {
    const submissions = getAllContactSubmissions();
    const index = submissions.findIndex(s => s.id === submissionId);
    
    if (index !== -1) {
        submissions[index].status = status;
        submissions[index].lastUpdated = new Date().toISOString();
        if (notes) submissions[index].notes = notes;
        
        localStorage.setItem('contactSubmissions', JSON.stringify(submissions));
        console.log('✅ Submission status updated:', submissionId, status);
        return true;
    }
    return false;
}

// Get contact submission stats
function getContactSubmissionStats() {
    const submissions = getAllContactSubmissions();
    return {
        total: submissions.length,
        pending: submissions.filter(s => s.status === 'pending').length,
        responded: submissions.filter(s => s.status === 'responded').length,
        closed: submissions.filter(s => s.status === 'closed').length,
        byPriority: {
            urgent: submissions.filter(s => s.priority === 'urgent').length,
            high: submissions.filter(s => s.priority === 'high').length,
            medium: submissions.filter(s => s.priority === 'medium').length,
            low: submissions.filter(s => s.priority === 'low').length
        },
        todaySubmissions: submissions.filter(s => {
            const today = new Date().toDateString();
            const subDate = new Date(s.timestamp).toDateString();
            return today === subDate;
        }).length
    };
}

// ==================== ADMIN BACKEND ====================

// Get all admin notifications
function getAdminNotifications() {
    return JSON.parse(localStorage.getItem('adminNotifications') || '[]');
}

// Mark notification as read
function markNotificationAsRead(notificationId) {
    const notifications = getAdminNotifications();
    const index = notifications.findIndex(n => n.id === notificationId);
    
    if (index !== -1) {
        notifications[index].read = true;
        localStorage.setItem('adminNotifications', JSON.stringify(notifications));
        return true;
    }
    return false;
}

// Get unread notification count
function getUnreadNotificationCount() {
    const notifications = getAdminNotifications();
    return notifications.filter(n => !n.read).length;
}

// Admin activity log
function logAdminActivity(action, description, userId) {
    const activities = JSON.parse(localStorage.getItem('adminActivities') || '[]');
    activities.unshift({
        id: 'ACT' + Math.random().toString(36).substr(2, 9).toUpperCase(),
        action,
        description,
        userId: userId || 'admin',
        timestamp: new Date().toISOString()
    });
    
    // Keep only last 100 activities
    if (activities.length > 100) {
        activities.length = 100;
    }
    
    localStorage.setItem('adminActivities', JSON.stringify(activities));
}

// Get recent admin activities
function getRecentAdminActivities(limit = 10) {
    const activities = JSON.parse(localStorage.getItem('adminActivities') || '[]');
    return activities.slice(0, limit);
}

// Product management backend
function saveProduct(productData) {
    const products = JSON.parse(localStorage.getItem('adminProducts') || '[]');
    
    if (productData.id) {
        // Update existing product
        const index = products.findIndex(p => p.id === productData.id);
        if (index !== -1) {
            products[index] = {
                ...products[index],
                ...productData,
                lastUpdated: new Date().toISOString()
            };
            logAdminActivity('product_update', `Updated product: ${productData.name}`);
        }
    } else {
        // Create new product
        const newProduct = {
            ...productData,
            id: 'PRD' + Math.random().toString(36).substr(2, 9).toUpperCase(),
            createdAt: new Date().toISOString()
        };
        products.push(newProduct);
        logAdminActivity('product_create', `Created new product: ${productData.name}`);
    }
    
    localStorage.setItem('adminProducts', JSON.stringify(products));
    return true;
}

// Delete product
function deleteProduct(productId) {
    const products = JSON.parse(localStorage.getItem('adminProducts') || '[]');
    const index = products.findIndex(p => p.id === productId);
    
    if (index !== -1) {
        const productName = products[index].name;
        products.splice(index, 1);
        localStorage.setItem('adminProducts', JSON.stringify(products));
        logAdminActivity('product_delete', `Deleted product: ${productName}`);
        return true;
    }
    return false;
}

// User management backend
function getAllUsers() {
    return JSON.parse(localStorage.getItem('users') || '[]');
}

// Update user status
function updateUserStatus(userId, status) {
    const users = getAllUsers();
    const index = users.findIndex(u => u.id === userId);
    
    if (index !== -1) {
        users[index].status = status;
        users[index].lastUpdated = new Date().toISOString();
        localStorage.setItem('users', JSON.stringify(users));
        logAdminActivity('user_update', `Updated user status: ${users[index].email} to ${status}`);
        return true;
    }
    return false;
}

// User statistics
function getUserStats() {
    const users = getAllUsers();
    const now = new Date();
    const oneMonthAgo = new Date(now.getFullYear(), now.getMonth() - 1, now.getDate());
    
    return {
        total: users.length,
        active: users.filter(u => u.status === 'active').length,
        inactive: users.filter(u => u.status === 'inactive').length,
        newThisMonth: users.filter(u => new Date(u.registrationDate) > oneMonthAgo).length,
        withMembership: users.filter(u => u.membershipStatus === 'active').length
    };
}

// ==================== AUTHENTICATION BACKEND ====================

// Register new user
function registerUser(userData) {
    const users = getAllUsers();
    
    // Check if email already exists
    if (users.some(u => u.email === userData.email)) {
        return { success: false, error: 'Email already registered' };
    }
    
    const newUser = {
        id: 'USR' + Math.random().toString(36).substr(2, 9).toUpperCase(),
        ...userData,
        registrationDate: new Date().toISOString(),
        status: 'active',
        membershipStatus: 'pending',
        emailVerified: false,
        lastLogin: null
    };
    
    // Don't store password in plain text (in production, hash it)
    delete newUser.password;
    delete newUser.confirmPassword;
    
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    
    // Send welcome email (simulated)
    sendWelcomeEmail(newUser.email, newUser.firstName);
    
    console.log('✅ User registered successfully:', newUser.email);
    return { success: true, user: newUser };
}

// Login user
function loginUser(email, password) {
    const users = getAllUsers();
    const user = users.find(u => u.email === email);
    
    if (!user) {
        return { success: false, error: 'User not found' };
    }
    
    // In production, verify hashed password
    // For demo, any password works
    
    // Update last login
    const index = users.findIndex(u => u.id === user.id);
    if (index !== -1) {
        users[index].lastLogin = new Date().toISOString();
        localStorage.setItem('users', JSON.stringify(users));
    }
    
    console.log('✅ User logged in:', email);
    return { success: true, user };
}

// Send welcome email
function sendWelcomeEmail(email, firstName) {
    const emailLog = JSON.parse(localStorage.getItem('emailLog') || '[]');
    emailLog.push({
        id: 'EMAIL' + Math.random().toString(36).substr(2, 9).toUpperCase(),
        to: email,
        subject: 'Welcome to MobileFix Pro!',
        body: `Dear ${firstName},

Welcome to MobileFix Pro! We're excited to have you on board.

Your account has been created successfully. You can now access our universal mobile parts database.

Best regards,
MobileFix Pro Team`,
        timestamp: new Date().toISOString(),
        status: 'sent',
        type: 'welcome'
    });
    localStorage.setItem('emailLog', JSON.stringify(emailLog));
}

// Password reset request
function requestPasswordReset(email) {
    const users = getAllUsers();
    const user = users.find(u => u.email === email);
    
    if (!user) {
        return { success: false, error: 'Email not found' };
    }
    
    // Generate reset token
    const resetToken = 'RST' + Math.random().toString(36).substr(2, 20).toUpperCase();
    const resetExpiry = new Date(Date.now() + 3600000).toISOString(); // 1 hour
    
    // Store reset token
    const resetTokens = JSON.parse(localStorage.getItem('resetTokens') || '[]');
    resetTokens.push({
        email,
        token: resetToken,
        expiry: resetExpiry,
        used: false
    });
    localStorage.setItem('resetTokens', JSON.stringify(resetTokens));
    
    // Send reset email
    sendPasswordResetEmail(email, resetToken);
    
    return { success: true };
}

// Send password reset email
function sendPasswordResetEmail(email, token) {
    const emailLog = JSON.parse(localStorage.getItem('emailLog') || '[]');
    emailLog.push({
        id: 'EMAIL' + Math.random().toString(36).substr(2, 9).toUpperCase(),
        to: email,
        subject: 'Password Reset Request - MobileFix Pro',
        body: `You requested a password reset.

Reset Token: ${token}

This link expires in 1 hour.

If you didn't request this, please ignore this email.

MobileFix Pro Security Team`,
        timestamp: new Date().toISOString(),
        status: 'sent',
        type: 'password_reset'
    });
    localStorage.setItem('emailLog', JSON.stringify(emailLog));
}

// ==================== ORDER BACKEND ====================

// Get all orders
function getAllOrders() {
    return JSON.parse(localStorage.getItem('orders') || '[]');
}

// Update order status
function updateOrderStatus(orderId, status) {
    const orders = getAllOrders();
    const index = orders.findIndex(o => o.id === orderId);
    
    if (index !== -1) {
        orders[index].status = status;
        orders[index].lastUpdated = new Date().toISOString();
        
        // Add status history
        if (!orders[index].statusHistory) {
            orders[index].statusHistory = [];
        }
        orders[index].statusHistory.push({
            status,
            timestamp: new Date().toISOString()
        });
        
        localStorage.setItem('orders', JSON.stringify(orders));
        logAdminActivity('order_update', `Updated order ${orderId} to ${status}`);
        
        // Send notification to customer
        sendOrderStatusEmail(orders[index]);
        
        return true;
    }
    return false;
}

// Send order status email
function sendOrderStatusEmail(order) {
    const emailLog = JSON.parse(localStorage.getItem('emailLog') || '[]');
    emailLog.push({
        id: 'EMAIL' + Math.random().toString(36).substr(2, 9).toUpperCase(),
        to: order.customerEmail || 'customer@example.com',
        subject: `Order ${order.id} - Status Update`,
        body: `Your order status has been updated to: ${order.status}

Order ID: ${order.id}
Total: ₹${order.total || 0}

Thank you for choosing MobileFix Pro!`,
        timestamp: new Date().toISOString(),
        status: 'sent',
        type: 'order_status'
    });
    localStorage.setItem('emailLog', JSON.stringify(emailLog));
}

// Get order statistics
function getOrderStats() {
    const orders = getAllOrders();
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    
    return {
        total: orders.length,
        pending: orders.filter(o => o.status === 'pending').length,
        processing: orders.filter(o => o.status === 'processing').length,
        shipped: orders.filter(o => o.status === 'shipped').length,
        delivered: orders.filter(o => o.status === 'delivered').length,
        cancelled: orders.filter(o => o.status === 'cancelled').length,
        todayOrders: orders.filter(o => new Date(o.timestamp) >= today).length,
        totalRevenue: orders.reduce((sum, o) => sum + (o.total || 0), 0)
    };
}

// ==================== ANALYTICS BACKEND ====================

// Get dashboard statistics
function getDashboardStats() {
    return {
        users: getUserStats(),
        orders: getOrderStats(),
        contacts: getContactSubmissionStats(),
        notifications: {
            total: getAdminNotifications().length,
            unread: getUnreadNotificationCount()
        }
    };
}

// Get sales data for charts
function getSalesData(period = 'week') {
    const orders = getAllOrders();
    const data = [];
    const now = new Date();
    
    if (period === 'week') {
        for (let i = 6; i >= 0; i--) {
            const date = new Date(now);
            date.setDate(date.getDate() - i);
            const dayStart = new Date(date.getFullYear(), date.getMonth(), date.getDate());
            const dayEnd = new Date(dayStart);
            dayEnd.setDate(dayEnd.getDate() + 1);
            
            const dayOrders = orders.filter(o => {
                const orderDate = new Date(o.timestamp);
                return orderDate >= dayStart && orderDate < dayEnd;
            });
            
            data.push({
                date: dayStart.toLocaleDateString('en-US', { weekday: 'short' }),
                orders: dayOrders.length,
                revenue: dayOrders.reduce((sum, o) => sum + (o.total || 0), 0)
            });
        }
    }
    
    return data;
}

// Export backend API
window.backendAPI = {
    // Contact
    storeContactSubmission,
    getAllContactSubmissions,
    updateContactSubmissionStatus,
    getContactSubmissionStats,
    
    // Admin
    getAdminNotifications,
    markNotificationAsRead,
    getUnreadNotificationCount,
    logAdminActivity,
    getRecentAdminActivities,
    
    // Products
    saveProduct,
    deleteProduct,
    
    // Users
    getAllUsers,
    updateUserStatus,
    getUserStats,
    
    // Auth
    registerUser,
    loginUser,
    requestPasswordReset,
    
    // Orders
    getAllOrders,
    updateOrderStatus,
    getOrderStats,
    
    // Analytics
    getDashboardStats,
    getSalesData
};

console.log('🚀 Backend simulation loaded successfully!');
console.log('📊 API available at window.backendAPI');
console.log('💾 All data stored in localStorage');
