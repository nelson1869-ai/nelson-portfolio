import { ArrowRight, FileDown, Mail } from "lucide-react";
import { personalInfo, stats } from "@/data/portfolio";
import { GithubIcon } from "./GithubIcon";

export function Hero() {
  return (
    <section id="top" aria-label="Introduction" className="py-16 sm:py-24">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
        {/* Left: who I am */}
        <div className="animate-fade-in-up lg:col-span-8">
          <p className="inline-flex items-center gap-2 text-sm text-(--text-muted)">
            <span className="h-2 w-2 rounded-full bg-emerald-500" aria-hidden="true" />
            Open to entry-level &amp; junior roles · Bacolod City, PH
          </p>

          <h1 className="mt-5 text-4xl font-semibold tracking-tight text-balance text-(--text-primary) sm:text-6xl">
            {personalInfo.name}
          </h1>
          {/* whitespace-nowrap keeps each part on one line on small phones */}
          <p className="mt-4 flex flex-wrap items-baseline gap-x-3 gap-y-1 text-lg font-medium sm:text-xl">
            <span className="whitespace-nowrap text-(--text-primary)">{personalInfo.role}</span>
            <span className="hidden text-(--border-strong) sm:inline" aria-hidden="true">
              |
            </span>
            <span className="whitespace-nowrap text-(--accent-text)">{personalInfo.goal}</span>
          </p>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-(--text-secondary) sm:text-lg">
            {personalInfo.intro}
          </p>

          <div className="mt-5 text-sm">
            <p className="font-medium text-(--text-secondary)">Interested in</p>
            <ul className="mt-2 flex flex-wrap gap-2">
              {personalInfo.interests.map((interest) => (
                <li
                  key={interest}
                  className="rounded-full border border-(--border-subtle) px-3 py-1 whitespace-nowrap text-(--text-muted)"
                >
                  {interest}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="inline-flex h-11 flex-1 items-center justify-center gap-2 sm:flex-none rounded-md bg-(--accent-primary) px-5 text-sm font-semibold text-(--on-accent) transition-colors hover:bg-(--accent-hover)"
            >
              View projects
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href={personalInfo.resumePath}
              download={personalInfo.resumeFileName}
              className="inline-flex h-11 flex-1 items-center justify-center gap-2 rounded-md border border-(--border-strong) px-5 whitespace-nowrap sm:flex-none text-sm font-semibold text-(--text-primary) transition-colors hover:bg-(--bg-elevated)"
            >
              <FileDown className="h-4 w-4" aria-hidden="true" />
              Download resume
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile (opens in a new tab)"
              className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-(--border-subtle) text-(--text-secondary) transition-colors hover:text-(--text-primary)"
            >
              <GithubIcon className="h-5 w-5" />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              aria-label={`Email ${personalInfo.email}`}
              className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-(--border-subtle) text-(--text-secondary) transition-colors hover:text-(--text-primary)"
            >
              <Mail className="h-5 w-5" aria-hidden="true" />
            </a>
          </div>
        </div>

        {/* Right: real numbers from the projects */}
        <dl className="grid grid-cols-3 gap-4 self-end border-t border-(--border-subtle) pt-6 lg:col-span-4 lg:grid-cols-1 lg:gap-6 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-8">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col-reverse">
              <dt className="mt-1 text-xs text-(--text-muted) sm:text-sm">{stat.label}</dt>
              <dd className="text-3xl font-semibold tracking-tight text-(--text-primary) sm:text-4xl">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
