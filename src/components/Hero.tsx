import { ArrowRight, Mail } from "lucide-react";
import { personalInfo, stats } from "@/data/portfolio";
import { GithubIcon } from "./GithubIcon";
import { LinkedinIcon } from "./LinkedinIcon";

// Split "Nelson E. Fernandez" into "Nelson E." and "Fernandez" for the two-line name.
const lastSpace = personalInfo.name.lastIndexOf(" ");
const firstName = personalInfo.name.slice(0, lastSpace);
const lastName = personalInfo.name.slice(lastSpace + 1);

export function Hero() {
  return (
    <section id="top" aria-label="Introduction" className="py-16 sm:py-24">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
        {/* Left: who I am */}
        <div className="animate-fade-in-up lg:col-span-8">
          {/* Eyebrow: small, uppercase, widely spaced line above the name */}
          <p className="text-xs font-semibold tracking-[0.2em] text-(--accent-text) uppercase sm:text-sm">
            {personalInfo.role} · {personalInfo.goal}
          </p>

          {/* Serif name on two lines; the last name uses the accent color */}
          <h1 className="mt-4 font-serif text-5xl leading-[1.05] font-semibold tracking-tight sm:text-7xl">
            <span className="block text-(--text-primary)">{firstName}</span>
            <span className="block text-(--accent-text)">{lastName}</span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-(--text-secondary) sm:text-lg">
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

          {/* Pill buttons: one filled, one outlined, plus round icon links */}
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="inline-flex h-12 flex-1 items-center justify-center gap-2 rounded-full bg-(--accent-primary) px-5 text-sm font-semibold whitespace-nowrap text-(--on-accent) transition-colors hover:bg-(--accent-hover) sm:flex-none sm:px-6"
            >
              View projects
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href="#contact"
              className="inline-flex h-12 flex-1 items-center justify-center gap-2 rounded-full border-2 border-(--accent-primary) px-5 text-sm sm:px-6 font-semibold whitespace-nowrap text-(--accent-text) transition-colors hover:bg-(--accent-soft) sm:flex-none"
            >
              Contact me
            </a>
            {/* Icon links stay together, on their own row on small phones */}
            <div className="flex gap-3">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile (opens in a new tab)"
                className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-(--border-subtle) text-(--text-secondary) transition-colors hover:text-(--text-primary)"
              >
                <GithubIcon className="h-5 w-5" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile (opens in a new tab)"
                className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-(--border-subtle) text-(--text-secondary) transition-colors hover:text-(--text-primary)"
              >
                <LinkedinIcon className="h-5 w-5" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                aria-label={`Email ${personalInfo.email}`}
                className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-(--border-subtle) text-(--text-secondary) transition-colors hover:text-(--text-primary)"
              >
                <Mail className="h-5 w-5" aria-hidden="true" />
              </a>
            </div>
          </div>

          <p className="mt-6 inline-flex items-center gap-2 text-sm text-(--text-muted)">
            <span className="h-2 w-2 rounded-full bg-emerald-500" aria-hidden="true" />
            Open to entry-level &amp; junior roles · Bacolod City, PH · open to relocation and remote
          </p>
        </div>

        {/* Right: real numbers from the projects */}
        <dl className="grid grid-cols-3 gap-4 self-end border-t border-(--border-subtle) pt-6 lg:col-span-4 lg:grid-cols-1 lg:gap-6 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-8">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col-reverse">
              <dt className="mt-1 text-xs text-(--text-muted) sm:text-sm">{stat.label}</dt>
              <dd className="font-serif text-3xl font-semibold tracking-tight text-(--text-primary) sm:text-4xl">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
