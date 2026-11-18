import type { Metadata, Viewport } from "next";
import { Fraunces, Inter, JetBrains_Mono } from "next/font/google";
import { personalInfo } from "@/data/portfolio";
import { siteUrl } from "@/lib/site";
import "./globals.css";

// next/font downloads the fonts at build time and serves them from this site
// (no request to Google from the visitor's browser).
const inter = Inter({ subsets: ["latin"], display: "swap", variable: "--font-inter" });
// Serif display font, used only for the big name in the hero.
const fraunces = Fraunces({
  subsets: ["latin"],
  display: "swap",
  weight: ["600"],
  variable: "--font-fraunces",
});
const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains",
});

const siteTitle = `${personalInfo.name} | ${personalInfo.role}`;
const siteDescription =
  "Nelson E. Fernandez is an entry-level web developer in Bacolod City, Philippines, focused on Next.js and TypeScript. See his deployed projects, skills, and resume.";

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
    { media: "(prefers-color-scheme: light)", color: "#fafafa" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0d14" },
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
      className={`dark h-full antialiased ${inter.variable} ${jetbrains.variable} ${fraunces.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="flex min-h-full flex-col">
        <a
          href="#main-content"
          className="sr-only rounded-lg bg-(--accent-primary) px-4 py-2.5 text-sm font-semibold text-(--on-accent) focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
