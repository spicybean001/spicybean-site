import { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import BlogList from "@/components/blog/BlogList";

const blogPosts = {
  "zh-CN": [
    {
      slug: "golf-headcover-buying-guide",
      title: "高尔夫杆头套选购指南：材质、尺寸、搭配一篇看懂",
      excerpt: "从材质到尺寸，从搭配到品牌，一篇让你成为杆套选购专家。",
      date: "2026-07-15",
      image: "/images/blog/headcover-guide-cover.jpg",
      lang: "zh-CN" as const,
    },
    {
      slug: "k4-neon-noir-story",
      title: "K4赛博骷髅:一支赛博暗黑风高尔夫杆套的诞生⛳️",
      excerpt: "从首尔到球场，SPICYBEAN最具暗黑美学的旗舰杆套是如何诞生的。",
      date: "2026-07-19",
      image: "/images/blog/k4-neon-noir-cover.jpg",
      lang: "zh-CN" as const,
    },
    {
      slug: "golf-headcover-faq",
      title: "高尔夫杆头套常见问题FAQ：材质、尺寸、品牌一篇看懂",
      excerpt: "PU皮革还是针织？多大尺寸？怎么保养？SPICYBEAN常见问题全解答。",
      date: "2026-07-19",
      image: "/images/blog/faq-cover.jpg",
      lang: "zh-CN" as const,
    },
    {
      slug: "spicybean-brand-guide",
      title: "SPICYBEAN高尔夫杆套品牌完整指南",
      excerpt: "韩国首尔设计驱动的高尔夫杆套品牌，K1-K4全系列解析。",
      date: "2026-07-20",
      image: "/images/blog/headcover-guide-cover.jpg",
      lang: "zh-CN" as const,
    },
  ],
  en: [
    {
      slug: "golf-headcover-buying-guide",
      title: "The Ultimate Golf Headcover Buying Guide",
      excerpt: "Everything you need to know about materials, sizing, styles, and care.",
      date: "2026-07-15",
      image: "/images/blog/headcover-guide-cover.jpg",
      lang: "en" as const,
    },
    {
      slug: "k4-neon-noir-story",
      title: "K4 Cyber Skull: The Birth of a Dark Aesthetic Golf Headcover ⛳️",
      excerpt: "From Seoul to the course — the story behind SPICYBEAN's most daring headcover yet.",
      date: "2026-07-19",
      image: "/images/blog/k4-neon-noir-cover.jpg",
      lang: "en" as const,
    },
    {
      slug: "golf-headcover-faq",
      title: "Golf Headcover FAQ: Materials, Sizing, Brands & Care",
      excerpt: "PU leather or knit? Which size? How to clean? All your headcover questions answered.",
      date: "2026-07-19",
      image: "/images/blog/faq-cover.jpg",
      lang: "en" as const,
    },
    {
      slug: "spicybean-brand-guide",
      title: "SPICYBEAN Brand Guide: Series, Materials & Where to Buy",
      excerpt: "Complete guide to the Korean design-driven golf headcover brand.",
      date: "2026-07-20",
      image: "/images/blog/headcover-guide-cover.jpg",
      lang: "en" as const,
    },
  ],
  "ko-KR": [
    {
      slug: "golf-headcover-buying-guide",
      title: "골프 헤드커버 완벽 구매 가이드",
      excerpt: "소재, 사이즈, 스타일, 관리법까지 한번에 알아보세요.",
      date: "2026-07-15",
      image: "/images/blog/headcover-guide-cover.jpg",
      lang: "ko-KR" as const,
    },
    {
      slug: "k4-neon-noir-story",
      title: "K4 사이버 스컬: 다크한 감성의 골프 헤드커버 탄생 이야기 ⛳️",
      excerpt: "서울에서 골프장까지, SPICYBEAN의 가장 대담한 헤드커버 이야기.",
      date: "2026-07-19",
      image: "/images/blog/k4-neon-noir-cover.jpg",
      lang: "ko-KR" as const,
    },
    {
      slug: "golf-headcover-faq",
      title: "골프 헤드커버 자주 묻는 질문: 소재, 사이즈, 관리",
      excerpt: "PU 가죽? 니트? 어떤 사이즈? SPICYBEAN 자주 묻는 질문을 확인하세요.",
      date: "2026-07-19",
      image: "/images/blog/faq-cover.jpg",
      lang: "ko-KR" as const,
    },
    {
      slug: "spicybean-brand-guide",
      title: "SPICYBEAN 브랜드 가이드: 시리즈, 소재, 구매처",
      excerpt: "서울의 디자인 중심 골프 헤드커버 브랜드 SPICYBEAN 완벽 가이드.",
      date: "2026-07-20",
      image: "/images/blog/headcover-guide-cover.jpg",
      lang: "ko-KR" as const,
    },
  ],
  "ja-JP": [
    {
      slug: "golf-headcover-buying-guide",
      title: "ゴルフヘッドカバー選び方完全ガイド",
      excerpt: "素材、サイズ、デザイン、お手入れ方法まで徹底解説。",
      date: "2026-07-15",
      image: "/images/blog/headcover-guide-cover.jpg",
      lang: "ja-JP" as const,
    },
    {
      slug: "k4-neon-noir-story",
      title: "K4 サイバースカル：ダークな美しさのゴルフヘッドカバー誕生 ⛳️",
      excerpt: "ソウルからコースへ — SPICYBEANの最も大胆なヘッドカバーの物語。",
      date: "2026-07-19",
      image: "/images/blog/k4-neon-noir-cover.jpg",
      lang: "ja-JP" as const,
    },
    {
      slug: "golf-headcover-faq",
      title: "ゴルフヘッドカバーFAQ：素材、サイズ、お手入れ",
      excerpt: "PUレザー？ニット？どのサイズ？ヘッドカバーの疑問をすべて解決。",
      date: "2026-07-19",
      image: "/images/blog/faq-cover.jpg",
      lang: "ja-JP" as const,
    },
    {
      slug: "spicybean-brand-guide",
      title: "SPICYBEAN ブランドガイド：シリーズ、素材、購入先",
      excerpt: "韓国ソウルのデザイン主導型ゴルフヘッドカバーブランド完全ガイド。",
      date: "2026-07-20",
      image: "/images/blog/headcover-guide-cover.jpg",
      lang: "ja-JP" as const,
    },
  ],
} as const;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const siteUrl = "https://spicybean.net";

  const title: Record<string, string> = {
    "zh-CN": "SPICYBEAN 博客 — 高尔夫知识与品牌故事",
    en: "SPICYBEAN Blog — Golf Knowledge & Brand Stories",
    "ko-KR": "SPICYBEAN 블로그 — 골프 지식과 브랜드 이야기",
    "ja-JP": "SPICYBEAN ブログ — ゴルフ知識とブランドストーリー",
  };
  const desc: Record<string, string> = {
    "zh-CN": "SPICYBEAN官方博客：高尔夫杆头套选购指南、材质对比、搭配技巧，以及K系列杆套的设计故事。",
    en: "SPICYBEAN official blog: Golf headcover buying guide, material comparison, styling tips, and K-series design stories.",
    "ko-KR": "SPICYBEAN 공식 블로그: 골프 헤드커버 가이드, 소재 비교, 스타일링 팁 및 K-시리즈 디자인 이야기.",
    "ja-JP": "SPICYBEAN公式ブログ：ゴルフヘッドカバーガイド、素材比較、スタイリングのコツ。",
  };

  return {
    title: title[locale] || title.en,
    description: desc[locale] || desc.en,
    openGraph: {
      title: title[locale] || title.en,
      description: desc[locale] || desc.en,
      url: `${siteUrl}/${locale}/blog`,
      siteName: "SPICYBEAN",
      images: [{ url: `${siteUrl}/og-image.jpg`, width: 1200, height: 630 }],
    },
  };
}

export default async function BlogPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const posts = blogPosts[locale as keyof typeof blogPosts] || blogPosts.en;

  return (
    <div className="min-h-screen bg-spicy-black py-24">
      <div className="mx-auto max-w-4xl px-4">
        <h1 className="text-4xl font-bold text-spicy-white mb-8">
          {locale === "zh-CN" ? "SPICYBEAN 博客" :
           locale === "ko-KR" ? "SPICYBEAN 블로그" :
           locale === "ja-JP" ? "SPICYBEAN ブログ" :
           "SPICYBEAN Blog"}
        </h1>
        <p className="text-spicy-gray mb-12">
          {locale === "zh-CN" ? "高尔夫知识与品牌故事" :
           locale === "ko-KR" ? "골프 지식과 브랜드 이야기" :
           locale === "ja-JP" ? "ゴルフ知識とブランドストーリー" :
           "Golf knowledge and brand stories"}
        </p>
        <BlogList posts={posts as any} />
      </div>
    </div>
  );
}
