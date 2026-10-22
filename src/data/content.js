// All the site content lives here.
// A text is either a plain string (same in both languages) or { fr, en }.

export const profile = {
  firstName: "Cao",
  fullName: "Cao Cuong Cao",
  brand: "cao",
  email: "cao.cao@efrei.net",
  phone: "+33 7 83 90 28 25",
  phoneHref: "tel:+33783902825",
  location: "Thiais (94), France",
  github: "https://github.com/ccao94",
  linkedin: "https://www.linkedin.com/in/cao-cuong-cao/",

  // Files to put in /public (see README)
  photo: "/images/photo.jpg",
  photoPosition: "center 18%",
  cv: { fr: "/cv/CV_Cao_Cuong_Cao.pdf", en: "/cv/CV_Cao_Cuong_Cao.pdf" },
  // Optional: put a video in /public/images and set "/images/hero.mp4"
  heroVideo: null,
}

export const nav = [
  { id: "about", label: { fr: "À propos", en: "About" } },
  { id: "skills", label: { fr: "Compétences", en: "Skills" } },
  { id: "projects", label: { fr: "Projets", en: "Projects" } },
  { id: "experience", label: { fr: "Expériences", en: "Experience" } },
  { id: "path", label: { fr: "Parcours", en: "Background" } },
  { id: "contact", label: { fr: "Contact", en: "Contact" } },
]

export const hero = {
  eyebrow: { fr: "EFREI Paris · Software Engineering · Promo 2027", en: "EFREI Paris · Software Engineering · Class of 2027" },
  hello: { fr: "Bonjour, je suis Cao.", en: "Hi, I'm Cao." },
  title: { fr: "Étudiant ingénieur en Software Engineering.", en: "Software engineering student." },
  subtitle: {
    fr: "Parti de la physique, arrivé au logiciel. J'aime comprendre comment les choses fonctionnent et construire des applications utiles.",
    en: "From physics to software. I like understanding how things work and building useful applications.",
  },
  status: {
    fr: "Disponible en alternance · nov. 2026 à nov. 2027 · temps plein dès mars 2027",
    en: "Open to an apprenticeship · Nov. 2026 to Nov. 2027 · full time from March 2027",
  },
  ctaProjects: { fr: "Voir mes projets", en: "View my work" },
  ctaContact: { fr: "Me contacter", en: "Get in touch" },
  ctaCv: { fr: "Mon CV", en: "My resume" },
  playReel: { fr: "Lancer", en: "Play" },
  pauseReel: { fr: "Pause", en: "Pause" },
}

export const about = {
  label: { fr: "À propos", en: "About" },
  title: { fr: "D'un labo de physique", en: "From a physics lab" },
  titleItalic: { fr: "à un terminal.", en: "to a terminal." },
  paragraphs: [
    {
      fr: "Mon parcours n'est pas linéaire, et c'est ce qui le rend intéressant. J'ai commencé par un DUT Mesures Physiques à Orsay : oscilloscopes, capteurs, salles blanches. C'est là que j'ai écrit mes premières lignes de Python, et quelque chose a changé.",
      en: "My path isn't straightforward, and that's what makes it interesting. I started with a DUT in Physical Measurements at Orsay: oscilloscopes, sensors, clean rooms. That's where I wrote my first lines of Python, and something clicked.",
    },
    {
      fr: "Après une prépa ATS pour consolider mes bases en maths et sciences de l'ingénieur, j'ai intégré l'EFREI Paris en cycle ingénieur. Début 2025, je suis parti quatre mois à Concordia University à Montréal, une expérience qui m'a appris autant sur moi que sur le code.",
      en: "After a preparatory year (ATS) to strengthen my math and engineering foundations, I joined EFREI Paris for my engineering degree. In early 2025, I spent four months at Concordia University in Montreal, an experience that taught me as much about myself as about code.",
    },
    {
      fr: "Fin septembre, j'ai terminé un stage de cinq mois chez Thales AVS (Training & Simulation), où j'ai conçu et développé un outil métier de type CMDB en C#, Angular et PostgreSQL, présenté en démonstration. Ce qui me plaît dans le dev, c'est de résoudre un problème concret et de voir quelque chose fonctionner.",
      en: "At the end of September, I finished a five-month internship at Thales AVS (Training & Simulation), where I designed and built a CMDB-style business tool in C#, Angular and PostgreSQL, shown in a demo. What I enjoy in software development is solving a concrete problem and watching something work.",
    },
  ],
  stackLabel: { fr: "Ce que j'utilise le plus", en: "What I use most" },
  stack: [
    { icon: "java", name: "Java" },
    { icon: "spring", name: "Spring Boot" },
    { icon: "python", name: "Python" },
    { icon: "csharp", name: "C#" },
    { icon: "angular", name: "Angular" },
    { icon: "docker", name: "Docker" },
    { icon: "kubernetes", name: "Kubernetes" },
    { icon: "postgresql", name: "PostgreSQL" },
  ],
  factsLabel: { fr: "En quelques chiffres", en: "A few numbers" },
  facts: [
    { value: "6", text: { fr: "personnes coordonnées sur SmartSoon, en tant que chef de projet", en: "people coordinated on SmartSoon, as project lead" } },
    { value: "~60", text: { fr: "entités dans le modèle de données conçu chez Thales AVS", en: "entities in the data model I designed at Thales AVS" } },
    { value: "61", text: { fr: "tests PyTest exécutés contre une vraie base sur le projet de surveillance de prix", en: "PyTest tests run against a real database on the price monitoring project" } },
    { value: "3", text: { fr: "langues parlées : français, anglais (C1), vietnamien", en: "languages spoken: French, English (C1), Vietnamese" } },
  ],
  badge: {
    role: "Software Engineering",
    school: "EFREI Paris",
    year: { fr: "Promo 2027", en: "Class of 2027" },
    tag: { fr: "Alternant dès nov. 2026", en: "Apprentice from Nov. 2026" },
  },
}

// Where each skill was used. Ids point to a section or a project on the page.
export const places = {
  thales: { label: "Thales", href: "#experience" },
  monitoring: { label: "Monitoring", href: "#project-monitoring" },
  smartsoon: { label: "SmartSoon", href: "#project-smartsoon" },
  flighttracker: { label: "FlightTracker", href: "#project-flighttracker" },
  efrei: { label: "EFREI", href: "#path" },
  mlproject: { label: { fr: "Projet ML", en: "ML project" }, href: "https://github.com/ccao94/ml-project" },
}

export const skills = {
  label: { fr: "Compétences", en: "Skills" },
  title: { fr: "Ce que j'utilise,", en: "What I use," },
  titleItalic: { fr: "et où.", en: "and where." },
  desc: {
    fr: "Sous chaque techno, l'endroit où je l'ai utilisée.",
    en: "Under each tool, where I used it.",
  },
  groups: [
    {
      title: { fr: "Langages", en: "Languages" },
      items: [
        { name: "Python", icon: "python", used: ["monitoring", "smartsoon"] },
        { name: "Java", icon: "java", used: ["flighttracker"] },
        { name: "C#", icon: "csharp", used: ["thales"] },
        { name: "TypeScript", icon: "typescript", used: ["thales", "smartsoon"] },
        { name: "JavaScript", icon: "javascript", used: ["efrei"] },
        { name: "SQL", icon: "postgresql", used: ["thales", "monitoring", "flighttracker"] },
      ],
    },
    {
      title: "Backend & Frontend",
      items: [
        { name: "Spring Boot", icon: "spring", used: ["flighttracker"] },
        { name: "ASP.NET Core", icon: "dotnetcore", used: ["thales"] },
        { name: "FastAPI", icon: "fastapi", used: ["monitoring", "smartsoon"] },
        { name: "API REST", icon: null, used: ["thales", "monitoring", "flighttracker"] },
        { name: "OAuth2", icon: null, used: ["flighttracker"] },
        { name: "Angular", icon: "angular", used: ["thales"] },
        { name: "React", icon: "react", used: ["smartsoon"] },
      ],
    },
    {
      title: "DevOps & Outils",
      items: [
        { name: "Docker", icon: "docker", used: ["monitoring", "smartsoon", "flighttracker"] },
        { name: "Docker Compose", icon: "docker", used: ["monitoring", "smartsoon", "flighttracker"] },
        { name: "Kubernetes (Minikube)", icon: "kubernetes", used: ["monitoring"] },
        { name: "GitHub Actions", icon: "githubactions", used: ["monitoring", "flighttracker"] },
        { name: { fr: "Déploiement (Render, Neon)", en: "Deployment (Render, Neon)" }, icon: null, used: ["monitoring", "flighttracker"] },
        { name: "GitLab CI", icon: "gitlab", used: ["efrei"] },
        { name: "Ansible", icon: null, used: ["efrei"] },
        { name: "Maven", icon: "maven", used: ["flighttracker"] },
        { name: "Linux, Git", icon: "linux", used: ["monitoring", "flighttracker"] },
      ],
    },
    {
      title: { fr: "Data & bases de données", en: "Data & databases" },
      items: [
        { name: "PostgreSQL", icon: "postgresql", used: ["thales", "monitoring", "flighttracker"] },
        { name: "Spring Data JPA", icon: "spring", used: ["flighttracker"] },
        { name: "Flyway", icon: null, used: ["flighttracker"] },
        { name: { fr: "Modélisation de données", en: "Data modeling" }, icon: null, used: ["thales"] },
        { name: { fr: "Vues SQL, fonctions fenêtre", en: "SQL views, window functions" }, icon: null, used: ["monitoring"] },
        { name: { fr: "Qualité des données", en: "Data quality" }, icon: null, used: ["monitoring"] },
        { name: { fr: "Définition de KPI", en: "KPI definition" }, icon: null, used: ["monitoring"] },
        { name: { fr: "Power BI, DAX (notions)", en: "Power BI, DAX (basics)" }, icon: null, used: ["monitoring"] },
      ],
    },
    {
      title: { fr: "IA", en: "AI" },
      items: [
        { name: "LLM (Mistral)", icon: null, used: ["smartsoon"] },
        { name: "RAG, embeddings", icon: null, used: ["smartsoon"] },
        { name: "ChromaDB", icon: null, used: ["smartsoon"] },
        { name: "OCR (Tesseract)", icon: null, used: ["smartsoon"] },
        { name: { fr: "Anonymisation (Presidio)", en: "Anonymization (Presidio)" }, icon: null, used: ["smartsoon"] },
        { name: "NumPy, scikit-learn", icon: null, used: ["mlproject"] },
      ],
    },
    {
      title: { fr: "Qualité & Méthodes", en: "Quality & Methods" },
      items: [
        { name: "PyTest", icon: "pytest", used: ["monitoring"] },
        { name: "JUnit, Mockito", icon: null, used: ["flighttracker"] },
        { name: "Testcontainers", icon: null, used: ["flighttracker"] },
        { name: "Jest", icon: "jest", used: ["efrei"] },
        { name: { fr: "Tests unitaires et d'intégration", en: "Unit and integration tests" }, icon: null, used: ["monitoring", "flighttracker"] },
        { name: { fr: "POO (SOLID, design patterns)", en: "OOP (SOLID, design patterns)" }, icon: null, used: ["efrei"] },
        { name: "UML", icon: null, used: ["thales", "efrei"] },
        { name: "Agile / Scrum", icon: null, used: ["thales", "smartsoon"] },
      ],
    },
  ],
}

export const projects = {
  label: { fr: "Projets", en: "Projects" },
  title: { fr: "Ce que je", en: "What I" },
  titleItalic: { fr: "construis.", en: "build." },
  desc: {
    fr: "Des projets perso et académiques, avec le schéma de ce qui se passe sous le capot.",
    en: "Personal and academic projects, with a sketch of what happens under the hood.",
  },
  githubLabel: { fr: "Code source", en: "Source code" },
  demoLabel: { fr: "Voir la démo", en: "Live demo" },
  allRepos: { fr: "Voir tous mes repos GitHub", en: "See all my GitHub repos" },
  list: [
    {
      id: "flighttracker",
      badge: { fr: "Java · déployé · en cours", en: "Java · deployed · ongoing" },
      title: { fr: "FlightTracker, suivi de flotte aérienne", en: "FlightTracker, aircraft fleet tracking" },
      date: { fr: "Sept. 2026 · en cours", en: "Sept. 2026 · ongoing" },
      description: {
        fr: "API REST Spring Boot qui suit des avions réels par leur code ICAO24. Les positions arrivent en direct depuis l'API OpenSky Network (authentification OAuth2), sont collectées à intervalle régulier et conservées pour retracer les trajectoires et calculer des statistiques de vol. Schéma versionné avec Flyway, tests unitaires et d'intégration contre un vrai PostgreSQL grâce à Testcontainers. Image Docker déployée sur Render, CI GitHub Actions à chaque push.",
        en: "Spring Boot REST API that tracks real aircraft by their ICAO24 code. Live positions come from the OpenSky Network API (OAuth2 authentication), are collected on a schedule and stored to rebuild flight paths and compute flight statistics. Schema versioned with Flyway, unit and integration tests against a real PostgreSQL thanks to Testcontainers. Docker image deployed on Render, GitHub Actions CI on every push.",
      },
      flows: [
        { label: "Pipeline", steps: ["API OpenSky (OAuth2)", { fr: "Collecte planifiée", en: "Scheduled collection" }, "PostgreSQL + Flyway", "API REST Spring Boot"] },
        { label: { fr: "Déploiement", en: "Deployment" }, steps: [{ fr: "GitHub Actions (tests, build)", en: "GitHub Actions (tests, build)" }, { fr: "Image Docker", en: "Docker image" }, "Render + Neon"] },
      ],
      stack: ["Java", "Spring Boot", "Spring Data JPA", "PostgreSQL", "Flyway", "OAuth2", "JUnit 5", "Mockito", "Testcontainers", "Docker", "GitHub Actions", "Maven"],
      github: "https://github.com/ccao94/flighttracker",
      demo: "https://flighttracker-ppkc.onrender.com",
      demoNote: { fr: "Hébergement gratuit, premier chargement jusqu'à 3 minutes", en: "Free hosting, first load can take up to 3 minutes" },
      images: [
        {
          src: "/images/projects/flighttracker-history.webp",
          alt: { fr: "Réponse JSON de l'API : historique des positions d'un avion", en: "API JSON response: position history of an aircraft" },
          caption: { fr: "Historique des positions d'un long-courrier Air India", en: "Position history of an Air India long-haul flight" },
        },
        {
          src: "/images/projects/flighttracker-stats.webp",
          alt: { fr: "Réponse JSON de l'API : statistiques de vol", en: "API JSON response: flight statistics" },
          caption: { fr: "Statistiques du vol : distance, temps en vol, altitude et vitesse max", en: "Flight statistics: distance, airborne time, max altitude and speed" },
        },
      ],
    },
    {
      id: "monitoring",
      badge: { fr: "Data · déployé · en cours", en: "Data · deployed · ongoing" },
      title: { fr: "Surveillance de prix et alertes automatisées", en: "Automated price monitoring and alerts" },
      date: { fr: "Janv. 2026 · en cours", en: "Jan. 2026 · ongoing" },
      description: {
        fr: "Scraper de prix multi-sites basé sur les données structurées des pages (JSON-LD, microdata), avec alertes Telegram quand un prix franchit un seuil et détection des pages anti-bot. Chaque collecte est journalisée, et des vues SQL calculent des indicateurs de qualité des données (taux de succès par site, fraîcheur, complétude), suivis par des KPI documentés et un tableau de bord Power BI. API FastAPI et dashboard en ligne, 61 tests PyTest sur une base réelle, CI GitHub Actions et collecte horaire planifiée.",
        en: "Multi-site price scraper based on the structured data of each page (JSON-LD, microdata), with Telegram alerts when a price crosses a threshold and anti-bot page detection. Every collection run is logged, and SQL views compute data quality indicators (success rate per site, freshness, completeness), tracked through documented KPIs and a Power BI dashboard. FastAPI API and online dashboard, 61 PyTest tests on a real database, GitHub Actions CI and hourly scheduled collection.",
      },
      flows: [
        {
          label: "Pipeline",
          steps: [{ fr: "Sites marchands", en: "Retail sites" }, "Scraper JSON-LD", "PostgreSQL", "FastAPI + dashboard", { fr: "Alerte Telegram", en: "Telegram alert" }],
        },
        {
          label: "Data",
          steps: [{ fr: "Journal des collectes", en: "Collection log" }, { fr: "Vues SQL qualité", en: "SQL quality views" }, "KPI", "Power BI"],
        },
        { label: "CI", steps: ["git push", "Lint + tests", "Build Docker"] },
      ],
      stack: ["Python", "SQL", "PostgreSQL", "Power BI", "FastAPI", "Docker", "GitHub Actions", "Kubernetes", "PyTest", "Telegram API"],
      github: "https://github.com/ccao94/monitoring",
      demo: "https://price-monitor-gj4e.onrender.com/",
      demoNote: { fr: "Hébergement gratuit, premier chargement jusqu'à 1 minute", en: "Free hosting, first load can take up to 1 minute" },
      images: [
        {
          src: "/images/projects/monitoring-dashboard.webp",
          alt: { fr: "Dashboard de suivi des prix, avec l'historique de chaque produit et son seuil d'alerte", en: "Price tracking dashboard, with each product's history and alert threshold" },
        },
      ],
    },
    {
      id: "smartsoon",
      badge: { fr: "Chef de projet · équipe de 6", en: "Project lead · team of 6" },
      title: { fr: "SmartSoon, un RAG pour l'expertise médicale", en: "SmartSoon, a RAG for medical expertise" },
      date: { fr: "Avr. à juil. 2026 · 4 mois", en: "Apr. to Jul. 2026 · 4 months" },
      description: {
        fr: "RAG qui analyse des documents médicaux (PDF, images) et produit des rapports structurés avec citation des sources, en partenariat avec SOON Expertise. Pipeline documentaire : OCR Tesseract, anonymisation Presidio (contexte RGPD/HDS), embeddings multilingues et LLM Mistral. Je coordonnais les sprints et le suivi technique, en plus du développement.",
        en: "RAG that analyzes medical documents (PDF, images) and produces structured reports with source citations, in partnership with SOON Expertise. Document pipeline: Tesseract OCR, Presidio anonymization (GDPR/HDS context), multilingual embeddings and the Mistral LLM. I coordinated the sprints and the technical follow-up, on top of development.",
      },
      flows: [
        {
          label: "Pipeline",
          steps: ["PDF, images", "OCR Tesseract", { fr: "Anonymisation Presidio", en: "Presidio anonymization" }, { fr: "Embeddings multilingues", en: "Multilingual embeddings" }, "LLM Mistral", { fr: "Rapport sourcé", en: "Sourced report" }],
        },
      ],
      stack: ["Python", "FastAPI", "React", "Mistral", "ChromaDB", "Tesseract", "Presidio", "Docker Compose"],
      github: "https://github.com/ccao94/smartsoon",
    }
  ],
}

export const experience = {
  label: { fr: "Expériences", en: "Experience" },
  title: { fr: "Là où j'ai appris", en: "Where I learned" },
  titleItalic: { fr: "en entreprise.", en: "on the job." },
  list: [
    {
      company: "Thales AVS",
      team: "Training & Simulation",
      role: { fr: "Stagiaire ingénieur fonctionnel et développeur", en: "Functional engineer and developer intern" },
      date: { fr: "Janv. à mars 2026 · août à sept. 2026", en: "Jan. to Mar. 2026 · Aug. to Sept. 2026" },
      place: { fr: "Osny (95) · 5 mois", en: "Osny (95) · 5 months" },
      type: { fr: "Stage", en: "Internship" },
      points: [
        { fr: "Analyse des besoins métiers et modèle de données d'environ 60 entités pour un outil de type CMDB (référentiel d'atelier de développement)", en: "Business requirements analysis and a data model of about 60 entities for a CMDB-style tool (development workshop registry)" },
        { fr: "Conception et développement full stack d'un outil de référencement des machines, licences et architectures logicielles de l'environnement Thales, présenté en démonstration", en: "Full-stack design and development of a tool cataloging the machines, licenses and software architectures of the Thales environment, shown in a demo" },
        { fr: "Gestion des droits par profil (10 profils, contrôle côté interface), export et réinjection de données en masse avec contrôle d'intégrité, navigation par niveaux partagée par 4 écrans", en: "Role-based access (10 profiles, enforced in the interface), bulk data export and re-import with integrity checks, level-based navigation shared by 4 screens" },
        { fr: "Cycle de livraison incrémental", en: "Incremental delivery cycle" },
      ],
      stack: ["C#", "ASP.NET Core", "Angular", "PostgreSQL"],
    },
    {
      company: "CINEA",
      team: null,
      role: { fr: "Stagiaire technicien supérieur", en: "Senior technician intern" },
      date: { fr: "Nov. 2022 à janv. 2023", en: "Nov. 2022 to Jan. 2023" },
      place: { fr: "Maisons-Alfort (94) · 3 mois", en: "Maisons-Alfort (94) · 3 months" },
      type: { fr: "Stage", en: "Internship" },
      points: [
        { fr: "Campagnes de mesures acoustiques sur chantiers industriels et analyse des données récoltées", en: "Acoustic measurement campaigns on industrial construction sites and analysis of the collected data" },
        { fr: "Rédaction de rapports techniques, en lien direct avec les ingénieurs acousticiens", en: "Technical report writing, working directly with acoustic engineers" },
      ],
      stack: [{ fr: "Mesures acoustiques", en: "Acoustic measurements" }, { fr: "Analyse de données", en: "Data analysis" }],
    },
  ],
  next: {
    type: { fr: "Prochaine étape", en: "Next step" },
    title: { fr: "Votre entreprise ?", en: "Your company?" },
    date: { fr: "Nov. 2026 à nov. 2027", en: "Nov. 2026 to Nov. 2027" },
    text: {
      fr: "Je cherche une alternance de 12 mois en développement logiciel à partir de novembre 2026, à temps plein dès mars 2027. Java, Python, C#, Angular, DevOps : je m'adapte à votre stack.",
      en: "I'm looking for a 12-month software development apprenticeship from November 2026, full time from March 2027. Java, Python, C#, Angular, DevOps: I adapt to your stack.",
    },
    cta: { fr: "Discutons-en", en: "Let's talk" },
  },
}

// Timeline unit: months since September 2020. The axis ends at 87 (December 2027).
export const path = {
  label: { fr: "Parcours", en: "Background" },
  title: { fr: "Formation", en: "Education" },
  titleItalic: { fr: "& parcours", en: "& path" },
  desc: { fr: "Six ans de parcours, dessinés à l'échelle.", en: "Six years, drawn to scale." },
  rows: [
    {
      label: { fr: "Études", en: "Studies" },
      bars: [
        { from: 0, to: 34, label: "DUT" },
        { from: 36, to: 46, label: "ATS" },
        { from: 48, to: 84, label: "EFREI" },
      ],
    },
    {
      label: { fr: "Entreprise", en: "Work" },
      bars: [
        { from: 26, to: 29, label: "CINEA", kind: "work" },
        { from: 64, to: 67, label: "Thales", kind: "work" },
        { from: 71, to: 73, label: "", kind: "work" },
        { from: 74, to: 86, label: { fr: "Alternance ?", en: "Apprenticeship?" }, kind: "planned" },
      ],
    },
    {
      label: { fr: "Mobilité", en: "Abroad" },
      bars: [
        { from: 52, to: 56, label: "Montréal", kind: "work" },
        { from: 73, to: 74, label: "Porto", kind: "work" },
      ],
    },
  ],
  years: [2021, 2022, 2023, 2024, 2025, 2026, 2027],
  today: { fr: "aujourd'hui", en: "today" },
  legend: {
    fr: "Une graduation = 3 mois. En pointillés, l'alternance que je recherche.",
    en: "One tick = 3 months. Dashed: the apprenticeship I'm looking for.",
  },
  schools: [
    {
      years: "2024 · 2027",
      title: { fr: "Diplôme d'ingénieur, majeure Software Engineering", en: "Engineering degree, Software Engineering major" },
      school: "EFREI Paris Panthéon-Assas",
      place: "Villejuif (94)",
      note: { fr: "M2 en alternance à partir de novembre 2026", en: "M2 as an apprentice from November 2026" },
    },
    {
      years: { fr: "Janv. à avr. 2025", en: "Jan. to Apr. 2025" },
      title: { fr: "Mobilité d'études de 4 mois", en: "4-month study exchange" },
      school: "Concordia University",
      place: { fr: "Montréal, Canada", en: "Montreal, Canada" },
      note: null,
    },
    {
      years: "2023 · 2024",
      title: { fr: "CPGE ATS Ingénierie industrielle", en: "CPGE ATS, industrial engineering" },
      school: "Lycée Robert Doisneau",
      place: "Corbeil-Essonnes (91)",
      note: { fr: "Mention A", en: "Grade A" },
    },
    {
      years: "2020 · 2023",
      title: { fr: "DUT Mesures Physiques", en: "DUT in Physical Measurements" },
      school: { fr: "IUT d'Orsay, Université Paris-Saclay", en: "IUT d'Orsay, Paris-Saclay University" },
      place: "Gif-sur-Yvette (91)",
      note: { fr: "Option Techniques instrumentales", en: "Instrumentation track" },
    },
  ],
}

export const beyond = {
  label: { fr: "En dehors du code", en: "Outside of code" },
  title: { fr: "Ce qui m'anime", en: "What else" },
  titleItalic: { fr: "aussi.", en: "drives me." },
  desc: {
    fr: "Parce qu'un portfolio sans un peu de personnalité, c'est juste un CV en ligne.",
    en: "Because a portfolio without personality is just an online resume.",
  },
  moments: [
    {
      date: { fr: "Janv. à avr. 2025", en: "Jan. to Apr. 2025" },
      tag: { fr: "Autonomie", en: "Independence" },
      title: { fr: "Montréal, -20°C", en: "Montreal, -20°C" },
      text: {
        fr: "Quatre mois au Canada en plein hiver. Au-delà des cours à Concordia, c'est l'expérience de vie qui m'a le plus marqué : apprendre à tout gérer seul dans un pays qu'on ne connaît pas.",
        en: "Four months in Canada in the middle of winter. Beyond the courses at Concordia, it's the life experience that stuck with me most: learning to manage everything alone in a country you don't know.",
      },
    },
    {
      date: { fr: "Avr. à juil. 2026", en: "Apr. to Jul. 2026" },
      tag: { fr: "Leadership", en: "Leadership" },
      title: { fr: "Chef de projet sur SmartSoon", en: "Project lead on SmartSoon" },
      text: {
        fr: "Une équipe de 6 et une entreprise partenaire. J'ai appris à découper le travail en sprints, à suivre l'avancement de chacun et à garder du temps pour coder moi aussi.",
        en: "A team of 6 and a partner company. I learned to split the work into sprints, follow everyone's progress and still keep time to code myself.",
      },
    },
    {
      date: { fr: "Octobre 2026", en: "October 2026" },
      tag: { fr: "Adaptation", en: "Adaptability" },
      title: { fr: "Porto, chez MÙI Concept", en: "Porto, at MÙI Concept" },
      text: {
        fr: "Mobilité internationale obligatoire de l'EFREI (programme SWIM), dans une boutique de thé. Je m'occupe de tâches numériques et de la reprise du site web de la boutique, et je présente aussi les thés aux clients, en anglais, sans parler portugais.",
        en: "EFREI's mandatory international placement (SWIM program), in a tea shop. I handle digital tasks and the rework of the shop's website, and I also present teas to customers, in English, without speaking Portuguese.",
      },
    },
  ],
  hobbies: [
    {
      title: { fr: "Thé & parfumerie", en: "Tea & perfumery" },
      text: {
        fr: "J'explore le monde du thé, et de plus en plus la parfumerie de niche, surtout asiatique et les parfums aux notes de thé. Je passe régulièrement dans les boutiques spécialisées à Paris. Travailler dans une boutique de thé à Porto tombait donc plutôt bien.",
        en: "I explore the world of tea, and more and more niche perfumery, especially Asian houses and tea-note fragrances. I regularly visit specialist shops in Paris. Working in a tea shop in Porto was a happy coincidence, then.",
      },
    },
    {
      title: "Hardware & PC building",
      text: {
        fr: "Passionné par l'univers du hardware. Je suis de près les sorties de composants et les benchmarks, et j'aime comprendre ce qui se passe sous le capot d'une machine.",
        en: "Passionate about the hardware world. I closely follow component releases and benchmarks, and I enjoy understanding what's going on under the hood.",
      },
    },
    {
      title: { fr: "Astronomie", en: "Astronomy" },
      text: {
        fr: "Comprendre ce qu'on observe dans le ciel, des planètes aux galaxies : une curiosité qui rejoint mon parcours en physique.",
        en: "Understanding what we see in the sky, from planets to galaxies: a curiosity that ties in with my physics background.",
      },
    },
    {
      title: { fr: "Sport & discipline", en: "Sports & discipline" },
      text: {
        fr: "Fitness régulier et tennis quand j'en ai l'occasion. Le sport m'aide à structurer mes journées, et accessoirement à survivre aux longues sessions de debug.",
        en: "Regular weight training and tennis when I can. Sports help me structure my days, and also survive long debugging sessions.",
      },
    },
  ],
}

export const contact = {
  label: { fr: "Contact", en: "Contact" },
  bigWord: "Contact",
  formTitle: { fr: "Écrivez-moi", en: "Write to me" },
  intro: {
    fr: "Une offre d'alternance, une question sur un projet ou simplement un échange : le message arrive directement dans ma boîte mail.",
    en: "An apprenticeship offer, a question about a project or just a chat: your message goes straight to my inbox.",
  },
  fields: {
    name: { fr: "Nom et prénom", en: "Full name" },
    email: { fr: "Email", en: "Email" },
    company: { fr: "Entreprise (facultatif)", en: "Company (optional)" },
    message: { fr: "Votre message", en: "Your message" },
  },
  send: { fr: "Envoyer", en: "Send" },
  sending: { fr: "Envoi...", en: "Sending..." },
  sent: { fr: "Message envoyé, merci !", en: "Message sent, thank you!" },
  error: { fr: "L'envoi a échoué. Écrivez-moi directement par mail.", en: "Sending failed. Please email me directly." },
  missing: { fr: "Merci de remplir nom, email et message.", en: "Please fill in name, email and message." },
  direct: { fr: "Ou directement", en: "Or directly" },
}

export const footer = {
  lines: [
    { fr: "Software Engineering · EFREI Paris · Promo 2027", en: "Software Engineering · EFREI Paris · Class of 2027" },
    "Java · Spring Boot · Python · C# · Angular · Docker",
  ],
  available: { fr: "Disponible en alternance dès nov. 2026", en: "Open to an apprenticeship from Nov. 2026" },
  viewProjects: { fr: "Voir les projets", en: "View projects" },
  builtWith: { fr: "Conçu et développé avec React et Vite", en: "Designed and built with React and Vite" },
  backToTop: { fr: "Haut de page", en: "Back to top" },
}
