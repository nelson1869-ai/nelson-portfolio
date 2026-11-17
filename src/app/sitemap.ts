import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";

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
