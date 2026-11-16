import { CheckCircle2, Code2, Cpu, Wrench } from "lucide-react";
import { skills, type SkillItem } from "@/data/portfolio";
import { SectionHeading } from "./SectionHeading";

const categories: Array<{
  name: SkillItem["category"];
  icon: typeof Code2;
  subtitle: string;
}> = [
  {
    name: "Frontend & Core",
    icon: Code2,
    subtitle: "Web languages, UI libraries, and styling tools",
  },
  {
    name: "Full-Stack & Backend",
    icon: Cpu,
    subtitle: "Application frameworks, databases, and scripting",
  },
  {
    name: "Tools & Emerging Tech",
    icon: Wrench,
    subtitle: "Version control, workflow automation, and AI concepts",
  },
];

function getBadgeStyle(level: string): string {
  const normalized = level.toLowerCase();
  if (normalized.includes("hands-on") || normalized.includes("project experience")) {
    return "border-emerald-500/30 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300";
  }
  if (normalized.includes("learning")) {
    return "border-sky-500/30 bg-sky-500/10 text-sky-700 dark:text-sky-300";
  }
  return "border-[var(--border-strong)] bg-[var(--bg-elevated)] text-[var(--text-secondary)]";
}

export function SkillsSection() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="border-b border-[var(--border-subtle)] py-16 sm:py-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div id="skills-heading">
          <SectionHeading
            eyebrow="02 / Technical Skills"
            title="Skills & Honest Proficiency Levels"
            description="A transparent representation of my current technical capabilities, project experience, and areas of active learning—without arbitrary percentage bars."
          />
        </div>

        <div className="space-y-10">
          {categories.map((category) => {
            const Icon = category.icon;
            const categorySkills = skills.filter((s) => s.category === category.name);

            return (
              <div key={category.name}>
                <div className="mb-4 flex items-center gap-2.5">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--accent-soft)] text-[var(--accent-text)]">
                    <Icon className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="text-base font-bold text-[var(--text-primary)]">
                      {category.name}
                    </h3>
                    <p className="text-xs text-[var(--text-muted)]">{category.subtitle}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {categorySkills.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex flex-col justify-between rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] p-5 transition-colors hover:border-[var(--border-strong)]"
                    >
                      <div>
                        <div className="flex items-start justify-between gap-3">
                          <h4 className="text-base font-bold text-[var(--text-primary)]">
                            {skill.name}
                          </h4>
                          <span
                            className={`inline-flex shrink-0 items-center gap-1 rounded-full border px-2.5 py-0.5 font-mono text-[11px] font-medium ${getBadgeStyle(
                              skill.level
                            )}`}
                          >
                            <CheckCircle2 className="h-3 w-3" aria-hidden="true" />
                            {skill.level}
                          </span>
                        </div>

                        <p className="mt-2.5 text-xs leading-relaxed text-[var(--text-muted)]">
                          {skill.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
