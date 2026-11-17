import { personalInfo } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="border-t border-(--border-subtle)">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-8 text-sm text-(--text-muted) sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <p>
          © {new Date().getFullYear()} {personalInfo.name}. Built with Next.js, TypeScript, and
          Tailwind CSS.
        </p>
        <a href="#top" className="hover:text-(--text-primary)">
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
