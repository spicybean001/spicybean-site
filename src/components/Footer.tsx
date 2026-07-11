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
            <Link
              href={`/${locale}`}
              className="text-xl font-bold tracking-wider uppercase"
            >
              <span className="text-gradient">SPICYBEAN</span>
            </Link>
            <p className="mt-4 text-sm text-spicy-gray leading-relaxed">
              {t("footer.designed")}
            </p>
          </div>

          {/* Shop Links */}
          <div>
            <h3 className="text-sm font-semibold tracking-widest uppercase text-spicy-white mb-4">
              {t("shop.title")}
            </h3>
            <ul className="space-y-3">
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
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-spicy-gray hover:text-spicy-neon transition-colors"
                >
                  {t("shop.coupang")}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-spicy-gray hover:text-spicy-neon transition-colors"
                >
                  {t("shop.amazon")}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold tracking-widest uppercase text-spicy-white mb-4">
              {t("contact.title")}
            </h3>
            <ul className="space-y-3">
              <li className="text-sm text-spicy-gray">
                <span className="text-spicy-white">{t("contact.email")}:</span>{" "}
                hello@spicybean.net
              </li>
              <li>
                <a
                  href="https://www.xiaohongshu.com/user/profile/..."
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
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-spicy-red/10 text-center">
          <p className="text-xs text-spicy-gray/60">{t("footer.rights")}</p>
        </div>
      </div>
    </footer>
  );
}
