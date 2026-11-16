import { ArrowUp, Code2, ExternalLink, Mail, MapPin } from "lucide-react";
import { navLinks, personalInfo } from "@/data/portfolio";
import { GithubIcon } from "./GithubIcon";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--border-subtle)] bg-[var(--bg-surface)]">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
          {/* Brand & Summary */}
          <div className="md:col-span-5">
            <a
              href="#top"
              className="inline-flex items-center gap-2.5 text-base font-bold text-[var(--text-primary)]"
            >
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[var(--accent-primary)] text-white dark:text-slate-950">
                <Code2 className="h-4 w-4" aria-hidden="true" />
              </span>
              <span>{personalInfo.name}</span>
            </a>

            <p className="mt-3 max-w-sm text-sm leading-relaxed text-[var(--text-muted)]">
              {personalInfo.title} based in {personalInfo.location}. Building practical, reliable, and user-friendly web applications.
            </p>
          </div>

          {/* Quick Navigation */}
          <div className="md:col-span-4">
            <h2 className="font-mono text-xs font-semibold tracking-wider text-[var(--text-primary)] uppercase">
              Sections
            </h2>
            <ul className="mt-3 grid grid-cols-2 gap-2 text-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-[var(--text-muted)] transition-colors hover:text-[var(--accent-text)]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Links */}
          <div className="md:col-span-3">
            <h2 className="font-mono text-xs font-semibold tracking-wider text-[var(--text-primary)] uppercase">
              Connect
            </h2>
            <ul className="mt-3 space-y-2.5 text-sm">
              <li>
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[var(--text-secondary)] transition-colors hover:text-[var(--accent-text)]"
                >
                  <GithubIcon className="h-4 w-4" />
                  <span>GitHub ({personalInfo.githubUsername})</span>
                  <ExternalLink className="h-3 w-3 opacity-75" aria-hidden="true" />
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="inline-flex items-center gap-2 break-all text-[var(--text-secondary)] transition-colors hover:text-[var(--accent-text)]"
                >
                  <Mail className="h-4 w-4 shrink-0" aria-hidden="true" />
                  <span>{personalInfo.email}</span>
                </a>
              </li>
              <li className="inline-flex items-center gap-2 text-[var(--text-muted)]">
                <MapPin className="h-4 w-4 shrink-0" aria-hidden="true" />
                <span>Bacolod City, Philippines</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-[var(--border-subtle)] pt-6 text-xs text-[var(--text-muted)] sm:flex-row">
          <p>
            &copy; {currentYear} {personalInfo.name}. Built with Next.js, TypeScript, and Tailwind CSS.
          </p>

          <a
            href="#top"
            className="inline-flex items-center gap-1.5 font-medium text-[var(--text-secondary)] transition-colors hover:text-[var(--accent-text)]"
          >
            <span>Back to top</span>
            <ArrowUp className="h-3.5 w-3.5" aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
}
