import { Award, Calendar, GraduationCap } from "lucide-react";
import { education } from "@/data/portfolio";
import { SectionHeading } from "./SectionHeading";

export function EducationSection() {
  return (
    <section
      id="education"
      aria-labelledby="education-heading"
      className="border-b border-[var(--border-subtle)] py-16 sm:py-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div id="education-heading">
          <SectionHeading
            eyebrow="05 / Education & Achievements"
            title="Academic Background"
            description="Formal university education in Information Technology and academic recognition."
          />
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          {/* Degree Card */}
          <div className="rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] p-6 sm:p-8 lg:col-span-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div className="flex items-start gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[var(--accent-soft)] text-[var(--accent-text)]">
                  <GraduationCap className="h-6 w-6" aria-hidden="true" />
                </span>
                <div>
                  <span className="inline-block rounded-md bg-[var(--bg-elevated)] px-2.5 py-0.5 font-mono text-xs font-semibold text-[var(--accent-text)]">
                    {education.abbreviation}
                  </span>
                  <h3 className="mt-1.5 text-xl font-bold text-[var(--text-primary)]">
                    {education.institution}
                  </h3>
                  <p className="mt-1 text-base font-medium text-[var(--text-secondary)]">
                    {education.degree}
                  </p>
                  <p className="mt-0.5 text-sm text-[var(--text-muted)]">
                    {education.major}
                  </p>
                </div>
              </div>

              <div className="inline-flex items-center gap-1.5 self-start rounded-full border border-[var(--border-subtle)] bg-[var(--bg-elevated)] px-3.5 py-1.5 font-mono text-xs font-medium text-[var(--text-secondary)]">
                <Calendar className="h-3.5 w-3.5 text-[var(--accent-text)]" aria-hidden="true" />
                <span>Graduated: {education.graduationDate}</span>
              </div>
            </div>
          </div>

          {/* Academic Achievement Card */}
          <div className="flex flex-col justify-between rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] p-6 sm:p-8 lg:col-span-4">
            <div>
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400">
                  <Award className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="text-base font-bold text-[var(--text-primary)]">
                  Academic Achievement
                </h3>
              </div>

              <ul className="mt-5 space-y-3">
                {education.achievements.map((achievement) => (
                  <li
                    key={achievement}
                    className="rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-elevated)] p-4 text-sm font-semibold text-[var(--text-primary)]"
                  >
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>

            <p className="mt-4 font-mono text-xs text-[var(--text-muted)]">
              Recognized for strong academic standing during the first semester at CHMSU.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
