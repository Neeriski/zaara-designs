document.addEventListener('DOMContentLoaded', function(){
  // year
  document.querySelectorAll('[id^="year"]').forEach(el => el.textContent = new Date().getFullYear());

  // mobile nav
  const mobileToggle = document.getElementById('mobile-nav-toggle');
  const nav = document.querySelector('.main-nav');
  if(mobileToggle && nav){
    mobileToggle.addEventListener('click', () => {
      nav.classList.toggle('open');
    });
  }

  // dropdown
  const dropdowns = document.querySelectorAll('.nav-item.dropdown');
  dropdowns.forEach(dd => {
    const btn = dd.querySelector('.dropdown-toggle');
    if(!btn) return;
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      dd.classList.toggle('open');
    });
  });
  document.addEventListener('click', () => {
    dropdowns.forEach(dd => dd.classList.remove('open'));
  });

  // hero slider
  const slides = document.querySelectorAll('.hero-slideshow .slide');
  if(slides.length > 1){
    let index = 0;
    setInterval(() => {
      slides[index].classList.remove('active');
      index = (index + 1) % slides.length;
      slides[index].classList.add('active');
    }, 6000);
  }

  // contact form (demo)
  const form = document.getElementById('contact-form');
  if(form){
    form.addEventListener('submit', function(e){
      e.preventDefault();
      const status = document.getElementById('form-status');
      if(status){
        status.textContent = 'Sending... (demo only)';
        setTimeout(() => {
          status.textContent = 'Message sent — we will get back to you soon.';
        }, 800);
      }
      form.reset();
    });
  }
});