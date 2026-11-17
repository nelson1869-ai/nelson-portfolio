import { ArrowUpRight, FileDown, Mail } from "lucide-react";
import { personalInfo } from "@/data/portfolio";
import { CopyButton } from "./CopyButton";
import { GithubIcon } from "./GithubIcon";
import { Section } from "./Section";

export function ContactSection() {
  return (
    <Section id="contact" eyebrow="Contact" title="Let's talk">
      <p className="max-w-2xl text-lg leading-relaxed text-(--text-secondary)">
        I&apos;m looking for an entry-level or junior web developer role. If my work fits your team,
        please send me an email.
      </p>

      <a
        href={`mailto:${personalInfo.email}`}
        className="mt-6 inline-block text-xl font-semibold break-all text-(--text-primary) underline decoration-(--border-strong) underline-offset-4 transition-colors hover:decoration-(--accent-primary) sm:text-2xl"
      >
        {personalInfo.email}
      </a>

      <div className="mt-6 flex flex-wrap gap-3">
        <a
          href={`mailto:${personalInfo.email}`}
          className="inline-flex h-11 items-center gap-2 rounded-md bg-(--accent-primary) px-5 text-sm font-semibold text-(--on-accent) transition-colors hover:bg-(--accent-hover)"
        >
          <Mail className="h-4 w-4" aria-hidden="true" />
          Send an email
        </a>
        <CopyButton value={personalInfo.email} label="Copy email" />
        <a
          href={personalInfo.resumePath}
          download={personalInfo.resumeFileName}
          className="inline-flex h-11 items-center gap-2 rounded-md border border-(--border-strong) px-4 text-sm font-medium text-(--text-primary) transition-colors hover:bg-(--bg-elevated)"
        >
          <FileDown className="h-4 w-4" aria-hidden="true" />
          Resume (PDF)
        </a>
      </div>

      <ul className="mt-10 grid gap-4 border-t border-(--border-subtle) pt-6 text-sm sm:grid-cols-2">
        <li>
          <p className="font-mono text-xs text-(--text-muted) uppercase">GitHub</p>
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-1 inline-flex items-center gap-1.5 text-(--text-primary) hover:underline"
          >
            <GithubIcon className="h-4 w-4" />
            github.com/{personalInfo.githubUsername}
            <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
            <span className="sr-only">(opens in a new tab)</span>
          </a>
        </li>
        <li>
          <p className="font-mono text-xs text-(--text-muted) uppercase">Location</p>
          <p className="mt-1 text-(--text-primary)">{personalInfo.location}</p>
        </li>
      </ul>
    </Section>
  );
}
