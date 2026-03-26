/**
 * FromOurPlace Clone - Main JavaScript
 * Handles carousels, swatches, and interactions
 */

// ===== SPLIDE.JS CAROUSELS =====
document.addEventListener('DOMContentLoaded', function() {

  // Product Carousel
  if (document.getElementById('product-carousel')) {
    new Splide('#product-carousel', {
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
        1024: { perPage: 3.5 },
        1280: { perPage: 4 },
      }
    }).mount();

    // Custom navigation buttons
    const prevBtn = document.querySelector('#products .prev-btn');
    const nextBtn = document.querySelector('#products .next-btn');
    const productCarousel = document.getElementById('product-carousel').splide;

    if (prevBtn && nextBtn && productCarousel) {
      prevBtn.addEventListener('click', () => productCarousel.go('<'));
      nextBtn.addEventListener('click', () => productCarousel.go('>'));
    }
  }

  // Testimonial Carousel (Fade effect)
  if (document.getElementById('testimonial-carousel')) {
    new Splide('#testimonial-carousel', {
      type: 'fade',
      rewind: true,
      autoplay: true,
      interval: 5000,
      arrows: false,
      pagination: false,
    }).mount();
  }

  // Press Logos Carousel
  if (document.getElementById('press-carousel')) {
    new Splide('#press-carousel', {
      type: 'loop',
      perPage: 3,
      perMove: 1,
      autoplay: true,
      interval: 3000,
      arrows: false,
      pagination: false,
      gap: '3rem',
      breakpoints: {
        640: { perPage: 2 },
        768: { perPage: 3 },
        1024: { perPage: 4 },
        1280: { perPage: 5 },
      }
    }).mount();
  }

  // Marketing Links Carousel
  if (document.getElementById('marketing-carousel')) {
    new Splide('#marketing-carousel', {
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
  }

  // ===== COLOR SWATCH SELECTION =====
  document.querySelectorAll('.swatch').forEach(swatch => {
    swatch.addEventListener('click', function(e) {
      e.preventDefault();
      const parent = this.closest('.product-card');
      if (parent) {
        parent.querySelectorAll('.swatch').forEach(s => s.classList.remove('selected'));
        this.classList.add('selected');
      }
    });
  });

  // ===== SMOOTH SCROLL FOR ANCHOR LINKS =====
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href !== '#') {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    });
  });

  // ===== NEWSLETTER FORM =====
  const newsletterForm = document.querySelector('.newsletter-form');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const emailInput = this.querySelector('input[type="email"]');
      if (emailInput && emailInput.value) {
        // Here you would typically send to your backend or service
        alert('Thanks for subscribing! Check your email for updates.');
        emailInput.value = '';
      }
    });
  }

  // ===== QUICK ADD BUTTONS =====
  document.querySelectorAll('.product-card-action-btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      const productTitle = this.closest('.product-card').querySelector('.product-card-title');
      const title = productTitle ? productTitle.textContent : 'Product';
      alert(`${title} added to cart!`);
    });
  });

});

// ===== MARQUEE DOUBLE CONTENT (for seamless loop) =====
document.addEventListener('DOMContentLoaded', function() {
  const marqueeWrappers = document.querySelectorAll('.marquee-wrapper');
  
  marqueeWrappers.forEach(wrapper => {
    const content = wrapper.querySelector('.marquee-content');
    if (content) {
      // Clone content for seamless loop
      const clone = content.cloneNode(true);
      clone.setAttribute('aria-hidden', 'true');
      wrapper.appendChild(clone);
    }
  });
});

// ===== INTERSECTION OBSERVER FOR FADE-IN ANIMATIONS =====
document.addEventListener('DOMContentLoaded', function() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll('.section, .showcase-item, .testimonial-slide').forEach(el => {
    el.style.opacity = '0';
    observer.observe(el);
  });
});

// ===== PRODUCT IMAGE HOVER (preload hover images) =====
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.product-card-hover-image').forEach(img => {
    const hoverSrc = img.src;
    const preload = new Image();
    preload.src = hoverSrc;
  });
});
