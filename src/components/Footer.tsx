import { personalInfo } from "@/data/portfolio";

const footerLinks = [
  { label: "GitHub", href: personalInfo.github, external: true },
  { label: "LinkedIn", href: personalInfo.linkedin, external: true },
  { label: "Email", href: `mailto:${personalInfo.email}`, external: false },
  { label: "Resume", href: personalInfo.resumePath, external: false },
  { label: "Back to top ↑", href: "#top", external: false },
];

export function Footer() {
  return (
    <footer className="border-t border-(--border-subtle)">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 pt-8 pb-20 text-sm text-(--text-muted) sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <p>
          © {new Date().getFullYear()} {personalInfo.name} · Built with Next.js, TypeScript, and
          Tailwind CSS
        </p>
        <ul className="flex flex-wrap gap-x-5 gap-y-1">
          {footerLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="inline-block py-1 hover:text-(--text-primary)"
                {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
