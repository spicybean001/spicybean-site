"use client";

import { useTranslations, useLocale } from "next-intl";
import Image from "next/image";

/**
 * HomeHero — 首页主视觉（优化版）
 * 保留正式版文案与暗色调性，收敛排布：左侧文字 + 右侧产品主图，
 * 背景改为低透明度球场图 + 细线网格，避免满屏噪点堆叠。
 */
export default function HomeHero() {
  const t = useTranslations();

  return (
    <section className="relative flex min-h-[calc(100vh-64px)] items-center overflow-hidden bg-spicy-black">
      {/* 背景图 */}
      <div className="absolute inset-0">
        <Image
          src="/images/bg-hero-desktop.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-[0.28]"
          style={{ filter: "grayscale(100%) brightness(0.55) contrast(1.15)", objectPosition: "center 62%" }}
        />
        <div className="absolute inset-0 bg-linear-to-r from-spicy-black via-spicy-black/85 to-spicy-black/35" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-linear-to-t from-spicy-black to-transparent" />
      </div>

      {/* 细线网格 */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        {[18, 38, 58, 78].map((p) => (
          <div key={p} className="absolute left-0 h-px w-full bg-white/[0.045]" style={{ top: `${p}%` }} />
        ))}
        {[16.66, 33.33, 50, 66.66, 83.33].map((p) => (
          <div key={p} className="absolute top-0 h-full w-px bg-white/[0.03]" style={{ left: `${p}%` }} />
        ))}
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-16 md:px-10 md:py-20">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          {/* 左：文案 */}
          <div>
            <div className="mb-7 flex items-center gap-3">
              <span className="h-px w-10 bg-spicy-neon/70" />
              <span className="text-[10px] uppercase tracking-[0.34em] text-spicy-neon/80">
                Seoul Design · Est. 2024
              </span>
            </div>

            <h1 className="text-[2.6rem] font-bold leading-[1.06] tracking-tight text-spicy-white md:text-6xl lg:text-[4.4rem]">
              {t("hero.tagline")}
            </h1>

            <p className="mt-7 max-w-lg text-[15px] leading-[1.85] text-spicy-gray/80 md:text-base">
              {t("hero.subtitle")}
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
              <a
                href="#products"
                className="inline-flex items-center justify-center gap-2 bg-spicy-red px-8 py-3.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-white transition-colors hover:bg-spicy-neon"
              >
                {t("hero.cta")}
                <span aria-hidden>→</span>
              </a>
              <a
                href="#about"
                className="inline-flex items-center justify-center gap-2 border border-white/20 px-8 py-3.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-spicy-white transition-colors hover:border-white/60"
              >
                {t("hero.cta_alt")}
              </a>
            </div>

            {/* 三个数据点 */}
            <dl className="mt-14 grid max-w-lg grid-cols-3 gap-4 border-t border-white/10 pt-7">
              {[
                ["04", "Series"],
                ["6万+", "Stitches"],
                ["Red Dot", "Designed"],
              ].map(([v, k]) => (
                <div key={k}>
                  <dt className="text-lg font-semibold text-spicy-white md:text-xl">{v}</dt>
                  <dd className="mt-1 text-[10px] uppercase tracking-[0.2em] text-spicy-gray/60">{k}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* 右：产品主图 */}
          <div className="relative hidden lg:block">
            <div className="relative aspect-square w-full overflow-hidden border border-white/10 bg-[#0E0E0E]">
              <Image
                src="/images/k4/cover.webp"
                alt="SPICYBEAN K4"
                fill
                priority
                sizes="(max-width: 1024px) 0px, 40vw"
                className="object-contain p-[8%]"
              />
            </div>
            <div className="absolute -bottom-5 -left-5 bg-spicy-red px-5 py-3">
              <p className="text-[9px] uppercase tracking-[0.22em] text-white/70">Flagship</p>
              <p className="text-sm font-semibold text-white">K4 · Cyber Skull</p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 md:block">
        <span className="text-[9px] uppercase tracking-[0.3em] text-spicy-gray/40">Scroll</span>
      </div>
    </section>
  );
}
