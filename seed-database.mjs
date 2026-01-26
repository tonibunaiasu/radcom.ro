import { drizzle } from "drizzle-orm/mysql2";
import { 
  services, 
  solutions, 
  teamMembers, 
  blogPosts, 
  caseStudies, 
  partners, 
  pages, 
  settings,
  jobListings 
} from "./drizzle/schema.js";
import "dotenv/config";

const db = drizzle(process.env.DATABASE_URL);

async function seedDatabase() {
  console.log("Starting database seeding...");

  try {
    // Seed Services - Dezvoltare
    console.log("Seeding services...");
    await db.insert(services).values([
      {
        title: "Transport",
        slug: "transport",
        shortDescription: "Soluții software și hardware complete pentru industria transporturilor",
        description: "Dezvoltăm platforme integrate pentru gestionarea flotelor, tracking GPS în timp real, și sisteme de ticketing electronic pentru transport public și privat.",
        category: "dezvoltare",
        icon: "truck",
        technologies: JSON.stringify(["React", "Node.js", "PostgreSQL", "GPS Integration", "Mobile Apps"]),
        benefits: JSON.stringify([
          "Monitorizare în timp real a flotelor",
          "Optimizare rute și consum combustibil",
          "Raportare automată și analiză date",
          "Integrare cu sisteme de plată"
        ])
      },
      {
        title: "Medical",
        slug: "medical",
        shortDescription: "Soluții end-to-end de dosar medical electronic",
        description: "Platforme complete pentru gestionarea dosarelor medicale electronice, portal pacienți, integrare rezultate analize medicale și imagistică medicală.",
        category: "dezvoltare",
        icon: "heart",
        technologies: JSON.stringify(["React", "Node.js", "FHIR", "HL7", "DICOM", "Cloud Storage"]),
        benefits: JSON.stringify([
          "Acces rapid la istoricul medical complet",
          "Portal pacienți pentru programări online",
          "Integrare cu laboratoare și imagistică",
          "Conformitate GDPR și securitate maximă"
        ])
      },
      {
        title: "Telecom",
        slug: "telecom",
        shortDescription: "Platforme pentru servicii de voce și comunicații",
        description: "Soluții complete pentru VoIP, SMS/MMS, USSD, SS7, call center, IVR, e-commerce și SSO pentru operatori telecom.",
        category: "dezvoltare",
        icon: "radio",
        technologies: JSON.stringify(["VoIP", "SIP", "WebRTC", "SS7", "Asterisk", "FreeSWITCH"]),
        benefits: JSON.stringify([
          "Reducere costuri comunicații",
          "Scalabilitate și flexibilitate",
          "Integrare cu sisteme existente",
          "Suport 24/7 și mentenanță"
        ])
      },
      {
        title: "Rețele de Telecomunicații",
        slug: "retele-telecomunicatii",
        shortDescription: "Proiectare, construire, instalare și mentenanță",
        description: "Servicii complete de infrastructură pentru rețele de telecomunicații, de la proiectare până la mentenanță preventivă și corectivă.",
        category: "infrastructura",
        icon: "network",
        technologies: JSON.stringify(["Fiber Optic", "Wireless", "5G", "Network Design", "DWDM"]),
        benefits: JSON.stringify([
          "Proiectare optimizată pentru performanță",
          "Instalare profesională certificată",
          "Mentenanță preventivă și corectivă",
          "Suport tehnic specializat"
        ])
      },
      {
        title: "Rețele de Fibră Optică",
        slug: "retele-fibra-optica",
        shortDescription: "Proiectare, implementare, mentenanță",
        description: "Soluții complete pentru rețele de fibră optică, inclusiv proiectare, implementare, mentenanță preventivă și corectivă, dispecerizare și intervenție operativă.",
        category: "infrastructura",
        icon: "cable",
        technologies: JSON.stringify(["FTTH", "FTTB", "GPON", "Fiber Splicing", "OTDR Testing"]),
        benefits: JSON.stringify([
          "Viteză maximă de transfer date",
          "Fiabilitate și stabilitate",
          "Scalabilitate pentru viitor",
          "Costuri reduse de mentenanță"
        ])
      },
      {
        title: "Programe cu Fonduri Europene",
        slug: "programe-fonduri-europene",
        shortDescription: "Consultanță finanțare europeană",
        description: "Consultanță specializată pentru accesarea fondurilor europene, identificare oportunități de parteneriate și pregătire documentație pentru proiecte de infrastructură IT&C.",
        category: "programe_europene",
        icon: "globe",
        technologies: JSON.stringify(["EU Funding", "Project Management", "Documentation", "Partnerships"]),
        benefits: JSON.stringify([
          "Identificare oportunități de finanțare",
          "Pregătire documentație completă",
          "Suport în implementare proiecte",
          "Networking și parteneriate strategice"
        ])
      }
    ]);

    // Seed Solutions
    console.log("Seeding solutions...");
    await db.insert(solutions).values([
      {
        industry: "Transport",
        slug: "transport",
        description: "Soluții software și hardware complete pentru industria transporturilor, incluzând sisteme de management flote, tracking GPS, și ticketing electronic.",
        challenges: JSON.stringify([
          "Monitorizare în timp real a vehiculelor",
          "Optimizare rute și reducere costuri operaționale",
          "Gestionare eficientă a flotelor mari",
          "Integrare cu sisteme de plată și ticketing"
        ]),
        specificBenefits: JSON.stringify([
          "Reducere cu 30% a costurilor operaționale",
          "Creștere eficiență operațională cu 40%",
          "Raportare automată și analiză predictivă",
          "Satisfacție crescută a clienților"
        ])
      },
      {
        industry: "Medical",
        slug: "medical",
        description: "Soluții end-to-end de dosar medical electronic, inclusiv portal pacienți, integrare rezultate analize medicale și imagistică.",
        challenges: JSON.stringify([
          "Gestionare volume mari de date medicale",
          "Conformitate cu reglementări GDPR și securitate",
          "Integrare cu multiple sisteme externe",
          "Acces rapid la informații critice"
        ]),
        specificBenefits: JSON.stringify([
          "Acces instant la istoricul medical complet",
          "Reducere erori medicale prin digitalizare",
          "Îmbunătățire comunicare medic-pacient",
          "Conformitate totală cu reglementări"
        ])
      },
      {
        industry: "Telecom",
        slug: "telecom",
        description: "Platforme pentru servicii de voce, VoIP, SMS/MMS, USSD, SS7, call center, IVR, e-commerce și SSO.",
        challenges: JSON.stringify([
          "Scalabilitate pentru volume mari de trafic",
          "Calitate superioară a vocii și conexiunilor",
          "Integrare cu infrastructură existentă",
          "Securitate și protecție împotriva fraudelor"
        ]),
        specificBenefits: JSON.stringify([
          "Reducere costuri comunicații cu până la 60%",
          "Scalabilitate nelimitată",
          "Calitate HD pentru comunicații vocale",
          "Flexibilitate și personalizare completă"
        ])
      },
      {
        industry: "Media & Mobile",
        slug: "media-mobile",
        description: "Aplicații mobile și platforme multimedia de livrare de conținut pentru diverse industrii.",
        challenges: JSON.stringify([
          "Experiență utilizator optimă pe multiple platforme",
          "Performanță ridicată pentru streaming media",
          "Monetizare eficientă a conținutului",
          "Scalabilitate pentru audiențe mari"
        ]),
        specificBenefits: JSON.stringify([
          "Aplicații native iOS și Android",
          "Streaming HD și 4K fără întreruperi",
          "Sisteme avansate de monetizare",
          "Analytics detaliat pentru audiență"
        ])
      },
      {
        industry: "Internet",
        slug: "internet",
        description: "Soluții integrate de tip magazin online, contul meu, gestiune identitate utilizatori.",
        challenges: JSON.stringify([
          "Securitate tranzacții online",
          "Experiență de cumpărare optimizată",
          "Integrare cu sisteme de plată multiple",
          "Gestionare eficientă a stocurilor"
        ]),
        specificBenefits: JSON.stringify([
          "Platformă e-commerce completă și securizată",
          "Integrare cu toate metodele de plată",
          "Dashboard pentru gestionare comenzi",
          "Optimizare pentru conversii și vânzări"
        ])
      }
    ]);

    // Seed Team Members
    console.log("Seeding team members...");
    await db.insert(teamMembers).values([
      {
        name: "Ion Popescu",
        position: "CEO & Co-Founder",
        biography: "Cu peste 20 de ani de experiență în industria IT, Ion conduce viziunea strategică a RADCOM.",
        department: "Management",
        order: 1
      },
      {
        name: "Maria Ionescu",
        position: "CTO",
        biography: "Expert în arhitectură software și cloud computing, Maria coordonează echipa tehnică.",
        department: "Tehnologie",
        order: 2
      },
      {
        name: "Andrei Dumitrescu",
        position: "Head of Development",
        biography: "Specialist în dezvoltare full-stack cu focus pe soluții scalabile și performante.",
        department: "Dezvoltare",
        order: 3
      }
    ]);

    // Seed Blog Posts
    console.log("Seeding blog posts...");
    await db.insert(blogPosts).values([
      {
        title: "Transformarea Digitală în Industria Medicală",
        slug: "transformarea-digitala-industria-medicala",
        author: "Maria Ionescu",
        publishedAt: new Date("2024-01-15"),
        category: "Healthcare",
        content: "Digitalizarea sistemelor medicale aduce beneficii majore atât pentru medici cât și pentru pacienți. În acest articol explorăm cele mai importante tendințe și soluții...",
        excerpt: "Descoperă cum tehnologia transformă industria medicală și îmbunătățește îngrijirea pacienților.",
        tags: JSON.stringify(["healthcare", "digital transformation", "EMR"]),
        status: "published"
      },
      {
        title: "Viitorul Transportului Inteligent",
        slug: "viitorul-transportului-inteligent",
        author: "Andrei Dumitrescu",
        publishedAt: new Date("2024-02-01"),
        category: "Transport",
        content: "Soluțiile IoT și AI revoluționează industria transporturilor. Aflați cum tehnologiile moderne optimizează rutele și reduc costurile...",
        excerpt: "Explorează tehnologiile care modelează viitorul transportului public și privat.",
        tags: JSON.stringify(["transport", "IoT", "smart cities"]),
        status: "published"
      }
    ]);

    // Seed Partners
    console.log("Seeding partners...");
    await db.insert(partners).values([
      {
        name: "2K Telecom",
        website: "https://2ktelecom.ro",
        description: "Partener strategic în domeniul telecomunicațiilor",
        category: "Telecom",
        order: 1
      },
      {
        name: "IMI Mobile",
        website: "https://imimobile.com",
        description: "Soluții mobile enterprise",
        category: "Mobile",
        order: 2
      },
      {
        name: "Telemedia România",
        website: "https://telemedia.ro",
        description: "Servicii media și broadcast",
        category: "Media",
        order: 3
      }
    ]);

    // Seed Pages
    console.log("Seeding pages...");
    await db.insert(pages).values([
      {
        title: "Despre Noi",
        slug: "despre-noi",
        content: "RADCOM este una dintre cele mai mari companii de tehnologie din România, specializată în furnizarea de soluții integrate hardware și software pentru diverse industrii. Cu o experiență vastă în domeniul IT&C, oferim servicii complete de dezvoltare software, infrastructură și consultanță pentru programe europene.",
        status: "published"
      }
    ]);

    // Seed Settings
    console.log("Seeding settings...");
    await db.insert(settings).values([
      {
        key: "company_email",
        value: "contact@radcom.ro",
        type: "text"
      },
      {
        key: "company_phone",
        value: "+40 123 456 789",
        type: "text"
      },
      {
        key: "company_address",
        value: "București, România",
        type: "text"
      },
      {
        key: "social_media",
        value: JSON.stringify({
          facebook: "https://facebook.com/radcom",
          twitter: "https://twitter.com/radcom",
          linkedin: "https://linkedin.com/company/radcom",
          instagram: "https://instagram.com/radcom"
        }),
        type: "json"
      }
    ]);

    // Seed Job Listings
    console.log("Seeding job listings...");
    await db.insert(jobListings).values([
      {
        title: "Senior Full-Stack Developer",
        slug: "senior-full-stack-developer",
        department: "Dezvoltare",
        location: "București / Remote",
        type: "full-time",
        description: "Căutăm un dezvoltator full-stack experimentat pentru a se alătura echipei noastre de dezvoltare. Vei lucra la proiecte complexe pentru clienți din diverse industrii.",
        requirements: JSON.stringify([
          "5+ ani experiență în dezvoltare web",
          "Cunoștințe avansate React și Node.js",
          "Experiență cu baze de date SQL și NoSQL",
          "Bune abilități de comunicare",
          "Experiență cu metodologii Agile"
        ]),
        benefits: JSON.stringify([
          "Salariu competitiv",
          "Program flexibil",
          "Posibilitate remote",
          "Training și certificări",
          "Asigurare medicală privată"
        ]),
        status: "active"
      },
      {
        title: "DevOps Engineer",
        slug: "devops-engineer",
        department: "Infrastructură",
        location: "București",
        type: "full-time",
        description: "Căutăm un DevOps Engineer pentru a gestiona și optimiza infrastructura noastră cloud și procesele de CI/CD.",
        requirements: JSON.stringify([
          "3+ ani experiență DevOps",
          "Experiență cu AWS/Azure/GCP",
          "Cunoștințe Docker și Kubernetes",
          "Experiență cu CI/CD pipelines",
          "Scripting (Bash, Python)"
        ]),
        benefits: JSON.stringify([
          "Salariu atractiv",
          "Proiecte provocatoare",
          "Training continuu",
          "Echipă prietenoasă",
          "Bonusuri de performanță"
        ]),
        status: "active"
      }
    ]);

    console.log("Database seeding completed successfully!");
  } catch (error) {
    console.error("Error seeding database:", error);
    throw error;
  }
}

seedDatabase()
  .then(() => {
    console.log("All done!");
    process.exit(0);
  })
  .catch((error) => {
    console.error("Failed to seed database:", error);
    process.exit(1);
  });
