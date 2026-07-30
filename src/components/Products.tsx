"use client";

import { useTranslations, useLocale } from "next-intl";
import { motion } from "framer-motion";
import { Link } from "@/i18n/routing";
import { useState } from "react";

const series = [
  {
    key: "k1",
    className: "bg-linear-to-br from-zinc-900 to-spicy-dark",
    borderColor: "border-zinc-700",
    accent: "text-zinc-300",
    image: "/images/k1/cover.jpg",
    tmallId: "1033412438912",
  },
  {
    key: "k2",
    className: "bg-linear-to-br from-zinc-800 to-spicy-dark",
    borderColor: "border-zinc-600",
    accent: "text-rose-200",
    image: "/images/k2/cover.jpg",
    tmallId: "1032734315021",
  },
  {
    key: "k3",
    className: "bg-linear-to-br from-spicy-neon-dim/30 to-spicy-dark",
    borderColor: "border-red-800/50",
    accent: "text-red-300",
    image: "/images/k3/cover.jpg",
    tmallId: "1033432898401",
  },
  {
    key: "k4",
    className: "bg-linear-to-br from-spicy-dark to-violet-950/30",
    borderColor: "border-violet-800/40",
    accent: "text-fuchsia-300",
    image: "/images/k4/cover.jpg",
    tmallId: "1040983367337",
  },
];

const buyerImages = [1, 2, 3, 4, 5, 6].map(i => `/images/k4/buyer-${i}.jpg`);

function BuyerGallery() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIdx, setLightboxIdx] = useState(0);

  return (
    <>
      <div className="grid grid-cols-3 md:grid-cols-6 gap-2 md:gap-3">
        {buyerImages.map((src, idx) => (
          <div
            key={idx}
            className="group/photo relative aspect-square overflow-hidden rounded-sm bg-spicy-black/50 border border-white/5 hover:border-white/20 transition-all duration-300 cursor-pointer"
            onClick={() => { setLightboxIdx(idx); setLightboxOpen(true); }}
          >
            <img
              src={src}
              alt={"SPICYBEAN buyer photo " + (idx + 1)}
              className="w-full h-full object-cover transition-transform duration-500 group-hover/photo:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover/photo:opacity-100 transition-opacity duration-300" />
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-[9999] bg-black/95 flex items-center justify-center"
          onClick={() => setLightboxOpen(false)}
        >
          <button
            onClick={() => setLightboxOpen(false)}
            className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            aria-label="Close"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); setLightboxIdx(i => i > 0 ? i - 1 : buyerImages.length - 1); }}
            className="absolute left-4 z-10 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <div className="max-w-[90vw] max-h-[90vh] flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
            <img src={buyerImages[lightboxIdx]} alt={"Photo " + (lightboxIdx + 1)} className="max-w-full max-h-[90vh] object-contain" />
          </div>
          <button
            onClick={(e) => { e.stopPropagation(); setLightboxIdx(i => i < buyerImages.length - 1 ? i + 1 : 0); }}
            className="absolute right-4 z-10 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 px-3 py-1.5 rounded-full bg-white/10 text-sm text-white/80">
            {lightboxIdx + 1} / {buyerImages.length}
          </div>
        </div>
      )}
    </>
  );
}

export default function Products() {
  const t = useTranslations();
  const locale = useLocale();


  return (
    <section id="products" className="relative bg-spicy-black py-24 md:py-32">
      {/* Background */}
      <div className="absolute inset-0 bg-noise" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="mb-3 text-xs tracking-[0.3em] uppercase text-spicy-red/60">
            THE LINEUP
          </p>
          <h2 className="text-3xl md:text-5xl font-bold">
            <span className="text-gradient">{t("series.title")}</span>
          </h2>
          <p className="mt-4 text-spicy-gray/70 max-w-xl mx-auto">
            {t("series.subtitle")}
          </p>
        </motion.div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {series.map((s, i) => (
            <Link
              href={`/products/${s.key}`}
              key={s.key}
              className={`group relative overflow-hidden rounded-sm border ${s.borderColor} ${s.className} transition-all duration-500 hover:border-spicy-red/40 block`}
            >
              {/* Product Image */}
              <div className="aspect-[4/3] overflow-hidden bg-spicy-black/50">
                <picture>
                  <source srcSet={s.image.replace(/\.jpg$/, '.webp')} type="image/webp" />
                  <img
                    src={s.image}
                    alt={t(`series.${s.key}.name`)}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </picture>
              </div>

              {/* Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-spicy-white mb-2">
                  {t(`series.${s.key}.name`)}
                </h3>
                <p className={`text-sm leading-relaxed ${s.accent} opacity-80 mb-4`}>
                  {t(`series.${s.key}.desc`)}
                </p>
                <p className="text-sm font-semibold text-spicy-neon">
                  {t(`series.${s.key}.price`)}
                </p>
                <div className="mt-3 flex items-center gap-1 text-xs tracking-wider uppercase text-spicy-neon/70 group-hover:text-spicy-neon transition-colors duration-300">
                  {t("series.viewDetail")}
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>

              {/* Hover shimmer */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-full bg-linear-to-br from-white/5 to-transparent" />
              </div>
            </Link>
          ))}
        </div>

        {/* Buyer Showcase — Social Proof */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mt-20 mb-20"
        >
          <p className="mb-3 text-xs tracking-[0.3em] uppercase text-spicy-neon/60 text-center">
            #SPICYBEAN{"高尔夫"}
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-center text-spicy-white mb-3">
            {locale === "zh-CN" ? "真实买家的搭配" : locale === "ko-KR" ? "실제 구매자 사진" : locale === "ja-JP" ? "実際の購入者写真" : "Real Buyers, Real Style"}
          </h2>
          <p className="text-sm text-spicy-gray/60 text-center mb-8 max-w-md mx-auto">
            {locale === "zh-CN" ? "来看看球友们怎么把 SPICYBEAN 玩出花样" : locale === "ko-KR" ? "골퍼들이 SPICYBEAN을 어떻게 스타일링하는지 확인하세요" : locale === "ja-JP" ? "ゴルファーがSPICYBEANをどうコーディネートしているか" : "See how golfers style their SPICYBEAN headcovers"}
          </p>
          <BuyerGallery />
          <p className="text-center text-xs text-spicy-gray/40 mt-4">
            #SPICYBEAN{"高尔夫"}
          </p>
        </motion.div>

        {/* Shop CTA — locale-aware channels */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 text-center"
        >
          <p className="text-sm text-spicy-gray mb-4">
            {locale === "zh-CN" ? "合作平台" : locale === "ko-KR" ? "파트너 플랫폼" : locale === "ja-JP" ? "取り扱いプラットフォーム" : "Available on our partner platforms"}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {locale === "zh-CN" && (
              <>
                <a
                  href={`https://detail.tmall.com/item.htm?id=${series[3].tmallId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-sm border border-spicy-gray/30 px-6 py-2.5 text-sm text-spicy-gray hover:border-spicy-neon hover:text-spicy-neon transition-all duration-300"
                >
                  {t("shop.tmall")} ↗
                </a>
                <span className="inline-flex items-center gap-2 rounded-sm border border-spicy-gray/10 px-6 py-2.5 text-sm text-spicy-gray/40">
                  {t("shop.jd")} 🚧
                </span>
              </>
            )}
            {locale === "en" && (
              <span className="inline-flex items-center gap-2 rounded-sm border border-spicy-gray/10 px-6 py-2.5 text-sm text-spicy-gray/40">
                {t("shop.amazon")} 🚧
              </span>
            )}
            {locale === "ko-KR" && (
              <>
                <span className="inline-flex items-center gap-2 rounded-sm border border-spicy-gray/10 px-6 py-2.5 text-sm text-spicy-gray/40">
                  {t("shop.coupang")} 🚧
                </span>
                <span className="inline-flex items-center gap-2 rounded-sm border border-spicy-gray/10 px-6 py-2.5 text-sm text-spicy-gray/40">
                  {t("shop.naver")} 🚧
                </span>
              </>
            )}
            {locale === "ja-JP" && (
              <>
                <span className="inline-flex items-center gap-2 rounded-sm border border-spicy-gray/10 px-6 py-2.5 text-sm text-spicy-gray/40">
                  {t("shop.rakuten")} 🚧
                </span>
                <span className="inline-flex items-center gap-2 rounded-sm border border-spicy-gray/10 px-6 py-2.5 text-sm text-spicy-gray/40">
                  {t("shop.amazonJp")} 🚧
                </span>
              </>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
