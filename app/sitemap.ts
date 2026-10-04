import type { MetadataRoute } from "next";
import { articles, categories } from "@/lib/docs";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "https://help.movira360.com";
  return [
    { url: base, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/categories`, changeFrequency: "weekly", priority: 0.8 },
    ...categories.map((item) => ({ url: `${base}/categories/${item.slug}`, changeFrequency: "weekly" as const, priority: 0.7 })),
    ...articles.map((item) => ({ url: `${base}/docs/${item.slug}`, lastModified: item.updated, changeFrequency: "monthly" as const, priority: item.featured ? 0.8 : 0.6 })),
  ];
}
