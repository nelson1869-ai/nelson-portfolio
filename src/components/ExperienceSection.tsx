import { Briefcase, Calendar, Check } from "lucide-react";
import { experiences } from "@/data/portfolio";
import { SectionHeading } from "./SectionHeading";

export function ExperienceSection() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="border-b border-[var(--border-subtle)] py-16 sm:py-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div id="experience-heading">
          <SectionHeading
            eyebrow="04 / Work Experience"
            title="Professional & Practical Experience"
            description="Hands-on experience in IT technical support, hardware troubleshooting, and detail-oriented daily warehouse operations."
          />
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {experiences.map((exp) => (
            <div
              key={`${exp.company}-${exp.role}`}
              className="flex flex-col justify-between rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] p-6 sm:p-7"
            >
              <div>
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[var(--border-subtle)] pb-4">
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--accent-soft)] text-[var(--accent-text)]">
                      <Briefcase className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <div>
                      <h3 className="text-lg font-bold text-[var(--text-primary)]">
                        {exp.role}
                      </h3>
                      <p className="text-sm font-medium text-[var(--accent-text)]">
                        {exp.company}
                      </p>
                    </div>
                  </div>

                  <span className="inline-flex items-center gap-1.5 rounded-full border border-[var(--border-subtle)] bg-[var(--bg-elevated)] px-3 py-1 font-mono text-xs font-medium text-[var(--text-secondary)]">
                    <Calendar className="h-3.5 w-3.5 text-[var(--accent-text)]" aria-hidden="true" />
                    {exp.period}
                  </span>
                </div>

                <ul className="mt-5 space-y-3">
                  {exp.responsibilities.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2.5 text-sm leading-relaxed text-[var(--text-secondary)]"
                    >
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[var(--accent-soft)] text-[var(--accent-text)]">
                        <Check className="h-3 w-3" aria-hidden="true" />
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 border-t border-[var(--border-subtle)] pt-3">
                <span className="font-mono text-xs text-[var(--text-muted)]">
                  {exp.type}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
