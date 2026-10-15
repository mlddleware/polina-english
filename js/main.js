(() => {
  // --- links into the personal cabinet ---
  // the site and the cabinet live on one server (/app); the GitHub Pages copy points to that server
  const APP = location.hostname.endsWith('github.io') ? 'https://88-222-220-70.sslip.io/app' : '/app';
  document.querySelectorAll('[data-app]').forEach((a) => {
    a.href = APP + a.dataset.app;
  });

  // --- WhatsApp stays as a contact in the footer ---
  const wa = (text) => `https://wa.me/77473617935?text=${encodeURIComponent(text)}`;
  document.querySelectorAll('[data-wa-hello]').forEach((a) => {
    a.href = wa('Здравствуйте! Хочу к вам на занятия :)');
    a.target = '_blank';
    a.rel = 'noopener';
  });

  // --- nav border on scroll ---
  const nav = document.querySelector('.nav');
  const onScroll = () => nav.classList.toggle('is-scrolled', window.scrollY > 8);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  // --- scroll reveal ---
  const items = document.querySelectorAll('[data-reveal]');
  if ('IntersectionObserver' in window) {
    // stagger siblings inside the same grid
    items.forEach((el) => {
      const siblings = [...el.parentElement.children].filter((c) => c.hasAttribute('data-reveal'));
      const i = siblings.indexOf(el);
      if (i > 0) el.style.setProperty('--d', `${Math.min(i, 5) * 0.08}s`);
    });
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('is-in');
          io.unobserve(e.target);
        }
      });
    }, { rootMargin: '0px 0px -5% 0px', threshold: 0 });
    items.forEach((el) => io.observe(el));
  } else {
    items.forEach((el) => el.classList.add('is-in'));
  }

  // --- mobile sticky CTA: show after hero, hide near the trial block ---
  const cta = document.querySelector('.mobile-cta');
  const hero = document.querySelector('.hero');
  const trial = document.querySelector('#trial');
  if (cta && hero && trial && 'IntersectionObserver' in window) {
    let heroVisible = true;
    let trialVisible = false;
    const sync = () => cta.classList.toggle('is-visible', !heroVisible && !trialVisible);
    new IntersectionObserver(([e]) => { heroVisible = e.isIntersecting; sync(); }).observe(hero);
    new IntersectionObserver(([e]) => { trialVisible = e.isIntersecting; sync(); }, { threshold: 0.15 }).observe(trial);
    const footer = document.querySelector('.footer');
    if (footer) new IntersectionObserver(([e]) => { if (e.isIntersecting) cta.classList.remove('is-visible'); else sync(); }).observe(footer);
  }

  // --- lightbox for lesson screenshots ---
  const box = document.getElementById('lightbox');
  if (box && typeof box.showModal === 'function') {
    const img = box.querySelector('img');
    let opener = null;
    document.querySelectorAll('.shot').forEach((btn) => {
      btn.setAttribute('aria-label', `Открыть крупно: ${btn.dataset.alt}`);
      btn.addEventListener('click', () => {
        opener = btn;
        img.src = btn.dataset.full;
        img.alt = btn.dataset.alt || '';
        box.showModal();
      });
    });
    box.querySelector('.lightbox__close').addEventListener('click', () => box.close());
    // click on the backdrop closes
    box.addEventListener('click', (e) => { if (e.target === box) box.close(); });
    box.addEventListener('close', () => { if (opener) opener.focus(); });
  }
})();
