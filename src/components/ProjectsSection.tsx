import Image from "next/image";
import { ExternalLink, Globe } from "lucide-react";
import { projects } from "@/data/portfolio";
import { GithubIcon } from "./GithubIcon";
import { SectionHeading } from "./SectionHeading";

export function ProjectsSection() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="border-b border-[var(--border-subtle)] py-16 sm:py-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div id="projects-heading">
          <SectionHeading
            eyebrow="03 / Featured Projects"
            title="Personal & Web Application Projects"
            description="Real deployed applications demonstrating my work with modern web technologies, responsive user interfaces, and full-stack workflows."
          />
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.id}
              className="group flex flex-col overflow-hidden rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] transition-all hover:border-[var(--border-strong)] hover:shadow-md"
            >
              {/* Project Preview Image */}
              <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-[var(--border-subtle)] bg-slate-900">
                <Image
                  src={project.image}
                  alt={project.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                />
              </div>

              {/* Card Body */}
              <div className="flex flex-1 flex-col justify-between p-6">
                <div>
                  <p className="font-mono text-xs font-medium text-[var(--accent-text)]">
                    {project.subtitle}
                  </p>
                  <h3 className="mt-1 text-xl font-bold text-[var(--text-primary)]">
                    {project.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-[var(--text-secondary)]">
                    {project.description}
                  </p>

                  {/* Highlights */}
                  <ul className="mt-4 space-y-1.5 border-t border-[var(--border-subtle)] pt-3.5 text-xs text-[var(--text-muted)]">
                    {project.highlights.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span
                          className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent-primary)]"
                          aria-hidden="true"
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 pt-2">
                  {/* Technology Tags */}
                  <div className="mb-5 flex flex-wrap gap-1.5">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md border border-[var(--border-subtle)] bg-[var(--bg-elevated)] px-2.5 py-1 font-mono text-[11px] font-medium text-[var(--text-secondary)]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap items-center gap-2.5">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-lg bg-[var(--accent-primary)] px-3.5 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-[var(--accent-hover)] dark:text-slate-950"
                    >
                      <Globe className="h-3.5 w-3.5" aria-hidden="true" />
                      <span>Live Website</span>
                      <ExternalLink className="h-3 w-3 opacity-80" aria-hidden="true" />
                    </a>

                    {project.githubUrl ? (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-[var(--border-strong)] bg-[var(--bg-surface)] px-3.5 py-2.5 text-xs font-semibold text-[var(--text-primary)] transition-colors hover:bg-[var(--bg-elevated)]"
                      >
                        <GithubIcon className="h-3.5 w-3.5" />
                        <span>Source Code</span>
                      </a>
                    ) : null}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
