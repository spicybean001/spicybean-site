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
  "ko-KR": {
    title: "SPICYBEAN — 골프 헤드커버｜한국 디자인 브랜드",
    description: "한국 감성 디자인 골프 헤드커브. 레드닷 디자인 수상 스튜디오 DBWD와의 협업. 프리미엄 PU 가죽.",
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

        {/* Bing Webmaster Tools Verification */}
        <meta name="msvalidate.01" content="AABECD01D1C1959F835814263DDD41F7" />

        {/* Structured Data: Organization (global) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "SPICYBEAN",
              "url": "https://spicybean.net",
              "logo": "https://spicybean.net/logo.png",
              "description": "Korean design-driven golf headcovers. Premium PU leather headcovers for drivers, fairway woods, and hybrids.",
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
