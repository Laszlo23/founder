import type { MetadataRoute } from "next";
import { site } from "@/content/chronicle";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: site.url,
      lastModified: new Date("2026-10-12"),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
