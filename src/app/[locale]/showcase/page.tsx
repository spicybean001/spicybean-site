import type { Metadata } from "next";
import ProductShowcase from "@/components/ProductShowcase";

export const metadata: Metadata = {
  title: "SPICYBEAN — Matte Editions｜全系列杆套",
  description:
    "SPICYBEAN 四个系列高尔夫杆头套：K1 黑色经典、K2 标志性白色、K3 辛红、K4 赛博霓虹。韩国设计，红点奖工作室背书。",
  alternates: {
    canonical: "https://spicybean.net/zh-CN/showcase",
  },
  robots: { index: false, follow: false },
};

export default function ShowcasePreviewPage() {
  return <ProductShowcase />;
}
