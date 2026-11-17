import type { ReactNode } from "react";

interface SectionProps {
  id: string;
  eyebrow: string;
  title: string;
  description?: string;
  children: ReactNode;
}

// Shared wrapper for every page section: same spacing, container, and heading.
// On large screens the heading sits in a left column and the content on the right.
export function Section({ id, eyebrow, title, description, children }: SectionProps) {
  const headingId = `${id}-heading`;

  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className="border-t border-(--border-subtle) py-16 sm:py-20"
    >
      <div className="mx-auto grid max-w-6xl gap-8 px-4 sm:px-6 lg:grid-cols-12 lg:gap-12 lg:px-8">
        <header className="lg:col-span-3">
          <p className="font-mono text-xs font-medium tracking-wider text-(--accent-text) uppercase">
            {eyebrow}
          </p>
          <h2
            id={headingId}
            className="mt-2 text-2xl font-semibold tracking-tight text-(--text-primary) sm:text-3xl"
          >
            {title}
          </h2>
          {description ? (
            <p className="mt-3 text-sm leading-relaxed text-(--text-muted)">{description}</p>
          ) : null}
        </header>

        <div className="lg:col-span-9">{children}</div>
      </div>
    </section>
  );
}
