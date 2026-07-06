/* TR Property Management — shared site interactions */
document.addEventListener('DOMContentLoaded', function () {
  var header = document.querySelector('[data-header]');
  var menu = document.querySelector('.menu');
  var nav = document.querySelector('[data-nav]');

  function closeMenu() {
    if (!menu || !nav) return;
    menu.setAttribute('aria-expanded', 'false');
    menu.setAttribute('aria-label', 'Open menu');
    nav.classList.remove('open');
    document.body.classList.remove('nav-open');
  }

  if (menu && nav) {
    menu.addEventListener('click', function () {
      var open = menu.getAttribute('aria-expanded') === 'true';
      menu.setAttribute('aria-expanded', String(!open));
      menu.setAttribute('aria-label', open ? 'Open menu' : 'Close menu');
      nav.classList.toggle('open');
      document.body.classList.toggle('nav-open');
    });
    nav.querySelectorAll('a').forEach(function (link) { link.addEventListener('click', closeMenu); });
    document.addEventListener('keydown', function (event) { if (event.key === 'Escape') closeMenu(); });
  }

  function updateHeader() {
    if (!header) return;
    header.classList.toggle('scrolled', window.scrollY > 40);
  }
  updateHeader();
  window.addEventListener('scroll', updateHeader, { passive: true });

  document.querySelectorAll('[data-year]').forEach(function (year) { year.textContent = new Date().getFullYear(); });

  var revealItems = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    var revealObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) { entry.target.classList.add('visible'); revealObserver.unobserve(entry.target); }
      });
    }, { threshold: 0.12 });
    revealItems.forEach(function (item) { revealObserver.observe(item); });
  } else {
    revealItems.forEach(function (item) { item.classList.add('visible'); });
  }

  /* Before/after comparison sliders */
  document.querySelectorAll('[data-compare]').forEach(function (comparison) {
    var handle = comparison.querySelector('[data-handle]');
    var dragging = false;

    function setPosition(clientX) {
      var bounds = comparison.getBoundingClientRect();
      var percent = ((clientX - bounds.left) / bounds.width) * 100;
      percent = Math.max(3, Math.min(97, percent));
      comparison.style.setProperty('--pos', percent + '%');
      handle.setAttribute('aria-valuenow', Math.round(percent));
    }

    handle.setAttribute('role', 'slider');
    handle.setAttribute('aria-valuemin', '3');
    handle.setAttribute('aria-valuemax', '97');
    handle.setAttribute('aria-valuenow', '50');
    handle.addEventListener('pointerdown', function (event) { dragging = true; handle.setPointerCapture(event.pointerId); setPosition(event.clientX); });
    handle.addEventListener('pointermove', function (event) { if (dragging) setPosition(event.clientX); });
    handle.addEventListener('pointerup', function () { dragging = false; });
    comparison.addEventListener('click', function (event) { setPosition(event.clientX); });
    handle.addEventListener('keydown', function (event) {
      var current = parseFloat(getComputedStyle(comparison).getPropertyValue('--pos')) || 50;
      if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
        event.preventDefault();
        var next = current + (event.key === 'ArrowRight' ? 3 : -3);
        next = Math.max(3, Math.min(97, next));
        comparison.style.setProperty('--pos', next + '%');
        handle.setAttribute('aria-valuenow', Math.round(next));
      }
    });
  });

  /* Gallery filters */
  var filterButtons = document.querySelectorAll('[data-filter]');
  var galleryItems = document.querySelectorAll('[data-gallery] figure');
  filterButtons.forEach(function (button) {
    button.addEventListener('click', function () {
      var filter = button.getAttribute('data-filter');
      filterButtons.forEach(function (item) { item.classList.toggle('active', item === button); });
      galleryItems.forEach(function (item) {
        var categories = item.getAttribute('data-category').split(' ');
        item.classList.toggle('hidden', filter !== 'all' && categories.indexOf(filter) === -1);
      });
    });
  });
});
