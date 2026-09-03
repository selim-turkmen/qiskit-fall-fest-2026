/* =====================================================================
   Qiskit Fall Fest 2026 · QSB|SU — admin panel
   A no-code editor for content.js. Generates every form from SCHEMA,
   previews drafts live in index.html?preview=1, and saves either by
   publishing straight to GitHub (fine-grained token) or by downloading
   a fresh content.js.
   ===================================================================== */
(function () {
  "use strict";

  /* ------------------------------------------------------------ admin UI strings */
  const L = {
    en: {
      panel: "Site admin", subtitle: "Qiskit Fall Fest 2026", unsaved: "Unsaved changes", saved: "All changes saved", loadedLocal: "Editing the local content.js", loadedGit: "Editing the latest version on GitHub",
      preview: "Preview", download: "Download content.js", publish: "Publish to GitHub", settings: "GitHub settings", reload: "Discard changes",
      sections: "Sections", general: "General", other: "Other",
      add: "Add", remove: "Remove", moveUp: "Move up", moveDown: "Move down", duplicate: "Duplicate", upload: "Upload", choose: "Choose file…",
      confirmRemove: "Remove this item?", confirmReload: "Discard all unsaved changes and reload?",
      hidden: "hidden", enabledLbl: "Show this section on the site", inNavLbl: "Show in the navigation menu",
      welcomeTitle: "How this panel works", welcome: "Everything on the website comes from one file, content.js. Edit the fields here, check the result with Preview, then save in one of two ways:",
      w1: "Publish to GitHub — one click; the site updates in about a minute. Needs a GitHub token (see Settings).",
      w2: "Download content.js — then upload it to the repository (GitHub → Add file → Upload files) or hand it to whoever deploys the site.",
      w3: "Quick text fix without this panel: open content.js in the GitHub web editor and edit it there.",
      dismiss: "Got it", readme: "Full guide (README)",
      ghTitle: "GitHub settings", ghHelp: "Publishing commits content.js straight to the repository behind the site. Use a fine-grained personal access token limited to this repository with “Contents: Read and write”. The token stays in this browser only.",
      owner: "Repository owner (user or organization)", repo: "Repository name", branch: "Branch", path: "Content file path", token: "Personal access token", remember: "Remember the token on this device", test: "Test connection", save: "Save", cancel: "Cancel", close: "Close",
      testOk: "Connected — you can push to this repository.", testNoPush: "Connected, but this token cannot write to the repository.", testFail: "Could not connect: ",
      tokenHelp: "GitHub → Settings → Developer settings → Personal access tokens → Fine-grained tokens → Generate. Repository access: only this repository. Permissions: Contents → Read and write.",
      publishing: "Publishing…", published: "Published! GitHub Pages usually updates within 1–2 minutes.", publishFail: "Publishing failed: ", needSettings: "Add the repository and a token in GitHub settings first.",
      conflict: "The file changed on GitHub since you loaded it. Reload the page, then redo your edits.",
      loadingGit: "Loading the latest content from GitHub…", loadGitFail: "Could not load content from GitHub (using the local file instead): ",
      uploadOk: "Image uploaded and linked.", uploadFail: "Upload failed: ", uploadNeedsGit: "Image upload needs GitHub settings with a token. Alternatively, add the file to assets/img/ yourself and type its path here.",
      tooBig: "Please use an image under 2 MB.", previewHint: "The preview opens in a new tab and updates live while you type.",
      warnTitle: "Before publishing, please check:", warnGo: "Publish anyway", commit: "Update site content via admin panel",
      validation: {
        dates: "The event end date is before the start date.",
        form: "The registration form link is still the placeholder — registration will show as “opens soon”.",
        email: "The contact e-mail is still the placeholder.",
        placeholders: "Some team members are still named “Name Surname”.",
        noSections: "No sections are enabled."
      },
      types: { talk: "Talk", workshop: "Workshop", hackathon: "Hackathon", break: "Break", social: "Social" },
      icons: { learn: "Learn (book)", build: "Build (chip)", connect: "Connect (network)", users: "People" },
      status: { auto: "Automatic (from the dates)", open: "Force open", closed: "Force closed", soon: "Force “opens soon”" },
      langs: { en: "English", tr: "Turkish" },
      orderTitle: "Section order & visibility", orderDesc: "Sections appear on the site in this order. Turn a section off to hide it completely; uncheck “menu” to keep it on the page but out of the navigation bar.",
      menu: "menu", visible: "visible"
    },
    tr: {
      panel: "Site yönetimi", subtitle: "Qiskit Fall Fest 2026", unsaved: "Kaydedilmemiş değişiklikler", saved: "Tüm değişiklikler kaydedildi", loadedLocal: "Yerel content.js düzenleniyor", loadedGit: "GitHub'daki güncel sürüm düzenleniyor",
      preview: "Önizle", download: "content.js indir", publish: "GitHub'a yayınla", settings: "GitHub ayarları", reload: "Değişiklikleri at",
      sections: "Bölümler", general: "Genel", other: "Diğer",
      add: "Ekle", remove: "Sil", moveUp: "Yukarı taşı", moveDown: "Aşağı taşı", duplicate: "Çoğalt", upload: "Yükle", choose: "Dosya seç…",
      confirmRemove: "Bu öğe silinsin mi?", confirmReload: "Kaydedilmemiş tüm değişiklikler atılıp sayfa yenilensin mi?",
      hidden: "gizli", enabledLbl: "Bu bölümü sitede göster", inNavLbl: "Menüde göster",
      welcomeTitle: "Bu panel nasıl çalışır?", welcome: "Sitedeki her şey tek bir dosyadan gelir: content.js. Buradaki alanları düzenleyin, sonucu Önizle ile kontrol edin, sonra iki yoldan biriyle kaydedin:",
      w1: "GitHub'a yayınla — tek tık; site yaklaşık bir dakikada güncellenir. GitHub token'ı gerekir (Ayarlar'a bakın).",
      w2: "content.js indir — sonra depoya yükleyin (GitHub → Add file → Upload files) ya da siteyi yayınlayan kişiye verin.",
      w3: "Panelsiz hızlı düzeltme: content.js dosyasını GitHub web editöründe açıp orada düzenleyin.",
      dismiss: "Anladım", readme: "Tam rehber (README)",
      ghTitle: "GitHub ayarları", ghHelp: "Yayınlama, content.js dosyasını doğrudan sitenin deposuna commit eder. Yalnızca bu depoya yetkili, “Contents: Read and write” izinli bir fine-grained personal access token kullanın. Token sadece bu tarayıcıda kalır.",
      owner: "Depo sahibi (kullanıcı veya organizasyon)", repo: "Depo adı", branch: "Dal (branch)", path: "İçerik dosyası yolu", token: "Personal access token", remember: "Token'ı bu cihazda hatırla", test: "Bağlantıyı test et", save: "Kaydet", cancel: "Vazgeç", close: "Kapat",
      testOk: "Bağlandı — bu depoya yazabilirsiniz.", testNoPush: "Bağlandı ama bu token depoya yazamıyor.", testFail: "Bağlanılamadı: ",
      tokenHelp: "GitHub → Settings → Developer settings → Personal access tokens → Fine-grained tokens → Generate. Repository access: sadece bu depo. Permissions: Contents → Read and write.",
      publishing: "Yayınlanıyor…", published: "Yayınlandı! GitHub Pages genellikle 1–2 dakika içinde güncellenir.", publishFail: "Yayınlama başarısız: ", needSettings: "Önce GitHub ayarlarına depo bilgisi ve token ekleyin.",
      conflict: "Dosya siz yükledikten sonra GitHub'da değişti. Sayfayı yenileyin ve düzenlemelerinizi tekrar yapın.",
      loadingGit: "GitHub'daki güncel içerik yükleniyor…", loadGitFail: "GitHub'dan içerik yüklenemedi (yerel dosya kullanılıyor): ",
      uploadOk: "Görsel yüklendi ve bağlandı.", uploadFail: "Yükleme başarısız: ", uploadNeedsGit: "Görsel yüklemek için token'lı GitHub ayarları gerekir. Alternatif: dosyayı assets/img/ klasörüne kendiniz ekleyip yolunu buraya yazın.",
      tooBig: "Lütfen 2 MB'tan küçük bir görsel kullanın.", previewHint: "Önizleme yeni sekmede açılır ve siz yazdıkça canlı güncellenir.",
      warnTitle: "Yayınlamadan önce lütfen kontrol edin:", warnGo: "Yine de yayınla", commit: "Site içeriği yönetim panelinden güncellendi",
      validation: {
        dates: "Etkinlik bitiş tarihi başlangıçtan önce.",
        form: "Kayıt formu bağlantısı hâlâ örnek değer — kayıt bölümü “yakında açılıyor” olarak görünecek.",
        email: "İletişim e-postası hâlâ örnek değer.",
        placeholders: "Bazı ekip üyeleri hâlâ “Name Surname” olarak duruyor.",
        noSections: "Hiçbir bölüm açık değil."
      },
      types: { talk: "Konuşma", workshop: "Atölye", hackathon: "Hackathon", break: "Ara", social: "Sosyal" },
      icons: { learn: "Öğren (kitap)", build: "Üret (çip)", connect: "Bağlan (ağ)", users: "Kişiler" },
      status: { auto: "Otomatik (tarihlere göre)", open: "Zorla açık", closed: "Zorla kapalı", soon: "Zorla “yakında açılıyor”" },
      langs: { en: "İngilizce", tr: "Türkçe" },
      orderTitle: "Bölüm sırası ve görünürlük", orderDesc: "Bölümler sitede bu sırayla görünür. Bir bölümü kapatırsanız tamamen gizlenir; “menü” işaretini kaldırırsanız sayfada kalır ama menüde görünmez.",
      menu: "menü", visible: "görünür"
    }
  };

  /* ------------------------------------------------------------ schema helpers */
  const lbl = (en, tr) => ({ en, tr });
  const i18n = (label, help) => ({ type: "i18n", label, help });
  const i18nLong = (label, help) => ({ type: "i18nLong", label, help });
  const text = (label, help) => ({ type: "text", label, help });
  const url = (label, help) => ({ type: "url", label, help });
  const date = (label, help) => ({ type: "date", label, help });
  const time = (label, help) => ({ type: "time", label, help });
  const number = (label, help) => ({ type: "number", label, help });
  const bool = (label, help, dflt) => ({ type: "bool", label, help, default: dflt === undefined ? false : dflt });
  const color = (label, help) => ({ type: "color", label, help });
  const image = (label, help) => ({ type: "image", label, help });
  const select = (label, options, help, dict) => ({ type: "select", label, options, help, dict });
  const list = (label, item, summary, help) => ({ type: "list", label, item, summary, help });
  const f = (path, schema) => Object.assign({ path }, schema);

  const sumI18n = (key) => (it) => (it && it[key] && (it[key].en || it[key].tr)) || "";
  const sumText = (key) => (it) => (it && it[key]) || "";

  const personItem = (withOrg) => Object.assign({
    name: text(lbl("Name", "Ad Soyad")),
    role: i18n(lbl("Role / title", "Görev / unvan"))
  }, withOrg ? { org: text(lbl("Organization", "Kurum")) } : {}, {
    photo: image(lbl("Photo", "Fotoğraf"), lbl("Square photos look best. Leave empty to show initials.", "Kare fotoğraflar en iyi görünür. Boş bırakılırsa baş harfler gösterilir.")),
    link: url(lbl("Profile link (LinkedIn etc.)", "Profil bağlantısı (LinkedIn vb.)"))
  });

  /* Common fields every section has. */
  const sectionCommon = (key, withIntro) => [
    f(`sections.${key}.enabled`, bool(lbl("Show this section on the site", "Bu bölümü sitede göster"), null, true)),
    f(`sections.${key}.inNav`, bool(lbl("Show in the navigation menu", "Menüde göster"), null, true)),
    f(`sections.${key}.navLabel`, i18n(lbl("Menu label", "Menü etiketi"))),
    f(`sections.${key}.eyebrow`, i18n(lbl("Small label above the title", "Başlık üstü küçük etiket"))),
    f(`sections.${key}.title`, i18n(lbl("Title", "Başlık"))),
    ...(withIntro ? [f(`sections.${key}.intro`, i18nLong(lbl("Intro text", "Giriş metni")))] : [])
  ];

  const SECTION_FIELDS = {
    about: [
      f("sections.about.body", i18nLong(lbl("Body text", "Metin"), lbl("Blank line = new paragraph. **bold** and [link text](https://…) are supported.", "Boş satır = yeni paragraf. **kalın** ve [bağlantı metni](https://…) desteklenir."))),
      f("sections.about.stats", list(lbl("Numbers (stats)", "Rakamlar"), { value: text(lbl("Number", "Rakam")), label: i18n(lbl("Label", "Etiket")) }, sumText("value"))),
      f("sections.about.pillars", list(lbl("Three pillars", "Üç sütun"), { icon: select(lbl("Icon", "Simge"), ["learn", "build", "connect", "users"], null, "icons"), title: i18n(lbl("Title", "Başlık")), text: i18n(lbl("Text", "Metin")) }, sumI18n("title")))
    ],
    dates: [
      f("sections.dates.items", list(lbl("Key dates", "Önemli tarihler"), {
        label: i18n(lbl("What happens", "Ne oluyor")),
        date: date(lbl("Date", "Tarih")),
        time: time(lbl("Time (optional)", "Saat (isteğe bağlı)")),
        note: i18n(lbl("Note", "Not")),
        highlight: bool(lbl("Highlight this date", "Bu tarihi vurgula"))
      }, sumI18n("label"), lbl("Sorted by date automatically.", "Tarihe göre otomatik sıralanır.")))
    ],
    schedule: [
      f("sections.schedule.days", list(lbl("Days", "Günler"), {
        label: i18n(lbl("Day label", "Gün etiketi")),
        date: date(lbl("Date", "Tarih")),
        items: list(lbl("Sessions", "Oturumlar"), {
          start: time(lbl("Start", "Başlangıç")),
          end: time(lbl("End", "Bitiş")),
          type: select(lbl("Type", "Tür"), ["talk", "workshop", "hackathon", "break", "social"], null, "types"),
          title: i18n(lbl("Title", "Başlık")),
          speaker: text(lbl("Speaker / host", "Konuşmacı / yürütücü")),
          location: i18n(lbl("Room / location", "Salon / yer"))
        }, (it) => `${it.start || ""} ${sumI18n("title")(it)}`)
      }, sumI18n("label")))
    ],
    tracks: [
      f("sections.tracks.items", list(lbl("Tracks", "Parkurlar"), {
        name: i18n(lbl("Track name", "Parkur adı")),
        level: i18n(lbl("Level", "Seviye")),
        teamSize: text(lbl("Team size", "Takım boyutu")),
        description: i18nLong(lbl("Description", "Açıklama"))
      }, sumI18n("name"))),
      f("sections.tracks.rulesTitle", i18n(lbl("Rules title", "Kurallar başlığı"))),
      f("sections.tracks.rules", list(lbl("Rules", "Kurallar"), { en: text(lbl("English", "İngilizce")), tr: text(lbl("Turkish", "Türkçe")) }, (it) => it.en || it.tr || ""))
    ],
    speakers: [
      f("sections.speakers.items", list(lbl("Speakers & mentors", "Konuşmacılar ve mentorlar"), personItem(true), sumText("name")))
    ],
    registration: [
      f("sections.registration.formUrl", url(lbl("Google Form link", "Google Form bağlantısı"), lbl("Paste the form's share link (…/viewform). It is embedded automatically. Airtable/Luma links also work (opened via a button).", "Formun paylaşım bağlantısını yapıştırın (…/viewform). Otomatik gömülür. Airtable/Luma bağlantıları da çalışır (düğmeyle açılır)."))),
      f("sections.registration.opens", date(lbl("Registration opens", "Kayıt açılış tarihi"))),
      f("sections.registration.closes", date(lbl("Registration deadline", "Son kayıt tarihi"))),
      f("sections.registration.status", select(lbl("Status", "Durum"), ["auto", "open", "closed", "soon"], null, "status")),
      f("sections.registration.embed", bool(lbl("Embed the form in the page (otherwise show a button)", "Formu sayfaya göm (aksi halde düğme göster)"))),
      f("sections.registration.embedHeight", number(lbl("Embedded form height (px)", "Gömülü form yüksekliği (px)"))),
      f("sections.registration.eligibility", list(lbl("Checklist next to the form", "Formun yanındaki liste"), { en: text(lbl("English", "İngilizce")), tr: text(lbl("Turkish", "Türkçe")) }, (it) => it.en || it.tr || "")),
      f("sections.registration.soonMessage", i18nLong(lbl("Message before registration opens", "Kayıt açılmadan önceki mesaj"))),
      f("sections.registration.closedMessage", i18nLong(lbl("Message after the deadline", "Son tarihten sonraki mesaj"))),
      f("sections.registration.openNote", i18n(lbl("Small note under the form", "Formun altındaki küçük not")))
    ],
    decade: [
      f("sections.decade.timeline", list(lbl("Timeline", "Zaman çizelgesi"), { year: text(lbl("Year", "Yıl")), text: i18n(lbl("Text", "Metin")) }, sumText("year")))
    ],
    venue: [
      f("sections.venue.body", i18nLong(lbl("Text", "Metin"))),
      f("sections.venue.directions", list(lbl("How to get there (bullets)", "Ulaşım (maddeler)"), { en: text(lbl("English", "İngilizce")), tr: text(lbl("Turkish", "Türkçe")) }, (it) => it.en || it.tr || "")),
      f("event.venue.name", i18n(lbl("Venue name", "Mekân adı"))),
      f("event.venue.room", i18n(lbl("Building / room", "Bina / salon"))),
      f("event.venue.address", i18n(lbl("Address", "Adres"))),
      f("event.venue.mapUrl", url(lbl("Google Maps link", "Google Haritalar bağlantısı"))),
      f("event.venue.mapEmbedUrl", url(lbl("Map embed link", "Harita gömme bağlantısı"), lbl("Google Maps → Share → Embed a map → copy only the src=\"…\" address. Leave empty to hide the map.", "Google Haritalar → Paylaş → Harita yerleştir → yalnızca src=\"…\" adresini kopyalayın. Boş bırakılırsa harita gizlenir.")))
    ],
    faq: [
      f("sections.faq.items", list(lbl("Questions", "Sorular"), { q: i18n(lbl("Question", "Soru")), a: i18nLong(lbl("Answer", "Cevap")) }, sumI18n("q")))
    ],
    organizers: [
      f("sections.organizers.items", list(lbl("Team members", "Ekip üyeleri"), personItem(false), sumText("name")))
    ],
    partners: [
      f("sections.partners.items", list(lbl("Partners & sponsors", "Partnerler ve sponsorlar"), {
        name: text(lbl("Name", "Ad")),
        tier: i18n(lbl("Tier / role", "Kategori / rol")),
        logo: image(lbl("Logo", "Logo"), lbl("PNG/SVG with transparent background looks best.", "Şeffaf arka planlı PNG/SVG en iyi görünür.")),
        link: url(lbl("Website", "Web sitesi"))
      }, sumText("name")))
    ],
    conduct: [
      f("sections.conduct.body", i18nLong(lbl("Text", "Metin"))),
      f("sections.conduct.url", url(lbl("Code of Conduct link", "Davranış Kuralları bağlantısı"))),
      f("sections.conduct.linkLabel", i18n(lbl("Button label", "Düğme etiketi")))
    ],
    contact: [
      f("sections.contact.body", i18nLong(lbl("Text", "Metin"))),
      f("sections.contact.email", text(lbl("E-mail address", "E-posta adresi"))),
      f("sections.contact.community.label", i18n(lbl("Community group button label", "Topluluk grubu düğme etiketi"))),
      f("sections.contact.community.url", url(lbl("Community group link (WhatsApp / Discord)", "Topluluk grubu bağlantısı (WhatsApp / Discord)"))),
      f("sections.contact.social", list(lbl("Social links", "Sosyal medya bağlantıları"), { name: text(lbl("Platform", "Platform")), url: url(lbl("Link", "Bağlantı")) }, sumText("name"), lbl("Empty links are hidden on the site.", "Boş bağlantılar sitede gizlenir.")))
    ]
  };
  const SECTION_HAS_INTRO = { about: false, dates: true, schedule: true, tracks: true, speakers: true, registration: true, decade: true, venue: false, faq: false, organizers: true, partners: false, conduct: false, contact: false };
  const SECTION_ICONS = { about: "ℹ️", dates: "📅", schedule: "🗓️", tracks: "🏁", speakers: "🎤", registration: "📝", decade: "🕰️", venue: "📍", faq: "❓", organizers: "👥", partners: "🤝", conduct: "🛡️", contact: "✉️" };

  const GENERAL_GROUPS = [
    {
      id: "event", icon: "🎯", label: lbl("Event basics", "Etkinlik bilgileri"),
      desc: lbl("Name, dates, place and the big buttons in the header.", "Ad, tarihler, yer ve üst bölümdeki büyük düğmeler."),
      fields: [
        f("event.name", i18n(lbl("Event name", "Etkinlik adı"))),
        f("event.edition", i18n(lbl("Edition (second line of the title)", "Edisyon (başlığın ikinci satırı)"))),
        f("event.host", i18n(lbl("Host (badge above the title)", "Ev sahibi (başlık üstü rozet)"))),
        f("event.tagline", i18nLong(lbl("Tagline", "Slogan"))),
        f("event.startDate", date(lbl("Start date", "Başlangıç tarihi"))),
        f("event.endDate", date(lbl("End date", "Bitiş tarihi"))),
        f("event.startTime", time(lbl("Start time (day 1)", "Başlangıç saati (1. gün)"))),
        f("event.endTime", time(lbl("End time (last day)", "Bitiş saati (son gün)"))),
        f("event.format", i18n(lbl("Format line", "Format satırı"), lbl("e.g. In person · Free of charge", "örn. Yüz yüze · Ücretsiz"))),
        f("event.audience", i18n(lbl("Audience line", "Hedef kitle satırı"))),
        f("event.ctaPrimary", i18n(lbl("Primary button text", "Ana düğme metni"))),
        f("event.ctaSecondary", i18n(lbl("Secondary button text", "İkincil düğme metni")))
      ]
    },
    {
      id: "announcement", icon: "📣", label: lbl("Announcement bar", "Duyuru çubuğu"),
      desc: lbl("The thin bar at the very top of the site.", "Sitenin en üstündeki ince şerit."),
      fields: [
        f("announcement.enabled", bool(lbl("Show the announcement bar", "Duyuru çubuğunu göster"))),
        f("announcement.text", i18n(lbl("Text", "Metin"))),
        f("announcement.link", url(lbl("Link (optional)", "Bağlantı (isteğe bağlı)")))
      ]
    },
    {
      id: "design", icon: "🎨", label: lbl("Logos & colors", "Logolar ve renkler"),
      desc: lbl("Official Fall Fest logo from IBM's host kit, the club logo and the three theme colors.", "IBM'in ev sahibi kitinden resmi Fall Fest logosu, kulüp logosu ve üç tema rengi."),
      fields: [
        f("event.logo", image(lbl("Fall Fest 2026 logo (shown in the header)", "Fall Fest 2026 logosu (üst bölümde gösterilir)"), lbl("Use the official 2026 logo from the Qiskit Fall Fest host kit. Leave empty until you have it.", "Qiskit Fall Fest ev sahibi kitindeki resmi 2026 logosunu kullanın. Elinizde yoksa boş bırakın."))),
        f("event.hostLogo", image(lbl("Club logo (navigation bar)", "Kulüp logosu (menü çubuğu)"))),
        f("theme.primary", color(lbl("Primary color", "Ana renk"))),
        f("theme.accent", color(lbl("Accent color", "Vurgu rengi"))),
        f("theme.secondary", color(lbl("Secondary color", "İkincil renk")))
      ]
    },
    {
      id: "seo", icon: "🔎", label: lbl("Browser title & sharing", "Tarayıcı başlığı ve paylaşım"),
      desc: lbl("Title and description used by browsers and search engines. (Social preview tags live in index.html.)", "Tarayıcıların ve arama motorlarının kullandığı başlık ve açıklama. (Sosyal medya önizleme etiketleri index.html içindedir.)"),
      fields: [
        f("meta.siteTitle", i18n(lbl("Browser tab title", "Tarayıcı sekmesi başlığı"))),
        f("meta.description", i18nLong(lbl("Description", "Açıklama"))),
        f("meta.defaultLang", select(lbl("Default language", "Varsayılan dil"), ["en", "tr"], lbl("Visitors whose browser is Turkish see Turkish automatically; others see this language.", "Tarayıcısı Türkçe olan ziyaretçiler otomatik Türkçe görür; diğerleri bu dili görür."), "langs"))
      ]
    },
    {
      id: "footer", icon: "⬇️", label: lbl("Footer", "Alt bilgi"),
      desc: lbl("Legal note and credits at the bottom of the page.", "Sayfanın altındaki yasal not ve künye."),
      fields: [
        f("footer.legal", i18nLong(lbl("Legal note", "Yasal not"))),
        f("footer.credits", i18n(lbl("Credits line", "Künye satırı")))
      ]
    }
  ];

  /* ------------------------------------------------------------ state */
  const PREVIEW_KEY = "qff_preview_content";
  const SETTINGS_KEY = "qff_admin_github";
  const TOKEN_KEY = "qff_admin_token";
  let content = null;
  let original = "";
  let current = "event";
  let ulang = "en";
  let loadedSha = null;
  let source = "local";
  const listSchemas = {};
  let previewWin = null;

  const $ = (s, r) => (r || document).querySelector(s);
  const T = (v) => (v == null ? "" : typeof v === "string" ? v : v[ulang] || v.en || "");
  const S = (key) => { const parts = key.split("."); let o = L[ulang]; for (const p of parts) o = o && o[p]; if (o == null) { o = L.en; for (const p of parts) o = o && o[p]; } return o == null ? key : o; };
  const esc = (s) => String(s == null ? "" : s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
  const deepClone = (o) => JSON.parse(JSON.stringify(o));

  function getPath(obj, path) { return path.split(".").reduce((o, k) => (o == null ? undefined : o[k]), obj); }
  function setPath(obj, path, value) {
    const keys = path.split("."); let o = obj;
    for (let i = 0; i < keys.length - 1; i++) {
      const k = keys[i]; const next = keys[i + 1];
      if (o[k] == null || typeof o[k] !== "object") o[k] = /^\d+$/.test(next) ? [] : {};
      o = o[k];
    }
    o[keys[keys.length - 1]] = value;
  }
  function ensurePath(obj, path, schema) {
    if (getPath(obj, path) === undefined) setPath(obj, path, defaultFor(schema));
  }
  function defaultFor(schema) {
    if (schema.default !== undefined) return schema.default;
    switch (schema.type) {
      case "i18n": case "i18nLong": return { en: "", tr: "" };
      case "bool": return false;
      case "number": return "";
      case "list": return [];
      case "select": return schema.options[0];
      case "color": return "#8a3ffc";
      default: return "";
    }
  }
  function newItem(itemSchema) { const o = {}; Object.keys(itemSchema).forEach((k) => { o[k] = defaultFor(itemSchema[k]); }); return o; }

  /* ------------------------------------------------------------ serialization */
  const HEADER = `// =====================================================================
//  Qiskit Fall Fest 2026 · QSB|SU — SITE CONTENT
// ---------------------------------------------------------------------
//  Everything visible on the website lives in this single file.
//  The easiest way to change it is the admin panel:  admin.html
//  (it edits this file for you and can publish straight to GitHub).
//
//  If you edit by hand:
//   • Every text has an English ("en") and a Turkish ("tr") version.
//   • Dates are written as YYYY-MM-DD, times as HH:MM (24h, Istanbul time).
//   • Leave a link empty ("") to hide it. Set "enabled": false to hide a section.
//   • Keep the commas and quotes exactly as they are — a missing comma
//     breaks the whole site. When in doubt, use admin.html instead.
// =====================================================================
`;
  const serialize = (c) => HEADER + "window.SITE_CONTENT = " + JSON.stringify(c, null, 2) + ";\n";
  function parseContentJs(text) {
    const w = {};
    new Function("window", text + "\n;return window.SITE_CONTENT;")(w);
    const obj = w.SITE_CONTENT;
    if (!obj || !obj.sections) throw new Error("content.js has no SITE_CONTENT");
    return obj;
  }
  const b64encode = (str) => { const bytes = new TextEncoder().encode(str); let bin = ""; for (let i = 0; i < bytes.length; i += 0x8000) bin += String.fromCharCode.apply(null, bytes.subarray(i, i + 0x8000)); return btoa(bin); };
  const b64decode = (b64) => { const bin = atob(b64.replace(/\s/g, "")); const bytes = Uint8Array.from(bin, (c) => c.charCodeAt(0)); return new TextDecoder().decode(bytes); };

  /* ------------------------------------------------------------ GitHub */
  function settings() {
    let s = {};
    try { s = JSON.parse(localStorage.getItem(SETTINGS_KEY) || "{}"); } catch (e) { /* ignore */ }
    let token = "";
    try { token = localStorage.getItem(TOKEN_KEY) || sessionStorage.getItem(TOKEN_KEY) || ""; } catch (e) { /* ignore */ }
    if (!s.owner && /\.github\.io$/.test(location.hostname)) {
      /* Sensible defaults when the panel is served from GitHub Pages. */
      s.owner = location.hostname.replace(/\.github\.io$/, "");
      const seg = location.pathname.split("/").filter(Boolean);
      s.repo = seg.length > 1 || (seg.length === 1 && !/\.html?$/.test(seg[0])) ? seg[0] : `${s.owner}.github.io`;
    }
    return { owner: s.owner || "", repo: s.repo || "", branch: s.branch || "main", path: s.path || "content.js", token, remember: !!s.remember };
  }
  function saveSettings(s) {
    try {
      localStorage.setItem(SETTINGS_KEY, JSON.stringify({ owner: s.owner, repo: s.repo, branch: s.branch, path: s.path, remember: s.remember }));
      localStorage.removeItem(TOKEN_KEY); sessionStorage.removeItem(TOKEN_KEY);
      if (s.token) (s.remember ? localStorage : sessionStorage).setItem(TOKEN_KEY, s.token);
    } catch (e) { /* ignore */ }
  }
  const ghReady = () => { const s = settings(); return s.owner && s.repo && s.token; };
  async function gh(path, opts) {
    const s = settings(); opts = opts || {};
    const headers = Object.assign({ Accept: "application/vnd.github+json", "X-GitHub-Api-Version": "2022-11-28" }, opts.headers || {});
    if (s.token) headers.Authorization = "Bearer " + s.token;
    if (opts.body) headers["Content-Type"] = "application/json";
    const base = `https://api.github.com/repos/${encodeURIComponent(s.owner)}/${encodeURIComponent(s.repo)}`;
    const res = await fetch(path ? `${base}/${path}` : base, { method: opts.method || "GET", headers, body: opts.body ? JSON.stringify(opts.body) : undefined });
    let data = null; try { data = await res.json(); } catch (e) { /* no body */ }
    if (!res.ok) { const err = new Error((data && data.message) || `HTTP ${res.status}`); err.status = res.status; throw err; }
    return data;
  }
  const encPath = (p) => p.split("/").map(encodeURIComponent).join("/");
  async function ghGetFile(path) {
    const s = settings();
    return gh(`contents/${encPath(path)}?ref=${encodeURIComponent(s.branch)}&t=${Date.now()}`);
  }
  async function ghPutFile(path, base64, message, sha) {
    const s = settings();
    const body = { message, content: base64, branch: s.branch };
    if (sha) body.sha = sha;
    return gh(`contents/${encPath(path)}`, { method: "PUT", body });
  }
  async function loadFromGitHub() {
    const s = settings();
    if (!s.owner || !s.repo) return false;
    toast(S("loadingGit"));
    try {
      const file = await ghGetFile(s.path);
      const parsed = parseContentJs(b64decode(file.content));
      content = parsed; original = JSON.stringify(content); loadedSha = file.sha; source = "github";
      hideToast();
      return true;
    } catch (e) {
      toast(S("loadGitFail") + e.message, "err", 6000);
      return false;
    }
  }
  async function publish(force) {
    if (!ghReady()) { openSettings(); toast(S("needSettings"), "err"); return; }
    if (!force) { const warnings = validate(); if (warnings.length) { openWarnings(warnings); return; } }
    const s = settings();
    const btn = $("#btn-publish"); btn.disabled = true; btn.textContent = S("publishing");
    try {
      /* Always fetch the current sha to avoid overwriting someone else's edit. */
      let sha = null;
      try { const cur = await ghGetFile(s.path); sha = cur.sha; } catch (e) { if (e.status !== 404) throw e; }
      if (loadedSha && sha && sha !== loadedSha && source === "github") { throw Object.assign(new Error(S("conflict")), { conflict: true }); }
      const res = await ghPutFile(s.path, b64encode(serialize(content)), S("commit"), sha);
      loadedSha = res.content && res.content.sha; original = JSON.stringify(content); source = "github";
      const link = res.commit && res.commit.html_url;
      toast(`${S("published")}${link ? ` <a href="${esc(link)}" target="_blank" rel="noopener">commit ↗</a>` : ""}`, "ok", 8000);
      updateStatus();
    } catch (e) {
      toast(S("publishFail") + e.message, "err", 8000);
    } finally { btn.disabled = false; btn.textContent = S("publish"); }
  }
  async function uploadImage(file, path) {
    if (!ghReady()) { toast(S("uploadNeedsGit"), "err", 7000); return; }
    if (file.size > 2 * 1024 * 1024) { toast(S("tooBig"), "err"); return; }
    const name = file.name.toLowerCase().replace(/[^a-z0-9._-]+/g, "-");
    const dest = "assets/img/" + name;
    const base64 = await new Promise((resolve, reject) => { const r = new FileReader(); r.onload = () => resolve(String(r.result).split(",")[1]); r.onerror = reject; r.readAsDataURL(file); });
    try {
      let sha = null; try { const cur = await ghGetFile(dest); sha = cur.sha; } catch (e) { if (e.status !== 404) throw e; }
      await ghPutFile(dest, base64, `Upload ${name} via admin panel`, sha);
      setPath(content, path, dest); markDirty(); renderMain();
      toast(S("uploadOk"), "ok");
    } catch (e) { toast(S("uploadFail") + e.message, "err", 7000); }
  }

  /* ------------------------------------------------------------ validation */
  function validate() {
    const w = []; const ev = content.event; const sec = content.sections;
    if (ev.startDate && ev.endDate && ev.endDate < ev.startDate) w.push(S("validation.dates"));
    if (sec.registration && sec.registration.enabled !== false && /REPLACE_WITH|^$/.test(sec.registration.formUrl || "")) w.push(S("validation.form"));
    if (sec.contact && sec.contact.enabled !== false && /example\.com/.test(sec.contact.email || "")) w.push(S("validation.email"));
    if (sec.organizers && sec.organizers.enabled !== false && (sec.organizers.items || []).some((p) => /Name Surname/i.test(p.name || ""))) w.push(S("validation.placeholders"));
    if (!(content.sectionOrder || []).some((k) => sec[k] && sec[k].enabled !== false)) w.push(S("validation.noSections"));
    return w;
  }

  /* ------------------------------------------------------------ rendering */
  function fieldHtml(field, path) {
    const value = getPath(content, path);
    const label = esc(T(field.label));
    const help = field.help ? `<div class="help">${esc(T(field.help))}</div>` : "";
    switch (field.type) {
      case "i18n":
        return `<div class="field"><span class="lbl">${label}</span><div class="i18n">
          <div class="lang" data-lang="en"><input type="text" data-path="${path}.en" value="${esc(value && value.en)}"></div>
          <div class="lang" data-lang="tr"><input type="text" data-path="${path}.tr" value="${esc(value && value.tr)}"></div></div>${help}</div>`;
      case "i18nLong":
        return `<div class="field"><span class="lbl">${label}</span><div class="i18n">
          <div class="lang" data-lang="en"><textarea data-path="${path}.en">${esc(value && value.en)}</textarea></div>
          <div class="lang" data-lang="tr"><textarea data-path="${path}.tr">${esc(value && value.tr)}</textarea></div></div>${help}</div>`;
      case "bool":
        return `<div class="field bool"><label class="switch"><input type="checkbox" data-path="${path}" data-type="bool" ${value !== false && value !== undefined && value !== "" ? "checked" : ""}><span class="track"></span>${label}</label>${help}</div>`;
      case "select":
        return `<div class="field"><label>${label}<select data-path="${path}">${field.options.map((o) => `<option value="${esc(o)}" ${o === value ? "selected" : ""}>${esc(field.dict ? S(field.dict + "." + o) : o)}</option>`).join("")}</select></label>${help}</div>`;
      case "color":
        return `<div class="field"><span class="lbl">${label}</span><div class="color-field"><input type="color" data-path="${path}" value="${esc(value || "#000000")}"><input type="text" data-path="${path}" value="${esc(value)}" maxlength="7"></div>${help}</div>`;
      case "image":
        return `<div class="field"><span class="lbl">${label}</span><div class="image-field">
          <span class="thumb" style="background-image:url('${esc(value)}')"></span>
          <input type="text" data-path="${path}" value="${esc(value)}" placeholder="assets/img/…  or  https://…">
          <label class="btn sm">${esc(S("upload"))}<input type="file" accept="image/*" data-upload="${path}"></label></div>${help}</div>`;
      case "list":
        listSchemas[path] = field;
        return `<div class="field"><span class="lbl">${label}</span>${help}<div class="list" data-list="${path}">${(value || []).map((it, i) => itemHtml(field, path, i, it)).join("")}</div>
          <button type="button" class="btn sm list-add" data-action="add" data-path="${path}">＋ ${esc(S("add"))}</button></div>`;
      case "number":
        return `<div class="field"><label>${label}<input type="number" data-path="${path}" data-type="number" value="${esc(value)}"></label>${help}</div>`;
      default: {
        const type = field.type === "url" ? "url" : field.type === "date" ? "date" : field.type === "time" ? "time" : "text";
        return `<div class="field"><label>${label}<input type="${type}" data-path="${path}" value="${esc(value)}"></label>${help}</div>`;
      }
    }
  }
  function itemHtml(listField, listPath, i, it) {
    const p = `${listPath}.${i}`;
    const summary = (listField.summary && listField.summary(it)) || `#${i + 1}`;
    const inner = fieldsHtml(Object.keys(listField.item).map((k) => ({ schema: listField.item[k], path: `${p}.${k}` })), true);
    const open = openItems.has(p) ? "open" : "";
    return `<div class="item ${open}" data-item="${p}">
      <div class="head" data-action="toggle" data-path="${p}"><span class="caret">▶</span><span class="no">${i + 1}</span><span class="sum">${esc(summary)}</span>
        <span class="ctl">
          <button type="button" class="btn sm icon" data-action="up" data-path="${listPath}" data-index="${i}" title="${esc(S("moveUp"))}">↑</button>
          <button type="button" class="btn sm icon" data-action="down" data-path="${listPath}" data-index="${i}" title="${esc(S("moveDown"))}">↓</button>
          <button type="button" class="btn sm icon" data-action="dup" data-path="${listPath}" data-index="${i}" title="${esc(S("duplicate"))}">⧉</button>
          <button type="button" class="btn sm icon danger" data-action="del" data-path="${listPath}" data-index="${i}" title="${esc(S("remove"))}">✕</button>
        </span></div>
      <div class="body">${inner}</div></div>`;
  }
  const openItems = new Set();

  /* Render a list of {schema, path}; small fields (dates, times, colours…) share a row. */
  function fieldsHtml(entries, nested) {
    const parts = []; let row = [];
    const flush = () => { if (row.length) { parts.push(`<div class="row">${row.join("")}</div>`); row = []; } };
    entries.forEach(({ schema, path }) => {
      ensurePath(content, path, schema);
      const html = nested && schema.type === "list" ? `<div class="sublist">${fieldHtml(schema, path)}</div>` : fieldHtml(schema, path);
      if (["date", "time", "color", "number", "select", "bool"].includes(schema.type)) { row.push(html); if (row.length === 3) flush(); }
      else { flush(); parts.push(html); }
    });
    flush();
    return parts.join("");
  }
  function groupHtml(group) {
    return `<h2>${esc(T(group.label))}</h2><p class="desc">${esc(T(group.desc) || "")}</p><div class="card">${fieldsHtml(group.fields.map((fld) => ({ schema: fld, path: fld.path })))}</div>`;
  }

  function orderHtml() {
    const order = content.sectionOrder || Object.keys(content.sections);
    return `<h2>${esc(S("orderTitle"))}</h2><p class="desc">${esc(S("orderDesc"))}</p>
      <div class="order">${order.map((key, i) => {
        const s = content.sections[key]; if (!s) return "";
        return `<div class="o">
          <span class="key">${i + 1}</span>
          <div><b>${esc(T(s.navLabel) || key)}</b> <span class="pill">${esc(key)}</span></div>
          <label class="switch"><input type="checkbox" data-path="sections.${key}.enabled" data-type="bool" ${s.enabled !== false ? "checked" : ""}><span class="track"></span>${esc(S("visible"))}</label>
          <label class="switch"><input type="checkbox" data-path="sections.${key}.inNav" data-type="bool" ${s.inNav !== false ? "checked" : ""}><span class="track"></span>${esc(S("menu"))}</label>
          <span class="ctl"><button type="button" class="btn sm icon" data-action="orderUp" data-index="${i}">↑</button> <button type="button" class="btn sm icon" data-action="orderDown" data-index="${i}">↓</button></span>
        </div>`;
      }).join("")}</div>`;
  }

  function currentGroup() {
    const g = GENERAL_GROUPS.find((x) => x.id === current);
    if (g) return g;
    if (content.sections[current]) {
      const s = content.sections[current];
      return {
        id: current, label: s.title || lbl(current, current), desc: lbl("", ""),
        fields: [...sectionCommon(current, SECTION_HAS_INTRO[current] !== false), ...(SECTION_FIELDS[current] || [])]
      };
    }
    return null;
  }

  function renderSidebar() {
    const order = content.sectionOrder || Object.keys(content.sections);
    const item = (id, icon, label, off) => `<button type="button" class="navitem" data-nav="${id}" aria-current="${id === current}"><span class="ic">${icon}</span><span>${esc(label)}</span>${off ? `<span class="off">${esc(S("hidden"))}</span>` : ""}</button>`;
    $("#sidebar").innerHTML = `
      <h6>${esc(S("general"))}</h6><div class="navlist">${GENERAL_GROUPS.map((g) => item(g.id, g.icon, T(g.label))).join("")}</div>
      <h6>${esc(S("sections"))}</h6><div class="navlist">${order.map((k) => content.sections[k] ? item(k, SECTION_ICONS[k] || "▪️", T(content.sections[k].navLabel) || k, content.sections[k].enabled === false) : "").join("")}
      ${item("order", "↕️", S("orderTitle"))}</div>`;
  }

  function renderMain() {
    const main = $("#main");
    const y = main.scrollTop;
    let html = "";
    if (current === "order") html = orderHtml();
    else { const g = currentGroup(); html = g ? groupHtml(g) : ""; }
    let welcome = "";
    try { if (!localStorage.getItem("qff_admin_welcomed")) welcome = welcomeHtml(); } catch (e) { welcome = welcomeHtml(); }
    main.innerHTML = welcome + html;
    main.scrollTop = y;
  }
  const welcomeHtml = () => `<div class="notice info" id="welcome"><b>${esc(S("welcomeTitle"))}</b><p style="margin:6px 0 0">${esc(S("welcome"))}</p>
    <ol class="steps"><li>${esc(S("w1"))}</li><li>${esc(S("w2"))}</li><li>${esc(S("w3"))}</li></ol>
    <div style="margin-top:10px;display:flex;gap:8px;flex-wrap:wrap"><button type="button" class="btn sm primary" data-action="welcomeOk">${esc(S("dismiss"))}</button><a class="btn sm" href="README.md" target="_blank">${esc(S("readme"))}</a></div></div>`;

  function renderShell() {
    $("#admin").innerHTML = `
      <div class="topbar">
        <div class="logo"><span>QFF</span><div>${esc(S("panel"))}<small>${esc(S("subtitle"))}</small></div></div>
        <div class="status clean" id="status"><span class="dot"></span><span class="txt"></span></div>
        <div class="spacer"></div>
        <div class="actions">
          <div class="ulang"><button type="button" data-ulang="en" aria-pressed="${ulang === "en"}">EN</button><button type="button" data-ulang="tr" aria-pressed="${ulang === "tr"}">TR</button></div>
          <button type="button" class="btn" id="btn-preview" title="${esc(S("previewHint"))}">👁 ${esc(S("preview"))}</button>
          <button type="button" class="btn" id="btn-download">⬇ ${esc(S("download"))}</button>
          <button type="button" class="btn" id="btn-settings" title="${esc(S("settings"))}">⚙</button>
          <button type="button" class="btn primary" id="btn-publish">🚀 ${esc(S("publish"))}</button>
        </div>
      </div>
      <aside class="sidebar" id="sidebar"></aside>
      <main class="main" id="main"></main>
      <div id="modal"></div><div id="toast" hidden></div>`;
    renderSidebar(); renderMain(); updateStatus();
  }

  function updateStatus() {
    const st = $("#status"); if (!st) return;
    const dirty = JSON.stringify(content) !== original;
    st.className = "status " + (dirty ? "dirty" : "clean");
    st.querySelector(".txt").textContent = dirty ? S("unsaved") : (source === "github" ? S("loadedGit") : S("loadedLocal"));
    document.title = (dirty ? "● " : "") + "Admin · Qiskit Fall Fest 2026";
  }
  function markDirty() {
    updateStatus();
    try { localStorage.setItem(PREVIEW_KEY, JSON.stringify(content)); } catch (e) { /* ignore */ }
  }

  /* ------------------------------------------------------------ modals & toasts */
  let toastTimer = null;
  function toast(html, kind, ms) {
    const el = $("#toast"); el.className = "toast " + (kind || ""); el.innerHTML = html; el.hidden = false;
    clearTimeout(toastTimer); toastTimer = setTimeout(hideToast, ms || 3500);
  }
  function hideToast() { const el = $("#toast"); if (el) el.hidden = true; }
  function modal(html) { $("#modal").innerHTML = `<div class="modal-back" data-action="closeModal"><div class="modal">${html}</div></div>`; }
  function closeModal() { $("#modal").innerHTML = ""; }
  function openSettings() {
    const s = settings();
    modal(`<h3>${esc(S("ghTitle"))}</h3><p class="desc" style="margin-bottom:14px">${esc(S("ghHelp"))}</p>
      <div class="row"><div class="field"><label>${esc(S("owner"))}<input type="text" id="gh-owner" value="${esc(s.owner)}" placeholder="qsb-su"></label></div>
      <div class="field"><label>${esc(S("repo"))}<input type="text" id="gh-repo" value="${esc(s.repo)}" placeholder="qiskit-fall-fest-2026"></label></div></div>
      <div class="row"><div class="field"><label>${esc(S("branch"))}<input type="text" id="gh-branch" value="${esc(s.branch)}"></label></div>
      <div class="field"><label>${esc(S("path"))}<input type="text" id="gh-path" value="${esc(s.path)}"></label></div></div>
      <div class="field"><label>${esc(S("token"))}<input type="password" id="gh-token" value="${esc(s.token)}" autocomplete="off" placeholder="github_pat_…"></label><div class="help">${esc(S("tokenHelp"))}</div></div>
      <div class="field"><label class="switch"><input type="checkbox" id="gh-remember" ${s.remember ? "checked" : ""}><span class="track"></span>${esc(S("remember"))}</label></div>
      <div id="gh-test-result"></div>
      <div class="foot"><button type="button" class="btn" data-action="ghTest">${esc(S("test"))}</button><button type="button" class="btn" data-action="closeModal">${esc(S("cancel"))}</button><button type="button" class="btn primary" data-action="ghSave">${esc(S("save"))}</button></div>`);
  }
  function readSettingsForm() {
    return { owner: $("#gh-owner").value.trim(), repo: $("#gh-repo").value.trim(), branch: $("#gh-branch").value.trim() || "main", path: $("#gh-path").value.trim() || "content.js", token: $("#gh-token").value.trim(), remember: $("#gh-remember").checked };
  }
  async function testConnection() {
    saveSettings(readSettingsForm());
    const box = $("#gh-test-result"); box.innerHTML = `<div class="notice info">…</div>`;
    try {
      const repo = await gh("");
      const canPush = repo.permissions && repo.permissions.push;
      box.innerHTML = `<div class="notice ${canPush ? "ok" : "warn"}">${esc(canPush ? S("testOk") : S("testNoPush"))}</div>`;
    } catch (e) { box.innerHTML = `<div class="notice err">${esc(S("testFail") + e.message)}</div>`; }
  }
  function openWarnings(warnings) {
    modal(`<h3>${esc(S("warnTitle"))}</h3><div class="notice warn"><ul>${warnings.map((w) => `<li>${esc(w)}</li>`).join("")}</ul></div>
      <div class="foot"><button type="button" class="btn" data-action="closeModal">${esc(S("cancel"))}</button><button type="button" class="btn primary" data-action="publishForce">${esc(S("warnGo"))}</button></div>`);
  }

  /* ------------------------------------------------------------ actions */
  function download() {
    const blob = new Blob([serialize(content)], { type: "text/javascript;charset=utf-8" });
    const a = document.createElement("a"); a.href = URL.createObjectURL(blob); a.download = "content.js"; document.body.appendChild(a); a.click();
    setTimeout(() => { URL.revokeObjectURL(a.href); a.remove(); }, 1000);
    original = JSON.stringify(content); updateStatus();
  }
  function preview() {
    try { localStorage.setItem(PREVIEW_KEY, JSON.stringify(content)); } catch (e) { /* ignore */ }
    const url = "index.html?preview=1";
    if (!previewWin || previewWin.closed) previewWin = window.open(url, "qff_preview"); else { previewWin.location.href = url; previewWin.focus(); }
  }

  function onInput(e) {
    const el = e.target; const path = el.dataset.path; if (!path) return;
    let value;
    if (el.dataset.type === "bool") value = el.checked;
    else if (el.dataset.type === "number") value = el.value === "" ? "" : Number(el.value);
    else value = el.value;
    setPath(content, path, value);
    /* keep colour picker and hex text in sync */
    if (el.type === "color" || (el.type === "text" && el.closest(".color-field"))) {
      el.closest(".color-field").querySelectorAll("input").forEach((x) => { if (x !== el && /^#[0-9a-f]{6}$/i.test(value)) x.value = value; });
    }
    if (el.type === "text" && el.closest(".image-field")) el.closest(".image-field").querySelector(".thumb").style.backgroundImage = `url('${value}')`;
    /* keep list item summary fresh */
    const item = el.closest(".item");
    if (item) { const lp = item.dataset.item.replace(/\.\d+$/, ""); const sch = listSchemas[lp]; const idx = Number(item.dataset.item.split(".").pop()); if (sch && sch.summary) { const sum = item.querySelector(":scope > .head .sum"); if (sum) sum.textContent = sch.summary(getPath(content, lp)[idx]) || `#${idx + 1}`; } }
    if (path.startsWith("sections.") && /\.(enabled|navLabel|inNav)\b/.test(path)) renderSidebar();
    markDirty();
  }

  function onClick(e) {
    const nav = e.target.closest("[data-nav]");
    if (nav) { current = nav.dataset.nav; renderSidebar(); renderMain(); window.scrollTo(0, 0); return; }
    const ul = e.target.closest("[data-ulang]");
    if (ul) { ulang = ul.dataset.ulang; try { localStorage.setItem("qff_admin_lang", ulang); } catch (x) { /* ignore */ } renderShell(); return; }
    const btn = e.target.closest("[data-action]"); if (!btn) return;
    const action = btn.dataset.action; const path = btn.dataset.path; const idx = Number(btn.dataset.index);
    const arr = path ? getPath(content, path) : null;
    switch (action) {
      case "toggle": { if (e.target.closest(".ctl")) return; const it = btn.closest(".item"); it.classList.toggle("open"); if (it.classList.contains("open")) openItems.add(path); else openItems.delete(path); return; }
      case "add": { const sch = listSchemas[path]; const list = Array.isArray(arr) ? arr : (setPath(content, path, []), getPath(content, path)); list.push(newItem(sch.item)); openItems.add(`${path}.${list.length - 1}`); markDirty(); renderMain(); const el = document.querySelector(`[data-item="${path}.${list.length - 1}"]`); if (el) el.scrollIntoView({ block: "center" }); return; }
      case "del": { if (!confirm(S("confirmRemove"))) return; arr.splice(idx, 1); markDirty(); renderMain(); return; }
      case "dup": { arr.splice(idx + 1, 0, deepClone(arr[idx])); markDirty(); renderMain(); return; }
      case "up": { if (idx > 0) { [arr[idx - 1], arr[idx]] = [arr[idx], arr[idx - 1]]; markDirty(); renderMain(); } return; }
      case "down": { if (idx < arr.length - 1) { [arr[idx + 1], arr[idx]] = [arr[idx], arr[idx + 1]]; markDirty(); renderMain(); } return; }
      case "orderUp": case "orderDown": {
        const o = content.sectionOrder; const j = action === "orderUp" ? idx - 1 : idx + 1;
        if (j < 0 || j >= o.length) return; [o[idx], o[j]] = [o[j], o[idx]]; markDirty(); renderSidebar(); renderMain(); return;
      }
      case "welcomeOk": { try { localStorage.setItem("qff_admin_welcomed", "1"); } catch (x) { /* ignore */ } const w = $("#welcome"); if (w) w.remove(); return; }
      case "closeModal": if (btn.classList.contains("modal-back") && e.target !== btn) return; closeModal(); return;
      case "ghSave": saveSettings(readSettingsForm()); closeModal(); toast("✓", "ok", 1500); return;
      case "ghTest": testConnection(); return;
      case "publishForce": closeModal(); publish(true); return;
      default: return;
    }
  }

  function bindShell() {
    const root = $("#admin");
    root.addEventListener("input", onInput);
    root.addEventListener("change", (e) => {
      if (e.target.dataset && e.target.dataset.upload) { const file = e.target.files[0]; if (file) uploadImage(file, e.target.dataset.upload); e.target.value = ""; }
    });
    root.addEventListener("click", onClick);
    root.addEventListener("click", (e) => {
      if (e.target.closest("#btn-preview")) preview();
      else if (e.target.closest("#btn-download")) download();
      else if (e.target.closest("#btn-settings")) openSettings();
      else if (e.target.closest("#btn-publish")) publish(false);
    });
    window.addEventListener("beforeunload", (e) => { if (JSON.stringify(content) !== original) { e.preventDefault(); e.returnValue = ""; } });
    document.addEventListener("keydown", (e) => { if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "s") { e.preventDefault(); if (ghReady()) publish(false); else download(); } });
  }

  /* ------------------------------------------------------------ boot */
  async function boot() {
    try { ulang = localStorage.getItem("qff_admin_lang") || ((navigator.language || "").toLowerCase().startsWith("tr") ? "tr" : "en"); } catch (e) { ulang = "en"; }
    content = window.SITE_CONTENT ? deepClone(window.SITE_CONTENT) : null;
    if (!content) { $("#admin").innerHTML = `<div class="main"><div class="notice err">content.js could not be loaded. / content.js yüklenemedi.</div></div>`; return; }
    original = JSON.stringify(content);
    renderShell(); bindShell();
    /* If GitHub is configured, prefer the freshest version from the repository (GitHub Pages can lag behind). */
    if (settings().owner && settings().repo && settings().token) { if (await loadFromGitHub()) { renderSidebar(); renderMain(); updateStatus(); } }
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot); else boot();
})();
