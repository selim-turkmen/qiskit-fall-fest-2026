# Qiskit Fall Fest 2026 · QSB|SU — event website

Bilingual (EN/TR) one-page site for the Sabancı University edition of Qiskit Fall Fest 2026, with a
built-in admin panel so any club member can update it without touching code.

*Türkçe rehber aşağıda.* → [Türkçe](#türkçe-rehber)

---

## English guide

### What is in the folder

| File | What it is | Who touches it |
|---|---|---|
| `index.html` | The public site (one page). Static meta tags for social previews live here. | Rarely |
| `content.js` | **Every text, date, link and image path on the site.** | Admins — through `admin.html` |
| `admin.html` | The admin panel: edit `content.js` with forms, preview, publish. | Admins |
| `assets/css/style.css` | Site design. | Designer only |
| `assets/js/app.js` | Turns `content.js` into the page. | Developer only |
| `assets/js/admin.js`, `assets/css/admin.css` | The admin panel. | Developer only |
| `assets/img/` | Logos, photos, partner logos. | Admins (upload) |
| `.nojekyll` | Tells GitHub Pages to serve the files as they are. | Nobody |

There is no build step and no database: the whole site is static files, which is why it can be
hosted for free on GitHub Pages.

### 1. Put the site online (GitHub Pages) — one-time setup

1. Create a repository on GitHub, e.g. `qsb-su/qiskit-fall-fest-2026` (a club organization account is
   best so the site does not depend on one person). Keep it **public**.
2. Upload everything in this folder to the repository (drag & drop on github.com → *Add file → Upload
   files*, or `git push`). Include the hidden `.nojekyll` file.
3. In the repository go to **Settings → Pages → Build and deployment**: *Source = Deploy from a branch*,
   *Branch = main*, *Folder = / (root)*. Save.
4. After ~1 minute the site is live at `https://<owner>.github.io/<repo>/`. The admin panel is at
   `https://<owner>.github.io/<repo>/admin.html`.
5. Optional: a custom domain (e.g. `fallfest.qsb.club`) can be added in the same Pages settings.

### 2. Editing the site (admins)

Open `admin.html` on the live site (or locally, see below). The panel has a section list on the left
and forms on the right. Every text field has an **EN** and a **TR** box.

Saving works in one of two ways:

**A. Publish to GitHub (recommended, one click).**
1. Click **⚙ GitHub settings** in the panel, fill in owner / repository / branch.
2. Create a token: GitHub → *Settings → Developer settings → Personal access tokens → Fine-grained
   tokens → Generate new token*. Repository access: **only this repository**. Permissions:
   **Contents → Read and write**. Expiration: e.g. 90 days (until after the event).
3. Paste the token in the panel, click *Test connection*, then *Save*. The token is stored only in your
   browser — never in the site.
4. Edit, click **Preview** to check, then **🚀 Publish to GitHub**. The site updates in 1–2 minutes.

**B. Download the file.** Click **⬇ Download content.js**, then upload it to the repository
(*Add file → Upload files*, replacing the old one). Same result, no token needed.

Quick text fixes can also be made directly on github.com by editing `content.js` in the browser — but
be careful with commas and quotes; a syntax error hides the whole site. The panel is safer.

Tips
- **Preview** opens the site in a new tab and updates live while you type.
- **Section order & visibility** lets you reorder sections, hide any of them (e.g. *Speakers* until
  names are confirmed) or keep a section on the page but out of the menu.
- Lists (dates, sessions, FAQ, team…) have ↑ ↓ to reorder, ⧉ to duplicate and ✕ to delete.
- Images: with GitHub settings in place, the *Upload* button next to an image field commits the file
  into `assets/img/` and links it. Otherwise upload the file to `assets/img/` yourself and type its path.
- `Ctrl/⌘ + S` publishes (or downloads, if GitHub is not configured).

### 3. Registration form and dates

- **Google Form**: create the form, click *Send → link* and paste the `…/viewform` link into
  *Register → Google Form link*. The site embeds it automatically and shows an *open in new tab* button.
  Responses land in the form's Google Sheet.
- **Registration opens / deadline**: the *Register* section switches automatically between
  *opens soon → open → closed* based on these dates (Istanbul time). Use *Status* to force a state.
- **Key dates** (the *Dates* section): add every date participants care about — registration opens,
  deadline, confirmation e-mails, event days, hackathon submission deadline. They are sorted automatically
  and greyed out once they pass.
- **Event dates** (in *Event basics*) drive the countdown in the header, the *Add to Google Calendar*
  button and the *happening now* state.

### 4. Fall Fest checklist (what IBM's organizer templates expect on the event page)

- [ ] Event name with the official **Qiskit Fall Fest 2026** branding — put the logo from IBM's host kit
      in `assets/img/` and select it under *Logos & colors* (never redraw the logo).
- [ ] Host clearly named (QSB|SU, Sabancı University) and the footer note that this is a student-run
      event, not an IBM event. *(already in place)*
- [ ] Event dates, venue and map. *(Event basics)*
- [ ] Registration form + registration deadline. *(Register, Dates)*
- [ ] Full schedule (workshops, talks, hackathon). *(Program)*
- [ ] Hackathon rules: Qiskit must be used, team size, submission deadline, judging. *(Hackathon)*
- [ ] Link to the **Qiskit Code of Conduct** — <https://quantum.cloud.ibm.com/docs/open-source/code-of-conduct>. *(Code of Conduct)*
- [ ] Contact e-mail and participant communication channel (WhatsApp/Discord). *(Contact)*
- [ ] Organizing team, speakers/mentors, partners. *(Team, Speakers, Partners)*
- [ ] Replace placeholders: contact e-mail, team names, the registration form link, tentative dates.
- [ ] Update the social-preview tags at the top of `index.html` (title, description, `og:image`) once
      the final wording is known, and add a 1200×630 `assets/img/og-image.png`.

### 5. Working locally

Double-clicking `index.html` works for a quick look, but browsers restrict some features on `file://`
pages. For a faithful local preview run a tiny server in this folder:

```bash
python3 -m http.server 8000     # then open http://localhost:8000
```

`admin.html` works locally too (edit → Download → replace `content.js`).

### Technical notes

- Pure HTML/CSS/JS, no dependencies. Fonts: IBM Plex from Google Fonts (falls back to system fonts).
- `app.js` escapes all content before rendering (no HTML injection through the content file). Body texts
  support paragraphs (blank line), `**bold**` and `[text](https://link)`.
- Times are interpreted in the event timezone (`meta.utcOffset`, default `+03:00`).
- The admin panel talks to the GitHub REST API from the browser (Contents endpoint). The panel page itself
  contains no secrets; only people with a token that has write access can publish.
- Section renderers are in `app.js` (`RENDERERS`); their fields are described in `admin.js` (`SECTION_FIELDS`).
  To add a new field: add it to `content.js`, render it in `app.js`, describe it in `admin.js`.

---

## Türkçe rehber

### Klasörde neler var

| Dosya | Ne işe yarar | Kim dokunur |
|---|---|---|
| `index.html` | Herkese açık site (tek sayfa). Sosyal medya önizleme etiketleri burada. | Nadiren |
| `content.js` | **Sitedeki tüm metin, tarih, bağlantı ve görsel yolları.** | Adminler — `admin.html` üzerinden |
| `admin.html` | Yönetim paneli: `content.js`'i formlarla düzenle, önizle, yayınla. | Adminler |
| `assets/css/style.css` | Site tasarımı. | Sadece tasarımcı |
| `assets/js/app.js` | `content.js`'i sayfaya dönüştürür. | Sadece geliştirici |
| `assets/js/admin.js`, `assets/css/admin.css` | Yönetim paneli. | Sadece geliştirici |
| `assets/img/` | Logolar, fotoğraflar, partner logoları. | Adminler (yükleme) |
| `.nojekyll` | GitHub Pages'e dosyaları olduğu gibi sunmasını söyler. | Kimse |

Derleme adımı ve veritabanı yok: site tamamen statik dosyalardan oluşur; bu yüzden GitHub Pages'te
ücretsiz barındırılabilir.

### 1. Siteyi yayına alma (GitHub Pages) — tek seferlik kurulum

1. GitHub'da bir depo oluşturun, örn. `qsb-su/qiskit-fall-fest-2026` (sitenin tek kişiye bağlı
   kalmaması için bir kulüp organizasyon hesabı en iyisidir). Depo **public** olsun.
2. Bu klasördeki her şeyi depoya yükleyin (github.com'da sürükle-bırak → *Add file → Upload files*,
   ya da `git push`). Gizli `.nojekyll` dosyasını da ekleyin.
3. Depoda **Settings → Pages → Build and deployment**: *Source = Deploy from a branch*, *Branch = main*,
   *Folder = / (root)*. Kaydedin.
4. Yaklaşık 1 dakika sonra site `https://<sahip>.github.io/<depo>/` adresinde yayında olur. Yönetim
   paneli: `https://<sahip>.github.io/<depo>/admin.html`.
5. İsteğe bağlı: aynı Pages ayarlarından özel alan adı (örn. `fallfest.qsb.club`) eklenebilir.

### 2. Siteyi düzenleme (adminler)

Canlı sitede (veya yerelde) `admin.html`'i açın. Solda bölüm listesi, sağda formlar vardır. Her metin
alanının **EN** ve **TR** kutusu bulunur.

Kaydetmenin iki yolu var:

**A. GitHub'a yayınla (önerilen, tek tık).**
1. Panelde **⚙ GitHub ayarları**'na tıklayın; sahip / depo / dal bilgilerini girin.
2. Token oluşturun: GitHub → *Settings → Developer settings → Personal access tokens → Fine-grained
   tokens → Generate new token*. Repository access: **yalnızca bu depo**. Permissions:
   **Contents → Read and write**. Süre: örn. 90 gün (etkinlik sonrasına kadar).
3. Token'ı panele yapıştırın, *Bağlantıyı test et*, sonra *Kaydet*. Token yalnızca sizin
   tarayıcınızda saklanır — siteye asla yazılmaz.
4. Düzenleyin, **Önizle** ile kontrol edin, **🚀 GitHub'a yayınla**'ya basın. Site 1–2 dakikada güncellenir.

**B. Dosyayı indir.** **⬇ content.js indir**'e tıklayın, ardından dosyayı depoya yükleyin
(*Add file → Upload files*, eskisinin üzerine). Aynı sonuç, token gerekmez.

Küçük metin düzeltmeleri doğrudan github.com'da `content.js`'i tarayıcıda düzenleyerek de yapılabilir —
ama virgül ve tırnaklara dikkat: bir sözdizimi hatası tüm siteyi gizler. Panel daha güvenlidir.

İpuçları
- **Önizle**, siteyi yeni sekmede açar ve siz yazdıkça canlı güncellenir.
- **Bölüm sırası ve görünürlük** ile bölümleri sıralayabilir, gizleyebilir (örn. isimler kesinleşene kadar
  *Konuşmacılar*) ya da sayfada tutup menüden çıkarabilirsiniz.
- Listelerde (tarihler, oturumlar, SSS, ekip…) ↑ ↓ sıralar, ⧉ çoğaltır, ✕ siler.
- Görseller: GitHub ayarları yapılıysa görsel alanının yanındaki *Yükle* düğmesi dosyayı `assets/img/`
  içine commit edip bağlar. Aksi halde dosyayı `assets/img/`'e kendiniz yükleyip yolunu yazın.
- `Ctrl/⌘ + S` yayınlar (GitHub ayarlı değilse indirir).

### 3. Kayıt formu ve tarihler

- **Google Form**: formu oluşturun, *Gönder → bağlantı* ile `…/viewform` linkini kopyalayıp
  *Kayıt → Google Form bağlantısı* alanına yapıştırın. Site formu otomatik gömer ve *yeni sekmede aç*
  düğmesi gösterir. Yanıtlar formun Google Sheets'ine düşer.
- **Kayıt açılış / son tarih**: *Kayıt* bölümü bu tarihlere göre (İstanbul saati) otomatik olarak
  *yakında açılıyor → açık → kapandı* durumlarına geçer. *Durum* alanıyla zorlayabilirsiniz.
- **Önemli tarihler** (*Tarihler* bölümü): katılımcıları ilgilendiren her tarihi ekleyin — kayıt
  açılışı, son tarih, onay e-postaları, etkinlik günleri, hackathon teslim saati. Otomatik sıralanır ve
  geçen tarihler soluklaşır.
- **Etkinlik tarihleri** (*Etkinlik bilgileri*): üstteki geri sayımı, *Google Takvim'e ekle* düğmesini ve
  *şu anda devam ediyor* durumunu belirler.

### 4. Fall Fest kontrol listesi (IBM'in organizatör şablonlarının etkinlik sayfasından beklediği içerik)

- [ ] Resmi **Qiskit Fall Fest 2026** markasıyla etkinlik adı — IBM'in ev sahibi kitindeki logoyu
      `assets/img/`'e koyup *Logolar ve renkler*'den seçin (logoyu asla yeniden çizmeyin).
- [ ] Ev sahibinin net belirtilmesi (QSB|SU, Sabancı Üniversitesi) ve altbilgide bunun öğrenci
      organizasyonu olduğu, IBM etkinliği olmadığı notu. *(hazır)*
- [ ] Etkinlik tarihleri, mekân ve harita. *(Etkinlik bilgileri)*
- [ ] Kayıt formu + son kayıt tarihi. *(Kayıt, Tarihler)*
- [ ] Tam program (atölyeler, konuşmalar, hackathon). *(Program)*
- [ ] Hackathon kuralları: Qiskit kullanımı zorunlu, takım boyutu, teslim saati, değerlendirme. *(Hackathon)*
- [ ] **Qiskit Code of Conduct** bağlantısı — <https://quantum.cloud.ibm.com/docs/open-source/code-of-conduct>. *(Davranış Kuralları)*
- [ ] İletişim e-postası ve katılımcı iletişim kanalı (WhatsApp/Discord). *(İletişim)*
- [ ] Organizasyon ekibi, konuşmacılar/mentorlar, partnerler. *(Ekip, Konuşmacılar, Partnerler)*
- [ ] Örnek değerleri değiştirin: iletişim e-postası, ekip isimleri, kayıt formu linki, geçici tarihler.
- [ ] Son metin kesinleşince `index.html`'in en üstündeki sosyal medya önizleme etiketlerini (başlık,
      açıklama, `og:image`) güncelleyin ve 1200×630 boyutunda `assets/img/og-image.png` ekleyin.

### 5. Yerelde çalışma

`index.html`'e çift tıklamak hızlı bakış için yeterlidir, ancak tarayıcılar `file://` sayfalarında bazı
özellikleri kısıtlar. Birebir önizleme için bu klasörde küçük bir sunucu çalıştırın:

```bash
python3 -m http.server 8000     # sonra http://localhost:8000 adresini açın
```

`admin.html` yerelde de çalışır (düzenle → İndir → `content.js`'in yerine koy).

### Teknik notlar

- Saf HTML/CSS/JS, bağımlılık yok. Yazı tipi: Google Fonts'tan IBM Plex (yoksa sistem yazı tipi).
- `app.js` tüm içeriği ekrana basmadan önce kaçışlar (içerik dosyası üzerinden HTML enjeksiyonu mümkün
  değildir). Uzun metinlerde paragraf (boş satır), `**kalın**` ve `[metin](https://bağlantı)` desteklenir.
- Saatler etkinlik saat dilimine göre yorumlanır (`meta.utcOffset`, varsayılan `+03:00`).
- Yönetim paneli tarayıcıdan GitHub REST API'sine (Contents uç noktası) bağlanır. Panel sayfasının
  kendisinde gizli bilgi yoktur; yalnızca yazma yetkili token'ı olanlar yayınlayabilir.
- Bölüm çizicileri `app.js` içindedir (`RENDERERS`); alan tanımları `admin.js` içindedir (`SECTION_FIELDS`).
  Yeni alan eklemek için: `content.js`'e ekleyin, `app.js`'te çizin, `admin.js`'te tanımlayın.
