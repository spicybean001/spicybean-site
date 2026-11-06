import { MetadataRoute } from "next";
import { localeUrl, languageAlternates } from "@/i18n/urls";
import { locales } from "@/i18n/routing";

// ---------------------------------------------------------------------------
// Per-path lastmod (GEO 2026-11-07)
//
// 之前: `const lastModified = new Date()` — 每次构建都把 73 个 URL 的
// lastmod 全部刷成"构建时刻"，等于每次部署都向 Google 声明"全站已更新"。
// 这种不稳定信号会让 Google 直接降权/忽略 sitemap 的 lastmod（也和我们
// 实际的收录进度对不上）。
//
// 现在: 每个路径用其内容源文件的最后一次改动日期（由 GitHub commit 历史
// 实测得出）。内容没改 → 日期不动 → lastmod 恢复可信。
// 改动内容时同步更新对应常量。
// ---------------------------------------------------------------------------
const D = (s: string) => new Date(`${s}T00:00:00Z`);

const HOME_LAST = D("2026-11-03"); // src/app/[locale]/page.tsx
const BLOG_INDEX_LAST = D("2026-10-21"); // src/app/[locale]/blog/page.tsx
const PRODUCTS_LAST = D("2026-11-03"); // src/app/[locale]/products/[series]/page.tsx
const PRESS_LAST = D("2026-10-24"); // src/app/[locale]/press/page.tsx

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: { path: string; priority: number; lastModified: Date }[] = [
    { path: "", priority: 1.0, lastModified: HOME_LAST },
    { path: "/blog", priority: 0.8, lastModified: BLOG_INDEX_LAST },
  ];

  // slug → 英文正稿组件最后改动日（各语言版本同日改动）
  const articles: { slug: string; lastModified: Date }[] = [
    { slug: "golf-headcover-buying-guide", lastModified: D("2026-08-03") },
    { slug: "k4-neon-noir-story", lastModified: D("2026-10-21") },
    { slug: "golf-headcover-faq", lastModified: D("2026-10-21") },
    { slug: "spicybean-brand-guide", lastModified: D("2026-10-22") },
    { slug: "k2-white-love-story", lastModified: D("2026-07-23") },
    { slug: "spicybean-series-comparison", lastModified: D("2026-10-21") },
  ];

  const series = ["k1", "k2", "k3", "k4"];

  const entries: MetadataRoute.Sitemap = [];

  const push = (
    path: string,
    priority: number,
    changeFrequency: "weekly" | "monthly",
    lastModified: Date,
  ) => {
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
    push(page.path, page.priority, "weekly", page.lastModified);
  }

  // Press & media kit (GEO 2026-10-25) — English-only document with a single
  // canonical (/press), so one entry and one hreflang set instead of six.
  entries.push({
    url: localeUrl("en", "/press"),
    lastModified: PRESS_LAST,
    changeFrequency: "monthly",
    priority: 0.6,
    alternates: {
      languages: {
        en: localeUrl("en", "/press"),
        "x-default": localeUrl("en", "/press"),
      },
    },
  });
  for (const a of articles) {
    push(`/blog/${a.slug}`, 0.7, "monthly", a.lastModified);
  }
  for (const s of series) {
    push(`/products/${s}`, 0.6, "monthly", PRODUCTS_LAST);
  }

  return entries;
}
