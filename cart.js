// Cart Page JavaScript
let cart = JSON.parse(localStorage.getItem('cart')) || [];
let coupons = {
    'SAVE10': { type: 'percent', value: 10, description: '10% off' },
    'SAVE100': { type: 'fixed', value: 100, description: '₹100 off' },
    'FIRST50': { type: 'fixed', value: 50, description: '₹50 off first order' }
};
let appliedCoupon = null;

// Initialize cart page
document.addEventListener('DOMContentLoaded', function() {
    loadCart();
    setupEventListeners();
    loadRecommendedProducts();
    updateCartCount();
});

// Load cart items
function loadCart() {
    const cartItemsList = document.getElementById('cartItemsList');
    const emptyCartState = document.getElementById('emptyCartState');
    const checkoutBtn = document.getElementById('checkoutBtn');
    
    if (cart.length === 0) {
        cartItemsList.style.display = 'none';
        emptyCartState.style.display = 'block';
        checkoutBtn.disabled = true;
        document.getElementById('totalItems').textContent = '0';
    } else {
        cartItemsList.style.display = 'flex';
        emptyCartState.style.display = 'none';
        checkoutBtn.disabled = false;
        document.getElementById('totalItems').textContent = cart.length;
        
        cartItemsList.innerHTML = cart.map((item, index) => createCartItemHTML(item, index)).join('');
        setupCartItemListeners();
    }
    
    updateOrderSummary();
}

// Create cart item HTML
function createCartItemHTML(item, index) {
    return `
        <div class="cart-item" data-index="${index}">
            <div class="cart-item-image">
                <img src="${item.image}" alt="${item.title}">
            </div>
            <div class="cart-item-details">
                <h3 class="cart-item-title">${item.title}</h3>
                ${item.badge ? `<span class="cart-item-badge">${item.badge}</span>` : ''}
                <p class="cart-item-compatibility">
                    Compatible: ${item.compatibility.slice(0, 2).join(', ')}${item.compatibility.length > 2 ? '...' : ''}
                </p>
                <div class="cart-item-price">
                    ₹${item.price}
                    ${item.originalPrice > item.price ? `<span class="cart-item-original-price">₹${item.originalPrice}</span>` : ''}
                </div>
            </div>
            <div class="cart-item-actions">
                <div class="quantity-controls">
                    <button class="qty-btn decrease-qty" data-index="${index}">-</button>
                    <input type="number" class="qty-input" value="${item.quantity}" min="1" max="10" readonly>
                    <button class="qty-btn increase-qty" data-index="${index}">+</button>
                </div>
                <button class="remove-item-btn" data-index="${index}">
                    <i class="fas fa-trash"></i> Remove
                </button>
            </div>
        </div>
    `;
}

// Setup cart item listeners
function setupCartItemListeners() {
    // Increase quantity
    document.querySelectorAll('.increase-qty').forEach(btn => {
        btn.addEventListener('click', function() {
            const index = parseInt(this.dataset.index);
            if (cart[index].quantity < 10) {
                cart[index].quantity++;
                saveCart();
                loadCart();
            }
        });
    });
    
    // Decrease quantity
    document.querySelectorAll('.decrease-qty').forEach(btn => {
        btn.addEventListener('click', function() {
            const index = parseInt(this.dataset.index);
            if (cart[index].quantity > 1) {
                cart[index].quantity--;
                saveCart();
                loadCart();
            }
        });
    });
    
    // Remove item
    document.querySelectorAll('.remove-item-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const index = parseInt(this.dataset.index);
            const itemName = cart[index].title;
            
            if (confirm(`Remove "${itemName}" from cart?`)) {
                cart.splice(index, 1);
                saveCart();
                loadCart();
                showNotification('Item removed from cart', 'success');
            }
        });
    });
}

// Setup event listeners
function setupEventListeners() {
    // Clear cart
    document.getElementById('clearCart').addEventListener('click', function() {
        if (cart.length === 0) return;
        
        if (confirm('Are you sure you want to clear your cart?')) {
            cart = [];
            saveCart();
            loadCart();
            appliedCoupon = null;
            showNotification('Cart cleared', 'success');
        }
    });
    
    // Apply coupon
    document.getElementById('applyCoupon').addEventListener('click', applyCoupon);
    
    // Checkout
    document.getElementById('checkoutBtn').addEventListener('click', openCheckoutModal);
}

// Apply coupon
function applyCoupon() {
    const couponCode = document.getElementById('couponCode').value.trim().toUpperCase();
    
    if (!couponCode) {
        showNotification('Please enter a coupon code', 'error');
        return;
    }
    
    if (coupons[couponCode]) {
        appliedCoupon = { code: couponCode, ...coupons[couponCode] };
        showNotification(`Coupon applied: ${appliedCoupon.description}`, 'success');
        document.getElementById('couponCode').value = '';
        updateOrderSummary();
    } else {
        showNotification('Invalid coupon code', 'error');
    }
}

// Update order summary
function updateOrderSummary() {
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const originalTotal = cart.reduce((sum, item) => sum + ((item.originalPrice || item.price) * item.quantity), 0);
    const totalSavings = originalTotal - subtotal;
    
    const tax = Math.round(subtotal * 0.18);
    const shipping = subtotal > 1000 ? 0 : 50;
    
    let discount = 0;
    if (appliedCoupon) {
        if (appliedCoupon.type === 'percent') {
            discount = Math.round(subtotal * (appliedCoupon.value / 100));
        } else {
            discount = appliedCoupon.value;
        }
        document.getElementById('discountRow').style.display = 'flex';
        document.getElementById('discount').textContent = `-₹${discount}`;
    } else {
        document.getElementById('discountRow').style.display = 'none';
    }
    
    const total = subtotal + tax + shipping - discount;
    
    document.getElementById('subtotal').textContent = `₹${subtotal}`;
    document.getElementById('tax').textContent = `₹${tax}`;
    document.getElementById('shipping').textContent = shipping === 0 ? 'FREE' : `₹${shipping}`;
    document.getElementById('total').textContent = `₹${total}`;
    
    if (totalSavings > 0) {
        document.getElementById('savingsBadge').style.display = 'block';
        document.getElementById('totalSavings').textContent = `₹${totalSavings + discount}`;
    } else {
        document.getElementById('savingsBadge').style.display = 'none';
    }
}

// Save cart to localStorage
function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
}

// Update cart count in header
function updateCartCount() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const cartCountElements = document.querySelectorAll('.cart-count');
    cartCountElements.forEach(el => {
        el.textContent = totalItems;
        el.style.display = totalItems > 0 ? 'flex' : 'none';
    });
}

// Load recommended products
function loadRecommendedProducts() {
    // Sample recommended products (in real app, would be from API)
    const recommended = [
        {
            id: 21,
            title: "Universal Screwdriver Kit",
            price: 299,
            image: "https://via.placeholder.com/250x200/96A78D/FFFFFF?text=Tool+Kit"
        },
        {
            id: 22,
            title: "Phone Opening Tools Set",
            price: 199,
            image: "https://via.placeholder.com/250x200/96A78D/FFFFFF?text=Opening+Tools"
        },
        {
            id: 23,
            title: "Adhesive Tape Roll",
            price: 49,
            image: "https://via.placeholder.com/250x200/96A78D/FFFFFF?text=Adhesive"
        },
        {
            id: 24,
            title: "Anti-Static Wrist Strap",
            price: 99,
            image: "https://via.placeholder.com/250x200/96A78D/FFFFFF?text=Wrist+Strap"
        }
    ];
    
    const container = document.getElementById('recommendedProducts');
    container.innerHTML = recommended.map(product => `
        <div class="product-card" style="cursor: pointer;" onclick="window.location.href='products.html'">
            <img src="${product.image}" alt="${product.title}" style="width: 100%; border-radius: 0.5rem;">
            <h4 style="margin: 1rem 0 0.5rem; color: #2d3748;">${product.title}</h4>
            <p style="color: #96A78D; font-weight: 700; font-size: 1.1rem;">₹${product.price}</p>
        </div>
    `).join('');
}

// Open checkout modal
function openCheckoutModal() {
    if (cart.length === 0) return;
    
    const modal = document.getElementById('checkoutModal');
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
    
    loadCheckoutStep(1);
}

// Close checkout modal
function closeCheckoutModal() {
    const modal = document.getElementById('checkoutModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Load checkout step
function loadCheckoutStep(step) {
    const content = document.getElementById('checkoutContent');
    
    // Update step indicators
    document.querySelectorAll('.step').forEach((el, index) => {
        el.classList.remove('active', 'completed');
        if (index + 1 < step) {
            el.classList.add('completed');
        } else if (index + 1 === step) {
            el.classList.add('active');
        }
    });
    
    switch(step) {
        case 1:
            content.innerHTML = getShippingStepHTML();
            document.getElementById('nextToPayment').addEventListener('click', () => loadCheckoutStep(2));
            break;
        case 2:
            content.innerHTML = getPaymentStepHTML();
            document.getElementById('backToShipping').addEventListener('click', () => loadCheckoutStep(1));
            document.getElementById('nextToConfirm').addEventListener('click', () => loadCheckoutStep(3));
            break;
        case 3:
            content.innerHTML = getConfirmStepHTML();
            document.getElementById('backToPayment').addEventListener('click', () => loadCheckoutStep(2));
            document.getElementById('placeOrder').addEventListener('click', placeOrder);
            break;
    }
}

// Get shipping step HTML
function getShippingStepHTML() {
    return `
        <h3 style="margin-bottom: 1.5rem; color: #2d3748;">Shipping Information</h3>
        <form id="shippingForm">
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 1rem;">
                <div>
                    <label style="display: block; margin-bottom: 0.5rem; font-weight: 600;">First Name *</label>
                    <input type="text" required style="width: 100%; padding: 0.75rem; border: 2px solid #e2e8f0; border-radius: 0.5rem;">
                </div>
                <div>
                    <label style="display: block; margin-bottom: 0.5rem; font-weight: 600;">Last Name *</label>
                    <input type="text" required style="width: 100%; padding: 0.75rem; border: 2px solid #e2e8f0; border-radius: 0.5rem;">
                </div>
            </div>
            <div style="margin-bottom: 1rem;">
                <label style="display: block; margin-bottom: 0.5rem; font-weight: 600;">Email *</label>
                <input type="email" required style="width: 100%; padding: 0.75rem; border: 2px solid #e2e8f0; border-radius: 0.5rem;">
            </div>
            <div style="margin-bottom: 1rem;">
                <label style="display: block; margin-bottom: 0.5rem; font-weight: 600;">Phone *</label>
                <input type="tel" required style="width: 100%; padding: 0.75rem; border: 2px solid #e2e8f0; border-radius: 0.5rem;">
            </div>
            <div style="margin-bottom: 1rem;">
                <label style="display: block; margin-bottom: 0.5rem; font-weight: 600;">Address *</label>
                <textarea required rows="3" style="width: 100%; padding: 0.75rem; border: 2px solid #e2e8f0; border-radius: 0.5rem;"></textarea>
            </div>
            <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 1rem; margin-bottom: 1rem;">
                <div>
                    <label style="display: block; margin-bottom: 0.5rem; font-weight: 600;">City *</label>
                    <input type="text" required style="width: 100%; padding: 0.75rem; border: 2px solid #e2e8f0; border-radius: 0.5rem;">
                </div>
                <div>
                    <label style="display: block; margin-bottom: 0.5rem; font-weight: 600;">State *</label>
                    <input type="text" required style="width: 100%; padding: 0.75rem; border: 2px solid #e2e8f0; border-radius: 0.5rem;">
                </div>
                <div>
                    <label style="display: block; margin-bottom: 0.5rem; font-weight: 600;">PIN Code *</label>
                    <input type="text" required style="width: 100%; padding: 0.75rem; border: 2px solid #e2e8f0; border-radius: 0.5rem;">
                </div>
            </div>
            <button type="button" id="nextToPayment" style="width: 100%; padding: 1rem; background: linear-gradient(135deg, #96A78D 0%, #7a8c70 100%); color: white; border: none; border-radius: 0.5rem; font-weight: 600; cursor: pointer; margin-top: 1rem;">
                Continue to Payment
            </button>
        </form>
    `;
}

// Get payment step HTML
function getPaymentStepHTML() {
    return `
        <h3 style="margin-bottom: 1.5rem; color: #2d3748;">Payment Method</h3>
        <div style="display: flex; flex-direction: column; gap: 1rem; margin-bottom: 2rem;">
            <label style="padding: 1rem; border: 2px solid #e2e8f0; border-radius: 0.5rem; cursor: pointer; display: flex; align-items: center; gap: 1rem;">
                <input type="radio" name="payment" value="cod" checked>
                <div>
                    <div style="font-weight: 600; color: #2d3748;">Cash on Delivery</div>
                    <div style="font-size: 0.875rem; color: #4a5568;">Pay when you receive</div>
                </div>
            </label>
            <label style="padding: 1rem; border: 2px solid #e2e8f0; border-radius: 0.5rem; cursor: pointer; display: flex; align-items: center; gap: 1rem;">
                <input type="radio" name="payment" value="upi">
                <div>
                    <div style="font-weight: 600; color: #2d3748;">UPI Payment</div>
                    <div style="font-size: 0.875rem; color: #4a5568;">Pay via UPI apps</div>
                </div>
            </label>
            <label style="padding: 1rem; border: 2px solid #e2e8f0; border-radius: 0.5rem; cursor: pointer; display: flex; align-items: center; gap: 1rem;">
                <input type="radio" name="payment" value="card">
                <div>
                    <div style="font-weight: 600; color: #2d3748;">Credit/Debit Card</div>
                    <div style="font-size: 0.875rem; color: #4a5568;">Secure card payment</div>
                </div>
            </label>
        </div>
        <div style="display: flex; gap: 1rem;">
            <button type="button" id="backToShipping" style="flex: 1; padding: 1rem; background: white; color: #4a5568; border: 2px solid #e2e8f0; border-radius: 0.5rem; font-weight: 600; cursor: pointer;">
                Back
            </button>
            <button type="button" id="nextToConfirm" style="flex: 1; padding: 1rem; background: linear-gradient(135deg, #96A78D 0%, #7a8c70 100%); color: white; border: none; border-radius: 0.5rem; font-weight: 600; cursor: pointer;">
                Review Order
            </button>
        </div>
    `;
}

// Get confirm step HTML
function getConfirmStepHTML() {
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const tax = Math.round(subtotal * 0.18);
    const shipping = subtotal > 1000 ? 0 : 50;
    let discount = 0;
    if (appliedCoupon) {
        discount = appliedCoupon.type === 'percent' ? Math.round(subtotal * (appliedCoupon.value / 100)) : appliedCoupon.value;
    }
    const total = subtotal + tax + shipping - discount;
    
    return `
        <h3 style="margin-bottom: 1.5rem; color: #2d3748;">Order Confirmation</h3>
        <div style="background: #f7fafc; padding: 1.5rem; border-radius: 0.5rem; margin-bottom: 1rem;">
            <h4 style="margin-bottom: 1rem; color: #2d3748;">Order Summary</h4>
            ${cart.map(item => `
                <div style="display: flex; justify-content: space-between; padding: 0.5rem 0; border-bottom: 1px solid #e2e8f0;">
                    <span>${item.title} x${item.quantity}</span>
                    <span style="font-weight: 600;">₹${item.price * item.quantity}</span>
                </div>
            `).join('')}
            <div style="display: flex; justify-content: space-between; padding: 0.5rem 0; margin-top: 1rem;">
                <span>Subtotal:</span>
                <span style="font-weight: 600;">₹${subtotal}</span>
            </div>
            <div style="display: flex; justify-content: space-between; padding: 0.5rem 0;">
                <span>Tax:</span>
                <span style="font-weight: 600;">₹${tax}</span>
            </div>
            <div style="display: flex; justify-content: space-between; padding: 0.5rem 0;">
                <span>Shipping:</span>
                <span style="font-weight: 600;">${shipping === 0 ? 'FREE' : '₹' + shipping}</span>
            </div>
            ${discount > 0 ? `
            <div style="display: flex; justify-content: space-between; padding: 0.5rem 0; color: #48bb78;">
                <span>Discount:</span>
                <span style="font-weight: 600;">-₹${discount}</span>
            </div>
            ` : ''}
            <div style="display: flex; justify-content: space-between; padding: 1rem 0; border-top: 2px solid #e2e8f0; margin-top: 0.5rem; font-size: 1.25rem; font-weight: 700; color: #96A78D;">
                <span>Total:</span>
                <span>₹${total}</span>
            </div>
        </div>
        <div style="display: flex; gap: 1rem;">
            <button type="button" id="backToPayment" style="flex: 1; padding: 1rem; background: white; color: #4a5568; border: 2px solid #e2e8f0; border-radius: 0.5rem; font-weight: 600; cursor: pointer;">
                Back
            </button>
            <button type="button" id="placeOrder" style="flex: 1; padding: 1rem; background: linear-gradient(135deg, #48bb78 0%, #38a169 100%); color: white; border: none; border-radius: 0.5rem; font-weight: 600; cursor: pointer;">
                Place Order
            </button>
        </div>
    `;
}

// Place order
function placeOrder() {
    const button = document.getElementById('placeOrder');
    button.disabled = true;
    button.textContent = 'Processing...';
    
    // Simulate order placement
    setTimeout(() => {
        // Store order
        const order = {
            id: 'ORD' + Math.random().toString(36).substr(2, 9).toUpperCase(),
            items: cart,
            timestamp: new Date().toISOString(),
            status: 'pending'
        };
        
        const orders = JSON.parse(localStorage.getItem('orders') || '[]');
        orders.push(order);
        localStorage.setItem('orders', JSON.stringify(orders));
        
        // Clear cart
        cart = [];
        saveCart();
        
        // Show success
        closeCheckoutModal();
        showOrderSuccess(order.id);
    }, 2000);
}

// Show order success
function showOrderSuccess(orderId) {
    const successHTML = `
        <div style="position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: rgba(0, 0, 0, 0.8); z-index: 3000; display: flex; align-items: center; justify-content: center; padding: 2rem;">
            <div style="background: white; border-radius: 1rem; padding: 3rem; max-width: 500px; text-align: center;">
                <div style="font-size: 4rem; color: #48bb78; margin-bottom: 1rem;">
                    <i class="fas fa-check-circle"></i>
                </div>
                <h2 style="font-size: 2rem; font-weight: 700; color: #2d3748; margin-bottom: 1rem;">Order Placed Successfully!</h2>
                <p style="color: #4a5568; margin-bottom: 1rem;">Your order ID is: <strong>${orderId}</strong></p>
                <p style="color: #4a5568; margin-bottom: 2rem;">We'll send you a confirmation email shortly.</p>
                <button onclick="window.location.href='index.html'" style="width: 100%; padding: 1rem; background: linear-gradient(135deg, #96A78D 0%, #7a8c70 100%); color: white; border: none; border-radius: 0.5rem; font-weight: 600; cursor: pointer;">
                    Continue Shopping
                </button>
            </div>
        </div>
    `;
    
    document.body.insertAdjacentHTML('beforeend', successHTML);
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
    
    setTimeout(() => notification.style.transform = 'translateX(0)', 10);
    
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => document.body.contains(notification) && document.body.removeChild(notification), 300);
    }, 3000);
}

console.log('🛒 Cart page loaded successfully!');
console.log(`📦 ${cart.length} items in cart`);
