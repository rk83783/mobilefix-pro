// Admin Dashboard JavaScript
document.addEventListener('DOMContentLoaded', function() {
    checkAdminAccess();
    initializeAdminDashboard();
    setupEventListeners();
    loadDashboardData();
});

// Check if user has admin access (Django API)
function checkAdminAccess() {
    // Check if user is authenticated
    if (!API.isAuthenticated()) {
        alert('Please login to access admin panel');
        localStorage.setItem('redirect_after_login', 'admin.html');
        window.location.href = 'login.html';
        return;
    }
    
    const currentUser = API.getCurrentUser();
    
    // Basic admin check - improve this later with proper roles from backend
    if (!currentUser.email.includes('admin') && !currentUser.is_staff) {
        alert('Access denied. Admin privileges required.');
        window.location.href = 'index.html';
        return;
    }
    
    // Update admin name in header
    const adminName = document.getElementById('adminName');
    if (adminName) {
        adminName.textContent = currentUser.full_name || currentUser.email;
    }
    
    console.log('✅ Admin access granted:', currentUser);
}

// Get current user from Django API
function getCurrentUser() {
    return API.getCurrentUser();
}

// Initialize admin dashboard
function initializeAdminDashboard() {
    setupSidebarNavigation();
    loadRecentActivity();
    loadRecentOrders();
    loadProducts();
    loadUsers();
    loadOrders();
}

// Setup event listeners
function setupEventListeners() {
    // Date range filter
    const dateRange = document.getElementById('dateRange');
    if (dateRange) {
        dateRange.addEventListener('change', handleDateRangeChange);
    }
    
    // Chart controls
    document.querySelectorAll('.chart-btn').forEach(btn => {
        btn.addEventListener('click', handleChartChange);
    });
    
    // Form submissions
    const productForm = document.getElementById('productForm');
    if (productForm) {
        productForm.addEventListener('submit', handleProductSubmission);
    }
    
    // Settings forms
    document.querySelectorAll('.settings-form').forEach(form => {
        form.addEventListener('submit', handleSettingsUpdate);
    });
}

// Sidebar navigation
function setupSidebarNavigation() {
    document.querySelectorAll('.menu-item').forEach(item => {
        item.addEventListener('click', function() {
            const section = this.dataset.section;
            switchSection(section);
            
            // Update active state
            document.querySelectorAll('.menu-item').forEach(i => i.classList.remove('active'));
            this.classList.add('active');
        });
    });
}

// Switch dashboard sections
function switchSection(sectionName) {
    // Hide all sections
    document.querySelectorAll('.admin-section').forEach(section => {
        section.classList.remove('active');
    });
    
    // Show selected section
    const targetSection = document.getElementById(sectionName);
    if (targetSection) {
        targetSection.classList.add('active');
    }
    
    // Load section-specific data
    switch(sectionName) {
        case 'dashboard':
            loadDashboardData();
            break;
        case 'products':
            loadProducts();
            break;
        case 'users':
            loadUsers();
            break;
        case 'orders':
            loadOrders();
            break;
        case 'analytics':
            loadAnalytics();
            break;
    }
}

// Load dashboard data
function loadDashboardData() {
    // Update statistics
    updateStatistics();
    
    // Load charts
    loadSalesChart();
}

// Update statistics
function updateStatistics() {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const orders = JSON.parse(localStorage.getItem('orders') || '[]');
    const products = JSON.parse(localStorage.getItem('products') || '[]');
    
    // Update counters with animation
    animateCounter('totalUsers', users.length || 2847);
    animateCounter('totalProducts', products.length || 1892);
    animateCounter('totalOrders', orders.length || 5426);
    animateCounter('totalRevenue', 84250);
}

// Animate counter
function animateCounter(elementId, targetValue) {
    const element = document.getElementById(elementId);
    if (!element) return;
    
    let currentValue = 0;
    const increment = targetValue / 50;
    const timer = setInterval(() => {
        currentValue += increment;
        if (currentValue >= targetValue) {
            if (elementId === 'totalRevenue') {
                element.textContent = '₹' + targetValue.toLocaleString();
            } else {
                element.textContent = Math.floor(targetValue).toLocaleString();
            }
            clearInterval(timer);
        } else {
            if (elementId === 'totalRevenue') {
                element.textContent = '₹' + Math.floor(currentValue).toLocaleString();
            } else {
                element.textContent = Math.floor(currentValue).toLocaleString();
            }
        }
    }, 50);
}

// Load recent activity
function loadRecentActivity() {
    const activities = [
        { icon: 'fas fa-user-plus', title: 'New user registered', description: 'Rajesh Kumar joined as member', time: '2 min ago' },
        { icon: 'fas fa-shopping-cart', title: 'New order placed', description: 'Order #12345 for ₹599', time: '5 min ago' },
        { icon: 'fas fa-box', title: 'Product updated', description: 'iPhone Display stock updated', time: '10 min ago' },
        { icon: 'fas fa-star', title: 'New review', description: '5-star review received', time: '15 min ago' },
        { icon: 'fas fa-money-bill', title: 'Payment received', description: 'Membership payment ₹30', time: '20 min ago' }
    ];
    
    const activityList = document.getElementById('activityList');
    if (activityList) {
        activityList.innerHTML = activities.map(activity => `
            <div class="activity-item">
                <div class="activity-icon">
                    <i class="${activity.icon}"></i>
                </div>
                <div class="activity-content">
                    <h4>${activity.title}</h4>
                    <p>${activity.description}</p>
                </div>
                <div class="activity-time">${activity.time}</div>
            </div>
        `).join('');
    }
}

// Load recent orders
function loadRecentOrders() {
    const orders = [
        { id: 'ORD-001', customer: 'Rajesh Kumar', product: 'iPhone Display', amount: 1299, status: 'delivered', date: '2024-01-15' },
        { id: 'ORD-002', customer: 'Priya Sharma', product: 'Samsung Battery', amount: 599, status: 'shipped', date: '2024-01-14' },
        { id: 'ORD-003', customer: 'Amit Patel', product: 'Universal Charger', amount: 299, status: 'processing', date: '2024-01-14' },
        { id: 'ORD-004', customer: 'Sunita Verma', product: 'Back Cover', amount: 199, status: 'pending', date: '2024-01-13' },
        { id: 'ORD-005', customer: 'Vikash Singh', product: 'Glass Guard', amount: 149, status: 'delivered', date: '2024-01-13' }
    ];
    
    const ordersTable = document.getElementById('recentOrdersTable');
    if (ordersTable) {
        ordersTable.innerHTML = orders.map(order => `
            <tr>
                <td><strong>${order.id}</strong></td>
                <td>${order.customer}</td>
                <td>${order.product}</td>
                <td>₹${order.amount}</td>
                <td><span class="status-badge ${order.status}">${order.status}</span></td>
                <td>${new Date(order.date).toLocaleDateString()}</td>
            </tr>
        `).join('');
    }
}

// Load products
function loadProducts() {
    const products = [
        { id: 1, name: 'Universal OLED Display', category: 'display', price: 1299, stock: 45, status: 'active', image: 'https://via.placeholder.com/50x50/96A78D/FFFFFF?text=D' },
        { id: 2, name: 'Li-ion Battery 4000mAh', category: 'battery', price: 599, stock: 78, status: 'active', image: 'https://via.placeholder.com/50x50/96A78D/FFFFFF?text=B' },
        { id: 3, name: 'USB-C Charging Port', category: 'charging', price: 299, stock: 23, status: 'active', image: 'https://via.placeholder.com/50x50/96A78D/FFFFFF?text=C' },
        { id: 4, name: 'Premium Back Cover', category: 'cover', price: 199, stock: 0, status: 'out-of-stock', image: 'https://via.placeholder.com/50x50/96A78D/FFFFFF?text=CV' },
        { id: 5, name: 'Metal Frame', category: 'frame', price: 899, stock: 12, status: 'active', image: 'https://via.placeholder.com/50x50/96A78D/FFFFFF?text=F' }
    ];
    
    const productsTable = document.getElementById('productsTable');
    if (productsTable) {
        productsTable.innerHTML = products.map(product => `
            <tr>
                <td><img src="${product.image}" alt="${product.name}" style="width: 40px; height: 40px; border-radius: 0.5rem;"></td>
                <td><strong>${product.name}</strong></td>
                <td>${getCategoryName(product.category)}</td>
                <td>₹${product.price}</td>
                <td>${product.stock}</td>
                <td><span class="status-badge ${product.status}">${product.status}</span></td>
                <td>
                    <button class="btn-secondary btn-small" onclick="editProduct(${product.id})">Edit</button>
                    <button class="btn-secondary btn-small" onclick="deleteProduct(${product.id})" style="color: #f56565;">Delete</button>
                </td>
            </tr>
        `).join('');
    }
}

// Load users
function loadUsers() {
    const users = [
        { id: 1, name: 'Rajesh Kumar', email: 'rajesh@example.com', business: 'Kumar Mobile Shop', membership: 'active', joined: '2024-01-01', status: 'active' },
        { id: 2, name: 'Priya Sharma', email: 'priya@example.com', business: 'Sharma Electronics', membership: 'active', joined: '2024-01-05', status: 'active' },
        { id: 3, name: 'Amit Patel', email: 'amit@example.com', business: 'Patel Repair Center', membership: 'pending', joined: '2024-01-10', status: 'active' },
        { id: 4, name: 'Sunita Verma', email: 'sunita@example.com', business: 'Verma Mobile Care', membership: 'active', joined: '2024-01-12', status: 'active' },
        { id: 5, name: 'Vikash Singh', email: 'vikash@example.com', business: 'Singh Tech Solutions', membership: 'active', joined: '2024-01-15', status: 'inactive' }
    ];
    
    const usersTable = document.getElementById('usersTable');
    if (usersTable) {
        usersTable.innerHTML = users.map(user => `
            <tr>
                <td>
                    <div style="display: flex; align-items: center; gap: 0.75rem;">
                        <img src="https://via.placeholder.com/40x40/96A78D/FFFFFF?text=${user.name.charAt(0)}" alt="${user.name}" style="width: 40px; height: 40px; border-radius: 50%;">
                        <strong>${user.name}</strong>
                    </div>
                </td>
                <td>${user.email}</td>
                <td>${user.business}</td>
                <td><span class="status-badge ${user.membership}">${user.membership}</span></td>
                <td>${new Date(user.joined).toLocaleDateString()}</td>
                <td><span class="status-badge ${user.status}">${user.status}</span></td>
                <td>
                    <button class="btn-secondary btn-small" onclick="viewUser(${user.id})">View</button>
                    <button class="btn-secondary btn-small" onclick="editUser(${user.id})">Edit</button>
                </td>
            </tr>
        `).join('');
    }
}

// Load orders
function loadOrders() {
    const orders = [
        { id: 'ORD-001', customer: 'Rajesh Kumar', products: 2, total: 1898, status: 'delivered', date: '2024-01-15' },
        { id: 'ORD-002', customer: 'Priya Sharma', products: 1, total: 599, status: 'shipped', date: '2024-01-14' },
        { id: 'ORD-003', customer: 'Amit Patel', products: 3, total: 797, status: 'processing', date: '2024-01-14' },
        { id: 'ORD-004', customer: 'Sunita Verma', products: 1, total: 199, status: 'pending', date: '2024-01-13' },
        { id: 'ORD-005', customer: 'Vikash Singh', products: 2, total: 448, status: 'delivered', date: '2024-01-13' }
    ];
    
    const ordersTable = document.getElementById('ordersTable');
    if (ordersTable) {
        ordersTable.innerHTML = orders.map(order => `
            <tr>
                <td><strong>${order.id}</strong></td>
                <td>${order.customer}</td>
                <td>${order.products} items</td>
                <td>₹${order.total}</td>
                <td><span class="status-badge ${order.status}">${order.status}</span></td>
                <td>${new Date(order.date).toLocaleDateString()}</td>
                <td>
                    <button class="btn-secondary btn-small" onclick="viewOrder('${order.id}')">View</button>
                    <button class="btn-secondary btn-small" onclick="updateOrderStatus('${order.id}')">Update</button>
                </td>
            </tr>
        `).join('');
    }
}

// Utility functions
function getCategoryName(category) {
    const categories = {
        display: 'Displays',
        battery: 'Batteries',
        charging: 'Charging',
        cover: 'Covers',
        frame: 'Frames',
        glass: 'Glass Guards'
    };
    return categories[category] || category;
}

// Event handlers
function handleDateRangeChange(e) {
    const range = e.target.value;
    console.log('Date range changed to:', range);
    // In a real app, this would filter data based on date range
    showNotification(`Data filtered for: ${range}`, 'info');
}

function handleChartChange(e) {
    document.querySelectorAll('.chart-btn').forEach(btn => btn.classList.remove('active'));
    e.target.classList.add('active');
    
    const chartType = e.target.dataset.chart;
    console.log('Chart changed to:', chartType);
    // In a real app, this would switch chart data
    showNotification(`Chart switched to: ${chartType}`, 'info');
}

// Product management
function openProductModal(productId = null) {
    const modal = document.getElementById('productModal');
    const title = document.getElementById('modalTitle');
    
    if (productId) {
        title.textContent = 'Edit Product';
        // Load product data for editing
    } else {
        title.textContent = 'Add New Product';
        document.getElementById('productForm').reset();
    }
    
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function closeProductModal() {
    const modal = document.getElementById('productModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

function handleProductSubmission(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const productData = {
        name: formData.get('name'),
        category: formData.get('category'),
        price: parseInt(formData.get('price')),
        originalPrice: parseInt(formData.get('originalPrice')),
        description: formData.get('description'),
        compatibility: formData.get('compatibility').split(',').map(s => s.trim()),
        stock: parseInt(formData.get('stock')),
        status: formData.get('status')
    };
    
    console.log('Product data:', productData);
    
    // In a real app, this would save to database
    showNotification('Product saved successfully!', 'success');
    closeProductModal();
    loadProducts(); // Refresh products table
}

// Settings management
function handleSettingsUpdate(e) {
    e.preventDefault();
    
    console.log('Settings updated');
    showNotification('Settings saved successfully!', 'success');
}

// Action handlers
function editProduct(id) {
    console.log('Edit product:', id);
    openProductModal(id);
}

function deleteProduct(id) {
    if (confirm('Are you sure you want to delete this product?')) {
        console.log('Delete product:', id);
        showNotification('Product deleted successfully!', 'success');
        loadProducts();
    }
}

function viewUser(id) {
    console.log('View user:', id);
    showNotification('Opening user details...', 'info');
}

function editUser(id) {
    console.log('Edit user:', id);
    showNotification('Opening user editor...', 'info');
}

function viewOrder(id) {
    console.log('View order:', id);
    showNotification('Opening order details...', 'info');
}

function updateOrderStatus(id) {
    console.log('Update order status:', id);
    showNotification('Order status updated!', 'success');
}

// Charts (placeholder functions)
function loadSalesChart() {
    // In a real app, this would load Chart.js or similar
    console.log('Loading sales chart...');
}

function loadAnalytics() {
    console.log('Loading analytics...');
    showNotification('Analytics data loaded', 'info');
}

// Logout function
function logout() {
    if (confirm('Are you sure you want to logout?')) {
        sessionStorage.removeItem('currentUser');
        sessionStorage.removeItem('authToken');
        localStorage.removeItem('currentUser');
        localStorage.removeItem('authToken');
        
        window.location.href = 'login.html';
    }
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
            if (document.body.contains(notification)) {
                document.body.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

console.log('🏢 Admin dashboard loaded successfully!');
console.log('📊 Dashboard features ready');
