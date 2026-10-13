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
      "en": "Qiskit Fall Fest 2026 at Sabancı University on 24 October, organized by QSB|SU: a one-day program of talks and student presentations on quantum computing. Free to attend.",
      "tr": "QSB|SU tarafından 24 Ekim'de Sabancı Üniversitesi'nde düzenlenen Qiskit Fall Fest 2026: kuantum hesaplama üzerine konuşmalar ve öğrenci sunumlarından oluşan tek günlük program. Katılım ücretsiz."
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
    "enabled": false,
    "text": {
      "en": "Dates and program are tentative — registration opens soon. Follow us for updates.",
      "tr": "Tarihler ve program geçicidir — kayıtlar yakında açılıyor. Güncellemeler için bizi takip edin."
    },
    "link": ""
  },
  "event": {
    "name": {
      "en": "Qiskit Fall Fest 2026",
      "tr": "Qiskit Fall Fest 2026"
    },
    "edition": {
      "en": "Sabancı University Edition",
      "tr": "Sabancı Üniversitesi Edisyonu"
    },
    "host": {
      "en": "QSB|SU · Quantum Technologies Club, Sabancı University Branch",
      "tr": "QSB|SU · Kuantum Teknolojileri Kulübü, Sabancı Üniversitesi Şubesi"
    },
    "tagline": {
      "en": "One day of quantum computing on campus: talks from our faculty and guests, plus student presentations.",
      "tr": "Kampüste bir gün boyunca kuantum hesaplama: hocalarımızdan ve konuklarımızdan konuşmalar, öğrenci sunumları."
    },
    "startDate": "2026-10-24",
    "endDate": "2026-10-24",
    "startTime": "10:00",
    "endTime": "",
    "format": {
      "en": "In person · Free of charge",
      "tr": "Yüz yüze · Ücretsiz"
    },
    "audience": {
      "en": "Open to all students",
      "tr": "Tüm öğrencilere açık"
    },
    "logo": "",
    "hostLogo": "assets/img/qsb-su-logo.svg",
    "venue": {
      "name": {
        "en": "Sabancı University, Tuzla Campus",
        "tr": "Sabancı Üniversitesi, Tuzla Kampüsü"
      },
      "room": {
        "en": "Room to be announced",
        "tr": "Salon daha sonra duyurulacak"
      },
      "address": {
        "en": "Orta Mahalle, Üniversite Cd. No:27, 34956 Tuzla / Istanbul",
        "tr": "Orta Mahalle, Üniversite Cd. No:27, 34956 Tuzla / İstanbul"
      },
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Sabanc%C4%B1+%C3%9Cniversitesi",
      "mapEmbedUrl": "https://maps.google.com/maps?q=Sabanc%C4%B1%20%C3%9Cniversitesi%20Tuzla&z=14&output=embed"
    },
    "ctaPrimary": {
      "en": "Register now",
      "tr": "Hemen kayıt ol"
    },
    "ctaSecondary": {
      "en": "See the program",
      "tr": "Programı gör"
    }
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
      "navLabel": {
        "en": "About",
        "tr": "Hakkında"
      },
      "eyebrow": {
        "en": "About the fest",
        "tr": "Festival hakkında"
      },
      "title": {
        "en": "A global celebration of quantum, hosted on our campus",
        "tr": "Kampüsümüzde küresel bir kuantum kutlaması"
      },
      "body": {
        "en": "Qiskit Fall Fest is a collection of quantum computing events held every autumn on university campuses around the world. The events are organized by students and supported by IBM Quantum, and they are built around Qiskit — the open-source SDK for working with quantum computers.\n\nThis year QSB|SU, the Sabancı University branch of the Quantum Technologies Club, brings Fall Fest to Tuzla on 24 October with a one-day program of talks and student presentations.",
        "tr": "Qiskit Fall Fest, her sonbahar dünya genelindeki üniversite kampüslerinde düzenlenen kuantum hesaplama etkinlikleri serisidir. Etkinlikler öğrenciler tarafından organize edilir, IBM Quantum tarafından desteklenir ve kuantum bilgisayarlarla çalışmak için kullanılan açık kaynaklı SDK olan Qiskit etrafında şekillenir.\n\nBu yıl Kuantum Teknolojileri Kulübü'nün Sabancı Üniversitesi şubesi QSB|SU, Fall Fest'i 24 Ekim'de konuşmalar ve öğrenci sunumlarından oluşan tek günlük bir programla Tuzla'ya taşıyor."
      },
      "stats": [],
      "pillars": [
        {
          "icon": "learn",
          "title": {
            "en": "Listen",
            "tr": "Dinle"
          },
          "text": {
            "en": "Talks from faculty and guest speakers on quantum computing and Qiskit.",
            "tr": "Hocalarımızdan ve konuk konuşmacılardan kuantum hesaplama ve Qiskit üzerine konuşmalar."
          }
        },
        {
          "icon": "build",
          "title": {
            "en": "Discover",
            "tr": "Keşfet"
          },
          "text": {
            "en": "See what fellow students are building with quantum in short presentations.",
            "tr": "Kısa sunumlarda öğrencilerin kuantumla neler yaptığını gör."
          }
        },
        {
          "icon": "connect",
          "title": {
            "en": "Connect",
            "tr": "Tanış"
          },
          "text": {
            "en": "Meet researchers and students who are just as curious about quantum as you are.",
            "tr": "Araştırmacılar ve kuantuma senin kadar meraklı öğrencilerle tanış."
          }
        }
      ]
    },
    "dates": {
      "enabled": true,
      "navLabel": {
        "en": "Dates",
        "tr": "Tarihler"
      },
      "eyebrow": {
        "en": "Key dates",
        "tr": "Önemli tarihler"
      },
      "title": {
        "en": "Key dates",
        "tr": "Önemli tarihler"
      },
      "intro": {
        "en": "Mark your calendar.",
        "tr": "Takvimini işaretle."
      },
      "items": [
        {
          "label": {
            "en": "Registration deadline",
            "tr": "Son kayıt tarihi"
          },
          "date": "2026-10-16",
          "time": "23:59",
          "note": {
            "en": "Online registration form (Google Forms)",
            "tr": "Çevrimiçi kayıt formu (Google Forms)"
          },
          "highlight": false
        },
        {
          "label": {
            "en": "Qiskit Fall Fest",
            "tr": "Qiskit Fall Fest"
          },
          "date": "2026-10-24",
          "time": "10:00",
          "note": {
            "en": "Sabancı University, Tuzla",
            "tr": "Sabancı Üniversitesi, Tuzla"
          },
          "highlight": true
        }
      ]
    },
    "schedule": {
      "enabled": true,
      "navLabel": {
        "en": "Program",
        "tr": "Program"
      },
      "eyebrow": {
        "en": "Program",
        "tr": "Program"
      },
      "title": {
        "en": "Program · 24 October",
        "tr": "Program · 24 Ekim"
      },
      "intro": {
        "en": "All times are Istanbul time (UTC+3).",
        "tr": "Tüm saatler İstanbul saatidir (UTC+3)."
      },
      "days": [
        {
          "label": {
            "en": "24 October",
            "tr": "24 Ekim"
          },
          "date": "2026-10-24",
          "items": [
            {
              "start": "10:00",
              "end": "10:20",
              "type": "talk",
              "title": {
                "en": "Opening",
                "tr": "Açılış"
              },
              "speaker": "",
              "location": {
                "en": "",
                "tr": ""
              }
            },
            {
              "start": "10:20",
              "end": "11:00",
              "type": "talk",
              "title": {
                "en": "Talk",
                "tr": "Konuşma"
              },
              "speaker": "İsmet Hoca",
              "location": {
                "en": "",
                "tr": ""
              }
            },
            {
              "start": "11:10",
              "end": "11:50",
              "type": "talk",
              "title": {
                "en": "Talk",
                "tr": "Konuşma"
              },
              "speaker": "Valeriya",
              "location": {
                "en": "",
                "tr": ""
              }
            },
            {
              "start": "12:00",
              "end": "13:00",
              "type": "break",
              "title": {
                "en": "Lunch",
                "tr": "Öğle yemeği"
              },
              "speaker": "",
              "location": {
                "en": "",
                "tr": ""
              }
            },
            {
              "start": "13:10",
              "end": "14:00",
              "type": "talk",
              "title": {
                "en": "Student presentations (2)",
                "tr": "Öğrenci sunumları (2)"
              },
              "speaker": "",
              "location": {
                "en": "",
                "tr": ""
              }
            },
            {
              "start": "14:10",
              "end": "15:00",
              "type": "talk",
              "title": {
                "en": "Talk",
                "tr": "Konuşma"
              },
              "speaker": "Özlem Hoca",
              "location": {
                "en": "",
                "tr": ""
              }
            },
            {
              "start": "15:00",
              "end": "15:30",
              "type": "break",
              "title": {
                "en": "Break",
                "tr": "Mola"
              },
              "speaker": "",
              "location": {
                "en": "",
                "tr": ""
              }
            },
            {
              "start": "15:30",
              "end": "",
              "type": "",
              "title": {
                "en": "To be announced",
                "tr": "Duyurulacak"
              },
              "speaker": "",
              "location": {
                "en": "",
                "tr": ""
              }
            }
          ]
        }
      ]
    },
    "tracks": {
      "enabled": false,
      "navLabel": {
        "en": "Hackathon",
        "tr": "Hackathon"
      },
      "eyebrow": {
        "en": "Hackathon",
        "tr": "Hackathon"
      },
      "title": {
        "en": "Pick a track, build with Qiskit",
        "tr": "Bir parkur seç, Qiskit ile üret"
      },
      "intro": {
        "en": "Teams of 2–4 work on a challenge for one day and present their results to a jury. No prior quantum experience is needed for the Beginner track.",
        "tr": "2–4 kişilik takımlar bir gün boyunca bir problem üzerinde çalışır ve sonuçlarını jüriye sunar. Başlangıç parkuru için önceden kuantum bilgisi gerekmez."
      },
      "items": [
        {
          "name": {
            "en": "Beginner track",
            "tr": "Başlangıç parkuru"
          },
          "level": {
            "en": "No experience needed",
            "tr": "Deneyim gerekmez"
          },
          "teamSize": "1–2",
          "description": {
            "en": "Guided challenges that follow the Day 1 workshops: build, measure and visualize circuits, then run them on a real backend.",
            "tr": "1. gün atölyelerini takip eden rehberli görevler: devreler kur, ölç ve görselleştir; ardından gerçek bir arka uçta çalıştır."
          }
        },
        {
          "name": {
            "en": "General track",
            "tr": "Genel parkur"
          },
          "level": {
            "en": "Some Python & Qiskit",
            "tr": "Biraz Python ve Qiskit"
          },
          "teamSize": "2–4",
          "description": {
            "en": "An open problem announced at the briefing — optimization, simulation or quantum machine learning. Creativity and rigor both count.",
            "tr": "Bilgilendirmede açıklanan açık bir problem — optimizasyon, simülasyon veya kuantum makine öğrenmesi. Yaratıcılık ve titizlik birlikte puanlanır."
          }
        }
      ],
      "rulesTitle": {
        "en": "Rules in short",
        "tr": "Kısaca kurallar"
      },
      "rules": [
        {
          "en": "All solutions must be built with the Qiskit SDK and run on a simulator or IBM Quantum hardware.",
          "tr": "Tüm çözümler Qiskit SDK ile geliştirilmeli ve bir simülatörde ya da IBM Quantum donanımında çalıştırılmalıdır."
        },
        {
          "en": "Teams of 2–4 for the General track, individuals or pairs for the Beginner track. Teams are formed on Day 1.",
          "tr": "Genel parkurda 2–4 kişilik takımlar, Başlangıç parkurunda bireysel ya da ikili katılım. Takımlar 1. günde kurulur."
        },
        {
          "en": "Work must be done during the event; libraries and public resources are fine, pre-built projects are not.",
          "tr": "Çalışma etkinlik sırasında yapılmalıdır; kütüphaneler ve açık kaynaklar serbest, önceden hazırlanmış projeler kabul edilmez."
        },
        {
          "en": "Submit a repository link and a 3-minute presentation before the deadline on Day 2.",
          "tr": "2. gündeki son saatten önce bir depo bağlantısı ve 3 dakikalık bir sunum teslim edin."
        },
        {
          "en": "Judging: technical depth, creativity, clarity of the presentation, and how well Qiskit is used.",
          "tr": "Değerlendirme: teknik derinlik, yaratıcılık, sunumun netliği ve Qiskit'in ne kadar iyi kullanıldığı."
        },
        {
          "en": "The Qiskit Code of Conduct applies to everyone, at all times.",
          "tr": "Qiskit Davranış Kuralları herkes için, her zaman geçerlidir."
        }
      ]
    },
    "speakers": {
      "enabled": false,
      "navLabel": {
        "en": "Speakers",
        "tr": "Konuşmacılar"
      },
      "eyebrow": {
        "en": "Speakers & mentors",
        "tr": "Konuşmacılar ve mentorlar"
      },
      "title": {
        "en": "Learn from people who do this every day",
        "tr": "Bu işi her gün yapanlardan öğren"
      },
      "intro": {
        "en": "More names will be announced as they are confirmed.",
        "tr": "Kesinleştikçe yeni isimler duyurulacak."
      },
      "items": [
        {
          "name": "To be announced",
          "role": {
            "en": "Keynote speaker",
            "tr": "Açılış konuşmacısı"
          },
          "org": "",
          "photo": "",
          "link": ""
        },
        {
          "name": "To be announced",
          "role": {
            "en": "Workshop lead",
            "tr": "Atölye yürütücüsü"
          },
          "org": "",
          "photo": "",
          "link": ""
        }
      ]
    },
    "registration": {
      "enabled": true,
      "navLabel": {
        "en": "Register",
        "tr": "Kayıt"
      },
      "eyebrow": {
        "en": "Registration",
        "tr": "Kayıt"
      },
      "title": {
        "en": "Save your seat",
        "tr": "Yerini ayırt"
      },
      "intro": {
        "en": "Participation is free. Click the button to fill in the registration form.",
        "tr": "Katılım ücretsizdir. Kayıt formunu doldurmak için düğmeye tıklayın."
      },
      "opens": "2026-09-21",
      "closes": "2026-10-16",
      "status": "auto",
      "formUrl": "https://forms.gle/tCiq3mPdr6U6o4Xf6",
      "embed": false,
      "embedHeight": 1500,
      "eligibility": [
        {
          "en": "Open to all university students — Sabancı or not.",
          "tr": "Sabancı'dan olsun olmasın tüm üniversite öğrencilerine açıktır."
        }
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
      "enabled": false,
      "inNav": false,
      "navLabel": {
        "en": "A decade",
        "tr": "On yıl"
      },
      "eyebrow": {
        "en": "A decade of quantum",
        "tr": "Kuantumda on yıl"
      },
      "title": {
        "en": "Ten years since quantum went on the cloud",
        "tr": "Kuantumun buluta çıkmasının üzerinden on yıl geçti"
      },
      "intro": {
        "en": "Qiskit Fall Fest 2026 celebrates a decade of quantum computing being available to anyone with an internet connection.",
        "tr": "Qiskit Fall Fest 2026, kuantum hesaplamanın internet bağlantısı olan herkese açık olmasının onuncu yılını kutluyor."
      },
      "timeline": [
        {
          "year": "2016",
          "text": {
            "en": "IBM puts the first quantum processor on the cloud — five qubits anyone can program.",
            "tr": "IBM ilk kuantum işlemcisini buluta koyar — herkesin programlayabileceği beş kübit."
          }
        },
        {
          "year": "2017",
          "text": {
            "en": "Qiskit is released as an open-source SDK for building and running quantum circuits.",
            "tr": "Qiskit, kuantum devreleri kurmak ve çalıştırmak için açık kaynaklı bir SDK olarak yayınlanır."
          }
        },
        {
          "year": "2019",
          "text": {
            "en": "IBM Q System One, the first integrated quantum computing system for commercial use.",
            "tr": "Ticari kullanım için ilk entegre kuantum hesaplama sistemi IBM Q System One tanıtılır."
          }
        },
        {
          "year": "2021",
          "text": {
            "en": "The 127-qubit Eagle processor breaks the 100-qubit barrier.",
            "tr": "127 kübitlik Eagle işlemcisi 100 kübit sınırını aşar."
          }
        },
        {
          "year": "2023",
          "text": {
            "en": "Utility-scale experiments show quantum computers outperforming brute-force classical simulation on a 127-qubit problem.",
            "tr": "Fayda ölçeğindeki deneyler, 127 kübitlik bir problemde kuantum bilgisayarların kaba kuvvet klasik simülasyonu geride bıraktığını gösterir."
          }
        },
        {
          "year": "2024",
          "text": {
            "en": "Qiskit 1.0 — the first stable major release of the SDK.",
            "tr": "Qiskit 1.0 — SDK'nın ilk kararlı ana sürümü."
          }
        },
        {
          "year": "2026",
          "text": {
            "en": "Fall Fest comes to Sabancı University. Your turn to write the next chapter.",
            "tr": "Fall Fest Sabancı Üniversitesi'ne geliyor. Sonraki bölümü yazma sırası sende."
          }
        }
      ]
    },
    "venue": {
      "enabled": true,
      "navLabel": {
        "en": "Venue",
        "tr": "Mekân"
      },
      "eyebrow": {
        "en": "Venue",
        "tr": "Mekân"
      },
      "title": {
        "en": "Find us on campus",
        "tr": "Bizi kampüste bul"
      },
      "body": {
        "en": "The event takes place at Sabancı University's Tuzla campus. The exact building and room will be announced before the event.",
        "tr": "Etkinlik Sabancı Üniversitesi Tuzla kampüsünde gerçekleşir. Bina ve salon bilgisi etkinlikten önce duyurulacaktır."
      },
      "directions": [
        {
          "en": "Shuttle buses run between Kadıköy / Pendik and the campus — check the university's shuttle timetable.",
          "tr": "Kadıköy / Pendik ile kampüs arasında servisler çalışır — üniversitenin servis saatlerine bakın."
        },
        {
          "en": "By car: free visitor parking is available near the main gate.",
          "tr": "Araçla: ana kapı yakınında ücretsiz ziyaretçi otoparkı bulunur."
        },
        {
          "en": "Non-Sabancı participants: bring a photo ID for campus entry.",
          "tr": "Sabancı öğrencisi olmayan katılımcılar: kampüs girişi için fotoğraflı kimlik getirin."
        }
      ]
    },
    "faq": {
      "enabled": true,
      "navLabel": {
        "en": "FAQ",
        "tr": "SSS"
      },
      "eyebrow": {
        "en": "FAQ",
        "tr": "Sıkça sorulan sorular"
      },
      "title": {
        "en": "Questions you may have",
        "tr": "Aklına takılanlar"
      },
      "items": [
        {
          "q": {
            "en": "Who can attend?",
            "tr": "Kimler katılabilir?"
          },
          "a": {
            "en": "Any university student — Sabancı or not. Just fill in the registration form.",
            "tr": "Sabancı'dan olsun olmasın tüm üniversite öğrencileri. Kayıt formunu doldurman yeterli."
          }
        },
        {
          "q": {
            "en": "How much does it cost?",
            "tr": "Ücreti ne kadar?"
          },
          "a": {
            "en": "Nothing — participation is free, and lunch is on us.",
            "tr": "Hiç — katılım ücretsiz, öğle yemeği de bizden."
          }
        },
        {
          "q": {
            "en": "Do I need to know quantum computing already?",
            "tr": "Önceden kuantum bilmem gerekiyor mu?"
          },
          "a": {
            "en": "No. The talks are open to everyone curious about quantum computing.",
            "tr": "Hayır. Konuşmalar kuantum hesaplamaya meraklı herkese açık."
          }
        }
      ]
    },
    "organizers": {
      "enabled": true,
      "inNav": false,
      "navLabel": {
        "en": "Team",
        "tr": "Ekip"
      },
      "eyebrow": {
        "en": "Organizing team",
        "tr": "Organizasyon ekibi"
      },
      "title": {
        "en": "Made by students, for students",
        "tr": "Öğrenciler tarafından, öğrenciler için"
      },
      "intro": {
        "en": "QSB|SU members who make Fall Fest happen. Say hi on the day!",
        "tr": "Fall Fest'i gerçekleştiren QSB|SU üyeleri. Etkinlik günü merhaba deyin!"
      },
      "items": [
        {
          "name": "Name Surname",
          "role": {
            "en": "Event lead",
            "tr": "Etkinlik sorumlusu"
          },
          "photo": "",
          "link": ""
        },
        {
          "name": "Name Surname",
          "role": {
            "en": "Program & speakers",
            "tr": "Program ve konuşmacılar"
          },
          "photo": "",
          "link": ""
        },
        {
          "name": "Name Surname",
          "role": {
            "en": "Hackathon & mentors",
            "tr": "Hackathon ve mentorlar"
          },
          "photo": "",
          "link": ""
        },
        {
          "name": "Name Surname",
          "role": {
            "en": "Communication & design",
            "tr": "İletişim ve tasarım"
          },
          "photo": "",
          "link": ""
        }
      ]
    },
    "partners": {
      "enabled": true,
      "inNav": false,
      "navLabel": {
        "en": "Partners",
        "tr": "Partnerler"
      },
      "eyebrow": {
        "en": "Partners",
        "tr": "Partnerler"
      },
      "title": {
        "en": "With the support of",
        "tr": "Desteğiyle"
      },
      "items": [
        {
          "name": "IBM Quantum · Qiskit Fall Fest",
          "logo": "",
          "link": "https://www.ibm.com/quantum",
          "tier": {
            "en": "Program partner",
            "tr": "Program partneri"
          }
        },
        {
          "name": "Sabancı University",
          "logo": "",
          "link": "https://www.sabanciuniv.edu",
          "tier": {
            "en": "Host campus",
            "tr": "Ev sahibi kampüs"
          }
        },
        {
          "name": "Your logo here",
          "logo": "",
          "link": "",
          "tier": {
            "en": "Sponsor",
            "tr": "Sponsor"
          }
        }
      ]
    },
    "conduct": {
      "enabled": true,
      "inNav": false,
      "navLabel": {
        "en": "Code of Conduct",
        "tr": "Davranış Kuralları"
      },
      "eyebrow": {
        "en": "Code of Conduct",
        "tr": "Davranış Kuralları"
      },
      "title": {
        "en": "A welcoming space for everyone",
        "tr": "Herkes için kapsayıcı bir ortam"
      },
      "body": {
        "en": "Qiskit Fall Fest 2026 follows the Qiskit Code of Conduct. Every participant, speaker, mentor and organizer is expected to be respectful and inclusive. If you experience or witness unacceptable behavior, contact the organizing team immediately.",
        "tr": "Qiskit Fall Fest 2026, Qiskit Davranış Kuralları'na uyar. Her katılımcı, konuşmacı, mentor ve organizatörden saygılı ve kapsayıcı olması beklenir. Kabul edilemez bir davranışla karşılaşır veya tanık olursanız, organizasyon ekibiyle hemen iletişime geçin."
      },
      "url": "https://quantum.cloud.ibm.com/docs/open-source/code-of-conduct",
      "linkLabel": {
        "en": "Read the Qiskit Code of Conduct",
        "tr": "Qiskit Davranış Kuralları'nı oku"
      }
    },
    "contact": {
      "enabled": true,
      "navLabel": {
        "en": "Contact",
        "tr": "İletişim"
      },
      "eyebrow": {
        "en": "Contact",
        "tr": "İletişim"
      },
      "title": {
        "en": "Questions? Reach out",
        "tr": "Sorun mu var? Bize yaz"
      },
      "body": {
        "en": "For sponsorship, speaking or general questions, e-mail us or message us on social media.",
        "tr": "Sponsorluk, konuşmacılık veya genel sorular için bize e-posta gönderin ya da sosyal medyadan yazın."
      },
      "email": "contact@example.com",
      "community": {
        "label": {
          "en": "Join the participant group",
          "tr": "Katılımcı grubuna katıl"
        },
        "url": ""
      },
      "social": [
        {
          "name": "Instagram",
          "url": ""
        },
        {
          "name": "LinkedIn",
          "url": ""
        },
        {
          "name": "X",
          "url": ""
        },
        {
          "name": "Discord",
          "url": ""
        }
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
