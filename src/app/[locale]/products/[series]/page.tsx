import { Metadata } from "next";
import ProductDetail from "@/components/ProductDetail";
import { locales } from "@/i18n/routing";
import { setRequestLocale } from "next-intl/server";

const validSeries = ["k1", "k2", "k3", "k4"] as const;
type Series = (typeof validSeries)[number];

const seriesMeta: Record<string, Record<string, { title: string; description: string }>> = {
  k1: {
    "zh-CN": { title: "K1黑色经典PU高尔夫杆套 | SPICYBEAN", description: "意大利工艺级黑色PU皮革高尔夫杆头套。经典百搭，适配一号木、球道木、铁木杆。" },
    en: { title: "K1 Classic Black PU Golf Headcover | SPICYBEAN", description: "Italian-crafted black pebble grain PU leather golf headcover. Classic, versatile, fits driver, fairway wood & hybrid." },
    "ko-KR": { title: "K1 블랙 클래식 PU 골프 헤드커버 | SPICYBEAN", description: "이탈리아 공법 블랙 PU 가죽 골프 헤드커버. 클래식하고 다양한 스타일에 어울립니다." },
    "ja-JP": { title: "K1 ブラッククラシックPUゴルフヘッドカバー | SPICYBEAN", description: "イタリア製法ブラックPUレザーゴルフヘッドカバー。クラシックでどんなバッグにも合う。" },
  },
  k2: {
    "zh-CN": { title: "K2白色爱心PU高尔夫杆套 | SPICYBEAN", description: "纯白超纤PU配爱心刺绣高尔夫杆头套。韩式浪漫美学，拍照出片率极高。" },
    en: { title: "K2 White Heart PU Golf Headcover | SPICYBEAN", description: "Pure white microfiber PU with heart embroidery golf headcover. Korean romantic aesthetic, highly photogenic." },
    "ko-KR": { title: "K2 화이트 러브 PU 골프 헤드커버 | SPICYBEAN", description: "순백 마이크로화이버 PU와 하트자수 골프 헤드커버. 한국적 로맨틱 감성." },
    "ja-JP": { title: "K2 ホワイトラブPUゴルフヘッドカバー | SPICYBEAN", description: "純白マイクロファイバーPU×ハート刺繍ゴルフヘッドカバー。韓国ロマンティックデザイン。" },
  },
  k3: {
    "zh-CN": { title: "K3辛红印花PU高尔夫杆套 | SPICYBEAN", description: "满版辛红印花高尔夫杆头套。热情张扬的设计，球场一眼就能看到。" },
    en: { title: "K3 Warm Red Print PU Golf Headcover | SPICYBEAN", description: "Full-coverage warm red print golf headcover. Bold and passionate design that stands out on the fairway." },
    "ko-KR": { title: "K3 레드 프린트 PU 골프 헤드커버 | SPICYBEAN", description: "풀커버리지 레드 프린트 골프 헤드커버. 대담하고 열정적인 디자인." },
    "ja-JP": { title: "K3 レッドプリントPUゴルフヘッドカバー | SPICYBEAN", description: "全面レッドプリントゴルフヘッドカバー。大胆で情熱的なデザイン。" },
  },
  k4: {
    "zh-CN": { title: "K4赛博骷髅暗夜霓虹高尔夫杆套 | SPICYBEAN", description: "碳纤维PU纹理骷髅刺绣高尔夫杆头套。赛博朋克风格，SPICYBEAN旗舰限定款。" },
    en: { title: "K4 Neon Noir Cyber Skull Golf Headcover | SPICYBEAN", description: "Carbon fiber PU with skull embroidery golf headcover. Cyberpunk style, SPICYBEAN flagship limited edition." },
    "ko-KR": { title: "K4 네온 느와르 사이버 스컬 골프 헤드커버 | SPICYBEAN", description: "카본 파이버 PU 스컬 자수 골프 헤드커버. SPICYBEAN 플래그십 한정판." },
    "ja-JP": { title: "K4 サイバースカルネオンノワールゴルフヘッドカバー | SPICYBEAN", description: "カーボンファイバーPU×スカル刺繍ゴルフヘッドカバー。SPICYBEANフラッグシップ限定モデル。" },
  },
};

export function generateStaticParams() {
  const params: { locale: string; series: string }[] = [];
  for (const locale of locales) {
    for (const series of validSeries) {
      params.push({ locale, series });
    }
  }
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; series: string }>;
}): Promise<Metadata> {
  const { locale, series } = await params;
  if (!validSeries.includes(series as Series)) {
    return { title: "Product Not Found — SPICYBEAN" };
  }

  const siteUrl = "https://spicybean.net";
  const meta = seriesMeta[series]?.[locale] || seriesMeta[series]?.en;

  const languages: Record<string, string> = {};
  for (const loc of locales) {
    languages[loc] = `${siteUrl}/${loc}/products/${series}`;
  }
  languages["x-default"] = `${siteUrl}/en/products/${series}`;

  return {
    title: meta?.title || `SPICYBEAN ${series.toUpperCase()} Golf Headcover`,
    description: meta?.description || "",
    alternates: {
      canonical: `${siteUrl}/${locale}/products/${series}`,
      languages,
    },
    openGraph: {
      title: meta?.title,
      description: meta?.description,
      url: `${siteUrl}/${locale}/products/${series}`,
      siteName: "SPICYBEAN",
      images: [{ url: `${siteUrl}/images/${series}/cover.jpg`, width: 800, height: 600 }],
      locale: locale === "zh-CN" ? "zh_CN" : locale === "ko-KR" ? "ko_KR" : locale === "ja-JP" ? "ja_JP" : "en_US",
    },
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ locale: string; series: string }>;
}) {
  const { locale, series } = await params;
  setRequestLocale(locale);

  if (!validSeries.includes(series as Series)) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-spicy-black">
        <p className="text-spicy-gray">Product not found</p>
      </div>
    );
  }

  return <ProductDetail series={series} />;
}
