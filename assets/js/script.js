document.addEventListener('DOMContentLoaded', () => {
  /* ================== MOBILE NAV ================== */
  const mobileToggle = document.getElementById('mobile-nav-toggle');
  const mainNav = document.querySelector('.main-nav');

  if (mobileToggle && mainNav) {
    mobileToggle.addEventListener('click', () => {
      mainNav.classList.toggle('open');
    });
  }

  /* ================== DROPDOWN ================== */
/* ================== DROPDOWN (FIXED) ================== */
document.querySelectorAll('.nav-item.dropdown').forEach(dropdown => {
  const toggle = dropdown.querySelector('.dropdown-toggle');

  toggle.addEventListener('click', (e) => {
    e.stopPropagation();

    // Close all other dropdowns
    document.querySelectorAll('.nav-item.dropdown').forEach(d => {
      if (d !== dropdown) d.classList.remove('open');
    });

    dropdown.classList.toggle('open');
  });
});

// Close dropdown when clicking outside
document.addEventListener('click', () => {
  document.querySelectorAll('.nav-item.dropdown').forEach(dropdown => {
    dropdown.classList.remove('open');
  });
});


  /* ================== HERO SLIDER ================== */
  const slides = document.querySelectorAll('.hero-slideshow .slide');
  const dots = document.querySelectorAll('.hero-dots .hero-dot');
  const prevBtn = document.querySelector('.hero-arrow-prev');
  const nextBtn = document.querySelector('.hero-arrow-next');

  if (slides.length > 0) {
    let currentIndex = 0;
    const INTERVAL = 6000; // ms
    let timer = null;

    const goToSlide = (index) => {
      slides[currentIndex].classList.remove('active');
      if (dots[currentIndex]) dots[currentIndex].classList.remove('active');

      currentIndex = (index + slides.length) % slides.length;

      slides[currentIndex].classList.add('active');
      if (dots[currentIndex]) dots[currentIndex].classList.add('active');
    };

    const startTimer = () => {
      if (timer) clearInterval(timer);
      timer = setInterval(() => {
        goToSlide(currentIndex + 1);
      }, INTERVAL);
    };

    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        goToSlide(currentIndex - 1);
        startTimer(); // reset timer after manual nav
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        goToSlide(currentIndex + 1);
        startTimer();
      });
    }

    if (dots.length) {
      dots.forEach((dot, idx) => {
        dot.addEventListener('click', () => {
          goToSlide(idx);
          startTimer();
        });
      });
    }

    // start autoplay
    startTimer();
  }

  /* ================== FOOTER YEAR ================== */
  const yearSpan = document.getElementById('year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
});
