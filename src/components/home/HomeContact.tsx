"use client";

import { useTranslations, useLocale } from "next-intl";
import { Link } from "@/i18n/routing";

/**
 * HomeContact — 采购/合作引导（优化版）
 * 正式版把联系方式分散在 Footer，这里单独成段，承接批发与合作需求。
 */
export default function HomeContact() {
  const t = useTranslations();
  const locale = useLocale();
  const zh = locale === "zh-CN" || locale === "zh-TW";

  const channels = [
    { label: t("contact.email"), value: "hi@spicybean.net", href: "mailto:hi@spicybean.net" },
    { label: t("contact.xiaohongshu"), value: zh ? "SPICYBEAN 高尔夫" : "SPICYBEAN Golf", href: "https://www.xiaohongshu.com/user/profile/5f9e0d2e0000000001004b6e" },
    { label: t("contact.instagram"), value: "@spicybeangolf", href: "https://instagram.com/spicybeangolf" },
  ];

  return (
    <section id="contact" className="relative bg-spicy-dark py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid items-center gap-10 border border-white/10 p-8 md:grid-cols-[1.2fr_1fr] md:p-12">
          <div>
            <p className="mb-4 text-[10px] uppercase tracking-[0.32em] text-spicy-neon/70">
              Wholesale & Partnership
            </p>
            <h2 className="text-2xl font-bold leading-snug tracking-tight text-spicy-white md:text-4xl">
              {t("contact.title")}
            </h2>
            <p className="mt-5 max-w-md text-sm leading-[1.9] text-spicy-gray/70">
              {t("contact.subtitle")}
            </p>

            <div className="mt-9 grid grid-cols-1 gap-3 sm:grid-cols-3">
              {channels.map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  target={c.href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className="group border border-white/10 px-4 py-4 transition-colors hover:border-white/40"
                >
                  <p className="text-[9px] uppercase tracking-[0.2em] text-spicy-gray/50">{c.label}</p>
                  <p className="mt-2 text-[12px] text-spicy-white/85 group-hover:text-spicy-neon">{c.value}</p>
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-center justify-center gap-4 border-white/10 md:border-l">
            <div className="flex h-32 w-32 items-center justify-center border border-white/10 bg-black/40 p-2">
              <img src="/images/brand/xiaohongshu-qr.png" alt="小红书" className="h-full w-full object-contain" />
            </div>
            <p className="text-[10px] uppercase tracking-[0.2em] text-spicy-gray/50">{t("contact.follow")}</p>
            <Link
              href="/about"
              className="mt-1 text-[11px] uppercase tracking-[0.2em] text-spicy-neon/80 hover:text-spicy-neon"
            >
              {t("nav.about")} →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
