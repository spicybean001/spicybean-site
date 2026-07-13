"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Link } from "@/i18n/routing";
import { useState, useRef } from "react";

interface ProductDetailProps {
  series: string;
}

const seriesData: Record<string, {
  className: string;
  accent: string;
  images: string[];
}> = {
  k1: {
    className: "from-zinc-900 to-spicy-dark",
    accent: "text-zinc-300",
    images: [
      "/images/k1/cover.jpg",
      "/images/k1/alt-1.jpg",
      "/images/k1/detail-1.jpg",
      "/images/k1/detail-2.jpg",
      "/images/k1/img-2.jpg",
      "/images/k1/img-3.jpg",
      "/images/k1/img-4.jpg",
      "/images/k1/img-5.jpg",
      "/images/k1/img-6.jpg",
      "/images/k1/img-7.jpg",
      "/images/k1/img-8.jpg",
      "/images/k1/img-9.jpg",
      "/images/k1/img-10.jpg",
      "/images/k1/img-11.jpg",
    ],
  },
  k2: {
    className: "from-zinc-800 to-spicy-dark",
    accent: "text-rose-200",
    images: [
      "/images/k2/cover.jpg",
      "/images/k2/alt-1.jpg",
      "/images/k2/detail-1.jpg",
      "/images/k2/detail-2.jpg",
      "/images/k2/img-2.jpg",
      "/images/k2/img-3.jpg",
      "/images/k2/img-4.jpg",
      "/images/k2/img-5.jpg",
      "/images/k2/img-6.jpg",
      "/images/k2/img-7.jpg",
      "/images/k2/img-8.jpg",
      "/images/k2/img-9.jpg",
      "/images/k2/img-10.jpg",
      "/images/k2/img-11.jpg",
    ],
  },
  k3: {
    className: "from-spicy-neon-dim/30 to-spicy-dark",
    accent: "text-red-300",
    images: [
      "/images/k3/cover.jpg",
      "/images/k3/alt-1.jpg",
      "/images/k3/detail-1.jpg",
      "/images/k3/detail-2.jpg",
      "/images/k3/img-2.jpg",
      "/images/k3/img-3.jpg",
      "/images/k3/img-4.jpg",
      "/images/k3/img-5.jpg",
      "/images/k3/img-6.jpg",
      "/images/k3/img-7.jpg",
      "/images/k3/img-8.jpg",
      "/images/k3/img-9.jpg",
      "/images/k3/img-10.jpg",
      "/images/k3/img-11.jpg",
    ],
  },
  k4: {
    className: "from-spicy-dark to-violet-950/30",
    accent: "text-fuchsia-300",
    images: [
      "/images/k4/cover.jpg",
      "/images/k4/alt-1.jpg",
      "/images/k4/img-2.jpg",
      "/images/k4/detail-1.jpg",
      "/images/k4/detail-2.jpg",
      "/images/k4/img-3.jpg",
      "/images/k4/img-4.jpg",
      "/images/k4/img-5.jpg",
      "/images/k4/img-6.jpg",
    ],
  },
};

export default function ProductDetail({ series }: ProductDetailProps) {
  const t = useTranslations();
  const [selectedImage, setSelectedImage] = useState(0);
  const data = seriesData[series];
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  if (!data) return null;

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchEndX.current = null;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current === null || touchEndX.current === null) return;
    const diff = touchStartX.current - touchEndX.current;
    const threshold = 50; // minimum swipe distance

    if (Math.abs(diff) > threshold) {
      if (diff > 0 && selectedImage < data.images.length - 1) {
        // Swipe left → next
        setSelectedImage(selectedImage + 1);
      } else if (diff < 0 && selectedImage > 0) {
        // Swipe right → previous
        setSelectedImage(selectedImage - 1);
      }
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  const prevImage = () => {
    if (selectedImage > 0) setSelectedImage(selectedImage - 1);
  };

  const nextImage = () => {
    if (selectedImage < data.images.length - 1) setSelectedImage(selectedImage + 1);
  };

  return (
    <section className="relative min-h-screen bg-spicy-black py-24 md:py-32">
      <div className="absolute inset-0 bg-noise" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Back link */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-8"
        >
          <Link
            href="/#products"
            className={`inline-flex items-center gap-2 text-sm ${data.accent} opacity-60 hover:opacity-100 transition-opacity`}
          >
            ← {t("series.title")}
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Image Gallery */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Main image with swipe + arrow nav */}
            <div
              className="relative aspect-square overflow-hidden rounded-sm bg-spicy-black/50 border border-white/5 mb-4 group select-none"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <picture>
                <source srcSet={data.images[selectedImage].replace(/\.jpg$/, '.webp')} type="image/webp" />
                <img
                  src={data.images[selectedImage]}
                  alt={`${t(`series.${series}.name`)} - ${selectedImage + 1}`}
                  className="w-full h-full object-cover transition-transform duration-300"
                  draggable={false}
                />
              </picture>

              {/* Left arrow */}
              {selectedImage > 0 && (
                <button
                  onClick={prevImage}
                  className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 border border-white/15 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-black/80 hover:border-white/30"
                  aria-label="Previous image"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
              )}

              {/* Right arrow */}
              {selectedImage < data.images.length - 1 && (
                <button
                  onClick={nextImage}
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 border border-white/15 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-black/80 hover:border-white/30"
                  aria-label="Next image"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              )}

              {/* Image counter */}
              <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-full bg-black/60 text-xs text-white/70">
                {selectedImage + 1} / {data.images.length}
              </div>
            </div>

            {/* Thumbnail strip - show first 6 thumbnails + remaining count */}
            <div className="grid grid-cols-4 sm:grid-cols-6 gap-2 sm:gap-3">
              {data.images.slice(0, 6).map((img, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedImage(i)}
                  className={`aspect-square overflow-hidden rounded-sm border transition-all duration-300 ${
                    i === selectedImage ? "border-spicy-red/60 ring-1 ring-spicy-red/30" : "border-white/10 hover:border-white/30"
                  }`}
                >
                  <picture>
                    <source srcSet={img.replace(/\.jpg$/, '.webp')} type="image/webp" />
                    <img
                      src={img}
                      alt={`${t(`series.${series}.name`)} ${i + 1}`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </picture>
                </button>
              ))}
              {data.images.length > 6 && (
                <button
                  onClick={() => setSelectedImage(6)}
                  className="aspect-square overflow-hidden rounded-sm border border-white/10 flex items-center justify-center bg-white/5 hover:bg-white/10 transition-colors text-xs text-spicy-gray"
                >
                  +{data.images.length - 6}
                </button>
              )}
            </div>
          </motion.div>

          {/* Product Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col justify-center"
          >
            <p className={`mb-3 text-xs tracking-[0.3em] uppercase ${data.accent} opacity-60`}>
              SPICYBEAN
            </p>
            <h1 className="text-3xl md:text-5xl font-bold text-spicy-white mb-4">
              {t(`series.${series}.name`)}
            </h1>
            <p className={`text-lg leading-relaxed ${data.accent} opacity-80 mb-6`}>
              {t(`series.${series}.desc`)}
            </p>

            {/* Price */}
            <p className="text-3xl font-bold text-spicy-neon mb-8">
              {t(`series.${series}.price`)}
            </p>

            {/* Details */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-4 p-4 rounded-sm border border-white/5 bg-white/5">
                <div className="w-10 h-10 rounded-full bg-spicy-red/10 flex items-center justify-center flex-shrink-0">
                  <span className={`text-lg ${data.accent}`}>✦</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-spicy-white">{t("details.material.title")}</p>
                  <p className="text-xs text-spicy-gray mt-1">{t("details.material.desc")}</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 rounded-sm border border-white/5 bg-white/5">
                <div className="w-10 h-10 rounded-full bg-spicy-red/10 flex items-center justify-center flex-shrink-0">
                  <span className={`text-lg ${data.accent}`}>✦</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-spicy-white">{t("details.stitch.title")}</p>
                  <p className="text-xs text-spicy-gray mt-1">{t("details.stitch.desc")}</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 rounded-sm border border-white/5 bg-white/5">
                <div className="w-10 h-10 rounded-full bg-spicy-red/10 flex items-center justify-center flex-shrink-0">
                  <span className={`text-lg ${data.accent}`}>✦</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-spicy-white">{t("details.design.title")}</p>
                  <p className="text-xs text-spicy-gray mt-1">{t("details.design.desc")}</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 rounded-sm border border-white/5 bg-white/5">
                <div className="w-10 h-10 rounded-full bg-spicy-red/10 flex items-center justify-center flex-shrink-0">
                  <span className={`text-lg ${data.accent}`}>✦</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-spicy-white">{t("details.fit.title")}</p>
                  <p className="text-xs text-spicy-gray mt-1">{t("details.fit.desc")}</p>
                </div>
              </div>
            </div>

            {/* Shop CTA */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="https://spicybean.m.tmall.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 rounded-sm bg-spicy-neon px-6 py-3 text-sm font-semibold text-spicy-black hover:bg-spicy-neon/80 transition-all duration-300"
              >
                {t("shop.tmall")} ↗
              </a>
              <a
                href="#"
                className="flex-1 inline-flex items-center justify-center gap-2 rounded-sm border border-spicy-gray/30 px-6 py-3 text-sm text-spicy-gray hover:border-spicy-neon hover:text-spicy-neon transition-all duration-300"
              >
                {t("shop.coupang")}
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
