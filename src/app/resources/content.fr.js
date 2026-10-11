// French version of content.js — same shape, so any page can load either language.
// English content lives in ./content.js

const person = {
  firstName: "Rodier Eyas",
  lastName: "Sangibala",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Analyste Systèmes, Données et Intégration",
  avatar: "/images/ro-square.jpg",
  email: "rodier.sangibala@chezyo.com",
  location: "Paris",
  timeZone: "Europe/Paris",
  languages: ["Anglais", "Français", "Lingala", "Kikongo"],
};

const newsletter = {
  display: true,
  title: <>Abonnez-vous à la newsletter de {person.firstName}</>,
  description: (
    <>
      Je parle parfois de la politique en RD Congo en dehors de mon travail, ainsi que d'idées innovantes.
    </>
  ),
};

const social = [
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/rodier-eyas-sangibala-5b3026b1/",
  },
  {
    name: "",
    icon: "x",
    link: "https://x.com/rodiersangibala?s=21",
  },
  {
    name: "E-mail",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

// Téléchargement du CV : placer les deux PDF dans /public
const resumes = [
  { label: "CV ENG", link: "/New_Rodier_Resume_EN.pdf", fileName: "New_Rodier_Resume_EN.pdf" },
  { label: "CV FR", link: "/New_Rodier_Resume_FR.pdf", fileName: "New_Rodier_Resume_FR.pdf" },
];

const home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Accueil",
  title: `Portfolio de ${person.name}`,
  description: `Site portfolio présentant mon travail en tant que ${person.role}`,
  headline: <>Bonjour ! Rodier ici...</>,
  featured: {
    display: false,
    title: <>Projets : <strong className="ml-4">Articles académiques et recherche</strong></>,
    href: "/work",
  },
  subline: (
    <>
      Analyste en intégrations globales chez <strong className="text-lg font-bold">Awin</strong>, installé à Paris, et stratège qui aide les marques à relier données, plateformes et personnes grâce à des systèmes évolutifs — avec clarté et précision. Ancien fondateur de chezyo.com (2023–2025), j'explore aujourd'hui de nouvelles idées à l'échelle locale.
    </>
  ),
};

const about = {
  path: "/about",
  label: "À propos",
  title: `Découvrez mon parcours complet`,
  description: `Faites connaissance avec ${person.name}, ${person.role} à ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com/rsangibala",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        <p>
          Je suis analyste systèmes, données et intégration, passionné par l'idée de faire fonctionner la technologie sans friction. Chez Awin Global, je me spécialise dans l'intégration des marques : je développe moi-même des codes de suivi prêts à l'emploi et des plugins pour les plateformes e-commerce et Google Tag Manager (GTM). Je travaille directement avec les marques pour garantir un suivi fiable des transactions, en m'appuyant sur SQL pour surveiller les performances et optimiser les implémentations. Mon passage chez Awin a approfondi mon expertise en suivi e-commerce, en suivi côté serveur (cloud) et en intégrations d'API, qui forment le socle de ma compréhension du commerce digital et de l'optimisation pilotée par les données.
        </p>
        <p>
          Depuis septembre 2026, je suis installé à Paris, en France, et je continue au sein de la même équipe après une mobilité interne. Au-delà de l'expérience en entreprise, j'ai fondé et dirigé Chezyo.com, une plateforme e-commerce en RD Congo, de 2023 à 2025. Je l'ai fermée en 2025 pour explorer les idées recueillies en chemin et travailler sur quelque chose de nouveau, adapté à l'échelle locale. Je suis également cofondateur et membre du conseil d'administration de LIFETIME GROUP ENTERPRISE, où j'aide à transformer des idées en entreprises — soit en les lançant nous-mêmes, soit en élaborant des stratégies pour que d'autres les développent.
        </p>
        <p>
          Je m'épanouis à la croisée de la technologie, de la stratégie et de la résolution de problèmes. Qu'il s'agisse d'optimiser des configurations de suivi, de prendre des décisions fondées sur les données ou d'imaginer de nouveaux modèles économiques, j'apporte un esprit analytique doublé d'une touche créative. Et s'il y a un casse-tête de tracking à résoudre, il y a de fortes chances que j'aie déjà construit la solution.
        </p>
      </>
    ),
  },
  work: {
    display: true,
    title: "Expérience professionnelle",
    experiences: [
      {
        company: "Awin Global",
        timeframe: "août 2022 - aujourd'hui",
        role: "Global Integrations Analyst (anciennement Global Technical Integrations Analyst)",
        achievements: [
          <>
            Pilotage de l'intégration technique de plus de 300 marques, avec une hausse de 537 % des validations d'implémentation.
            Mise en place du suivi via GTM, API et plugins ; utilisation de SQL pour le monitoring et le reporting.
          </>,
          <>
            Amélioration de l'efficacité de l'équipe grâce à la formation, à la documentation et à l'optimisation des tableaux de bord.
          </>,
          <>
            Mobilité interne vers la France en septembre 2026 (statut cadre), avec reprise de mon ancienneté et un périmètre inchangé.
          </>,
        ],
        images: [],
      },
      {
        company: "ChezYo Coo/chezyo.com",
        timeframe: "mars 2023 - 2025",
        role: "Fondateur et PDG",
        achievements: [
          <>
            Fondation et direction de chezyo.com, une plateforme e-commerce en RD Congo.
            J'ai créé et financé l'entreprise, en supervisant le développement du site, les opérations techniques, la facturation et le marketing digital.
            Avec des entrepôts à Kinshasa et à Lubumbashi, je gérais la logistique à distance pendant que mon équipe s'occupait de la préparation des commandes et de la relation client.
          </>,
          <>
            Fermeture de la plateforme en 2025 pour explorer les idées recueillies et travailler sur un nouveau projet adapté à l'échelle locale.
          </>,
        ],
        images: [],
      },
      {
        company: "Diebold Nixdorf",
        timeframe: "février 2022 - juillet 2022",
        role: "Spécialiste du support technique (francophone)",
        achievements: [
          <>
            Support à distance pour des systèmes de caisse (POS), des terminaux de paiement, des coffres numériques et des pompes à carburant dans des environnements de vente au détail.
          </>,
          <>
            Utilisation d'outils de diagnostic pour dépanner, redémarrer et résoudre les incidents, afin de limiter les interruptions et d'assurer le bon fonctionnement chez les clients.
          </>,
        ],
        images: [],
      },
      {
        company: "Capgemini",
        timeframe: "septembre 2020 - janvier 2022",
        role: "Analyste support poste de travail (francophone)",
        achievements: [
          <>
            Support informatique à distance par téléphone, chat et e-mail, avec 95 % des tickets résolus dans les délais du SLA.
          </>,
          <>
            Gestion des incidents avec ServiceNow, dépannage sur Windows et avec des outils réseau.
          </>,
          <>
            Tenue de la documentation, accompagnement des nouveaux arrivants et amélioration des processus de support internes.
          </>,
        ],
        images: [],
      },
      {
        company: "JLL",
        timeframe: "2021",
        role: "Analyste de données Helpdesk",
        achievements: [
          <>
            Travail dans un environnement informatique d'entreprise à rythme soutenu, au service d'opérations pilotées par les données. Collecte et nettoyage de données de tickets issues de SQL Server, Oracle et d'entrepôts de données AWS afin d'identifier les inefficacités dans les processus de support.
            Utilisation d'Alteryx et d'Excel pour le prétraitement et l'automatisation, pour des rapports plus clairs et de meilleures décisions.
            Participation à l'analyse des causes racines des problèmes récurrents et collaboration avec les équipes internes pour proposer des solutions concrètes.
            Restitution d'analyses via des outils de visualisation comme Tableau et Amazon QuickSight pour améliorer le suivi de la qualité, fluidifier la prestation de service et l'expérience des utilisateurs.
          </>,
        ],
        images: [],
      },
      {
        company: "LIFETIME GROUP ENTREPRISE",
        timeframe: "juin 2018 - aujourd'hui",
        role: "Cofondateur, président et ancien chef de projet",
        achievements: [
          <>
            Cofondation et pilotage de la croissance stratégique, avec la gestion de projets pendant la phase de lancement. Depuis 2021, je me consacre uniquement à la gouvernance et au leadership du conseil.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true,
    title: "Formation",
    institutions: [
      {
        name: "Université de technologie de Częstochowa",
        description: <>Master, Intelligence computationnelle et fouille de données</>,
      },
      {
        name: "Université Sharda",
        description: <>Licence, Applications informatiques - Génie logiciel</>,
      },
      {
        name: "edX (en ligne)",
        description: <>Gestion de projets</>,
      },
      {
        name: "Diplôme national",
        description: <>Mathématiques et Physique</>,
      },
    ],
  },
  technical: {
    display: true,
    title: "Compétences",
    skills: [
      {
        title: "Technique et programmation :",
        description: <>Python, SQL, C++, JavaScript, PHP, intégrations d'API.</>,
        images: [],
      },
      {
        title: "Données et analytique :",
        description: <>Google Tag Manager (GTM), GA4, suivi côté serveur, systèmes cloud</>,
        images: [],
      },
      {
        title: "Réseaux et systèmes :",
        description: <>DNS, SSL, VPN, systèmes POS, Citrix</>,
        images: [],
      },
      {
        title: "Business et stratégie :",
        description: <>Négociation, gestion de projets, CRM</>,
        images: [],
      },
    ],
  },
};

const blog = {
  path: "/blog",
  label: "Blog",
  title: "Les opinions exprimées ici n'engagent que moi et ne doivent pas être associées à mon travail professionnel.",
  description: `Découvrez les dernières publications de ${person.name}`,
};

const work = {
  path: "/work",
  label: "Projets",
  title: `Projets – ${person.name}`,
  description: `Projets de conception et de développement par ${person.name}`,
};

const gallery = {
  path: "/gallery",
  label: "Galerie",
  title: `Galerie photo – ${person.name}`,
  description: `Une collection de photos par ${person.name}`,
  images: [],
};

export { person, social, resumes, newsletter, home, about, blog, work, gallery };
