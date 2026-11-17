"use client";

import { useEffect, useRef, useState } from "react";
import { Check, Copy } from "lucide-react";

// The only interactive part of the Contact section, so only this small piece
// is a client component (the rest of the section stays server-rendered HTML).
export function CopyButton({ value, label }: { value: string; label: string }) {
  const [copied, setCopied] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  // Clear a pending timer if the button disappears, so it never updates an unmounted component.
  useEffect(() => () => clearTimeout(timerRef.current), []);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      clearTimeout(timerRef.current); // a second click restarts the 2-second timer
      timerRef.current = setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard can be blocked (e.g. insecure context); the email is still visible to copy by hand.
    }
  };

  return (
    <button
      type="button"
      onClick={copy}
      className="inline-flex h-11 items-center gap-2 rounded-md border border-(--border-strong) px-4 text-sm font-medium text-(--text-primary) transition-colors hover:bg-(--bg-elevated)"
    >
      {copied ? (
        <Check className="h-4 w-4 text-emerald-500" aria-hidden="true" />
      ) : (
        <Copy className="h-4 w-4" aria-hidden="true" />
      )}
      {/* aria-live so screen readers hear "Copied" */}
      <span aria-live="polite">{copied ? "Copied" : label}</span>
    </button>
  );
}
