import { experience } from "@/data/portfolio";
import { Section } from "./Section";

export function ExperienceSection() {
  return (
    <Section id="experience" eyebrow="Experience" title="Work experience">
      {/* Timeline: a line on the left with a dot for each entry */}
      <ol className="relative space-y-10 border-l border-(--border-strong) pl-6">
        {experience.map((item) => (
          <li key={item.title} className="relative">
            <span
              className="absolute top-1.5 -left-[29px] h-2.5 w-2.5 rounded-full border-2 border-(--bg-primary) bg-(--accent-primary)"
              aria-hidden="true"
            />
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h3 className="text-base font-semibold text-(--text-primary)">
                {item.title}
                <span className="font-normal text-(--text-muted)"> · {item.place}</span>
              </h3>
              <p className="font-mono text-xs text-(--text-muted)">{item.period}</p>
            </div>
            <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-(--text-secondary) marker:text-(--border-strong)">
              {item.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </Section>
  );
}
