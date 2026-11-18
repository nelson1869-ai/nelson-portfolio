import { FileDown } from "lucide-react";
import { personalInfo } from "@/data/portfolio";

// A resume button that stays in the bottom-left corner while the page scrolls,
// so a recruiter can download it from any section. Plain link: no JavaScript.
export function FloatingResume() {
  return (
    <a
      href={personalInfo.resumePath}
      download={personalInfo.resumeFileName}
      className="fixed bottom-4 left-4 z-40 inline-flex h-11 items-center gap-2 rounded-full border border-(--border-strong) bg-(--bg-surface)/90 px-4 text-sm font-semibold text-(--text-primary) shadow-lg backdrop-blur transition-colors hover:border-(--accent-primary) hover:text-(--accent-text) print:hidden"
    >
      <FileDown className="h-4 w-4" aria-hidden="true" />
      Resume / CV
    </a>
  );
}
