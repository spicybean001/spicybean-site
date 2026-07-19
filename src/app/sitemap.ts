import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://spicybean.net";
  const locales = ["en", "zh-CN", "ko-KR", "ja-JP"];

  // Static pages
  const staticPages = locales.flatMap((locale) => [
    {
      url: `${baseUrl}/${locale}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/${locale}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
  ]);

  // Blog articles
  const articles = ["golf-headcover-buying-guide", "k4-neon-noir-story", "golf-headcover-faq", "spicybean-brand-guide"];
  const articlePages = locales.flatMap((locale) =>
    articles.map((slug) => ({
      url: `${baseUrl}/${locale}/blog/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    }))
  );

  // Product pages
  const series = ["k1", "k2", "k3", "k4"];
  const productPages = locales.flatMap((locale) =>
    series.map((s) => ({
      url: `${baseUrl}/${locale}/products/${s}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    }))
  );

  return [...staticPages, ...articlePages, ...productPages];
}
