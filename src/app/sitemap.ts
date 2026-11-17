import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";

// Build this file once at build time (needed for the static export).
export const dynamic = "force-static";

// Served at /sitemap.xml — the list of pages search engines should index.
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
