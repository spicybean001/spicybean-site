"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

import { Link } from "@/i18n/routing";
import { PALETTE, SERIES } from "./showcase/palette";

/**
 * ProductShowcase — 2026-11-04 全新版本
 *
 * 设计要点：
 * 1. 统一浅底纸感（#F7F6F3），产品图完整呈现（object-contain），不裁切不铺满
 * 2. 版式：左「图」右「字」，大留白，细线分隔，极少用色
 * 3. 字号层级克制：标签 10-11px 正字距，产品名 clamp 但不过大（最大 4.5rem）
 * 4. 移动端整屏改为 auto 高度，避免地址栏吃掉内容
 * 5. 视差幅度极小（±3%），避免图与字错位
 */

function SectionLabel({
  index,
  total,
  colorName,
  hex,
  swatch,
}: {
  index: string;
  total: string;
  colorName: string;
  hex: string;
  swatch: string;
}) {
  return (
    <div
      className="flex items-center gap-4 text-[10px] uppercase"
      style={{ letterSpacing: "0.2em", color: PALETTE.inkSoft }}
    >
      <span>
        {index}
        <span style={{ color: PALETTE.hairline }}> / </span>
        {total}
      </span>
      <span
        aria-hidden
        className="h-px w-8"
        style={{ backgroundColor: PALETTE.hairline }}
      />
      <span style={{ color: PALETTE.ink }}>{colorName}</span>
      <span
        aria-hidden
        className="inline-block h-2.5 w-2.5 rounded-full"
        style={{
          backgroundColor: swatch,
          boxShadow: `inset 0 0 0 1px rgba(0,0,0,0.12)`,
        }}
      />
      <span style={{ color: PALETTE.inkSoft }}>{hex}</span>
    </div>
  );
}

function SeriesRow({
  item,
  i,
}: {
  item: (typeof SERIES)[number];
  i: number;
}) {
  const t = useTranslations();
  const reversed = i % 2 === 1;

  return (
    <section
      className="relative w-full overflow-hidden py-14 md:py-20"
      style={{
        backgroundColor: i % 2 === 0 ? PALETTE.paper : PALETTE.paperAlt,
        color: PALETTE.ink,
      }}
    >
      <div className="mx-auto max-w-[1280px] px-6 md:px-12">
        <div
          className={`grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-14 lg:gap-20 ${
            reversed ? "md:[&>*:first-child]:order-2" : ""
          }`}
        >
          {/* 图片：完整呈现，正方形画布，细边框 */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-12%" }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div
              className="relative aspect-square w-full overflow-hidden"
              style={{ backgroundColor: "#FFFFFF" }}
            >
              <img
                src={item.image.replace(".jpg",".webp")}
                alt={t(`series.${item.key}.name`)}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-contain p-[6%]"
              />
            </div>
            {/* 角标：编号 */}
            <span
              className="absolute -left-px -top-px flex h-10 w-10 items-center justify-center text-[10px]"
              style={{
                backgroundColor: PALETTE.ink,
                color: PALETTE.paper,
                letterSpacing: "0.1em",
              }}
            >
              {item.index}
            </span>
          </motion.div>

          {/* 文字 */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-12%" }}
            transition={{
              duration: 0.9,
              delay: 0.08,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="flex flex-col"
          >
            <SectionLabel
              index={item.index}
              total={String(SERIES.length).padStart(2, "0")}
              colorName={item.colorName}
              hex={item.hex}
              swatch={item.swatch}
            />

            <h2
              className="mt-6 font-extrabold leading-[1.05]"
              style={{
                fontSize: "clamp(1.75rem, 3.6vw, 3.25rem)",
                letterSpacing: "-0.02em",
              }}
            >
              {t(`series.${item.key}.name`)}
            </h2>

            <p
              className="mt-4 max-w-[26rem] text-[13px] leading-[1.9] md:text-sm"
              style={{ color: PALETTE.inkSoft }}
            >
              {t(`series.${item.key}.desc`)}
            </p>

            <div
              className="mt-8 h-px w-full max-w-[26rem]"
              style={{ backgroundColor: PALETTE.hairline }}
            />

            <div className="mt-6 flex items-center gap-8">
              <span
                className="text-base font-semibold"
                style={{ letterSpacing: "0.01em" }}
              >
                {t(`series.${item.key}.price`)}
              </span>
              <Link
                href={`/products/${item.key}`}
                className="group inline-flex items-center gap-2 text-[11px] uppercase transition-opacity hover:opacity-60"
                style={{ letterSpacing: "0.2em", color: PALETTE.ink }}
              >
                {t("series.viewDetail")}
                <span className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default function ProductShowcase() {
  const t = useTranslations();

  return (
    <div style={{ backgroundColor: PALETTE.paper, color: PALETTE.ink }}>
      {/* ── 开篇 ───────────────────────────────── */}
      <section className="relative flex min-h-[74vh] items-center justify-center px-6 pb-16 pt-32 md:min-h-[80vh] md:pb-20 md:pt-32">
        <div className="mx-auto max-w-[820px] text-center">
          <p
            className="text-[10px] uppercase"
            style={{ letterSpacing: "0.32em", color: PALETTE.inkSoft }}
          >
            Spicybean — Korean Design Headcovers
          </p>

          <h1
            className="mt-8 font-extrabold leading-[1.08]"
            style={{
              fontSize: "clamp(2rem, 5vw, 4.25rem)",
              letterSpacing: "-0.025em",
            }}
          >
            {t("series.title")}
          </h1>

          <p
            className="mx-auto mt-7 max-w-[30rem] text-[13px] leading-[1.95] md:text-sm"
            style={{ color: PALETTE.inkSoft }}
          >
            {t("series.subtitle")}
          </p>

          {/* 色卡条：细线 + 圆点 + 编号 */}
          <div
            className="mx-auto mt-12 flex max-w-[520px] items-center justify-center gap-8 md:gap-12"
            aria-hidden
          >
            {SERIES.map((s, idx) => (
              <div key={s.key} className="flex flex-col items-center gap-3">
                <span
                  className="block h-6 w-6 rounded-full md:h-7 md:w-7"
                  style={{
                    backgroundColor: s.swatch,
                    boxShadow: "inset 0 0 0 1px rgba(0,0,0,0.12)",
                  }}
                />
                <span
                  className="text-[9px] uppercase"
                  style={{ letterSpacing: "0.16em", color: PALETTE.inkSoft }}
                >
                  {s.index}
                  {idx === SERIES.length - 1 ? "" : ""}
                </span>
                <span
                  className="text-[8px] uppercase"
                  style={{ letterSpacing: "0.12em", color: "#A8A69F" }}
                >
                  {s.colorName}
                </span>
              </div>
            ))}
          </div>

          <div
            className="mx-auto mt-12 h-10 w-px"
            style={{ backgroundColor: PALETTE.hairline }}
          />
        </div>
      </section>

      {/* ── 四款产品 ───────────────────────────── */}
      {SERIES.map((item, i) => (
        <SeriesRow key={item.key} item={item} i={i} />
      ))}

      {/* ── 收尾 ───────────────────────────────── */}
      <section
        className="relative flex min-h-[56vh] items-center justify-center px-6 py-20 md:py-28"
        style={{ backgroundColor: PALETTE.dark, color: "#F2F1ED" }}
      >
        <div className="text-center">
          <p
            className="text-[10px] uppercase"
            style={{ letterSpacing: "0.3em", color: PALETTE.darkSoft }}
          >
            Since 2024 · Seoul
          </p>

          <p
            className="mt-8 font-extrabold leading-none"
            style={{ fontSize: "clamp(2.25rem, 6vw, 5rem)", letterSpacing: "-0.03em" }}
          >
            SPICYBEAN
          </p>

          <p
            className="mt-6 text-[10px] uppercase"
            style={{ letterSpacing: "0.3em", color: PALETTE.darkSoft }}
          >
            Golf Headcover · Korean Design
          </p>

          <div
            className="mx-auto mt-12 h-px w-16"
            style={{ backgroundColor: "#2A2A2A" }}
          />

          <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/products/k4"
              className="inline-flex items-center justify-center px-8 py-3.5 text-[11px] uppercase transition-colors"
              style={{
                letterSpacing: "0.2em",
                backgroundColor: "#F2F1ED",
                color: PALETTE.dark,
              }}
            >
              {t("series.viewDetail")}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
