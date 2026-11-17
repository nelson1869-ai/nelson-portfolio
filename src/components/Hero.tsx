import { ArrowRight, ArrowUpRight, FileDown, Mail, MapPin } from "lucide-react";
import { heroStack, heroStats, personalInfo, projects } from "@/data/portfolio";
import { GithubIcon } from "./GithubIcon";

// One shared style for every bento tile, so all boxes look the same.
const tile =
  "rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] p-6";

export function Hero() {
  // The first project in the data is the featured one (nel-chain).
  const featured = projects[0];

  return (
    <section
      id="top"
      aria-label="Introduction"
      className="border-b border-[var(--border-subtle)] py-12 sm:py-16"
    >
      {/* Bento grid: 1 column on phones, 4 columns on large screens */}
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-4 px-4 sm:px-6 lg:grid-cols-4 lg:px-8">
        {/* 1. Intro tile (big: 2 columns x 2 rows) */}
        <div className={`${tile} animate-fade-in-up flex flex-col justify-between lg:col-span-2 lg:row-span-2 sm:p-8`}>
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-[var(--border-subtle)] bg-[var(--bg-elevated)] px-3 py-1 text-xs font-medium text-[var(--text-secondary)]">
              <span className="h-2 w-2 rounded-full bg-emerald-500" aria-hidden="true" />
              Open to entry-level &amp; junior web roles
            </p>

            <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-[var(--text-primary)] sm:text-5xl">
              {personalInfo.name}
            </h1>
            <p className="mt-2 text-lg font-semibold text-[var(--accent-text)] sm:text-xl">
              {personalInfo.heroTitle}
            </p>
            <p className="mt-4 max-w-xl leading-relaxed text-[var(--text-secondary)]">
              {personalInfo.heroTagline}
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-lg bg-[var(--accent-primary)] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[var(--accent-hover)] dark:text-slate-950"
            >
              View Projects
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href={personalInfo.resumePath}
              download={personalInfo.resumeFileName}
              className="inline-flex items-center gap-2 rounded-lg border border-[var(--border-strong)] px-5 py-3 text-sm font-semibold text-[var(--text-primary)] transition-colors hover:bg-[var(--bg-elevated)]"
            >
              <FileDown className="h-4 w-4 text-[var(--accent-text)]" aria-hidden="true" />
              Resume (PDF)
            </a>
          </div>
        </div>

        {/* 2. Featured project tile (2 columns wide) */}
        <a
          href={featured.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`${tile} group transition-colors hover:border-[var(--accent-primary)] lg:col-span-2`}
        >
          <div className="flex items-center justify-between">
            <span className="font-mono text-xs uppercase text-[var(--text-muted)]">
              Featured project
            </span>
            <ArrowUpRight
              className="h-5 w-5 text-[var(--text-muted)] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[var(--accent-text)]"
              aria-hidden="true"
            />
          </div>
          <h2 className="mt-3 text-2xl font-bold text-[var(--text-primary)]">
            {featured.title}
          </h2>
          <p className="text-sm font-medium text-[var(--accent-text)]">{featured.subtitle}</p>
          <p className="mt-3 text-sm leading-relaxed text-[var(--text-secondary)]">
            {featured.description}
          </p>
        </a>

        {/* 3. Stat tiles: one small tile per number */}
        <div className="grid grid-cols-3 gap-4 lg:col-span-2">
          {heroStats.map((stat) => (
            <div key={stat.label} className={`${tile} text-center`}>
              <p className="text-3xl font-extrabold text-[var(--text-primary)]">{stat.value}</p>
              <p className="mt-1 text-xs text-[var(--text-muted)]">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* 4. Tech stack tile (2 columns wide) */}
        <div className={`${tile} lg:col-span-2`}>
          <p className="font-mono text-xs uppercase text-[var(--text-muted)]">Main stack</p>
          <ul className="mt-3 flex flex-wrap gap-2">
            {heroStack.map((tech) => (
              <li
                key={tech}
                className="rounded-md border border-[var(--border-subtle)] bg-[var(--bg-elevated)] px-2.5 py-1 font-mono text-xs text-[var(--text-secondary)]"
              >
                {tech}
              </li>
            ))}
          </ul>
        </div>

        {/* 5. Location tile */}
        <div className={tile}>
          <MapPin className="h-5 w-5 text-[var(--accent-text)]" aria-hidden="true" />
          <p className="mt-3 text-sm font-semibold text-[var(--text-primary)]">Bacolod City</p>
          <p className="text-xs text-[var(--text-muted)]">Negros Occidental, Philippines</p>
        </div>

        {/* 6. Contact tile: GitHub + email */}
        <div className={`${tile} flex flex-col justify-center gap-3`}>
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--accent-text)]"
          >
            <GithubIcon className="h-4 w-4" />
            GitHub
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--accent-text)]"
          >
            <Mail className="h-4 w-4" aria-hidden="true" />
            Contact me
          </a>
        </div>
      </div>
    </section>
  );
}
