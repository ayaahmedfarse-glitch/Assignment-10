(() => {
  'use strict';

  const $ = (selector, scope = document) => scope.querySelector(selector);
  const $$ = (selector, scope = document) => Array.from(scope.querySelectorAll(selector));
  const root = document.documentElement;
  const header = $('#header');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const isRtl = () => getComputedStyle(root).direction === 'rtl';

  const storage = {
    get(key) {
      try { return localStorage.getItem('portfolio-' + key); } catch (error) { return null; }
    },
    set(key, value) {
      try { localStorage.setItem('portfolio-' + key, value); } catch (error) {}
    },
    remove(key) {
      try { localStorage.removeItem('portfolio-' + key); } catch (error) {}
    }
  };

  function initTheme() {
    const button = $('#theme-toggle-button');

    const apply = (dark) => {
      root.classList.toggle('dark', dark);
      root.setAttribute('data-bs-theme', dark ? 'dark' : 'light');
      if (button) button.setAttribute('aria-pressed', String(dark));
    };

    const saved = storage.get('theme');
    apply(saved ? saved === 'dark' : root.classList.contains('dark'));

    if (button) {
      button.addEventListener('click', () => {
        const dark = !root.classList.contains('dark');
        apply(dark);
        storage.set('theme', dark ? 'dark' : 'light');
      });
    }
  }

  function scrollToSection(target, updateHash) {
    const top = Math.max(0, target.getBoundingClientRect().top + window.scrollY - header.offsetHeight);
    window.scrollTo({ top, behavior: reduceMotion ? 'auto' : 'smooth' });
    if (updateHash) history.pushState(null, '', '#' + target.id);
  }

  function initAnchors() {
    document.addEventListener('click', (event) => {
      const link = event.target.closest('a[href^="#"]');
      if (!link) return;

      const id = link.getAttribute('href').slice(1);
      const target = id && document.getElementById(id);
      if (!target) return;

      event.preventDefault();

      const menu = $('#nav-menu.show');
      if (menu && window.bootstrap) bootstrap.Collapse.getOrCreateInstance(menu).hide();

      scrollToSection(target, true);
    });

    if (location.hash) {
      const target = document.getElementById(location.hash.slice(1));
      if (target) requestAnimationFrame(() => scrollToSection(target, false));
    }
  }

  function initScrollSpy() {
    const links = $$('.nav-links a[href^="#"]');
    if (!links.length) return;

    const linkById = new Map(links.map((link) => [link.getAttribute('href').slice(1), link]));
    const sections = $$('main > section[id]');
    const lastId = Array.from(linkById.keys()).pop();

    function setActive(id) {
      linkById.forEach((link, key) => {
        link.classList.toggle('active', key === id);
        if (key === id) link.setAttribute('aria-current', 'location');
        else link.removeAttribute('aria-current');
      });
    }

    function update() {
      const line = header.offsetHeight + window.innerHeight * 0.25;
      let current = links[0].getAttribute('href').slice(1);

      sections.forEach((section) => {
        if (linkById.has(section.id) && section.getBoundingClientRect().top <= line) {
          current = section.id;
        }
      });

      if (window.innerHeight + window.scrollY >= root.scrollHeight - 4) current = lastId;
      setActive(current);
    }

    let waiting = false;
    const onScroll = () => {
      if (waiting) return;
      waiting = true;
      requestAnimationFrame(() => {
        update();
        waiting = false;
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    update();
  }

  function initPortfolio() {
    const tabs = $$('.portfolio-filter');
    const items = $$('.portfolio-item');
    const panel = $('#portfolio-grid');
    if (!tabs.length || !items.length || !panel) return;

    items.forEach((item) => {
      item.style.transition = reduceMotion ? 'none' : 'opacity 0.3s ease, transform 0.3s ease';
    });

    function showCategory(category) {
      items.forEach((item) => {
        const visible = category === 'all' || item.dataset.category === category;
        clearTimeout(item.hideTimer);

        if (visible) {
          item.classList.remove('d-none');
          requestAnimationFrame(() => requestAnimationFrame(() => {
            item.style.opacity = '';
            item.style.transform = '';
          }));
        } else {
          item.style.opacity = '0';
          item.style.transform = 'scale(0.95)';
          item.hideTimer = setTimeout(() => item.classList.add('d-none'), reduceMotion ? 0 : 300);
        }
      });
    }

    function select(tab, moveFocus) {
      tabs.forEach((other) => {
        const selected = other === tab;
        other.classList.toggle('active', selected);
        other.setAttribute('aria-selected', String(selected));
        other.tabIndex = selected ? 0 : -1;
      });
      panel.setAttribute('aria-labelledby', tab.id);
      showCategory(tab.dataset.filter);
      if (moveFocus) tab.focus();
    }

    tabs.forEach((tab, index) => {
      tab.addEventListener('click', () => select(tab, false));

      tab.addEventListener('keydown', (event) => {
        const next = isRtl() ? 'ArrowLeft' : 'ArrowRight';
        const previous = isRtl() ? 'ArrowRight' : 'ArrowLeft';
        let target = null;

        if (event.key === next) target = tabs[(index + 1) % tabs.length];
        else if (event.key === previous) target = tabs[(index - 1 + tabs.length) % tabs.length];
        else if (event.key === 'Home') target = tabs[0];
        else if (event.key === 'End') target = tabs[tabs.length - 1];

        if (target) {
          event.preventDefault();
          select(target, true);
        }
      });
    });

    select(tabs.find((tab) => tab.classList.contains('active')) || tabs[0], false);
  }

  function initCarousel() {
    const track = $('#testimonials-carousel');
    const dotsWrap = $('#testimonial-dots');
    if (!track) return;

    const slides = $$('.testimonial-card', track);
    const prevButton = $('#prev-testimonial');
    const nextButton = $('#next-testimonial');
    const autoplayDelay = 5000;

    let index = 0;
    let perView = 3;
    let dots = [];
    let timer = null;

    const getPerView = () => (window.innerWidth >= 992 ? 3 : window.innerWidth >= 576 ? 2 : 1);
    const lastIndex = () => Math.max(0, slides.length - perView);
    const slideStep = () => (slides.length > 1
      ? Math.abs(slides[1].offsetLeft - slides[0].offsetLeft)
      : slides[0].getBoundingClientRect().width);

    function buildDots() {
      if (!dotsWrap) return;
      dotsWrap.innerHTML = '';
      dots = [];

      for (let i = 0; i <= lastIndex(); i++) {
        const dot = document.createElement('button');
        dot.type = 'button';
        dot.className = 'dot-btn';
        dot.setAttribute('aria-label', 'التوصية ' + (i + 1));
        dot.addEventListener('click', () => {
          goTo(i);
          restartAutoplay();
        });
        dotsWrap.appendChild(dot);
        dots.push(dot);
      }
    }

    function render() {
      const direction = isRtl() ? 1 : -1;
      track.style.transform = 'translateX(' + direction * index * slideStep() + 'px)';

      slides.forEach((slide, i) => {
        slide.setAttribute('aria-hidden', String(i < index || i >= index + perView));
      });

      dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
        if (i === index) dot.setAttribute('aria-current', 'true');
        else dot.removeAttribute('aria-current');
      });
    }

    function goTo(i) {
      const last = lastIndex();
      index = i > last ? 0 : i < 0 ? last : i;
      render();
    }

    function stopAutoplay() {
      clearInterval(timer);
      timer = null;
    }

    function startAutoplay() {
      if (reduceMotion || timer || lastIndex() === 0) return;
      timer = setInterval(() => goTo(index + 1), autoplayDelay);
    }

    function restartAutoplay() {
      stopAutoplay();
      startAutoplay();
    }

    if (nextButton) nextButton.addEventListener('click', () => { goTo(index + 1); restartAutoplay(); });
    if (prevButton) prevButton.addEventListener('click', () => { goTo(index - 1); restartAutoplay(); });

    const area = track.closest('.carousel-wrap');
    area.addEventListener('mouseenter', stopAutoplay);
    area.addEventListener('mouseleave', startAutoplay);
    area.addEventListener('focusin', stopAutoplay);
    area.addEventListener('focusout', startAutoplay);
    document.addEventListener('visibilitychange', () => (document.hidden ? stopAutoplay() : startAutoplay()));

    area.addEventListener('keydown', (event) => {
      if (event.key !== 'ArrowRight' && event.key !== 'ArrowLeft') return;
      const forward = isRtl() ? event.key === 'ArrowLeft' : event.key === 'ArrowRight';
      goTo(index + (forward ? 1 : -1));
      restartAutoplay();
    });

    let touchStart = null;
    area.addEventListener('touchstart', (event) => {
      touchStart = event.touches[0].clientX;
      stopAutoplay();
    }, { passive: true });

    area.addEventListener('touchend', (event) => {
      if (touchStart !== null) {
        const distance = event.changedTouches[0].clientX - touchStart;
        if (Math.abs(distance) > 50) {
          const forward = isRtl() ? distance > 0 : distance < 0;
          goTo(index + (forward ? 1 : -1));
        }
      }
      touchStart = null;
      startAutoplay();
    }, { passive: true });

    window.addEventListener('resize', () => {
      const next = getPerView();
      if (next !== perView) {
        perView = next;
        index = Math.min(index, lastIndex());
        buildDots();
      }
      render();
    });

    perView = getPerView();
    buildDots();
    render();
    startAutoplay();
  }

  const PALETTES = [
    { name: 'بنفسجي نيلي', p: '#6366f1', s: '#8b5cf6', a: '#ec4899' },
    { name: 'أزرق', p: '#3b82f6', s: '#06b6d4', a: '#8b5cf6' },
    { name: 'أخضر', p: '#10b981', s: '#14b8a6', a: '#84cc16' },
    { name: 'وردي محمر', p: '#f43f5e', s: '#f97316', a: '#ec4899' },
    { name: 'كهرماني', p: '#f59e0b', s: '#ef4444', a: '#f97316' },
    { name: 'بنفسجي', p: '#8b5cf6', s: '#d946ef', a: '#6366f1' },
    { name: 'سماوي', p: '#06b6d4', s: '#3b82f6', a: '#10b981' },
    { name: 'وردي', p: '#ec4899', s: '#a855f7', a: '#f43f5e' }
  ];

  const FONTS = {
    alexandria: "'Alexandria', sans-serif",
    tajawal: "'Tajawal', sans-serif",
    cairo: "'Cairo', sans-serif"
  };

  function initSettings() {
    const toggle = $('#settings-toggle');
    const sidebar = $('#settings-sidebar');
    const overlay = $('#settings-overlay');
    const closeButton = $('#close-settings');
    const resetButton = $('#reset-settings');
    const grid = $('#theme-colors-grid');
    const fontButtons = $$('.font-option');
    if (!toggle || !sidebar) return;

    const isOpen = () => sidebar.classList.contains('open');

    function open() {
      sidebar.classList.add('open');
      sidebar.removeAttribute('inert');
      if (overlay) overlay.classList.add('show');
      toggle.setAttribute('aria-expanded', 'true');
      toggle.style.opacity = '0';
      toggle.style.pointerEvents = 'none';
      if (closeButton) closeButton.focus({ preventScroll: true });
    }

    function close() {
      sidebar.classList.remove('open');
      sidebar.setAttribute('inert', '');
      if (overlay) overlay.classList.remove('show');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.style.opacity = '';
      toggle.style.pointerEvents = '';
      toggle.focus({ preventScroll: true });
    }

    toggle.addEventListener('click', open);
    if (closeButton) closeButton.addEventListener('click', close);
    if (overlay) overlay.addEventListener('click', close);
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && isOpen()) close();
    });

    const swatches = [];

    function markSwatch(selected) {
      swatches.forEach((swatch, i) => swatch.setAttribute('aria-pressed', String(i === selected)));
    }

    function applyPalette(i, save) {
      const palette = PALETTES[i];
      root.style.setProperty('--color-primary', palette.p);
      root.style.setProperty('--color-secondary', palette.s);
      root.style.setProperty('--color-accent', palette.a);

      const meta = $('meta[name="theme-color"]');
      if (meta) meta.setAttribute('content', palette.p);

      markSwatch(i);
      if (save) storage.set('color', JSON.stringify({ i, p: palette.p, s: palette.s, a: palette.a }));
    }

    if (grid) {
      PALETTES.forEach((palette, i) => {
        const cell = document.createElement('div');
        cell.className = 'col';

        const swatch = document.createElement('button');
        swatch.type = 'button';
        swatch.className = 'swatch';
        swatch.style.background = 'linear-gradient(135deg, ' + palette.p + ', ' + palette.s + ')';
        swatch.setAttribute('aria-label', 'لون الثيم: ' + palette.name);
        swatch.setAttribute('aria-pressed', 'false');
        swatch.addEventListener('click', () => applyPalette(i, true));

        cell.appendChild(swatch);
        grid.appendChild(cell);
        swatches.push(swatch);
      });
    }

    function applyFont(key, save) {
      if (!FONTS[key]) return;
      root.style.setProperty('--font-main', FONTS[key]);

      fontButtons.forEach((button) => {
        const selected = button.dataset.font === key;
        button.classList.toggle('active', selected);
        button.setAttribute('aria-checked', String(selected));
      });

      if (save) {
        storage.set('font', key);
        storage.set('font-family', FONTS[key]);
      }
    }

    fontButtons.forEach((button) => {
      button.addEventListener('click', () => applyFont(button.dataset.font, true));
    });

    if (resetButton) {
      resetButton.addEventListener('click', () => {
        ['--color-primary', '--color-secondary', '--color-accent', '--font-main'].forEach((name) => {
          root.style.removeProperty(name);
        });

        const meta = $('meta[name="theme-color"]');
        if (meta) meta.setAttribute('content', PALETTES[0].p);

        markSwatch(0);
        fontButtons.forEach((button) => {
          const selected = button.dataset.font === 'tajawal';
          button.classList.toggle('active', selected);
          button.setAttribute('aria-checked', String(selected));
        });

        ['color', 'font', 'font-family'].forEach((key) => storage.remove(key));
      });
    }

    let savedPalette = 0;
    try {
      const saved = JSON.parse(storage.get('color') || 'null');
      if (saved && PALETTES[saved.i]) savedPalette = saved.i;
    } catch (error) {}
    applyPalette(savedPalette, false);

    const savedFont = storage.get('font');
    applyFont(FONTS[savedFont] ? savedFont : 'tajawal', false);
  }

  function initScrollTop() {
    const button = $('#scroll-to-top');
    if (!button) return;

    const update = () => {
      const visible = window.scrollY > 400;
      button.classList.toggle('show', visible);
      button.tabIndex = visible ? 0 : -1;
      button.setAttribute('aria-hidden', String(!visible));
    };

    let waiting = false;
    window.addEventListener('scroll', () => {
      if (waiting) return;
      waiting = true;
      requestAnimationFrame(() => {
        update();
        waiting = false;
      });
    }, { passive: true });

    button.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' });
      history.replaceState(null, '', location.pathname + location.search);
    });

    update();
  }

  function initContactForm() {
    const form = $('#contact-form');
    const success = $('#form-success');
    if (!form) return;

    form.addEventListener('submit', (event) => {
      event.preventDefault();

      if (!form.checkValidity()) {
        form.classList.add('was-validated');
        return;
      }

      form.reset();
      form.classList.remove('was-validated');
      if (success) success.classList.remove('d-none');
    });
  }

  function init() {
    initTheme();
    initAnchors();
    initScrollSpy();
    initPortfolio();
    initCarousel();
    initSettings();
    initScrollTop();
    initContactForm();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();