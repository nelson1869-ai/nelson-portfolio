// All the content of the site lives here, so text changes never touch the components.
// Rule: only real facts (checked against the project code and git history).

export interface NavLink {
  label: string;
  href: string;
}

export interface PersonalInfo {
  name: string;
  role: string; // main title
  goal: string; // second line under the title
  intro: string;
  interests: string[];
  location: string;
  email: string;
  phone: string; // shown as written; telHref is the dialable version
  telHref: string;
  github: string;
  githubUsername: string;
  resumePath: string;
  resumeFileName: string;
  about: string[];
}

export interface Stat {
  value: string;
  label: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  status: string;
  description: string;
  highlights: string[];
  howItsBuilt: string[];
  technologies: string[];
  liveUrl: string;
  githubUrl?: string; // left out when the repository is private
  image: string;
}

// Honest proficiency levels (shown with a legend on the page).
export type SkillLevel = "Project experience" | "Learning & applying" | "Basic";

export interface Skill {
  name: string;
  level: SkillLevel;
}

export interface SkillGroup {
  name: string;
  skills: Skill[];
}

export interface TimelineItem {
  title: string;
  place: string;
  period: string;
  points: string[];
}

export interface Education {
  school: string;
  degree: string;
  major: string;
  graduated: string;
  honors: string[];
}

// Date the site content last changed (used by sitemap.xml). Update it with real edits.
export const contentUpdated = "2026-11-17";

export const navLinks: NavLink[] = [
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const personalInfo: PersonalInfo = {
  name: "Nelson E. Fernandez",
  role: "Entry-Level Web Developer",
  goal: "Next.js & TypeScript",
  intro:
    "I build and deploy web applications with Next.js, TypeScript, and PostgreSQL. I'm looking for my first developer role, where I can keep learning and contribute to a team.",
  interests: [
    "Full-stack web apps",
    "Authentication & security basics",
    "Automated testing",
    "Blockchain fundamentals",
  ],
  location: "Bacolod City, Negros Occidental, Philippines",
  email: "nf1869personal@gmail.com",
  phone: "+63 967 851 2837",
  telHref: "tel:+639678512837",
  github: "https://github.com/nelson1869-ai",
  githubUsername: "nelson1869-ai",
  resumePath: "/files/Nelson-Fernandez-Resume.pdf",
  resumeFileName: "Nelson-Fernandez-Resume.pdf",
  about: [
    "I'm a BS Industrial Technology graduate, major in Computer Technology, from Carlos Hilado Memorial State University. My first hands-on IT work was an OJT in IT support: troubleshooting desktops and printers, assembling and repairing computers, and helping install CCTV.",
    "I work full-time as a warehouse checker, and I use my own time to learn web development by building real projects. In 2026 I built and deployed four web apps, including a Proof-of-Stake learning blockchain and a lending system. I learn from official documentation, write tests, and improve each project in small steps.",
    "My goal is to join a team as an entry-level or junior developer, grow into a full-stack role, and build software that is reliable and easy to use.",
  ],
};

// Real numbers from my projects (update when they change).
export const stats: Stat[] = [
  { value: "4", label: "live web apps" },
  { value: "400+", label: "automated tests in nel-chain" },
  { value: "500+", label: "commits across these projects" },
];

export const projects: Project[] = [
  {
    id: "nel-chain",
    title: "nel-chain",
    subtitle: "Proof-of-Stake learning blockchain",
    status: "Live · learning project, coins have no real value",
    description:
      "A blockchain I built from scratch to understand how one works. Validators are chosen by Proof-of-Stake with a VRF instead of mining, and the web app includes a block explorer, a wallet, and lessons.",
    highlights: [
      "400+ automated tests and a written threat model",
      "Built in 80+ small phases, including a planned hard fork on the running testnet",
    ],
    howItsBuilt: [
      "Nodes are Node.js processes that share blocks and votes over WebSockets; a local network runs 4 nodes.",
      "Signatures and hashes use the audited @noble cryptography libraries; every signature includes a chain ID so transactions cannot be replayed on another network.",
      "Three network settings: a fast local lab, a real-time testnet, and a mainnet that is only a draft.",
    ],
    technologies: ["Next.js", "TypeScript", "Node.js", "WebSocket", "Vitest"],
    liveUrl: "https://nel-chain.vercel.app/",
    image: "/images/projects/nel-chain.webp",
  },
  {
    id: "aetern",
    title: "AETERN",
    subtitle: "Privacy-first social network prototype",
    status: "Live · early prototype, not yet secure for real use",
    description:
      "A local-first social network experiment: each post is signed with the user's own key and data is kept on the user's device. It has identity recovery, a feed, groups, and messages.",
    highlights: [
      "Architecture decisions and known security limits are documented in the repo",
      "Unit tests with Node's built-in test runner and end-to-end tests with Playwright",
    ],
    howItsBuilt: [
      "The app is a static Next.js export on Cloudflare Pages. Posts are stored in the browser (IndexedDB) and synced through Node.js WebSocket relays; the public test uses one self-hosted relay.",
      "Identity is a key pair restored from a 24-word recovery phrase (BIP39), so there is no password or server account.",
      "The README states plainly that the prototype is not yet decentralized, private, or secure.",
    ],
    technologies: ["Next.js", "TypeScript", "Node.js", "WebSocket", "IndexedDB", "Playwright"],
    liveUrl: "https://aetern.pages.dev/",
    githubUrl: "https://github.com/nelson1869-ai/aetern",
    image: "/images/projects/aetern.webp",
  },
  {
    id: "small-lending",
    title: "Small Lending System",
    subtitle: "Lending management web app",
    status: "Live · login required",
    description:
      "A web app for a small lender to track borrowers, loans, and payments, with separate areas for the admin and for borrowers.",
    highlights: [
      "Google sign-in, borrower approval, and role-based access",
      "Activity history and search; input validated with Zod",
    ],
    howItsBuilt: [
      "Next.js App Router talks to a PostgreSQL database (Neon) through Drizzle ORM.",
      "Zod checks every form input on the server before it reaches the database.",
      "Users sign in with Google; new borrowers wait on a holding page until the admin approves them.",
      "A GitHub Actions job backs up the production database every day.",
    ],
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Drizzle ORM", "Zod"],
    liveUrl: "https://small-lending.vercel.app/login",
    image: "/images/projects/small-lending.webp",
  },
  {
    id: "jean-shop",
    title: "Jean Shop",
    subtitle: "Tailoring shop website with admin",
    status: "Live preview · waiting for the shop's real details",
    description:
      "A website for a tailoring shop in Bacolod City with service pages and an inquiry form, plus an owner-only admin panel.",
    highlights: [
      "Admin tools for customers, measurements, orders, payments, and expenses",
      "Supabase for the database and owner sign-in",
    ],
    howItsBuilt: [
      "Next.js with Supabase (PostgreSQL + Auth) through @supabase/ssr; the admin pages require the owner's login.",
      "Form input is validated with Zod on the server.",
      "Hidden from search engines (noindex) until the owner's real business details are added.",
    ],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase"],
    liveUrl: "https://jean-shop.vercel.app/",
    image: "/images/projects/jean-shop.webp",
  },
];

// Levels: "Project experience" = used in a shipped project; "Learning & applying" =
// used, still learning; "Basic" = foundations only. Keep these honest.
export const skillGroups: SkillGroup[] = [
  {
    name: "Frontend",
    skills: [
      { name: "HTML", level: "Project experience" },
      { name: "CSS", level: "Project experience" },
      { name: "JavaScript", level: "Learning & applying" },
      { name: "TypeScript", level: "Learning & applying" },
      { name: "React", level: "Project experience" },
      { name: "Next.js", level: "Learning & applying" },
      { name: "Tailwind CSS", level: "Project experience" },
      { name: "Technical SEO", level: "Project experience" },
    ],
  },
  {
    name: "Backend",
    skills: [
      { name: "Node.js", level: "Learning & applying" },
      { name: "API development", level: "Learning & applying" },
      { name: "Authentication", level: "Learning & applying" },
      { name: "Zod validation", level: "Project experience" },
      { name: "WebSocket", level: "Learning & applying" },
    ],
  },
  {
    name: "Database",
    skills: [
      { name: "PostgreSQL", level: "Project experience" },
      { name: "Supabase", level: "Project experience" },
      { name: "Drizzle ORM", level: "Project experience" },
    ],
  },
  {
    name: "Tools & Testing",
    skills: [
      { name: "Git & GitHub", level: "Project experience" },
      { name: "pnpm", level: "Project experience" },
      { name: "VS Code", level: "Project experience" },
      { name: "Vitest", level: "Learning & applying" },
      { name: "Playwright", level: "Learning & applying" },
      { name: "Vercel & Cloudflare Pages", level: "Project experience" },
    ],
  },
  {
    name: "Also exploring",
    skills: [
      { name: "Python", level: "Basic" },
      { name: "n8n workflow automation", level: "Basic" },
      { name: "AI & RAG concepts", level: "Basic" },
    ],
  },
];

export const experience: TimelineItem[] = [
  {
    title: "Independent Web Development Projects",
    place: "Self-directed",
    period: "2026 – Present",
    points: [
      "Built and deployed the four web apps shown in Projects using Next.js, TypeScript, PostgreSQL, and Supabase.",
      "Practiced authentication, role-based access, database design, and automated testing with Vitest and Playwright.",
      "Managed code with Git and GitHub and deployed to Vercel and Cloudflare Pages.",
    ],
  },
  {
    title: "Warehouse Checker",
    place: "Suysing",
    period: "2020 – Present",
    points: [
      "Check and verify items against records during daily warehouse operations.",
      "Follow workplace procedures.",
      "Maintain accuracy and reliability.",
    ],
  },
  {
    title: "IT Support / OJT Trainee",
    place: "Jega Bytes, Bacolod City",
    period: "2018 – 2019",
    points: [
      "Desktop troubleshooting.",
      "Computer assembly and repair.",
      "Printer troubleshooting and support.",
      "CCTV installation assistance.",
    ],
  },
];

export const education: Education = {
  school: "Carlos Hilado Memorial State University (CHMSU)",
  degree: "Bachelor of Science in Industrial Technology (BSIT)",
  major: "Major in Computer Technology",
  graduated: "July 2020",
  honors: ["Dean's Lister — First Year, First Semester"],
};
