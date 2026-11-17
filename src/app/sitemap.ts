import type { MetadataRoute } from "next";
import { contentUpdated } from "@/data/portfolio";
import { siteUrl } from "@/lib/site";

// Build this file once at build time (needed for the static export).
export const dynamic = "force-static";

// Served at /sitemap.xml — the list of pages search engines should index.
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      // A fixed date: new Date() would claim a change on every build.
      lastModified: contentUpdated,
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
