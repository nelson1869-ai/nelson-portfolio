import { BookOpen, Code, Compass, GitBranch } from "lucide-react";
import { personalInfo } from "@/data/portfolio";
import { SectionHeading } from "./SectionHeading";

const pillars = [
  {
    icon: Code,
    title: "Practical Web Development",
    description:
      "Building real personal web applications with React, Next.js, TypeScript, Tailwind CSS, and Supabase.",
  },
  {
    icon: GitBranch,
    title: "Version Control & Workflow",
    description:
      "Using Git and GitHub for source control, structured commits, and deploying projects to production platforms.",
  },
  {
    icon: Compass,
    title: "Automation & AI Curiosity",
    description:
      "Exploring workflow automation with n8n along with foundational AI and Retrieval-Augmented Generation (RAG) concepts.",
  },
  {
    icon: BookOpen,
    title: "Continuous Growth",
    description:
      "Dedicated to strengthening software fundamentals, learning best practices, and contributing reliably to a development team.",
  },
];

export function AboutSection() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="border-b border-[var(--border-subtle)] py-16 sm:py-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="01 / About Me"
          title="Background & Professional Introduction"
          description="An honest overview of my academic foundation, technical journey, and engineering goals."
        />

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          {/* Narrative Paragraphs */}
          <div className="space-y-4 rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] p-6 sm:p-8 lg:col-span-7">
            <h3
              id="about-heading"
              className="text-lg font-bold text-[var(--text-primary)]"
            >
              {personalInfo.name} — {personalInfo.title}
            </h3>

            {personalInfo.introduction.map((paragraph, index) => (
              <p
                key={index}
                className="text-base leading-relaxed text-[var(--text-secondary)]"
              >
                {paragraph}
              </p>
            ))}

            <div className="pt-4">
              <div className="grid grid-cols-1 gap-3 border-t border-[var(--border-subtle)] pt-5 sm:grid-cols-2">
                <div>
                  <span className="font-mono text-xs text-[var(--text-muted)] uppercase">
                    Location
                  </span>
                  <p className="mt-0.5 text-sm font-medium text-[var(--text-primary)]">
                    {personalInfo.location}
                  </p>
                </div>
                <div>
                  <span className="font-mono text-xs text-[var(--text-muted)] uppercase">
                    Education
                  </span>
                  <p className="mt-0.5 text-sm font-medium text-[var(--text-primary)]">
                    BSIT (Computer Technology), CHMSU
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Key Pillars */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-5 lg:grid-cols-1">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className="flex gap-4 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] p-5 transition-colors hover:border-[var(--border-strong)]"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[var(--accent-soft)] text-[var(--accent-text)]">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-[var(--text-primary)]">
                      {pillar.title}
                    </h4>
                    <p className="mt-1 text-xs leading-relaxed text-[var(--text-muted)]">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
