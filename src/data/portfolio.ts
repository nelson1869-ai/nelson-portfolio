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
  technologies: string[];
  liveUrl: string;
  githubUrl?: string; // left out when the repository is private
  image: string;
  imageAlt: string;
}

export interface SkillGroup {
  name: string;
  skills: string[];
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

export const navLinks: NavLink[] = [
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export const personalInfo: PersonalInfo = {
  name: "Nelson E. Fernandez",
  role: "Entry-Level Web Developer",
  goal: "Aspiring Junior Full-Stack Developer",
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
  github: "https://github.com/nelson1869-ai",
  githubUsername: "nelson1869-ai",
  resumePath: "/files/Nelson-Fernandez-Resume.pdf",
  resumeFileName: "Nelson-Fernandez-Resume.pdf",
  about: [
    "I'm a BS Industrial Technology graduate, major in Computer Technology, from Carlos Hilado Memorial State University. Before moving into software, I did IT support work: troubleshooting desktops and printers, assembling and repairing computers, and helping install CCTV.",
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
    status: "Live testnet · learning project",
    description:
      "A blockchain built from scratch to learn how one works: Proof-of-Stake with VRF validator selection (no mining), a multi-node test network, a block explorer, and a wallet app.",
    highlights: [
      "400+ automated tests and a written threat model",
      "Built in 80+ small phases, including a planned hard fork on the running testnet",
    ],
    technologies: ["Next.js", "TypeScript", "Node.js", "WebSocket", "Vitest"],
    liveUrl: "https://nel-chain.vercel.app/",
    image: "/images/projects/nel-chain.webp",
    imageAlt: "Screenshot of the nel-chain web app",
  },
  {
    id: "aetern",
    title: "AETERN",
    subtitle: "Privacy-first social network prototype",
    status: "Live prototype · public test",
    description:
      "A local-first social network where every post is signed with the user's own key and data stays on the user's devices. It has identity recovery, feeds, groups, messages, and a WebSocket relay.",
    highlights: [
      "Architecture decisions and known security limits are documented in the repo",
      "End-to-end tests with Playwright",
    ],
    technologies: ["Next.js", "TypeScript", "Node.js", "WebSocket", "Playwright"],
    liveUrl: "https://aetern.pages.dev/",
    githubUrl: "https://github.com/nelson1869-ai/aetern",
    image: "/images/projects/aetern.webp",
    imageAlt: "Screenshot of the AETERN feed and device setup screen",
  },
  {
    id: "small-lending",
    title: "Small Lending System",
    subtitle: "Lending management web app",
    status: "Live · login required",
    description:
      "An app for tracking borrowers, loans, and payments, with separate areas for the admin and for borrowers.",
    highlights: [
      "Google sign-in, borrower approval, and role-based access",
      "Activity history and search; input validated with Zod",
    ],
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Drizzle ORM", "Zod"],
    liveUrl: "https://small-lending.vercel.app/login",
    image: "/images/projects/small-lending.webp",
    imageAlt: "Screenshot of the Small Lending System login page",
  },
  {
    id: "jean-shop",
    title: "Jean Shop",
    subtitle: "Tailoring shop website with admin",
    status: "Live · in development",
    description:
      "A website for a tailoring shop in Bacolod City with service pages and an inquiry form, plus an owner-only admin panel.",
    highlights: [
      "Admin tools for customers, measurements, orders, payments, and expenses",
      "Supabase for the database and owner sign-in",
    ],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase"],
    liveUrl: "https://jean-shop.vercel.app/",
    image: "/images/projects/jean-shop.webp",
    imageAlt: "Screenshot of the Jean Shop home page",
  },
];

// Only tools used in the projects above.
export const skillGroups: SkillGroup[] = [
  {
    name: "Frontend",
    skills: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS", "Technical SEO"],
  },
  {
    name: "Backend",
    skills: ["Node.js", "REST API development", "Authentication", "Zod validation", "WebSocket"],
  },
  {
    name: "Database",
    skills: ["PostgreSQL", "Supabase", "Drizzle ORM"],
  },
  {
    name: "Tools & Testing",
    skills: ["Git", "GitHub", "pnpm", "VS Code", "Vitest", "Playwright", "Vercel", "Cloudflare Pages"],
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
