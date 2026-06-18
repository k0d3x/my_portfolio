/**
 * ============================================================================
 *  SITE CONTENT  —  EDIT EVERYTHING HERE
 * ----------------------------------------------------------------------------
 *  This file is the single source of truth for the entire portfolio.
 *  Change names, copy, projects, skills and links below and the whole site
 *  updates automatically. No need to touch the component files.
 * ============================================================================
 */

import type { LucideIcon } from "lucide-react";
import {
  Cloud,
  Boxes,
  Database,
  Cpu,
  Smartphone,
  Workflow,
  Gauge,
  GitBranch,
} from "lucide-react";

/* -------------------------------------------------------------------------- */
/*  PROFILE                                                                    */
/* -------------------------------------------------------------------------- */

export const profile = {
  name: "Ameer Ali Khan",
  firstName: "Ameer",
  role: "Senior Software Engineer",
  tagline: "Lead Software Developer",
  location: "Bengaluru, India",
  email: "techie.akhan@gmail.com",
  phone: "+91 70229 60767",
  availability: "Open to senior & lead engineering roles",
  yearsExperience: "8+",
  // Résumé PDF — served from /public and downloaded directly on click.
  resumeHref: "/Ameer_Ali_Khan.pdf",
  // Portrait photo — replace with your real photo: save it as
  // /public/profile.jpg and change this to "/profile.jpg".
  photo: "/my.PNG",
  heroHeadline: "I build scalable, high-performance backend systems.",
  heroSub:
    "Senior Software Engineer with 8+ years architecting cloud-native platforms, distributed microservices and data pipelines that serve millions of requests a day — across enterprise device management, retail fulfilment and media streaming.",
  valueProps: [
    "Distributed microservices at scale",
    "Cloud-native on Azure & AWS",
    "Apple Declarative Device Management",
  ],
} as const;

/* -------------------------------------------------------------------------- */
/*  SOCIAL LINKS                                                               */
/* -------------------------------------------------------------------------- */

export type SocialLink = {
  label: string;
  href: string;
  handle: string;
};

export const socials: SocialLink[] = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/ameer-alikhan/",
    handle: "in/ameer-alikhan",
  },
  {
    label: "GitHub",
    href: "https://github.com/",
    handle: "@ameeralikhan",
  },
  {
    label: "Email",
    href: "mailto:techie.akhan@gmail.com",
    handle: "techie.akhan@gmail.com",
  },
];

/* -------------------------------------------------------------------------- */
/*  SKILLS  (rendered in the rotating hero marquee + about page)              */
/* -------------------------------------------------------------------------- */

export const skills: string[] = [
  "Java 8+",
  "Spring Boot",
  "Spring Cloud",
  "Hibernate",
  "Microservices",
  "Kafka",
  "RabbitMQ",
  "IBM MQ",
  "Kubernetes",
  "Docker",
  "Azure",
  "AWS S3",
  "PostgreSQL",
  "MongoDB",
  "Neo4j",
  "Elasticsearch",
  "Redis",
  "Data Structures",
  "Algorithms",
  "Dynatrace",
  "Grafana",
  "GitHub Copilot",
];

export type SkillGroup = {
  title: string;
  icon: LucideIcon;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Languages & Frameworks",
    icon: Cpu,
    items: ["Java 8+", "Python", "Spring Boot", "Spring Cloud", "Hibernate", "JAX-RS", "Dropwizard"],
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    items: ["Azure", "AWS S3", "Kubernetes", "Docker", "Jenkins", "Apache Camel"],
  },
  {
    title: "Data & Storage",
    icon: Database,
    items: ["PostgreSQL", "Azure SQL", "MongoDB", "Neo4j", "Elasticsearch", "Redis"],
  },
  {
    title: "Messaging & Streaming",
    icon: Workflow,
    items: ["Kafka", "RabbitMQ", "IBM MQ"],
  },
  {
    title: "Observability",
    icon: Gauge,
    items: ["Dynatrace", "Grafana", "Splunk", "A/B Split Testing"],
  },
  {
    title: "Foundations",
    icon: GitBranch,
    items: ["Data Structures", "Algorithms", "System Design", "Agile / Scrum", "GitHub Copilot"],
  },
];

/* -------------------------------------------------------------------------- */
/*  STATS                                                                      */
/* -------------------------------------------------------------------------- */

export const stats = [
  { value: "8+", label: "Years of experience" },
  { value: "20M", label: "Cases processed daily" },
  { value: "60→7", label: "Minutes order release time" },
  { value: "48h→0", label: "Config propagation cut to instant" },
];

/* -------------------------------------------------------------------------- */
/*  PROJECT CATEGORIES  (filter chips on the projects page)                   */
/* -------------------------------------------------------------------------- */

export const categories = [
  "All",
  "Cloud & Infrastructure",
  "Microservices",
  "Device Management",
  "Data & Search",
  "Media & Streaming",
] as const;

export type Category = (typeof categories)[number];

/* -------------------------------------------------------------------------- */
/*  PROJECTS                                                                   */
/* -------------------------------------------------------------------------- */

export type Project = {
  slug: string;
  title: string;
  company: string;
  period: string;
  category: Exclude<Category, "All">;
  icon: LucideIcon;
  accent: string; // tailwind gradient classes
  summary: string;
  problem: string;
  role: string;
  results: string[];
  contributions: string[];
  stack: string[];
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "declarative-device-management",
    title: "Apple Declarative Device Management Platform",
    company: "Ivanti",
    period: "2024 — Present",
    category: "Device Management",
    icon: Smartphone,
    accent: "from-cyan-400 to-blue-600",
    featured: true,
    summary:
      "Led the migration of an enterprise MDM platform from legacy XML-based commands to Apple's modern, JSON-driven Declarative Device Management protocol for macOS, iOS and iPadOS.",
    problem:
      "MobileIron's MDM relied on a request/response, XML-based protocol that scaled poorly and reacted slowly to device state changes. Apple's Declarative Device Management (DDM) shifts intelligence to the device with policy-centric declarations — but adopting it meant re-architecting enrollment, configuration and compliance flows without breaking backward compatibility for millions of managed devices.",
    role: "Backend architect & technical lead for the Apple device management team — owning protocol design, microservice architecture and Apple coordination.",
    results: [
      "Transitioned a legacy XML MDM to a JSON-driven, policy-centric DDM framework.",
      "Enabled real-time device enrollment, configuration and compliance enforcement.",
      "Maintained full backward compatibility across the existing device fleet.",
      "Validated the protocol directly with Apple for documentation and test alignment.",
    ],
    contributions: [
      "Architected the end-to-end DDM integration and migration strategy.",
      "Built scalable, secure Spring Boot microservices for enrollment & config.",
      "Designed the policy-management algorithm that reliably pushes policies to a device after subsequent updates.",
      "Engineered PostgreSQL + Elasticsearch data pipelines for rapid device inventory and policy-status reporting.",
      "Delivered RESTful APIs and async workflows for DDM state publishing, manifest distribution and subscription management.",
    ],
    stack: ["Java", "Spring Boot", "PostgreSQL", "Elasticsearch", "REST", "Kubernetes"],
  },
  {
    slug: "one-atlas-distribution",
    title: "One Atlas — Grocery Distribution Center Platform",
    company: "Walmart",
    period: "2021 — 2024",
    category: "Cloud & Infrastructure",
    icon: Cloud,
    accent: "from-amber-400 to-orange-600",
    featured: true,
    summary:
      "End-to-end ownership of a manual grocery distribution center solution scaling to 20 million cases per day across multiple Azure cloud regions.",
    problem:
      "Walmart needed a fault-tolerant fulfilment platform able to process tens of millions of grocery cases daily, roll out to dozens of distribution centers, and dramatically cut the time between order download and release — all while staying resilient across cloud regions.",
    role: "Software Engineer 3 — led design, development and rollout, and mentored junior engineers.",
    results: [
      "Scaled the platform to process 20M cases/day across Azure regions.",
      "Cut order download & release time from 60+ minutes to under 7 minutes.",
      "Reduced central config propagation from 48 hours to instantaneous.",
      "Onboarded 10 distribution centers with a roadmap toward 48 in a year.",
    ],
    contributions: [
      "Enhanced the Order Fulfilment Service with real-time item picking.",
      "Built a Central Configuration system for instant cross-region updates.",
      "Integrated auto-recovery with Inventory, Replenishment & Audit teams for fault tolerance.",
      "Led integration with Witron automated warehouses and back-end systems.",
      "Designed a pro-rata order allocation algorithm for equitable distribution of limited inventory.",
      "Authored HLD/LLD docs for Multi-Slot and Real-Time Picking features.",
    ],
    stack: ["Java", "Spring Boot", "SQL", "Kafka", "Kubernetes", "Jenkins", "Dynatrace", "Grafana"],
  },
  {
    slug: "order-fulfilment-service",
    title: "Real-Time Order Fulfilment & Allocation Engine",
    company: "Walmart",
    period: "2021 — 2024",
    category: "Microservices",
    icon: Workflow,
    accent: "from-violet-400 to-indigo-600",
    summary:
      "A real-time picking and inventory allocation engine that keeps stock accurate and shipping workflows optimized across many stores.",
    problem:
      "Limited inventory had to be distributed fairly across competing orders while keeping inventory accuracy high and shipping flows smooth — at distribution-center scale and with strict fault-tolerance requirements.",
    role: "Lead developer for the fulfilment & allocation services.",
    results: [
      "Improved inventory accuracy with real-time item picking.",
      "Equitable distribution of limited inventory via a pro-rata algorithm.",
      "Resilient, auto-recovering operations across integrated teams.",
    ],
    contributions: [
      "Implemented real-time item picking across multiple stores.",
      "Designed and deployed a pro-rata allocation algorithm based on picked quantity.",
      "Integrated auto-recovery mechanisms for fault-tolerant operation.",
    ],
    stack: ["Java", "Spring Boot", "Kafka", "SQL", "Kubernetes"],
  },
  {
    slug: "ott-iptv-media-platform",
    title: "OTT / IPTV Media Aggregation Platform",
    company: "Nagravision",
    period: "2019 — 2021",
    category: "Media & Streaming",
    icon: Boxes,
    accent: "from-pink-400 to-rose-600",
    featured: true,
    summary:
      "Content management and delivery systems for a large-scale OTT/IPTV platform, including the move from a monolith to microservices.",
    problem:
      "A growing streaming platform needed reliable large-scale XML ingestion, live/VOD content management and a more scalable architecture than its existing monolith could provide.",
    role: "Software Engineer on the content management & delivery team.",
    results: [
      "Delivered seamless live & VOD streaming experiences.",
      "Improved scalability and agility via a Media Aggregator microservice.",
      "Strengthened monitoring with proactive alerting pipelines.",
    ],
    contributions: [
      "Built robust services for large-scale XML data ingestion.",
      "Drove the monolith-to-microservices transition via the Media Aggregator Service.",
      "Created a polling service over AWS S3 and FTP/SFTP that parsed data and pushed alerts to emergency systems.",
      "Applied graph algorithms on Neo4j to find and aggregate content.",
    ],
    stack: ["Core Java", "Spring Boot", "JAX-RS", "Dropwizard", "Apache Camel", "Neo4j", "MongoDB", "RabbitMQ", "Docker"],
  },
  {
    slug: "content-graph-engine",
    title: "Content Discovery Graph Engine",
    company: "Nagravision",
    period: "2019 — 2021",
    category: "Data & Search",
    icon: Database,
    accent: "from-emerald-400 to-teal-600",
    summary:
      "A Neo4j-backed engine that models relationships between media assets to find and aggregate related content for recommendations.",
    problem:
      "Discovering and grouping related content across a vast media catalogue is hard with relational models — relationships between titles, genres and metadata are inherently graph-shaped.",
    role: "Engineer responsible for graph modelling and aggregation algorithms.",
    results: [
      "Faster, richer content discovery and aggregation.",
      "Reusable graph model for catalogue relationships.",
    ],
    contributions: [
      "Modelled the content catalogue as a property graph in Neo4j.",
      "Implemented graph traversal algorithms to find & aggregate content.",
      "Maintained high application performance and reliability.",
    ],
    stack: ["Neo4j", "Core Java", "Spring Boot", "Graph Algorithms"],
  },
  {
    slug: "python-data-extraction",
    title: "Python Data Extraction & Integration Testing Library",
    company: "Sasken Technologies",
    period: "2019",
    category: "Data & Search",
    icon: Cpu,
    accent: "from-sky-400 to-cyan-600",
    summary:
      "A Python data-extraction library and integration-testing frameworks that improved system efficiency and reliability.",
    problem:
      "Data integration across multiple services lacked a consistent extraction layer and robust automated validation, slowing delivery and risking regressions.",
    role: "Software Engineer building tooling and test infrastructure.",
    results: [
      "More efficient, reliable data integration.",
      "Robust validation across multiple components.",
    ],
    contributions: [
      "Designed a reusable Python data-extraction library.",
      "Built microservices testing with WireMock and JAX-RS REST services.",
      "Delivered business apps from requirements through deployment.",
    ],
    stack: ["Python", "Core Java", "Spring Boot", "WireMock", "JAX-RS", "JUnit", "Jenkins"],
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

/* -------------------------------------------------------------------------- */
/*  EXPERIENCE TIMELINE                                                        */
/* -------------------------------------------------------------------------- */

export type Experience = {
  role: string;
  company: string;
  location: string;
  period: string;
  description: string;
  highlights: string[];
};

export const experience: Experience[] = [
  {
    role: "Senior Software Engineer",
    company: "Ivanti India Development Center",
    location: "Bengaluru, India",
    period: "Jul 2024 — Present",
    description:
      "Lead back-end development for Ivanti's Apple device management team within the enterprise MDM platform (MobileIron) — macOS, iOS & iPadOS.",
    highlights: [
      "Architected the migration to Apple's Declarative Device Management (DDM).",
      "Built secure Spring Boot microservices for enrollment, config & compliance.",
      "Engineered PostgreSQL + Elasticsearch pipelines for device inventory & reporting.",
      "Delivered RESTful APIs and async workflows for DDM state publishing.",
    ],
  },
  {
    role: "Software Engineer 3",
    company: "Walmart",
    location: "Bengaluru, India",
    period: "Dec 2021 — Jul 2024",
    description:
      "Led end-to-end development of the One Atlas grocery distribution platform, scaling to 20M cases/day across Azure regions.",
    highlights: [
      "Cut order download & release time from 60+ min to under 7 min.",
      "Built a Central Configuration system (48h → instant).",
      "Onboarded 10 distribution centers; designed pro-rata allocation algorithm.",
      "Mentored junior engineers and authored HLD/LLD documentation.",
    ],
  },
  {
    role: "Software Engineer",
    company: "Nagravision",
    location: "Bengaluru, India",
    period: "Nov 2019 — Dec 2021",
    description:
      "Enhanced content management and delivery for a major OTT/IPTV platform and drove the move to microservices.",
    highlights: [
      "Built large-scale XML ingestion and live/VOD content services.",
      "Led the monolith → microservices transition (Media Aggregator Service).",
      "Created a polling/alerting service over AWS S3 and FTP/SFTP.",
      "Applied Neo4j graph algorithms for content discovery.",
    ],
  },
  {
    role: "Software Engineer",
    company: "Sasken Technologies",
    location: "Bengaluru, India",
    period: "Mar 2019 — Jul 2019",
    description:
      "Built a Python data-extraction library and integration-testing frameworks to improve efficiency and reliability.",
    highlights: [
      "Microservices testing with WireMock and JAX-RS REST services.",
      "Delivered business applications from requirements to deployment.",
    ],
  },
  {
    role: "Associate Software Engineer",
    company: "Harman International",
    location: "Bengaluru, India",
    period: "Aug 2017 — Mar 2019",
    description:
      "Enhanced Android audio frameworks and contributed to media/audio R&D in the Android open-source ecosystem.",
    highlights: [
      "Developed test apps to identify & resolve audio performance issues.",
      "Contributed to R&D for media & audio components.",
    ],
  },
  {
    role: "Intern",
    company: "Harman International",
    location: "Bengaluru, India",
    period: "Feb 2017 — Aug 2017",
    description:
      "Built test tooling and automotive signal simulation to validate systems.",
    highlights: [
      "Authored unit tests with JUnit, Mockito & PowerMockito.",
      "Integrated JaCoCo & Clover for code-coverage reporting.",
      "Developed CAN signal simulation tools for automotive testing.",
    ],
  },
];

/* -------------------------------------------------------------------------- */
/*  EDUCATION                                                                  */
/* -------------------------------------------------------------------------- */

export const education = [
  {
    degree: "B.Tech, Information Technology",
    school: "Sikkim Manipal Institute of Technology",
    year: "2016",
  },
];

/* -------------------------------------------------------------------------- */
/*  CONTACT FORM OPTIONS                                                       */
/* -------------------------------------------------------------------------- */

export const projectTypes = [
  "Full-time / Lead role",
  "Backend architecture",
  "Cloud & microservices",
  "Technical consulting",
  "Other",
];

export const budgets = [
  "Let's discuss",
  "< $5k",
  "$5k — $15k",
  "$15k — $50k",
  "$50k+",
];

/* -------------------------------------------------------------------------- */
/*  NAVIGATION                                                                 */
/* -------------------------------------------------------------------------- */

export const navLinks = [
  { label: "Home", id: "home", href: "/#home" },
  { label: "About", id: "about", href: "/#about" },
  { label: "Work", id: "work", href: "/#work" },
  { label: "Contact", id: "contact", href: "/#contact" },
];
