import type { Metadata, Viewport } from "next";
import { personalInfo } from "@/data/portfolio";
import { siteUrl } from "@/lib/site";
import "./globals.css";

const siteTitle = `${personalInfo.name} | ${personalInfo.heroTitle}`;
const siteDescription =
  "Nelson E. Fernandez is an entry-level full-stack web developer in Bacolod City, Philippines, building and deploying web apps with Next.js, TypeScript, React, and PostgreSQL.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  // Canonical URL: tells Google this is the one "real" address of the page.
  alternates: { canonical: "/" },
  title: {
    default: siteTitle,
    template: `%s | ${personalInfo.name}`,
  },
  description: siteDescription,
  keywords: [
    "Nelson Fernandez",
    "Nelson E. Fernandez",
    "Entry-Level Full-Stack Developer",
    "Junior Full-Stack Developer",
    "Junior Frontend Developer",
    "Entry-Level Web Developer",
    "Next.js Developer Philippines",
    "React TypeScript Portfolio",
    "Bacolod City Web Developer",
  ],
  authors: [{ name: personalInfo.name, url: personalInfo.github }],
  creator: personalInfo.name,
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    type: "profile",
    url: "/",
    locale: "en_PH",
    siteName: `${personalInfo.name} Portfolio`,
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f8fafc" },
    { media: "(prefers-color-scheme: dark)", color: "#090d16" },
  ],
};

const themeInitScript = `
(function() {
  try {
    var saved = localStorage.getItem('nelson-portfolio-theme');
    if (saved === 'light') {
      document.documentElement.classList.remove('dark');
    } else if (saved === 'dark') {
      document.documentElement.classList.add('dark');
    } else if (window.matchMedia('(prefers-color-scheme: light)').matches) {
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
    }
  } catch (e) {
    document.documentElement.classList.add('dark');
  }
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className="dark h-full antialiased"
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="flex min-h-full flex-col">
        <a
          href="#main-content"
          className="sr-only rounded-lg bg-[var(--accent-primary)] px-4 py-2.5 text-sm font-semibold text-white focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 dark:text-slate-950"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
