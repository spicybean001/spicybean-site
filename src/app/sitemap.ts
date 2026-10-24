import { MetadataRoute } from "next";
import { localeUrl, languageAlternates } from "@/i18n/urls";
import { locales } from "@/i18n/routing";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticPages: { path: string; priority: number }[] = [
    { path: "", priority: 1.0 },
    { path: "/blog", priority: 0.8 },
  ];

  const articles = [
    "golf-headcover-buying-guide",
    "k4-neon-noir-story",
    "golf-headcover-faq",
    "spicybean-brand-guide",
    "k2-white-love-story",
    "spicybean-series-comparison",
  ];

  const series = ["k1", "k2", "k3", "k4"];

  const entries: MetadataRoute.Sitemap = [];

  const push = (path: string, priority: number, changeFrequency: "weekly" | "monthly") => {
    for (const locale of locales) {
      entries.push({
        url: localeUrl(locale, path),
        lastModified,
        changeFrequency,
        priority,
        alternates: { languages: languageAlternates(path) },
      });
    }
  };

  for (const page of staticPages) {
    push(page.path, page.priority, "weekly");
  }

  // Press & media kit (GEO 2026-10-25) — English-only document with a single
  // canonical (/press), so one entry and one hreflang set instead of six.
  entries.push({
    url: localeUrl("en", "/press"),
    lastModified,
    changeFrequency: "monthly",
    priority: 0.6,
    alternates: {
      languages: {
        en: localeUrl("en", "/press"),
        "x-default": localeUrl("en", "/press"),
      },
    },
  });
  for (const slug of articles) {
    push(`/blog/${slug}`, 0.7, "monthly");
  }
  for (const s of series) {
    push(`/products/${s}`, 0.6, "monthly");
  }

  return entries;
}

