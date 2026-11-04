"use client";

import { useTranslations, useLocale } from "next-intl";
import Image from "next/image";
import { motion } from "framer-motion";
import { Link } from "@/i18n/routing";

/**
 * HomeSocial — 视频 + 买家秀（优化版）
 * 左：系列展示视频；右：买家秀两列瀑布；底部：社群话题与二维码。
 */
export default function HomeSocial() {
  const t = useTranslations();
  const locale = useLocale();

  const buyers = [
    "/images/k4/buyer-1.webp",
    "/images/k4/buyer-2.webp",
    "/images/k4/buyer-3.webp",
    "/images/k4/buyer-4.webp",
  ];

  return (
    <section id="social" className="relative bg-spicy-black py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-4 text-[10px] uppercase tracking-[0.32em] text-spicy-neon/70">On Course</p>
            <h2 className="text-3xl font-bold tracking-tight text-spicy-white md:text-4xl">
              {t("social.title")}
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-[1.9] text-spicy-gray/70">{t("social.subtitle")}</p>
        </div>

        <div className="grid gap-5 lg:grid-cols-2">
          {/* 视频 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.7 }}
            className="relative overflow-hidden border border-white/10 bg-black"
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
            <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent" />
            <span className="absolute left-4 top-4 border border-white/25 bg-black/40 px-3 py-1.5 text-[9px] uppercase tracking-[0.2em] text-white/85 backdrop-blur">
              🎬 {t("social.unboxing")}
            </span>
            <p className="absolute bottom-4 left-4 text-[11px] uppercase tracking-[0.2em] text-white/70">
              K4 · Cyber Skull
            </p>
          </motion.div>

          {/* 买家秀 */}
          <div className="grid grid-cols-2 gap-5">
            {buyers.map((src, i) => (
              <motion.div
                key={src}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className={`relative overflow-hidden border border-white/10 bg-[#101010] ${
                  i % 2 === 0 ? "aspect-[3/4]" : "aspect-[3/4] translate-y-0 sm:translate-y-6"
                }`}
              >
                <Image
                  src={src}
                  alt="SPICYBEAN buyer showcase"
                  fill
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* 社群 */}
        <div className="mt-12 flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-10 md:flex-row">
          <div className="flex flex-wrap items-center justify-center gap-3">
            {["小红书", "Instagram", "微信"].map((name) => (
              <span
                key={name}
                className="border border-white/15 px-5 py-2.5 text-[11px] uppercase tracking-[0.18em] text-spicy-gray/70"
              >
                # {name}
              </span>
            ))}
            <span className="text-[11px] uppercase tracking-[0.2em] text-spicy-neon/70">
              #{t("social.hashtag")}
            </span>
          </div>
          <Link
            href="/products/k4"
            className="inline-flex items-center gap-2 border border-spicy-red/50 px-8 py-3.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-white transition-colors hover:bg-spicy-red"
          >
            {t("series.viewDetail")} <span aria-hidden>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
