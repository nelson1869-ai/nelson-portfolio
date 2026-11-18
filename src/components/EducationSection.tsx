import { Award } from "lucide-react";
import { education } from "@/data/portfolio";
import { Section } from "./Section";

export function EducationSection() {
  return (
    <Section id="education" eyebrow="Education" title="Education & achievements">
      <div className="grid gap-6 md:grid-cols-5">
        <div className="md:col-span-3">
          <p className="font-mono text-xs text-(--text-muted)">Graduated {education.graduated}</p>
          <h3 className="mt-2 text-lg font-semibold text-(--text-primary)">{education.degree}</h3>
          <p className="mt-1 text-sm text-(--text-secondary)">{education.major}</p>
          <p className="mt-1 text-sm text-(--text-secondary)">
            {education.school}, {education.campus}
          </p>
          <p className="mt-1 text-sm text-(--text-muted)">
            {education.attended} · formerly {education.formerName}
          </p>

          <h4 className="mt-6 text-sm font-semibold text-(--text-primary)">Relevant coursework</h4>
          <ul className="mt-2 flex flex-wrap gap-2">
            {education.coursework.map((course) => (
              <li
                key={course}
                className="rounded-md border border-(--border-subtle) px-2.5 py-1 text-sm text-(--text-secondary)"
              >
                {course}
              </li>
            ))}
          </ul>
        </div>

        <ul className="space-y-3 md:col-span-2">
          {education.honors.map((honor) => (
            <li
              key={honor}
              className="flex items-start gap-3 rounded-lg border border-(--border-subtle) bg-(--bg-surface) p-4 text-sm text-(--text-primary)"
            >
              <Award className="mt-0.5 h-4 w-4 shrink-0 text-(--accent-text)" aria-hidden="true" />
              {honor}
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
