/* Anonymous analytics for the 40 Tales Fox Smart Link. No cart credentials or guest names are sent. */
(() => {
  'use strict';
  if (window.ZistoAnalytics) return;
  const ENDPOINT = 'https://www.zisto.app/api/track';
  const PROJECT_KEY = 'd007b558-b9d8-487f-b64e-6b9b76b01810';
  const SESSION_KEY = 'fox-analytics-session-v1';
  const VISITOR_KEY = 'fox-analytics-visitor-v1';
  const TTL = 30 * 60 * 1000;
  const optedOut = navigator.globalPrivacyControl === true || navigator.doNotTrack === '1';
  const uuid = () => crypto.randomUUID();
  let visitor = uuid(), session = { id: uuid(), at: Date.now() };
  try {
    visitor = localStorage.getItem(VISITOR_KEY) || visitor;
    if (!optedOut) localStorage.setItem(VISITOR_KEY, visitor);
    const saved = JSON.parse(sessionStorage.getItem(SESSION_KEY));
    if (saved && typeof saved.id === 'string' && Date.now() - saved.at < TTL) session = saved;
  } catch { /* Continue with ephemeral anonymous identifiers. */ }
  const entry = new URL(location.href);
  const sourceHint = (entry.searchParams.get('source') || entry.searchParams.get('utm_source') || '').toLowerCase();
  const source = ['nfc', 'qr'].includes(sourceHint) ? sourceHint : 'direct';
  const cleanUrl = value => { try { const u = new URL(value); return u.origin + u.pathname; } catch { return null; } };
  const ua = navigator.userAgent || '';
  const device = /iPad|Tablet/i.test(ua) ? 'tablet' : /Mobi|Android|iPhone/i.test(ua) ? 'mobile' : 'desktop';
  const browser = /Edg\//.test(ua) ? 'Edge' : /Firefox\//.test(ua) ? 'Firefox' : /Chrome\//.test(ua) ? 'Chrome' : /Safari\//.test(ua) ? 'Safari' : 'Other';
  const os = /Android/.test(ua) ? 'Android' : /iPhone|iPad/.test(ua) ? 'iOS' : /Windows/.test(ua) ? 'Windows' : /Mac/.test(ua) ? 'macOS' : 'Other';
  const allowedActions = new Set(['cart_open','cart_add','cart_remove','cart_clear','cart_waiter_view','group_create','group_join','group_close','group_leave','language_change','menu_category_view','call','email','maps','instagram']);
  const allowedMetadata = ['action','component','product_id','product_name','unit_price_cents','quantity_delta','item_count','distinct_items','shared','mode','menu','category','language','destination'];
  function track(eventType, details = {}) {
    if (optedOut || !['page_view','menu_open','review_open','button_click'].includes(eventType)) return;
    if (eventType === 'button_click' && !allowedActions.has(details.action)) return;
    if (Date.now() - session.at >= TTL) session.id = uuid();
    session.at = Date.now();
    try { if (!optedOut) sessionStorage.setItem(SESSION_KEY, JSON.stringify(session)); } catch {}
    const metadata = { source, language: document.getElementById('home')?.lang || 'el' };
    for (const key of allowedMetadata) {
      const v = details[key];
      if (typeof v === 'string') metadata[key] = v.slice(0, 180);
      else if (typeof v === 'boolean' || (typeof v === 'number' && Number.isFinite(v))) metadata[key] = v;
    }
    const payload = {
      project_key: PROJECT_KEY, event_type: eventType, session_id: session.id, visitor_id: visitor,
      page_url: location.origin + location.pathname + location.hash, page_path: location.pathname,
      referrer: cleanUrl(document.referrer), device_type: device, browser, operating_system: os, metadata
    };
    for (const key of ['utm_source','utm_medium','utm_campaign','utm_content','utm_term']) {
      const value = entry.searchParams.get(key);
      if (value) payload[key] = value.slice(0, 200);
    }
    try {
      fetch(ENDPOINT, { method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload), keepalive: true, credentials: 'omit' }).catch(() => {});
    } catch { /* Analytics must never prevent browsing or cart changes. */ }
  }
  window.ZistoAnalytics = Object.freeze({ track });
  let lastMenu = null;
  function route() {
    const screen = document.getElementById(location.hash.slice(1));
    const menu = screen?.classList.contains('screen') ? screen.id.split('-')[0] : null;
    if (menu && menu !== lastMenu) track('menu_open', { menu, destination: screen.querySelector('h1')?.textContent || menu });
    lastMenu = menu;
  }
  document.addEventListener('click', event => {
    const target = event.target.closest('a,button');
    if (!target) return;
    if (target.matches('.review')) track('review_open', { destination: 'Google Reviews' });
    else if (target.dataset.language) track('button_click', { action: 'language_change', language: target.dataset.language });
    else if (target.closest('.category-bar')) track('button_click', { action: 'menu_category_view', category: target.textContent.trim() });
    else if (target.tagName === 'A') {
      const href = target.getAttribute('href') || '';
      const action = href.startsWith('tel:') ? 'call' : href.startsWith('mailto:') ? 'email' : href.includes('google.com/maps') ? 'maps' : href.includes('instagram.com/') ? 'instagram' : null;
      if (action) track('button_click', { action });
    }
  }, true);
  window.addEventListener('hashchange', route);
  track('page_view');
  route();
})();

