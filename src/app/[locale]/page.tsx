import Hero from "@/components/Hero";
import Products from "@/components/Products";
import About from "@/components/About";

export default function HomePage() {
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
                "url": "https://spicybean.net/en/products/k1",
                "name": "K1 — Classic Black Pebble Grain"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "url": "https://spicybean.net/en/products/k2",
                "name": "K2 — White Heart"
              },
              {
                "@type": "ListItem",
                "position": 3,
                "url": "https://spicybean.net/en/products/k3",
                "name": "K3 — Warm Red"
              },
              {
                "@type": "ListItem",
                "position": 4,
                "url": "https://spicybean.net/en/products/k4",
                "name": "K4 — Neon Noir Cyber Skull Limited Edition"
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
