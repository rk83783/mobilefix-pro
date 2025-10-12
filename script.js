// DOM Elements
const searchBtn = document.querySelector('.search-btn');
const searchModal = document.getElementById('searchModal');
const closeSearch = document.querySelector('.close-search');
const searchInput = document.getElementById('searchInput');
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const header = document.querySelector('.header');

// Search Modal Functionality
searchBtn.addEventListener('click', () => {
    searchModal.style.display = 'flex';
    searchInput.focus();
});

closeSearch.addEventListener('click', () => {
    searchModal.style.display = 'none';
});

searchModal.addEventListener('click', (e) => {
    if (e.target === searchModal) {
        searchModal.style.display = 'none';
    }
});

// Search functionality
searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        performSearch();
    }
});

document.querySelector('.search-submit').addEventListener('click', performSearch);

function performSearch() {
    const query = searchInput.value.trim();
    if (query) {
        // Here you can implement actual search functionality
        console.log('Searching for:', query);
        // For demo purposes, show an alert
        alert(`Searching for: "${query}"\n\nThis would typically filter products or redirect to search results.`);
        searchModal.style.display = 'none';
    }
}

// Tag suggestions functionality
document.querySelectorAll('.tag').forEach(tag => {
    tag.addEventListener('click', () => {
        searchInput.value = tag.textContent;
        performSearch();
    });
});

// Mobile Menu Toggle
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Header scroll effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Category card interactions
document.querySelectorAll('.category-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0) scale(1)';
    });
});

// Button click handlers
document.querySelectorAll('.category-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        const categoryName = e.target.closest('.category-card').querySelector('h3').textContent;
        alert(`Opening ${categoryName} catalog...\n\nThis would typically navigate to the category page.`);
    });
});

// Membership button
document.querySelector('.membership-cta').addEventListener('click', () => {
    alert('Redirecting to payment page...\n\nThis would typically open the membership purchase flow.');
});

// CTA buttons
document.querySelector('.cta-primary').addEventListener('click', () => {
    document.querySelector('#categories').scrollIntoView({
        behavior: 'smooth'
    });
});

document.querySelector('.cta-secondary').addEventListener('click', () => {
    alert('Opening demo video...\n\nThis would typically open a video modal or redirect to a demo page.');
});

// Login button
document.querySelector('.login-btn').addEventListener('click', () => {
    alert('Opening login modal...\n\nThis would typically show a login form.');
});

// Membership button in header
document.querySelector('.membership-btn').addEventListener('click', () => {
    document.querySelector('.membership').scrollIntoView({
        behavior: 'smooth'
    });
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.category-card, .feature-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Counter animation for hero stats
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = target + '+';
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(start) + '+';
        }
    }, 16);
}

// Animate counters when hero is in view
const heroObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const counters = entry.target.querySelectorAll('.stat-number');
            counters.forEach(counter => {
                const target = parseInt(counter.textContent.replace('+', ''));
                animateCounter(counter, target);
            });
            heroObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

heroObserver.observe(document.querySelector('.hero-stats'));

// Form validation for search
function validateSearch(query) {
    if (query.length < 2) {
        alert('Please enter at least 2 characters to search.');
        return false;
    }
    return true;
}

// Enhanced search with suggestions
const searchSuggestions = [
    'iPhone Display', 'Samsung Battery', 'Redmi Back Cover', 'Vivo Charging Port',
    'OnePlus Screen', 'Oppo Camera', 'Realme Speaker', 'Xiaomi Motherboard',
    'Universal Display', 'Universal Battery', 'Universal Charging', 'Universal Cover'
];

searchInput.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase();
    if (query.length > 1) {
        const matches = searchSuggestions.filter(suggestion => 
            suggestion.toLowerCase().includes(query)
        );
        
        // You can implement a dropdown with suggestions here
        console.log('Suggestions:', matches);
    }
});

// Keyboard shortcuts
document.addEventListener('keydown', (e) => {
    // Ctrl/Cmd + K to open search
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        searchModal.style.display = 'flex';
        searchInput.focus();
    }
    
    // Escape to close search modal
    if (e.key === 'Escape' && searchModal.style.display === 'flex') {
        searchModal.style.display = 'none';
    }
});

// Add loading states for buttons
function addLoadingState(button, text = 'Loading...') {
    const originalText = button.textContent;
    button.textContent = text;
    button.disabled = true;
    
    setTimeout(() => {
        button.textContent = originalText;
        button.disabled = false;
    }, 2000);
}

// Enhanced button interactions
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', (e) => {
        // Add ripple effect
        const ripple = document.createElement('span');
        const rect = button.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            left: ${x}px;
            top: ${y}px;
            background: rgba(255, 255, 255, 0.3);
            border-radius: 50%;
            transform: scale(0);
            animation: ripple 0.6s linear;
            pointer-events: none;
        `;
        
        button.style.position = 'relative';
        button.style.overflow = 'hidden';
        button.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});

// Add CSS for ripple animation
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
    
    .header.scrolled {
        background: rgba(255, 255, 255, 0.98);
        box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
    }
    
    .nav-menu.active {
        display: flex;
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        background: white;
        flex-direction: column;
        padding: 1rem;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    }
    
    .hamburger.active span:nth-child(1) {
        transform: rotate(-45deg) translate(-5px, 6px);
    }
    
    .hamburger.active span:nth-child(2) {
        opacity: 0;
    }
    
    .hamburger.active span:nth-child(3) {
        transform: rotate(45deg) translate(-5px, -6px);
    }
    
    @media (max-width: 768px) {
        .nav-menu {
            display: none;
        }
        
        .nav-actions {
            display: none;
        }
    }
`;
document.head.appendChild(style);

// Initialize tooltip system
function initTooltips() {
    const tooltipElements = document.querySelectorAll('[data-tooltip]');
    
    tooltipElements.forEach(element => {
        element.addEventListener('mouseenter', (e) => {
            const tooltip = document.createElement('div');
            tooltip.className = 'tooltip';
            tooltip.textContent = e.target.getAttribute('data-tooltip');
            document.body.appendChild(tooltip);
            
            const rect = e.target.getBoundingClientRect();
            tooltip.style.cssText = `
                position: fixed;
                top: ${rect.top - tooltip.offsetHeight - 10}px;
                left: ${rect.left + rect.width / 2 - tooltip.offsetWidth / 2}px;
                background: #2d3748;
                color: white;
                padding: 0.5rem 1rem;
                border-radius: 0.25rem;
                font-size: 0.875rem;
                z-index: 10000;
                pointer-events: none;
                opacity: 0;
                transition: opacity 0.3s ease;
            `;
            
            setTimeout(() => tooltip.style.opacity = '1', 10);
        });
        
        element.addEventListener('mouseleave', () => {
            const tooltip = document.querySelector('.tooltip');
            if (tooltip) {
                tooltip.remove();
            }
        });
    });
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    initTooltips();
    
    // Add some initial animations
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Performance optimization: Lazy load images
function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Initialize lazy loading
lazyLoadImages();

console.log('🚀 MobileFix Pro website loaded successfully!');
console.log('💡 Press Ctrl/Cmd + K to open search');