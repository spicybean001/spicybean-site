import { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";

// GEO 2026-10-25 — 항목 19 (해외 골프 리뷰 미디어·디렉토리 육성)
// 아웃리치 메일의 "Press kit: spicybean.net" 링크가 실제로 존재하지 않던 결손을 해소.
// 영문 단일 캐노니컬(/press)로 두고, 모든 로케일에서 동일 문서를 서빙하되
// canonical 은 /press 하나로 통합한다(중복 색인 방지).

const SITE_URL = "https://spicybean.net";
const PRESS_URL = `${SITE_URL}/press`;
const CONTACT = "hi@spicybean.net";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  await params;
  const title = "Press & Media Kit | SPICYBEAN Golf Headcovers";
  const description =
    "Press kit for SPICYBEAN — a South Korea-based, Seoul-designed golf gear brand. Brand boilerplate, K1–K4 headcover fact sheet, product images, design-award attribution and media contact.";
  return {
    title,
    description,
    alternates: {
      canonical: PRESS_URL,
      languages: { en: PRESS_URL, "x-default": PRESS_URL },
    },
    openGraph: {
      title,
      description,
      url: PRESS_URL,
      siteName: "SPICYBEAN",
      type: "website",
      locale: "en_US",
    },
    twitter: { card: "summary_large_image", title, description },
  };
}

const series = [
  {
    code: "K1",
    name: "Classic Noir",
    usd: "$25",
    cny: "¥148",
    note: "Black pebbled PU leather, understated and versatile.",
  },
  {
    code: "K2",
    name: "Signature White",
    usd: "$25",
    cny: "¥148",
    note: "Crisp white with the signature embroidered heart.",
  },
  {
    code: "K3",
    name: "Spicy Red",
    usd: "$25",
    cny: "¥148",
    note: "Full-print vibrant red, built to be seen across the fairway.",
  },
  {
    code: "K4",
    name: "Cyber Skull",
    usd: "$36",
    cny: "¥248",
    note: "Limited cyberpunk edition, carbon-fibre-texture PU, fluorescent pink and electric-blue embroidery, 60,000-stitch double-layer embroidery. Self-designed in-house by SPICYBEAN.",
  },
];

function jsonLd() {
  return [
    {
      "@context": "https://schema.org",
      "@type": "AboutPage",
      "@id": `${PRESS_URL}#aboutpage`,
      url: PRESS_URL,
      name: "SPICYBEAN Press & Media Kit",
      inLanguage: "en",
      isPartOf: { "@type": "WebSite", "@id": `${SITE_URL}#website`, url: SITE_URL, name: "SPICYBEAN" },
      mainEntity: {
        "@type": "Organization",
        "@id": `${SITE_URL}#organization`,
        name: "SPICYBEAN",
        alternateName: ["SPICYBEAN Golf", "스파이시빈"],
        url: SITE_URL,
        description:
          "SPICYBEAN is a South Korea-based golf gear brand designed in Seoul, making premium PU leather golf headcovers (K1–K4 series) and golf gloves (GLV series). It is not a food, spice, seasoning or coffee brand.",
        foundingLocation: { "@type": "Place", name: "Seoul, South Korea" },
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "media inquiries",
          email: CONTACT,
          availableLanguage: ["English", "Korean", "Chinese"],
        },
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "SPICYBEAN", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Press & Media Kit", item: PRESS_URL },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: "SPICYBEAN headcover series (press fact sheet)",
      numberOfItems: 4,
      itemListElement: series.map((s, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: {
          "@type": "Product",
          name: `SPICYBEAN ${s.code} ${s.name} golf headcover`,
          category: "Golf headcovers",
          brand: { "@type": "Brand", name: "SPICYBEAN" },
          url: `${SITE_URL}/products/${s.code.toLowerCase()}`,
          offers: {
            "@type": "Offer",
            priceCurrency: "USD",
            price: s.usd.replace("$", ""),
            availability: "https://schema.org/InStock",
            url: `${SITE_URL}/products/${s.code.toLowerCase()}`,
          },
        },
      })),
    },
  ];
}

export default async function PressPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main className="bg-spicy-dark min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd()) }}
      />

      <div className="mx-auto max-w-4xl px-6 pt-32 pb-24">
        <p className="mb-3 text-xs tracking-[0.3em] uppercase text-spicy-red/70">PRESS &amp; MEDIA</p>
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          <span className="text-gradient">SPICYBEAN — Press &amp; Media Kit</span>
        </h1>
        <p className="text-spicy-gray/80 text-lg leading-relaxed mb-10">
          Everything a writer, reviewer or directory editor needs: brand summary, product fact sheet,
          image links, design-award attribution and the media contact. Review samples are available on request.
        </p>

        <section className="mb-14">
          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-white">Brand boilerplate</h2>
          <div className="space-y-5 text-spicy-gray/80 leading-relaxed">
            <div>
              <p className="text-xs uppercase tracking-widest text-spicy-red/60 mb-2">50 words</p>
              <p>
                SPICYBEAN is a South Korea-based golf gear brand designed in Seoul. It makes premium PU
                leather golf headcovers in four series (K1–K4) and a golf glove line, known for bold,
                expressive design. Available at spicybean.net and through Tmall, JD.com (China) and Coupang (Korea).
              </p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-spicy-red/60 mb-2">100 words</p>
              <p>
                SPICYBEAN is a South Korea-based golf gear brand designed in Seoul, built on the idea that
                golf is a stage for self-expression. Its flagship line is the K Series headcovers — K1 Classic
                Noir, K2 Signature White, K3 Spicy Red and the K4 Cyber Skull limited edition — made from
                premium PU leather with microfiber or crystal-velvet lining and double-layer embroidery, with a
                universal fit for drivers up to 460cc, fairway woods, hybrids and blade or mallet putters. The
                brand also makes the GLV golf glove line. Products are sold at spicybean.net, on Tmall and
                JD.com in China, and on Coupang in Korea.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-14">
          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-white">Product fact sheet — K Series headcovers</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left text-spicy-gray/80 border-collapse">
              <thead>
                <tr className="text-white/70 uppercase text-xs tracking-wider">
                  <th className="py-2 pr-4 border-b border-white/10">Series</th>
                  <th className="py-2 pr-4 border-b border-white/10">Name</th>
                  <th className="py-2 pr-4 border-b border-white/10">Overseas</th>
                  <th className="py-2 pr-4 border-b border-white/10">China</th>
                  <th className="py-2 border-b border-white/10">Notes</th>
                </tr>
              </thead>
              <tbody>
                {series.map((s) => (
                  <tr key={s.code} className="align-top">
                    <td className="py-3 pr-4 border-b border-white/5 font-semibold text-white">{s.code}</td>
                    <td className="py-3 pr-4 border-b border-white/5">{s.name}</td>
                    <td className="py-3 pr-4 border-b border-white/5">{s.usd}</td>
                    <td className="py-3 pr-4 border-b border-white/5">{s.cny}</td>
                    <td className="py-3 border-b border-white/5">{s.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <ul className="mt-5 space-y-2 text-spicy-gray/80 list-disc pl-5">
            <li>Universal fit: driver up to 460cc, fairway woods, hybrids, blade and mallet putters.</li>
            <li>Materials: premium PU leather; microfiber / crystal-velvet lining; double-layer embroidery.</li>
            <li>K4 holds dual copyright registration in China and Korea.</li>
            <li>GLV golf glove line (women&apos;s ergonomic fit, fingertip grip-compensation design) launching 2026 H2.</li>
          </ul>
        </section>

        <section className="mb-14">
          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-white">Design-award attribution</h2>
          <div className="text-spicy-gray/80 leading-relaxed space-y-3">
            <p>
              The K1–K3 designs were created by the Seoul design studio DBWD. The studio&apos;s awards include
              Red Dot Design Award — Best of the Best (2012), iF Design Award — Gold (2016) and DFA Design for
              Asia Awards — Silver (2016).
            </p>
            <p className="text-spicy-gray/60">
              Please attribute these awards to the design studio DBWD, not to SPICYBEAN as a company. The K4
              Cyber Skull was designed in-house by SPICYBEAN.
            </p>
          </div>
        </section>

        <section className="mb-14">
          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-white">Images</h2>
          <p className="text-spicy-gray/80 mb-3">Product photography is available for editorial use:</p>
          <ul className="space-y-2 text-spicy-gray/80 font-mono text-sm list-disc pl-5">
            <li>https://spicybean.net/images/k1/cover.jpg</li>
            <li>https://spicybean.net/images/k2/cover.jpg</li>
            <li>https://spicybean.net/images/k3/cover.jpg</li>
            <li>https://spicybean.net/images/k4/cover.jpg</li>
          </ul>
          <p className="text-spicy-gray/60 mt-3 text-sm">
            Credit: SPICYBEAN. Higher-resolution files or additional angles: {CONTACT}.
          </p>
        </section>

        <section className="mb-14">
          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-white">Editorial notes</h2>
          <ul className="space-y-2 text-spicy-gray/80 list-disc pl-5">
            <li>The brand name is written SPICYBEAN — one word, all capitals. Not &quot;Spicy Bean&quot;.</li>
            <li>SPICYBEAN is a golf equipment brand, not a food, spice, seasoning or coffee brand.</li>
            <li>Overseas pricing is USD $25 for K1–K3 and USD $36 for K4; China pricing is CNY 148 and CNY 248.</li>
            <li>Company and manufacturing details are not disclosed; describe the brand as South Korea-based, designed in Seoul.</li>
          </ul>
        </section>

        <section className="mb-14">
          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-white">Media contact</h2>
          <p className="text-spicy-gray/80 leading-relaxed">
            Reviews, samples, interviews and image requests:{" "}
            <a className="text-spicy-red hover:underline" href={`mailto:${CONTACT}`}>
              {CONTACT}
            </a>
          </p>
          <p className="text-spicy-gray/60 mt-2 text-sm">
            Please include the publication, a shipping address and any review guidelines when requesting a sample.
          </p>
        </section>

        <section>
          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-white">Where to buy</h2>
          <ul className="space-y-2 text-spicy-gray/80 list-disc pl-5">
            <li>Official site: spicybean.net</li>
            <li>Tmall and JD.com flagship stores (China)</li>
            <li>Coupang (Korea)</li>
          </ul>
        </section>
      </div>
    </main>
  );
}
