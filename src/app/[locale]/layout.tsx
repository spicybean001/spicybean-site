import type { Metadata } from "next";
import "../globals.css";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NewsletterPopup from "@/components/NewsletterPopup";

export const metadata: Metadata = {
  metadataBase: new URL("https://spicybean.net"),
  title: "SPICYBEAN — Golf Headcovers with Attitude",
  description: "Korean design-driven golf headcovers. Born for those who play with style.",
  icons: {
    icon: [
      { url: "/favicon-16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "SPICYBEAN",
    description: "Korean design-driven golf headcovers. Born for those who play with style.",
    siteName: "SPICYBEAN",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "SPICYBEAN — Golf Headcovers with Attitude",
      },
    ],
  },
  other: {
    "msapplication-TileImage": "/og-image.jpg",
    "msapplication-TileColor": "#000000",
  },
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
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
