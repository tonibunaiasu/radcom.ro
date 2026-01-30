import { createClient } from "@sanity/client";

const projectId = process.env.SANITY_STUDIO_PROJECT_ID;
const dataset = process.env.SANITY_STUDIO_DATASET || "production";
const token = process.env.SANITY_API_TOKEN;

if (!projectId || !token) {
  console.error("Missing SANITY_STUDIO_PROJECT_ID or SANITY_API_TOKEN");
  process.exit(1);
}

const client = createClient({
  projectId,
  dataset,
  apiVersion: "2024-01-01",
  token,
  useCdn: false
});

const homeDoc = {
  _type: "home",
  hero: {
    title: { ro: "Soluții integrate hardware + software", en: "Integrated hardware + software solutions" },
    subtitle: {
      ro: "Oferim servicii IT&C complete pentru industrii românești și răspundem cu soluții perfect integrate la nevoile de business ale clienților.",
      en: "We provide complete IT&C services for Romanian industries and deliver fully integrated solutions for business needs."
    },
    ctaPrimary: { ro: "Descoperă serviciile", en: "Discover services" },
    ctaSecondary: { ro: "Contactează-ne", en: "Contact us" }
  },
  stats: [
    { value: "Top 3", label: { ro: "cele mai mari companii de tehnologie din România", en: "largest tech companies in Romania" } },
    { value: "IT&C", label: { ro: "servicii complete pentru industrii românești", en: "complete IT&C services" } },
    { value: "100%", label: { ro: "soluții perfect integrate pentru clienți", en: "fully integrated solutions" } }
  ],
  industries: [
    { title: { ro: "Transport", en: "Transport" }, desc: { ro: "Soluții software și hardware complete pentru industria transporturilor.", en: "Complete software and hardware solutions for transport." } },
    { title: { ro: "Medical", en: "Medical" }, desc: { ro: "Dosar medical electronic, portal pacienți, integrare analize și imagistică.", en: "Electronic medical record, patient portal, lab and imaging integration." } },
    { title: { ro: "Telecom", en: "Telecom" }, desc: { ro: "Platforme pentru voce, VoIP, SMS/MMS, USSD, SS7, call center, IVR.", en: "Voice, VoIP, SMS/MMS, USSD, SS7, call center, IVR platforms." } },
    { title: { ro: "Media & Mobile", en: "Media & Mobile" }, desc: { ro: "Aplicații mobile și platforme multimedia de livrare de conținut.", en: "Mobile apps and multimedia delivery platforms." } },
    { title: { ro: "Internet", en: "Internet" }, desc: { ro: "Magazin online, contul meu, gestiune identitate utilizatori.", en: "Online store, account management, identity services." } },
    { title: { ro: "Programe europene", en: "EU programs" }, desc: { ro: "Consultanță finanțare europeană, identificare oportunități parteneriate.", en: "EU funding consultancy and partnerships." } }
  ],
  infrastructure: [
    { title: { ro: "Rețele de telecomunicații", en: "Telecom networks" }, desc: { ro: "Proiectare, construire, instalare și mentenanță.", en: "Design, build, install, maintain." } },
    { title: { ro: "Lucrări electrice", en: "Electrical works" }, desc: { ro: "Branșamente și instalații electrice.", en: "Connections and electrical installations." } },
    { title: { ro: "Rețele de fibră optică", en: "Fiber optic networks" }, desc: { ro: "Proiectare, implementare, mentenanță preventivă și corectivă.", en: "Design, implementation, preventive and corrective maintenance." } },
    { title: { ro: "Construcții civile", en: "Civil construction" }, desc: { ro: "Construcții tehnologice și rezidențiale.", en: "Technological and residential construction." } },
    { title: { ro: "Sisteme de automatizări / SCADA", en: "Automation / SCADA" }, desc: { ro: "Soluții în domeniul apelor uzate și potabile.", en: "Solutions for potable and wastewater domains." } },
    { title: { ro: "Proiecte cu fonduri europene", en: "EU-funded projects" }, desc: { ro: "Dezvoltate de Divizia de Rețele de Telecomunicații RADCOM.", en: "Developed by RADCOM Telecom Networks division." } }
  ],
  advantages: [
    { title: { ro: "Responsivitate", en: "Responsiveness" }, desc: { ro: "Construim produse digitale și fizice care se autoadaptează pentru toate tipurile de dispozitive.", en: "We build digital and physical products that adapt across devices." } },
    { title: { ro: "Customizare", en: "Customization" }, desc: { ro: "Particularizăm soluțiile de comunicații pentru nevoile fiecărui client.", en: "We tailor communication solutions to each client." } },
    { title: { ro: "Elementele UI", en: "UI elements" }, desc: { ro: "Ne concentrăm pe elementele UI esențiale: input, output, ajutor.", en: "We focus on essential UI elements: input, output, help." } },
    { title: { ro: "Linii de cod curate", en: "Clean code" }, desc: { ro: "Optimizăm lizibilitatea codului și a documentației.", en: "We optimize code and documentation readability." } }
  ],
  partners: {
    title: { ro: "Parteneri", en: "Partners" },
    subtitle: { ro: "Colaborăm cu organizații publice și private pentru soluții tehnologice scalabile în România.", en: "We partner with public and private organizations for scalable tech solutions." }
  }
};

const pages = [
  {
    _id: "page-compania",
    _type: "page",
    title: { ro: "Compania RADCOM", en: "RADCOM Company" },
    slug: { _type: "slug", current: "compania" },
    summary: { ro: "Suntem în Top 3 cele mai mari companii de tehnologie din România.", en: "Top 3 technology companies in Romania." },
    body: { ro: "RADCOM oferă servicii complete de dezvoltare software, infrastructură și consultanță pentru programe europene.\n\nMisiunea noastră este să livrăm soluții perfect integrate la nevoile de business ale clienților.", en: "RADCOM delivers software development, infrastructure and EU program consulting services." }
  },
  {
    _id: "page-compania-despre",
    _type: "page",
    title: { ro: "Despre RADCOM", en: "About RADCOM" },
    slug: { _type: "slug", current: "compania-despre" },
    summary: { ro: "Expertiză IT&C și inovație continuă.", en: "IT&C expertise and continuous innovation." },
    body: { ro: "Oferim servicii complete de dezvoltare software, infrastructură și consultanță.\n\nEchipa noastră transformă viziunea clienților în realitate.", en: "We deliver complete software, infrastructure, and consulting services." }
  },
  {
    _id: "page-compania-echipa",
    _type: "page",
    title: { ro: "Echipa RADCOM", en: "RADCOM Team" },
    slug: { _type: "slug", current: "compania-echipa" },
    summary: { ro: "Profesioniști dedicați care transformă viziuni în realitate.", en: "Dedicated professionals delivering outcomes." },
    body: { ro: "Lista completă a membrilor echipei va fi publicată după conectarea cu CMS.", en: "Full team list will be available after CMS integration." }
  },
  {
    _id: "page-compania-certificari",
    _type: "page",
    title: { ro: "Certificări și premii", en: "Certifications and awards" },
    slug: { _type: "slug", current: "compania-certificari" },
    summary: { ro: "Standardele și parteneriatele RADCOM confirmă calitatea serviciilor.", en: "Standards and partnerships confirm quality." },
    body: { ro: "ISO 9001:2015 — Certificare pentru Sistemul de Management al Calității.\nISO 27001:2013 — Certificare pentru Sistemul de Management al Securității Informației.\nTop 3 Companii IT România — Recunoaștere pentru excelență.\nPartener Microsoft Gold — Parteneriat de nivel superior.", en: "ISO 9001:2015, ISO 27001:2013, Top 3 IT Companies Romania, Microsoft Gold Partner." }
  },
  {
    _id: "page-cariere",
    _type: "page",
    title: { ro: "Cariere la RADCOM", en: "Careers at RADCOM" },
    slug: { _type: "slug", current: "cariere" },
    summary: { ro: "Alătură-te echipei noastre și construiește viitorul tehnologiei.", en: "Join our team and build the future of technology." },
    body: { ro: "Oferim un mediu de lucru stimulant și beneficii competitive.", en: "We offer a stimulating workplace and competitive benefits." }
  },
  {
    _id: "page-articole",
    _type: "page",
    title: { ro: "Articole & Știri", en: "Articles & News" },
    slug: { _type: "slug", current: "articole" },
    summary: { ro: "Ultimele noutăți, articole și insights din lumea tehnologiei.", en: "Latest news, articles and insights." },
    body: { ro: "Conținutul editorial va fi publicat după integrarea CMS-ului.", en: "Editorial content will be published after CMS integration." }
  },
  {
    _id: "page-contact",
    _type: "page",
    title: { ro: "Contactează-ne", en: "Contact us" },
    slug: { _type: "slug", current: "contact" },
    summary: { ro: "Suntem aici pentru a răspunde întrebărilor tale.", en: "We are here to answer your questions." },
    body: { ro: "Trimite-ne un mesaj și revenim rapid.", en: "Send us a message and we will respond quickly." }
  },
  {
    _id: "page-politica-cookie",
    _type: "page",
    title: { ro: "Politică de Cookie", en: "Cookie Policy" },
    slug: { _type: "slug", current: "politica-cookie" },
    summary: { ro: "Ultima actualizare: 29 ianuarie 2026", en: "Last updated: January 29, 2026" },
    body: { ro: "Conținutul politicii de cookie va fi actualizat în CMS.", en: "Cookie policy content will be updated in CMS." }
  },
  {
    _id: "page-politica-confidentialitate",
    _type: "page",
    title: { ro: "Politică de Confidențialitate", en: "Privacy Policy" },
    slug: { _type: "slug", current: "politica-confidentialitate" },
    summary: { ro: "Ultima actualizare: 29 ianuarie 2026", en: "Last updated: January 29, 2026" },
    body: { ro: "Conținutul politicii de confidențialitate va fi actualizat în CMS.", en: "Privacy policy content will be updated in CMS." }
  }
];

const services = [
  {
    _type: "service",
    title: { ro: "iFleet", en: "iFleet" },
    subtitle: { ro: "Extended Fleet Management", en: "Extended Fleet Management" },
    description: { ro: "Sistem complet de management al flotei pentru transportul public.", en: "Complete fleet management system for public transport." },
    features: [
      { ro: "Management complet al flotei", en: "Full fleet management" },
      { ro: "Numărare automată pasageri", en: "Automatic passenger counting" },
      { ro: "Monitorizare video în timp real", en: "Real-time video monitoring" }
    ],
    slug: { _type: "slug", current: "ifleet" }
  },
  {
    _type: "service",
    title: { ro: "OptiFare", en: "OptiFare" },
    subtitle: { ro: "E-Ticketing System", en: "E-Ticketing System" },
    description: { ro: "Sistem avansat de e-ticketing pentru transport public.", en: "Advanced e-ticketing system for public transport." },
    features: [
      { ro: "Validare carduri inteligente", en: "Smart card validation" },
      { ro: "Plată contactless", en: "Contactless payments" },
      { ro: "Interfață pasageri", en: "Passenger interface" }
    ],
    slug: { _type: "slug", current: "optifare" }
  },
  {
    _type: "service",
    title: { ro: "eXact", en: "eXact" },
    subtitle: { ro: "Real Time Route Planning", en: "Real Time Route Planning" },
    description: { ro: "Sistem inteligent de informații pentru pasageri.", en: "Passenger information system." },
    features: [
      { ro: "Planificare rute în timp real", en: "Real-time route planning" },
      { ro: "Afișaje LED", en: "LED displays" },
      { ro: "Anunțuri vocale", en: "Voice announcements" }
    ],
    slug: { _type: "slug", current: "exact" }
  }
];

const articles = [
  {
    _id: "article-1",
    _type: "article",
    title: { ro: "Lansare competiție proiecte 2024", en: "Project competition launch 2024" },
    excerpt: { ro: "RADCOM susține inovarea prin proiecte de transport public.", en: "RADCOM supports innovation in public transport projects." },
    slug: { _type: "slug", current: "competitie-proiecte-2024" },
    publishedAt: new Date().toISOString()
  }
];

const jobs = [
  {
    _id: "job-1",
    _type: "job",
    title: { ro: "Inginer sisteme", en: "Systems Engineer" },
    department: "IT",
    location: "București",
    type: "Full-time",
    description: { ro: "Rol în proiecte de transport public și integrare sisteme.", en: "Role in public transport projects and systems integration." }
  }
];

const settings = {
  _id: "settings",
  _type: "settings",
  companyName: "RADCOM",
  email: "office@radcom.ro",
  phone: "021 232 1039",
  address: "Str. George Constantinescu nr. 2C, Etaj 5 & 6, București"
};

async function run() {
  await client.createOrReplace({ _id: "home", ...homeDoc });
  for (const page of pages) {
    await client.createOrReplace(page);
  }
  for (const service of services) {
    await client.createOrReplace({ _id: service.slug.current, ...service });
  }
  for (const article of articles) {
    await client.createOrReplace(article);
  }
  for (const job of jobs) {
    await client.createOrReplace(job);
  }
  await client.createOrReplace(settings);
  console.log("Seed complete");
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
