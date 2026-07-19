import { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import Link from "next/link";
import ZhCNGuide from "@/components/blog/ZhCNGuide";
import EnGuide from "@/components/blog/EnGuide";
import KoGuide from "@/components/blog/KoGuide";
import JaGuide from "@/components/blog/JaGuide";
import ZhCNK4Story from "@/components/blog/ZhCNK4Story";
import EnK4Story from "@/components/blog/EnK4Story";
import KoK4Story from "@/components/blog/KoK4Story";
import JaK4Story from "@/components/blog/JaK4Story";
import BlogViewCount from "@/components/blog/BlogViewCount";

const articles = {
  "golf-headcover-buying-guide": {
    "zh-CN": {
      title: "高尔夫杆头套选购指南：材质、尺寸、搭配一篇看懂",
      date: "2026-07-15",
    },
    en: {
      title: "The Ultimate Golf Headcover Buying Guide",
      date: "2026-07-15",
    },
    "ko-KR": {
      title: "골프 헤드커버 완벽 구매 가이드",
      date: "2026-07-15",
    },
    "ja-JP": {
      title: "ゴルフヘッドカバー選び方完全ガイド",
      date: "2026-07-15",
    },
  },
  "k4-neon-noir-story": {
    "zh-CN": {
      title: "K4赛博骷髅:一支赛博暗黑风高尔夫杆套的诞生⛳️",
      date: "2026-07-19",
    },
    en: {
      title: "K4 Cyber Skull: The Birth of a Dark Aesthetic Golf Headcover ⛳️",
      date: "2026-07-19",
    },
    "ko-KR": {
      title: "K4 사이버 스컬: 다크한 감성의 골프 헤드커버 탄생 이야기 ⛳️",
      date: "2026-07-19",
    },
    "ja-JP": {
      title: "K4 サイバースカル：ダークな美しさのゴルフヘッドカバー誕生 ⛳️",
      date: "2026-07-19",
    },
  },
};

const articleComponents: Record<string, Record<string, React.ComponentType>> = {
  "golf-headcover-buying-guide": {
    "zh-CN": ZhCNGuide,
    en: EnGuide,
    "ko-KR": KoGuide,
    "ja-JP": JaGuide,
  },
  "k4-neon-noir-story": {
    "zh-CN": ZhCNK4Story,
    en: EnK4Story,
    "ko-KR": KoK4Story,
    "ja-JP": JaK4Story,
  },
};

const descriptions: Record<string, Record<string, string>> = {
  "golf-headcover-buying-guide": {
    "zh-CN": "从材质到尺寸，从搭配到品牌，一篇让你成为杆套选购专家。SPICYBEAN高尔夫杆头套选购指南。",
    en: "Everything you need to know about golf headcover materials, sizing, styles, and care. Complete buying guide from SPICYBEAN.",
    "ko-KR": "소재부터 사이즈, 스타일까지 한번에 알아보는 골프 헤드커버 완벽 가이드.",
    "ja-JP": "素材、サイズ、デザインまで完全解説。ゴルフヘッドカバー選び方ガイド。",
  },
  "k4-neon-noir-story": {
    "zh-CN": "K4赛博骷髅暗夜霓虹高尔夫杆套的设计诞生故事。从设计手稿到6万针刺绣，SPICYBEAN最具暗黑美学的限定款。",
    en: "The story behind K4 Neon Noir cyber skull golf headcover. From design sketches to 60,000 stitches of embroidery — SPICYBEAN's boldest limited edition.",
    "ko-KR": "K4 네온 느와르 사이버 스컬 골프 헤드커버의 디자인 탄생 이야기. SPICYBEAN의 가장 대담한 한정판.",
    "ja-JP": "K4サイバースカルネオンノワールゴルフヘッドカバーのデザイン誕生ストーリー。SPICYBEAN限定版。",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const article = articles[slug as keyof typeof articles];
  const langData = article?.[locale as keyof typeof article];

  if (!article || !langData) {
    return { title: "Article Not Found - SPICYBEAN" };
  }

  const desc = descriptions[slug]?.[locale] || "";
  const siteUrl = "https://spicybean.net";
  const path = `/${locale}/blog/${slug}`;
  const ogImage = slug === "k4-neon-noir-story"
    ? `${siteUrl}/images/blog/k4-neon-noir-cover.jpg`
    : `${siteUrl}/images/blog/headcover-guide-cover.jpg`;

  return {
    title: `${langData.title} | SPICYBEAN Blog`,
    description: desc,
    openGraph: {
      title: langData.title,
      description: desc,
      url: `${siteUrl}${path}`,
      siteName: "SPICYBEAN",
      images: [{ url: ogImage, width: 800, height: 600 }],
      locale: locale === "zh-CN" ? "zh_CN" : locale === "ko-KR" ? "ko_KR" : locale === "ja-JP" ? "ja_JP" : "en_US",
      type: "article",
      publishedTime: langData.date,
    },
    twitter: {
      card: "summary_large_image",
      title: langData.title,
      description: desc,
      images: [ogImage],
    },
    alternates: {
      canonical: `${siteUrl}${path}`,
      languages: {
        en: `${siteUrl}/en/blog/${slug}`,
        "zh-CN": `${siteUrl}/zh-CN/blog/${slug}`,
        "ko-KR": `${siteUrl}/ko-KR/blog/${slug}`,
        "ja-JP": `${siteUrl}/ja-JP/blog/${slug}`,
      },
    },
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const article = articles[slug as keyof typeof articles];
  const langData = article?.[locale as keyof typeof article];
  const Component = articleComponents[slug]?.[locale];
  const siteUrl = "https://spicybean.net";
  const ogImage = slug === "k4-neon-noir-story"
    ? `${siteUrl}/images/blog/k4-neon-noir-cover.jpg`
    : `${siteUrl}/images/blog/headcover-guide-cover.jpg`;

  if (!article || !langData || !Component) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-spicy-black">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-spicy-white mb-4">Article not found</h1>
          <Link href={`/${locale}/blog`} className="text-spicy-red hover:underline">
            ← Back to blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-spicy-black py-24">
      <div className="mx-auto max-w-3xl px-4">
        <Link
          href={`/${locale}/blog`}
          className="inline-flex items-center text-sm text-spicy-gray hover:text-spicy-red mb-8 transition-colors"
        >
          ← {locale === "zh-CN" ? "返回博客" : locale === "ko-KR" ? "블로그로 돌아가기" : locale === "ja-JP" ? "ブログに戻る" : "Back to Blog"}
        </Link>

        <header className="mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-spicy-white mb-4">
            {langData.title}
          </h1>
          <time className="text-sm text-spicy-gray">{langData.date}</time>
        </header>

        {/* Structured Data: BreadcrumbList */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "SPICYBEAN",
                  "item": "https://spicybean.net"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Blog",
                  "item": `https://spicybean.net/${locale}/blog`
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "name": langData.title
                }
              ]
            })
          }}
        />

        {/* Structured Data: Article */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              "headline": langData.title,
              "description": slug === "k4-neon-noir-story"
                ? "K4 Neon Noir cyber skull golf headcover design story"
                : "Golf headcover buying guide: materials, sizing, styling",
              "image": ogImage,
              "datePublished": langData.date,
              "dateModified": langData.date,
              "author": {
                "@type": "Organization",
                "name": "SPICYBEAN",
                "url": "https://spicybean.net"
              },
              "publisher": {
                "@type": "Organization",
                "name": "SPICYBEAN",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://spicybean.net/logo.png"
                }
              },
              "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": `https://spicybean.net/${locale}/blog/${slug}`
              },
              "inLanguage": locale
            })
          }}
        />

        <Component />

        <div className="mt-16 flex items-center justify-end">
          <BlogViewCount slug={slug} />
        </div>
      </div>
    </div>
  );
}
