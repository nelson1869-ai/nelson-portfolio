import { education, personalInfo } from "@/data/portfolio";
import { Section } from "./Section";

// Short facts shown next to the story.
const facts = [
  { label: "Based in", value: personalInfo.location },
  { label: "Education", value: `BSIT, ${education.major} — CHMSU` },
  { label: "Main stack", value: "Next.js, TypeScript, React, PostgreSQL" },
  { label: "Looking for", value: "Entry-level or junior web developer roles" },
];

export function AboutSection() {
  return (
    <Section id="about" eyebrow="About" title="About me">
      <div className="grid gap-10 md:grid-cols-5">
        <div className="space-y-4 text-base leading-relaxed text-(--text-secondary) md:col-span-3">
          {personalInfo.about.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <dl className="space-y-4 md:col-span-2">
          {facts.map((fact) => (
            <div key={fact.label} className="border-b border-(--border-subtle) pb-4 last:border-b-0">
              <dt className="font-mono text-xs text-(--text-muted) uppercase">{fact.label}</dt>
              <dd className="mt-1 text-sm text-(--text-primary)">{fact.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </Section>
  );
}
