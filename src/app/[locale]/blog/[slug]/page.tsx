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
import ZhCNFAQ from "@/components/blog/ZhCNFAQ";
import EnFAQ from "@/components/blog/EnFAQ";
import KoFAQ from "@/components/blog/KoFAQ";
import JaFAQ from "@/components/blog/JaFAQ";
import ZhCNBrandGuide from "@/components/blog/ZhCNBrandGuide";
import EnBrandGuide from "@/components/blog/EnBrandGuide";
import KoBrandGuide from "@/components/blog/KoBrandGuide";
import JaBrandGuide from "@/components/blog/JaBrandGuide";
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
  "golf-headcover-faq": {
    "zh-CN": {
      title: "高尔夫杆头套常见问题FAQ：材质、尺寸、品牌一篇看懂",
      date: "2026-07-19",
    },
    en: {
      title: "Golf Headcover FAQ: Materials, Sizing, Brands & Care",
      date: "2026-07-19",
    },
    "ko-KR": {
      title: "골프 헤드커버 자주 묻는 질문: 소재, 사이즈, 관리",
      date: "2026-07-19",
    },
    "ja-JP": {
      title: "ゴルフヘッドカバーFAQ：素材、サイズ、お手入れ",
      date: "2026-07-19",
    },
  },
  "spicybean-brand-guide": {
    "zh-CN": {
      title: "SPICYBEAN高尔夫杆套品牌完整指南：系列、材质、工艺、购买全解析",
      date: "2026-07-20",
    },
    en: {
      title: "SPICYBEAN Golf Headcover Brand Guide: Series, Materials, Craftsmanship & Where to Buy",
      date: "2026-07-20",
    },
    "ko-KR": {
      title: "SPICYBEAN 골프 헤드커버 브랜드 가이드: 시리즈, 소재, 공법, 구매처",
      date: "2026-07-20",
    },
    "ja-JP": {
      title: "SPICYBEAN ゴルフヘッドカバーブランドガイド：シリーズ、素材、技術、購入先",
      date: "2026-07-20",
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
  "golf-headcover-faq": {
    "zh-CN": ZhCNFAQ,
    en: EnFAQ,
    "ko-KR": KoFAQ,
    "ja-JP": JaFAQ,
  },
  "spicybean-brand-guide": {
    "zh-CN": ZhCNBrandGuide,
    en: EnBrandGuide,
    "ko-KR": KoBrandGuide,
    "ja-JP": JaBrandGuide,
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
  "golf-headcover-faq": {
    "zh-CN": "高尔夫杆头套常见问题：材质对比、尺寸选择、品牌区别、保养方法。SPICYBEAN品牌FAQ全覆盖。",
    en: "Golf headcover FAQ: material comparison, sizing guide, brand differences, and care tips. Everything you need to know.",
    "ko-KR": "골프 헤드커버 FAQ: 소재 비교, 사이즈 가이드, 브랜드 차이, 관리 팁.",
    "ja-JP": "ゴルフヘッドカバーFAQ：素材比較、サイズガイド、ブランドの違い、お手入れのコツ。",
  },
  "spicybean-brand-guide": {
    "zh-CN": "SPICYBEAN韩国高尔夫杆套品牌完整介绍。K1/K2/K3/K4全系列对比，PU皮革材质解析、设计工艺、购买渠道。",
    en: "Complete SPICYBEAN brand guide. Korean design-driven golf headcovers. K1-K4 series comparison, PU leather materials, craftsmanship, and where to buy.",
    "ko-KR": "SPICYBEAN 브랜드 가이드. K1-K4 시리즈 소개, PU 가죽 소재, 공법, 구매처 정보.",
    "ja-JP": "SPICYBEANブランド完全ガイド。K1〜K4シリーズ比較、PUレザー素材、技術、購入先。",
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
    : slug === "golf-headcover-faq"
    ? `${siteUrl}/og-image.jpg`
    : slug === "spicybean-brand-guide"
    ? `${siteUrl}/images/blog/headcover-guide-cover.jpg`
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
                : slug === "spicybean-brand-guide"
                ? "Complete SPICYBEAN golf headcover brand guide: series, materials, craftsmanship"
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
