import type { Metadata } from "next";
import "../globals.css";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "SPICYBEAN — Golf Headcovers with Attitude",
  description: "Korean design-driven golf headcovers. Born for those who play with style.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "SPICYBEAN",
    description: "Korean design-driven golf headcovers.",
    siteName: "SPICYBEAN",
    type: "website",
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
      <body className="min-h-screen bg-spicy-black text-spicy-white antialiased">
        <NextIntlClientProvider messages={messages}>
          <Header />
          <main>{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
