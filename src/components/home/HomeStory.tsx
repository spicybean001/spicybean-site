"use client";

import { useTranslations, useLocale } from "next-intl";
import Image from "next/image";
import { motion } from "framer-motion";

/**
 * HomeStory — 品牌故事 + DBWD 获奖 + 工艺细节（优化版）
 * 三栏对照版式：左图 / 右文，下方横排奖项，再下横排四格工艺。
 */
export default function HomeStory() {
  const t = useTranslations();
  const locale = useLocale();
  const storyImg =
    locale === "ko-KR" ? "/images/brand/story-ko.jpg"
    : locale === "ja-JP" ? "/images/brand/story-ja.jpg"
    : locale === "zh-CN" || locale === "zh-TW" ? "/images/brand/story-zh.jpg"
    : "/images/brand/story-en.jpg";

  const awards = [
    { icon: "🏆", name: "Red Dot Award", desc: "2012 · Best of the Best" },
    { icon: "🏅", name: "iF Design Award", desc: "2016 · Gold Prize" },
    { icon: "🥈", name: "DFA Design for Asia", desc: "2016 · Silver Award" },
  ];

  const craftKeys = ["material", "stitch", "design", "fit"] as const;

  return (
    <section id="about" className="relative bg-spicy-dark py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        {/* 品牌故事 */}
        <div className="grid items-center gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative aspect-[3/4] w-full overflow-hidden border border-white/10 bg-[#0E0E0E]">
              <Image src={storyImg} alt="SPICYBEAN Brand Story" fill sizes="(max-width: 1024px) 100vw, 35vw" className="object-cover" />
            </div>
            <span className="absolute -right-px top-6 bg-spicy-red px-3 py-1.5 text-[9px] uppercase tracking-[0.2em] text-white">
              Since 2024 · Seoul
            </span>
          </motion.div>

          <div>
            <p className="mb-5 text-[10px] uppercase tracking-[0.32em] text-spicy-neon/70">
              The Story
            </p>
            <h2 className="text-[1.7rem] font-bold leading-[1.35] tracking-tight text-spicy-white md:text-[2.3rem]">
              {t("about.title")}
            </h2>
            <div className="mt-7 space-y-5 text-sm leading-[1.95] text-spicy-gray/75 md:text-[15px]">
              <p>{t("about.p1")}</p>
              <p>{t("about.p2")}</p>
            </div>

            {/* 奖项 */}
            <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-3">
              {awards.map((a) => (
                <div key={a.name} className="border border-white/10 bg-white/[0.02] p-4">
                  <div className="mb-2 text-lg">{a.icon}</div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-spicy-white">{a.name}</p>
                  <p className="mt-1 text-[10px] text-spicy-gray/55">{a.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 工艺细节 + Logo */}
        <div className="mt-16 border-t border-white/10 pt-14">
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="mb-3 text-[10px] uppercase tracking-[0.32em] text-spicy-neon/70">
                Craftsmanship
              </p>
              <h3 className="text-2xl font-bold tracking-tight text-spicy-white md:text-3xl">
                {t("details.title")}
              </h3>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center border border-white/10 bg-black/40 p-1.5">
                <img src="/logo-video.webp" alt="SPICYBEAN" className="h-full w-full object-contain" />
              </div>
              <p className="max-w-[15rem] text-[10px] uppercase leading-relaxed tracking-[0.18em] text-spicy-gray/45">
                Designed by DBWD · Red Dot Best of the Best
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {craftKeys.map((key, i) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group border border-white/10 p-6 transition-colors hover:border-spicy-red/40"
              >
                <span className="text-[10px] tabular-nums text-spicy-neon/50">0{i + 1}</span>
                <h4 className="mt-3 text-sm font-semibold tracking-wide text-spicy-white">
                  {t(`details.${key}.title`)}
                </h4>
                <p className="mt-3 text-[13px] leading-[1.85] text-spicy-gray/65">
                  {t(`details.${key}.desc`)}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
