import { skillGroups } from "@/data/portfolio";
import { Section } from "./Section";

export function SkillsSection() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="Technical skills"
      description="Tools I have used in the projects above."
    >
      <div className="grid gap-x-10 gap-y-8 sm:grid-cols-2">
        {skillGroups.map((group) => (
          <div key={group.name}>
            <h3 className="text-sm font-semibold text-(--text-primary)">{group.name}</h3>
            <ul className="mt-3 flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <li
                  key={skill}
                  className="rounded-md border border-(--border-subtle) bg-(--bg-surface) px-2.5 py-1 text-sm text-(--text-secondary)"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
