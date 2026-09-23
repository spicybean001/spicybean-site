import { MetadataRoute } from "next";

const BASE_URL = "https://spicybean.net";
const LOCALES = ["en", "zh-CN", "zh-TW", "ko-KR", "ja-JP", "th-TH"];

// hreflang alternates for Google international targeting (Search + AI Overviews)
function languagesFor(path: string): Record<string, string> {
  return Object.fromEntries(
    LOCALES.map((locale) => [locale, `${BASE_URL}/${locale}${path}`])
  );
}

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticPages = ["", "/blog"];

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

  for (const locale of LOCALES) {
    for (const path of staticPages) {
      entries.push({
        url: `${BASE_URL}/${locale}${path}`,
        lastModified,
        changeFrequency: "weekly",
        priority: path === "" ? 1.0 : 0.8,
        alternates: { languages: languagesFor(path) },
      });
    }

    for (const slug of articles) {
      const path = `/blog/${slug}`;
      entries.push({
        url: `${BASE_URL}/${locale}${path}`,
        lastModified,
        changeFrequency: "monthly",
        priority: 0.7,
        alternates: { languages: languagesFor(path) },
      });
    }

    for (const s of series) {
      const path = `/products/${s}`;
      entries.push({
        url: `${BASE_URL}/${locale}${path}`,
        lastModified,
        changeFrequency: "monthly",
        priority: 0.6,
        alternates: { languages: languagesFor(path) },
      });
    }
  }

  return entries;
}
