/* =========================================================
   PROGRESS UCHENWA: EA PORTFOLIO
   Renders js/content.js into the page, then wires up motion
   and interaction. Edit content.js, never this file, for
   everyday text updates.
========================================================= */
document.addEventListener('DOMContentLoaded', function () {

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const esc = function (str) {
    if (str === null || str === undefined) return '';
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  };

  /* ---------- Page title / meta ---------- */
  if (typeof siteContent_meta !== 'undefined') {
    document.title = siteContent_meta.pageTitle;
    const metaDesc = document.getElementById('metaDescription');
    if (metaDesc) metaDesc.setAttribute('content', siteContent_meta.metaDescription);
  }

  /* ---------- Footer year ---------- */
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* =========================================================
     RENDER CONTENT FROM content.js
  ========================================================= */

  /* ---- 1. Hero ---- */
  if (typeof siteContent_hero !== 'undefined') {
    const h = siteContent_hero;
    const secondaryIsCalendly = h.ctaSecondaryHref === 'calendly';
    const secondaryHref = secondaryIsCalendly
      ? (typeof contactInfo !== 'undefined' ? contactInfo.calendlyUrl : '#')
      : h.ctaSecondaryHref;
    const secondaryAttrs = secondaryIsCalendly ? ' target="_blank" rel="noopener"' : '';
    document.getElementById('heroText').innerHTML =
      '<p class="eyebrow eyebrow-light">' + esc(h.eyebrow) + '</p>' +
      '<h1 class="hero-headline">' + esc(h.name).replace(' ', '<br>') + '</h1>' +
      '<p class="hero-subline">' + esc(h.subline) + '</p>' +
      '<p class="hero-body">' + esc(h.body) + '</p>' +
      '<div class="hero-actions">' +
        '<a href="' + esc(h.ctaPrimaryHref) + '" class="btn btn-primary-inverse">' + esc(h.ctaPrimaryLabel) + '</a>' +
        '<a href="' + esc(secondaryHref) + '" class="btn btn-outline-inverse"' + secondaryAttrs + '>' + esc(h.ctaSecondaryLabel) + '</a>' +
      '</div>';
  }

  /* ---- 2. Positioning marquee ---- */
  if (typeof siteContent_positioningWords !== 'undefined') {
    const words = siteContent_positioningWords;
    const doubled = words.concat(words);
    document.getElementById('marqueeTrack').innerHTML = doubled.map(function (w) {
      return '<span>' + esc(w) + '</span><span aria-hidden="true">&bull;</span>';
    }).join('');
  }

  /* ---- 3. About ---- */
  if (typeof siteContent_about !== 'undefined') {
    const a = siteContent_about;
    let html = '<p class="eyebrow">' + esc(a.eyebrow) + '</p>' +
      '<h2 class="section-headline">' + esc(a.headline) + '</h2>';
    a.paragraphs.forEach(function (p) {
      html += '<p class="body-text">' + esc(p) + '</p>';
    });
    if (a.placeholderNote) {
      html += '<p class="body-text placeholder-note">' + esc(a.placeholderNote) + '</p>';
    }
    document.getElementById('aboutText').innerHTML = html;
  }

  /* ---- 4. Approach / workflow ---- */
  if (typeof siteContent_approach !== 'undefined') {
    const ap = siteContent_approach;
    document.getElementById('approachHeader').innerHTML =
      '<p class="eyebrow">' + esc(ap.eyebrow) + '</p>' +
      '<h2 class="section-headline">' + esc(ap.headline) + '</h2>' +
      '<p class="body-text approach-intro">' + esc(ap.intro) + '</p>';

    const icons = [
      '<svg viewBox="0 0 40 40" fill="none"><rect x="7" y="8" width="26" height="24" rx="2" stroke="currentColor" stroke-width="1.5"/><path d="M13 16h14M13 21h14M13 26h9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>',
      '<svg viewBox="0 0 40 40" fill="none"><rect x="9" y="7" width="22" height="26" rx="2" stroke="currentColor" stroke-width="1.5"/><path d="M14 14h12M14 19h12M14 24h7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>',
      '<svg viewBox="0 0 40 40" fill="none"><path d="M20 8v6M20 26v6M8 20h6M26 20h6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><circle cx="20" cy="20" r="5" stroke="currentColor" stroke-width="1.5"/></svg>',
      '<svg viewBox="0 0 40 40" fill="none"><path d="M9 12h22M9 12l4-4M9 12l4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M9 28h14" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><path d="M9 20h18" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>',
      '<svg viewBox="0 0 40 40" fill="none"><path d="M10 20l7 7 13-14" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>'
    ];
    const timeline = document.getElementById('workflowTimeline');
    timeline.innerHTML = ap.steps.map(function (step, i) {
      const num = String(i + 1).padStart(2, '0');
      const icon = icons[i] || icons[icons.length - 1];
      return (
        '<li class="workflow-step reveal">' +
          '<span class="workflow-index">' + num + '</span>' +
          '<div class="workflow-icon" aria-hidden="true">' + icon + '</div>' +
          '<h3>' + esc(step.title) + '</h3>' +
          '<p>' + esc(step.description) + '</p>' +
        '</li>'
      );
    }).join('');
  }

  /* ---- 5. Capabilities ---- */
  if (typeof siteContent_capabilities !== 'undefined') {
    const cap = siteContent_capabilities;
    document.getElementById('capabilitiesHeader').innerHTML =
      '<p class="eyebrow">' + esc(cap.eyebrow) + '</p>' +
      '<h2 class="section-headline">' + esc(cap.headline) + '</h2>';

    const grid = document.getElementById('capabilityGrid');
    grid.innerHTML = cap.items.map(function (item) {
      const visual = item.image
        ? '<div class="capability-visual"><img src="' + esc(item.image) + '" alt="" loading="lazy"></div>'
        : '';
      return (
        '<button class="capability-card reveal">' +
          '<span class="capability-title">' + esc(item.title) + '</span>' +
          '<span class="capability-detail">' + esc(item.detail) + '</span>' +
          visual +
        '</button>'
      );
    }).join('');

    grid.querySelectorAll('.capability-card').forEach(function (card) {
      card.addEventListener('click', function () {
        const wasActive = card.classList.contains('active');
        grid.querySelectorAll('.capability-card').forEach(function (c) { c.classList.remove('active'); });
        if (!wasActive) card.classList.add('active');
      });
    });
  }

  /* ---- 6. Selected Results ---- */
  if (typeof siteContent_results !== 'undefined') {
    const r = siteContent_results;
    document.getElementById('resultsHeader').innerHTML =
      '<p class="eyebrow">' + esc(r.eyebrow) + '</p>' +
      '<h2 class="section-headline">' + esc(r.headline) + '</h2>' +
      '<p class="body-text work-intro">' + esc(r.intro) + '</p>';

    const grid = document.getElementById('resultsGrid');
    grid.innerHTML = r.items.map(function (item) {
      return (
        '<div class="result-card reveal">' +
          '<span class="result-stat">' + esc(item.stat) + '</span>' +
          '<span class="result-label">' + esc(item.label) + '</span>' +
        '</div>'
      );
    }).join('');
  }

  /* ---- 7. Project Samples ---- */
  if (typeof siteContent_work !== 'undefined') {
    const w = siteContent_work;
    document.getElementById('workHeader').innerHTML =
      '<p class="eyebrow">' + esc(w.eyebrow) + '</p>' +
      '<h2 class="section-headline">' + esc(w.headline) + '</h2>' +
      '<p class="body-text work-intro">' + esc(w.intro) + '</p>';

    const container = document.getElementById('caseStudies');
    container.innerHTML = w.caseStudies.map(function (cs) {
      const imgClass = cs.images.length > 1 ? 'case-image case-image-trio' : 'case-image';
      const imagesHtml = cs.images.map(function (img) {
        return '<img src="' + esc(img.src) + '" alt="' + esc(img.alt) + '">';
      }).join('');
      const reverseClass = cs.reverse ? ' case-study-reverse' : '';
      return (
        '<article class="case-study reveal' + reverseClass + '">' +
          '<div class="' + imgClass + '">' + imagesHtml + '</div>' +
          '<div class="case-text">' +
            '<span class="case-tag">' + esc(cs.tag) + '</span>' +
            '<h3>' + esc(cs.title) + '</h3>' +
            '<p class="case-field"><strong>Challenge:</strong> ' + esc(cs.challenge) + '</p>' +
            '<p class="case-field"><strong>Approach:</strong> ' + esc(cs.approach) + '</p>' +
            '<p class="case-field"><strong>Tools:</strong> ' + esc(cs.tools) + '</p>' +
            '<p class="case-field"><strong>Outcome:</strong> ' + esc(cs.outcome) + '</p>' +
          '</div>' +
        '</article>'
      );
    }).join('');
  }

  /* ---- 8. Tools & Systems ---- */
  if (typeof siteContent_tools !== 'undefined') {
    const t = siteContent_tools;
    document.getElementById('toolsHeader').innerHTML =
      '<p class="eyebrow">' + esc(t.eyebrow) + '</p>' +
      '<h2 class="section-headline">' + esc(t.headline) + '</h2>';

    const doubled = t.items.concat(t.items);
    document.getElementById('toolsTrack').innerHTML = doubled.map(function (tool) {
      return '<span>' + esc(tool) + '</span>';
    }).join('<span aria-hidden="true" class="tools-divider">/</span>');
  }

  /* ---- 9. Beyond Executive Operations ---- */
  if (typeof siteContent_beyond !== 'undefined') {
    const b = siteContent_beyond;
    document.getElementById('beyondContent').innerHTML =
      '<p class="eyebrow">' + esc(b.eyebrow) + '</p>' +
      '<h2 class="section-subheadline">' + esc(b.headline) + '</h2>' +
      '<p class="body-text">' + esc(b.body) + '</p>' +
      '<a href="#" id="creativePortfolioLink" class="btn btn-outline" target="_blank" rel="noopener">' + esc(b.ctaLabel) + '</a>';
  }

  /* ---- 10. From My Desk ---- */
  if (typeof siteContent_desk !== 'undefined') {
    const d = siteContent_desk;
    document.getElementById('deskHeader').innerHTML =
      '<p class="eyebrow">' + esc(d.eyebrow) + '</p>' +
      '<h2 class="section-headline">' + esc(d.headline) + '</h2>' +
      '<p class="body-text work-intro">' + esc(d.intro) + '</p>';
  }

  if (typeof fromMyDeskItems !== 'undefined') {
    const deskStrip = document.getElementById('deskStrip');
    deskStrip.innerHTML = fromMyDeskItems.map(function (item) {
      const hasLink = item.linkedinUrl && item.linkedinUrl.trim().length > 0;
      const linkHtml = hasLink
        ? '<a href="' + esc(item.linkedinUrl) + '" target="_blank" rel="noopener">Read on LinkedIn</a>'
        : '<span class="desk-pending">Link pending</span>';
      const imageHtml = item.image
        ? '<div class="desk-card-image"><img src="' + esc(item.image) + '" alt="" loading="lazy"></div>'
        : '';
      return (
        '<article class="desk-card">' +
          imageHtml +
          '<span class="desk-category">' + esc(item.category) + '</span>' +
          '<h3>' + esc(item.title) + '</h3>' +
          '<p>' + esc(item.excerpt) + '</p>' +
          '<div class="desk-meta"><span>' + esc(item.date) + '</span>' + linkHtml + '</div>' +
        '</article>'
      );
    }).join('');
  }

  /* ---- 11. Let's Connect ---- */
  if (typeof siteContent_connect !== 'undefined') {
    const c = siteContent_connect;
    document.getElementById('connectContent').innerHTML =
      '<p class="eyebrow eyebrow-light">' + esc(c.eyebrow) + '</p>' +
      '<h2 class="connect-headline">' + esc(c.headline) + '</h2>' +
      '<div class="connect-actions">' +
        '<a href="#" id="bookCallLink" class="btn btn-primary-inverse" target="_blank" rel="noopener">' + esc(c.ctaBookLabel) + '</a>' +
        '<a href="#" id="emailLink" class="btn btn-outline-inverse">' + esc(c.ctaEmailLabel) + '</a>' +
        '<a href="#" id="linkedinLink" class="btn btn-outline-inverse" target="_blank" rel="noopener">' + esc(c.ctaLinkedinLabel) + '</a>' +
      '</div>';
  }

  /* ---- Contact links (shared by Hero, Beyond, and Connect sections) ---- */
  if (typeof contactInfo !== 'undefined') {
    const bookCallLink = document.getElementById('bookCallLink');
    const emailLink = document.getElementById('emailLink');
    const linkedinLink = document.getElementById('linkedinLink');
    const creativeLink = document.getElementById('creativePortfolioLink');
    if (bookCallLink && contactInfo.calendlyUrl) bookCallLink.href = contactInfo.calendlyUrl;
    if (emailLink && contactInfo.email) emailLink.href = 'mailto:' + contactInfo.email;
    if (linkedinLink && contactInfo.linkedinUrl) linkedinLink.href = contactInfo.linkedinUrl;
    if (creativeLink) {
      if (contactInfo.creativePortfolioUrl) {
        creativeLink.href = contactInfo.creativePortfolioUrl;
      } else {
        creativeLink.href = '#';
        creativeLink.addEventListener('click', function (e) {
          e.preventDefault();
          alert('Add your Canva creative portfolio URL in js/content.js (contactInfo.creativePortfolioUrl) to activate this button.');
        });
      }
    }
  }

  /* =========================================================
     MOTION + INTERACTION
     (runs after content is in the DOM)
  ========================================================= */

  /* ---------- Sticky nav state ---------- */
  const header = document.getElementById('siteHeader');
  const onScroll = function () {
    if (window.scrollY > 40) header.classList.add('scrolled');
    else header.classList.remove('scrolled');
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---------- Mobile nav toggle ---------- */
  const navToggle = document.getElementById('navToggle');
  const navMobile = document.getElementById('navMobile');
  if (navToggle && navMobile) {
    navToggle.addEventListener('click', function () {
      const isOpen = navMobile.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
    navMobile.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        navMobile.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ---------- Scroll reveal ---------- */
  const revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && !reduceMotion) {
    const io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.16, rootMargin: '0px 0px -40px 0px' });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('in-view'); });
  }

  /* ---------- Hero portrait parallax (subtle, capped) ---------- */
  const heroImage = document.getElementById('heroImage');
  if (heroImage && !reduceMotion) {
    window.addEventListener('scroll', function () {
      const y = window.scrollY;
      if (y < window.innerHeight) {
        const offset = Math.min(y * 0.08, 40);
        heroImage.style.transform = 'translateY(' + offset + 'px)';
      }
    }, { passive: true });
  }

});
