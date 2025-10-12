// Products data (in a real app, this would come from an API)
const productsData = [
    {
        id: 1,
        title: "Universal OLED Display - Premium Quality",
        category: "display",
        brand: "samsung",
        price: 1299,
        originalPrice: 1599,
        description: "High-quality OLED display compatible with multiple Samsung models. Features vivid colors, deep blacks, and excellent viewing angles.",
        image: "https://via.placeholder.com/300x200/96A78D/FFFFFF?text=OLED+Display",
        images: [
            "https://via.placeholder.com/500x400/96A78D/FFFFFF?text=OLED+Display+1",
            "https://via.placeholder.com/500x400/B6CEB4/FFFFFF?text=OLED+Display+2",
            "https://via.placeholder.com/500x400/96A78D/FFFFFF?text=OLED+Display+3"
        ],
        rating: 4.5,
        reviews: 128,
        compatibility: ["Galaxy S21", "Galaxy S20", "Galaxy Note 20", "Galaxy A52", "Galaxy A72"],
        inStock: true,
        badge: "Premium"
    },
    {
        id: 2,
        title: "Universal Li-ion Battery 4000mAh",
        category: "battery",
        brand: "redmi",
        price: 599,
        originalPrice: 799,
        description: "High-capacity universal battery with advanced safety features. Compatible with multiple Redmi and Xiaomi models.",
        image: "https://via.placeholder.com/300x200/96A78D/FFFFFF?text=Battery",
        images: [
            "https://via.placeholder.com/500x400/96A78D/FFFFFF?text=Battery+1",
            "https://via.placeholder.com/500x400/B6CEB4/FFFFFF?text=Battery+2"
        ],
        rating: 4.2,
        reviews: 89,
        compatibility: ["Redmi Note 10", "Redmi Note 9", "Mi 11", "Redmi 9", "Redmi 10"],
        inStock: true,
        badge: "Popular"
    },
    {
        id: 3,
        title: "USB-C Charging Port Module",
        category: "charging",
        brand: "universal",
        price: 299,
        originalPrice: 399,
        description: "Universal USB-C charging port module with fast charging support. Easy installation and reliable performance.",
        image: "https://via.placeholder.com/300x200/96A78D/FFFFFF?text=USB-C+Port",
        images: [
            "https://via.placeholder.com/500x400/96A78D/FFFFFF?text=USB-C+1",
            "https://via.placeholder.com/500x400/B6CEB4/FFFFFF?text=USB-C+2"
        ],
        rating: 4.0,
        reviews: 64,
        compatibility: ["Samsung", "OnePlus", "Google Pixel", "Xiaomi", "Realme"],
        inStock: true,
        badge: "Universal"
    },
    {
        id: 4,
        title: "Premium Back Cover - Clear Design",
        category: "cover",
        brand: "iphone",
        price: 199,
        originalPrice: 299,
        description: "Transparent back cover with enhanced protection. Maintains the original design while providing excellent protection.",
        image: "https://via.placeholder.com/300x200/96A78D/FFFFFF?text=Back+Cover",
        images: [
            "https://via.placeholder.com/500x400/96A78D/FFFFFF?text=Cover+1",
            "https://via.placeholder.com/500x400/B6CEB4/FFFFFF?text=Cover+2"
        ],
        rating: 4.3,
        reviews: 156,
        compatibility: ["iPhone 14", "iPhone 13", "iPhone 12", "iPhone 11"],
        inStock: true,
        badge: "Clear"
    },
    {
        id: 5,
        title: "Universal Metal Frame - Space Gray",
        category: "frame",
        brand: "universal",
        price: 899,
        originalPrice: 1199,
        description: "Precision-engineered metal frame with perfect fit. Durable aluminum construction with premium finish.",
        image: "https://via.placeholder.com/300x200/96A78D/FFFFFF?text=Metal+Frame",
        images: [
            "https://via.placeholder.com/500x400/96A78D/FFFFFF?text=Frame+1",
            "https://via.placeholder.com/500x400/B6CEB4/FFFFFF?text=Frame+2"
        ],
        rating: 4.4,
        reviews: 92,
        compatibility: ["iPhone X", "iPhone XS", "iPhone 11", "Samsung S20"],
        inStock: false,
        badge: "Premium"
    },
    {
        id: 6,
        title: "Tempered Glass Screen Protector",
        category: "glass",
        brand: "universal",
        price: 149,
        originalPrice: 199,
        description: "9H hardness tempered glass with oleophobic coating. Crystal clear with bubble-free installation.",
        image: "https://via.placeholder.com/300x200/96A78D/FFFFFF?text=Glass+Guard",
        images: [
            "https://via.placeholder.com/500x400/96A78D/FFFFFF?text=Glass+1",
            "https://via.placeholder.com/500x400/B6CEB4/FFFFFF?text=Glass+2"
        ],
        rating: 4.1,
        reviews: 203,
        compatibility: ["Most Android", "iPhone", "Samsung", "OnePlus", "Xiaomi"],
        inStock: true,
        badge: "9H"
    },
    {
        id: 7,
        title: "AMOLED Display Assembly - Vivo",
        category: "display",
        brand: "vivo",
        price: 1599,
        originalPrice: 1899,
        description: "Original quality AMOLED display assembly with touch digitizer. Perfect color reproduction and response.",
        image: "https://via.placeholder.com/300x200/96A78D/FFFFFF?text=AMOLED+Vivo",
        images: [
            "https://via.placeholder.com/500x400/96A78D/FFFFFF?text=AMOLED+1",
            "https://via.placeholder.com/500x400/B6CEB4/FFFFFF?text=AMOLED+2"
        ],
        rating: 4.6,
        reviews: 74,
        compatibility: ["Vivo V21", "Vivo V20", "Vivo X60", "Vivo Y20"],
        inStock: true,
        badge: "AMOLED"
    },
    {
        id: 8,
        title: "Fast Charging Battery - Oppo",
        category: "battery",
        brand: "oppo",
        price: 699,
        originalPrice: 899,
        description: "Fast charging compatible battery with BLP technology. Extended lifespan and safety features included.",
        image: "https://via.placeholder.com/300x200/96A78D/FFFFFF?text=Oppo+Battery",
        images: [
            "https://via.placeholder.com/500x400/96A78D/FFFFFF?text=Oppo+Bat+1",
            "https://via.placeholder.com/500x400/B6CEB4/FFFFFF?text=Oppo+Bat+2"
        ],
        rating: 4.3,
        reviews: 115,
        compatibility: ["Oppo F19", "Oppo A74", "Oppo Reno 6", "Oppo A54"],
        inStock: true,
        badge: "Fast Charge"
    }
];

// State management
let currentPage = 1;
const itemsPerPage = 6;
let filteredProducts = [...productsData];
let currentFilters = {
    category: '',
    brand: '',
    price: '',
    search: ''
};
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// DOM elements
const productsGrid = document.getElementById('productsGrid');
const categoryFilter = document.getElementById('categoryFilter');
const brandFilter = document.getElementById('brandFilter');
const priceFilter = document.getElementById('priceFilter');
const searchProducts = document.getElementById('searchProducts');
const clearFiltersBtn = document.querySelector('.clear-filters');
const viewButtons = document.querySelectorAll('.view-btn');
const prevPageBtn = document.getElementById('prevPage');
const nextPageBtn = document.getElementById('nextPage');
const paginationNumbers = document.getElementById('paginationNumbers');
const productModal = document.getElementById('productModal');
const cartBtn = document.querySelector('.cart-btn');
const cartCount = document.querySelector('.cart-count');

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    renderProducts();
    updateCartCount();
    setupEventListeners();
});

// Event listeners
function setupEventListeners() {
    categoryFilter.addEventListener('change', handleFilterChange);
    brandFilter.addEventListener('change', handleFilterChange);
    priceFilter.addEventListener('change', handleFilterChange);
    searchProducts.addEventListener('input', debounce(handleSearchChange, 300));
    clearFiltersBtn.addEventListener('click', clearAllFilters);
    
    viewButtons.forEach(btn => {
        btn.addEventListener('click', handleViewChange);
    });
    
    prevPageBtn.addEventListener('click', () => changePage(currentPage - 1));
    nextPageBtn.addEventListener('click', () => changePage(currentPage + 1));
    
    // Modal events
    document.querySelector('.close-modal').addEventListener('click', closeModal);
    productModal.addEventListener('click', (e) => {
        if (e.target === productModal) closeModal();
    });
}

// Filter handling
function handleFilterChange(e) {
    const filterType = e.target.id.replace('Filter', '');
    currentFilters[filterType] = e.target.value;
    applyFilters();
}

function handleSearchChange(e) {
    currentFilters.search = e.target.value.toLowerCase();
    applyFilters();
}

function applyFilters() {
    filteredProducts = productsData.filter(product => {
        const matchesCategory = !currentFilters.category || product.category === currentFilters.category;
        const matchesBrand = !currentFilters.brand || product.brand === currentFilters.brand;
        const matchesPrice = !currentFilters.price || checkPriceRange(product.price, currentFilters.price);
        const matchesSearch = !currentFilters.search || 
            product.title.toLowerCase().includes(currentFilters.search) ||
            product.description.toLowerCase().includes(currentFilters.search) ||
            product.compatibility.some(model => model.toLowerCase().includes(currentFilters.search));
        
        return matchesCategory && matchesBrand && matchesPrice && matchesSearch;
    });
    
    currentPage = 1;
    renderProducts();
}

function checkPriceRange(price, range) {
    switch(range) {
        case '0-500':
            return price <= 500;
        case '500-1000':
            return price > 500 && price <= 1000;
        case '1000-2000':
            return price > 1000 && price <= 2000;
        case '2000+':
            return price > 2000;
        default:
            return true;
    }
}

function clearAllFilters() {
    currentFilters = { category: '', brand: '', price: '', search: '' };
    categoryFilter.value = '';
    brandFilter.value = '';
    priceFilter.value = '';
    searchProducts.value = '';
    filteredProducts = [...productsData];
    currentPage = 1;
    renderProducts();
}

// View handling
function handleViewChange(e) {
    viewButtons.forEach(btn => btn.classList.remove('active'));
    e.target.classList.add('active');
    
    const view = e.target.dataset.view;
    if (view === 'list') {
        productsGrid.classList.add('list-view');
    } else {
        productsGrid.classList.remove('list-view');
    }
}

// Product rendering
function renderProducts() {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const productsToShow = filteredProducts.slice(startIndex, endIndex);
    
    if (productsToShow.length === 0) {
        productsGrid.innerHTML = `
            <div class="no-products">
                <i class="fas fa-search" style="font-size: 3rem; color: #a0aec0; margin-bottom: 1rem;"></i>
                <h3>No products found</h3>
                <p>Try adjusting your filters or search terms</p>
            </div>
        `;
        return;
    }
    
    productsGrid.innerHTML = productsToShow.map(product => createProductCard(product)).join('');
    updatePagination();
    
    // Add event listeners to product cards
    document.querySelectorAll('.product-card').forEach((card, index) => {
        card.addEventListener('click', (e) => {
            if (!e.target.closest('.product-actions')) {
                openModal(productsToShow[index]);
            }
        });
    });
    
    // Add event listeners to action buttons
    document.querySelectorAll('.add-to-cart').forEach((btn, index) => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            addToCart(productsToShow[index]);
        });
    });
    
    document.querySelectorAll('.quick-view').forEach((btn, index) => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            openModal(productsToShow[index]);
        });
    });
}

function createProductCard(product) {
    const discountPercent = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);
    const inStockClass = product.inStock ? '' : 'out-of-stock';
    
    return `
        <div class="product-card ${inStockClass}" data-id="${product.id}">
            <div class="product-image">
                <img src="${product.image}" alt="${product.title}">
                ${product.badge ? `<div class="product-badge">${product.badge}</div>` : ''}
                ${!product.inStock ? '<div class="product-badge out-of-stock-badge">Out of Stock</div>' : ''}
            </div>
            <div class="product-info">
                <div class="product-category">${getCategoryName(product.category)}</div>
                <h3 class="product-title">${product.title}</h3>
                <p class="product-description">${product.description.substring(0, 100)}...</p>
                <div class="product-compatibility">
                    ${product.compatibility.slice(0, 3).map(model => 
                        `<span class="compatibility-tag">${model}</span>`
                    ).join('')}
                    ${product.compatibility.length > 3 ? `<span class="compatibility-tag">+${product.compatibility.length - 3} more</span>` : ''}
                </div>
                <div class="product-rating">
                    <div class="stars">
                        ${generateStars(product.rating)}
                    </div>
                    <span class="rating-count">(${product.reviews})</span>
                </div>
                <div class="product-price">
                    <span class="current-price">₹${product.price}</span>
                    ${product.originalPrice > product.price ? `<span class="original-price">₹${product.originalPrice}</span>` : ''}
                    ${discountPercent > 0 ? `<span class="discount-percent">${discountPercent}% OFF</span>` : ''}
                </div>
                <div class="product-actions">
                    <button class="btn-secondary quick-view" ${!product.inStock ? 'disabled' : ''}>
                        <i class="fas fa-eye"></i> View
                    </button>
                    <button class="btn-primary add-to-cart" ${!product.inStock ? 'disabled' : ''}>
                        <i class="fas fa-cart-plus"></i> Add to Cart
                    </button>
                </div>
            </div>
        </div>
    `;
}

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

function generateStars(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    
    let stars = '';
    for (let i = 0; i < fullStars; i++) {
        stars += '<i class="fas fa-star star"></i>';
    }
    if (hasHalfStar) {
        stars += '<i class="fas fa-star-half-alt star"></i>';
    }
    for (let i = 0; i < emptyStars; i++) {
        stars += '<i class="far fa-star star empty"></i>';
    }
    
    return stars;
}

// Pagination
function updatePagination() {
    const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
    
    prevPageBtn.disabled = currentPage === 1;
    nextPageBtn.disabled = currentPage === totalPages;
    
    paginationNumbers.innerHTML = '';
    for (let i = 1; i <= totalPages; i++) {
        const pageBtn = document.createElement('button');
        pageBtn.className = `pagination-number ${i === currentPage ? 'active' : ''}`;
        pageBtn.textContent = i;
        pageBtn.addEventListener('click', () => changePage(i));
        paginationNumbers.appendChild(pageBtn);
    }
}

function changePage(page) {
    const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
    if (page >= 1 && page <= totalPages) {
        currentPage = page;
        renderProducts();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

// Modal handling
function openModal(product) {
    document.getElementById('modalTitle').textContent = product.title;
    document.getElementById('modalPrice').textContent = `₹${product.price}`;
    document.getElementById('modalOriginalPrice').textContent = product.originalPrice > product.price ? `₹${product.originalPrice}` : '';
    document.getElementById('modalDescription').textContent = product.description;
    document.getElementById('modalRating').innerHTML = generateStars(product.rating);
    document.getElementById('modalRatingCount').textContent = `(${product.reviews} reviews)`;
    
    // Set main image
    document.getElementById('modalMainImage').src = product.images[0];
    
    // Set thumbnails
    const thumbnailsContainer = document.getElementById('modalThumbnails');
    thumbnailsContainer.innerHTML = product.images.map((img, index) => 
        `<img src="${img}" class="thumbnail ${index === 0 ? 'active' : ''}" onclick="changeMainImage('${img}', this)">`
    ).join('');
    
    // Set compatibility
    document.getElementById('modalCompatibility').innerHTML = product.compatibility.map(model => 
        `<span class="compatibility-tag">${model}</span>`
    ).join('');
    
    // Set up action buttons
    const addToCartBtn = document.getElementById('modalAddToCart');
    const buyNowBtn = document.getElementById('modalBuyNow');
    
    addToCartBtn.onclick = () => addToCart(product);
    buyNowBtn.onclick = () => buyNow(product);
    
    if (!product.inStock) {
        addToCartBtn.disabled = true;
        addToCartBtn.textContent = 'Out of Stock';
        buyNowBtn.disabled = true;
        buyNowBtn.textContent = 'Out of Stock';
    } else {
        addToCartBtn.disabled = false;
        addToCartBtn.textContent = 'Add to Cart';
        buyNowBtn.disabled = false;
        buyNowBtn.textContent = 'Buy Now';
    }
    
    productModal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    productModal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

function changeMainImage(src, thumbnail) {
    document.getElementById('modalMainImage').src = src;
    document.querySelectorAll('.thumbnail').forEach(thumb => thumb.classList.remove('active'));
    thumbnail.classList.add('active');
}

function changeQuantity(delta) {
    const quantityInput = document.getElementById('modalQuantity');
    const currentValue = parseInt(quantityInput.value);
    const newValue = Math.max(1, Math.min(10, currentValue + delta));
    quantityInput.value = newValue;
}

// Cart functionality
function addToCart(product) {
    const quantity = document.getElementById('modalQuantity') ? parseInt(document.getElementById('modalQuantity').value) : 1;
    
    const existingItem = cart.find(item => item.id === product.id);
    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({ ...product, quantity });
    }
    
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    
    // Show success message
    showNotification(`${product.title} added to cart!`, 'success');
}

function buyNow(product) {
    addToCart(product);
    // In a real app, this would redirect to checkout
    showNotification('Redirecting to checkout...', 'info');
    setTimeout(() => {
        alert('This would redirect to the checkout page in a real application.');
    }, 1000);
}

function updateCartCount() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
    cartCount.style.display = totalItems > 0 ? 'flex' : 'none';
}

// Utility functions
function debounce(func, delay) {
    let timeoutId;
    return function (...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func.apply(this, args), delay);
    };
}

function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle'}"></i>
        <span>${message}</span>
    `;
    
    // Add styles
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
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

console.log('🛍️ Products page loaded successfully!');
console.log(`📦 ${productsData.length} products available`);