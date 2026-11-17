"use client";

import { useEffect, useState } from "react";
import { FileDown, Menu, X } from "lucide-react";
import { navLinks, personalInfo } from "@/data/portfolio";
import { ThemeToggle } from "./ThemeToggle";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeHref, setActiveHref] = useState("");

  // Highlight the nav link of the section the reader is looking at.
  useEffect(() => {
    const sections = navLinks
      .map((link) => document.querySelector<HTMLElement>(link.href))
      .filter((el): el is HTMLElement => el !== null);

    const updateActive = () => {
      // The last section whose top has passed 40% of the screen height.
      let current = "";
      for (const section of sections) {
        if (section.getBoundingClientRect().top <= window.innerHeight * 0.4) {
          current = `#${section.id}`;
        }
      }

      // At the very bottom, short sections (like Education) can never reach 40%.
      // If the reader clicked a link to a section that is on screen, trust that link.
      const atBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4;
      const clicked = sections.find((section) => `#${section.id}` === window.location.hash);
      if (atBottom && clicked && clicked.getBoundingClientRect().top < window.innerHeight) {
        current = window.location.hash;
      }

      setActiveHref(current);
    };

    updateActive();
    window.addEventListener("scroll", updateActive, { passive: true });
    window.addEventListener("hashchange", updateActive);
    return () => {
      window.removeEventListener("scroll", updateActive);
      window.removeEventListener("hashchange", updateActive);
    };
  }, []);

  // Close the mobile menu with the Escape key.
  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  const linkClass = (href: string) =>
    href === activeHref
      ? "text-(--text-primary)"
      : "text-(--text-muted) hover:text-(--text-primary)";

  return (
    <header className="sticky top-0 z-50 border-b border-(--border-subtle) bg-(--bg-primary)/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <a href="#top" className="font-semibold tracking-tight text-(--text-primary)">
          {personalInfo.name}
        </a>

        {/* Desktop links */}
        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  aria-current={link.href === activeHref ? "location" : undefined}
                  className={`relative rounded-md px-3 py-2 text-sm font-medium transition-colors ${linkClass(link.href)}`}
                >
                  {link.label}
                  {link.href === activeHref ? (
                    <span
                      className="absolute inset-x-3 -bottom-[13px] h-0.5 bg-(--accent-primary)"
                      aria-hidden="true"
                    />
                  ) : null}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={personalInfo.resumePath}
            download={personalInfo.resumeFileName}
            className="hidden h-9 items-center gap-1.5 rounded-md border border-(--border-strong) px-3 text-sm font-medium text-(--text-primary) transition-colors hover:bg-(--bg-elevated) sm:inline-flex"
          >
            <FileDown className="h-4 w-4" aria-hidden="true" />
            Resume
          </a>
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-(--border-subtle) text-(--text-secondary) lg:hidden"
          >
            {menuOpen ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen ? (
        <nav
          id="mobile-menu"
          aria-label="Mobile"
          className="border-t border-(--border-subtle) bg-(--bg-primary) px-4 py-3 lg:hidden"
        >
          <ul className="flex flex-col">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`block rounded-md px-3 py-3 text-base font-medium ${linkClass(link.href)}`}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="mt-2 border-t border-(--border-subtle) pt-3">
              <a
                href={personalInfo.resumePath}
                download={personalInfo.resumeFileName}
                className="flex items-center gap-2 rounded-md px-3 py-3 text-base font-medium text-(--text-primary)"
              >
                <FileDown className="h-4 w-4" aria-hidden="true" />
                Download resume (PDF)
              </a>
            </li>
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
