import Image from "next/image";
import { ArrowUpRight, Lock } from "lucide-react";
import { projects } from "@/data/portfolio";
import { GithubIcon } from "./GithubIcon";
import { Section } from "./Section";

export function ProjectsSection() {
  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="Featured work"
      description="Four apps I built and deployed. Each one is live; some need a login."
    >
      <ul className="grid gap-6 sm:grid-cols-2">
        {projects.map((project, index) => (
          <li key={project.id}>
            <article className="flex h-full flex-col overflow-hidden rounded-lg border border-(--border-subtle) bg-(--bg-surface) transition-colors hover:border-(--border-strong)">
              {/* Real screenshot of the live site */}
              <div className="relative aspect-[16/10] border-b border-(--border-subtle) bg-(--bg-elevated)">
                <Image
                  src={project.image}
                  alt={project.imageAlt}
                  fill
                  sizes="(min-width: 1024px) 420px, (min-width: 640px) 50vw, 100vw"
                  className="object-cover object-top"
                  // Load the first two eagerly (they are near the top of the page).
                  loading={index < 2 ? "eager" : "lazy"}
                />
              </div>

              <div className="flex flex-1 flex-col p-5">
                <p className="font-mono text-xs text-(--text-muted)">{project.status}</p>
                <h3 className="mt-2 text-lg font-semibold text-(--text-primary)">
                  {project.title}
                </h3>
                <p className="text-sm text-(--accent-text)">{project.subtitle}</p>
                <p className="mt-3 text-sm leading-relaxed text-(--text-secondary)">
                  {project.description}
                </p>

                <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-(--text-muted) marker:text-(--border-strong)">
                  {project.highlights.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>

                {/* Native <details>: opens and closes without any JavaScript */}
                <details className="group mt-4 border-t border-(--border-subtle) pt-3">
                  <summary className="flex cursor-pointer list-none items-center justify-between py-1 text-sm font-medium text-(--text-primary) [&::-webkit-details-marker]:hidden">
                    How it&apos;s built
                    <span
                      className="text-(--text-muted) transition-transform group-open:rotate-45"
                      aria-hidden="true"
                    >
                      +
                    </span>
                  </summary>
                  <ul className="mt-2 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-(--text-secondary) marker:text-(--border-strong)">
                    {project.howItsBuilt.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </details>

                <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="Technologies">
                  {project.technologies.map((tech) => (
                    <li
                      key={tech}
                      className="rounded border border-(--border-subtle) px-2 py-0.5 font-mono text-xs text-(--text-secondary)"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>

                {/* Links sit at the bottom so all cards line up */}
                <div className="mt-auto flex flex-wrap items-center gap-x-5 gap-y-2 pt-5 text-sm font-medium">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 py-1 text-(--accent-text) hover:underline"
                  >
                    Live demo
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                    <span className="sr-only">for {project.title} (opens in a new tab)</span>
                  </a>
                  {project.githubUrl ? (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 py-1 text-(--text-secondary) hover:text-(--text-primary) hover:underline"
                    >
                      <GithubIcon className="h-4 w-4" />
                      Source code
                      <span className="sr-only">for {project.title} (opens in a new tab)</span>
                    </a>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 text-(--text-muted)">
                      <Lock className="h-3.5 w-3.5" aria-hidden="true" />
                      Private repository
                    </span>
                  )}
                </div>
              </div>
            </article>
          </li>
        ))}
      </ul>
    </Section>
  );
}
