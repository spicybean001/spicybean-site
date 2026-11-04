"use client";

import { useTranslations, useLocale } from "next-intl";
import Image from "next/image";
import { motion } from "framer-motion";

/**
 * HomeSocial — 球场实拍 + 视频（极简版）
 * 一屏两件事：左边一段视频，右边一张大图。不铺四宫格，不做话题标签墙。
 */
export default function HomeSocial() {
  const t = useTranslations();
  const locale = useLocale();
  const zh = locale === "zh-CN" || locale === "zh-TW";

  return (
    <section id="social" className="relative bg-[#F7F6F3] py-20 text-[#111111] md:py-28">
      <div className="mx-auto max-w-[1280px] px-6 md:px-12">
        <div className="flex items-end justify-between gap-8 border-b border-[#DCDAD3] pb-8">
          <div>
            <p className="text-[10px] uppercase tracking-[0.32em] text-[#8A887F]">On Course</p>
            <h2 className="mt-4 text-[1.8rem] font-extrabold tracking-[-0.02em] md:text-[2.4rem]">
              {t("social.title")}
            </h2>
          </div>
          <p className="hidden max-w-[18rem] text-[12px] leading-[1.9] text-[#6B6B6B] md:block">
            {t("social.subtitle")}
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 md:gap-8">
          {/* 视频 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-12%" }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className="relative aspect-[4/5] overflow-hidden bg-black"
          >
            <video
              className="h-full w-full object-cover"
              src="/videos/k4-unboxing.mp4"
              poster="/images/k4/video-cover.jpg"
              autoPlay
              loop
              muted
              playsInline
            />
          </motion.div>

          {/* 大图 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-12%" }}
            transition={{ duration: 0.85, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="relative aspect-[4/5] overflow-hidden bg-[#EFEEE9]"
          >
            <Image
              src="/images/k4/buyer-1.webp"
              alt="SPICYBEAN on course"
              fill
              sizes="(max-width: 768px) 100vw, 45vw"
              className="object-cover"
            />
          </motion.div>
        </div>

        <div className="mt-10 flex items-center justify-between border-t border-[#DCDAD3] pt-6">
          <span className="text-[10px] uppercase tracking-[0.24em] text-[#8A887F]">
            #{t("social.hashtag")}
          </span>
          <span className="text-[10px] uppercase tracking-[0.24em] text-[#8A887F]">
            {zh ? "小红书 · Instagram" : "Instagram · Xiaohongshu"}
          </span>
        </div>
      </div>
    </section>
  );
}
