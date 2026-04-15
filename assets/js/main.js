// CURSOR
  const cursor = document.getElementById('cursor');
  const ring = document.getElementById('cursorRing');
  let mx = 0, my = 0, rx = 0, ry = 0;
  document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; cursor.style.left = mx + 'px'; cursor.style.top = my + 'px'; });
  function animateRing() {
    rx += (mx - rx) * 0.12;
    ry += (my - ry) * 0.12;
    ring.style.left = rx + 'px';
    ring.style.top = ry + 'px';
    requestAnimationFrame(animateRing);
  }
  animateRing();
  document.querySelectorAll('a, button, .track-card, .video-card, .gal-item, .merch-card, .show-row').forEach(el => {
    el.addEventListener('mouseenter', () => { cursor.style.width = '18px'; cursor.style.height = '18px'; ring.style.width = '50px'; ring.style.height = '50px'; });
    el.addEventListener('mouseleave', () => { cursor.style.width = '10px'; cursor.style.height = '10px'; ring.style.width = '36px'; ring.style.height = '36px'; });
  });

  // MOBILE MENU
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');
  let menuOpen = false;
  hamburger.addEventListener('click', () => {
    menuOpen = !menuOpen;
    mobileMenu.classList.toggle('open', menuOpen);
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    hamburger.querySelectorAll('span')[0].style.transform = menuOpen ? 'rotate(45deg) translate(4px, 4px)' : '';
    hamburger.querySelectorAll('span')[1].style.opacity = menuOpen ? '0' : '';
    hamburger.querySelectorAll('span')[2].style.transform = menuOpen ? 'rotate(-45deg) translate(4px, -4px)' : '';
  });
  function closeMobile() {
    menuOpen = false;
    mobileMenu.classList.remove('open');
    document.body.style.overflow = '';
    hamburger.querySelectorAll('span').forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
  }

  // VINYL SPIN on hover
  const vinyl = document.getElementById('vinyl');
  if (vinyl) {
    vinyl.addEventListener('click', () => vinyl.classList.toggle('playing'));
  }

  // SCROLL REVEAL
  const revealEls = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); observer.unobserve(e.target); } });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
  revealEls.forEach(el => observer.observe(el));

  // NAV SCROLL STYLE
  window.addEventListener('scroll', () => {
    document.querySelector('nav').style.background = window.scrollY > 60 ? 'rgba(8,8,8,0.95)' : 'transparent';
  });

  // HERO reveal immediately
  document.querySelectorAll('#hero .reveal').forEach((el, i) => {
    setTimeout(() => el.classList.add('in'), 200 + i * 150);
  });