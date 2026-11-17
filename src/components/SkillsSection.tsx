import { skillGroups, type SkillLevel } from "@/data/portfolio";
import { Section } from "./Section";

// One dot style per level, explained by the legend at the top.
const levelDot: Record<SkillLevel, string> = {
  "Project experience": "bg-(--accent-primary)",
  "Learning & applying": "border border-(--accent-primary) bg-transparent",
  Basic: "bg-(--border-strong)",
};

const levels = Object.keys(levelDot) as SkillLevel[];

export function SkillsSection() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="Technical skills"
      description="An honest view of where I am with each tool."
    >
      {/* Legend */}
      <ul className="mb-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-(--text-muted)">
        {levels.map((level) => (
          <li key={level} className="inline-flex items-center gap-2">
            <span className={`h-2.5 w-2.5 rounded-full ${levelDot[level]}`} aria-hidden="true" />
            {level}
          </li>
        ))}
      </ul>

      <div className="grid gap-x-10 gap-y-8 sm:grid-cols-2">
        {skillGroups.map((group) => (
          <div key={group.name}>
            <h3 className="text-sm font-semibold text-(--text-primary)">{group.name}</h3>
            <ul className="mt-3 divide-y divide-(--border-subtle) border-y border-(--border-subtle)">
              {group.skills.map((skill) => (
                <li key={skill.name} className="flex items-center justify-between gap-4 py-2 text-sm">
                  <span className="text-(--text-primary)">{skill.name}</span>
                  <span className="inline-flex items-center gap-2 text-xs text-(--text-muted)">
                    <span className={`h-2 w-2 rounded-full ${levelDot[skill.level]}`} aria-hidden="true" />
                    {skill.level}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
