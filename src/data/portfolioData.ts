import { 
  Package, 
  Terminal, 
  ShieldCheck, 
  LineChart, 
  Code2, 
  Cpu, 
  Server, 
  Network, 
  Search, 
  BookOpen,
  Mail,
  Linkedin,
  MapPin,
  Calendar,
  Briefcase,
  GraduationCap
} from 'lucide-react';

export const NAV_LINKS = [
  { name: 'Profil', href: '#profil' },
  { name: 'Parcours', href: '#parcours' },
  { name: 'Alternance', href: '#alternance' },
  { name: 'Compétences', href: '#skills' },
  { name: 'Projets', href: '#projets' },
  { name: 'Épreuve E5', href: '#e5' },
  { name: 'Veille', href: '#veille' },
  { name: 'Contact', href: '#contact' },
];

export const SKILLS = [
  {
    category: 'Conteneurisation',
    icon: 'Package',
    items: ['Docker & Docker Compose', 'Réseaux WAN / DMZ / LAN', 'iptables / Pare-feu', 'Nginx en conteneur']
  },
  {
    category: 'Systèmes & Admin',
    icon: 'Server',
    items: ['Linux Debian / Ubuntu', 'Windows Server', 'Active Directory', 'DNS / DHCP']
  },
  {
    category: 'Sécurité & Réseau',
    icon: 'ShieldCheck',
    items: ['VPN WireGuard', 'UFW / Fail2ban', 'LDAP / Samba 4', 'TCP/IP / Routage']
  },
  {
    category: 'Monitoring',
    icon: 'LineChart',
    items: ['Grafana / Prometheus', 'Node Exporter / cAdvisor', 'GLPI (ITSM)', 'Veeam Backup']
  },
  {
    category: 'Scripting & Dev',
    icon: 'Code2',
    items: ['Bash / Python', 'HTML / CSS / PHP', 'MySQL / MariaDB', 'Git']
  }
];

export const PROJECTS = [
  {
    id: '01',
    title: 'Supervision avec Grafana',
    category: 'MONITORING',
    description: 'Stack Prometheus + Grafana déployée sous Docker. Dashboards CPU/RAM, alerting sur seuils critiques et visualisation temps réel des métriques conteneurs.',
    image: 'https://images.unsplash.com/photo-1551288049-bbda38a5f452?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '02',
    title: 'Cloud privé avec Nextcloud',
    category: 'INFRASTRUCTURE',
    description: 'Stack Docker Compose : Nextcloud + MariaDB. Architecture On-Premise pour la souveraineté des données. Intégration LDAP Samba et sauvegarde rsync.',
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '03',
    title: 'Serveur Linux pour GLPI',
    category: 'ITSM',
    description: 'Installation de GLPI sur Debian avec pile LAMP (Apache / MariaDB / PHP). Gestion des tickets, inventaire du parc et configuration des rôles utilisateurs.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc48?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '04',
    title: 'Architecture DMZ avec Docker',
    category: 'RÉSEAU',
    description: '3 réseaux Docker isolés (WAN / DMZ / LAN). Pare-feu Debian avec NET_ADMIN, Nginx en DMZ et règles iptables pour filtrer et isoler le trafic.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc48?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '05',
    title: 'VPN WireGuard (WG-Easy)',
    category: 'SÉCURITÉ',
    description: 'Déploiement de WG-Easy via Docker. Interface web de gestion des clients VPN (port 51821), génération de QR codes et tunnels chiffrés haute performance.',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '06',
    title: 'Métrologie Docker (Dockprom)',
    category: 'MONITORING',
    description: 'Stack Dockprom : Prometheus + Grafana + Node Exporter + cAdvisor. Alerting sur seuils critiques, visualisation temps réel des conteneurs et de l\'hôte.',
    image: 'https://images.unsplash.com/photo-1551288049-bbda38a5f452?auto=format&fit=crop&q=80&w=800'
  }
];

export const EXPERIENCE = [
  {
    date: '2025 - 2026',
    title: 'Alternant Technicien Cloud & Infra',
    company: 'Nu3ge',
    location: 'Cloud Services · Paris',
    description: 'Alternance dans une entreprise de cloud. Administration de l\'infrastructure, déploiement et monitoring des services, support technique et maintien en conditions opérationnelles.',
    tags: ['Cloud', 'Grafana', 'Docker', 'Infrastructure', 'Support']
  },
  {
    date: '2024 - 2026',
    title: 'BTS SIO SISR',
    company: 'ESTIAM',
    location: 'Paris',
    description: 'Option SISR — Administration système, réseau, sécurité et infrastructure IT. 6 projets techniques : DMZ Docker, VPN WireGuard, monitoring Grafana/Prometheus, cloud privé Nextcloud, GLPI et sauvegarde automatisée Bash.',
    tags: ['Docker', 'Linux', 'Windows Server', 'Grafana', 'Nextcloud', 'WireGuard']
  },
  {
    date: '2021 - 2024',
    title: 'Baccalauréat STMG Marketing',
    company: 'Lycée',
    location: 'Paris',
    description: 'Mention Assez Bien. Spécialité Marketing — bases de gestion, communication et organisation.',
    tags: []
  }
];

export const VEILLE_DATA = {
  subject: "L'évolution du hardware informatique face à l'essor de l'intelligence artificielle",
  timeline: "PROMO 2024 / 2026",
  justification: {
    title: "Pourquoi ce sujet ?",
    reasons: [
      {
        title: "Lien métier",
        description: "Que ce soit en administration système ou en développement, je serai amené à utiliser des machines intégrant ces nouvelles technologies."
      },
      {
        title: "Richesse d'analyse",
        description: "Le sujet croise matériel, logiciel, énergie, et géopolitique, offrant une vision transversale de l'informatique."
      },
      {
        title: "Actualité soutenue",
        description: "Les annonces hebdomadaires garantissent un flux continu d'informations à analyser et à croiser."
      },
      {
        title: "Regard critique",
        description: "Permet d'analyser non seulement les performances, mais aussi la consommation, la dépendance industrielle et l'accessibilité."
      }
    ],
    perimeter: [
      { category: "Processeurs (CPU)", items: "Intel, AMD, Apple Silicon, Qualcomm" },
      { category: "Cartes graphiques (GPU)", items: "NVIDIA, AMD" },
      { category: "Puces dédiées IA", items: "NPU, TPU, Trainium" },
      { category: "Semi-conducteurs", items: "TSMC, Samsung, Intel Foundry" },
      { category: "Enjeux", items: "Énergie, Géopolitique, Souveraineté" }
    ]
  },
  methodology: {
    tools: [
      { name: "Feedly", usage: "Centralisation des flux RSS pour une lecture efficace." },
      { name: "Notion", usage: "Base de capitalisation et synthèses personnelles." },
      { name: "Google Alerts", usage: "Surveillance de mots-clés spécifiques en temps réel." }
    ],
    sources: {
      fr: ["Tom's Hardware France", "Les Numériques", "Next INpact", "Le Monde Informatique", "Frandroid", "Korben"],
      intl: ["AnandTech", "Tom's Hardware US", "Ars Technica", "The Verge", "Phoronix"]
    },
    workflow: [
      "Créneau hebdomadaire fixe (30 min)",
      "Lecture rapide des titres et sélection",
      "Analyse approfondie de 2-3 articles",
      "Capitalisation structurée dans Notion",
      "Vérification et croisement des sources"
    ]
  },
  trends: [
    {
      title: "Domination de NVIDIA",
      description: "Confirmation de la position dominante avec les architectures Hopper et Blackwell, soutenue par l'écosystème CUDA."
    },
    {
      title: "Généralisation des NPU",
      description: "Le NPU devient un composant standard des PC (Copilot+ PC, Apple Neural Engine) pour l'IA on-device."
    },
    {
      title: "Enjeux Géopolitiques",
      description: "Course à la souveraineté numérique via le CHIPS Act (USA) et l'EU Chips Act pour relocaliser la production."
    }
  ],
  articles: [
    {
      date: "12/05/2025",
      source: "Tom's Hardware",
      title: "NVIDIA dévoile l'architecture Blackwell B200",
      analysis: "NVIDIA conforte sa domination. Le rapport performance/watt devient un argument stratégique crucial."
    },
    {
      date: "03/06/2025",
      source: "Next INpact",
      title: "Microsoft lance la catégorie Copilot+ PC",
      analysis: "Le NPU devient un composant standard du PC grand public, imposant un minimum de 40 TOPS."
    },
    {
      date: "08/07/2025",
      source: "Les Numériques",
      title: "Apple M4 et Neural Engine 38 TOPS",
      analysis: "Apple Silicon prouve qu'ARM peut concurrencer le x86 sur la performance et l'autonomie."
    },
    {
      date: "29/07/2025",
      source: "Le Monde Informatique",
      title: "TSMC investit 65 milliards aux USA",
      analysis: "Le hardware est un enjeu de souveraineté nationale. La dépendance à Taïwan est un risque stratégique."
    },
    {
      date: "14/09/2025",
      source: "Ars Technica",
      title: "AMD MI300X : la riposte à NVIDIA",
      analysis: "Le hardware ne suffit pas : l'écosystème logiciel (CUDA) est aussi déterminant que la puce elle-même."
    },
    {
      date: "11/11/2025",
      source: "Next INpact",
      title: "Consommation énergétique des datacenters",
      analysis: "L'efficacité énergétique devient critique. L'IA générative pourrait doubler la conso d'ici 2030."
    },
    {
      date: "18/01/2026",
      source: "Korben",
      title: "L'Europe accélère avec l'EU Chips Act",
      analysis: "Priorité politique à la souveraineté numérique via la relocalisation de la production de puces."
    },
    {
      date: "02/04/2026",
      source: "Tom's Hardware",
      title: "Apple M5 et NPU à 50+ TOPS",
      analysis: "Évolution fulgurante : en 2 ans, la puissance des NPU est passée de 10 à plus de 50 TOPS."
    }
  ],
  assessment: {
    benefits: [
      "Compréhension fine de l'écosystème matériel (CPU vs GPU vs NPU)",
      "Capacité de mise en perspective (enjeux énergétiques et géopolitiques)",
      "Méthodologie de travail régulière et structurée"
    ],
    limits: [
      "Goulot d'étranglement physique (refroidissement et alimentation)",
      "Risque systémique lié à la dépendance (NVIDIA, TSMC)",
      "Coût élevé créant une fracture technologique"
    ],
    perspectives: [
      "Montée en puissance des puces propriétaires des hyperscalers",
      "Développement de l'IA locale (on-device) pour la confidentialité",
      "Effets concrets des politiques de souveraineté sur l'approvisionnement"
    ]
  }
};

export const ALTERNANCE = [
  {
    year: "Alternance NU3GE — Année 1",
    subtitle: "3 ancres par tâche. Tu dis ces phrases, tu ne récites pas.",
    tasks: [
      {
        id: "T1",
        title: "Inventaire et gestion du parc informatique",
        date: "01/09/2024 au 30/11/2024",
        context: "Patrimoine + Service + Dev pro",
        ancres: [
          {
            title: "ANCRE 1 : RECENSEMENT",
            phrase: "J'ai recensé l'ensemble du parc Nu3ge — PC, serveurs, switches — dans un tableur Excel structuré : type, marque, n° de série, utilisateur, état."
          },
          {
            title: "ANCRE 2 : AUDIT",
            phrase: "J'en ai tiré un rapport d'audit : matériel obsolète, garanties expirées, postes à renouveler. Ça a servi de base à la planification budgétaire."
          },
          {
            title: "ANCRE 3 : PROCÉDURE",
            phrase: "J'ai formalisé une procédure de gestion des équipements (entrée, sortie, attribution) pour que l'inventaire reste à jour après mon intervention."
          }
        ]
      },
      {
        id: "T2",
        title: "Support utilisateurs N1 et N2 (GLPI)",
        date: "01/10/2024 au 30/06/2025",
        context: "Incidents + Service",
        ancres: [
          {
            title: "ANCRE 1 : TICKETING",
            phrase: "J'ai traité au quotidien les tickets utilisateurs dans GLPI — diagnostic, priorisation, résolution ou escalade N2."
          },
          {
            title: "ANCRE 2 : RÉCURRENTS",
            phrase: "J'ai identifié les incidents qui revenaient le plus souvent (mots de passe, imprimantes, VPN) et j'ai rédigé des procédures de résolution pour fiabiliser les réponses."
          },
          {
            title: "ANCRE 3 : INTERVENTION",
            phrase: "Sur les demandes complexes, je documentais l'intervention dans un compte-rendu — utilisateur, contexte, action, résultat — pour tracer et capitaliser."
          }
        ]
      },
      {
        id: "T3",
        title: "Déploiement et configuration de postes Windows 10/11",
        date: "01/11/2024 au 28/02/2025",
        context: "Patrimoine + Incidents + Service",
        ancres: [
          {
            title: "ANCRE 1 : MASTER",
            phrase: "J'ai utilisé MDT pour préparer une image système maîtrisée — OS + drivers + applis métiers — déployable sur n'importe quel poste."
          },
          {
            title: "ANCRE 2 : CHECKLIST",
            phrase: "Une checklist post-installation valide chaque mise en service : jointure domaine, GPO appliquées, antivirus, sauvegarde profil."
          },
          {
            title: "ANCRE 3 : RAPPORT",
            phrase: "Pour chaque vague de déploiement, un rapport de mise en service liste les postes traités, les écarts éventuels, et la livraison utilisateur."
          }
        ]
      }
    ]
  },
  {
    year: "Alternance NU3GE — Année 2",
    subtitle: "Montée en compétences : supervision, cloud, documentation.",
    tasks: [
      {
        id: "T4",
        title: "Mise en place d'une supervision réseau avec Zabbix",
        date: "01/09/2025 au 31/12/2025",
        context: "Patrimoine + Incidents + Mode projet + Service",
        ancres: [
          {
            title: "ANCRE 1 : DÉPLOIEMENT",
            phrase: "J'ai déployé un serveur Zabbix pour superviser l'infrastructure Nu3ge : hôtes, services réseau, métriques système — avec un schéma d'architecture documenté."
          },
          {
            title: "ANCRE 2 : SEUILS",
            phrase: "J'ai configuré les seuils d'alerte par criticité (CPU, RAM, disque, ping) pour qu'on soit prévenu avant l'incident, pas après."
          },
          {
            title: "ANCRE 3 : TESTS",
            phrase: "J'ai produit un rapport de tests qui prouve que les alertes remontent bien (simulation d'incident, déclenchement, notification)."
          }
        ]
      },
      {
        id: "T5",
        title: "Participation à une migration de services vers Azure",
        date: "01/01/2026 au 31/03/2026",
        context: "Patrimoine + Mode projet + Service",
        ancres: [
          {
            title: "ANCRE 1 : PLAN",
            phrase: "J'ai contribué au plan de migration : périmètre des services à basculer, planning par lots, identification des risques techniques et métiers."
          },
          {
            title: "ANCRE 2 : BASCULE",
            phrase: "J'ai rédigé la procédure de bascule et le rollback associé — étape par étape, avec points de contrôle et critère de retour en arrière."
          },
          {
            title: "ANCRE 3 : TESTS POST",
            phrase: "Après migration, j'ai exécuté un plan de tests pour valider chaque service côté Azure (connectivité, performance, accès utilisateurs), documenté dans un rapport."
          }
        ]
      },
      {
        id: "T6",
        title: "Rédaction de procédures et documentation technique",
        date: "01/09/2025 au 30/04/2026",
        context: "Incidents + Mode projet + Dev pro",
        ancres: [
          {
            title: "ANCRE 1 : WIKI",
            phrase: "J'ai contribué à la base de connaissances interne de Nu3ge — un wiki où chaque procédure est versionnée, datée, et reliée à un responsable."
          },
          {
            title: "ANCRE 2 : EXPLOITATION",
            phrase: "J'ai rédigé les procédures d'exploitation récurrentes : sauvegarde, redémarrage de service, ouverture de compte, déploiement de poste."
          },
          {
            title: "ANCRE 3 : GUIDE",
            phrase: "J'ai aussi rédigé un guide utilisateur de la plateforme de supervision Zabbix, pour que l'équipe puisse interpréter les dashboards sans dépendre de moi."
          }
        ]
      }
    ]
  }
];
