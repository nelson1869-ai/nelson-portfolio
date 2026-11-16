"use client";

import { useState } from "react";
import {
  AlertCircle,
  Check,
  Copy,
  ExternalLink,
  FileDown,
  FolderOpen,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { personalInfo } from "@/data/portfolio";
import { GithubIcon } from "./GithubIcon";
import { SectionHeading } from "./SectionHeading";

export function ContactSection() {
  const [copiedField, setCopiedField] = useState<"email" | "phone" | null>(null);
  const [resumeStatus, setResumeStatus] = useState<"idle" | "checking" | "missing">("idle");

  const copyToClipboard = async (value: string, field: "email" | "phone") => {
    try {
      await navigator.clipboard.writeText(value);
      setCopiedField(field);
      setTimeout(() => setCopiedField(null), 2000);
    } catch {
      // Ignore clipboard failures
    }
  };

  const handleResumeDownload = async (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setResumeStatus("checking");
    try {
      const response = await fetch(personalInfo.resumePath, { method: "HEAD" });
      if (response.ok) {
        setResumeStatus("idle");
        const link = document.createElement("a");
        link.href = personalInfo.resumePath;
        link.download = personalInfo.resumeFileName;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      } else {
        setResumeStatus("missing");
      }
    } catch {
      setResumeStatus("missing");
    }
  };

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="py-16 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div id="contact-heading">
          <SectionHeading
            eyebrow="06 / Contact & Resume"
            title="Get In Touch"
            description="I am available for Junior Full-Stack Developer, Junior Frontend Developer, and Entry-Level Web Developer opportunities. Feel free to reach out directly via email or phone."
          />
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          {/* Contact Channels */}
          <div className="space-y-4 lg:col-span-7">
            {/* Email Card */}
            <div className="flex flex-col justify-between gap-4 rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] p-5 sm:flex-row sm:items-center sm:p-6">
              <div className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[var(--accent-soft)] text-[var(--accent-text)]">
                  <Mail className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <p className="font-mono text-xs text-[var(--text-muted)] uppercase">
                    Email Address
                  </p>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="mt-0.5 block text-base font-bold break-all text-[var(--text-primary)] transition-colors hover:text-[var(--accent-text)]"
                  >
                    {personalInfo.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="inline-flex items-center gap-1.5 rounded-lg bg-[var(--accent-primary)] px-3.5 py-2 text-xs font-semibold text-white transition-colors hover:bg-[var(--accent-hover)] dark:text-slate-950"
                >
                  <span>Send Email</span>
                </a>
                <button
                  type="button"
                  onClick={() => copyToClipboard(personalInfo.email, "email")}
                  className="inline-flex items-center gap-1.5 rounded-lg border border-[var(--border-strong)] bg-[var(--bg-elevated)] px-3 py-2 text-xs font-medium text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)]"
                >
                  {copiedField === "email" ? (
                    <>
                      <Check className="h-3.5 w-3.5 text-emerald-500" aria-hidden="true" />
                      <span>Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-3.5 w-3.5" aria-hidden="true" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Phone Card */}
            <div className="flex flex-col justify-between gap-4 rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] p-5 sm:flex-row sm:items-center sm:p-6">
              <div className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[var(--accent-soft)] text-[var(--accent-text)]">
                  <Phone className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <p className="font-mono text-xs text-[var(--text-muted)] uppercase">
                    Phone / Mobile (Philippines)
                  </p>
                  <a
                    href={`tel:${personalInfo.phone}`}
                    className="mt-0.5 block text-base font-bold text-[var(--text-primary)] transition-colors hover:text-[var(--accent-text)]"
                  >
                    {personalInfo.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href={`tel:${personalInfo.phone}`}
                  className="inline-flex items-center gap-1.5 rounded-lg border border-[var(--border-strong)] bg-[var(--bg-surface)] px-3.5 py-2 text-xs font-semibold text-[var(--text-primary)] transition-colors hover:bg-[var(--bg-elevated)]"
                >
                  <span>Call</span>
                </a>
                <button
                  type="button"
                  onClick={() => copyToClipboard(personalInfo.phone, "phone")}
                  className="inline-flex items-center gap-1.5 rounded-lg border border-[var(--border-strong)] bg-[var(--bg-elevated)] px-3 py-2 text-xs font-medium text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)]"
                >
                  {copiedField === "phone" ? (
                    <>
                      <Check className="h-3.5 w-3.5 text-emerald-500" aria-hidden="true" />
                      <span>Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-3.5 w-3.5" aria-hidden="true" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* GitHub & Location Row */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] p-5 transition-colors hover:border-[var(--border-strong)]"
              >
                <div className="flex items-center gap-3.5">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--accent-soft)] text-[var(--accent-text)]">
                    <GithubIcon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="font-mono text-xs text-[var(--text-muted)] uppercase">
                      GitHub Profile
                    </p>
                    <p className="mt-0.5 text-sm font-bold text-[var(--text-primary)]">
                      @{personalInfo.githubUsername}
                    </p>
                  </div>
                </div>
                <ExternalLink className="h-4 w-4 text-[var(--text-muted)]" aria-hidden="true" />
              </a>

              <div className="flex items-center gap-3.5 rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] p-5">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--accent-soft)] text-[var(--accent-text)]">
                  <MapPin className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <p className="font-mono text-xs text-[var(--text-muted)] uppercase">
                    Location
                  </p>
                  <p className="mt-0.5 text-sm font-bold text-[var(--text-primary)]">
                    {personalInfo.location}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Resume Download Box */}
          <div
            id="resume"
            className="flex flex-col justify-between rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] p-6 sm:p-8 lg:col-span-5"
          >
            <div>
              <div className="inline-flex items-center gap-2 rounded-lg bg-[var(--accent-soft)] px-3 py-1 font-mono text-xs font-semibold text-[var(--accent-text)]">
                <FileDown className="h-3.5 w-3.5" aria-hidden="true" />
                <span>Curriculum Vitae / Resume</span>
              </div>

              <h3 className="mt-4 text-xl font-bold text-[var(--text-primary)]">
                Download My Resume
              </h3>

              <p className="mt-2 text-sm leading-relaxed text-[var(--text-secondary)]">
                Get a PDF copy of my resume detailing my education at CHMSU, technical skills, deployed web projects, and work history.
              </p>

              <div className="mt-5 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-elevated)] p-4">
                <div className="flex items-start gap-2.5 text-xs text-[var(--text-muted)]">
                  <FolderOpen className="mt-0.5 h-4 w-4 shrink-0 text-[var(--accent-text)]" aria-hidden="true" />
                  <div>
                    <p className="font-semibold text-[var(--text-primary)]">
                      Resume File Path
                    </p>
                    <code className="mt-1 block font-mono text-[11px] break-all text-[var(--text-secondary)]">
                      public/files/{personalInfo.resumeFileName}
                    </code>
                  </div>
                </div>
              </div>

              {resumeStatus === "missing" ? (
                <div
                  role="status"
                  className="mt-4 flex items-start gap-2.5 rounded-xl border border-amber-500/40 bg-amber-500/10 p-3.5 text-xs text-amber-800 dark:text-amber-200"
                >
                  <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
                  <div>
                    <p className="font-semibold">Resume PDF Placeholder Ready</p>
                    <p className="mt-1 leading-relaxed">
                      Place your final PDF file at{" "}
                      <code className="font-mono font-semibold">
                        public/files/{personalInfo.resumeFileName}
                      </code>{" "}
                      to enable direct PDF downloads. In the meantime, you can request a copy via{" "}
                      <a
                        href={`mailto:${personalInfo.email}?subject=Resume%20Request%20-%20Nelson%20Fernandez`}
                        className="underline font-semibold"
                      >
                        email
                      </a>
                      .
                    </p>
                  </div>
                </div>
              ) : null}
            </div>

            <div className="mt-6 pt-2">
              <a
                href={personalInfo.resumePath}
                download={personalInfo.resumeFileName}
                onClick={handleResumeDownload}
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[var(--accent-primary)] px-5 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[var(--accent-hover)] dark:text-slate-950"
              >
                <FileDown className="h-4 w-4" aria-hidden="true" />
                <span>
                  {resumeStatus === "checking"
                    ? "Checking Resume File..."
                    : "Download My Resume (PDF)"}
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
