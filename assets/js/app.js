/* =====================================================================
   Qiskit Fall Fest 2026 · QSB|SU — site renderer
   Reads window.SITE_CONTENT (content.js) and builds the whole page.
   Nothing here needs to be edited to change the content of the site.
   ===================================================================== */
(function () {
  "use strict";

  /* ------------------------------------------------------------ UI strings
     Fixed interface labels (buttons, countdown, states). Site content itself
     lives in content.js. */
  const UI = {
    en: {
      register: "Register", program: "Program", menu: "Menu",
      days: "Days", hours: "Hours", minutes: "Min", seconds: "Sec",
      countdownTo: "Countdown to day 1", happeningNow: "Happening now — welcome!",
      finished: "The event has ended. See you at the next one!",
      addToCalendar: "Add to Google Calendar", openMaps: "Open in Google Maps",
      regOpen: "Registration is open", regSoon: "Registration opens soon", regClosed: "Registration is closed",
      opens: "Opens", closes: "Deadline", openForm: "Open the form in a new tab",
      today: "Today", past: "Done", upcoming: "Upcoming",
      teamSize: "Team size", email: "E-mail", website: "Website",
      type_talk: "Talk", type_workshop: "Workshop", type_hackathon: "Hackathon", type_social: "Social", type_break: "Break",
      dateTBA: "Dates to be announced", editSite: "Admin",
      previewBanner: "Preview mode — you are looking at an unsaved draft from the admin panel.",
      loadError: "The site content could not be loaded. Check that content.js exists next to index.html and has no syntax errors (a missing comma or quote). Tip: open admin.html to edit content safely.",
      formMissing: "The registration form link has not been added yet."
    },
    tr: {
      register: "Kayıt ol", program: "Program", menu: "Menü",
      days: "Gün", hours: "Saat", minutes: "Dk", seconds: "Sn",
      countdownTo: "1. güne geri sayım", happeningNow: "Şu anda devam ediyor — hoş geldiniz!",
      finished: "Etkinlik sona erdi. Bir sonrakinde görüşmek üzere!",
      addToCalendar: "Google Takvim'e ekle", openMaps: "Google Haritalar'da aç",
      regOpen: "Kayıtlar açık", regSoon: "Kayıtlar yakında açılıyor", regClosed: "Kayıtlar kapandı",
      opens: "Açılış", closes: "Son tarih", openForm: "Formu yeni sekmede aç",
      today: "Bugün", past: "Geçti", upcoming: "Yaklaşan",
      teamSize: "Takım boyutu", email: "E-posta", website: "Web sitesi",
      type_talk: "Konuşma", type_workshop: "Atölye", type_hackathon: "Hackathon", type_social: "Sosyal", type_break: "Ara",
      dateTBA: "Tarihler yakında duyurulacak", editSite: "Yönetim",
      previewBanner: "Önizleme modu — yönetim panelinden kaydedilmemiş bir taslağa bakıyorsunuz.",
      loadError: "Site içeriği yüklenemedi. content.js dosyasının index.html'in yanında olduğundan ve sözdizimi hatası içermediğinden (eksik virgül/tırnak) emin olun. İpucu: içeriği güvenle düzenlemek için admin.html'i açın.",
      formMissing: "Kayıt formu bağlantısı henüz eklenmedi."
    }
  };

  const ICONS = {
    calendar: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="3"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>',
    pin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12z"/><circle cx="12" cy="10" r="2.5"/></svg>',
    ticket: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9a2 2 0 0 0 2-2V5h14v2a2 2 0 0 0 0 4v2a2 2 0 0 0 0 4v2H5v-2a2 2 0 0 0-2-2z"/><path d="M13 5v14"/></svg>',
    users: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
    learn: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>',
    build: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 14h3M1 9h3M1 14h3"/></svg>',
    connect: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><circle cx="4" cy="6" r="2"/><circle cx="20" cy="6" r="2"/><circle cx="4" cy="18" r="2"/><circle cx="20" cy="18" r="2"/><path d="M6 7l4 3M18 7l-4 3M6 17l4-3M18 17l-4-3"/></svg>',
    check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg>',
    mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg>',
    link: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.5.5l3-3a5 5 0 0 0-7-7l-1.7 1.7"/><path d="M14 11a5 5 0 0 0-7.5-.5l-3 3a5 5 0 0 0 7 7l1.7-1.7"/></svg>',
    arrow: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
    external: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><path d="M15 3h6v6M10 14L21 3"/></svg>',
    menu: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 7h16M4 12h16M4 17h16"/></svg>',
    close: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg>',
    chat: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a8 8 0 0 1-11.6 7.1L4 21l1.9-5.4A8 8 0 1 1 21 12z"/></svg>'
  };

  /* Decorative quantum-circuit line art for the hero (original drawing). */
  const CIRCUIT_SVG = `
  <svg class="circuit" viewBox="0 0 420 150" fill="none" aria-hidden="true">
    <defs><linearGradient id="cg" x1="0" x2="1"><stop offset="0" stop-color="var(--primary)"/><stop offset="1" stop-color="var(--accent)"/></linearGradient></defs>
    <g stroke="rgba(255,255,255,.25)" stroke-width="1.5">
      <path d="M40 35H380M40 75H380M40 115H380"/>
    </g>
    <g font-family="IBM Plex Mono, monospace" font-size="12" fill="rgba(255,255,255,.55)">
      <text x="8" y="39">|0⟩</text><text x="8" y="79">|0⟩</text><text x="8" y="119">|0⟩</text>
    </g>
    <g stroke="url(#cg)" stroke-width="2">
      <rect x="70" y="21" width="28" height="28" rx="6" fill="#0b0a1a"/>
      <rect x="150" y="101" width="28" height="28" rx="6" fill="#0b0a1a"/>
      <rect x="250" y="61" width="28" height="28" rx="6" fill="#0b0a1a"/>
      <path d="M124 35v40"/><circle cx="124" cy="35" r="5" fill="url(#cg)" stroke="none"/><circle cx="124" cy="75" r="9" fill="#0b0a1a"/><path d="M124 66v18M115 75h18"/>
      <path d="M204 75v40"/><circle cx="204" cy="75" r="5" fill="url(#cg)" stroke="none"/><circle cx="204" cy="115" r="9" fill="#0b0a1a"/><path d="M204 106v18M195 115h18"/>
      <rect x="318" y="21" width="30" height="28" rx="6" fill="#0b0a1a"/><path d="M324 43a9 9 0 0 1 18 0"/><path d="M333 43l7-9"/>
      <rect x="318" y="61" width="30" height="28" rx="6" fill="#0b0a1a"/><path d="M324 83a9 9 0 0 1 18 0"/><path d="M333 83l7-9"/>
      <rect x="318" y="101" width="30" height="28" rx="6" fill="#0b0a1a"/><path d="M324 123a9 9 0 0 1 18 0"/><path d="M333 123l7-9"/>
    </g>
    <g font-family="IBM Plex Mono, monospace" font-size="13" fill="#fff" text-anchor="middle">
      <text x="84" y="40">H</text><text x="164" y="120">H</text><text x="264" y="80">T</text>
    </g>
  </svg>`;

  /* ------------------------------------------------------------ state */
  const params = new URLSearchParams(location.search);
  const PREVIEW = params.get("preview") === "1";
  const PREVIEW_KEY = "qff_preview_content";
  let content = null;
  let lang = "en";
  let countdownTimer = null;

  /* ------------------------------------------------------------ helpers */
  const $ = (sel, root) => (root || document).querySelector(sel);
  const ui = (key) => (UI[lang] && UI[lang][key]) || UI.en[key] || key;

  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;").replace(/'/g, "&#39;");
  }
  /* Pick the current language from {en, tr} objects; fall back to English. */
  function t(v) {
    if (v == null) return "";
    if (typeof v === "string" || typeof v === "number") return String(v);
    return v[lang] || v.en || v.tr || Object.values(v).find(Boolean) || "";
  }
  /* Minimal safe formatting: paragraphs (blank line), **bold**, [text](url), line breaks. */
  function md(text) {
    const safe = esc(text);
    return safe.split(/\n{2,}/).map((p) => {
      let html = p
        .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
        .replace(/\[([^\]]+)\]\((https?:\/\/[^)\s]+|mailto:[^)\s]+|#[^)\s]*)\)/g, '<a href="$2" target="_blank" rel="noopener">$1</a>')
        .replace(/\n/g, "<br>");
      return `<p>${html}</p>`;
    }).join("");
  }
  const safeUrl = (u) => {
    u = String(u || "").trim();
    return /^(https?:\/\/|mailto:|tel:|#|\/|\.\/|assets\/)/i.test(u) ? u : "";
  };
  const initials = (name) => String(name || "").split(/\s+/).filter(Boolean).slice(0, 2).map((w) => w[0].toUpperCase()).join("");
  const isPlaceholderUrl = (u) => !u || /REPLACE_WITH|example\.com|YOUR_/i.test(u);

  /* ---- dates (all in the event's timezone, default Istanbul UTC+3) */
  const offset = () => (content.meta && content.meta.utcOffset) || "+03:00";
  const tz = () => (content.meta && content.meta.timezone) || "Europe/Istanbul";
  const locale = () => (lang === "tr" ? "tr-TR" : "en-GB");
  const utcLabel = () => "UTC" + offset().replace(/^([+-])0?(\d+):00$/, "$1$2").replace(/^([+-])0?(\d+):(\d+)$/, "$1$2:$3");
  function atLocal(dateStr, timeStr) {
    if (!dateStr) return null;
    const d = new Date(`${dateStr}T${timeStr || "00:00"}:00${offset()}`);
    return isNaN(d) ? null : d;
  }
  function fmt(dateStr, opts) {
    const d = atLocal(dateStr, "12:00");
    if (!d) return "";
    try { return new Intl.DateTimeFormat(locale(), Object.assign({ timeZone: tz() }, opts)).format(d); }
    catch (e) { return dateStr; }
  }
  const fmtLong = (d) => fmt(d, { weekday: "short", day: "numeric", month: "long", year: "numeric" });
  const fmtShort = (d) => fmt(d, { day: "numeric", month: "short", year: "numeric" });
  const fmtDayMonth = (d) => fmt(d, { day: "numeric", month: "long" });
  const fmtWeekday = (d) => fmt(d, { weekday: "long" });
  function fmtRange(a, b) {
    if (!a) return ui("dateTBA");
    if (!b || a === b) return fmtLong(a);
    const [ya, ma] = a.split("-"); const [yb, mb] = b.split("-");
    if (ya === yb && ma === mb) {
      const da = fmt(a, { day: "numeric" }); const db = fmt(b, { day: "numeric" });
      return `${da}–${db} ${fmt(a, { month: "long", year: "numeric" })}`;
    }
    return `${fmtShort(a)} – ${fmtShort(b)}`;
  }
  function dayState(dateStr) {
    const now = new Date();
    const start = atLocal(dateStr, "00:00"); const end = atLocal(dateStr, "23:59");
    if (!start) return "";
    if (now > end) return "past";
    if (now >= start) return "today";
    return "upcoming";
  }
  const pad = (n) => String(n).padStart(2, "0");
  function gcalUrl(ev) {
    const s = atLocal(ev.startDate, ev.startTime || "09:00");
    const e = atLocal(ev.endDate || ev.startDate, ev.endTime || "18:00");
    if (!s || !e) return "";
    const z = (d) => d.toISOString().replace(/[-:]/g, "").replace(/\.\d{3}/, "");
    const q = new URLSearchParams({
      action: "TEMPLATE",
      text: `${t(ev.name)} · ${t(ev.edition)}`,
      dates: `${z(s)}/${z(e)}`,
      details: t(ev.tagline) + (location.href ? `\n${location.origin}${location.pathname}` : ""),
      location: `${t(ev.venue && ev.venue.name)}, ${t(ev.venue && ev.venue.address)}`
    });
    return `https://calendar.google.com/calendar/render?${q.toString()}`;
  }
  function embedFormUrl(url) {
    url = safeUrl(url);
    if (!url) return "";
    if (/docs\.google\.com\/forms/.test(url) && !/embedded=true/.test(url)) {
      url = url.replace(/\/viewform.*$/, "/viewform");
      return url + (url.includes("?") ? "&" : "?") + "embedded=true";
    }
    return url;
  }

  /* ------------------------------------------------------------ renderers */
  function sectionHead(s, extraClass) {
    return `<div class="section-head ${extraClass || ""}">
      ${s.eyebrow ? `<div class="eyebrow">${esc(t(s.eyebrow))}</div>` : ""}
      <h2>${esc(t(s.title))}</h2>
      ${s.intro ? `<p class="lead">${esc(t(s.intro))}</p>` : ""}
    </div>`;
  }

  function renderNav() {
    const ev = content.event;
    const order = enabledSections().filter((key) => content.sections[key].inNav !== false);
    const links = order.map((key) => {
      const s = content.sections[key];
      return `<li><a href="#${key}">${esc(t(s.navLabel || s.title))}</a></li>`;
    }).join("");
    const langs = (content.meta.languages || ["en", "tr"]);
    return `<nav class="nav" aria-label="Main">
      <div class="container">
        <a class="brand" href="#top">
          ${safeUrl(ev.hostLogo) ? `<img src="${esc(safeUrl(ev.hostLogo))}" alt="" onerror="this.remove()">` : `<span class="brand-mark">QFF</span>`}
          <span class="brand-text">${esc(t(ev.name))}<small>${esc(t(ev.edition))}</small></span>
        </a>
        <ul class="nav-links" id="nav-links">${links}</ul>
        <div class="nav-actions">
          <div class="lang-switch" role="group" aria-label="Language">
            ${langs.map((l) => `<button type="button" data-lang="${l}" aria-pressed="${l === lang}">${l.toUpperCase()}</button>`).join("")}
          </div>
          ${content.sections.registration && content.sections.registration.enabled ? `<a class="btn btn-primary btn-sm" href="#registration">${esc(ui("register"))}</a>` : ""}
          <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="nav-links" aria-label="${esc(ui("menu"))}">${ICONS.menu}</button>
        </div>
      </div>
    </nav>`;
  }

  function renderHero() {
    const ev = content.event;
    const venue = ev.venue || {};
    const cal = gcalUrl(ev);
    const reg = content.sections.registration;
    const sched = content.sections.schedule;
    return `<header class="hero" id="top">
      <div class="container">
        <div>
          <div class="hero-badge"><span class="dot"></span>${esc(t(ev.host))}</div>
          <h1>${esc(t(ev.name))}<br><span>${esc(t(ev.edition))}</span></h1>
          <p class="tagline">${esc(t(ev.tagline))}</p>
          <div class="hero-meta">
            <div>${ICONS.calendar}<span>${esc(fmtRange(ev.startDate, ev.endDate))}${ev.startTime ? `<small>${esc(ev.startTime)}${ev.endTime ? "–" + esc(ev.endTime) : ""} · ${esc(utcLabel())}</small>` : ""}</span></div>
            ${t(venue.name) ? `<div>${ICONS.pin}<span>${esc(t(venue.name))}${t(venue.room) ? `<small>${esc(t(venue.room))}</small>` : ""}</span></div>` : ""}
            ${t(ev.format) ? `<div>${ICONS.ticket}<span>${esc(t(ev.format))}${t(ev.audience) ? `<small>${esc(t(ev.audience))}</small>` : ""}</span></div>` : ""}
          </div>
          <div class="hero-actions">
            ${reg && reg.enabled ? `<a class="btn btn-primary" href="#registration">${esc(t(ev.ctaPrimary) || ui("register"))} ${ICONS.arrow}</a>` : ""}
            ${sched && sched.enabled ? `<a class="btn btn-ghost" href="#schedule">${esc(t(ev.ctaSecondary) || ui("program"))}</a>` : ""}
            ${cal ? `<a class="btn btn-ghost" href="${esc(cal)}" target="_blank" rel="noopener">${ICONS.calendar} ${esc(ui("addToCalendar"))}</a>` : ""}
          </div>
        </div>
        <div class="hero-logo">
          ${safeUrl(ev.logo) ? `<img src="${esc(safeUrl(ev.logo))}" alt="${esc(t(ev.name))}" onerror="this.remove()">` : ""}
          <div class="hero-card">
            <div class="label">${esc(ui("countdownTo"))}</div>
            <div id="countdown"></div>
            ${CIRCUIT_SVG}
          </div>
        </div>
      </div>
    </header>`;
  }

  function renderAbout(s) {
    return `${sectionHead(s)}
      <div class="about-grid">
        <div class="rich">${md(t(s.body))}</div>
        <div>
          ${(s.stats || []).length ? `<div class="stats" style="margin-top:0">${s.stats.map((x) => `<div class="stat"><b>${esc(x.value)}</b><span>${esc(t(x.label))}</span></div>`).join("")}</div>` : ""}
        </div>
      </div>
      ${(s.pillars || []).length ? `<div class="grid grid-3" style="margin-top:36px">${s.pillars.map((p) => `
        <div class="card"><div class="icon-badge">${ICONS[p.icon] || ICONS.learn}</div><h3>${esc(t(p.title))}</h3><p class="muted">${esc(t(p.text))}</p></div>`).join("")}</div>` : ""}`;
  }

  function renderDates(s) {
    const items = (s.items || []).slice().sort((a, b) => String(a.date).localeCompare(String(b.date)));
    return `${sectionHead(s)}
      <ol class="dates-list">${items.map((it) => {
        const state = dayState(it.date);
        const label = state === "today" ? ui("today") : state === "past" ? ui("past") : ui("upcoming");
        return `<li class="date-item ${it.highlight ? "highlight" : ""} ${state}">
          <div class="when"><b>${esc(fmt(it.date, { day: "numeric", month: "long", year: "numeric" }) || it.date)}</b><span>${esc(fmtWeekday(it.date))}${it.time ? ` · ${esc(it.time)}` : ""}</span></div>
          <div class="what"><b>${esc(t(it.label))}</b>${t(it.note) ? `<span>${esc(t(it.note))}</span>` : ""}</div>
          <span class="status ${state === "today" ? "today" : state === "upcoming" && it.highlight ? "soon" : ""}">${esc(label)}</span>
        </li>`;
      }).join("")}</ol>`;
  }

  function renderSchedule(s) {
    const days = s.days || [];
    let activeIdx = days.findIndex((d) => dayState(d.date) === "today");
    if (activeIdx < 0) activeIdx = Math.max(0, days.findIndex((d) => dayState(d.date) !== "past"));
    return `${sectionHead(s)}
      <div class="tabs" role="tablist">${days.map((d, i) => `
        <button class="tab" role="tab" type="button" data-tab="${i}" aria-selected="${i === activeIdx}" aria-controls="day-${i}">${esc(t(d.label))}<small>${esc(fmtLong(d.date))}</small></button>`).join("")}</div>
      ${days.map((d, i) => `<div class="day-panel" id="day-${i}" role="tabpanel" ${i === activeIdx ? "" : "hidden"}>
        <ol class="sched">${(d.items || []).map((it) => `
          <li class="${esc(it.type || "")}">
            <span class="time">${esc(it.start || "")}${it.end ? `–${esc(it.end)}` : ""}</span>
            <span><span class="title">${esc(t(it.title))}</span>${it.speaker || t(it.location) ? `<span class="sub">${[esc(it.speaker), esc(t(it.location))].filter(Boolean).join(" · ")}</span>` : ""}</span>
            ${it.type && it.type !== "break" ? `<span class="chip ${esc(it.type)}">${esc(ui("type_" + it.type))}</span>` : "<span></span>"}
          </li>`).join("")}</ol>
      </div>`).join("")}`;
  }

  function renderTracks(s) {
    return `${sectionHead(s)}
      <div class="grid grid-2">${(s.items || []).map((tr) => `
        <div class="card track">
          ${t(tr.level) ? `<div class="level">${esc(t(tr.level))}</div>` : ""}
          <h3>${esc(t(tr.name))}</h3>
          <p class="muted">${esc(t(tr.description))}</p>
          ${tr.teamSize ? `<div class="meta">${ICONS.users.replace("<svg", '<svg width="18" height="18"')} ${esc(ui("teamSize"))}: <b>${esc(tr.teamSize)}</b></div>` : ""}
        </div>`).join("")}</div>
      ${(s.rules || []).length ? `<div class="rules"><h3>${esc(t(s.rulesTitle))}</h3><ol>${s.rules.map((r) => `<li>${esc(t(r))}</li>`).join("")}</ol></div>` : ""}`;
  }

  function person(p) {
    const photo = safeUrl(p.photo);
    const link = safeUrl(p.link);
    return `<div class="card person">
      ${photo ? `<img class="avatar" src="${esc(photo)}" alt="${esc(p.name)}" onerror="this.outerHTML='<span class=avatar>${esc(initials(p.name))}</span>'">` : `<span class="avatar" aria-hidden="true">${esc(initials(p.name))}</span>`}
      <div><b>${esc(p.name)}</b><span>${esc(t(p.role))}${p.org ? ` · ${esc(p.org)}` : ""}</span>${link ? `<a href="${esc(link)}" target="_blank" rel="noopener">${esc(ui("website"))} ↗</a>` : ""}</div>
    </div>`;
  }
  const renderSpeakers = (s) => `${sectionHead(s)}<div class="grid grid-3">${(s.items || []).map(person).join("")}</div>`;
  const renderOrganizers = (s) => `${sectionHead(s)}<div class="grid grid-2">${(s.items || []).map(person).join("")}</div>`;

  function regStatus(reg) {
    if (isPlaceholderUrl(reg.formUrl)) return "soon";
    if (reg.status && reg.status !== "auto") return reg.status;
    const now = new Date();
    const opens = reg.opens ? atLocal(reg.opens, "00:00") : null;
    const closes = reg.closes ? atLocal(reg.closes, "23:59") : null;
    if (opens && now < opens) return "soon";
    if (closes && now > closes) return "closed";
    return "open";
  }

  function renderRegistration(s) {
    const status = regStatus(s);
    const statusLabel = status === "open" ? ui("regOpen") : status === "closed" ? ui("regClosed") : ui("regSoon");
    const formUrl = safeUrl(s.formUrl);
    let main = "";
    if (status === "open" && formUrl) {
      main = s.embed !== false
        ? `<div class="form-frame"><iframe src="${esc(embedFormUrl(formUrl))}" height="${parseInt(s.embedHeight, 10) || 1400}" loading="lazy" title="${esc(t(s.title))}">…</iframe></div>
           <div class="form-note"><span>${esc(t(s.openNote))}</span><a class="btn btn-ghost btn-sm" href="${esc(formUrl)}" target="_blank" rel="noopener">${esc(ui("openForm"))} ${ICONS.external}</a></div>`
        : `<div class="reg-message"><b>${esc(statusLabel)}</b><a class="btn btn-primary" href="${esc(formUrl)}" target="_blank" rel="noopener">${esc(t(content.event.ctaPrimary) || ui("register"))} ${ICONS.external}</a></div>`;
    } else if (status === "closed") {
      main = `<div class="reg-message"><b>${esc(statusLabel)}</b>${esc(t(s.closedMessage))}</div>`;
    } else {
      main = `<div class="reg-message"><b>${esc(statusLabel)}</b>${esc(t(s.soonMessage))}${PREVIEW && isPlaceholderUrl(s.formUrl) ? `<p class="mono" style="margin-top:12px;font-size:.8rem">⚠ ${esc(ui("formMissing"))}</p>` : ""}</div>`;
    }
    return `${sectionHead(s)}
      <div class="reg-layout">
        <aside class="reg-side">
          <div class="card">
            <div class="reg-status ${status}"><span class="dot"></span>${esc(statusLabel)}</div>
            <div class="reg-dates" style="margin-top:14px">
              ${s.opens ? `<div><span>${esc(ui("opens"))}</span><b>${esc(fmtLong(s.opens))}</b></div>` : ""}
              ${s.closes ? `<div><span>${esc(ui("closes"))}</span><b>${esc(fmtLong(s.closes))}</b></div>` : ""}
            </div>
          </div>
          ${(s.eligibility || []).length ? `<div class="card"><ul class="checklist">${s.eligibility.map((e) => `<li>${ICONS.check}<span>${esc(t(e))}</span></li>`).join("")}</ul></div>` : ""}
        </aside>
        <div>${main}</div>
      </div>`;
  }

  function renderDecade(s) {
    return `${sectionHead(s)}
      <ol class="timeline">${(s.timeline || []).map((x) => `<li><div class="year">${esc(x.year)}</div><p>${esc(t(x.text))}</p></li>`).join("")}</ol>`;
  }

  function renderVenue(s) {
    const v = content.event.venue || {};
    const map = safeUrl(v.mapEmbedUrl);
    return `${sectionHead(s)}
      <div class="venue-grid">
        <div>
          <div class="rich">${md(t(s.body))}</div>
          <div class="address">${ICONS.pin}<div><b>${esc(t(v.name))}</b><span>${esc(t(v.address))}</span></div></div>
          ${(s.directions || []).length ? `<ul class="checklist">${s.directions.map((d) => `<li>${ICONS.check}<span>${esc(t(d))}</span></li>`).join("")}</ul>` : ""}
          ${safeUrl(v.mapUrl) ? `<p style="margin-top:20px"><a class="btn btn-ghost btn-sm" href="${esc(safeUrl(v.mapUrl))}" target="_blank" rel="noopener">${ICONS.pin} ${esc(ui("openMaps"))}</a></p>` : ""}
        </div>
        ${map ? `<div class="map"><iframe src="${esc(map)}" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="${esc(t(v.name))}"></iframe></div>` : ""}
      </div>`;
  }

  const renderFaq = (s) => `${sectionHead(s)}
    <div class="faq">${(s.items || []).map((f) => `<details><summary>${esc(t(f.q))}</summary><div class="answer rich">${md(t(f.a))}</div></details>`).join("")}</div>`;

  function renderPartners(s) {
    return `${sectionHead(s)}
      <div class="partners">${(s.items || []).map((p) => {
        const inner = `${safeUrl(p.logo) ? `<img src="${esc(safeUrl(p.logo))}" alt="${esc(p.name)}" onerror="this.remove()">` : ""}<b>${esc(p.name)}</b>${t(p.tier) ? `<small>${esc(t(p.tier))}</small>` : ""}`;
        return safeUrl(p.link) ? `<a class="partner" href="${esc(safeUrl(p.link))}" target="_blank" rel="noopener">${inner}</a>` : `<div class="partner">${inner}</div>`;
      }).join("")}</div>`;
  }

  const renderConduct = (s) => `${sectionHead(s)}
    <div class="conduct-box">
      <div class="rich">${md(t(s.body))}</div>
      ${safeUrl(s.url) ? `<a class="btn btn-primary" href="${esc(safeUrl(s.url))}" target="_blank" rel="noopener">${esc(t(s.linkLabel))} ${ICONS.external}</a>` : ""}
    </div>`;

  function renderContact(s) {
    const links = [];
    if (s.email && !isPlaceholderUrl(s.email)) links.push(`<a href="mailto:${esc(s.email)}">${ICONS.mail}${esc(s.email)}</a>`);
    if (s.community && safeUrl(s.community.url)) links.push(`<a href="${esc(safeUrl(s.community.url))}" target="_blank" rel="noopener">${ICONS.chat}${esc(t(s.community.label))}</a>`);
    (s.social || []).forEach((so) => { if (safeUrl(so.url)) links.push(`<a href="${esc(safeUrl(so.url))}" target="_blank" rel="noopener">${ICONS.link}${esc(so.name)}</a>`); });
    return `${sectionHead(s)}
      <div class="contact-grid">
        <div class="rich">${md(t(s.body))}</div>
        <div class="contact-links">${links.join("") || (PREVIEW ? `<p class="muted mono" style="font-size:.85rem">⚠ e-mail / links not set yet</p>` : "")}</div>
      </div>`;
  }

  const RENDERERS = {
    about: renderAbout, dates: renderDates, schedule: renderSchedule, tracks: renderTracks,
    speakers: renderSpeakers, registration: renderRegistration, decade: renderDecade, venue: renderVenue,
    faq: renderFaq, organizers: renderOrganizers, partners: renderPartners, conduct: renderConduct, contact: renderContact
  };

  function enabledSections() {
    const order = content.sectionOrder || Object.keys(content.sections);
    return order.filter((k) => content.sections[k] && content.sections[k].enabled !== false && RENDERERS[k]);
  }

  function renderFooter() {
    const f = content.footer || {};
    return `<footer>
      <div class="container">
        <p>${esc(t(f.legal))}</p>
        <div class="credits"><span>${esc(t(f.credits))}</span><a class="admin-link" href="admin.html">${esc(ui("editSite"))} →</a></div>
      </div>
    </footer>`;
  }

  function jsonLd() {
    const ev = content.event; const v = ev.venue || {};
    const data = {
      "@context": "https://schema.org", "@type": "Event",
      name: `${t(ev.name)} · ${t(ev.edition)}`, description: t(ev.tagline),
      startDate: ev.startDate ? `${ev.startDate}T${ev.startTime || "09:00"}:00${offset()}` : undefined,
      endDate: ev.endDate ? `${ev.endDate}T${ev.endTime || "18:00"}:00${offset()}` : undefined,
      eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
      location: { "@type": "Place", name: t(v.name), address: t(v.address) },
      organizer: { "@type": "Organization", name: t(ev.host) },
      isAccessibleForFree: true, url: location.origin + location.pathname
    };
    let el = $("#jsonld");
    if (!el) { el = document.createElement("script"); el.type = "application/ld+json"; el.id = "jsonld"; document.head.appendChild(el); }
    el.textContent = JSON.stringify(data);
  }

  /* ------------------------------------------------------------ page */
  function applyTheme() {
    const th = content.theme || {};
    const root = document.documentElement.style;
    if (th.primary) root.setProperty("--primary", th.primary);
    if (th.accent) root.setProperty("--accent", th.accent);
    if (th.secondary) root.setProperty("--secondary", th.secondary);
  }

  function render() {
    const y = window.scrollY;
    document.documentElement.lang = lang;
    document.title = t(content.meta.siteTitle) || document.title;
    const metaDesc = $('meta[name="description"]');
    if (metaDesc) metaDesc.content = t(content.meta.description);
    applyTheme();

    const a = content.announcement;
    const sections = enabledSections().map((key) => {
      const s = content.sections[key];
      return `<section class="section" id="${key}"><div class="container">${RENDERERS[key](s)}</div></section>`;
    }).join("");

    $("#app").innerHTML = `
      ${PREVIEW ? `<div class="preview-banner">${esc(ui("previewBanner"))}</div>` : ""}
      ${a && a.enabled && t(a.text) ? `<div class="announce">${esc(t(a.text))}${safeUrl(a.link) ? ` <a href="${esc(safeUrl(a.link))}">→</a>` : ""}</div>` : ""}
      ${renderNav()}
      ${renderHero()}
      <main>${sections}</main>
      ${renderFooter()}`;

    bind();
    startCountdown();
    jsonLd();
    window.scrollTo(0, y);
  }

  function bind() {
    const toggle = $(".nav-toggle"); const links = $("#nav-links");
    if (toggle) {
      toggle.addEventListener("click", () => {
        const open = links.classList.toggle("open");
        toggle.setAttribute("aria-expanded", String(open));
        toggle.innerHTML = open ? ICONS.close : ICONS.menu;
      });
      links.addEventListener("click", (e) => { if (e.target.tagName === "A") { links.classList.remove("open"); toggle.setAttribute("aria-expanded", "false"); toggle.innerHTML = ICONS.menu; } });
    }
    document.querySelectorAll("[data-lang]").forEach((b) => b.addEventListener("click", () => setLang(b.dataset.lang)));
    document.querySelectorAll(".tab").forEach((tab) => tab.addEventListener("click", () => {
      document.querySelectorAll(".tab").forEach((x) => x.setAttribute("aria-selected", "false"));
      document.querySelectorAll(".day-panel").forEach((p) => (p.hidden = true));
      tab.setAttribute("aria-selected", "true");
      const panel = $("#day-" + tab.dataset.tab); if (panel) panel.hidden = false;
    }));
  }

  function startCountdown() {
    clearInterval(countdownTimer);
    const box = $("#countdown"); if (!box) return;
    const ev = content.event;
    const start = atLocal(ev.startDate, ev.startTime || "09:00");
    const end = atLocal(ev.endDate || ev.startDate, ev.endTime || "18:00");
    if (!start) { box.innerHTML = `<div class="countdown-done">${esc(ui("dateTBA"))}</div>`; return; }
    const tick = () => {
      const now = new Date();
      if (now >= start && now <= end) { box.innerHTML = `<div class="countdown-done">${esc(ui("happeningNow"))}</div>`; return; }
      if (now > end) { box.innerHTML = `<div class="countdown-done">${esc(ui("finished"))}</div>`; clearInterval(countdownTimer); return; }
      let diff = Math.floor((start - now) / 1000);
      const d = Math.floor(diff / 86400); diff -= d * 86400;
      const h = Math.floor(diff / 3600); diff -= h * 3600;
      const m = Math.floor(diff / 60); const s = diff - m * 60;
      box.innerHTML = `<div class="countdown">
        <div><b>${d}</b><small>${esc(ui("days"))}</small></div><div><b>${pad(h)}</b><small>${esc(ui("hours"))}</small></div>
        <div><b>${pad(m)}</b><small>${esc(ui("minutes"))}</small></div><div><b>${pad(s)}</b><small>${esc(ui("seconds"))}</small></div></div>`;
    };
    tick();
    countdownTimer = setInterval(tick, 1000);
  }

  function setLang(l) {
    lang = l;
    try { localStorage.setItem("qff_lang", l); } catch (e) { /* private mode */ }
    render();
  }

  function detectLang() {
    const langs = content.meta.languages || ["en", "tr"];
    const fromUrl = params.get("lang");
    if (fromUrl && langs.includes(fromUrl)) return fromUrl;
    try { const saved = localStorage.getItem("qff_lang"); if (saved && langs.includes(saved)) return saved; } catch (e) { /* ignore */ }
    const nav = (navigator.language || "en").slice(0, 2).toLowerCase();
    if (content.meta.autoDetectLanguage !== false && langs.includes(nav)) return nav;
    return langs.includes(content.meta.defaultLang) ? content.meta.defaultLang : langs[0];
  }

  function loadContent() {
    if (PREVIEW) {
      try {
        const raw = localStorage.getItem(PREVIEW_KEY);
        if (raw) return JSON.parse(raw);
      } catch (e) { console.warn("Preview draft unreadable", e); }
    }
    return window.SITE_CONTENT || null;
  }

  function boot() {
    content = loadContent();
    if (!content || !content.event || !content.sections) {
      $("#app").innerHTML = `<div class="error-box">${esc(UI.en.loadError)}\n\n${esc(UI.tr.loadError)}</div>`;
      return;
    }
    lang = detectLang();
    render();
    /* Live-refresh the preview tab while the admin panel is editing. */
    if (PREVIEW) window.addEventListener("storage", (e) => { if (e.key === PREVIEW_KEY) { content = loadContent(); render(); } });
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot); else boot();
})();
