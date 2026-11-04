"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { motion } from "framer-motion";
import { Link } from "@/i18n/routing";

/**
 * HomeLineup — 首页产品阵容（与 /showcase 同一套语言）
 *
 * 每款一整段：左图右字交替，纸感浅底，细线分隔，只保留
 * 编号 / 色名 / 产品名 / 一句话 / 价格 / 详情，绝不再堆叠标签。
 */

const SERIES = [
  { key: "k1", index: "01", color: "CARBON NOIR", hex: "#1A1A1A", swatch: "#1A1A1A" },
  { key: "k2", index: "02", color: "SIGNATURE WHITE", hex: "#F4F2EE", swatch: "#EDE7E1" },
  { key: "k3", index: "03", color: "SPICY RED", hex: "#B4453C", swatch: "#B4453C" },
  { key: "k4", index: "04", color: "NEON NOIR", hex: "#1C1530", swatch: "#2A2140" },
];

export default function HomeLineup() {
  const t = useTranslations();

  return (
    <section id="products" className="relative bg-[#F7F6F3] text-[#111111]">
      {/* 段落之首：只有一行标题 */}
      <div className="mx-auto max-w-[1280px] px-6 pb-4 pt-20 md:px-12 md:pt-28">
        <div className="flex items-end justify-between gap-8 border-b border-[#DCDAD3] pb-8">
          <div>
            <p className="text-[10px] uppercase tracking-[0.32em] text-[#8A887F]">The Lineup</p>
            <h2 className="mt-4 text-[1.8rem] font-extrabold tracking-[-0.02em] md:text-[2.6rem]">
              {t("series.title")}
            </h2>
          </div>
          <Link
            href="/showcase"
            className="hidden text-[10px] uppercase tracking-[0.22em] text-[#6B6B6B] transition-colors hover:text-[#111111] md:inline"
          >
            Showcase →
          </Link>
        </div>
      </div>

      {SERIES.map((s, i) => (
        <motion.section
          key={s.key}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-12%" }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          className="relative overflow-hidden py-14 md:py-20"
          style={{ backgroundColor: i % 2 === 0 ? "#F7F6F3" : "#EFEEE9" }}
        >
          <div className="mx-auto max-w-[1280px] px-6 md:px-12">
            <div
              className={`grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-14 lg:gap-20 ${
                i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
              }`}
            >
              {/* 图：白画布完整呈现，不加角标不加描边 */}
              <div className="relative aspect-square w-full bg-white">
                <Image
                  src={`/images/${s.key}/cover.webp`}
                  alt={t(`series.${s.key}.name`)}
                  fill
                  sizes="(max-width: 768px) 100vw, 45vw"
                  className="object-contain p-[7%]"
                />
              </div>

              {/* 字 */}
              <div className="flex flex-col">
                <div className="flex items-center gap-4 text-[10px] uppercase tracking-[0.2em] text-[#8A887F]">
                  <span>
                    {s.index}
                    <span className="text-[#DCDAD3]"> / 04</span>
                  </span>
                  <span aria-hidden className="h-px w-8 bg-[#DCDAD3]" />
                  <span className="text-[#111111]">{s.color}</span>
                  <span aria-hidden className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: s.swatch, boxShadow: "inset 0 0 0 1px rgba(0,0,0,0.12)" }} />
                  <span>{s.hex}</span>
                </div>

                <h3 className="mt-6 text-[1.6rem] font-extrabold leading-[1.15] tracking-[-0.02em] md:text-[2.2rem]">
                  {t(`series.${s.key}.name`)}
                </h3>

                <p className="mt-4 max-w-[24rem] text-[13px] leading-[1.9] text-[#6B6B6B] md:text-sm">
                  {t(`series.${s.key}.desc`)}
                </p>

                <div className="mt-9 h-px w-full max-w-[24rem] bg-[#DCDAD3]" />

                <div className="mt-6 flex items-center gap-8">
                  <span className="text-base font-semibold">{t(`series.${s.key}.price`)}</span>
                  <Link
                    href={`/products/${s.key}`}
                    className="group inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] transition-opacity hover:opacity-55"
                  >
                    {t("series.viewDetail")}
                    <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </motion.section>
      ))}
    </section>
  );
}
