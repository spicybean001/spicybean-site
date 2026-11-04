"use client";

import { useTranslations, useLocale } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

/**
 * HomeHero — 首页主视觉（极简版）
 *
 * 设计参照 /showcase：纸感浅底 + 大留白 + 细线 + 克制字号层级。
 * 首页只保留一个主张、一句话、两个入口，不做数据条与标签堆叠。
 */
export default function HomeHero() {
  const t = useTranslations();

  return (
    <section className="relative flex min-h-[86vh] items-center overflow-hidden bg-[#F7F6F3] text-[#111111]">
      {/* 极细网格，几乎不可见，只为给出秩序感 */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-[62%] h-px w-full bg-black/[0.06]" />
        <div className="absolute left-[62%] top-0 h-full w-px bg-black/[0.04]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1280px] px-6 md:px-12">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          {/* 文字 */}
          <div className="py-16 md:py-24">
            <p className="text-[10px] uppercase tracking-[0.32em] text-[#8A887F]">
              Spicybean — Korean Design Headcovers
            </p>

            <h1 className="mt-9 text-[2.4rem] font-extrabold leading-[1.1] tracking-[-0.02em] md:text-[4rem] md:leading-[1.05]">
              {t("hero.tagline")}
            </h1>

            <p className="mt-7 max-w-[26rem] text-[14px] leading-[1.95] text-[#6B6B6B] md:text-[15px]">
              {t("hero.subtitle")}
            </p>

            <div className="mt-12 flex items-center gap-8">
              <Link
                href="/showcase"
                className="group inline-flex items-center gap-3 bg-[#111111] px-8 py-3.5 text-[11px] uppercase tracking-[0.2em] text-[#F7F6F3] transition-colors hover:bg-[#C0433A]"
              >
                {t("hero.cta")}
                <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
              </Link>
              <Link
                href="/#products"
                className="text-[11px] uppercase tracking-[0.2em] text-[#111111] transition-opacity hover:opacity-55"
              >
                {t("hero.cta_alt")}
              </Link>
            </div>
          </div>

          {/* 主视觉：单图，不加边框不加角标 */}
          <div className="relative hidden lg:block">
            <motion.div
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="relative aspect-[4/5] w-full"
            >
              <Image
                src="/images/k4/cover.webp"
                alt="SPICYBEAN K4"
                fill
                priority
                sizes="(max-width: 1024px) 0px, 44vw"
                className="object-contain"
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* 底部细线 + 编号（仅此一处小字） */}
      <div className="absolute inset-x-0 bottom-10 mx-auto hidden max-w-[1280px] items-center justify-between px-12 md:flex">
        <span className="text-[9px] uppercase tracking-[0.3em] text-[#A8A69F]">01 — Hero</span>
        <span className="h-px flex-1 bg-black/[0.07] mx-8" />
        <span className="text-[9px] uppercase tracking-[0.3em] text-[#A8A69F]">Scroll</span>
      </div>
    </section>
  );
}
