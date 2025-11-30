# Bansi Vihar Restaurant Website

A modern, responsive website for Bansi Vihar - Authentic South Indian & Pure Veg Restaurant in Patna.

## 🌟 Features

- **Modern Design**: Premium aesthetics with vibrant gradients, smooth animations, and glassmorphism effects
- **Fully Responsive**: Works perfectly on desktop, tablet, and mobile devices
- **Interactive Elements**: Smooth scrolling, animated sections, FAQ accordion, menu filtering
- **SEO Optimized**: Proper meta tags, semantic HTML, and structured content
- **Accessibility**: Wheelchair accessible features highlighted, proper ARIA labels
- **Pure HTML/CSS/JS**: No frameworks required - lightweight and fast

## 📁 Project Structure

```
New folder/
├── index.html          # Main HTML file
├── styles.css          # All styling and animations
├── script.js           # Interactive functionality
├── images/             # Image assets folder
└── README.md           # This file
```

## 🎨 Design Features

- **Color Palette**: 
  - Primary: Orange (#f0710b) - Represents warmth and appetite
  - Secondary: Green (#22c55e) - Represents freshness and vegetarian
  - Neutral grays for text and backgrounds
  
- **Typography**:
  - Headings: Playfair Display (elegant serif)
  - Body: Outfit (modern sans-serif)
  
- **Animations**:
  - Smooth fade-in effects
  - Floating card animations
  - Hover transformations
  - Scroll-triggered animations

## 📸 Adding Images

The website requires the following images in the `images/` folder:

### Hero & Featured Dishes:
- `masala-dosa.jpg` - Crispy masala dosa
- `idli-vada.jpg` - Idli vada combo
- `uttapam.jpg` - Onion uttapam
- `deluxe-thali.jpg` - Complete thali

### Menu Items:
- `plain-dosa.jpg`
- `paneer-dosa.jpg`
- `onion-masala-dosa.jpg`
- `rava-dosa.jpg`
- `mysore-dosa.jpg`
- `idli.jpg`
- `vada.jpg`
- `sambar-vada.jpg`
- `dahi-vada.jpg`
- `plain-uttapam.jpg`
- `tomato-uttapam.jpg`
- `veg-uttapam.jpg`
- `mini-thali.jpg`
- `filter-coffee.jpg`
- `masala-tea.jpg`

### Other:
- `restaurant-interior.jpg` - Interior view
- `swiggy-logo.png` - Swiggy logo
- `zomato-logo.png` - Zomato logo
- `gallery-1.jpg` to `gallery-9.jpg` - Gallery images

### Image Specifications:
- **Dish Photos**: 800x600px minimum, high quality
- **Hero Images**: 1200x800px minimum
- **Gallery**: 1000x1000px (square format works best)
- **Logos**: PNG format with transparency, 200x200px

### Where to Get Images:

1. **Professional Photography**: Hire a food photographer
2. **Stock Photos**: Use sites like:
   - Unsplash (https://unsplash.com) - Free
   - Pexels (https://pexels.com) - Free
   - Shutterstock - Paid
3. **AI Generation**: Use tools like:
   - DALL-E
   - Midjourney
   - Stable Diffusion

### Placeholder Behavior:
The JavaScript automatically generates colored placeholders for missing images, so the site will work even without images. However, for best results, add real food photography.

## 🚀 Getting Started

1. **Open the website**:
   - Simply open `index.html` in any modern web browser
   - No server required for basic functionality

2. **Add your images**:
   - Place images in the `images/` folder
   - Follow the naming convention listed above

3. **Customize content**:
   - Edit `index.html` for content changes
   - Modify `styles.css` for design tweaks
   - Update `script.js` for functionality changes

## 🎯 Sections Included

1. **Home/Hero**: Eye-catching introduction with CTAs
2. **Quick Info Bar**: Hours, pricing, contact, location
3. **Services**: Dine-in, takeaway, delivery options
4. **Featured Dishes**: Highlighted menu items
5. **About**: Restaurant story and features
6. **Menu**: Filterable menu with categories
7. **Order Online**: Swiggy/Zomato integration
8. **Reviews**: Customer testimonials (4.0★, 8,989 reviews)
9. **Gallery**: Photo showcase
10. **Contact**: Location, map, accessibility info
11. **FAQ**: Common questions
12. **Footer**: Links, social media, contact info

## 🔧 Customization

### Change Colors:
Edit CSS variables in `styles.css`:
```css
:root {
    --primary-500: #f0710b;  /* Main orange */
    --secondary-500: #22c55e; /* Main green */
}
```

### Update Menu Items:
Edit the `menuItems` array in `script.js`:
```javascript
const menuItems = [
    {
        name: 'Your Dish',
        description: 'Description',
        price: '₹100',
        category: 'dosa',
        image: 'images/your-dish.jpg'
    }
];
```

### Modify Contact Info:
Update phone numbers, address, and hours in `index.html`

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🎨 Color Scheme

The website uses a warm, appetizing color scheme:
- **Primary Orange**: Stimulates appetite, represents warmth
- **Secondary Green**: Represents fresh, vegetarian food
- **Dark Neutrals**: Professional, easy to read
- **Gradients**: Modern, premium feel

## ⚡ Performance

- Lightweight: No heavy frameworks
- Fast loading: Optimized CSS and JS
- Lazy loading: Images load as needed
- Smooth animations: GPU-accelerated transforms

## 📞 Contact Information (Update These)

- **Phone**: +91 612 220 1234
- **Address**: Fraser Road, Near Patna Junction, Patna, Bihar 800001
- **Hours**: 8:00 AM - 10:30 PM (Daily)

## 🌐 Deployment

### Option 1: GitHub Pages
1. Create a GitHub repository
2. Upload all files
3. Enable GitHub Pages in settings
4. Your site will be live at `username.github.io/repo-name`

### Option 2: Netlify
1. Drag and drop the folder to Netlify
2. Instant deployment with free hosting

### Option 3: Traditional Hosting
1. Upload files via FTP to your web host
2. Ensure `index.html` is in the root directory

## 📝 License

This is a custom website created for Bansi Vihar restaurant. All rights reserved.

## 🤝 Support

For customization or support, contact the developer.

---

**Built with ❤️ for authentic South Indian cuisine lovers**
