import type { Metadata } from "next";
import HomeHero from "@/components/home/HomeHero";
import HomeLineup from "@/components/home/HomeLineup";
import HomeStory from "@/components/home/HomeStory";
import HomeSocial from "@/components/home/HomeSocial";
import HomeContact from "@/components/home/HomeContact";

export const metadata: Metadata = {
  title: "SPICYBEAN — 首页优化版预览",
  robots: { index: false, follow: false },
};

/**
 * 首页优化版预览：/home-v2
 * 正式版首页（/zh-CN）保持不变，确认后再替换。
 */
export default function HomeV2Page() {
  return (
    <main>
      <HomeHero />
      <HomeLineup />
      <HomeStory />
      <HomeSocial />
      <HomeContact />
    </main>
  );
}
