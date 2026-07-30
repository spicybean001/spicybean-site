"use client";

import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";

export default function Footer() {
  const t = useTranslations();
  const locale = useLocale();

  return (
    <footer id="contact" className="border-t border-spicy-red/20 bg-spicy-dark">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <Link href={`/${locale}`} className="flex items-center gap-3">
              <img
                src="/logo.png"
                alt="SPICYBEAN"
                className="h-7 w-auto"
              />
              <span className="text-xl font-bold tracking-wider uppercase">
                <span className="text-gradient">SPICYBEAN</span>
              </span>
            </Link>
            <p className="mt-4 text-sm text-spicy-gray leading-relaxed">
              {t("footer.designed")}
            </p>
          </div>

          {/* Shop Links — locale-aware */}
          <div>
            <h3 className="text-sm font-semibold tracking-widest uppercase text-spicy-white mb-4">
              {t("shop.title")}
            </h3>
            <ul className="space-y-3">
              {locale === "zh-CN" && (
                <>
                  <li>
                    <a
                      href="https://spicybean.m.tmall.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-spicy-gray hover:text-spicy-neon transition-colors"
                    >
                      {t("shop.tmall")} ↗
                    </a>
                  </li>
                  <li>
                    <span className="text-sm text-spicy-gray/40">
                      {t("shop.jd")} 🚧
                    </span>
                  </li>
                </>
              )}
              {locale === "en" && (
                <li>
                  <span className="text-sm text-spicy-gray/40">
                    {t("shop.amazon")} 🚧
                  </span>
                </li>
              )}
              {locale === "ko-KR" && (
                <>
                  <li>
                    <span className="text-sm text-spicy-gray/40">
                      {t("shop.coupang")} 🚧
                    </span>
                  </li>
                  <li>
                    <span className="text-sm text-spicy-gray/40">
                      {t("shop.naver")} 🚧
                    </span>
                  </li>
                </>
              )}
              {locale === "ja-JP" && (
                <>
                  <li>
                    <span className="text-sm text-spicy-gray/40">
                      {t("shop.rakuten")} 🚧
                    </span>
                  </li>
                  <li>
                    <span className="text-sm text-spicy-gray/40">
                      {t("shop.amazonJp")} 🚧
                    </span>
                  </li>
                </>
              )}
            </ul>
          </div>

          {/* Contact + Social QR */}
          <div>
            <h3 className="text-sm font-semibold tracking-widest uppercase text-spicy-white mb-4">
              {t("contact.title")}
            </h3>
            <ul className="space-y-3">
              <li className="text-sm text-spicy-gray">
                <span className="text-spicy-white">{t("contact.email")}:</span>{" "}
                hi@spicybean.net
              </li>
              <li>
                <a
                  href="https://xhslink.com/m/2zYSBhgCr8M"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-spicy-gray hover:text-spicy-neon transition-colors"
                >
                  {t("contact.xiaohongshu")} ↗
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/spicybeangolf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-spicy-gray hover:text-spicy-neon transition-colors"
                >
                  {t("contact.instagram")} ↗
                </a>
              </li>
            </ul>

            {/* Xiaohongshu QR Code */}
            <div className="mt-6">
              <p className="text-xs tracking-widest uppercase text-spicy-gray/50 mb-3">
                {t("contact.xiaohongshu")}
              </p>
              <div className="w-24 h-24 rounded-sm border border-white/10 bg-white p-1.5 overflow-hidden">
                <img
                  src="/images/brand/xiaohongshu-qr.png"
                  alt="SPICYBEAN 小红书"
                  className="w-full h-full object-contain"
                  loading="lazy"
                  width="330"
                  height="330"
                />
              </div>
              <p className="text-[10px] text-spicy-gray/40 mt-1">
                {locale === "zh-CN" ? "扫码关注小红书" : locale === "ko-KR" ? "샤오홍슈 팔로우" : locale === "ja-JP" ? "小紅書をフォロー" : "Scan to follow on Xiaohongshu"}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-spicy-red/10 text-center">
          <p className="text-xs text-spicy-gray/60">{t("footer.rights")}</p>
        </div>
      </div>
    </footer>
  );
}
