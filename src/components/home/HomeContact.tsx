"use client";

import { useTranslations, useLocale } from "next-intl";
import { motion } from "framer-motion";

/**
 * HomeContact — 收尾（与 /showcase 一致的深色落款）
 * 一段话 + 一行字，不做卡片、不堆二维码、不铺渠道块。
 */
export default function HomeContact() {
  const t = useTranslations();
  const locale = useLocale();
  const zh = locale === "zh-CN" || locale === "zh-TW";

  return (
    <section id="contact" className="relative flex min-h-[56vh] items-center justify-center bg-[#0B0B0B] px-6 py-20 text-[#F2F1ED] md:py-28">
      <motion.div
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-12%" }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="text-center"
      >
        <p className="text-[10px] uppercase tracking-[0.3em] text-[#9A9A9A]">Since 2024 · Seoul</p>

        <h2 className="mt-7 max-w-[26rem] text-[1.5rem] font-extrabold leading-[1.35] tracking-[-0.02em] md:max-w-none md:text-[2.1rem]">
          {t("contact.title")}
        </h2>

        <p className="mx-auto mt-5 max-w-[24rem] text-[13px] leading-[1.9] text-[#9A9A9A]">
          {t("contact.subtitle")}
        </p>

        <div className="mx-auto mt-12 h-px w-16 bg-white/20" />

        <div className="mt-12 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-[11px] uppercase tracking-[0.2em]">
          <a href="mailto:hi@spicybean.net" className="transition-opacity hover:opacity-60">
            hi@spicybean.net
          </a>
          <a
            href="https://instagram.com/spicybeangolf"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-opacity hover:opacity-60"
          >
            {t("contact.instagram")}
          </a>
          {zh && (
            <a
              href="https://www.xiaohongshu.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-opacity hover:opacity-60"
            >
              {t("contact.xiaohongshu")}
            </a>
          )}
        </div>
      </motion.div>
    </section>
  );
}
