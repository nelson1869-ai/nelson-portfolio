import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export: `next build` writes plain HTML/CSS/JS files to out/
  // so Cloudflare Pages can host them (no Node server needed).
  output: "export",
  // No server to resize images, so serve them as they are.
  images: { unoptimized: true },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
