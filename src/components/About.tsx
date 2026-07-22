"use client";

import { useTranslations, useLocale } from "next-intl";
import { motion } from "framer-motion";
import { useState } from "react";

export default function About() {
  const t = useTranslations();
  const locale = useLocale();
  const [awardOpen, setAwardOpen] = useState(false);

  return (
    <section id="about" className="relative bg-spicy-dark py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-noise" />
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-spicy-red/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-spicy-neon/5 rounded-full blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Section: Original Brand Story */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="mb-3 text-xs tracking-[0.3em] uppercase text-spicy-red/60">
            THE STORY
          </p>
          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            <span className="text-gradient">{t("about.title")}</span>
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-5xl mx-auto text-left">
            {/* Story image — locale-aware */}
            <div className="overflow-hidden rounded-sm border border-white/5">
              <img
                src={`/images/brand/story-${locale === "ko-KR" ? "ko" : locale === "ja-JP" ? "ja" : locale === "zh-CN" ? "zh" : "en"}.jpg`}
                alt="SPICYBEAN Brand Story"
                className="w-full h-auto object-cover"
                loading="lazy"
                width="790"
                height="1114"
              />
            </div>

            {/* Story text — only original p1/p2 from translations */}
            <div className="space-y-4">
            <div className="space-y-4">
              <p className="text-lg leading-relaxed text-spicy-gray/80">
                {t("about.p1")}
              </p>
              <p className="text-lg leading-relaxed text-spicy-gray/80">
                {t("about.p2")}
              </p>
            </div>
            </div>
          </div>
        </motion.div>

        {/* Section: DBWD Awards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-20"
        >
          <p className="mb-3 text-xs tracking-[0.3em] uppercase text-spicy-red/60 text-center">
            RED DOT AWARD STUDIO
          </p>
          <h3 className="text-2xl md:text-4xl font-bold text-center mb-12">
            <span className="text-gradient">Designed by DBWD</span>
          </h3>

          {/* Award badges */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
            <div className="group rounded-sm border border-white/5 bg-spicy-black/30 p-6 text-center hover:border-spicy-red/30 transition-all duration-300">
              <div className="text-3xl mb-3">🏆</div>
              <h4 className="text-sm font-semibold text-spicy-white mb-1">Red Dot Award</h4>
              <p className="text-xs text-spicy-gray/60">2012 Red Dot Design Award<br/>Grand Prize / Best of the Best</p>
            </div>
            <div className="group rounded-sm border border-white/5 bg-spicy-black/30 p-6 text-center hover:border-spicy-red/30 transition-all duration-300">
              <div className="text-3xl mb-3">🏅</div>
              <h4 className="text-sm font-semibold text-spicy-white mb-1">iF Design Award</h4>
              <p className="text-xs text-spicy-gray/60">2016 iF Design Award<br/>Gold Prize (Winner)</p>
            </div>
            <div className="group rounded-sm border border-white/5 bg-spicy-black/30 p-6 text-center hover:border-spicy-red/30 transition-all duration-300">
              <div className="text-3xl mb-3">🥈</div>
              <h4 className="text-sm font-semibold text-spicy-white mb-1">DFA Award</h4>
              <p className="text-xs text-spicy-gray/60">2016 DFA Design for Asia<br/>Silver Award</p>
            </div>
          </div>

          {/* Award certificate viewer */}
          <div className="text-center">
            <button
              onClick={() => setAwardOpen(!awardOpen)}
              className="inline-flex items-center gap-2 text-xs text-spicy-gray hover:text-spicy-neon transition-colors uppercase tracking-widest"
            >
              {awardOpen ? "▼" : "▶"} {locale === "zh-CN" ? "查看获奖证书" : locale === "ko-KR" ? "수상경력 보기" : locale === "ja-JP" ? "受賞証明書を見る" : "View Award Certificates"}
            </button>

            {awardOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                transition={{ duration: 0.4 }}
                className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4"
              >
                <div className="overflow-hidden rounded-sm border border-white/5">
                  <a href="/images/brand/reddot.jpg" target="_blank" rel="noopener noreferrer">
                    <img
                      src="/images/brand/reddot.jpg"
                      alt="2012 Red Dot Design Award"
                      className="w-full h-auto object-cover"
                      loading="lazy"
                      width="600"
                      height="850"
                    />
                  </a>
                  <p className="text-xs text-center text-spicy-gray/60 py-2">2012 Red Dot Design Award — Best of the Best</p>
                </div>
                <div className="overflow-hidden rounded-sm border border-white/5">
                  <a href="/images/brand/if.jpg" target="_blank" rel="noopener noreferrer">
                    <img
                      src="/images/brand/if.jpg"
                      alt="2016 iF Design Award"
                      className="w-full h-auto object-cover"
                      loading="lazy"
                      width="400"
                      height="565"
                    />
                  </a>
                  <p className="text-xs text-center text-spicy-gray/60 py-2">2016 iF Design Award — Gold Prize</p>
                </div>
                <div className="overflow-hidden rounded-sm border border-white/5">
                  <a href="/images/brand/dfa.jpg" target="_blank" rel="noopener noreferrer">
                    <img
                      src="/images/brand/dfa.jpg"
                      alt="2016 DFA Design for Asia"
                      className="w-full h-auto object-cover"
                      loading="lazy"
                      width="600"
                      height="850"
                    />
                  </a>
                  <p className="text-xs text-center text-spicy-gray/60 py-2">2016 DFA Design for Asia — Silver Award</p>
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>

        {/* Section: Logo / Brand Suite */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-20"
        >
          <p className="mb-3 text-xs tracking-[0.3em] uppercase text-spicy-red/60 text-center">
            BRAND IDENTITY
          </p>
          <h3 className="text-2xl md:text-4xl font-bold text-center mb-12">
            <span className="text-gradient">
              {locale === "zh-CN" ? "品牌视觉" : locale === "ko-KR" ? "브랜드 아이덴티티" : locale === "ja-JP" ? "ブランドアイデンティティ" : "Brand Identity"}
            </span>
          </h3>

          <div className="flex flex-wrap justify-center gap-6">
            <div className="w-32 h-32 rounded-sm border border-white/5 bg-spicy-black/50 p-4 flex items-center justify-center">
              <picture>
                <source srcSet="/images/brand/logo-white.webp" type="image/webp" />
                <img src="/images/brand/logo-white.png" alt="SPICYBEAN White Logo" className="max-w-full max-h-full object-contain" />
              </picture>
            </div>
            <div className="w-32 h-32 rounded-sm border border-white/5 bg-spicy-black/50 p-4 flex items-center justify-center">
              <picture>
                <source srcSet="/images/brand/logo-color.webp" type="image/webp" />
                <img src="/images/brand/logo-color.png" alt="SPICYBEAN Color Logo" className="max-w-full max-h-full object-contain" />
              </picture>
            </div>
          </div>
        </motion.div>

        {/* Section: Craftsmanship Details */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="mb-3 text-xs tracking-[0.3em] uppercase text-spicy-red/60 text-center">
            CRAFTSMANSHIP
          </p>
          <h3 className="text-2xl md:text-4xl font-bold text-center mb-12">
            <span className="text-gradient">{t("details.title")}</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {["material", "stitch", "design", "fit"].map((key, i) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group rounded-sm border border-spicy-red/10 bg-spicy-black/50 p-6 hover:border-spicy-red/30 transition-all duration-300"
              >
                <h4 className="text-sm font-semibold tracking-wider uppercase text-spicy-white mb-2">
                  {t(`details.${key}.title`)}
                </h4>
                <p className="text-sm text-spicy-gray leading-relaxed">
                  {t(`details.${key}.desc`)}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
