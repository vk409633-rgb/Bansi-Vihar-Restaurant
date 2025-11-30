// ===================================
// NAVIGATION
// ===================================
const navbar = document.getElementById('navbar');
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

// Navbar scroll effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile menu toggle
navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// Active link on scroll
const sections = document.querySelectorAll('section[id]');

function highlightNavLink() {
    const scrollY = window.pageYOffset;
    
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

window.addEventListener('scroll', highlightNavLink);

// ===================================
// FEATURED DISHES DATA & SLIDER
// ===================================
const featuredDishes = [
    {
        name: 'Masala Dosa',
        description: 'Crispy rice crepe filled with spiced potato filling, served with sambhar and chutneys',
        price: '₹120',
        badge: 'Best Seller',
        image: 'images/masala-dosa.jpg'
    },
    {
        name: 'Deluxe Thali',
        description: 'Complete South Indian meal with variety of curries, rice, sambar, rasam, and dessert',
        price: '₹340',
        badge: 'Premium',
        image: 'images/deluxe-thali.jpg'
    },
    {
        name: 'Idli Vada Combo',
        description: 'Soft steamed rice cakes with crispy lentil fritters, served with sambhar and chutneys',
        price: '₹100',
        badge: 'Popular',
        image: 'images/idli-vada.jpg'
    },
    {
        name: 'Onion Uttapam',
        description: 'Thick rice pancake topped with onions and spices, served with sambhar and chutneys',
        price: '₹110',
        badge: 'Chef Special',
        image: 'images/uttapam.jpg'
    }
];

const dishesSlider = document.getElementById('dishesSlider');

function renderFeaturedDishes() {
    dishesSlider.innerHTML = featuredDishes.map(dish => `
        <div class="dish-card">
            <div class="dish-image">
                <img src="${dish.image}" alt="${dish.name}" loading="lazy">
                <span class="dish-badge">${dish.badge}</span>
            </div>
            <div class="dish-content">
                <h3>${dish.name}</h3>
                <p>${dish.description}</p>
                <div class="dish-footer">
                    <span class="dish-price">${dish.price}</span>
                    <a href="#order" class="btn-primary">Order Now</a>
                </div>
            </div>
        </div>
    `).join('');
}

renderFeaturedDishes();

// ===================================
// MENU DATA & FILTERING
// ===================================
const menuItems = [
    // Dosas
    {
        name: 'Plain Dosa',
        description: 'Crispy rice crepe served with sambhar and chutneys',
        price: '₹80',
        category: 'dosa',
        image: 'images/plain-dosa.jpg'
    },
    {
        name: 'Masala Dosa',
        description: 'Dosa filled with spiced potato masala',
        price: '₹120',
        category: 'dosa',
        image: 'images/masala-dosa.jpg'
    },
    {
        name: 'Paneer Masala Dosa',
        description: 'Dosa filled with paneer and potato masala',
        price: '₹150',
        category: 'dosa',
        image: 'images/paneer-dosa.jpg'
    },
    {
        name: 'Onion Masala Dosa',
        description: 'Dosa with onion and potato filling',
        price: '₹130',
        category: 'dosa',
        image: 'images/onion-masala-dosa.jpg'
    },
    {
        name: 'Onion Rava Dosa',
        description: 'Crispy semolina crepe with onions',
        price: '₹140',
        category: 'dosa',
        image: 'images/rava-dosa.jpg'
    },
    {
        name: 'Mysore Masala Dosa',
        description: 'Spicy dosa with red chutney and potato filling',
        price: '₹135',
        category: 'dosa',
        image: 'images/mysore-dosa.jpg'
    },
    // Idli & Vada
    {
        name: 'Idli (2 pcs)',
        description: 'Soft steamed rice cakes',
        price: '₹60',
        category: 'idli-vada',
        image: 'images/idli.jpg'
    },
    {
        name: 'Vada (2 pcs)',
        description: 'Crispy lentil fritters',
        price: '₹70',
        category: 'idli-vada',
        image: 'images/vada.jpg'
    },
    {
        name: 'Idli Vada Mix',
        description: '1 Idli + 1 Vada combo',
        price: '₹100',
        category: 'idli-vada',
        image: 'images/idli-vada.jpg'
    },
    {
        name: 'Sambar Vada',
        description: 'Vada soaked in hot sambhar',
        price: '₹85',
        category: 'idli-vada',
        image: 'images/sambar-vada.jpg'
    },
    {
        name: 'Dahi Vada',
        description: 'Vada in creamy yogurt with spices',
        price: '₹90',
        category: 'idli-vada',
        image: 'images/dahi-vada.jpg'
    },
    // Uttapam
    {
        name: 'Plain Uttapam',
        description: 'Thick rice pancake',
        price: '₹90',
        category: 'uttapam',
        image: 'images/plain-uttapam.jpg'
    },
    {
        name: 'Onion Uttapam',
        description: 'Uttapam topped with onions',
        price: '₹110',
        category: 'uttapam',
        image: 'images/uttapam.jpg'
    },
    {
        name: 'Tomato Uttapam',
        description: 'Uttapam topped with tomatoes',
        price: '₹110',
        category: 'uttapam',
        image: 'images/tomato-uttapam.jpg'
    },
    {
        name: 'Mixed Veg Uttapam',
        description: 'Uttapam with mixed vegetables',
        price: '₹130',
        category: 'uttapam',
        image: 'images/veg-uttapam.jpg'
    },
    // Thalis
    {
        name: 'Deluxe Thali',
        description: 'Complete meal with 4 curries, rice, sambar, rasam, curd, papad, dessert',
        price: '₹340',
        category: 'thali',
        image: 'images/deluxe-thali.jpg'
    },
    {
        name: 'Mini Thali',
        description: 'Smaller portion with 2 curries, rice, sambar, curd, papad',
        price: '₹260',
        category: 'thali',
        image: 'images/mini-thali.jpg'
    },
    // Hot Drinks
    {
        name: 'Filter Coffee',
        description: 'Traditional South Indian filter coffee',
        price: '₹70',
        category: 'drinks',
        image: 'images/filter-coffee.jpg'
    },
    {
        name: 'Masala Tea',
        description: 'Spiced Indian tea',
        price: '₹50',
        category: 'drinks',
        image: 'images/masala-tea.jpg'
    }
];

const menuGrid = document.getElementById('menuGrid');
const tabBtns = document.querySelectorAll('.tab-btn');

function renderMenuItems(category = 'all') {
    const filteredItems = category === 'all' 
        ? menuItems 
        : menuItems.filter(item => item.category === category);
    
    menuGrid.innerHTML = filteredItems.map(item => `
        <div class="menu-item" data-category="${item.category}">
            <div class="menu-item-image">
                <img src="${item.image}" alt="${item.name}" loading="lazy">
            </div>
            <div class="menu-item-content">
                <h4>${item.name}</h4>
                <p>${item.description}</p>
                <div class="menu-item-footer">
                    <span class="menu-item-price">${item.price}</span>
                    <a href="#order" class="btn-primary">Order</a>
                </div>
            </div>
        </div>
    `).join('');
}

// Initial render
renderMenuItems();

// Tab filtering
tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all buttons
        tabBtns.forEach(b => b.classList.remove('active'));
        // Add active class to clicked button
        btn.classList.add('active');
        // Filter menu items
        const category = btn.getAttribute('data-category');
        renderMenuItems(category);
    });
});

// ===================================
// GALLERY DATA
// ===================================
const galleryImages = [
    {
        src: 'images/gallery-1.jpg',
        title: 'Restaurant Interior'
    },
    {
        src: 'images/gallery-2.jpg',
        title: 'Masala Dosa'
    },
    {
        src: 'images/gallery-3.jpg',
        title: 'Deluxe Thali'
    },
    {
        src: 'images/gallery-4.jpg',
        title: 'Dining Area'
    },
    {
        src: 'images/gallery-5.jpg',
        title: 'Idli Vada'
    },
    {
        src: 'images/gallery-6.jpg',
        title: 'Filter Coffee'
    },
    {
        src: 'images/gallery-7.jpg',
        title: 'Kitchen View'
    },
    {
        src: 'images/gallery-8.jpg',
        title: 'Uttapam Special'
    },
    {
        src: 'images/gallery-9.jpg',
        title: 'Family Dining'
    }
];

const galleryGrid = document.getElementById('galleryGrid');

function renderGallery() {
    galleryGrid.innerHTML = galleryImages.map(image => `
        <div class="gallery-item">
            <img src="${image.src}" alt="${image.title}" loading="lazy">
            <div class="gallery-overlay">
                <h4>${image.title}</h4>
            </div>
        </div>
    `).join('');
}

renderGallery();

// ===================================
// FAQ ACCORDION
// ===================================
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    
    question.addEventListener('click', () => {
        // Close all other items
        faqItems.forEach(otherItem => {
            if (otherItem !== item) {
                otherItem.classList.remove('active');
            }
        });
        
        // Toggle current item
        item.classList.toggle('active');
    });
});

// ===================================
// SMOOTH SCROLL
// ===================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ===================================
// GENERATE PLACEHOLDER IMAGES
// ===================================
// This function creates placeholder images with canvas
function createPlaceholderImage(text, width, height, bgColor, textColor) {
    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext('2d');
    
    // Background
    ctx.fillStyle = bgColor;
    ctx.fillRect(0, 0, width, height);
    
    // Text
    ctx.fillStyle = textColor;
    ctx.font = 'bold 24px Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(text, width / 2, height / 2);
    
    return canvas.toDataURL();
}

// Replace broken images with placeholders
function handleBrokenImages() {
    const images = document.querySelectorAll('img');
    
    images.forEach(img => {
        img.addEventListener('error', function() {
            const altText = this.alt || 'Image';
            const width = this.width || 400;
            const height = this.height || 300;
            
            // Create a gradient background based on image type
            let bgColor = '#f0710b';
            if (altText.includes('Dosa')) bgColor = '#f38f33';
            if (altText.includes('Idli') || altText.includes('Vada')) bgColor = '#22c55e';
            if (altText.includes('Thali')) bgColor = '#e15606';
            if (altText.includes('Coffee') || altText.includes('Tea')) bgColor = '#ba3f08';
            
            this.src = createPlaceholderImage(altText, width, height, bgColor, '#ffffff');
        });
    });
}

// Call after DOM is loaded
window.addEventListener('load', handleBrokenImages);

// ===================================
// INTERSECTION OBSERVER FOR ANIMATIONS
// ===================================
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
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.dish-card, .service-card, .menu-item, .review-card, .gallery-item');
    
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// ===================================
// LOADING ANIMATION
// ===================================
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// ===================================
// CONSOLE MESSAGE
// ===================================
console.log('%c🍽️ Welcome to Bansi Vihar!', 'color: #f0710b; font-size: 24px; font-weight: bold;');
console.log('%cExperience authentic South Indian cuisine', 'color: #22c55e; font-size: 16px;');
