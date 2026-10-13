// =====================================================================
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
window.SITE_CONTENT = {
  "meta": {
    "siteTitle": {
      "en": "Qiskit Fall Fest 2026 · Sabancı University",
      "tr": "Qiskit Fall Fest 2026 · Sabancı Üniversitesi"
    },
    "description": {
      "en": "Qiskit Fall Fest 2026 at Sabancı University, organized by QSB|SU: quantum computing workshops, talks and a hands-on Qiskit hackathon. Free registration.",
      "tr": "QSB|SU tarafından Sabancı Üniversitesi'nde düzenlenen Qiskit Fall Fest 2026: kuantum hesaplama atölyeleri, konuşmalar ve uygulamalı Qiskit hackathon'u. Kayıt ücretsiz."
    },
    "defaultLang": "en",
    "utcOffset": "+03:00",
    "timezone": "Europe/Istanbul"
  },
  "theme": {
    "primary": "#8a3ffc",
    "accent": "#ff7eb6",
    "secondary": "#33b1ff"
  },
  "announcement": {
    "enabled": true,
    "text": {
      "en": "Dates and program are tentative — registration opens soon. Follow us for updates.",
      "tr": "Tarihler ve program geçicidir — kayıtlar yakında açılıyor. Güncellemeler için bizi takip edin."
    },
    "link": ""
  },
  "event": {
    "name": { "en": "Qiskit Fall Fest 2026", "tr": "Qiskit Fall Fest 2026" },
    "edition": { "en": "Sabancı University Edition", "tr": "Sabancı Üniversitesi Edisyonu" },
    "host": {
      "en": "QSB|SU · Quantum Technologies Club, Sabancı University Branch",
      "tr": "QSB|SU · Kuantum Teknolojileri Kulübü, Sabancı Üniversitesi Şubesi"
    },
    "tagline": {
      "en": "Two days of quantum computing on campus: workshops, talks and a hands-on Qiskit hackathon.",
      "tr": "Kampüste iki gün kuantum hesaplama: atölyeler, konuşmalar ve uygulamalı bir Qiskit hackathon'u."
    },
    "startDate": "2026-10-24",
    "endDate": "2026-10-25",
    "startTime": "09:00",
    "endTime": "18:00",
    "format": { "en": "In person · Free of charge", "tr": "Yüz yüze · Ücretsiz" },
    "audience": { "en": "Open to all university students", "tr": "Tüm üniversite öğrencilerine açık" },
    "logo": "",
    "hostLogo": "assets/img/qsb-su-logo.svg",
    "venue": {
      "name": { "en": "Sabancı University, Tuzla Campus", "tr": "Sabancı Üniversitesi, Tuzla Kampüsü" },
      "room": { "en": "Room to be announced", "tr": "Salon daha sonra duyurulacak" },
      "address": {
        "en": "Orta Mahalle, Üniversite Cd. No:27, 34956 Tuzla / Istanbul",
        "tr": "Orta Mahalle, Üniversite Cd. No:27, 34956 Tuzla / İstanbul"
      },
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Sabanc%C4%B1+%C3%9Cniversitesi",
      "mapEmbedUrl": "https://maps.google.com/maps?q=Sabanc%C4%B1%20%C3%9Cniversitesi%20Tuzla&z=14&output=embed"
    },
    "ctaPrimary": { "en": "Register now", "tr": "Hemen kayıt ol" },
    "ctaSecondary": { "en": "See the program", "tr": "Programı gör" }
  },
  "sectionOrder": [
    "about",
    "dates",
    "schedule",
    "tracks",
    "speakers",
    "registration",
    "decade",
    "venue",
    "faq",
    "organizers",
    "partners",
    "conduct",
    "contact"
  ],
  "sections": {
    "about": {
      "enabled": true,
      "navLabel": { "en": "About", "tr": "Hakkında" },
      "eyebrow": { "en": "About the fest", "tr": "Festival hakkında" },
      "title": { "en": "A global celebration of quantum, hosted on our campus", "tr": "Kampüsümüzde küresel bir kuantum kutlaması" },
      "body": {
        "en": "Qiskit Fall Fest is a collection of quantum computing events held every autumn on university campuses around the world. The events are organized by students and supported by IBM Quantum, and they are built around Qiskit — the open-source SDK for working with quantum computers.\n\nIn 2026 the fest marks a decade since the first quantum computer was put on the cloud. QSB|SU, the Sabancı University branch of the Quantum Technologies Club, brings Fall Fest to Tuzla with two days of talks, hands-on workshops and a hackathon where you will run your own circuits on real quantum hardware.",
        "tr": "Qiskit Fall Fest, her sonbahar dünya genelindeki üniversite kampüslerinde düzenlenen kuantum hesaplama etkinlikleri serisidir. Etkinlikler öğrenciler tarafından organize edilir, IBM Quantum tarafından desteklenir ve kuantum bilgisayarlarla çalışmak için kullanılan açık kaynaklı SDK olan Qiskit etrafında şekillenir.\n\n2026'da festival, ilk kuantum bilgisayarın buluta açılmasının onuncu yılına denk geliyor. Kuantum Teknolojileri Kulübü'nün Sabancı Üniversitesi şubesi QSB|SU, Fall Fest'i iki günlük konuşmalar, uygulamalı atölyeler ve kendi devrelerinizi gerçek kuantum donanımında çalıştıracağınız bir hackathon ile Tuzla'ya taşıyor."
      },
      "stats": [
        { "value": "2", "label": { "en": "Days", "tr": "Gün" } },
        { "value": "4", "label": { "en": "Workshops", "tr": "Atölye" } },
        { "value": "1", "label": { "en": "Hackathon", "tr": "Hackathon" } },
        { "value": "100", "label": { "en": "Seats", "tr": "Kontenjan" } }
      ],
      "pillars": [
        {
          "icon": "learn",
          "title": { "en": "Learn", "tr": "Öğren" },
          "text": { "en": "Start from the qubit and build up to real algorithms with guided Qiskit sessions for every level.", "tr": "Kübitten başlayıp her seviyeye uygun rehberli Qiskit oturumlarıyla gerçek algoritmalara ulaş." }
        },
        {
          "icon": "build",
          "title": { "en": "Build", "tr": "Üret" },
          "text": { "en": "Form a team, pick a track and ship a working Qiskit project in the hackathon — mentors included.", "tr": "Takım kur, bir parkur seç ve hackathon'da çalışan bir Qiskit projesi çıkar — mentorlar yanında." }
        },
        {
          "icon": "connect",
          "title": { "en": "Connect", "tr": "Bağlan" },
          "text": { "en": "Meet researchers, industry guests and students who are just as curious about quantum as you are.", "tr": "Araştırmacılar, sektörden konuklar ve kuantuma senin kadar meraklı öğrencilerle tanış." }
        }
      ]
    },
    "dates": {
      "enabled": true,
      "navLabel": { "en": "Dates", "tr": "Tarihler" },
      "eyebrow": { "en": "Key dates", "tr": "Önemli tarihler" },
      "title": { "en": "Participation dates", "tr": "Katılım tarihleri" },
      "intro": {
        "en": "Mark your calendar. Dates are tentative until confirmed by the organizing team.",
        "tr": "Takvimini işaretle. Tarihler organizasyon ekibi tarafından kesinleşene kadar geçicidir."
      },
      "items": [
        {
          "label": { "en": "Registration opens", "tr": "Kayıtlar açılıyor" },
          "date": "2026-09-21",
          "time": "",
          "note": { "en": "Online registration form (Google Forms)", "tr": "Çevrimiçi kayıt formu (Google Forms)" },
          "highlight": false
        },
        {
          "label": { "en": "Registration deadline", "tr": "Son kayıt tarihi" },
          "date": "2026-10-16",
          "time": "23:59",
          "note": { "en": "Seats are limited — apply early", "tr": "Kontenjan sınırlı — erken başvur" },
          "highlight": true
        },
        {
          "label": { "en": "Confirmation e-mails", "tr": "Onay e-postaları" },
          "date": "2026-10-19",
          "time": "",
          "note": { "en": "Accepted participants receive details", "tr": "Kabul edilen katılımcılara detaylar gönderilir" },
          "highlight": false
        },
        {
          "label": { "en": "Day 1 · Talks & workshops", "tr": "1. Gün · Konuşmalar ve atölyeler" },
          "date": "2026-10-24",
          "time": "09:00",
          "note": { "en": "Sabancı University, Tuzla", "tr": "Sabancı Üniversitesi, Tuzla" },
          "highlight": true
        },
        {
          "label": { "en": "Day 2 · Hackathon & closing", "tr": "2. Gün · Hackathon ve kapanış" },
          "date": "2026-10-25",
          "time": "09:00",
          "note": { "en": "Submissions close at 16:00", "tr": "Teslimler 16:00'da kapanır" },
          "highlight": true
        }
      ]
    },
    "schedule": {
      "enabled": true,
      "navLabel": { "en": "Program", "tr": "Program" },
      "eyebrow": { "en": "Program", "tr": "Program" },
      "title": { "en": "Two days, building on each other", "tr": "Birbirini tamamlayan iki gün" },
      "intro": {
        "en": "Day 1 gives you the tools; Day 2 puts them to work. All times are Istanbul time (UTC+3).",
        "tr": "1. gün araçları verir, 2. gün onları kullandırır. Tüm saatler İstanbul saatidir (UTC+3)."
      },
      "days": [
        {
          "label": { "en": "Day 1 · Foundations", "tr": "1. Gün · Temeller" },
          "date": "2026-10-24",
          "items": [
            { "start": "09:00", "end": "09:30", "type": "break", "title": { "en": "Check-in & coffee", "tr": "Kayıt ve kahve" }, "speaker": "", "location": { "en": "Foyer", "tr": "Fuaye" } },
            { "start": "09:30", "end": "10:00", "type": "talk", "title": { "en": "Opening: welcome from QSB|SU", "tr": "Açılış: QSB|SU'dan hoş geldiniz" }, "speaker": "QSB|SU", "location": { "en": "", "tr": "" } },
            { "start": "10:00", "end": "11:00", "type": "talk", "title": { "en": "Keynote: a decade of quantum computing", "tr": "Açılış konuşması: kuantum hesaplamanın on yılı" }, "speaker": "Speaker TBA", "location": { "en": "", "tr": "" } },
            { "start": "11:00", "end": "12:30", "type": "workshop", "title": { "en": "Workshop 1 · Qiskit 101: your first circuit", "tr": "Atölye 1 · Qiskit 101: ilk devren" }, "speaker": "", "location": { "en": "", "tr": "" } },
            { "start": "12:30", "end": "13:30", "type": "break", "title": { "en": "Lunch break", "tr": "Öğle arası" }, "speaker": "", "location": { "en": "", "tr": "" } },
            { "start": "13:30", "end": "15:00", "type": "workshop", "title": { "en": "Workshop 2 · Running on real IBM Quantum hardware", "tr": "Atölye 2 · Gerçek IBM Quantum donanımında çalıştırma" }, "speaker": "", "location": { "en": "", "tr": "" } },
            { "start": "15:00", "end": "15:30", "type": "break", "title": { "en": "Coffee break", "tr": "Kahve arası" }, "speaker": "", "location": { "en": "", "tr": "" } },
            { "start": "15:30", "end": "17:00", "type": "workshop", "title": { "en": "Workshop 3 · Variational algorithms with Qiskit", "tr": "Atölye 3 · Qiskit ile varyasyonel algoritmalar" }, "speaker": "", "location": { "en": "", "tr": "" } },
            { "start": "17:00", "end": "18:00", "type": "hackathon", "title": { "en": "Hackathon briefing & team formation", "tr": "Hackathon bilgilendirmesi ve takım kurma" }, "speaker": "", "location": { "en": "", "tr": "" } }
          ]
        },
        {
          "label": { "en": "Day 2 · Hackathon", "tr": "2. Gün · Hackathon" },
          "date": "2026-10-25",
          "items": [
            { "start": "09:00", "end": "09:30", "type": "hackathon", "title": { "en": "Hackathon kick-off", "tr": "Hackathon başlangıcı" }, "speaker": "", "location": { "en": "", "tr": "" } },
            { "start": "09:30", "end": "12:30", "type": "hackathon", "title": { "en": "Hacking session · mentors available", "tr": "Geliştirme oturumu · mentorlar hazır" }, "speaker": "", "location": { "en": "", "tr": "" } },
            { "start": "12:30", "end": "13:30", "type": "break", "title": { "en": "Lunch break", "tr": "Öğle arası" }, "speaker": "", "location": { "en": "", "tr": "" } },
            { "start": "13:30", "end": "16:00", "type": "hackathon", "title": { "en": "Hacking session · final stretch", "tr": "Geliştirme oturumu · son düzlük" }, "speaker": "", "location": { "en": "", "tr": "" } },
            { "start": "16:00", "end": "16:15", "type": "hackathon", "title": { "en": "Submission deadline", "tr": "Teslim için son saat" }, "speaker": "", "location": { "en": "", "tr": "" } },
            { "start": "16:15", "end": "17:15", "type": "talk", "title": { "en": "Team presentations", "tr": "Takım sunumları" }, "speaker": "", "location": { "en": "", "tr": "" } },
            { "start": "17:15", "end": "17:45", "type": "social", "title": { "en": "Judging & awards", "tr": "Değerlendirme ve ödüller" }, "speaker": "", "location": { "en": "", "tr": "" } },
            { "start": "17:45", "end": "18:00", "type": "talk", "title": { "en": "Closing", "tr": "Kapanış" }, "speaker": "QSB|SU", "location": { "en": "", "tr": "" } }
          ]
        }
      ]
    },
    "tracks": {
      "enabled": true,
      "navLabel": { "en": "Hackathon", "tr": "Hackathon" },
      "eyebrow": { "en": "Hackathon", "tr": "Hackathon" },
      "title": { "en": "Pick a track, build with Qiskit", "tr": "Bir parkur seç, Qiskit ile üret" },
      "intro": {
        "en": "Teams of 2–4 work on a challenge for one day and present their results to a jury. No prior quantum experience is needed for the Beginner track.",
        "tr": "2–4 kişilik takımlar bir gün boyunca bir problem üzerinde çalışır ve sonuçlarını jüriye sunar. Başlangıç parkuru için önceden kuantum bilgisi gerekmez."
      },
      "items": [
        {
          "name": { "en": "Beginner track", "tr": "Başlangıç parkuru" },
          "level": { "en": "No experience needed", "tr": "Deneyim gerekmez" },
          "teamSize": "1–2",
          "description": {
            "en": "Guided challenges that follow the Day 1 workshops: build, measure and visualize circuits, then run them on a real backend.",
            "tr": "1. gün atölyelerini takip eden rehberli görevler: devreler kur, ölç ve görselleştir; ardından gerçek bir arka uçta çalıştır."
          }
        },
        {
          "name": { "en": "General track", "tr": "Genel parkur" },
          "level": { "en": "Some Python & Qiskit", "tr": "Biraz Python ve Qiskit" },
          "teamSize": "2–4",
          "description": {
            "en": "An open problem announced at the briefing — optimization, simulation or quantum machine learning. Creativity and rigor both count.",
            "tr": "Bilgilendirmede açıklanan açık bir problem — optimizasyon, simülasyon veya kuantum makine öğrenmesi. Yaratıcılık ve titizlik birlikte puanlanır."
          }
        }
      ],
      "rulesTitle": { "en": "Rules in short", "tr": "Kısaca kurallar" },
      "rules": [
        { "en": "All solutions must be built with the Qiskit SDK and run on a simulator or IBM Quantum hardware.", "tr": "Tüm çözümler Qiskit SDK ile geliştirilmeli ve bir simülatörde ya da IBM Quantum donanımında çalıştırılmalıdır." },
        { "en": "Teams of 2–4 for the General track, individuals or pairs for the Beginner track. Teams are formed on Day 1.", "tr": "Genel parkurda 2–4 kişilik takımlar, Başlangıç parkurunda bireysel ya da ikili katılım. Takımlar 1. günde kurulur." },
        { "en": "Work must be done during the event; libraries and public resources are fine, pre-built projects are not.", "tr": "Çalışma etkinlik sırasında yapılmalıdır; kütüphaneler ve açık kaynaklar serbest, önceden hazırlanmış projeler kabul edilmez." },
        { "en": "Submit a repository link and a 3-minute presentation before the deadline on Day 2.", "tr": "2. gündeki son saatten önce bir depo bağlantısı ve 3 dakikalık bir sunum teslim edin." },
        { "en": "Judging: technical depth, creativity, clarity of the presentation, and how well Qiskit is used.", "tr": "Değerlendirme: teknik derinlik, yaratıcılık, sunumun netliği ve Qiskit'in ne kadar iyi kullanıldığı." },
        { "en": "The Qiskit Code of Conduct applies to everyone, at all times.", "tr": "Qiskit Davranış Kuralları herkes için, her zaman geçerlidir." }
      ]
    },
    "speakers": {
      "enabled": false,
      "navLabel": { "en": "Speakers", "tr": "Konuşmacılar" },
      "eyebrow": { "en": "Speakers & mentors", "tr": "Konuşmacılar ve mentorlar" },
      "title": { "en": "Learn from people who do this every day", "tr": "Bu işi her gün yapanlardan öğren" },
      "intro": { "en": "More names will be announced as they are confirmed.", "tr": "Kesinleştikçe yeni isimler duyurulacak." },
      "items": [
        { "name": "To be announced", "role": { "en": "Keynote speaker", "tr": "Açılış konuşmacısı" }, "org": "", "photo": "", "link": "" },
        { "name": "To be announced", "role": { "en": "Workshop lead", "tr": "Atölye yürütücüsü" }, "org": "", "photo": "", "link": "" }
      ]
    },
    "registration": {
      "enabled": true,
      "navLabel": { "en": "Register", "tr": "Kayıt" },
      "eyebrow": { "en": "Registration", "tr": "Kayıt" },
      "title": { "en": "Save your seat", "tr": "Yerini ayırt" },
      "intro": {
        "en": "Participation is free but seats are limited. Click the button to fill in the registration form; accepted participants are confirmed by e-mail.",
        "tr": "Katılım ücretsizdir ancak kontenjan sınırlıdır. Kayıt formunu doldurmak için düğmeye tıklayın; kabul edilen katılımcılara e-posta ile onay gönderilir."
      },
      "opens": "2026-09-21",
      "closes": "2026-10-16",
      "status": "auto",
      "formUrl": "https://forms.gle/tCiq3mPdr6U6o4Xf6",
      "embed": false,
      "embedHeight": 1500,
      "eligibility": [
        { "en": "Open to undergraduate and graduate students from any university in Türkiye.", "tr": "Türkiye'deki tüm üniversitelerin lisans ve lisansüstü öğrencilerine açıktır." },
        { "en": "No prior quantum computing knowledge is required for the Beginner track.", "tr": "Başlangıç parkuru için önceden kuantum hesaplama bilgisi gerekmez." },
        { "en": "Bring a laptop with Python installed; setup instructions are sent before the event.", "tr": "Python kurulu bir dizüstü bilgisayar getirin; kurulum yönergeleri etkinlikten önce gönderilir." }
      ],
      "soonMessage": {
        "en": "Registration has not opened yet. Come back on the opening date or follow our social channels.",
        "tr": "Kayıtlar henüz açılmadı. Açılış tarihinde tekrar gelin veya sosyal medya hesaplarımızı takip edin."
      },
      "closedMessage": {
        "en": "Registration is closed. Thank you for the interest — follow us for the next event!",
        "tr": "Kayıtlar kapandı. İlginiz için teşekkürler — bir sonraki etkinlik için bizi takip edin!"
      },
      "openNote": {
        "en": "Having trouble with the embedded form? Use the button to open it in a new tab.",
        "tr": "Gömülü formda sorun mu yaşıyorsunuz? Formu yeni sekmede açmak için düğmeyi kullanın."
      }
    },
    "decade": {
      "enabled": true,
      "inNav": false,
      "navLabel": { "en": "A decade", "tr": "On yıl" },
      "eyebrow": { "en": "A decade of quantum", "tr": "Kuantumda on yıl" },
      "title": { "en": "Ten years since quantum went on the cloud", "tr": "Kuantumun buluta çıkmasının üzerinden on yıl geçti" },
      "intro": {
        "en": "Qiskit Fall Fest 2026 celebrates a decade of quantum computing being available to anyone with an internet connection.",
        "tr": "Qiskit Fall Fest 2026, kuantum hesaplamanın internet bağlantısı olan herkese açık olmasının onuncu yılını kutluyor."
      },
      "timeline": [
        { "year": "2016", "text": { "en": "IBM puts the first quantum processor on the cloud — five qubits anyone can program.", "tr": "IBM ilk kuantum işlemcisini buluta koyar — herkesin programlayabileceği beş kübit." } },
        { "year": "2017", "text": { "en": "Qiskit is released as an open-source SDK for building and running quantum circuits.", "tr": "Qiskit, kuantum devreleri kurmak ve çalıştırmak için açık kaynaklı bir SDK olarak yayınlanır." } },
        { "year": "2019", "text": { "en": "IBM Q System One, the first integrated quantum computing system for commercial use.", "tr": "Ticari kullanım için ilk entegre kuantum hesaplama sistemi IBM Q System One tanıtılır." } },
        { "year": "2021", "text": { "en": "The 127-qubit Eagle processor breaks the 100-qubit barrier.", "tr": "127 kübitlik Eagle işlemcisi 100 kübit sınırını aşar." } },
        { "year": "2023", "text": { "en": "Utility-scale experiments show quantum computers outperforming brute-force classical simulation on a 127-qubit problem.", "tr": "Fayda ölçeğindeki deneyler, 127 kübitlik bir problemde kuantum bilgisayarların kaba kuvvet klasik simülasyonu geride bıraktığını gösterir." } },
        { "year": "2024", "text": { "en": "Qiskit 1.0 — the first stable major release of the SDK.", "tr": "Qiskit 1.0 — SDK'nın ilk kararlı ana sürümü." } },
        { "year": "2026", "text": { "en": "Fall Fest comes to Sabancı University. Your turn to write the next chapter.", "tr": "Fall Fest Sabancı Üniversitesi'ne geliyor. Sonraki bölümü yazma sırası sende." } }
      ]
    },
    "venue": {
      "enabled": true,
      "navLabel": { "en": "Venue", "tr": "Mekân" },
      "eyebrow": { "en": "Venue", "tr": "Mekân" },
      "title": { "en": "Find us on campus", "tr": "Bizi kampüste bul" },
      "body": {
        "en": "The event takes place at Sabancı University's Tuzla campus. The exact building and room will be shared with confirmed participants.",
        "tr": "Etkinlik Sabancı Üniversitesi Tuzla kampüsünde gerçekleşir. Bina ve salon bilgisi kayıtları onaylanan katılımcılarla paylaşılacaktır."
      },
      "directions": [
        { "en": "Shuttle buses run between Kadıköy / Pendik and the campus — check the university's shuttle timetable.", "tr": "Kadıköy / Pendik ile kampüs arasında servisler çalışır — üniversitenin servis saatlerine bakın." },
        { "en": "By car: free visitor parking is available near the main gate.", "tr": "Araçla: ana kapı yakınında ücretsiz ziyaretçi otoparkı bulunur." },
        { "en": "Non-Sabancı participants: bring a photo ID for campus entry.", "tr": "Sabancı öğrencisi olmayan katılımcılar: kampüs girişi için fotoğraflı kimlik getirin." }
      ]
    },
    "faq": {
      "enabled": true,
      "navLabel": { "en": "FAQ", "tr": "SSS" },
      "eyebrow": { "en": "FAQ", "tr": "Sıkça sorulan sorular" },
      "title": { "en": "Questions you may have", "tr": "Aklına takılanlar" },
      "items": [
        { "q": { "en": "Who can attend?", "tr": "Kimler katılabilir?" }, "a": { "en": "Any university student in Türkiye — Sabancı or not. A few seats are reserved for high-school students and recent graduates; mention it in the form.", "tr": "Türkiye'deki tüm üniversite öğrencileri — Sabancı'dan olsun olmasın. Lise öğrencileri ve yeni mezunlar için az sayıda kontenjan ayrılmıştır; formda belirtin." } },
        { "q": { "en": "How much does it cost?", "tr": "Ücreti ne kadar?" }, "a": { "en": "Nothing. Participation, workshops and the hackathon are free. Lunch and coffee are on us.", "tr": "Hiç. Katılım, atölyeler ve hackathon ücretsizdir. Öğle yemeği ve kahve bizden." } },
        { "q": { "en": "Do I need to know quantum computing already?", "tr": "Önceden kuantum bilmem gerekiyor mu?" }, "a": { "en": "No. Day 1 starts from scratch. Basic Python helps for the hackathon; we share a short prep guide before the event.", "tr": "Hayır. 1. gün sıfırdan başlar. Hackathon için temel Python faydalıdır; etkinlikten önce kısa bir hazırlık rehberi paylaşıyoruz." } },
        { "q": { "en": "What should I bring?", "tr": "Yanımda ne getirmeliyim?" }, "a": { "en": "A laptop, its charger and a free IBM Quantum account (we will help you create one).", "tr": "Dizüstü bilgisayar, şarj aleti ve ücretsiz bir IBM Quantum hesabı (oluşturmanıza yardımcı olacağız)." } },
        { "q": { "en": "Will I get a certificate?", "tr": "Sertifika alacak mıyım?" }, "a": { "en": "Yes — participants who attend both days receive a certificate of participation from QSB|SU.", "tr": "Evet — her iki güne de katılanlara QSB|SU tarafından katılım sertifikası verilir." } },
        { "q": { "en": "What language is the event in?", "tr": "Etkinlik hangi dilde?" }, "a": { "en": "Talks and workshops are in English; mentors speak Turkish and English.", "tr": "Konuşmalar ve atölyeler İngilizcedir; mentorlar Türkçe ve İngilizce konuşur." } },
        { "q": { "en": "Can I join only one day?", "tr": "Sadece bir güne katılabilir miyim?" }, "a": { "en": "Yes, but the hackathon builds on Day 1, so we recommend attending both.", "tr": "Evet, ancak hackathon 1. günün üzerine kurulduğu için iki güne de katılmanızı öneririz." } }
      ]
    },
    "organizers": {
      "enabled": true,
      "inNav": false,
      "navLabel": { "en": "Team", "tr": "Ekip" },
      "eyebrow": { "en": "Organizing team", "tr": "Organizasyon ekibi" },
      "title": { "en": "Made by students, for students", "tr": "Öğrenciler tarafından, öğrenciler için" },
      "intro": { "en": "QSB|SU members who make Fall Fest happen. Say hi on the day!", "tr": "Fall Fest'i gerçekleştiren QSB|SU üyeleri. Etkinlik günü merhaba deyin!" },
      "items": [
        { "name": "Name Surname", "role": { "en": "Event lead", "tr": "Etkinlik sorumlusu" }, "photo": "", "link": "" },
        { "name": "Name Surname", "role": { "en": "Program & speakers", "tr": "Program ve konuşmacılar" }, "photo": "", "link": "" },
        { "name": "Name Surname", "role": { "en": "Hackathon & mentors", "tr": "Hackathon ve mentorlar" }, "photo": "", "link": "" },
        { "name": "Name Surname", "role": { "en": "Communication & design", "tr": "İletişim ve tasarım" }, "photo": "", "link": "" }
      ]
    },
    "partners": {
      "enabled": true,
      "inNav": false,
      "navLabel": { "en": "Partners", "tr": "Partnerler" },
      "eyebrow": { "en": "Partners", "tr": "Partnerler" },
      "title": { "en": "With the support of", "tr": "Desteğiyle" },
      "items": [
        { "name": "IBM Quantum · Qiskit Fall Fest", "logo": "", "link": "https://www.ibm.com/quantum", "tier": { "en": "Program partner", "tr": "Program partneri" } },
        { "name": "Sabancı University", "logo": "", "link": "https://www.sabanciuniv.edu", "tier": { "en": "Host campus", "tr": "Ev sahibi kampüs" } },
        { "name": "Your logo here", "logo": "", "link": "", "tier": { "en": "Sponsor", "tr": "Sponsor" } }
      ]
    },
    "conduct": {
      "enabled": true,
      "inNav": false,
      "navLabel": { "en": "Code of Conduct", "tr": "Davranış Kuralları" },
      "eyebrow": { "en": "Code of Conduct", "tr": "Davranış Kuralları" },
      "title": { "en": "A welcoming space for everyone", "tr": "Herkes için kapsayıcı bir ortam" },
      "body": {
        "en": "Qiskit Fall Fest 2026 follows the Qiskit Code of Conduct. Every participant, speaker, mentor and organizer is expected to be respectful and inclusive. If you experience or witness unacceptable behavior, contact the organizing team immediately.",
        "tr": "Qiskit Fall Fest 2026, Qiskit Davranış Kuralları'na uyar. Her katılımcı, konuşmacı, mentor ve organizatörden saygılı ve kapsayıcı olması beklenir. Kabul edilemez bir davranışla karşılaşır veya tanık olursanız, organizasyon ekibiyle hemen iletişime geçin."
      },
      "url": "https://quantum.cloud.ibm.com/docs/open-source/code-of-conduct",
      "linkLabel": { "en": "Read the Qiskit Code of Conduct", "tr": "Qiskit Davranış Kuralları'nı oku" }
    },
    "contact": {
      "enabled": true,
      "navLabel": { "en": "Contact", "tr": "İletişim" },
      "eyebrow": { "en": "Contact", "tr": "İletişim" },
      "title": { "en": "Questions? Reach out", "tr": "Sorun mu var? Bize yaz" },
      "body": {
        "en": "For sponsorship, speaking or general questions, e-mail us or message us on social media.",
        "tr": "Sponsorluk, konuşmacılık veya genel sorular için bize e-posta gönderin ya da sosyal medyadan yazın."
      },
      "email": "contact@example.com",
      "community": {
        "label": { "en": "Join the participant group", "tr": "Katılımcı grubuna katıl" },
        "url": ""
      },
      "social": [
        { "name": "Instagram", "url": "" },
        { "name": "LinkedIn", "url": "" },
        { "name": "X", "url": "" },
        { "name": "Discord", "url": "" }
      ]
    }
  },
  "footer": {
    "legal": {
      "en": "Qiskit® and IBM® are registered trademarks of International Business Machines Corporation. This event is organized by students of QSB|SU as part of the global Qiskit Fall Fest 2026 program; it is not an IBM event.",
      "tr": "Qiskit® ve IBM®, International Business Machines Corporation'ın tescilli markalarıdır. Bu etkinlik, küresel Qiskit Fall Fest 2026 programı kapsamında QSB|SU öğrencileri tarafından düzenlenmektedir; bir IBM etkinliği değildir."
    },
    "credits": {
      "en": "© 2026 QSB|SU — Quantum Technologies Club, Sabancı University Branch",
      "tr": "© 2026 QSB|SU — Kuantum Teknolojileri Kulübü, Sabancı Üniversitesi Şubesi"
    }
  }
};
