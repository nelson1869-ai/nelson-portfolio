"use client";

import { useSyncExternalStore } from "react";
import { Moon, Sun } from "lucide-react";

// The theme lives on <html class="dark"> (set before paint by the script in layout.tsx).
// useSyncExternalStore reads that class and re-renders when it changes, so the
// button can tell screen readers whether dark theme is on (aria-pressed).
function subscribe(onChange: () => void) {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
  return () => observer.disconnect();
}
const isDarkNow = () => document.documentElement.classList.contains("dark");
const isDarkOnServer = () => true; // layout.tsx renders <html class="dark"> by default

export function ThemeToggle() {
  const isDark = useSyncExternalStore(subscribe, isDarkNow, isDarkOnServer);

  const toggleTheme = () => {
    const nowDark = document.documentElement.classList.toggle("dark");
    try {
      localStorage.setItem("nelson-portfolio-theme", nowDark ? "dark" : "light");
    } catch {
      // Storage can be blocked (private mode); the theme still changes for this visit.
    }
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Dark theme"
      aria-pressed={isDark}
      title={isDark ? "Switch to light theme" : "Switch to dark theme"}
      className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-(--border-subtle) text-(--text-secondary) transition-colors hover:border-(--border-strong) hover:text-(--text-primary)"
    >
      {/* Icons are picked with CSS (dark:), so the first paint is always right. */}
      <Sun className="hidden h-4 w-4 text-amber-400 dark:block" aria-hidden="true" />
      <Moon className="h-4 w-4 dark:hidden" aria-hidden="true" />
    </button>
  );
}
