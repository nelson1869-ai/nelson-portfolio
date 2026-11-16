export interface PersonalInfo {
  name: string;
  title: string;
  heroTitle: string;
  heroTagline: string;
  location: string;
  email: string;
  phone: string;
  github: string;
  githubUsername: string;
  resumePath: string;
  resumeFileName: string;
  introduction: string[];
}

export interface SkillItem {
  name: string;
  level: string;
  category: "Frontend & Core" | "Full-Stack & Backend" | "Tools & Emerging Tech";
  description: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  liveUrl: string;
  githubUrl?: string;
  technologies: string[];
  image: string;
  imageAlt: string;
  highlights: string[];
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  type: string;
  responsibilities: string[];
}

export interface EducationItem {
  institution: string;
  abbreviation: string;
  degree: string;
  major: string;
  graduationDate: string;
  achievements: string[];
}

export interface NavLink {
  label: string;
  href: string;
}

export const navLinks: NavLink[] = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const personalInfo: PersonalInfo = {
  name: "Nelson Fernandez",
  title: "Aspiring Junior Full-Stack / Web Developer",
  heroTitle: "Junior Full-Stack / Web Developer",
  heroTagline:
    "Building modern web applications and continuously improving my development skills.",
  location: "Bacolod City, Negros Occidental, Philippines",
  email: "nf1869personal@gmail.com",
  phone: "09678512837",
  github: "https://github.com/nelson1869-ai",
  githubUsername: "nelson1869-ai",
  resumePath: "/files/Nelson-Fernandez-Resume.pdf",
  resumeFileName: "Nelson-Fernandez-Resume.pdf",
  introduction: [
    "I am a BSIT graduate majoring in Computer Technology. I have foundational knowledge of JavaScript, Python, HTML, CSS, and React. I am developing my full-stack development skills using Next.js and TypeScript through personal projects and independent learning.",
    "I have experience using Git and GitHub, building personal web applications, and exploring AI concepts, RAG, and workflow automation with n8n.",
    "My goal is to grow as a software developer and build practical, reliable, and user-friendly applications.",
  ],
};

export const skills: SkillItem[] = [
  {
    name: "JavaScript",
    level: "Basic",
    category: "Frontend & Core",
    description: "DOM manipulation, ES6+ syntax, asynchronous programming, and core web scripting.",
  },
  {
    name: "TypeScript",
    level: "Learning and applying",
    category: "Frontend & Core",
    description: "Static typing, interfaces, component props typing, and safer application logic.",
  },
  {
    name: "HTML",
    level: "Basic",
    category: "Frontend & Core",
    description: "Semantic markup, accessible document structure, and modern web forms.",
  },
  {
    name: "CSS",
    level: "Basic",
    category: "Frontend & Core",
    description: "Responsive layouts, Flexbox, CSS Grid, and dark/light theme styling.",
  },
  {
    name: "React",
    level: "Basic project experience",
    category: "Frontend & Core",
    description: "Component-based UI architecture, React hooks, state management, and interactive views.",
  },
  {
    name: "Tailwind CSS",
    level: "Project experience",
    category: "Frontend & Core",
    description: "Utility-first responsive design, custom design tokens, and consistent UI styling.",
  },
  {
    name: "Next.js",
    level: "Learning and applying",
    category: "Full-Stack & Backend",
    description: "App Router architecture, server and client components, routing, and SEO metadata.",
  },
  {
    name: "Supabase",
    level: "Project experience",
    category: "Full-Stack & Backend",
    description: "PostgreSQL database integration, authentication flows, and backend-as-a-service APIs.",
  },
  {
    name: "Python",
    level: "Basic",
    category: "Full-Stack & Backend",
    description: "Foundational scripting, problem-solving, data structures, and backend basics.",
  },
  {
    name: "Git and GitHub",
    level: "Hands-on project experience",
    category: "Tools & Emerging Tech",
    description: "Version control, repository management, branching, and collaborative code workflows.",
  },
  {
    name: "n8n",
    level: "Basic workflow automation",
    category: "Tools & Emerging Tech",
    description: "Node-based task automation, webhook integration, and connecting external services.",
  },
  {
    name: "AI and RAG",
    level: "Introductory knowledge",
    category: "Tools & Emerging Tech",
    description: "Exploring large language models, Retrieval-Augmented Generation concepts, and AI workflows.",
  },
];

export const projects: ProjectItem[] = [
  {
    id: "aetern",
    title: "AETERN",
    subtitle: "Civic Tech & Social Platform",
    description: "Social Network and Government Transparency Platform.",
    liveUrl: "https://aetern.pages.dev/",
    githubUrl: "https://github.com/nelson1869-ai/aetern",
    technologies: ["Web Application", "Frontend UI", "Civic Transparency", "Cloudflare Pages"],
    image: "/images/project-aetern.svg",
    imageAlt: "Preview illustration of AETERN Social Network and Government Transparency Platform",
    highlights: [
      "Community-oriented interface focused on public transparency and civic engagement",
      "Responsive layout structured for accessible information browsing across devices",
    ],
  },
  {
    id: "small-lending",
    title: "Small Lending System",
    subtitle: "Financial Management Web App",
    description: "An admin-focused lending application built as a personal project.",
    liveUrl: "https://small-lending.vercel.app/login",
    technologies: ["Next.js", "TypeScript", "Supabase"],
    image: "/images/project-lending.svg",
    imageAlt: "Preview illustration of Small Lending System admin dashboard",
    highlights: [
      "Authenticated administrative workflow powered by Supabase and Next.js",
      "Type-safe application structure using TypeScript for managing lending records",
    ],
  },
  {
    id: "jean-shop",
    title: "Jean Shop",
    subtitle: "Service Business Website",
    description:
      "A tailoring business website with a responsive frontend and service-focused interface.",
    liveUrl: "https://jean-shop.vercel.app/",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Responsive UI"],
    image: "/images/project-jeanshop.svg",
    imageAlt: "Preview illustration of Jean Shop tailoring business website",
    highlights: [
      "Clean, customer-friendly showcase for tailoring services and inquiries",
      "Mobile-first responsive design deployed on Vercel",
    ],
  },
];

export const experiences: ExperienceItem[] = [
  {
    company: "Suysing",
    role: "Warehouse Checker",
    period: "2020–Present",
    type: "Full-Time Operations",
    responsibilities: [
      "Check and verify items during daily warehouse operations.",
      "Follow workplace procedures.",
      "Maintain accuracy and reliability.",
    ],
  },
  {
    company: "Jega Bytes",
    role: "IT Support / OJT Trainee",
    period: "2018–2019",
    type: "On-the-Job Training",
    responsibilities: [
      "Desktop troubleshooting.",
      "Computer assembly and repair.",
      "Printer troubleshooting and support.",
      "CCTV installation assistance.",
    ],
  },
];

export const education: EducationItem = {
  institution: "Carlos Hilado Memorial State University",
  abbreviation: "CHMSU",
  degree: "Bachelor of Science in Information Technology (BSIT)",
  major: "Major in Computer Technology (ComTech)",
  graduationDate: "July 6, 2020",
  achievements: ["Dean's Lister — First Year, First Semester"],
};
