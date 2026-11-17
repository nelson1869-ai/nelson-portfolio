"use client";

import { Moon, Sun } from "lucide-react";

// The theme lives only on <html class="dark"> (set before paint by the script in layout.tsx).
// The icon is chosen with CSS (dark:), so no React state is needed and the
// first render is always correct, even when the system theme is light.
export function ThemeToggle() {
  const toggleTheme = () => {
    const isDark = document.documentElement.classList.toggle("dark");
    try {
      localStorage.setItem("nelson-portfolio-theme", isDark ? "dark" : "light");
    } catch {
      // Storage can be blocked (private mode); the theme still changes for this visit.
    }
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Switch color theme"
      title="Switch color theme"
      className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-(--border-subtle) text-(--text-secondary) transition-colors hover:border-(--border-strong) hover:text-(--text-primary)"
    >
      <Sun className="hidden h-4 w-4 text-amber-400 dark:block" aria-hidden="true" />
      <Moon className="h-4 w-4 dark:hidden" aria-hidden="true" />
    </button>
  );
}
