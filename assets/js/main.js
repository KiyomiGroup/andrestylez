// CURSOR — disabled on touch devices for smooth mobile experience
  const cursor = document.getElementById('cursor');
  const ring = document.getElementById('cursorRing');
  const isTouchDevice = ('ontouchstart' in window) || navigator.maxTouchPoints > 0;
  if (isTouchDevice) {
    if (cursor) cursor.style.display = 'none';
    if (ring) ring.style.display = 'none';
    document.body.style.cursor = 'auto';
  } else {
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
  }

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
// ── DARK / LIGHT THEME TOGGLE ──────────────────────────────────
(function() {
  const btn = document.getElementById('themeToggle');
  const html = document.documentElement;
  const saved = localStorage.getItem('theme');
  if (saved === 'light') html.classList.add('light');

  if (btn) {
    btn.addEventListener('click', () => {
      html.classList.toggle('light');
      localStorage.setItem('theme', html.classList.contains('light') ? 'light' : 'dark');
    });
  }
})();

// ── SEND MESSAGE → MAILTO ─────────────────────────────────────
(function() {
  const sendBtn = document.getElementById('sendMsgBtn');
  if (!sendBtn) return;
  sendBtn.addEventListener('click', () => {
    const nameEl = document.querySelector('.contact-form input[type="text"]');
    const emailEl = document.querySelector('.contact-form input[type="email"]');
    const typeEl = document.querySelector('.contact-form select');
    const msgEl = document.querySelector('.contact-form textarea');
    const name = nameEl ? nameEl.value.trim() : '';
    const email = emailEl ? emailEl.value.trim() : '';
    const type = typeEl ? typeEl.value : '';
    const msg = msgEl ? msgEl.value.trim() : '';
    const subject = encodeURIComponent((type || 'Inquiry') + ' from ' + (name || 'a fan'));
    const body = encodeURIComponent(
      (name ? 'Name: ' + name + '\n' : '') +
      (email ? 'Email: ' + email + '\n' : '') +
      (type ? 'Type: ' + type + '\n\n' : '\n') +
      (msg || '')
    );
    window.location.href = 'mailto:andrestylez0017@gmail.com?subject=' + subject + '&body=' + body;
  });
})();
