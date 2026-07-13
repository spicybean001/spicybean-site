import ProductDetail from "@/components/ProductDetail";
import { locales } from "@/i18n/routing";
import { setRequestLocale } from "next-intl/server";

const validSeries = ["k1", "k2", "k3", "k4"] as const;
type Series = (typeof validSeries)[number];

export function generateStaticParams() {
  const params: { locale: string; series: string }[] = [];
  for (const locale of locales) {
    for (const series of validSeries) {
      params.push({ locale, series });
    }
  }
  return params;
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
