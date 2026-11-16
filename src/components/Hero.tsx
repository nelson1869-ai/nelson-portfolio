import {
  ArrowRight,
  FileDown,
  Layers,
  Mail,
  MapPin,
  Terminal,
} from "lucide-react";
import { personalInfo } from "@/data/portfolio";
import { GithubIcon } from "./GithubIcon";

export function Hero() {
  return (
    <section
      id="top"
      aria-label="Introduction"
      className="relative overflow-hidden border-b border-[var(--border-subtle)] py-16 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          {/* Primary Hero Copy */}
          <div className="animate-fade-in-up lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-[var(--border-subtle)] bg-[var(--bg-surface)] px-3.5 py-1.5 text-xs font-medium text-[var(--text-secondary)]">
              <span className="h-2 w-2 rounded-full bg-emerald-500" aria-hidden="true" />
              <span>Open to Junior Full-Stack, Frontend &amp; Entry-Level Web Roles</span>
            </div>

            <h1 className="mt-6 text-3xl font-extrabold tracking-tight text-[var(--text-primary)] sm:text-5xl lg:text-[3.25rem] lg:leading-[1.15]">
              Hi, I&apos;m {personalInfo.name}.
            </h1>

            <p className="mt-3 text-xl font-semibold text-[var(--accent-text)] sm:text-2xl">
              {personalInfo.heroTitle}
            </p>

            <p className="mt-4 max-w-2xl text-base leading-relaxed text-[var(--text-secondary)] sm:text-lg">
              {personalInfo.heroTagline}
            </p>

            <div className="mt-5 flex flex-wrap items-center gap-y-2 gap-x-5 text-sm text-[var(--text-muted)]">
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="h-4 w-4 text-[var(--accent-text)]" aria-hidden="true" />
                {personalInfo.location}
              </span>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-medium text-[var(--text-secondary)] transition-colors hover:text-[var(--accent-text)]"
              >
                <GithubIcon className="h-4 w-4" />
                github.com/{personalInfo.githubUsername}
              </a>
            </div>

            {/* Required CTA Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-3.5">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-lg bg-[var(--accent-primary)] px-5 py-3 text-sm font-semibold text-white shadow-xs transition-colors hover:bg-[var(--accent-hover)] dark:text-slate-950"
              >
                <span>View My Projects</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-lg border border-[var(--border-strong)] bg-[var(--bg-surface)] px-5 py-3 text-sm font-semibold text-[var(--text-primary)] transition-colors hover:bg-[var(--bg-elevated)]"
              >
                <Mail className="h-4 w-4 text-[var(--accent-text)]" aria-hidden="true" />
                <span>Contact Me</span>
              </a>

              <a
                href="#resume"
                className="inline-flex items-center gap-2 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-elevated)] px-4 py-3 text-sm font-medium text-[var(--text-secondary)] transition-colors hover:border-[var(--border-strong)] hover:text-[var(--text-primary)]"
              >
                <FileDown className="h-4 w-4 text-[var(--accent-text)]" aria-hidden="true" />
                <span>Download My Resume</span>
              </a>
            </div>
          </div>

          {/* Right Column: Developer Snapshot Card */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] p-6 shadow-xs">
              <div className="flex items-center justify-between border-b border-[var(--border-subtle)] pb-4">
                <div className="flex items-center gap-2">
                  <Terminal className="h-4 w-4 text-[var(--accent-text)]" aria-hidden="true" />
                  <span className="font-mono text-xs font-semibold text-[var(--text-primary)]">
                    developer-profile.ts
                  </span>
                </div>
                <span className="rounded-md bg-[var(--accent-soft)] px-2 py-0.5 font-mono text-[11px] font-medium text-[var(--accent-text)]">
                  BSIT • ComTech
                </span>
              </div>

              <dl className="mt-5 space-y-4 text-sm">
                <div>
                  <dt className="font-mono text-xs text-[var(--text-muted)] uppercase">
                    Role Focus
                  </dt>
                  <dd className="mt-1 font-medium text-[var(--text-primary)]">
                    {personalInfo.title}
                  </dd>
                </div>

                <div>
                  <dt className="font-mono text-xs text-[var(--text-muted)] uppercase">
                    Current Stack Focus
                  </dt>
                  <dd className="mt-1.5 flex flex-wrap gap-1.5">
                    {["Next.js", "TypeScript", "React", "Tailwind CSS", "Supabase", "JavaScript"].map(
                      (tech) => (
                        <span
                          key={tech}
                          className="rounded-md border border-[var(--border-subtle)] bg-[var(--bg-elevated)] px-2.5 py-1 font-mono text-xs text-[var(--text-secondary)]"
                        >
                          {tech}
                        </span>
                      )
                    )}
                  </dd>
                </div>

                <div>
                  <dt className="font-mono text-xs text-[var(--text-muted)] uppercase">
                    Additional Exploration
                  </dt>
                  <dd className="mt-1 text-[var(--text-secondary)]">
                    Python, Git &amp; GitHub workflows, n8n automation, and introductory AI / RAG concepts.
                  </dd>
                </div>

                <div className="pt-2">
                  <div className="flex items-center gap-2.5 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-elevated)] p-3.5">
                    <Layers className="h-5 w-5 shrink-0 text-[var(--accent-text)]" aria-hidden="true" />
                    <p className="text-xs leading-relaxed text-[var(--text-secondary)]">
                      Committed to writing clean, maintainable code and growing within collaborative engineering teams.
                    </p>
                  </div>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
