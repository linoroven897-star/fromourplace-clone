# Your Brand - Cookware & Bakeware Store

A modern e-commerce storefront inspired by premium cookware brands. Built with vanilla HTML, CSS, and JavaScript - no build tools required.

## Features

- ✅ Fully responsive design (mobile, tablet, desktop)
- ✅ Product carousel with color swatch selection
- ✅ Hero banner with promotional messaging
- ✅ Testimonial carousel with fade transitions
- ✅ Press/media logos carousel
- ✅ Marketing links carousel
- ✅ Newsletter signup form
- ✅ Multi-column footer with links
- ✅ Infinite scrolling marquee/promo bar
- ✅ Smooth scroll navigation
- ✅ Product hover effects with second image reveal

## Tech Stack

- **HTML5** - Semantic markup
- **CSS3** - Custom CSS with CSS variables
- **Vanilla JavaScript** - ES6+
- **Splide.js** - Carousel library (via CDN)
- **Google Fonts** - Inter & custom fonts

## Project Structure

```
fromourplace-clone/
├── index.html          # Main HTML file
├── README.md           # Documentation
├── assets/
│   ├── css/
│   │   └── styles.css # All styles (22KB)
│   └── js/
│       └── main.js    # All JavaScript (5.5KB)
└── .gitignore         # Git ignore file
```

## Quick Start

1. **Clone or download** this repository
2. **Open `index.html`** in any modern browser
3. That's it! No build tools or dependencies needed.

## Customization

### Changing Colors

Edit the CSS variables in `assets/css/styles.css`:

```css
:root {
  --color-primary: #35312E;
  --color-primary-muted: #6B6560;
  --color-interactive-brick: #8C3B28;
  --color-interactive-char: #35312E;
  --color-bone-50: #FCFAF6;
  --color-background-secondary: #F5F2ED;
}
```

### Changing Products

Edit the product cards in `index.html`. Each product follows this structure:

```html
<div class="splide__slide">
  <div class="product-card">
    <div class="product-card-image-wrapper">
      <img src="..." alt="Product Name" class="product-card-main-image">
      <img src="..." alt="Product alternate" class="product-card-hover-image">
      <!-- Badges, Quick Add button, etc -->
    </div>
    <div>
      <h3 class="product-card-title">Product Name</h3>
      <p class="product-card-desc">Description</p>
      <div class="product-card-price-wrapper">
        <span class="product-card-price">$199</span>
        <span class="product-card-price-original">$299 Value</span>
      </div>
      <!-- Swatches -->
      <div class="swatch-group">
        <button class="swatch selected" style="background-color: #2D2926;"></button>
      </div>
    </div>
  </div>
</div>
```

### Adding New Carousels

Use Splide.js syntax:

```javascript
new Splide('#your-carousel-id', {
  type: 'loop',
  perPage: 4,
  perMove: 1,
  gap: '1.5rem',
  autoplay: false,
  arrows: false,
  pagination: false,
  breakpoints: {
    640: { perPage: 1.5 },
    768: { perPage: 2.5 },
    1024: { perPage: 3 },
    1280: { perPage: 4 },
  }
}).mount();
```

## Deployment to GitHub Pages

1. **Create a new repository** on GitHub
2. **Push this project** to the repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
   git push -u origin main
   ```
3. **Enable GitHub Pages**:
   - Go to Settings → Pages
   - Source: `Deploy from a branch`
   - Branch: `main` / `(root)`
   - Click Save
4. Your site will be live at: `https://YOUR_USERNAME.github.io/YOUR_REPO/`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Credits

- [Splide.js](https://splidejs.com/) - Carousel library
- [Unsplash](https://unsplash.com/) - Product images
- [Google Fonts](https://fonts.googleapis.com/) - Typography

## License

MIT License - Feel free to use for personal or commercial projects.
