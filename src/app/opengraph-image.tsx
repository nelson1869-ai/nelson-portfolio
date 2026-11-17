import { ImageResponse } from "next/og";
import { personalInfo } from "@/data/portfolio";

// The preview picture shown when the link is shared (LinkedIn, Facebook, Messenger).
export const alt = `${personalInfo.name} — ${personalInfo.heroTitle}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const dynamic = "force-static";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 80,
          background: "#090d16",
          color: "#f8fafc",
        }}
      >
        <div style={{ fontSize: 28, color: "#34d399" }}>● Open to entry-level & junior web roles</div>
        <div style={{ fontSize: 84, fontWeight: 800, marginTop: 24 }}>{personalInfo.name}</div>
        <div style={{ fontSize: 44, color: "#38bdf8", marginTop: 8 }}>{personalInfo.heroTitle}</div>
        <div style={{ fontSize: 30, color: "#94a3b8", marginTop: 40 }}>
          Next.js · TypeScript · React · PostgreSQL · Tailwind CSS
        </div>
      </div>
    ),
    size,
  );
}
