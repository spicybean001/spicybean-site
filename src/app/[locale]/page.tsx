import Hero from "@/components/Hero";
import Products from "@/components/Products";
import About from "@/components/About";
import { localeUrl } from "@/i18n/urls";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return (
    <>
      {/* Structured Data: BreadcrumbList (Home) */}
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
              }
            ]
          })
        }}
      />

      {/* Structured Data: ItemList (Products on homepage) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": "SPICYBEAN Golf Headcover Series",
            "description": "Premium Korean design-driven golf headcovers",
            "numberOfItems": 4,
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "url": localeUrl(locale, "/products/k1"),
                "name": "K1 — Classic Black Pebble Grain"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "url": localeUrl(locale, "/products/k2"),
                "name": "K2 — Signature White"
              },
              {
                "@type": "ListItem",
                "position": 3,
                "url": localeUrl(locale, "/products/k3"),
                "name": "K3 — Spicy Red"
              },
              {
                "@type": "ListItem",
                "position": 4,
                "url": localeUrl(locale, "/products/k4"),
                "name": "K4 — Cyber Skull Limited Edition"
              }
            ]
          })
        }}
      />

      <Hero />
      <Products />
      <About />
    </>
  );
}
