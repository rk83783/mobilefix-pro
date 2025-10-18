// Compatibility data for mobile repair technicians
const compatibilityData = [
// Displays
    {
        id: 1,
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
        },
        combos: [
            { name: "Display + Battery Combo", models: ["Galaxy S21", "Galaxy S20"], discount: "15% off" },
            { name: "Display + Frame Kit", models: ["Galaxy Note 20", "Galaxy S21+"], discount: "10% off" }
        ]
    },
    {
        id: 10,
        title: "LCD Display for Redmi Series",
        category: "display",
        brand: "redmi",
        description: "High-quality LCD display with excellent color accuracy and brightness. Perfect replacement for Redmi series phones.",
        image: "https://via.placeholder.com/300x200/96A78D/FFFFFF?text=LCD+Display",
        images: [
            "https://via.placeholder.com/500x400/96A78D/FFFFFF?text=LCD+1",
            "https://via.placeholder.com/500x400/B6CEB4/FFFFFF?text=LCD+2"
        ],
        compatibility: ["Redmi Note 11", "Redmi Note 10 Pro", "Redmi 10", "Redmi 9 Power", "Redmi Note 9 Pro", "Redmi Note 8 Pro"],
        specifications: {
            "Display Type": "LCD",
            "Resolution": "2400 x 1080",
            "Size": "6.67 inches",
            "Refresh Rate": "120Hz",
            "Protection": "Asahi Glass"
        },
        combos: [
            { name: "Display + Battery", models: ["Redmi Note 11", "Redmi Note 10 Pro"], discount: "12% off" },
            { name: "Display + Frame", models: ["Redmi 10", "Redmi 9 Power"], discount: "10% off" }
        ]
    },
    {
        id: 11,
        title: "Oppo AMOLED Display",
        category: "display",
        brand: "oppo",
        description: "Premium AMOLED display with vibrant colors and deep contrast. Touch digitizer included.",
        image: "https://via.placeholder.com/300x200/96A78D/FFFFFF?text=Oppo+Display",
        images: [
            "https://via.placeholder.com/500x400/96A78D/FFFFFF?text=Oppo+Disp+1",
            "https://via.placeholder.com/500x400/B6CEB4/FFFFFF?text=Oppo+Disp+2"
        ],
        compatibility: ["Oppo Reno 8", "Oppo F21 Pro", "Oppo A96", "Oppo A77", "Oppo Reno 7 Pro"],
        specifications: {
            "Display Type": "AMOLED",
            "Resolution": "2412 x 1080",
            "Size": "6.43 inches",
            "Refresh Rate": "90Hz",
            "Protection": "Schott Glass"
        },
        combos: [
            { name: "Display + Battery", models: ["Oppo Reno 8", "Oppo F21 Pro"], discount: "15% off" },
            { name: "Display + Glass Guard", models: ["Oppo A96", "Oppo A77"], discount: "8% off" }
        ]
    },
    {
        id: 2,
        title: "AMOLED Display Assembly",
        category: "display",
        brand: "vivo",
        description: "Original quality AMOLED display assembly with touch digitizer. Perfect color reproduction and response.",
        image: "https://via.placeholder.com/300x200/96A78D/FFFFFF?text=AMOLED+Vivo",
        images: [
            "https://via.placeholder.com/500x400/96A78D/FFFFFF?text=AMOLED+1",
            "https://via.placeholder.com/500x400/B6CEB4/FFFFFF?text=AMOLED+2"
        ],
        compatibility: ["Vivo V21", "Vivo V20", "Vivo X60", "Vivo Y20", "Vivo V19", "Vivo X50"],
        specifications: {
            "Display Type": "AMOLED",
            "Resolution": "2400 x 1080",
            "Size": "6.5 inches",
            "Refresh Rate": "90Hz",
            "Protection": "Dragontrail Glass"
        },
        combos: [
            { name: "Display + Glass Guard", models: ["Vivo V21", "Vivo V20"], discount: "12% off" },
            { name: "Display + Battery Kit", models: ["Vivo X60", "Vivo X50"], discount: "18% off" }
        ]
    },
    {
        id: 3,
        title: "iPhone 13 Pro Max OLED Display",
        category: "display",
        brand: "iphone",
        description: "Premium OLED display for iPhone 13 Pro Max. True tone technology with ProMotion 120Hz refresh rate.",
        image: "https://via.placeholder.com/300x200/96A78D/FFFFFF?text=iPhone+Display",
        images: [
            "https://via.placeholder.com/500x400/96A78D/FFFFFF?text=iPhone+Display+1",
            "https://via.placeholder.com/500x400/B6CEB4/FFFFFF?text=iPhone+Display+2"
        ],
        compatibility: ["iPhone 13 Pro Max", "iPhone 13 Pro"],
        specifications: {
            "Display Type": "Super Retina XDR OLED",
            "Resolution": "2778 x 1284",
            "Size": "6.7 inches",
            "Refresh Rate": "120Hz ProMotion",
            "Protection": "Ceramic Shield"
        },
        combos: [
            { name: "Display + Battery", models: ["iPhone 13 Pro Max"], discount: "8% off" },
            { name: "Display + Back Glass", models: ["iPhone 13 Pro"], discount: "10% off" }
        ]
    },
    
    // Batteries
    {
        id: 4,
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
        },
        combos: [
            { name: "Battery + Charging Port", models: ["Redmi Note 10", "Redmi Note 9"], discount: "15% off" },
            { name: "Battery + Back Cover", models: ["Mi 11", "Xiaomi 12"], discount: "12% off" }
        ]
    },
    {
        id: 12,
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
        },
        combos: [
            { name: "Battery + Charger", models: ["Galaxy M51", "Galaxy M31"], discount: "18% off" },
            { name: "Battery + Back Cover", models: ["Galaxy F41", "Galaxy A51"], discount: "10% off" }
        ]
    },
    {
        id: 13,
        title: "iPhone Replacement Battery",
        category: "battery",
        brand: "iphone",
        description: "Original quality battery for iPhone models with genuine components and safety certifications.",
        image: "https://via.placeholder.com/300x200/96A78D/FFFFFF?text=iPhone+Battery",
        images: [
            "https://via.placeholder.com/500x400/96A78D/FFFFFF?text=iPhoneBat+1",
            "https://via.placeholder.com/500x400/B6CEB4/FFFFFF?text=iPhoneBat+2"
        ],
        compatibility: ["iPhone 12", "iPhone 12 Pro", "iPhone 11", "iPhone 11 Pro", "iPhone XR"],
        specifications: {
            "Capacity": "3687mAh",
            "Voltage": "3.81V",
            "Type": "Li-ion",
            "Cycle Life": "1000+ cycles",
            "Certification": "CE, FCC, RoHS"
        },
        combos: [
            { name: "Battery + Screen Replacement", models: ["iPhone 12", "iPhone 12 Pro"], discount: "20% off" },
            { name: "Battery + Charging Cable", models: ["iPhone 11", "iPhone XR"], discount: "15% off" }
        ]
    },
    {
        id: 5,
        title: "Fast Charging Battery",
        category: "battery",
        brand: "oppo",
        description: "Fast charging compatible battery with BLP technology. Extended lifespan and safety features included.",
        image: "https://via.placeholder.com/300x200/96A78D/FFFFFF?text=Oppo+Battery",
        images: [
            "https://via.placeholder.com/500x400/96A78D/FFFFFF?text=Oppo+Bat+1",
            "https://via.placeholder.com/500x400/B6CEB4/FFFFFF?text=Oppo+Bat+2"
        ],
        compatibility: ["Oppo F19", "Oppo A74", "Oppo Reno 6", "Oppo A54", "Oppo F21", "Oppo Reno 7"],
        specifications: {
            "Capacity": "4500mAh",
            "Voltage": "3.85V",
            "Type": "Li-polymer",
            "Fast Charge": "65W SuperVOOC",
            "Cycle Life": "800+ cycles"
        },
        combos: [
            { name: "Battery + Charger", models: ["Oppo F19", "Oppo A74"], discount: "20% off" },
            { name: "Battery + Charging Flex", models: ["Oppo Reno 6", "Oppo Reno 7"], discount: "15% off" }
        ]
    },
    
    // Charging Ports
    {
        id: 6,
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
        },
        combos: [
            { name: "Charging Port + Flex Cable", models: ["Samsung", "Xiaomi"], discount: "10% off" },
            { name: "Charging Port + Battery", models: ["OnePlus", "Google Pixel"], discount: "12% off" }
        ]
    },
    {
        id: 14,
        title: "Micro USB Charging Port",
        category: "charging",
        brand: "universal",
        description: "Durable Micro USB charging port for older Android devices. Reliable connection with high durability.",
        image: "https://via.placeholder.com/300x200/96A78D/FFFFFF?text=Micro+USB",
        images: [
            "https://via.placeholder.com/500x400/96A78D/FFFFFF?text=MicroUSB+1",
            "https://via.placeholder.com/500x400/B6CEB4/FFFFFF?text=MicroUSB+2"
        ],
        compatibility: ["Samsung J7", "Samsung J5", "Redmi 4A", "Redmi 5A", "Moto G5", "Nokia 6"],
        specifications: {
            "Connector Type": "Micro USB",
            "Data Speed": "USB 2.0",
            "Power Delivery": "Up to 18W",
            "Durability": "8,000+ cycles",
            "Water Resistance": "None"
        },
        combos: [
            { name: "Charging Port + Battery", models: ["Samsung J7", "Redmi 4A"], discount: "10% off" },
            { name: "Charging Port + Flex Cable", models: ["Redmi 5A", "Moto G5"], discount: "8% off" }
        ]
    },
    {
        id: 7,
        title: "Lightning Port Module",
        category: "charging",
        brand: "iphone",
        description: "Premium Lightning port module for iPhone. Original quality with fast charging support.",
        image: "https://via.placeholder.com/300x200/96A78D/FFFFFF?text=Lightning+Port",
        images: [
            "https://via.placeholder.com/500x400/96A78D/FFFFFF?text=Lightning+1",
            "https://via.placeholder.com/500x400/B6CEB4/FFFFFF?text=Lightning+2"
        ],
        compatibility: ["iPhone 11", "iPhone SE", "iPhone 8", "iPhone X", "iPhone 12", "iPhone 13", "iPhone 14"],
        specifications: {
            "Connector Type": "Lightning",
            "Data Speed": "USB 2.0",
            "Power Delivery": "Up to 20W",
            "Durability": "15,000+ cycles",
            "Certification": "MFi Certified"
        },
        combos: [
            { name: "Lightning Port + Battery", models: ["iPhone 12", "iPhone 13"], discount: "8% off" },
            { name: "Lightning Port + Charging Cable", models: ["iPhone 11", "iPhone SE"], discount: "15% off" }
        ]
    },
    
    // Back Covers
    {
        id: 8,
        title: "Premium Back Cover - Clear Design",
        category: "cover",
        brand: "iphone",
        description: "Transparent back cover with enhanced protection. Maintains the original design while providing excellent protection.",
        image: "https://via.placeholder.com/300x200/96A78D/FFFFFF?text=Back+Cover",
        images: [
            "https://via.placeholder.com/500x400/96A78D/FFFFFF?text=Cover+1",
            "https://via.placeholder.com/500x400/B6CEB4/FFFFFF?text=Cover+2"
        ],
        compatibility: ["iPhone 14", "iPhone 13", "iPhone 12", "iPhone 11", "iPhone SE 2nd Gen"],
        specifications: {
            "Material": "TPU + PC",
            "Design": "Clear",
            "Drop Protection": "Up to 6 feet",
            "Wireless Charging": "Compatible",
            "MagSafe": "Compatible"
        },
        combos: [
            { name: "Back Cover + Screen Guard", models: ["iPhone 14", "iPhone 13"], discount: "15% off" },
            { name: "Back Cover + Ring Holder", models: ["iPhone 12", "iPhone 11"], discount: "20% off" }
        ]
    },
    {
        id: 15,
        title: "Matte Black Back Cover",
        category: "cover",
        brand: "universal",
        description: "Sleek matte black back cover with fingerprint resistant coating. Premium feel with excellent protection.",
        image: "https://via.placeholder.com/300x200/96A78D/FFFFFF?text=Matte+Cover",
        images: [
            "https://via.placeholder.com/500x400/96A78D/FFFFFF?text=Matte+1",
            "https://via.placeholder.com/500x400/B6CEB4/FFFFFF?text=Matte+2"
        ],
        compatibility: ["Samsung M31", "Samsung A51", "Redmi Note 9", "Redmi Note 10", "Realme 7"],
        specifications: {
            "Material": "TPU",
            "Design": "Matte Black",
            "Drop Protection": "Up to 5 feet",
            "Wireless Charging": "Compatible",
            "Camera Protection": "Raised edges"
        },
        combos: [
            { name: "Back Cover + Screen Guard", models: ["Samsung M31", "Redmi Note 10"], discount: "15% off" },
            { name: "Back Cover + Ring Holder", models: ["Samsung A51", "Realme 7"], discount: "12% off" }
        ]
    },
    {
        id: 9,
        title: "Samsung Back Glass Panel",
        category: "cover",
        brand: "samsung",
        description: "Original quality back glass panel for Samsung flagship models. Premium finish with camera cutouts.",
        image: "https://via.placeholder.com/300x200/96A78D/FFFFFF?text=Samsung+Back",
        images: [
            "https://via.placeholder.com/500x400/96A78D/FFFFFF?text=Sam+Back+1",
            "https://via.placeholder.com/500x400/B6CEB4/FFFFFF?text=Sam+Back+2"
        ],
        compatibility: ["Galaxy S21", "Galaxy S20", "Galaxy Note 20", "Galaxy S21+", "Galaxy S21 Ultra", "Galaxy S22"],
        specifications: {
            "Material": "Tempered Glass",
            "Thickness": "0.8mm",
            "Hardness": "9H",
            "Camera Cutouts": "Precise",
            "Wireless Charging": "Compatible"
        },
        combos: [
            { name: "Back Glass + Camera Module", models: ["Galaxy S21", "Galaxy S20"], discount: "12% off" },
            { name: "Back Glass + Battery", models: ["Galaxy Note 20", "Galaxy S21+"], discount: "10% off" }
        ]
    },
    
    // Frames
    {
        id: 10,
        title: "Universal Metal Frame",
        category: "frame",
        brand: "universal",
        description: "Precision-engineered metal frame with perfect fit. Durable aluminum construction with premium finish.",
        image: "https://via.placeholder.com/300x200/96A78D/FFFFFF?text=Metal+Frame",
        images: [
            "https://via.placeholder.com/500x400/96A78D/FFFFFF?text=Frame+1",
            "https://via.placeholder.com/500x400/B6CEB4/FFFFFF?text=Frame+2"
        ],
        compatibility: ["iPhone X", "iPhone XS", "iPhone 11", "Samsung S20", "Samsung Note 10"],
        specifications: {
            "Material": "Aluminum Alloy",
            "Finish": "Space Gray",
            "Thickness": "1.2mm",
            "Durability": "Military Grade",
            "Antenna Lines": "Integrated"
        },
        combos: [
            { name: "Metal Frame + Display", models: ["iPhone X", "iPhone XS"], discount: "15% off" },
            { name: "Metal Frame + Battery", models: ["Samsung S20", "Samsung Note 10"], discount: "12% off" }
        ]
    },
    {
        id: 16,
        title: "Plastic Frame for Redmi Series",
        category: "frame",
        brand: "redmi",
        description: "Durable plastic frame designed specifically for Redmi series phones. Lightweight yet strong.",
        image: "https://via.placeholder.com/300x200/96A78D/FFFFFF?text=Plastic+Frame",
        images: [
            "https://via.placeholder.com/500x400/96A78D/FFFFFF?text=Plastic+1",
            "https://via.placeholder.com/500x400/B6CEB4/FFFFFF?text=Plastic+2"
        ],
        compatibility: ["Redmi Note 10", "Redmi Note 9", "Redmi 9", "Redmi 10", "Redmi Note 8"],
        specifications: {
            "Material": "Polycarbonate",
            "Finish": "Matte Black",
            "Thickness": "1.5mm",
            "Durability": "Drop Tested",
            "Antenna Lines": "Integrated"
        },
        combos: [
            { name: "Frame + Battery", models: ["Redmi Note 10", "Redmi Note 9"], discount: "10% off" },
            { name: "Frame + Display", models: ["Redmi 9", "Redmi 10"], discount: "12% off" }
        ]
    },
    
    // Glass Guards
    {
        id: 11,
        title: "Tempered Glass Screen Protector",
        category: "glass",
        brand: "universal",
        description: "9H hardness tempered glass with oleophobic coating. Crystal clear with bubble-free installation.",
        image: "https://via.placeholder.com/300x200/96A78D/FFFFFF?text=Glass+Guard",
        images: [
            "https://via.placeholder.com/500x400/96A78D/FFFFFF?text=Glass+1",
            "https://via.placeholder.com/500x400/B6CEB4/FFFFFF?text=Glass+2"
        ],
        compatibility: ["Most Android", "iPhone", "Samsung", "OnePlus", "Xiaomi", "Vivo", "Oppo", "Realme"],
        specifications: {
            "Hardness": "9H",
            "Thickness": "0.26mm",
            "Transparency": "99.9%",
            "Coating": "Oleophobic + Anti-fingerprint",
            "Drop Protection": "Up to 3 feet"
        },
        combos: [
            { name: "Screen Guard + Back Cover", models: ["iPhone", "Samsung"], discount: "20% off" },
            { name: "Screen Guard + Privacy Filter", models: ["OnePlus", "Xiaomi"], discount: "15% off" }
        ]
    },
    {
        id: 17,
        title: "Privacy Screen Protector",
        category: "glass",
        brand: "universal",
        description: "Privacy screen protector that blocks side viewing angles while maintaining clarity. Perfect for confidential information.",
        image: "https://via.placeholder.com/300x200/96A78D/FFFFFF?text=Privacy+Guard",
        images: [
            "https://via.placeholder.com/500x400/96A78D/FFFFFF?text=Privacy+1",
            "https://via.placeholder.com/500x400/B6CEB4/FFFFFF?text=Privacy+2"
        ],
        compatibility: ["iPhone 12", "iPhone 13", "Samsung S21", "Samsung Note 20", "OnePlus 9"],
        specifications: {
            "Hardness": "9H",
            "Thickness": "0.33mm",
            "Transparency": "99.5%",
            "Privacy Angle": "45 degrees",
            "Drop Protection": "Up to 2 feet"
        },
        combos: [
            { name: "Privacy Guard + Back Cover", models: ["iPhone 12", "iPhone 13"], discount: "18% off" },
            { name: "Privacy Guard + Ring Holder", models: ["Samsung S21", "OnePlus 9"], discount: "12% off" }
        ]
    },
{
        "id": 100,
        "title": "Battery 1",
        "category": "battery",
        "brand": "universal",
        "description": "Battery for mobile devices",
        "image": "https://via.placeholder.com/300x200/96A78D/FFFFFF?text=Battery",
        "images": ["https://via.placeholder.com/500x400/96A78D/FFFFFF?text=Battery+1", "https://via.placeholder.com/500x400/B6CEB4/FFFFFF?text=Battery+2"],
        "compatibility": [],
        "specifications": { "Capacity": "Unknown", "Voltage": "Unknown", "Type": "Unknown", "Cycle Life": "Unknown", "Protection": "Standard" },
        "combos": []
    },
{
        "id": 101,
        "title": "Battery 2",
        "category": "battery",
        "brand": "universal",
        "description": "Battery for mobile devices",
        "image": "https://via.placeholder.com/300x200/96A78D/FFFFFF?text=Battery",
        "images": ["https://via.placeholder.com/500x400/96A78D/FFFFFF?text=Battery+1", "https://via.placeholder.com/500x400/B6CEB4/FFFFFF?text=Battery+2"],
        "compatibility": [],
        "specifications": { "Capacity": "Unknown", "Voltage": "Unknown", "Type": "Unknown", "Cycle Life": "Unknown", "Protection": "Standard" },
        "combos": []
    },
{
        "id": 102,
        "title": "Battery 3",
        "category": "battery",
        "brand": "universal",
        "description": "Battery for mobile devices",
        "image": "https://via.placeholder.com/300x200/96A78D/FFFFFF?text=Battery",
        "images": ["https://via.placeholder.com/500x400/96A78D/FFFFFF?text=Battery+1", "https://via.placeholder.com/500x400/B6CEB4/FFFFFF?text=Battery+2"],
        "compatibility": [],
        "specifications": { "Capacity": "Unknown", "Voltage": "Unknown", "Type": "Unknown", "Cycle Life": "Unknown", "Protection": "Standard" },
        "combos": []
    },
{
        "id": 103,
        "title": "Battery 4",
        "category": "battery",
        "brand": "universal",
        "description": "Battery for mobile devices",
        "image": "https://via.placeholder.com/300x200/96A78D/FFFFFF?text=Battery",
        "images": ["https://via.placeholder.com/500x400/96A78D/FFFFFF?text=Battery+1", "https://via.placeholder.com/500x400/B6CEB4/FFFFFF?text=Battery+2"],
        "compatibility": [],
        "specifications": { "Capacity": "Unknown", "Voltage": "Unknown", "Type": "Unknown", "Cycle Life": "Unknown", "Protection": "Standard" },
        "combos": []
    },
{
        "id": 104,
        "title": "Battery 5",
        "category": "battery",
        "brand": "universal",
        "description": "Battery for mobile devices",
        "image": "https://via.placeholder.com/300x200/96A78D/FFFFFF?text=Battery",
        "images": ["https://via.placeholder.com/500x400/96A78D/FFFFFF?text=Battery+1", "https://via.placeholder.com/500x400/B6CEB4/FFFFFF?text=Battery+2"],
        "compatibility": [],
        "specifications": { "Capacity": "Unknown", "Voltage": "Unknown", "Type": "Unknown", "Cycle Life": "Unknown", "Protection": "Standard" },
        "combos": []
    },
{
        "id": 105,
        "title": "Battery 6",
        "category": "battery",
        "brand": "universal",
        "description": "Battery for mobile devices",
        "image": "https://via.placeholder.com/300x200/96A78D/FFFFFF?text=Battery",
        "images": ["https://via.placeholder.com/500x400/96A78D/FFFFFF?text=Battery+1", "https://via.placeholder.com/500x400/B6CEB4/FFFFFF?text=Battery+2"],
        "compatibility": [],
        "specifications": { "Capacity": "Unknown", "Voltage": "Unknown", "Type": "Unknown", "Cycle Life": "Unknown", "Protection": "Standard" },
        "combos": []
    },
{
        "id": 106,
        "title": "Battery 7",
        "category": "battery",
        "brand": "universal",
        "description": "Battery for mobile devices",
        "image": "https://via.placeholder.com/300x200/96A78D/FFFFFF?text=Battery",
        "images": ["https://via.placeholder.com/500x400/96A78D/FFFFFF?text=Battery+1", "https://via.placeholder.com/500x400/B6CEB4/FFFFFF?text=Battery+2"],
        "compatibility": [],
        "specifications": { "Capacity": "Unknown", "Voltage": "Unknown", "Type": "Unknown", "Cycle Life": "Unknown", "Protection": "Standard" },
        "combos": []
    },
{
        "id": 107,
        "title": "Battery 8",
        "category": "battery",
        "brand": "universal",
        "description": "Battery for mobile devices",
        "image": "https://via.placeholder.com/300x200/96A78D/FFFFFF?text=Battery",
        "images": ["https://via.placeholder.com/500x400/96A78D/FFFFFF?text=Battery+1", "https://via.placeholder.com/500x400/B6CEB4/FFFFFF?text=Battery+2"],
        "compatibility": [],
        "specifications": { "Capacity": "Unknown", "Voltage": "Unknown", "Type": "Unknown", "Cycle Life": "Unknown", "Protection": "Standard" },
        "combos": []
    },
{
        "id": 108,
        "title": "Battery 9",
        "category": "battery",
        "brand": "universal",
        "description": "Battery for mobile devices",
        "image": "https://via.placeholder.com/300x200/96A78D/FFFFFF?text=Battery",
        "images": ["https://via.placeholder.com/500x400/96A78D/FFFFFF?text=Battery+1", "https://via.placeholder.com/500x400/B6CEB4/FFFFFF?text=Battery+2"],
        "compatibility": [],
        "specifications": { "Capacity": "Unknown", "Voltage": "Unknown", "Type": "Unknown", "Cycle Life": "Unknown", "Protection": "Standard" },
        "combos": []
    },
{
        "id": 109,
        "title": "Battery 10",
        "category": "battery",
        "brand": "universal",
        "description": "Battery for mobile devices",
        "image": "https://via.placeholder.com/300x200/96A78D/FFFFFF?text=Battery",
        "images": ["https://via.placeholder.com/500x400/96A78D/FFFFFF?text=Battery+1", "https://via.placeholder.com/500x400/B6CEB4/FFFFFF?text=Battery+2"],
        "compatibility": [],
        "specifications": { "Capacity": "Unknown", "Voltage": "Unknown", "Type": "Unknown", "Cycle Life": "Unknown", "Protection": "Standard" },
        "combos": []
    },
{
        "id": 110,
        "title": "Battery 11",
        "category": "battery",
        "brand": "universal",
        "description": "Battery for mobile devices",
        "image": "https://via.placeholder.com/300x200/96A78D/FFFFFF?text=Battery",
        "images": ["https://via.placeholder.com/500x400/96A78D/FFFFFF?text=Battery+1", "https://via.placeholder.com/500x400/B6CEB4/FFFFFF?text=Battery+2"],
        "compatibility": [],
        "specifications": { "Capacity": "Unknown", "Voltage": "Unknown", "Type": "Unknown", "Cycle Life": "Unknown", "Protection": "Standard" },
        "combos": []
    },
{
        "id": 111,
        "title": "Battery 12",
        "category": "battery",
        "brand": "universal",
        "description": "Battery for mobile devices",
        "image": "https://via.placeholder.com/300x200/96A78D/FFFFFF?text=Battery",
        "images": ["https://via.placeholder.com/500x400/96A78D/FFFFFF?text=Battery+1", "https://via.placeholder.com/500x400/B6CEB4/FFFFFF?text=Battery+2"],
        "compatibility": [],
        "specifications": { "Capacity": "Unknown", "Voltage": "Unknown", "Type": "Unknown", "Cycle Life": "Unknown", "Protection": "Standard" },
        "combos": []
    },
{
        "id": 112,
        "title": "Battery 13",
        "category": "battery",
        "brand": "universal",
        "description": "Battery for mobile devices",
        "image": "https://via.placeholder.com/300x200/96A78D/FFFFFF?text=Battery",
        "images": ["https://via.placeholder.com/500x400/96A78D/FFFFFF?text=Battery+1", "https://via.placeholder.com/500x400/B6CEB4/FFFFFF?text=Battery+2"],
        "compatibility": [],
        "specifications": { "Capacity": "Unknown", "Voltage": "Unknown", "Type": "Unknown", "Cycle Life": "Unknown", "Protection": "Standard" },
        "combos": []
    },
{
        "id": 113,
        "title": "Battery 14",
        "category": "battery",
        "brand": "universal",
        "description": "Battery for mobile devices",
        "image": "https://via.placeholder.com/300x200/96A78D/FFFFFF?text=Battery",
        "images": ["https://via.placeholder.com/500x400/96A78D/FFFFFF?text=Battery+1", "https://via.placeholder.com/500x400/B6CEB4/FFFFFF?text=Battery+2"],
        "compatibility": [],
        "specifications": { "Capacity": "Unknown", "Voltage": "Unknown", "Type": "Unknown", "Cycle Life": "Unknown", "Protection": "Standard" },
        "combos": []
    },
{
        "id": 114,
        "title": "Battery 15",
        "category": "battery",
        "brand": "universal",
        "description": "Battery for mobile devices",
        "image": "https://via.placeholder.com/300x200/96A78D/FFFFFF?text=Battery",
        "images": ["https://via.placeholder.com/500x400/96A78D/FFFFFF?text=Battery+1", "https://via.placeholder.com/500x400/B6CEB4/FFFFFF?text=Battery+2"],
        "compatibility": [],
        "specifications": { "Capacity": "Unknown", "Voltage": "Unknown", "Type": "Unknown", "Cycle Life": "Unknown", "Protection": "Standard" },
        "combos": []
    },
{
        "id": 115,
        "title": "Battery 16",
        "category": "battery",
        "brand": "universal",
        "description": "Battery for mobile devices",
        "image": "https://via.placeholder.com/300x200/96A78D/FFFFFF?text=Battery",
        "images": ["https://via.placeholder.com/500x400/96A78D/FFFFFF?text=Battery+1", "https://via.placeholder.com/500x400/B6CEB4/FFFFFF?text=Battery+2"],
        "compatibility": [],
        "specifications": { "Capacity": "Unknown", "Voltage": "Unknown", "Type": "Unknown", "Cycle Life": "Unknown", "Protection": "Standard" },
        "combos": []
    },
{
        "id": 116,
        "title": "Battery 17",
        "category": "battery",
        "brand": "universal",
        "description": "Battery for mobile devices",
        "image": "https://via.placeholder.com/300x200/96A78D/FFFFFF?text=Battery",
        "images": ["https://via.placeholder.com/500x400/96A78D/FFFFFF?text=Battery+1", "https://via.placeholder.com/500x400/B6CEB4/FFFFFF?text=Battery+2"],
        "compatibility": [],
        "specifications": { "Capacity": "Unknown", "Voltage": "Unknown", "Type": "Unknown", "Cycle Life": "Unknown", "Protection": "Standard" },
        "combos": []
    },
{
        "id": 117,
        "title": "Battery 18",
        "category": "battery",
        "brand": "universal",
        "description": "Battery for mobile devices",
        "image": "https://via.placeholder.com/300x200/96A78D/FFFFFF?text=Battery",
        "images": ["https://via.placeholder.com/500x400/96A78D/FFFFFF?text=Battery+1", "https://via.placeholder.com/500x400/B6CEB4/FFFFFF?text=Battery+2"],
        "compatibility": [],
        "specifications": { "Capacity": "Unknown", "Voltage": "Unknown", "Type": "Unknown", "Cycle Life": "Unknown", "Protection": "Standard" },
        "combos": []
    },
{
        "id": 118,
        "title": "Battery 19",
        "category": "battery",
        "brand": "universal",
        "description": "Battery for mobile devices",
        "image": "https://via.placeholder.com/300x200/96A78D/FFFFFF?text=Battery",
        "images": ["https://via.placeholder.com/500x400/96A78D/FFFFFF?text=Battery+1", "https://via.placeholder.com/500x400/B6CEB4/FFFFFF?text=Battery+2"],
        "compatibility": [],
        "specifications": { "Capacity": "Unknown", "Voltage": "Unknown", "Type": "Unknown", "Cycle Life": "Unknown", "Protection": "Standard" },
        "combos": []
    },
{
        "id": 119,
        "title": "Battery 20",
        "category": "battery",
        "brand": "universal",
        "description": "Battery for mobile devices",
        "image": "https://via.placeholder.com/300x200/96A78D/FFFFFF?text=Battery",
        "images": ["https://via.placeholder.com/500x400/96A78D/FFFFFF?text=Battery+1", "https://via.placeholder.com/500x400/B6CEB4/FFFFFF?text=Battery+2"],
        "compatibility": [],
        "specifications": { "Capacity": "Unknown", "Voltage": "Unknown", "Type": "Unknown", "Cycle Life": "Unknown", "Protection": "Standard" },
        "combos": []
    },
{
        "id": 120,
        "title": "Battery 21",
        "category": "battery",
        "brand": "universal",
        "description": "Battery for mobile devices",
        "image": "https://via.placeholder.com/300x200/96A78D/FFFFFF?text=Battery",
        "images": ["https://via.placeholder.com/500x400/96A78D/FFFFFF?text=Battery+1", "https://via.placeholder.com/500x400/B6CEB4/FFFFFF?text=Battery+2"],
        "compatibility": [],
        "specifications": { "Capacity": "Unknown", "Voltage": "Unknown", "Type": "Unknown", "Cycle Life": "Unknown", "Protection": "Standard" },
        "combos": []
    },
{
        "id": 121,
        "title": "Battery 22",
        "category": "battery",
        "brand": "universal",
        "description": "Battery for mobile devices",
        "image": "https://via.placeholder.com/300x200/96A78D/FFFFFF?text=Battery",
        "images": ["https://via.placeholder.com/500x400/96A78D/FFFFFF?text=Battery+1", "https://via.placeholder.com/500x400/B6CEB4/FFFFFF?text=Battery+2"],
        "compatibility": [],
        "specifications": { "Capacity": "Unknown", "Voltage": "Unknown", "Type": "Unknown", "Cycle Life": "Unknown", "Protection": "Standard" },
        "combos": []
    },
{
        "id": 122,
        "title": "Battery 23",
        "category": "battery",
        "brand": "universal",
        "description": "Battery for mobile devices",
        "image": "https://via.placeholder.com/300x200/96A78D/FFFFFF?text=Battery",
        "images": ["https://via.placeholder.com/500x400/96A78D/FFFFFF?text=Battery+1", "https://via.placeholder.com/500x400/B6CEB4/FFFFFF?text=Battery+2"],
        "compatibility": [],
        "specifications": { "Capacity": "Unknown", "Voltage": "Unknown", "Type": "Unknown", "Cycle Life": "Unknown", "Protection": "Standard" },
        "combos": []
    },
{
        "id": 123,
        "title": "Battery 24",
        "category": "battery",
        "brand": "universal",
        "description": "Battery for mobile devices",
        "image": "https://via.placeholder.com/300x200/96A78D/FFFFFF?text=Battery",
        "images": ["https://via.placeholder.com/500x400/96A78D/FFFFFF?text=Battery+1", "https://via.placeholder.com/500x400/B6CEB4/FFFFFF?text=Battery+2"],
        "compatibility": [],
        "specifications": { "Capacity": "Unknown", "Voltage": "Unknown", "Type": "Unknown", "Cycle Life": "Unknown", "Protection": "Standard" },
        "combos": []
    },
{
        "id": 124,
        "title": "Battery 25",
        "category": "battery",
        "brand": "universal",
        "description": "Battery for mobile devices",
        "image": "https://via.placeholder.com/300x200/96A78D/FFFFFF?text=Battery",
        "images": ["https://via.placeholder.com/500x400/96A78D/FFFFFF?text=Battery+1", "https://via.placeholder.com/500x400/B6CEB4/FFFFFF?text=Battery+2"],
        "compatibility": [],
        "specifications": { "Capacity": "Unknown", "Voltage": "Unknown", "Type": "Unknown", "Cycle Life": "Unknown", "Protection": "Standard" },
        "combos": []
    },
{
        "id": 125,
        "title": "Battery 26",
        "category": "battery",
        "brand": "universal",
        "description": "Battery for mobile devices",
        "image": "https://via.placeholder.com/300x200/96A78D/FFFFFF?text=Battery",
        "images": ["https://via.placeholder.com/500x400/96A78D/FFFFFF?text=Battery+1", "https://via.placeholder.com/500x400/B6CEB4/FFFFFF?text=Battery+2"],
        "compatibility": [],
        "specifications": { "Capacity": "Unknown", "Voltage": "Unknown", "Type": "Unknown", "Cycle Life": "Unknown", "Protection": "Standard" },
        "combos": []
    },
{
        "id": 126,
        "title": "Battery 27",
        "category": "battery",
        "brand": "universal",
        "description": "Battery for mobile devices",
        "image": "https://via.placeholder.com/300x200/96A78D/FFFFFF?text=Battery",
        "images": ["https://via.placeholder.com/500x400/96A78D/FFFFFF?text=Battery+1", "https://via.placeholder.com/500x400/B6CEB4/FFFFFF?text=Battery+2"],
        "compatibility": [],
        "specifications": { "Capacity": "Unknown", "Voltage": "Unknown", "Type": "Unknown", "Cycle Life": "Unknown", "Protection": "Standard" },
        "combos": []
    },
{
        "id": 127,
        "title": "Battery 28",
        "category": "battery",
        "brand": "universal",
        "description": "Battery for mobile devices",
        "image": "https://via.placeholder.com/300x200/96A78D/FFFFFF?text=Battery",
        "images": ["https://via.placeholder.com/500x400/96A78D/FFFFFF?text=Battery+1", "https://via.placeholder.com/500x400/B6CEB4/FFFFFF?text=Battery+2"],
        "compatibility": [],
        "specifications": { "Capacity": "Unknown", "Voltage": "Unknown", "Type": "Unknown", "Cycle Life": "Unknown", "Protection": "Standard" },
        "combos": []
    },
{
        "id": 128,
        "title": "Battery 29",
        "category": "battery",
        "brand": "universal",
        "description": "Battery for mobile devices",
        "image": "https://via.placeholder.com/300x200/96A78D/FFFFFF?text=Battery",
        "images": ["https://via.placeholder.com/500x400/96A78D/FFFFFF?text=Battery+1", "https://via.placeholder.com/500x400/B6CEB4/FFFFFF?text=Battery+2"],
        "compatibility": [],
        "specifications": { "Capacity": "Unknown", "Voltage": "Unknown", "Type": "Unknown", "Cycle Life": "Unknown", "Protection": "Standard" },
        "combos": []
    },
{
        "id": 129,
        "title": "Battery 30",
        "category": "battery",
        "brand": "universal",
        "description": "Battery for mobile devices",
        "image": "https://via.placeholder.com/300x200/96A78D/FFFFFF?text=Battery",
        "images": ["https://via.placeholder.com/500x400/96A78D/FFFFFF?text=Battery+1", "https://via.placeholder.com/500x400/B6CEB4/FFFFFF?text=Battery+2"],
        "compatibility": [],
        "specifications": { "Capacity": "Unknown", "Voltage": "Unknown", "Type": "Unknown", "Cycle Life": "Unknown", "Protection": "Standard" },
        "combos": []
    },
{
        "id": 130,
        "title": "Battery 31",
        "category": "battery",
        "brand": "universal",
        "description": "Battery for mobile devices",
        "image": "https://via.placeholder.com/300x200/96A78D/FFFFFF?text=Battery",
        "images": ["https://via.placeholder.com/500x400/96A78D/FFFFFF?text=Battery+1", "https://via.placeholder.com/500x400/B6CEB4/FFFFFF?text=Battery+2"],
        "compatibility": [],
        "specifications": { "Capacity": "Unknown", "Voltage": "Unknown", "Type": "Unknown", "Cycle Life": "Unknown", "Protection": "Standard" },
        "combos": []
    },
{
        "id": 131,
        "title": "Battery 32",
        "category": "battery",
        "brand": "universal",
        "description": "Battery for mobile devices",
        "image": "https://via.placeholder.com/300x200/96A78D/FFFFFF?text=Battery",
        "images": ["https://via.placeholder.com/500x400/96A78D/FFFFFF?text=Battery+1", "https://via.placeholder.com/500x400/B6CEB4/FFFFFF?text=Battery+2"],
        "compatibility": [],
        "specifications": { "Capacity": "Unknown", "Voltage": "Unknown", "Type": "Unknown", "Cycle Life": "Unknown", "Protection": "Standard" },
        "combos": []
    },
{
        "id": 132,
        "title": "Battery 33",
        "category": "battery",
        "brand": "universal",
        "description": "Battery for mobile devices",
        "image": "https://via.placeholder.com/300x200/96A78D/FFFFFF?text=Battery",
        "images": ["https://via.placeholder.com/500x400/96A78D/FFFFFF?text=Battery+1", "https://via.placeholder.com/500x400/B6CEB4/FFFFFF?text=Battery+2"],
        "compatibility": [],
        "specifications": { "Capacity": "Unknown", "Voltage": "Unknown", "Type": "Unknown", "Cycle Life": "Unknown", "Protection": "Standard" },
        "combos": []
    },
{
        "id": 133,
        "title": "Battery 34",
        "category": "battery",
        "brand": "universal",
        "description": "Battery for mobile devices",
        "image": "https://via.placeholder.com/300x200/96A78D/FFFFFF?text=Battery",
        "images": ["https://via.placeholder.com/500x400/96A78D/FFFFFF?text=Battery+1", "https://via.placeholder.com/500x400/B6CEB4/FFFFFF?text=Battery+2"],
        "compatibility": [],
        "specifications": { "Capacity": "Unknown", "Voltage": "Unknown", "Type": "Unknown", "Cycle Life": "Unknown", "Protection": "Standard" },
        "combos": []
    },
{
        "id": 134,
        "title": "Battery 35",
        "category": "battery",
        "brand": "universal",
        "description": "Battery for mobile devices",
        "image": "https://via.placeholder.com/300x200/96A78D/FFFFFF?text=Battery",
        "images": ["https://via.placeholder.com/500x400/96A78D/FFFFFF?text=Battery+1", "https://via.placeholder.com/500x400/B6CEB4/FFFFFF?text=Battery+2"],
        "compatibility": [],
        "specifications": { "Capacity": "Unknown", "Voltage": "Unknown", "Type": "Unknown", "Cycle Life": "Unknown", "Protection": "Standard" },
        "combos": []
    },
{
        "id": 135,
        "title": "Battery 36",
        "category": "battery",
        "brand": "universal",
        "description": "Battery for mobile devices",
        "image": "https://via.placeholder.com/300x200/96A78D/FFFFFF?text=Battery",
        "images": ["https://via.placeholder.com/500x400/96A78D/FFFFFF?text=Battery+1", "https://via.placeholder.com/500x400/B6CEB4/FFFFFF?text=Battery+2"],
        "compatibility": [],
        "specifications": { "Capacity": "Unknown", "Voltage": "Unknown", "Type": "Unknown", "Cycle Life": "Unknown", "Protection": "Standard" },
        "combos": []
    },
{
        "id": 136,
        "title": "Battery 37",
        "category": "battery",
        "brand": "universal",
        "description": "Battery for mobile devices",
        "image": "https://via.placeholder.com/300x200/96A78D/FFFFFF?text=Battery",
        "images": ["https://via.placeholder.com/500x400/96A78D/FFFFFF?text=Battery+1", "https://via.placeholder.com/500x400/B6CEB4/FFFFFF?text=Battery+2"],
        "compatibility": [],
        "specifications": { "Capacity": "Unknown", "Voltage": "Unknown", "Type": "Unknown", "Cycle Life": "Unknown", "Protection": "Standard" },
        "combos": []
    },
{
        "id": 137,
        "title": "Battery 38",
        "category": "battery",
        "brand": "universal",
        "description": "Battery for mobile devices",
        "image": "https://via.placeholder.com/300x200/96A78D/FFFFFF?text=Battery",
        "images": ["https://via.placeholder.com/500x400/96A78D/FFFFFF?text=Battery+1", "https://via.placeholder.com/500x400/B6CEB4/FFFFFF?text=Battery+2"],
        "compatibility": [],
        "specifications": { "Capacity": "Unknown", "Voltage": "Unknown", "Type": "Unknown", "Cycle Life": "Unknown", "Protection": "Standard" },
        "combos": []
    },
{
        "id": 138,
        "title": "Battery 39",
        "category": "battery",
        "brand": "universal",
        "description": "Battery for mobile devices",
        "image": "https://via.placeholder.com/300x200/96A78D/FFFFFF?text=Battery",
        "images": ["https://via.placeholder.com/500x400/96A78D/FFFFFF?text=Battery+1", "https://via.placeholder.com/500x400/B6CEB4/FFFFFF?text=Battery+2"],
        "compatibility": [],
        "specifications": { "Capacity": "Unknown", "Voltage": "Unknown", "Type": "Unknown", "Cycle Life": "Unknown", "Protection": "Standard" },
        "combos": []
    },
{
        "id": 139,
        "title": "Battery 40",
        "category": "battery",
        "brand": "universal",
        "description": "Battery for mobile devices",
        "image": "https://via.placeholder.com/300x200/96A78D/FFFFFF?text=Battery",
        "images": ["https://via.placeholder.com/500x400/96A78D/FFFFFF?text=Battery+1", "https://via.placeholder.com/500x400/B6CEB4/FFFFFF?text=Battery+2"],
        "compatibility": [],
        "specifications": { "Capacity": "Unknown", "Voltage": "Unknown", "Type": "Unknown", "Cycle Life": "Unknown", "Protection": "Standard" },
        "combos": []
    },
{
        "id": 140,
        "title": "Battery 41",
        "category": "battery",
        "brand": "universal",
        "description": "Battery for mobile devices",
        "image": "https://via.placeholder.com/300x200/96A78D/FFFFFF?text=Battery",
        "images": ["https://via.placeholder.com/500x400/96A78D/FFFFFF?text=Battery+1", "https://via.placeholder.com/500x400/B6CEB4/FFFFFF?text=Battery+2"],
        "compatibility": [],
        "specifications": { "Capacity": "Unknown", "Voltage": "Unknown", "Type": "Unknown", "Cycle Life": "Unknown", "Protection": "Standard" },
        "combos": []
    },
{
        "id": 141,
        "title": "Battery 42",
        "category": "battery",
        "brand": "universal",
        "description": "Battery for mobile devices",
        "image": "https://via.placeholder.com/300x200/96A78D/FFFFFF?text=Battery",
        "images": ["https://via.placeholder.com/500x400/96A78D/FFFFFF?text=Battery+1", "https://via.placeholder.com/500x400/B6CEB4/FFFFFF?text=Battery+2"],
        "compatibility": [],
        "specifications": { "Capacity": "Unknown", "Voltage": "Unknown", "Type": "Unknown", "Cycle Life": "Unknown", "Protection": "Standard" },
        "combos": []
    },
{
        "id": 142,
        "title": "Battery 43",
        "category": "battery",
        "brand": "universal",
        "description": "Battery for mobile devices",
        "image": "https://via.placeholder.com/300x200/96A78D/FFFFFF?text=Battery",
        "images": ["https://via.placeholder.com/500x400/96A78D/FFFFFF?text=Battery+1", "https://via.placeholder.com/500x400/B6CEB4/FFFFFF?text=Battery+2"],
        "compatibility": [],
        "specifications": { "Capacity": "Unknown", "Voltage": "Unknown", "Type": "Unknown", "Cycle Life": "Unknown", "Protection": "Standard" },
        "combos": []
    },
{
        "id": 143,
        "title": "Battery 44",
        "category": "battery",
        "brand": "universal",
        "description": "Battery for mobile devices",
        "image": "https://via.placeholder.com/300x200/96A78D/FFFFFF?text=Battery",
        "images": ["https://via.placeholder.com/500x400/96A78D/FFFFFF?text=Battery+1", "https://via.placeholder.com/500x400/B6CEB4/FFFFFF?text=Battery+2"],
        "compatibility": [],
        "specifications": { "Capacity": "Unknown", "Voltage": "Unknown", "Type": "Unknown", "Cycle Life": "Unknown", "Protection": "Standard" },
        "combos": []
    },
{
        "id": 144,
        "title": "Battery 45",
        "category": "battery",
        "brand": "universal",
        "description": "Battery for mobile devices",
        "image": "https://via.placeholder.com/300x200/96A78D/FFFFFF?text=Battery",
        "images": ["https://via.placeholder.com/500x400/96A78D/FFFFFF?text=Battery+1", "https://via.placeholder.com/500x400/B6CEB4/FFFFFF?text=Battery+2"],
        "compatibility": [],
        "specifications": { "Capacity": "Unknown", "Voltage": "Unknown", "Type": "Unknown", "Cycle Life": "Unknown", "Protection": "Standard" },
        "combos": []
    },
{
        "id": 145,
        "title": "Battery 46",
        "category": "battery",
        "brand": "universal",
        "description": "Battery for mobile devices",
        "image": "https://via.placeholder.com/300x200/96A78D/FFFFFF?text=Battery",
        "images": ["https://via.placeholder.com/500x400/96A78D/FFFFFF?text=Battery+1", "https://via.placeholder.com/500x400/B6CEB4/FFFFFF?text=Battery+2"],
        "compatibility": [],
        "specifications": { "Capacity": "Unknown", "Voltage": "Unknown", "Type": "Unknown", "Cycle Life": "Unknown", "Protection": "Standard" },
        "combos": []
    },
{
        "id": 146,
        "title": "Battery 47",
        "category": "battery",
        "brand": "universal",
        "description": "Battery for mobile devices",
        "image": "https://via.placeholder.com/300x200/96A78D/FFFFFF?text=Battery",
        "images": ["https://via.placeholder.com/500x400/96A78D/FFFFFF?text=Battery+1", "https://via.placeholder.com/500x400/B6CEB4/FFFFFF?text=Battery+2"],
        "compatibility": [],
        "specifications": { "Capacity": "Unknown", "Voltage": "Unknown", "Type": "Unknown", "Cycle Life": "Unknown", "Protection": "Standard" },
        "combos": []
    },
{
        "id": 147,
        "title": "Battery 48",
        "category": "battery",
        "brand": "universal",
        "description": "Battery for mobile devices",
        "image": "https://via.placeholder.com/300x200/96A78D/FFFFFF?text=Battery",
        "images": ["https://via.placeholder.com/500x400/96A78D/FFFFFF?text=Battery+1", "https://via.placeholder.com/500x400/B6CEB4/FFFFFF?text=Battery+2"],
        "compatibility": [],
        "specifications": { "Capacity": "Unknown", "Voltage": "Unknown", "Type": "Unknown", "Cycle Life": "Unknown", "Protection": "Standard" },
        "combos": []
    },
{
        "id": 148,
        "title": "Battery 49",
        "category": "battery",
        "brand": "universal",
        "description": "Battery for mobile devices",
        "image": "https://via.placeholder.com/300x200/96A78D/FFFFFF?text=Battery",
        "images": ["https://via.placeholder.com/500x400/96A78D/FFFFFF?text=Battery+1", "https://via.placeholder.com/500x400/B6CEB4/FFFFFF?text=Battery+2"],
        "compatibility": [],
        "specifications": { "Capacity": "Unknown", "Voltage": "Unknown", "Type": "Unknown", "Cycle Life": "Unknown", "Protection": "Standard" },
        "combos": []
    },
{
        "id": 149,
        "title": "Battery 50",
        "category": "battery",
        "brand": "universal",
        "description": "Battery for mobile devices",
        "image": "https://via.placeholder.com/300x200/96A78D/FFFFFF?text=Battery",
        "images": ["https://via.placeholder.com/500x400/96A78D/FFFFFF?text=Battery+1", "https://via.placeholder.com/500x400/B6CEB4/FFFFFF?text=Battery+2"],
        "compatibility": [],
        "specifications": { "Capacity": "Unknown", "Voltage": "Unknown", "Type": "Unknown", "Cycle Life": "Unknown", "Protection": "Standard" },
        "combos": []
    },
{
        "id": 150,
        "title": "Battery 51",
        "category": "battery",
        "brand": "universal",
        "description": "Battery for mobile devices",
        "image": "https://via.placeholder.com/300x200/96A78D/FFFFFF?text=Battery",
        "images": ["https://via.placeholder.com/500x400/96A78D/FFFFFF?text=Battery+1", "https://via.placeholder.com/500x400/B6CEB4/FFFFFF?text=Battery+2"],
        "compatibility": [],
        "specifications": { "Capacity": "Unknown", "Voltage": "Unknown", "Type": "Unknown", "Cycle Life": "Unknown", "Protection": "Standard" },
        "combos": []
    },
{
        "id": 151,
        "title": "Battery 52",
        "category": "battery",
        "brand": "universal",
        "description": "Battery for mobile devices",
        "image": "https://via.placeholder.com/300x200/96A78D/FFFFFF?text=Battery",
        "images": ["https://via.placeholder.com/500x400/96A78D/FFFFFF?text=Battery+1", "https://via.placeholder.com/500x400/B6CEB4/FFFFFF?text=Battery+2"],
        "compatibility": [],
        "specifications": { "Capacity": "Unknown", "Voltage": "Unknown", "Type": "Unknown", "Cycle Life": "Unknown", "Protection": "Standard" },
        "combos": []
    },
{
        "id": 152,
        "title": "Battery 53",
        "category": "battery",
        "brand": "universal",
        "description": "Battery for mobile devices",
        "image": "https://via.placeholder.com/300x200/96A78D/FFFFFF?text=Battery",
        "images": ["https://via.placeholder.com/500x400/96A78D/FFFFFF?text=Battery+1", "https://via.placeholder.com/500x400/B6CEB4/FFFFFF?text=Battery+2"],
        "compatibility": [],
        "specifications": { "Capacity": "Unknown", "Voltage": "Unknown", "Type": "Unknown", "Cycle Life": "Unknown", "Protection": "Standard" },
        "combos": []
    },
{
        "id": 153,
        "title": "Battery 54",
        "category": "battery",
        "brand": "universal",
        "description": "Battery for mobile devices",
        "image": "https://via.placeholder.com/300x200/96A78D/FFFFFF?text=Battery",
        "images": ["https://via.placeholder.com/500x400/96A78D/FFFFFF?text=Battery+1", "https://via.placeholder.com/500x400/B6CEB4/FFFFFF?text=Battery+2"],
        "compatibility": [],
        "specifications": { "Capacity": "Unknown", "Voltage": "Unknown", "Type": "Unknown", "Cycle Life": "Unknown", "Protection": "Standard" },
        "combos": []
    },
{
        "id": 154,
        "title": "Battery 55",
        "category": "battery",
        "brand": "universal",
        "description": "Battery for mobile devices",
        "image": "https://via.placeholder.com/300x200/96A78D/FFFFFF?text=Battery",
        "images": ["https://via.placeholder.com/500x400/96A78D/FFFFFF?text=Battery+1", "https://via.placeholder.com/500x400/B6CEB4/FFFFFF?text=Battery+2"],
        "compatibility": [],
        "specifications": { "Capacity": "Unknown", "Voltage": "Unknown", "Type": "Unknown", "Cycle Life": "Unknown", "Protection": "Standard" },
        "combos": []
    },
{
        "id": 155,
        "title": "Battery 56",
        "category": "battery",
        "brand": "universal",
        "description": "Battery for mobile devices",
        "image": "https://via.placeholder.com/300x200/96A78D/FFFFFF?text=Battery",
        "images": ["https://via.placeholder.com/500x400/96A78D/FFFFFF?text=Battery+1", "https://via.placeholder.com/500x400/B6CEB4/FFFFFF?text=Battery+2"],
        "compatibility": [],
        "specifications": { "Capacity": "Unknown", "Voltage": "Unknown", "Type": "Unknown", "Cycle Life": "Unknown", "Protection": "Standard" },
        "combos": []
    },
{
        "id": 100,
        "title": "Battery 1",
        "category": "battery",
        "brand": "universal",
        "description": "Battery for mobile devices",
        "image": "https://via.placeholder.com/300x200/96A78D/FFFFFF?text=Battery",
        "images": ["https://via.placeholder.com/500x400/96A78D/FFFFFF?text=Battery+1", "https://via.placeholder.com/500x400/B6CEB4/FFFFFF?text=Battery+2"],
        "compatibility": [],
        "specifications": { "Capacity": "Unknown", "Voltage": "Unknown", "Type": "Unknown", "Cycle Life": "Unknown", "Protection": "Standard" },
        "combos": []
    },
{
        "id": 101,
        "title": "Battery 2",
        "category": "battery",
        "brand": "universal",
        "description": "Battery for mobile devices",
        "image": "https://via.placeholder.com/300x200/96A78D/FFFFFF?text=Battery",
        "images": ["https://via.placeholder.com/500x400/96A78D/FFFFFF?text=Battery+1", "https://via.placeholder.com/500x400/B6CEB4/FFFFFF?text=Battery+2"],
        "compatibility": [],
        "specifications": { "Capacity": "Unknown", "Voltage": "Unknown", "Type": "Unknown", "Cycle Life": "Unknown", "Protection": "Standard" },
        "combos": []
    },
{
        "id": 102,
        "title": "Battery 3",
        "category": "battery",
        "brand": "universal",
        "description": "Battery for mobile devices",
        "image": "https://via.placeholder.com/300x200/96A78D/FFFFFF?text=Battery",
        "images": ["https://via.placeholder.com/500x400/96A78D/FFFFFF?text=Battery+1", "https://via.placeholder.com/500x400/B6CEB4/FFFFFF?text=Battery+2"],
        "compatibility": [],
        "specifications": { "Capacity": "Unknown", "Voltage": "Unknown", "Type": "Unknown", "Cycle Life": "Unknown", "Protection": "Standard" },
        "combos": []
    },
{
        "id": 103,
        "title": "Battery 4",
        "category": "battery",
        "brand": "universal",
        "description": "Battery for mobile devices",
        "image": "https://via.placeholder.com/300x200/96A78D/FFFFFF?text=Battery",
        "images": ["https://via.placeholder.com/500x400/96A78D/FFFFFF?text=Battery+1", "https://via.placeholder.com/500x400/B6CEB4/FFFFFF?text=Battery+2"],
        "compatibility": [],
        "specifications": { "Capacity": "Unknown", "Voltage": "Unknown", "Type": "Unknown", "Cycle Life": "Unknown", "Protection": "Standard" },
        "combos": []
    },
{
        "id": 104,
        "title": "Battery 5",
        "category": "battery",
        "brand": "universal",
        "description": "Battery for mobile devices",
        "image": "https://via.placeholder.com/300x200/96A78D/FFFFFF?text=Battery",
        "images": ["https://via.placeholder.com/500x400/96A78D/FFFFFF?text=Battery+1", "https://via.placeholder.com/500x400/B6CEB4/FFFFFF?text=Battery+2"],
        "compatibility": [],
        "specifications": { "Capacity": "Unknown", "Voltage": "Unknown", "Type": "Unknown", "Cycle Life": "Unknown", "Protection": "Standard" },
        "combos": []
    },
{
        "id": 105,
        "title": "Battery 6",
        "category": "battery",
        "brand": "universal",
        "description": "Battery for mobile devices",
        "image": "https://via.placeholder.com/300x200/96A78D/FFFFFF?text=Battery",
        "images": ["https://via.placeholder.com/500x400/96A78D/FFFFFF?text=Battery+1", "https://via.placeholder.com/500x400/B6CEB4/FFFFFF?text=Battery+2"],
        "compatibility": [],
        "specifications": { "Capacity": "Unknown", "Voltage": "Unknown", "Type": "Unknown", "Cycle Life": "Unknown", "Protection": "Standard" },
        "combos": []
    },
{
        "id": 106,
        "title": "Battery 7",
        "category": "battery",
        "brand": "universal",
        "description": "Battery for mobile devices",
        "image": "https://via.placeholder.com/300x200/96A78D/FFFFFF?text=Battery",
        "images": ["https://via.placeholder.com/500x400/96A78D/FFFFFF?text=Battery+1", "https://via.placeholder.com/500x400/B6CEB4/FFFFFF?text=Battery+2"],
        "compatibility": [],
        "specifications": { "Capacity": "Unknown", "Voltage": "Unknown", "Type": "Unknown", "Cycle Life": "Unknown", "Protection": "Standard" },
        "combos": []
    },
{
        "id": 107,
        "title": "Battery 8",
        "category": "battery",
        "brand": "universal",
        "description": "Battery for mobile devices",
        "image": "https://via.placeholder.com/300x200/96A78D/FFFFFF?text=Battery",
        "images": ["https://via.placeholder.com/500x400/96A78D/FFFFFF?text=Battery+1", "https://via.placeholder.com/500x400/B6CEB4/FFFFFF?text=Battery+2"],
        "compatibility": [],
        "specifications": { "Capacity": "Unknown", "Voltage": "Unknown", "Type": "Unknown", "Cycle Life": "Unknown", "Protection": "Standard" },
        "combos": []
    },
{
        "id": 108,
        "title": "Battery 9",
        "category": "battery",
        "brand": "universal",
        "description": "Battery for mobile devices",
        "image": "https://via.placeholder.com/300x200/96A78D/FFFFFF?text=Battery",
        "images": ["https://via.placeholder.com/500x400/96A78D/FFFFFF?text=Battery+1", "https://via.placeholder.com/500x400/B6CEB4/FFFFFF?text=Battery+2"],
        "compatibility": [],
        "specifications": { "Capacity": "Unknown", "Voltage": "Unknown", "Type": "Unknown", "Cycle Life": "Unknown", "Protection": "Standard" },
        "combos": []
    },
{
        "id": 109,
        "title": "Battery 10",
        "category": "battery",
        "brand": "universal",
        "description": "Battery for mobile devices",
        "image": "https://via.placeholder.com/300x200/96A78D/FFFFFF?text=Battery",
        "images": ["https://via.placeholder.com/500x400/96A78D/FFFFFF?text=Battery+1", "https://via.placeholder.com/500x400/B6CEB4/FFFFFF?text=Battery+2"],
        "compatibility": [],
        "specifications": { "Capacity": "Unknown", "Voltage": "Unknown", "Type": "Unknown", "Cycle Life": "Unknown", "Protection": "Standard" },
        "combos": []
    },
{
        "id": 110,
        "title": "Battery 11",
        "category": "battery",
        "brand": "universal",
        "description": "Battery for mobile devices",
        "image": "https://via.placeholder.com/300x200/96A78D/FFFFFF?text=Battery",
        "images": ["https://via.placeholder.com/500x400/96A78D/FFFFFF?text=Battery+1", "https://via.placeholder.com/500x400/B6CEB4/FFFFFF?text=Battery+2"],
        "compatibility": [],
        "specifications": { "Capacity": "Unknown", "Voltage": "Unknown", "Type": "Unknown", "Cycle Life": "Unknown", "Protection": "Standard" },
        "combos": []
    },
{
        "id": 111,
        "title": "Battery 12",
        "category": "battery",
        "brand": "universal",
        "description": "Battery for mobile devices",
        "image": "https://via.placeholder.com/300x200/96A78D/FFFFFF?text=Battery",
        "images": ["https://via.placeholder.com/500x400/96A78D/FFFFFF?text=Battery+1", "https://via.placeholder.com/500x400/B6CEB4/FFFFFF?text=Battery+2"],
        "compatibility": [],
        "specifications": { "Capacity": "Unknown", "Voltage": "Unknown", "Type": "Unknown", "Cycle Life": "Unknown", "Protection": "Standard" },
        "combos": []
    },
{
        "id": 112,
        "title": "Battery 13",
        "category": "battery",
        "brand": "universal",
        "description": "Battery for mobile devices",
        "image": "https://via.placeholder.com/300x200/96A78D/FFFFFF?text=Battery",
        "images": ["https://via.placeholder.com/500x400/96A78D/FFFFFF?text=Battery+1", "https://via.placeholder.com/500x400/B6CEB4/FFFFFF?text=Battery+2"],
        "compatibility": [],
        "specifications": { "Capacity": "Unknown", "Voltage": "Unknown", "Type": "Unknown", "Cycle Life": "Unknown", "Protection": "Standard" },
        "combos": []
    },
{
        "id": 113,
        "title": "Battery 14",
        "category": "battery",
        "brand": "universal",
        "description": "Battery for mobile devices",
        "image": "https://via.placeholder.com/300x200/96A78D/FFFFFF?text=Battery",
        "images": ["https://via.placeholder.com/500x400/96A78D/FFFFFF?text=Battery+1", "https://via.placeholder.com/500x400/B6CEB4/FFFFFF?text=Battery+2"],
        "compatibility": [],
        "specifications": { "Capacity": "Unknown", "Voltage": "Unknown", "Type": "Unknown", "Cycle Life": "Unknown", "Protection": "Standard" },
        "combos": []
    },
{
        "id": 114,
        "title": "Battery 15",
        "category": "battery",
        "brand": "universal",
        "description": "Battery for mobile devices",
        "image": "https://via.placeholder.com/300x200/96A78D/FFFFFF?text=Battery",
        "images": ["https://via.placeholder.com/500x400/96A78D/FFFFFF?text=Battery+1", "https://via.placeholder.com/500x400/B6CEB4/FFFFFF?text=Battery+2"],
        "compatibility": [],
        "specifications": { "Capacity": "Unknown", "Voltage": "Unknown", "Type": "Unknown", "Cycle Life": "Unknown", "Protection": "Standard" },
        "combos": []
    },
{
        "id": 115,
        "title": "Battery 16",
        "category": "battery",
        "brand": "universal",
        "description": "Battery for mobile devices",
        "image": "https://via.placeholder.com/300x200/96A78D/FFFFFF?text=Battery",
        "images": ["https://via.placeholder.com/500x400/96A78D/FFFFFF?text=Battery+1", "https://via.placeholder.com/500x400/B6CEB4/FFFFFF?text=Battery+2"],
        "compatibility": [],
        "specifications": { "Capacity": "Unknown", "Voltage": "Unknown", "Type": "Unknown", "Cycle Life": "Unknown", "Protection": "Standard" },
        "combos": []
    },
{
        "id": 116,
        "title": "Battery 17",
        "category": "battery",
        "brand": "universal",
        "description": "Battery for mobile devices",
        "image": "https://via.placeholder.com/300x200/96A78D/FFFFFF?text=Battery",
        "images": ["https://via.placeholder.com/500x400/96A78D/FFFFFF?text=Battery+1", "https://via.placeholder.com/500x400/B6CEB4/FFFFFF?text=Battery+2"],
        "compatibility": [],
        "specifications": { "Capacity": "Unknown", "Voltage": "Unknown", "Type": "Unknown", "Cycle Life": "Unknown", "Protection": "Standard" },
        "combos": []
    },
{
        "id": 117,
        "title": "Battery 18",
        "category": "battery",
        "brand": "universal",
        "description": "Battery for mobile devices",
        "image": "https://via.placeholder.com/300x200/96A78D/FFFFFF?text=Battery",
        "images": ["https://via.placeholder.com/500x400/96A78D/FFFFFF?text=Battery+1", "https://via.placeholder.com/500x400/B6CEB4/FFFFFF?text=Battery+2"],
        "compatibility": [],
        "specifications": { "Capacity": "Unknown", "Voltage": "Unknown", "Type": "Unknown", "Cycle Life": "Unknown", "Protection": "Standard" },
        "combos": []
    },
{
        "id": 118,
        "title": "Battery 19",
        "category": "battery",
        "brand": "universal",
        "description": "Battery for mobile devices",
        "image": "https://via.placeholder.com/300x200/96A78D/FFFFFF?text=Battery",
        "images": ["https://via.placeholder.com/500x400/96A78D/FFFFFF?text=Battery+1", "https://via.placeholder.com/500x400/B6CEB4/FFFFFF?text=Battery+2"],
        "compatibility": [],
        "specifications": { "Capacity": "Unknown", "Voltage": "Unknown", "Type": "Unknown", "Cycle Life": "Unknown", "Protection": "Standard" },
        "combos": []
    },
{
        "id": 119,
        "title": "Battery 20",
        "category": "battery",
        "brand": "universal",
        "description": "Battery for mobile devices",
        "image": "https://via.placeholder.com/300x200/96A78D/FFFFFF?text=Battery",
        "images": ["https://via.placeholder.com/500x400/96A78D/FFFFFF?text=Battery+1", "https://via.placeholder.com/500x400/B6CEB4/FFFFFF?text=Battery+2"],
        "compatibility": [],
        "specifications": { "Capacity": "Unknown", "Voltage": "Unknown", "Type": "Unknown", "Cycle Life": "Unknown", "Protection": "Standard" },
        "combos": []
    },
{
        "id": 120,
        "title": "Battery 21",
        "category": "battery",
        "brand": "universal",
        "description": "Battery for mobile devices",
        "image": "https://via.placeholder.com/300x200/96A78D/FFFFFF?text=Battery",
        "images": ["https://via.placeholder.com/500x400/96A78D/FFFFFF?text=Battery+1", "https://via.placeholder.com/500x400/B6CEB4/FFFFFF?text=Battery+2"],
        "compatibility": [],
        "specifications": { "Capacity": "Unknown", "Voltage": "Unknown", "Type": "Unknown", "Cycle Life": "Unknown", "Protection": "Standard" },
        "combos": []
    },
{
        "id": 121,
        "title": "Battery 22",
        "category": "battery",
        "brand": "universal",
        "description": "Battery for mobile devices",
        "image": "https://via.placeholder.com/300x200/96A78D/FFFFFF?text=Battery",
        "images": ["https://via.placeholder.com/500x400/96A78D/FFFFFF?text=Battery+1", "https://via.placeholder.com/500x400/B6CEB4/FFFFFF?text=Battery+2"],
        "compatibility": [],
        "specifications": { "Capacity": "Unknown", "Voltage": "Unknown", "Type": "Unknown", "Cycle Life": "Unknown", "Protection": "Standard" },
        "combos": []
    },
{
        "id": 122,
        "title": "Battery 23",
        "category": "battery",
        "brand": "universal",
        "description": "Battery for mobile devices",
        "image": "https://via.placeholder.com/300x200/96A78D/FFFFFF?text=Battery",
        "images": ["https://via.placeholder.com/500x400/96A78D/FFFFFF?text=Battery+1", "https://via.placeholder.com/500x400/B6CEB4/FFFFFF?text=Battery+2"],
        "compatibility": [],
        "specifications": { "Capacity": "Unknown", "Voltage": "Unknown", "Type": "Unknown", "Cycle Life": "Unknown", "Protection": "Standard" },
        "combos": []
    },
{
        "id": 123,
        "title": "Battery 24",
        "category": "battery",
        "brand": "universal",
        "description": "Battery for mobile devices",
        "image": "https://via.placeholder.com/300x200/96A78D/FFFFFF?text=Battery",
        "images": ["https://via.placeholder.com/500x400/96A78D/FFFFFF?text=Battery+1", "https://via.placeholder.com/500x400/B6CEB4/FFFFFF?text=Battery+2"],
        "compatibility": [],
        "specifications": { "Capacity": "Unknown", "Voltage": "Unknown", "Type": "Unknown", "Cycle Life": "Unknown", "Protection": "Standard" },
        "combos": []
    },
{
        "id": 124,
        "title": "Battery 25",
        "category": "battery",
        "brand": "universal",
        "description": "Battery for mobile devices",
        "image": "https://via.placeholder.com/300x200/96A78D/FFFFFF?text=Battery",
        "images": ["https://via.placeholder.com/500x400/96A78D/FFFFFF?text=Battery+1", "https://via.placeholder.com/500x400/B6CEB4/FFFFFF?text=Battery+2"],
        "compatibility": [],
        "specifications": { "Capacity": "Unknown", "Voltage": "Unknown", "Type": "Unknown", "Cycle Life": "Unknown", "Protection": "Standard" },
        "combos": []
    },
{
        "id": 125,
        "title": "Battery 26",
        "category": "battery",
        "brand": "universal",
        "description": "Battery for mobile devices",
        "image": "https://via.placeholder.com/300x200/96A78D/FFFFFF?text=Battery",
        "images": ["https://via.placeholder.com/500x400/96A78D/FFFFFF?text=Battery+1", "https://via.placeholder.com/500x400/B6CEB4/FFFFFF?text=Battery+2"],
        "compatibility": [],
        "specifications": { "Capacity": "Unknown", "Voltage": "Unknown", "Type": "Unknown", "Cycle Life": "Unknown", "Protection": "Standard" },
        "combos": []
    },
{
        "id": 126,
        "title": "Battery 27",
        "category": "battery",
        "brand": "universal",
        "description": "Battery for mobile devices",
        "image": "https://via.placeholder.com/300x200/96A78D/FFFFFF?text=Battery",
        "images": ["https://via.placeholder.com/500x400/96A78D/FFFFFF?text=Battery+1", "https://via.placeholder.com/500x400/B6CEB4/FFFFFF?text=Battery+2"],
        "compatibility": [],
        "specifications": { "Capacity": "Unknown", "Voltage": "Unknown", "Type": "Unknown", "Cycle Life": "Unknown", "Protection": "Standard" },
        "combos": []
    },
{
        "id": 127,
        "title": "Battery 28",
        "category": "battery",
        "brand": "universal",
        "description": "Battery for mobile devices",
        "image": "https://via.placeholder.com/300x200/96A78D/FFFFFF?text=Battery",
        "images": ["https://via.placeholder.com/500x400/96A78D/FFFFFF?text=Battery+1", "https://via.placeholder.com/500x400/B6CEB4/FFFFFF?text=Battery+2"],
        "compatibility": [],
        "specifications": { "Capacity": "Unknown", "Voltage": "Unknown", "Type": "Unknown", "Cycle Life": "Unknown", "Protection": "Standard" },
        "combos": []
    },
{
        "id": 128,
        "title": "Battery 29",
        "category": "battery",
        "brand": "universal",
        "description": "Battery for mobile devices",
        "image": "https://via.placeholder.com/300x200/96A78D/FFFFFF?text=Battery",
        "images": ["https://via.placeholder.com/500x400/96A78D/FFFFFF?text=Battery+1", "https://via.placeholder.com/500x400/B6CEB4/FFFFFF?text=Battery+2"],
        "compatibility": [],
        "specifications": { "Capacity": "Unknown", "Voltage": "Unknown", "Type": "Unknown", "Cycle Life": "Unknown", "Protection": "Standard" },
        "combos": []
    },
{
        "id": 129,
        "title": "Battery 30",
        "category": "battery",
        "brand": "universal",
        "description": "Battery for mobile devices",
        "image": "https://via.placeholder.com/300x200/96A78D/FFFFFF?text=Battery",
        "images": ["https://via.placeholder.com/500x400/96A78D/FFFFFF?text=Battery+1", "https://via.placeholder.com/500x400/B6CEB4/FFFFFF?text=Battery+2"],
        "compatibility": [],
        "specifications": { "Capacity": "Unknown", "Voltage": "Unknown", "Type": "Unknown", "Cycle Life": "Unknown", "Protection": "Standard" },
        "combos": []
    },
{
        "id": 130,
        "title": "Battery 31",
        "category": "battery",
        "brand": "universal",
        "description": "Battery for mobile devices",
        "image": "https://via.placeholder.com/300x200/96A78D/FFFFFF?text=Battery",
        "images": ["https://via.placeholder.com/500x400/96A78D/FFFFFF?text=Battery+1", "https://via.placeholder.com/500x400/B6CEB4/FFFFFF?text=Battery+2"],
        "compatibility": [],
        "specifications": { "Capacity": "Unknown", "Voltage": "Unknown", "Type": "Unknown", "Cycle Life": "Unknown", "Protection": "Standard" },
        "combos": []
    },
{
        "id": 131,
        "title": "Battery 32",
        "category": "battery",
        "brand": "universal",
        "description": "Battery for mobile devices",
        "image": "https://via.placeholder.com/300x200/96A78D/FFFFFF?text=Battery",
        "images": ["https://via.placeholder.com/500x400/96A78D/FFFFFF?text=Battery+1", "https://via.placeholder.com/500x400/B6CEB4/FFFFFF?text=Battery+2"],
        "compatibility": [],
        "specifications": { "Capacity": "Unknown", "Voltage": "Unknown", "Type": "Unknown", "Cycle Life": "Unknown", "Protection": "Standard" },
        "combos": []
    },
{
        "id": 132,
        "title": "Battery 33",
        "category": "battery",
        "brand": "universal",
        "description": "Battery for mobile devices",
        "image": "https://via.placeholder.com/300x200/96A78D/FFFFFF?text=Battery",
        "images": ["https://via.placeholder.com/500x400/96A78D/FFFFFF?text=Battery+1", "https://via.placeholder.com/500x400/B6CEB4/FFFFFF?text=Battery+2"],
        "compatibility": [],
        "specifications": { "Capacity": "Unknown", "Voltage": "Unknown", "Type": "Unknown", "Cycle Life": "Unknown", "Protection": "Standard" },
        "combos": []
    },
{
        "id": 133,
        "title": "Battery 34",
        "category": "battery",
        "brand": "universal",
        "description": "Battery for mobile devices",
        "image": "https://via.placeholder.com/300x200/96A78D/FFFFFF?text=Battery",
        "images": ["https://via.placeholder.com/500x400/96A78D/FFFFFF?text=Battery+1", "https://via.placeholder.com/500x400/B6CEB4/FFFFFF?text=Battery+2"],
        "compatibility": [],
        "specifications": { "Capacity": "Unknown", "Voltage": "Unknown", "Type": "Unknown", "Cycle Life": "Unknown", "Protection": "Standard" },
        "combos": []
    },
{
        "id": 134,
        "title": "Battery 35",
        "category": "battery",
        "brand": "universal",
        "description": "Battery for mobile devices",
        "image": "https://via.placeholder.com/300x200/96A78D/FFFFFF?text=Battery",
        "images": ["https://via.placeholder.com/500x400/96A78D/FFFFFF?text=Battery+1", "https://via.placeholder.com/500x400/B6CEB4/FFFFFF?text=Battery+2"],
        "compatibility": [],
        "specifications": { "Capacity": "Unknown", "Voltage": "Unknown", "Type": "Unknown", "Cycle Life": "Unknown", "Protection": "Standard" },
        "combos": []
    },
{
        "id": 135,
        "title": "Battery 36",
        "category": "battery",
        "brand": "universal",
        "description": "Battery for mobile devices",
        "image": "https://via.placeholder.com/300x200/96A78D/FFFFFF?text=Battery",
        "images": ["https://via.placeholder.com/500x400/96A78D/FFFFFF?text=Battery+1", "https://via.placeholder.com/500x400/B6CEB4/FFFFFF?text=Battery+2"],
        "compatibility": [],
        "specifications": { "Capacity": "Unknown", "Voltage": "Unknown", "Type": "Unknown", "Cycle Life": "Unknown", "Protection": "Standard" },
        "combos": []
    },
{
        "id": 136,
        "title": "Battery 37",
        "category": "battery",
        "brand": "universal",
        "description": "Battery for mobile devices",
        "image": "https://via.placeholder.com/300x200/96A78D/FFFFFF?text=Battery",
        "images": ["https://via.placeholder.com/500x400/96A78D/FFFFFF?text=Battery+1", "https://via.placeholder.com/500x400/B6CEB4/FFFFFF?text=Battery+2"],
        "compatibility": [],
        "specifications": { "Capacity": "Unknown", "Voltage": "Unknown", "Type": "Unknown", "Cycle Life": "Unknown", "Protection": "Standard" },
        "combos": []
    },
{
        "id": 137,
        "title": "Battery 38",
        "category": "battery",
        "brand": "universal",
        "description": "Battery for mobile devices",
        "image": "https://via.placeholder.com/300x200/96A78D/FFFFFF?text=Battery",
        "images": ["https://via.placeholder.com/500x400/96A78D/FFFFFF?text=Battery+1", "https://via.placeholder.com/500x400/B6CEB4/FFFFFF?text=Battery+2"],
        "compatibility": [],
        "specifications": { "Capacity": "Unknown", "Voltage": "Unknown", "Type": "Unknown", "Cycle Life": "Unknown", "Protection": "Standard" },
        "combos": []
    },
{
        "id": 138,
        "title": "Battery 39",
        "category": "battery",
        "brand": "universal",
        "description": "Battery for mobile devices",
        "image": "https://via.placeholder.com/300x200/96A78D/FFFFFF?text=Battery",
        "images": ["https://via.placeholder.com/500x400/96A78D/FFFFFF?text=Battery+1", "https://via.placeholder.com/500x400/B6CEB4/FFFFFF?text=Battery+2"],
        "compatibility": [],
        "specifications": { "Capacity": "Unknown", "Voltage": "Unknown", "Type": "Unknown", "Cycle Life": "Unknown", "Protection": "Standard" },
        "combos": []
    },
{
        "id": 139,
        "title": "Battery 40",
        "category": "battery",
        "brand": "universal",
        "description": "Battery for mobile devices",
        "image": "https://via.placeholder.com/300x200/96A78D/FFFFFF?text=Battery",
        "images": ["https://via.placeholder.com/500x400/96A78D/FFFFFF?text=Battery+1", "https://via.placeholder.com/500x400/B6CEB4/FFFFFF?text=Battery+2"],
        "compatibility": [],
        "specifications": { "Capacity": "Unknown", "Voltage": "Unknown", "Type": "Unknown", "Cycle Life": "Unknown", "Protection": "Standard" },
        "combos": []
    },
{
        "id": 140,
        "title": "Battery 41",
        "category": "battery",
        "brand": "universal",
        "description": "Battery for mobile devices",
        "image": "https://via.placeholder.com/300x200/96A78D/FFFFFF?text=Battery",
        "images": ["https://via.placeholder.com/500x400/96A78D/FFFFFF?text=Battery+1", "https://via.placeholder.com/500x400/B6CEB4/FFFFFF?text=Battery+2"],
        "compatibility": [],
        "specifications": { "Capacity": "Unknown", "Voltage": "Unknown", "Type": "Unknown", "Cycle Life": "Unknown", "Protection": "Standard" },
        "combos": []
    },
{
        "id": 141,
        "title": "Battery 42",
        "category": "battery",
        "brand": "universal",
        "description": "Battery for mobile devices",
        "image": "https://via.placeholder.com/300x200/96A78D/FFFFFF?text=Battery",
        "images": ["https://via.placeholder.com/500x400/96A78D/FFFFFF?text=Battery+1", "https://via.placeholder.com/500x400/B6CEB4/FFFFFF?text=Battery+2"],
        "compatibility": [],
        "specifications": { "Capacity": "Unknown", "Voltage": "Unknown", "Type": "Unknown", "Cycle Life": "Unknown", "Protection": "Standard" },
        "combos": []
    },
{
        "id": 142,
        "title": "Battery 43",
        "category": "battery",
        "brand": "universal",
        "description": "Battery for mobile devices",
        "image": "https://via.placeholder.com/300x200/96A78D/FFFFFF?text=Battery",
        "images": ["https://via.placeholder.com/500x400/96A78D/FFFFFF?text=Battery+1", "https://via.placeholder.com/500x400/B6CEB4/FFFFFF?text=Battery+2"],
        "compatibility": [],
        "specifications": { "Capacity": "Unknown", "Voltage": "Unknown", "Type": "Unknown", "Cycle Life": "Unknown", "Protection": "Standard" },
        "combos": []
    },
{
        "id": 143,
        "title": "Battery 44",
        "category": "battery",
        "brand": "universal",
        "description": "Battery for mobile devices",
        "image": "https://via.placeholder.com/300x200/96A78D/FFFFFF?text=Battery",
        "images": ["https://via.placeholder.com/500x400/96A78D/FFFFFF?text=Battery+1", "https://via.placeholder.com/500x400/B6CEB4/FFFFFF?text=Battery+2"],
        "compatibility": [],
        "specifications": { "Capacity": "Unknown", "Voltage": "Unknown", "Type": "Unknown", "Cycle Life": "Unknown", "Protection": "Standard" },
        "combos": []
    },
{
        "id": 144,
        "title": "Battery 45",
        "category": "battery",
        "brand": "universal",
        "description": "Battery for mobile devices",
        "image": "https://via.placeholder.com/300x200/96A78D/FFFFFF?text=Battery",
        "images": ["https://via.placeholder.com/500x400/96A78D/FFFFFF?text=Battery+1", "https://via.placeholder.com/500x400/B6CEB4/FFFFFF?text=Battery+2"],
        "compatibility": [],
        "specifications": { "Capacity": "Unknown", "Voltage": "Unknown", "Type": "Unknown", "Cycle Life": "Unknown", "Protection": "Standard" },
        "combos": []
    },
{
        "id": 145,
        "title": "Battery 46",
        "category": "battery",
        "brand": "universal",
        "description": "Battery for mobile devices",
        "image": "https://via.placeholder.com/300x200/96A78D/FFFFFF?text=Battery",
        "images": ["https://via.placeholder.com/500x400/96A78D/FFFFFF?text=Battery+1", "https://via.placeholder.com/500x400/B6CEB4/FFFFFF?text=Battery+2"],
        "compatibility": [],
        "specifications": { "Capacity": "Unknown", "Voltage": "Unknown", "Type": "Unknown", "Cycle Life": "Unknown", "Protection": "Standard" },
        "combos": []
    },
{
        "id": 146,
        "title": "Battery 47",
        "category": "battery",
        "brand": "universal",
        "description": "Battery for mobile devices",
        "image": "https://via.placeholder.com/300x200/96A78D/FFFFFF?text=Battery",
        "images": ["https://via.placeholder.com/500x400/96A78D/FFFFFF?text=Battery+1", "https://via.placeholder.com/500x400/B6CEB4/FFFFFF?text=Battery+2"],
        "compatibility": [],
        "specifications": { "Capacity": "Unknown", "Voltage": "Unknown", "Type": "Unknown", "Cycle Life": "Unknown", "Protection": "Standard" },
        "combos": []
    },
{
        "id": 147,
        "title": "Battery 48",
        "category": "battery",
        "brand": "universal",
        "description": "Battery for mobile devices",
        "image": "https://via.placeholder.com/300x200/96A78D/FFFFFF?text=Battery",
        "images": ["https://via.placeholder.com/500x400/96A78D/FFFFFF?text=Battery+1", "https://via.placeholder.com/500x400/B6CEB4/FFFFFF?text=Battery+2"],
        "compatibility": [],
        "specifications": { "Capacity": "Unknown", "Voltage": "Unknown", "Type": "Unknown", "Cycle Life": "Unknown", "Protection": "Standard" },
        "combos": []
    },
{
        "id": 148,
        "title": "Battery 49",
        "category": "battery",
        "brand": "universal",
        "description": "Battery for mobile devices",
        "image": "https://via.placeholder.com/300x200/96A78D/FFFFFF?text=Battery",
        "images": ["https://via.placeholder.com/500x400/96A78D/FFFFFF?text=Battery+1", "https://via.placeholder.com/500x400/B6CEB4/FFFFFF?text=Battery+2"],
        "compatibility": [],
        "specifications": { "Capacity": "Unknown", "Voltage": "Unknown", "Type": "Unknown", "Cycle Life": "Unknown", "Protection": "Standard" },
        "combos": []
    },
{
        "id": 149,
        "title": "Battery 50",
        "category": "battery",
        "brand": "universal",
        "description": "Battery for mobile devices",
        "image": "https://via.placeholder.com/300x200/96A78D/FFFFFF?text=Battery",
        "images": ["https://via.placeholder.com/500x400/96A78D/FFFFFF?text=Battery+1", "https://via.placeholder.com/500x400/B6CEB4/FFFFFF?text=Battery+2"],
        "compatibility": [],
        "specifications": { "Capacity": "Unknown", "Voltage": "Unknown", "Type": "Unknown", "Cycle Life": "Unknown", "Protection": "Standard" },
        "combos": []
    },
{
        "id": 150,
        "title": "Battery 51",
        "category": "battery",
        "brand": "universal",
        "description": "Battery for mobile devices",
        "image": "https://via.placeholder.com/300x200/96A78D/FFFFFF?text=Battery",
        "images": ["https://via.placeholder.com/500x400/96A78D/FFFFFF?text=Battery+1", "https://via.placeholder.com/500x400/B6CEB4/FFFFFF?text=Battery+2"],
        "compatibility": [],
        "specifications": { "Capacity": "Unknown", "Voltage": "Unknown", "Type": "Unknown", "Cycle Life": "Unknown", "Protection": "Standard" },
        "combos": []
    },
{
        "id": 151,
        "title": "Battery 52",
        "category": "battery",
        "brand": "universal",
        "description": "Battery for mobile devices",
        "image": "https://via.placeholder.com/300x200/96A78D/FFFFFF?text=Battery",
        "images": ["https://via.placeholder.com/500x400/96A78D/FFFFFF?text=Battery+1", "https://via.placeholder.com/500x400/B6CEB4/FFFFFF?text=Battery+2"],
        "compatibility": [],
        "specifications": { "Capacity": "Unknown", "Voltage": "Unknown", "Type": "Unknown", "Cycle Life": "Unknown", "Protection": "Standard" },
        "combos": []
    },
{
        "id": 152,
        "title": "Battery 53",
        "category": "battery",
        "brand": "universal",
        "description": "Battery for mobile devices",
        "image": "https://via.placeholder.com/300x200/96A78D/FFFFFF?text=Battery",
        "images": ["https://via.placeholder.com/500x400/96A78D/FFFFFF?text=Battery+1", "https://via.placeholder.com/500x400/B6CEB4/FFFFFF?text=Battery+2"],
        "compatibility": [],
        "specifications": { "Capacity": "Unknown", "Voltage": "Unknown", "Type": "Unknown", "Cycle Life": "Unknown", "Protection": "Standard" },
        "combos": []
    },
{
        "id": 153,
        "title": "Battery 54",
        "category": "battery",
        "brand": "universal",
        "description": "Battery for mobile devices",
        "image": "https://via.placeholder.com/300x200/96A78D/FFFFFF?text=Battery",
        "images": ["https://via.placeholder.com/500x400/96A78D/FFFFFF?text=Battery+1", "https://via.placeholder.com/500x400/B6CEB4/FFFFFF?text=Battery+2"],
        "compatibility": [],
        "specifications": { "Capacity": "Unknown", "Voltage": "Unknown", "Type": "Unknown", "Cycle Life": "Unknown", "Protection": "Standard" },
        "combos": []
    },
{
        "id": 154,
        "title": "Battery 55",
        "category": "battery",
        "brand": "universal",
        "description": "Battery for mobile devices",
        "image": "https://via.placeholder.com/300x200/96A78D/FFFFFF?text=Battery",
        "images": ["https://via.placeholder.com/500x400/96A78D/FFFFFF?text=Battery+1", "https://via.placeholder.com/500x400/B6CEB4/FFFFFF?text=Battery+2"],
        "compatibility": [],
        "specifications": { "Capacity": "Unknown", "Voltage": "Unknown", "Type": "Unknown", "Cycle Life": "Unknown", "Protection": "Standard" },
        "combos": []
    },
{
        "id": 155,
        "title": "Battery 56",
        "category": "battery",
        "brand": "universal",
        "description": "Battery for mobile devices",
        "image": "https://via.placeholder.com/300x200/96A78D/FFFFFF?text=Battery",
        "images": ["https://via.placeholder.com/500x400/96A78D/FFFFFF?text=Battery+1", "https://via.placeholder.com/500x400/B6CEB4/FFFFFF?text=Battery+2"],
        "compatibility": [],
        "specifications": { "Capacity": "Unknown", "Voltage": "Unknown", "Type": "Unknown", "Cycle Life": "Unknown", "Protection": "Standard" },
        "combos": []
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
            </div>
        `;
        resultsCount.textContent = "No results found";
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
        glass: 'Screen Guard'
    };
    return categories[category] || category;
}

// Pagination
function updatePagination() {
    const totalPages = Math.ceil(filteredData.length / itemsPerPage);
    
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
    const totalPages = Math.ceil(filteredData.length / itemsPerPage);
    if (page >= 1 && page <= totalPages) {
        currentPage = page;
        renderResults();
        window.scrollTo({ top: 0, behavior: 'smooth' });
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
    
    // Set compatibility list
    document.getElementById('modalCompatibility').innerHTML = part.compatibility.map(model => 
        `<span class="compatibility-tag">${model}</span>`
    ).join('');
    
    // Set specifications
    const specsList = document.getElementById('modalSpecifications');
    specsList.innerHTML = '';
    for (const [key, value] of Object.entries(part.specifications)) {
        const li = document.createElement('li');
        li.innerHTML = `<strong>${key}:</strong> ${value}`;
        specsList.appendChild(li);
    }
    
    // Set combos
    const combosContainer = document.getElementById('modalCombos');
    if (part.combos && part.combos.length > 0) {
        combosContainer.innerHTML = part.combos.map(combo => `
            <div class="combo-item">
                <div class="combo-name">${combo.name}</div>
                <div class="combo-models">For: ${combo.models.join(', ')}</div>
                <div class="combo-discount">${combo.discount}</div>
            </div>
        `).join('');
    } else {
        combosContainer.innerHTML = '<p>No combo offers available for this part.</p>';
    }
    
    partModal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
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