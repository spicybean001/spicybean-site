"use client";

import { useTranslations, useLocale } from "next-intl";
import Image from "next/image";
import { motion } from "framer-motion";

/**
 * HomeStory — 品牌故事（极简版）
 *
 * 只做两件事：一张故事图 + 三段话。
 * 奖项、工艺不再铺成卡片阵列，改用一行行小字陈述（细线分隔），
 * 信息量在，但视觉上不碎。
 */
export default function HomeStory() {
  const t = useTranslations();
  const locale = useLocale();
  const storyImg =
    locale === "ko-KR" ? "/images/brand/story-ko.jpg"
    : locale === "ja-JP" ? "/images/brand/story-ja.jpg"
    : locale === "zh-CN" || locale === "zh-TW" ? "/images/brand/story-zh.jpg"
    : "/images/brand/story-en.jpg";

  const facts = [
    ["Designed by", "DBWD · Red Dot Best of the Best 2012"],
    ["Awards", "Red Dot · iF Gold · DFA Silver"],
    ["Craft", "6万针双层刺绣 · 意大利工艺级PU"],
    ["Fit", "一号木 · 球道木 · 铁木杆 · 推杆"],
  ];

  return (
    <section id="about" className="relative bg-[#0B0B0B] py-20 text-[#F2F1ED] md:py-28">
      <div className="mx-auto max-w-[1280px] px-6 md:px-12">
        <div className="grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          {/* 故事图 */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-12%" }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="relative aspect-[3/4] w-full overflow-hidden"
          >
            <Image src={storyImg} alt="SPICYBEAN" fill sizes="(max-width: 1024px) 100vw, 32vw" className="object-cover opacity-90" />
          </motion.div>

          <div>
            <p className="text-[10px] uppercase tracking-[0.32em] text-[#9A9A9A]">The Story</p>

            <h2 className="mt-6 text-[1.6rem] font-extrabold leading-[1.35] tracking-[-0.02em] md:text-[2.3rem] md:leading-[1.3]">
              {t("about.title")}
            </h2>

            <div className="mt-8 space-y-5 text-[13px] leading-[2] text-[#A8A69F] md:text-sm">
              <p>{t("about.p1")}</p>
              <p>{t("about.p2")}</p>
            </div>

            {/* 事实清单：一行一条，细线分隔，不做卡片 */}
            <dl className="mt-12 border-t border-white/10">
              {facts.map(([k, v]) => (
                <div key={k} className="flex items-baseline justify-between gap-6 border-b border-white/10 py-4">
                  <dt className="text-[9px] uppercase tracking-[0.24em] text-[#6E6E6E]">{k}</dt>
                  <dd className="text-right text-[11px] tracking-[0.06em] text-[#D8D6CF] md:text-xs">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
