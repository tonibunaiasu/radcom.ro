export const defaultLocale = "en";

export const homeContentByLocale = {
  en: {
    hero: {
      title: "Integrated hardware + software for urban mobility",
      subtitle:
        "RADCOM designs and delivers complete ITS stacks — onboard hardware, control software, and passenger systems — for public transport operators.",
      ctaPrimary: "Explore services",
      ctaSecondary: "Contact us"
    },
    stats: [
      {
        value: "Dozens",
        label: "cities with RADCOM systems in daily operation"
      },
      {
        value: "Thousands",
        label: "vehicles connected to our platforms"
      },
      {
        value: "End-to-end",
        label: "hardware, software, and integration in one partner"
      }
    ],
    industries: [
      {
        title: "Transport",
        desc: "Complete software and hardware solutions for public transport."
      },
      {
        title: "Medical",
        desc: "Electronic medical records, patient portals, and lab/imaging integrations."
      },
      {
        title: "Telecom",
        desc: "Voice, VoIP, SMS/MMS, USSD, SS7, call center, and IVR platforms."
      },
      {
        title: "Media & Mobile",
        desc: "Mobile apps and multimedia content delivery platforms."
      },
      {
        title: "Internet",
        desc: "E-commerce, customer account, and identity management solutions."
      },
      {
        title: "EU Programs",
        desc: "EU funding consultancy and partnership opportunity development."
      }
    ],
    infrastructure: [
      {
        title: "Telecom Networks",
        desc: "Design, build, installation, and maintenance."
      },
      {
        title: "Electrical Works",
        desc: "Connections and electrical installations."
      },
      {
        title: "Fiber Optic Networks",
        desc: "Design, implementation, preventive and corrective maintenance."
      },
      {
        title: "Civil Construction",
        desc: "Technological and residential construction projects."
      },
      {
        title: "Automation Systems / SCADA",
        desc: "Solutions for wastewater and potable water systems."
      },
      {
        title: "EU-funded Projects",
        desc: "Developed by the RADCOM Telecom Networks Division."
      }
    ],
    advantages: [
      {
        title: "Responsiveness",
        desc:
          "We build digital and physical products that adapt to every device type."
      },
      {
        title: "Customization",
        desc:
          "We tailor communication solutions to each client’s operational needs."
      },
      {
        title: "UI Essentials",
        desc:
          "We focus on core UI elements: input, output, and user guidance."
      },
      {
        title: "Clean Code",
        desc:
          "We optimize code readability and documentation for maximum efficiency."
      }
    ],
    partners: {
      title: "Partners",
      subtitle:
        "We collaborate with public and private organizations to deliver scalable technology solutions in Romania."
    }
  },
  ro: {
    hero: {
      title: "Hardware + software integrat pentru mobilitate urbană",
      subtitle:
        "RADCOM proiectează și livrează sisteme ITS complete — hardware la bord, software de control și informare pasageri — pentru operatori de transport public.",
      ctaPrimary: "Descoperă serviciile",
      ctaSecondary: "Contactează-ne"
    },
    stats: [
      {
        value: "Zeci",
        label: "de orașe cu sisteme RADCOM în exploatare"
      },
      {
        value: "Mii",
        label: "de vehicule conectate la platformele noastre"
      },
      {
        value: "End-to-end",
        label: "hardware, software și integrare printr-un singur partener"
      }
    ],
    industries: [
      {
        title: "Transport",
        desc: "Soluții software și hardware complete pentru industria transporturilor."
      },
      {
        title: "Medical",
        desc: "Dosar medical electronic, portal pacienți, integrare analize și imagistică."
      },
      {
        title: "Telecom",
        desc: "Platforme pentru voce, VoIP, SMS/MMS, USSD, SS7, call center, IVR."
      },
      {
        title: "Media & Mobile",
        desc: "Aplicații mobile și platforme multimedia de livrare de conținut."
      },
      {
        title: "Internet",
        desc: "Magazin online, contul meu, gestiune identitate utilizatori."
      },
      {
        title: "Programe europene",
        desc: "Consultanță finanțare europeană, identificare oportunități parteneriate."
      }
    ],
    infrastructure: [
      {
        title: "Rețele de telecomunicații",
        desc: "Proiectare, construire, instalare și mentenanță."
      },
      {
        title: "Lucrări electrice",
        desc: "Branșamente și instalații electrice."
      },
      {
        title: "Rețele de fibră optică",
        desc: "Proiectare, implementare, mentenanță preventivă și corectivă."
      },
      {
        title: "Construcții civile",
        desc: "Construcții tehnologice și rezidențiale."
      },
      {
        title: "Sisteme de automatizări / SCADA",
        desc: "Soluții în domeniul apelor uzate și potabile."
      },
      {
        title: "Proiecte cu fonduri europene",
        desc: "Dezvoltate de Divizia de Rețele de Telecomunicații RADCOM."
      }
    ],
    advantages: [
      {
        title: "Responsivitate",
        desc:
          "Construim produse digitale și fizice care se autoadaptează pentru toate tipurile de dispozitive."
      },
      {
        title: "Customizare",
        desc:
          "Particularizăm soluțiile de comunicații pentru nevoile fiecărui client și flux operațional."
      },
      {
        title: "Elementele UI",
        desc:
          "Ne concentrăm pe elementele UI esențiale: input, output și ajutor pentru utilizator."
      },
      {
        title: "Linii de cod curate",
        desc:
          "Optimizăm lizibilitatea codului și a documentației pentru eficiență maximă."
      }
    ],
    partners: {
      title: "Parteneri",
      subtitle:
        "Colaborăm cu organizații publice și private pentru soluții tehnologice scalabile în România."
    }
  }
};

export const homeContent = homeContentByLocale[defaultLocale];

export const servicesContentByLocale = {
  en: [
    {
      id: "ifleet",
      title: "iFleet",
      subtitle: "Extended Fleet Management",
      description:
        "A complete fleet management system for public transport. Includes automatic passenger counting, real-time video monitoring, GPS tracking, and advanced reporting.",
      features: [
        "End-to-end fleet management",
        "Automatic passenger counting",
        "Real-time video monitoring",
        "GPS tracking and vehicle monitoring",
        "Reporting and data analytics",
        "Integrated onboard computer"
      ],
      link: "/servicii/ifleet",
      tone: "accent"
    },
    {
      id: "optifare",
      title: "OptiFare",
      subtitle: "E-Ticketing System",
      description:
        "Advanced e-ticketing for public transport. MIFARE validation, contactless payments, NFC support, and an interactive passenger interface.",
      features: [
        "MIFARE smart card validation",
        "Visa and MasterCard payments",
        "Apple Pay / Google Pay support",
        "Payment confirmation receipts",
        "Interactive passenger interface",
        "Rugged anti-vandal validators"
      ],
      link: "/servicii/optifare",
      tone: "success"
    },
    {
      id: "exact",
      title: "eXact",
      subtitle: "Real Time Route Planning",
      description:
        "Smart passenger information system with real-time route planning, LED displays, and automated voice announcements.",
      features: [
        "Real-time route planner",
        "Visual and audio information",
        "Indoor/outdoor LED displays",
        "Estimated arrival times",
        "Automated voice announcements",
        "Line connections and transfers"
      ],
      link: "/servicii/exact",
      tone: "primary"
    }
  ],
  ro: [
    {
      id: "ifleet",
      title: "iFleet",
      subtitle: "Extended Fleet Management",
      description:
        "Sistem complet de management al flotei pentru transportul public. Include numărarea automată a pasagerilor, monitorizare video, tracking GPS și raportare avansată.",
      features: [
        "Management complet al flotei",
        "Numărare automată pasageri",
        "Monitorizare video în timp real",
        "Tracking GPS și urmărire vehicule",
        "Raportare și analiză date",
        "Computer On-Board integrat"
      ],
      link: "/servicii/ifleet",
      tone: "accent"
    },
    {
      id: "optifare",
      title: "OptiFare",
      subtitle: "E-Ticketing System",
      description:
        "Sistem avansat de e-ticketing pentru transport public. Validare Mifare, plată contactless, suport NFC și interfață interactivă pentru pasageri.",
      features: [
        "Validare carduri inteligente Mifare",
        "Plată Visa și MasterCard",
        "Suport Apple Pay / Google Pay",
        "Chitanțe confirmare plată",
        "Interfață interactivă pasageri",
        "Validatoare robuste anti-vandalism"
      ],
      link: "/servicii/optifare",
      tone: "success"
    },
    {
      id: "exact",
      title: "eXact",
      subtitle: "Real Time Route Planning",
      description:
        "Sistem inteligent de informații pentru pasageri cu planificator de rute în timp real, afișaje LED și anunțuri vocale.",
      features: [
        "Planificator rute în timp real",
        "Informații vizuale și audio",
        "Afișaje LED interioare/exterioare",
        "Timp estimat de ajungere",
        "Anunțuri vocale automate",
        "Conexiuni de linie și transfer"
      ],
      link: "/servicii/exact",
      tone: "primary"
    }
  ]
};

export const servicesContent = servicesContentByLocale[defaultLocale];

export const solutionsContent = [
  {
    id: "transport",
    slug: "transport",
    title: "Transport",
    description:
      "Soluții complete pentru transport public: ticketing, management flotă și informare pasageri.",
    benefits: [
      "Monitorizare în timp real",
      "Optimizare costuri și rute",
      "Experiență pasageri îmbunătățită"
    ]
  },
  {
    id: "medical",
    slug: "medical",
    title: "Medical",
    description:
      "Dosar medical electronic, portal pacienți și integrare analize medicale.",
    benefits: [
      "Fluxuri digitale sigure",
      "Integrare imagistică",
      "Acces rapid la date"
    ]
  },
  {
    id: "telecom",
    slug: "telecom",
    title: "Telecom",
    description:
      "Platforme pentru servicii de voce, VoIP, SMS/MMS, USSD, SS7 și call center.",
    benefits: [
      "Infrastructură scalabilă",
      "Integrare cu servicii existente",
      "Disponibilitate ridicată"
    ]
  },
  {
    id: "media-mobile",
    slug: "media-mobile",
    title: "Media & Mobile",
    description:
      "Aplicații mobile și platforme multimedia de livrare de conținut.",
    benefits: [
      "Experiențe digitale moderne",
      "Distribuție eficientă de conținut",
      "Analytics și monitorizare"
    ]
  },
  {
    id: "internet",
    slug: "internet",
    title: "Internet",
    description:
      "Soluții integrate de tip magazin online, contul meu, gestiune identitate utilizatori.",
    benefits: [
      "Fluxuri de vânzare optimizate",
      "Securitate și SSO",
      "Experiență omnichannel"
    ]
  }
];

export const articlesContent = [
  {
    id: "transport-vision-2025",
    slug: "transport-vision-2025",
    title: "Public Transport 2025: Data-driven Operations",
    excerpt:
      "How integrated ITS platforms help operators improve punctuality, reduce costs, and deliver a better passenger experience.",
    publishedAt: "2025-12-15T00:00:00.000Z",
    author: "RADCOM Team",
    tags: ["Public Transport", "ITS"],
    image: "/blog/blog-1.jpg",
    content:
      "## Connected fleets, smarter cities\n\nModern public transport relies on real-time data, predictive analytics, and unified systems. RADCOM integrates fleet management, e-ticketing, and passenger information into a single operational view.\n\n### What operators gain\n\n- Better service regularity and punctuality\n- Faster incident response\n- Accurate ridership and revenue insights\n\n## Passenger-first experience\n\nWhen operational data is connected, the passenger experience becomes measurable and optimizable. Clear information, reliable schedules, and frictionless payments build trust.\n\n## The next step\n\nRADCOM works with operators to design scalable ITS architectures that fit local requirements."
  },
  {
    id: "fare-collection-future",
    slug: "fare-collection-future",
    title: "E-ticketing Trends: From Cards to Cloud",
    excerpt:
      "A short guide to modern fare collection, contactless payments, and why flexible back-office systems matter.",
    publishedAt: "2025-11-28T00:00:00.000Z",
    author: "RADCOM Team",
    tags: ["E-ticketing", "Payments"],
    image: "/blog/blog-2.jpg",
    content:
      "## Contactless as default\n\nPassengers expect quick, secure, and transparent payments. Contactless adoption keeps growing across public transport.\n\n### Core pillars\n\n- Secure validation hardware\n- Reliable transaction processing\n- Transparent reporting for operators\n\n## Why the back office matters\n\nA modern back-office platform makes it easy to introduce new tariffs, manage partnerships, and offer flexible travel products."
  },
  {
    id: "passenger-info-realtime",
    slug: "passenger-info-realtime",
    title: "Real-time Passenger Information at Scale",
    excerpt:
      "Delivering reliable arrival times and in-station updates across an urban transport network.",
    publishedAt: "2025-11-12T00:00:00.000Z",
    author: "RADCOM Team",
    tags: ["Passenger Info", "Operations"],
    image: "/blog/blog-3.jpg",
    content:
      "## Clarity builds confidence\n\nPassengers make better decisions when they see accurate arrival times and service updates.\n\n### Key components\n\n- LED displays and digital signage\n- Audio announcements\n- Mobile and web journey planning\n\n## Operational impact\n\nAccurate passenger information reduces delays, improves satisfaction, and reinforces brand trust."
  }
];

export const articlesContentByLocale = {
  en: articlesContent,
  ro: [
    {
      id: "transport-vision-2025",
      slug: "transport-vision-2025",
      title: "Transport public 2025: Operațiuni bazate pe date",
      excerpt:
        "Cum ajută platformele ITS integrate operatorii să îmbunătățească punctualitatea, să reducă costurile și să ofere o experiență mai bună pasagerilor.",
      publishedAt: "2025-12-15T00:00:00.000Z",
      author: "Echipa RADCOM",
      tags: ["Transport Public", "ITS"],
      image: "/blog/blog-1.jpg",
      content:
        "## Flote conectate, orașe mai inteligente\n\nTransportul public modern se bazează pe date în timp real, analiză predictivă și sisteme unificate. RADCOM integrează managementul flotei, e-ticketing și informarea pasagerilor într-o singură vedere operațională.\n\n### Ce câștigă operatorii\n\n- Regularitate și punctualitate mai bune\n- Răspuns mai rapid la incidente\n- Date precise despre fluxuri și venituri\n\n## Experiență centrată pe pasager\n\nCând datele operaționale sunt conectate, experiența pasagerilor devine măsurabilă și optimizabilă. Informații clare, orare fiabile și plăți fără fricțiune construiesc încredere.\n\n## Următorul pas\n\nRADCOM lucrează cu operatorii pentru a proiecta arhitecturi ITS scalabile, adaptate cerințelor locale."
    },
    {
      id: "fare-collection-future",
      slug: "fare-collection-future",
      title: "Tendințe în e-ticketing: de la carduri la cloud",
      excerpt:
        "Un ghid scurt despre taxarea modernă, plățile contactless și de ce contează un back-office flexibil.",
      publishedAt: "2025-11-28T00:00:00.000Z",
      author: "Echipa RADCOM",
      tags: ["E-ticketing", "Plăți"],
      image: "/blog/blog-2.jpg",
      content:
        "## Contactless ca standard\n\nPasagerii se așteaptă la plăți rapide, sigure și transparente. Adopția contactless continuă să crească în transportul public.\n\n### Pilonii de bază\n\n- Echipamente de validare sigure\n- Procesare fiabilă a tranzacțiilor\n- Raportare transparentă pentru operatori\n\n## De ce contează back-office-ul\n\nUn back-office modern face ușoară introducerea de tarife noi, gestionarea parteneriatelor și oferirea de produse de călătorie flexibile."
    },
    {
      id: "passenger-info-realtime",
      slug: "passenger-info-realtime",
      title: "Informarea pasagerilor în timp real, la scară",
      excerpt:
        "Cum livrăm timpi de sosire fiabili și actualizări în stații într-o rețea urbană.",
      publishedAt: "2025-11-12T00:00:00.000Z",
      author: "Echipa RADCOM",
      tags: ["Informare Pasageri", "Operațiuni"],
      image: "/blog/blog-3.jpg",
      content:
        "## Încredere prin date în timp real\n\nAfișajele și anunțurile în stații sunt utile doar atunci când datele sunt corecte și actualizate. Informația în timp real reduce incertitudinea și îmbunătățește experiența de călătorie.\n\n### Ce asigură acuratețea\n\n- Integrare directă cu vehiculele și dispeceratul\n- Actualizări automate la schimbări de traseu\n- Monitorizare continuă a calității datelor\n\n## De la infrastructură la experiență\n\nUn sistem de informare bine integrat transformă infrastructura în servicii predictibile, ușor de folosit, atât pentru pasageri, cât și pentru operatori."
    }
  ]
};

export const partnersContent = [
  { id: "2k-telecom", name: "2K Telecom", website: "https://2ktelecom.ro", logo: "/partners/2k-telecom.webp" },
  { id: "imi-mobile", name: "IMI Mobile", website: "https://imimobile.com", logo: "/partners/imi-mobile.webp" },
  { id: "telemedia", name: "Telemedia România", website: "https://telemedia.ro", logo: "/partners/telemedia.webp" },
  { id: "cisco", name: "Cisco", website: "https://cisco.com", logo: "/partners/cisco.webp" },
  { id: "microsoft", name: "Microsoft", website: "https://microsoft.com", logo: "/partners/microsoft.webp" },
  { id: "oracle", name: "Oracle", website: "https://oracle.com", logo: "/partners/oracle.webp" },
  { id: "orange", name: "Orange", website: "https://orange.ro", logo: "/partners/orange.webp" },
  { id: "vodafone", name: "Vodafone", website: "https://vodafone.ro", logo: "/partners/vodafone.webp" },
  { id: "metrorex", name: "Metrorex", website: "https://metrorex.ro", logo: "/partners/metrorex.webp" },
  { id: "stb", name: "STB", website: "https://stb.ro", logo: "/partners/stb.webp" }
];
