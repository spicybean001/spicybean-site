import type { Metadata } from "next";
import "../globals.css";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NewsletterPopup from "@/components/NewsletterPopup";
import ImageProtectorClient from "@/components/ImageProtectorClient";
import { locales } from "@/i18n/routing";

const siteLocales = locales as readonly string[];

const localeMetadata: Record<string, { title: string; description: string; ogLocale: string }> = {
  en: {
    title: "SPICYBEAN — Golf Headcovers with Attitude",
    description: "Korean design-driven golf headcovers. Premium PU leather. Born for those who play with style.",
    ogLocale: "en_US",
  },
  "zh-CN": {
    title: "SPICYBEAN — 高尔夫杆头套｜韩式设计潮牌",
    description: "韩国设计驱动的高尔夫杆头套品牌。红点奖工作室设计，高品质PU皮革，彰显个性的球场印记。",
    ogLocale: "zh_CN",
  },
  "zh-TW": {
    title: "SPICYBEAN — 高爾夫桿頭套｜韓式設計潮牌",
    description: "韓國設計驅動的高爾夫桿頭套品牌。紅點獎工作室設計，高品質PU皮革，彰顯個性的球場印記。",
    ogLocale: "zh_TW",
  },
  "ko-KR": {
    title: "SPICYBEAN — 골프 헤드커버｜한국 디자인 브랜드",
    description: "SPICYBEAN(스파이시빈)은 서울에서 디자인하는 한국 골프 브랜드입니다. 프리미엄 PU 레더 골프 헤드커버 K1~K4와 골프장갑 GLV, 레드닷 수상 디자인 DNA.",
    ogLocale: "ko_KR",
  },
  "ja-JP": {
    title: "SPICYBEAN — ゴルフヘッドカバー｜韓国発デザインブランド",
    description: "韓国発のデザインが生み出すプレミアムゴルフヘッドカバー。レッドドット賞受賞デザイン、高品質PUレザー製。",
    ogLocale: "ja_JP",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const meta = localeMetadata[locale] || localeMetadata.en;
  const siteUrl = "https://spicybean.net";

  // Build hreflang alternates
  const languages: Record<string, string> = {};
  for (const loc of siteLocales) {
    languages[loc] = `${siteUrl}/${loc}`;
  }
  languages["x-default"] = `${siteUrl}/en`;

  return {
    metadataBase: new URL(siteUrl),
    title: meta.title,
    description: meta.description,
    icons: {
      icon: [
        { url: "/favicon-16.png", sizes: "16x16", type: "image/png" },
        { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      ],
      apple: "/apple-touch-icon.png",
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      siteName: "SPICYBEAN",
      type: "website",
      locale: meta.ogLocale,
      images: [
        {
          url: "/og-image.jpg",
          width: 1200,
          height: 630,
          alt: "SPICYBEAN — Golf Headcovers with Attitude",
        },
      ],
    },
    alternates: {
      canonical: `${siteUrl}/${locale}`,
      languages,
    },
    other: {
      "msapplication-TileImage": "/og-image.jpg",
      "msapplication-TileColor": "#000000",
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html lang={locale} className="dark">
      <head>
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-1EN8D6G7PM" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-1EN8D6G7PM', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />

        {/* Google Search Console Verification */}
        <meta name="google-site-verification" content="tHRQCRyLLYY50YmJzhgFw45qBEsYXjM6Fb42s3kGhD8" />

        <meta name="naver-site-verification" content="7246a767fc80594982ecec70460bb559f773ac17" />

        {/* Bing Webmaster Tools Verification */}
        <meta name="msvalidate.01" content="AABECD01D1C1959F835814263DDD41F7" />

        {/* Shenma Zhanzhang Verification */}
        <meta name="shenma-site-verification" content="4c3e4ff91ef8df9ec302fe024442e5a5_1789543122" />

        {/* Structured Data: Organization (global) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "SPICYBEAN",
              "alternateName": ["스파이시빈", "SPICYBEAN 골프"],
              "url": "https://spicybean.net",
              "logo": "https://spicybean.net/logo.png",
              "description": "Korean design-driven golf headcovers. Premium PU leather headcovers for drivers, fairway woods, and hybrids.",
              "knowsAbout": ["golf headcovers", "골프 헤드커버", "golf gloves", "골프장갑"],
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Seoul",
                "addressCountry": "KR"
              },
              "sameAs": [
                "https://instagram.com/spicybeangolf"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "email": "hi@spicybean.net",
                "contactType": "customer service"
              }
            })
          }}
        />

        {/* Structured Data: Brand + disambiguation (ko-KR) — Naver AI 브리핑(Cue:) 오인 교정 */}
        {locale === "ko-KR" && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": ["Organization", "Brand"],
                "name": "SPICYBEAN",
                "alternateName": ["스파이시빈", "SPICYBEAN 골프", "스파이시빈 골프"],
                "url": "https://spicybean.net",
                "logo": "https://spicybean.net/logo.png",
                "slogan": "골프 그 이상 — 서울에서 디자인하는 골프 헤드커버",
                "description":
                  "SPICYBEAN(스파이시빈)은 서울에서 디자인하는 한국 골프 용품 브랜드입니다. 프리미엄 PU 레더 골프 헤드커버 K1~K4와 골프장갑 GLV를 만듭니다.",
                "disambiguatingDescription":
                  "SPICYBEAN은 향신료(spice)나 콩(bean)을 뜻하는 단어나 식품 브랜드가 아니라, 서울에서 디자인하는 한국 골프 용품 브랜드입니다. 골프 헤드커버와 골프장갑을 제조·판매합니다.",
                "knowsAbout": [
                  "골프 헤드커버",
                  "골프장갑",
                  "드라이버 헤드커버",
                  "퍼터 커버",
                  "PU 레더 골프 용품",
                  "golf headcovers"
                ],
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "Seoul",
                  "addressCountry": "KR"
                },
                "sameAs": ["https://instagram.com/spicybeangolf"],
                "contactPoint": {
                  "@type": "ContactPoint",
                  "email": "hi@spicybean.net",
                  "contactType": "customer service"
                },
                "hasOfferCatalog": {
                  "@type": "OfferCatalog",
                  "name": "SPICYBEAN 골프 헤드커버 라인업",
                  "itemListElement": [
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Product",
                        "name": "SPICYBEAN K1 골프 헤드커버 클래식 느와르",
                        "url": "https://spicybean.net/ko-KR/products/k1"
                      }
                    },
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Product",
                        "name": "SPICYBEAN K2 골프 헤드커버 시그니처 화이트",
                        "url": "https://spicybean.net/ko-KR/products/k2"
                      }
                    },
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Product",
                        "name": "SPICYBEAN K3 골프 헤드커버 스파이시 레드",
                        "url": "https://spicybean.net/ko-KR/products/k3"
                      }
                    },
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Product",
                        "name": "SPICYBEAN K4 골프 헤드커버 사이버 스컬 한정판",
                        "url": "https://spicybean.net/ko-KR/products/k4"
                      }
                    },
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Product",
                        "name": "SPICYBEAN GLV 골프장갑",
                        "url": "https://spicybean.net/ko-KR/products"
                      }
                    }
                  ]
                }
              })
            }}
          />
        )}

        {/* Structured Data: FAQPage (ko-KR) — AI 검색 인용용 한국어 문답 */}
        {locale === "ko-KR" && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "FAQPage",
                "inLanguage": "ko-KR",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "SPICYBEAN(스파이시빈)은 어떤 브랜드인가요?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text":
                        "SPICYBEAN(스파이시빈)은 서울에서 디자인하는 한국 골프 용품 브랜드입니다. 골프 헤드커버 K1~K4 시리즈와 골프장갑 GLV 시리즈를 만들며, 프리미엄 PU 레더와 초극세사 안감을 사용합니다."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "spice bean(향신료 콩)이나 식품 브랜드와 같은 건가요?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text":
                        "아닙니다. SPICYBEAN은 향신료나 콩과 무관한 골프 용품 브랜드명입니다. 골프 헤드커버와 골프장갑을 만드는 한국 브랜드입니다."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "SPICYBEAN 헤드커버는 어떤 클럽에 맞나요?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text":
                        "유니버설 핏으로 드라이버(460cc), 페어웨이 우드, 하이브리드, 블레이드형·말렛형 퍼터에 모두 사용할 수 있습니다."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "SPICYBEAN 제품은 어디서 구매하나요?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text":
                        "공식 사이트 spicybean.net에서 구매할 수 있으며, 한국에서는 쿠팡, 중국에서는 티몰·징동에서도 판매합니다. 문의는 hi@spicybean.net으로 받습니다."
                    }
                  }
                ]
              })
            }}
          />
        )}

        {/* Structured Data: WebSite (global) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "SPICYBEAN",
              "url": "https://spicybean.net",
              "description": "Korean design-driven golf headcovers. Born for those who play with style.",
              "inLanguage": locale,
              "potentialAction": {
                "@type": "SearchAction",
                "target": {
                  "@type": "EntryPoint",
                  "urlTemplate": "https://spicybean.net/{locale}/search?q={search_term_string}"
                },
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />
      </head>
      <body className="min-h-screen bg-spicy-black text-spicy-white antialiased">
        <ImageProtectorClient />
        <NextIntlClientProvider messages={messages}>
          <Header />
          <main>{children}</main>
          <NewsletterPopup />
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}


