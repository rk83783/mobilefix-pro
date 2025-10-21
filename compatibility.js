// Compatibility data for mobile repair technicians
const compatibilityData = [
    // Sample battery data
    {
        id: 1,
        title: "Universal Li-ion Battery 4000mAh",
        category: "battery",
        brand: "universal",
        description: "High-capacity universal battery with advanced safety features. Compatible with multiple Redmi and Xiaomi models.",
        image: "https://via.placeholder.com/300x200/96A78D/FFFFFF?text=Battery",
        images: [
            "https://via.placeholder.com/500x400/96A78D/FFFFFF?text=Battery+1",
            "https://via.placeholder.com/500x400/B6CEB4/FFFFFF?text=Battery+2"
        ],
        compatibility: ["Redmi Note 10", "Redmi Note 9", "Mi 11", "Redmi 9", "Redmi 10", "Xiaomi 11T", "Xiaomi 12"],
        specifications: {
            "Capacity": "4000mAh",
            "Voltage": "3.87V",
            "Type": "Li-ion",
            "Cycle Life": "500+ cycles",
            "Protection": "Overcharge/Overdischarge"
        }
    },
    {
        id: 2,
        title: "5000mAh Battery for Samsung",
        category: "battery",
        brand: "samsung",
        description: "High-capacity 5000mAh battery with extended life cycle. Perfect for heavy usage Samsung devices.",
        image: "https://via.placeholder.com/300x200/96A78D/FFFFFF?text=Samsung+Battery",
        images: [
            "https://via.placeholder.com/500x400/96A78D/FFFFFF?text=SamBat+1",
            "https://via.placeholder.com/500x400/B6CEB4/FFFFFF?text=SamBat+2"
        ],
        compatibility: ["Galaxy M51", "Galaxy M31", "Galaxy F41", "Galaxy A51", "Galaxy A71"],
        specifications: {
            "Capacity": "5000mAh",
            "Voltage": "3.85V",
            "Type": "Li-polymer",
            "Cycle Life": "800+ cycles",
            "Fast Charge": "25W Adaptive Fast Charging"
        }
    },
    // Sample display data
    {
        id: 3,
        title: "Universal OLED Display",
        category: "display",
        brand: "universal",
        description: "High-quality OLED display compatible with multiple Samsung models. Features vivid colors, deep blacks, and excellent viewing angles.",
        image: "https://via.placeholder.com/300x200/96A78D/FFFFFF?text=OLED+Display",
        images: [
            "https://via.placeholder.com/500x400/96A78D/FFFFFF?text=OLED+Display+1",
            "https://via.placeholder.com/500x400/B6CEB4/FFFFFF?text=OLED+Display+2",
            "https://via.placeholder.com/500x400/96A78D/FFFFFF?text=OLED+Display+3"
        ],
        compatibility: ["Galaxy S21", "Galaxy S20", "Galaxy Note 20", "Galaxy A52", "Galaxy A72", "Galaxy S21+", "Galaxy S21 Ultra"],
        specifications: {
            "Display Type": "OLED",
            "Resolution": "2400 x 1080",
            "Size": "6.7 inches",
            "Refresh Rate": "120Hz",
            "Protection": "Gorilla Glass"
        }
    },
    // Sample back panel data
    {
        id: 4,
        title: "Universal Back Panel",
        category: "backpanel",
        brand: "universal",
        description: "Durable back panel compatible with multiple smartphone models. Provides excellent protection and easy access to internal components.",
        image: "https://via.placeholder.com/300x200/96A78D/FFFFFF?text=Back+Panel",
        images: [
            "https://via.placeholder.com/500x400/96A78D/FFFFFF?text=Back+Panel+1",
            "https://via.placeholder.com/500x400/B6CEB4/FFFFFF?text=Back+Panel+2"
        ],
        compatibility: ["Samsung Galaxy S21", "Samsung Galaxy S20", "Samsung Note 20", "Samsung A52", "Samsung A72"],
        specifications: {
            "Material": "Polycarbonate",
            "Finish": "Matte",
            "Thickness": "1.2mm",
            "Protection": "Drop Resistant"
        }
    },
    // Sample charging port data
    {
        id: 5,
        title: "USB-C Charging Port Module",
        category: "charging",
        brand: "universal",
        description: "Universal USB-C charging port module with fast charging support. Easy installation and reliable performance.",
        image: "https://via.placeholder.com/300x200/96A78D/FFFFFF?text=USB-C+Port",
        images: [
            "https://via.placeholder.com/500x400/96A78D/FFFFFF?text=USB-C+1",
            "https://via.placeholder.com/500x400/B6CEB4/FFFFFF?text=USB-C+2"
        ],
        compatibility: ["Samsung", "OnePlus", "Google Pixel", "Xiaomi", "Realme", "Oppo", "Vivo"],
        specifications: {
            "Connector Type": "USB-C",
            "Data Speed": "USB 3.1 Gen 1",
            "Power Delivery": "Up to 100W",
            "Durability": "10,000+ cycles",
            "Water Resistance": "IPX1"
        }
    },
    // Sample flex cable data
    {
        id: 6,
        title: "Universal Flex Cable",
        category: "flex",
        brand: "universal",
        description: "High-quality flex cable for various smartphone models. Ensures reliable connections between components.",
        image: "https://via.placeholder.com/300x200/96A78D/FFFFFF?text=Flex+Cable",
        images: [
            "https://via.placeholder.com/500x400/96A78D/FFFFFF?text=Flex+Cable+1",
            "https://via.placeholder.com/500x400/B6CEB4/FFFFFF?text=Flex+Cable+2"
        ],
        compatibility: ["Samsung Galaxy S21", "Samsung Galaxy S20", "Samsung Note 20", "Redmi Note 10", "Redmi Note 9"],
        specifications: {
            "Connector Type": "Multi-pin",
            "Length": "50mm",
            "Durability": "5000+ bends",
            "Protection": "ESD Resistant"
        }
    },
    // Sample speaker data
    {
        id: 7,
        title: "Universal Speaker",
        category: "speaker",
        brand: "universal",
        description: "High-fidelity speaker compatible with multiple smartphone models. Delivers clear and powerful audio output.",
        image: "https://via.placeholder.com/300x200/96A78D/FFFFFF?text=Speaker",
        images: [
            "https://via.placeholder.com/500x400/96A78D/FFFFFF?text=Speaker+1",
            "https://via.placeholder.com/500x400/B6CEB4/FFFFFF?text=Speaker+2"
        ],
        compatibility: ["Samsung Galaxy S21", "Samsung Galaxy S20", "iPhone 12", "iPhone 13", "Redmi Note 10"],
        specifications: {
            "Impedance": "8 Ohms",
            "Power": "1W",
            "Frequency Response": "20Hz-20kHz",
            "Sensitivity": "85dB"
        }
    },
    // Sample camera module data
    {
        id: 8,
        title: "Triple Camera Module",
        category: "camera",
        brand: "universal",
        description: "Advanced triple camera module with high-resolution sensors. Compatible with multiple flagship smartphone models.",
        image: "https://via.placeholder.com/300x200/96A78D/FFFFFF?text=Camera+Module",
        images: [
            "https://via.placeholder.com/500x400/96A78D/FFFFFF?text=Camera+1",
            "https://via.placeholder.com/500x400/B6CEB4/FFFFFF?text=Camera+2"
        ],
        compatibility: ["Samsung Galaxy S21", "Samsung Galaxy S20", "iPhone 12", "iPhone 13"],
        specifications: {
            "Resolution": "48MP + 12MP + 12MP",
            "Aperture": "f/1.8 + f/2.2 + f/2.4",
            "Optical Zoom": "3x",
            "Video": "4K@60fps"
        }
    },
    // Sample motherboard data
    {
        id: 9,
        title: "Universal Motherboard",
        category: "motherboard",
        brand: "universal",
        description: "High-quality motherboard compatible with multiple smartphone models. Ensures optimal performance and reliability.",
        image: "https://via.placeholder.com/300x200/96A78D/FFFFFF?text=Motherboard",
        images: [
            "https://via.placeholder.com/500x400/96A78D/FFFFFF?text=Mobo+1",
            "https://via.placeholder.com/500x400/B6CEB4/FFFFFF?text=Mobo+2"
        ],
        compatibility: ["Samsung Galaxy S21", "Samsung Galaxy S20", "iPhone 12", "iPhone 13"],
        specifications: {
            "Chipset": "Universal",
            "RAM": "8GB",
            "Storage": "128GB",
            "Processor": "Octa-core"
        }
    }
];

// State management
let currentPage = 1;
const itemsPerPage = 6;
let filteredData = [...compatibilityData];
let currentFilters = {
    model: '',
    part: '',
    brand: ''
};

// DOM elements
const searchModel = document.getElementById('searchModel');
const searchPart = document.getElementById('searchPart');
const brandFilter = document.getElementById('brandFilter');
const clearFiltersBtn = document.querySelector('.clear-filters');
const compatibilityResults = document.getElementById('compatibilityResults');
const resultsCount = document.getElementById('resultsCount');
const prevPageBtn = document.getElementById('prevPage');
const nextPageBtn = document.getElementById('nextPage');
const paginationNumbers = document.getElementById('paginationNumbers');
const partModal = document.getElementById('partModal');

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    renderResults();
    setupEventListeners();
    
    // Add model search report functionality
    const modelSearchReportBtn = document.getElementById('searchModelReportBtn');
    const modelSearchInput = document.getElementById('modelSearchInput');
    
    if (modelSearchReportBtn && modelSearchInput) {
        modelSearchReportBtn.addEventListener('click', function() {
            const modelName = modelSearchInput.value.trim();
            if (modelName) {
                showModelCompatibilityReport(modelName);
            } else {
                alert('Please enter a mobile model name');
            }
        });
        
        // Also allow Enter key to trigger search
        modelSearchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                const modelName = modelSearchInput.value.trim();
                if (modelName) {
                    showModelCompatibilityReport(modelName);
                }
            }
        });
    }
});

// Event listeners
function setupEventListeners() {
    searchModel.addEventListener('input', debounce(handleModelSearch, 300));
    searchPart.addEventListener('input', debounce(handlePartSearch, 300));
    brandFilter.addEventListener('change', handleBrandFilter);
    clearFiltersBtn.addEventListener('click', clearAllFilters);
    
    prevPageBtn.addEventListener('click', () => changePage(currentPage - 1));
    nextPageBtn.addEventListener('click', () => changePage(currentPage + 1));
    
    // Modal events
    document.querySelector('.close-modal').addEventListener('click', closePartModal);
    partModal.addEventListener('click', (e) => {
        if (e.target === partModal) closePartModal();
    });
}

// Filter handling
function handleModelSearch(e) {
    currentFilters.model = e.target.value.toLowerCase();
    applyFilters();
}

function handlePartSearch(e) {
    currentFilters.part = e.target.value.toLowerCase();
    applyFilters();
}

function handleBrandFilter(e) {
    currentFilters.brand = e.target.value;
    applyFilters();
}

function applyFilters() {
    filteredData = compatibilityData.filter(item => {
        const matchesModel = !currentFilters.model || 
            item.compatibility.some(model => model.toLowerCase().includes(currentFilters.model)) ||
            item.title.toLowerCase().includes(currentFilters.model);
            
        const matchesPart = !currentFilters.part || 
            item.title.toLowerCase().includes(currentFilters.part) ||
            item.category.toLowerCase().includes(currentFilters.part) ||
            item.description.toLowerCase().includes(currentFilters.part);
            
        const matchesBrand = !currentFilters.brand || item.brand === currentFilters.brand;
        
        return matchesModel && matchesPart && matchesBrand;
    });
    
    // Update results count with more detailed information
    updateResultsCount();
    
    currentPage = 1;
    renderResults();
}

function clearAllFilters() {
    currentFilters = { model: '', part: '', brand: '' };
    searchModel.value = '';
    searchPart.value = '';
    brandFilter.value = '';
    filteredData = [...compatibilityData];
    currentPage = 1;
    renderResults();
    updateResultsCount();
}

// Results rendering
function renderResults() {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const resultsToShow = filteredData.slice(startIndex, endIndex);
    
    if (resultsToShow.length === 0) {
        compatibilityResults.innerHTML = `
            <div class="no-products">
                <i class="fas fa-search" style="font-size: 3rem; color: #a0aec0; margin-bottom: 1rem;"></i>
                <h3>No compatibility data found</h3>
                <p>Try adjusting your search terms or filters</p>
                <p style="margin-top: 1rem; font-size: 0.9rem; color: #718096;">Search tip: Try searching for specific models like "iPhone 13" or part types like "battery"</p>
            </div>
        `;
        resultsCount.textContent = "No results found";
        updatePagination();
        return;
    }
    
    resultsCount.textContent = `Showing ${startIndex + 1}-${Math.min(endIndex, filteredData.length)} of ${filteredData.length} parts`;
    
    compatibilityResults.innerHTML = resultsToShow.map(item => createCompatibilityCard(item)).join('');
    updatePagination();
    
    // Add event listeners to cards
    document.querySelectorAll('.compatibility-card').forEach((card, index) => {
        card.addEventListener('click', () => openPartModal(resultsToShow[index]));
    });
}

function createCompatibilityCard(item) {
    return `
        <div class="compatibility-card" data-id="${item.id}">
            <div class="compatibility-image">
                <img src="${item.image}" alt="${item.title}">
            </div>
            <div class="compatibility-info">
                <div class="compatibility-header">
                    <h3 class="compatibility-title">${item.title}</h3>
                    <div class="compatibility-category">${getCategoryName(item.category)}</div>
                </div>
                <p class="compatibility-description">${item.description.substring(0, 120)}...</p>
                <div class="compatibility-models">
                    <h4>Compatible Models:</h4>
                    <div class="model-tags">
                        ${item.compatibility.slice(0, 4).map(model => 
                            `<span class="model-tag">${model}</span>`
                        ).join('')}
                        ${item.compatibility.length > 4 ? `<span class="model-tag">+${item.compatibility.length - 4} more</span>` : ''}
                    </div>
                </div>
                <div class="compatibility-meta">
                    <div class="compatibility-brand">Brand: ${item.brand.charAt(0).toUpperCase() + item.brand.slice(1)}</div>
                    <div class="compatibility-count">${item.compatibility.length} compatible models</div>
                </div>
                <div class="compatibility-actions">
                    <button class="btn-secondary view-details">
                        <i class="fas fa-info-circle"></i> View Details
                    </button>
                </div>
            </div>
        </div>
    `;
}

function getCategoryName(category) {
    const categories = {
        display: 'Display',
        battery: 'Battery',
        charging: 'Charging Port',
        cover: 'Back Cover',
        frame: 'Frame',
        glass: 'Screen Guard',
        backpanel: 'Back Panel',
        flex: 'Flex Cable',
        speaker: 'Speaker',
        microphone: 'Microphone',
        camera: 'Camera Module',
        button: 'Button',
        connector: 'Connector',
        motherboard: 'Motherboard',
        vibrator: 'Vibrator',
        antenna: 'Antenna',
        simtray: 'SIM Tray',
        housing: 'Housing',
        bracket: 'Bracket'
    };
    return categories[category] || category;
}

// Pagination
function updatePagination() {
    const totalPages = Math.ceil(filteredData.length / itemsPerPage);
    
    prevPageBtn.disabled = currentPage === 1;
    nextPageBtn.disabled = currentPage === totalPages || totalPages === 0;
    
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
    const totalPages = Math.ceil(filteredData.length / itemsPerPage);
    if (page >= 1 && page <= totalPages) {
        currentPage = page;
        renderResults();
        window.scrollTo({ top: 0, behavior: 'smooth' });
        // Update URL to reflect current page
        const url = new URL(window.location);
        url.searchParams.set('page', page);
        window.history.replaceState({}, '', url);
    }
}

// Modal handling
function openPartModal(part) {
    document.getElementById('modalTitle').textContent = part.title;
    document.getElementById('modalCategory').textContent = getCategoryName(part.category);
    document.getElementById('modalBrand').textContent = `Brand: ${part.brand.charAt(0).toUpperCase() + part.brand.slice(1)}`;
    document.getElementById('modalDescription').textContent = part.description;
    document.getElementById('modalMainImage').src = part.images[0];
    
    // Set thumbnails
    const thumbnailsContainer = document.getElementById('modalThumbnails');
    thumbnailsContainer.innerHTML = part.images.map((img, index) => 
        `<img src="${img}" class="thumbnail ${index === 0 ? 'active' : ''}" onclick="changeMainImage('${img}', this)">`
    ).join('');
    
    // Set compatibility list with search functionality
    const compatibilityList = document.getElementById('modalCompatibility');
    compatibilityList.innerHTML = part.compatibility.map(model => 
        `<span class="compatibility-tag">${model}</span>`
    ).join('');
    
    // Add model count
    const modelCount = document.createElement('div');
    modelCount.className = 'model-count';
    modelCount.innerHTML = `<strong>Total Compatible Models:</strong> ${part.compatibility.length}`;
    compatibilityList.parentNode.insertBefore(modelCount, compatibilityList.nextSibling);
    
    // Add a search by model feature in the modal
    const searchByModelDiv = document.createElement('div');
    searchByModelDiv.className = 'search-by-model';
    searchByModelDiv.innerHTML = `
        <h4>Search Compatible Models:</h4>
        <input type="text" id="modelSearchInput" placeholder="Enter model name (e.g., iPhone 13)" style="width: 100%; padding: 0.5rem; margin: 0.5rem 0; border: 1px solid #ddd; border-radius: 4px;">
        <button id="searchModelBtn" class="btn-secondary" style="margin-top: 0.5rem;">Find Parts for This Model</button>
    `;
    compatibilityList.parentNode.insertBefore(searchByModelDiv, modelCount.nextSibling);
    
    // Set specifications
    const specsList = document.getElementById('modalSpecifications');
    specsList.innerHTML = '';
    for (const [key, value] of Object.entries(part.specifications)) {
        const li = document.createElement('li');
        li.innerHTML = `<strong>${key}:</strong> ${value}`;
        specsList.appendChild(li);
    }
    
    partModal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
    
    // Update URL to reflect current part
    const url = new URL(window.location);
    url.searchParams.set('part', part.id);
    window.history.replaceState({}, '', url);
    
    // Add event listener for the search button in modal
    document.getElementById('searchModelBtn').addEventListener('click', function() {
        const modelInput = document.getElementById('modelSearchInput').value;
        if (modelInput) {
            // Close modal and search for parts compatible with this model
            closePartModal();
            searchModel.value = modelInput;
            currentFilters.model = modelInput.toLowerCase();
            applyFilters();
        }
    });
}

function closePartModal() {
    partModal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

function changeMainImage(src, thumbnail) {
    document.getElementById('modalMainImage').src = src;
    document.querySelectorAll('.thumbnail').forEach(thumb => thumb.classList.remove('active'));
    thumbnail.classList.add('active');
}

// Add a function to search by specific mobile model
function searchByMobileModel(modelName) {
    // Find all parts compatible with this model
    const compatibleParts = compatibilityData.filter(part => 
        part.compatibility.some(model => 
            model.toLowerCase().includes(modelName.toLowerCase())
        )
    );
    
    return compatibleParts;
}

// Add a function to display all models compatible with a specific part
function getCompatibleModels(partId) {
    const part = compatibilityData.find(item => item.id === partId);
    if (part) {
        return part.compatibility;
    }
    return [];
}

// Add a function to create a model compatibility report
function createModelCompatibilityReport(modelName) {
    const report = {
        modelName: modelName,
        compatibleParts: [],
        partCategories: {}
    };
    
    // Find all parts compatible with this model
    compatibilityData.forEach(part => {
        if (part.compatibility.some(model => 
            model.toLowerCase().includes(modelName.toLowerCase()))) {
            report.compatibleParts.push(part);
            
            // Group by category
            if (!report.partCategories[part.category]) {
                report.partCategories[part.category] = [];
            }
            report.partCategories[part.category].push(part);
        }
    });
    
    return report;
}

// Enhanced modal handling for model reports
function showModelCompatibilityReport(modelName) {
    const report = createModelCompatibilityReport(modelName);
    
    // Update modal content to show report
    document.getElementById('modalTitle').textContent = `Compatibility Report for ${modelName}`;
    document.getElementById('modalCategory').textContent = "Model Compatibility Report";
    document.getElementById('modalBrand').textContent = "";
    document.getElementById('modalDescription').textContent = `This report shows all parts compatible with ${modelName}`;
    document.getElementById('modalMainImage').src = "https://via.placeholder.com/500x400/96A78D/FFFFFF?text=Model+Compatibility";
    
    // Show compatible parts by category
    const compatibilityList = document.getElementById('modalCompatibility');
    let html = `<h3>Compatible Parts (${report.compatibleParts.length} found)</h3>`;
    
    if (report.compatibleParts.length === 0) {
        html += `<p>No compatible parts found for this model. Try a different model name or check back later for updates.</p>`;
    } else {
        // Group parts by category
        const partsByCategory = {};
        report.compatibleParts.forEach(part => {
            if (!partsByCategory[part.category]) {
                partsByCategory[part.category] = [];
            }
            partsByCategory[part.category].push(part);
        });
        
        // Display parts by category
        for (const [category, parts] of Object.entries(partsByCategory)) {
            html += `<h4>${getCategoryName(category)} (${parts.length})</h4>`;
            html += `<div class="category-parts" style="margin-bottom: 20px;">`;
            parts.forEach(part => {
                html += `<div class="part-item" style="padding: 10px; margin: 5px 0; background: #f8f9fa; border-radius: 5px; border-left: 3px solid #96A78D;">
                    <strong>${part.title}</strong> - ${part.brand.charAt(0).toUpperCase() + part.brand.slice(1)}
                    <div style="font-size: 0.9rem; color: #666; margin-top: 5px;">${part.description.substring(0, 100)}...</div>
                </div>`;
            });
            html += `</div>`;
        }
    }
    
    compatibilityList.innerHTML = html;
    
    // Hide specifications for model reports
    document.getElementById('modalSpecifications').innerHTML = "";
    
    // Hide search by model div in modal for model reports
    const searchByModelDiv = document.querySelector('.search-by-model');
    if (searchByModelDiv) {
        searchByModelDiv.style.display = 'none';
    }
    
    partModal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

// Utility functions
function debounce(func, delay) {
    let timeoutId;
    return function (...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func.apply(this, args), delay);
    };
}

console.log('🔧 Compatibility guide loaded successfully!');
console.log(`📦 ${compatibilityData.length} parts available for reference`);