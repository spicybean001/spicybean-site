import ProductDetail from "@/components/ProductDetail";

const validSeries = ["k1", "k2", "k3", "k4"] as const;
type Series = (typeof validSeries)[number];

export function generateStaticParams() {
  return validSeries.map((series) => ({ series }));
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ series: string }>;
}) {
  const { series } = await params;

  if (!validSeries.includes(series as Series)) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-spicy-black">
        <p className="text-spicy-gray">Product not found</p>
      </div>
    );
  }

  return <ProductDetail series={series} />;
}
