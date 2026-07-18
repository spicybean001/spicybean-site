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
      title: "K4暗夜霓虹：一只赛博朋克杆套的诞生",
      date: "2026-07-19",
    },
    en: {
      title: "K4 Neon Noir: The Birth of a Cyberpunk Headcover",
      date: "2026-07-19",
    },
    "ko-KR": {
      title: "K4 네온 느와르: 사이버펑크 헤드커버의 탄생",
      date: "2026-07-19",
    },
    "ja-JP": {
      title: "K4 ネオンノワール：サイバーパンクヘッドカバーの誕生",
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

        <Component />

        <div className="mt-16 flex items-center justify-end">
          <BlogViewCount slug={slug} />
        </div>
      </div>
    </div>
  );
}
