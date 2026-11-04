"use client";

import { useTranslations, useLocale } from "next-intl";
import Image from "next/image";
import { motion } from "framer-motion";
import { Link } from "@/i18n/routing";

/**
 * HomeLineup — 首页产品阵容（优化版）
 * 交错大卡：每款占一整行，左图右字 / 右图左字交替，
 * 白底方图完整呈现，信息密度高于正式版四宫格，但不再裁切产品。
 */

const SERIES: { key: string; index: string; color: string; hex: string; image: string; accent: string }[] = [
  { key: "k1", index: "01", color: "CARBON NOIR", hex: "#1A1A1A", image: "/images/k1/cover.webp", tmpl: "/images/k1/img-5.webp", accent: "#C9C9C9" },
  { key: "k2", index: "02", color: "SIGNATURE WHITE", hex: "#F4F2EE", image: "/images/k2/cover.webp", tmpl: "/images/k2/img-5.webp", accent: "#EED9D3" },
  { key: "k3", index: "03", color: "SPICY RED", hex: "#B4453C", image: "/images/k3/cover.webp", tmpl: "/images/k3/img-5.webp", accent: "#E8A79D" },
  { key: "k4", index: "04", color: "NEON NOIR", hex: "#2A2140", image: "/images/k4/cover.webp", tmpl: "/images/k4/img-5.webp", accent: "#C4A6FF" },
];

export default function HomeLineup() {
  const t = useTranslations();
  const locale = useLocale();

  return (
    <section id="products" className="relative bg-spicy-black py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        {/* 标题 */}
        <div className="mb-14 flex flex-col gap-5 border-b border-white/10 pb-10 md:mb-16 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-4 text-[10px] uppercase tracking-[0.32em] text-spicy-neon/70">
              The Lineup
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-spicy-white md:text-5xl">
              {t("series.title")}
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-[1.9] text-spicy-gray/70">
            {t("series.subtitle")}
          </p>
        </div>

        {/* 交错大卡 */}
        <div className="space-y-5">
          {SERIES.map((s, i) => (
            <motion.article
              key={s.key}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className={`group grid overflow-hidden border border-white/10 bg-[#0C0C0C] transition-colors hover:border-white/25 md:grid-cols-[1.05fr_1fr] ${
                i % 2 ? "md:[&>*:first-child]:order-2" : ""
              }`}
            >
              {/* 主图 */}
              <div className="relative aspect-[4/3] bg-[#101010] md:aspect-auto md:min-h-[320px]">
                <Image
                  src={s.image}
                  alt={t(`series.${s.key}.name`)}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-contain p-6 transition-transform duration-700 group-hover:scale-[1.03]"
                />
                <span className="absolute left-0 top-0 flex h-9 w-9 items-center justify-center bg-white text-[10px] font-semibold text-black">
                  {s.index}
                </span>
              </div>

              {/* 文案 */}
              <div className="flex flex-col justify-center p-7 md:p-10 lg:p-12">
                <div className="mb-5 flex items-center gap-3">
                  <span
                    className="inline-block h-2.5 w-2.5 rounded-full"
                    style={{ backgroundColor: s.hex, boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.25)" }}
                  />
                  <span className="text-[9px] uppercase tracking-[0.24em] text-spicy-gray/60">
                    {s.color} · {s.hex}
                  </span>
                </div>

                <h3 className="text-2xl font-bold leading-tight text-spicy-white md:text-3xl">
                  {t(`series.${s.key}.name`)}
                </h3>
                <p
                  className="mt-4 max-w-md text-sm leading-[1.9]"
                  style={{ color: s.accent, opacity: 0.75 }}
                >
                  {t(`series.${s.key}.desc`)}
                </p>

                <div className="mt-8 flex items-center justify-between gap-4 border-t border-white/10 pt-6">
                  <span className="text-base font-semibold text-spicy-neon">
                    {t(`series.${s.key}.price`)}
                  </span>
                  <Link
                    href={`/products/${s.key}`}
                    className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.22em] text-spicy-gray transition-colors hover:text-spicy-white"
                  >
                    {t("series.viewDetail")}
                    <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* 渠道 */}
        <div className="mt-12 flex flex-col items-center gap-5 border-t border-white/10 pt-10 md:flex-row md:justify-between">
          <p className="text-[10px] uppercase tracking-[0.24em] text-spicy-gray/50">
            {locale === "zh-CN" || locale === "zh-TW"
              ? "合作平台"
              : locale === "ko-KR"
                ? "파트너 플랫폼"
                : locale === "ja-JP"
                  ? "取り扱いプラットフォーム"
                  : "Available on"}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {(locale === "zh-CN" || locale === "zh-TW" || locale === "th-TH") && (
              <a
                href="https://spicybean.m.tmall.com"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-white/15 px-6 py-2.5 text-[11px] uppercase tracking-[0.18em] text-spicy-gray transition-colors hover:border-white/50 hover:text-spicy-white"
              >
                {t("shop.tmall")} ↗
              </a>
            )}
            {(locale === "zh-CN" || locale === "zh-TW") && (
              <a
                href="https://mall.jd.com/index-91376156.html"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-white/15 px-6 py-2.5 text-[11px] uppercase tracking-[0.18em] text-spicy-gray transition-colors hover:border-white/50 hover:text-spicy-white"
              >
                {t("shop.jd")} ↗
              </a>
            )}
            {locale === "ko-KR" && (
              <a
                href="https://link.coupang.com/a/f2GrHhLK1Y"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-white/15 px-6 py-2.5 text-[11px] uppercase tracking-[0.18em] text-spicy-gray transition-colors hover:border-white/50 hover:text-spicy-white"
              >
                {t("shop.coupang")} ↗
              </a>
            )}
            <Link
              href="/showcase"
              className="border border-spicy-neon/40 px-6 py-2.5 text-[11px] uppercase tracking-[0.18em] text-spicy-neon transition-colors hover:bg-spicy-neon hover:text-black"
            >
              Showcase →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
