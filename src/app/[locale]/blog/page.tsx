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
  ],
} as const;

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
