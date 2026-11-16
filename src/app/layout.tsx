import type { Metadata, Viewport } from "next";
import { personalInfo } from "@/data/portfolio";
import "./globals.css";

const siteTitle = `${personalInfo.name} | ${personalInfo.heroTitle}`;
const siteDescription =
  "Personal developer portfolio of Nelson Fernandez, an Aspiring Junior Full-Stack / Web Developer based in Bacolod City, Philippines. Building web applications with Next.js, TypeScript, React, Tailwind CSS, and Supabase.";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://nelson-portfolio.vercel.app"
  ),
  title: {
    default: siteTitle,
    template: `%s | ${personalInfo.name}`,
  },
  description: siteDescription,
  keywords: [
    "Nelson Fernandez",
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
    type: "website",
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
