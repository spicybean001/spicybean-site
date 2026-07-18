"use client";

import { useTranslations, useLocale } from "next-intl";
import { motion } from "framer-motion";
import { Link } from "@/i18n/routing";
import { useState, useRef, useEffect, useCallback } from "react";

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
      "/images/k1/img-12.jpg",
      "/images/k1/img-13.jpg",
    ],
  },
  k2: {
    className: "from-zinc-800 to-spicy-dark",
    accent: "text-rose-200",
    images: [
      "/images/k2/cover.jpg",
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
      "/images/k2/img-12.jpg",
      "/images/k2/img-13.jpg",
    ],
  },
  k3: {
    className: "from-spicy-neon-dim/30 to-spicy-dark",
    accent: "text-red-300",
    images: [
      "/images/k3/cover.jpg",
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
      "/images/k3/img-12.jpg",
      "/images/k3/img-13.jpg",
    ],
  },
  k4: {
    className: "from-spicy-dark to-violet-950/30",
    accent: "text-fuchsia-300",
    images: [
      "/images/k4/cover.jpg",
      "/images/k4/img-2.jpg",
      "/images/k4/img-3.jpg",
      "/images/k4/img-4.jpg",
      "/images/k4/img-5.jpg",
      "/images/k4/img-6.jpg",
      "/images/k4/img-7.jpg",
      "/images/k4/img-8.jpg",
      "/images/k4/img-9.jpg",
    ],
  },
};

function Lightbox({ images, currentIndex, onClose }: {
  images: string[];
  currentIndex: number;
  onClose: () => void;
}) {
  const [idx, setIdx] = useState(currentIndex);
  const [loaded, setLoaded] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  useEffect(() => {
    setIdx(currentIndex);
    setLoaded(false);
  }, [currentIndex]);

  const prev = () => {
    setLoaded(false);
    setIdx((i) => (i > 0 ? i - 1 : images.length - 1));
  };
  const next = () => {
    setLoaded(false);
    setIdx((i) => (i < images.length - 1 ? i + 1 : 0));
  };

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
    if (Math.abs(diff) > 50) {
      if (diff > 0) next();
      else prev();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  });

  return (
    <div
      className="fixed inset-0 z-[9999] bg-black/95 flex items-center justify-center"
      onClick={onClose}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Close */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
        aria-label="Close"
      >
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      {/* Prev */}
      {images.length > 1 && (
        <button
          onClick={(e) => { e.stopPropagation(); prev(); }}
          className="absolute left-4 z-10 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
          aria-label="Previous"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      )}

      {/* Image */}
      <div className="max-w-[90vw] max-h-[90vh] flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
        <img
          src={images[idx]}
          alt={"Photo " + (idx + 1)}
          className={"max-w-full max-h-[90vh] object-contain transition-opacity duration-300 " + (loaded ? "opacity-100" : "opacity-0")}
          onLoad={() => setLoaded(true)}
        />
      </div>

      {/* Next */}
      {images.length > 1 && (
        <button
          onClick={(e) => { e.stopPropagation(); next(); }}
          className="absolute right-4 z-10 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
          aria-label="Next"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      )}

      {/* Counter */}
      {images.length > 1 && (
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 px-3 py-1.5 rounded-full bg-white/10 text-sm text-white/80">
          {idx + 1} / {images.length}
        </div>
      )}
    </div>
  );
}

export default function ProductDetail({ series }: ProductDetailProps) {
  const t = useTranslations();
  const locale = useLocale();
  const [selectedImage, setSelectedImage] = useState(0);
  const data = seriesData[series];
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);
  const autoTimer = useRef<NodeJS.Timeout | null>(null);
  const [autoPlay, setAutoPlay] = useState(true);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const nextImage = useCallback(() => {
    if (selectedImage < data.images.length - 1) {
      setSelectedImage(selectedImage + 1);
    } else {
      setSelectedImage(0); // loop back
    }
  }, [selectedImage, data]);

  // Auto-play: switch every 6 seconds
  useEffect(() => {
    if (!autoPlay) return;
    autoTimer.current = setInterval(nextImage, 6000);
    return () => {
      if (autoTimer.current) clearInterval(autoTimer.current);
    };
  }, [autoPlay, nextImage]);

  const pauseAutoPlay = () => {
    setAutoPlay(false);
    if (autoTimer.current) clearInterval(autoTimer.current);
  };

  const resumeAutoPlay = () => {
    setAutoPlay(true);
  };

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
        changeImage(() => setSelectedImage(selectedImage + 1));
      } else if (diff < 0 && selectedImage > 0) {
        changeImage(() => setSelectedImage(selectedImage - 1));
      }
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  const changeImage = (fn: () => void) => {
    pauseAutoPlay();
    fn();
    setTimeout(resumeAutoPlay, 4000); // resume after 4s idle
  };

  const prevImage = () => {
    changeImage(() => {
      if (selectedImage > 0) setSelectedImage(selectedImage - 1);
    });
  };

  // nextImage moved above, replaced by the useCallback version

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
            className={"inline-flex items-center gap-2 text-sm " + data.accent + " opacity-60 hover:opacity-100 transition-opacity"}
          >
            {"\u2190 "}{t("series.title")}
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Image Gallery */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Main image with swipe + arrow nav + auto-play */}
            <div
              className="relative aspect-square overflow-hidden rounded-sm bg-spicy-black/50 border border-white/5 mb-4 group select-none"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
              onMouseEnter={pauseAutoPlay}
              onMouseLeave={resumeAutoPlay}
            >
              <picture>
                <source srcSet={data.images[selectedImage].replace(/\.jpg$/, ".webp")} type="image/webp" />
                <img
                  src={data.images[selectedImage]}
                  alt={t("series." + series + ".name") + " - " + (selectedImage + 1)}
                  className="w-full h-full object-cover transition-transform duration-300"
                  draggable={false}
                />
              </picture>

              {/* Left arrow */}
              {selectedImage > 0 && (
                <button
                  onClick={(e) => { e.stopPropagation(); prevImage(); }}
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
                  onClick={(e) => { e.stopPropagation(); changeImage(() => setSelectedImage(selectedImage + 1)); }}
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

            {/* Thumbnail strip — horizontally scrollable carousel */}
            <div className="relative group/thumb">
              {/* Left scroll arrow (desktop) */}
              <button
                onClick={() => {
                  const el = document.getElementById("thumb-scroll");
                  if (el) el.scrollBy({ left: -200, behavior: "smooth" });
                }}
                className="hidden lg:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 z-10 w-8 h-8 rounded-full bg-black/70 border border-white/15 items-center justify-center text-white opacity-0 group-hover/thumb:opacity-100 transition-opacity duration-300 hover:bg-black/90"
                aria-label="Scroll thumbnails left"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              {/* Scrollable container */}
              <div
                id="thumb-scroll"
                className="flex gap-2 sm:gap-3 overflow-x-auto scrollbar-hide snap-x snap-mandatory scroll-smooth"
                style={{
                  scrollbarWidth: "none",
                  msOverflowStyle: "none",
                }}
              >
                {data.images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => changeImage(() => setSelectedImage(i))}
                    className={"thumb-item snap-start shrink-0 aspect-square overflow-hidden rounded-sm border transition-all duration-300 " + (i === selectedImage ? "border-spicy-red/60 ring-1 ring-spicy-red/30" : "border-white/10 hover:border-white/30")}
                  >
                    <picture>
                      <source srcSet={img.replace(/\.jpg$/, ".webp")} type="image/webp" />
                      <img
                        src={img}
                        alt={t("series." + series + ".name") + " " + (i + 1)}
                        className="w-full h-full object-cover pointer-events-none"
                        loading="lazy"
                      />
                    </picture>
                  </button>
                ))}
              </div>

              {/* Right scroll arrow (desktop) */}
              <button
                onClick={() => {
                  const el = document.getElementById("thumb-scroll");
                  if (el) el.scrollBy({ left: 200, behavior: "smooth" });
                }}
                className="hidden lg:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 z-10 w-8 h-8 rounded-full bg-black/70 border border-white/15 items-center justify-center text-white opacity-0 group-hover/thumb:opacity-100 transition-opacity duration-300 hover:bg-black/90"
                aria-label="Scroll thumbnails right"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </motion.div>

          {/* Product Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col justify-center"
          >
            <p className={"mb-3 text-xs tracking-[0.3em] uppercase " + data.accent + " opacity-60"}>
              SPICYBEAN
            </p>
            <h1 className="text-3xl md:text-5xl font-bold text-spicy-white mb-4">
              {t("series." + series + ".name")}
            </h1>
            <p className={"text-lg leading-relaxed " + data.accent + " opacity-80 mb-6"}>
              {t("series." + series + ".desc")}
            </p>

            {/* Price */}
            <p className="text-3xl font-bold text-spicy-neon mb-8">
              {t("series." + series + ".price")}
            </p>

            {/* Details */}
            <div className="space-y-4 mb-8">
              <DetailItem
                accent={data.accent}
                title={t("details.material.title")}
                desc={t("details.material.desc")}
                seriesKey={series === "k4" ? "series_details.k4.material" : undefined}
                t={t}
              />
              <DetailItem
                accent={data.accent}
                title={t("details.stitch.title")}
                desc={t("details.stitch.desc")}
                t={t}
              />
              <DetailItem
                accent={data.accent}
                title={t("details.design.title")}
                desc={t("details.design.desc")}
                seriesKey={series === "k4" ? "series_details.k4.design" : undefined}
                t={t}
              />
              <DetailItem
                accent={data.accent}
                title={t("details.fit.title")}
                desc={t("details.fit.desc")}
                t={t}
              />
            </div>

            {/* Shop CTA — locale-aware channels */}
            <div className="flex flex-col sm:flex-row gap-3">
              {locale === "zh-CN" && (
                <>
                  <a
                    href="https://spicybean.m.tmall.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 rounded-sm bg-spicy-neon px-6 py-3 text-sm font-semibold text-spicy-black hover:bg-spicy-neon/80 transition-all duration-300"
                  >
                    {t("shop.tmall")} {"\u2197"}
                  </a>
                  <a
                    href="#"
                    className="flex-1 inline-flex items-center justify-center gap-2 rounded-sm border border-spicy-gray/30 px-6 py-3 text-sm text-spicy-gray hover:border-spicy-neon hover:text-spicy-neon transition-all duration-300"
                  >
                    {t("shop.jd")} {"\u2197"}
                  </a>
                </>
              )}
              {locale === "en" && (
                <a
                  href="#"
                  className="flex-1 inline-flex items-center justify-center gap-2 rounded-sm bg-spicy-neon px-6 py-3 text-sm font-semibold text-spicy-black hover:bg-spicy-neon/80 transition-all duration-300"
                >
                  {t("shop.amazon")} {"\u2197"}
                </a>
              )}
              {locale === "ko-KR" && (
                <>
                  <a
                    href="#"
                    className="flex-1 inline-flex items-center justify-center gap-2 rounded-sm bg-spicy-neon px-6 py-3 text-sm font-semibold text-spicy-black hover:bg-spicy-neon/80 transition-all duration-300"
                  >
                    {t("shop.coupang")} {"\u2197"}
                  </a>
                  <a
                    href="#"
                    className="flex-1 inline-flex items-center justify-center gap-2 rounded-sm border border-spicy-gray/30 px-6 py-3 text-sm text-spicy-gray hover:border-spicy-neon hover:text-spicy-neon transition-all duration-300"
                  >
                    {t("shop.naver")} {"\u2197"}
                  </a>
                </>
              )}
              {locale === "ja-JP" && (
                <>
                  <a
                    href="#"
                    className="flex-1 inline-flex items-center justify-center gap-2 rounded-sm bg-spicy-neon px-6 py-3 text-sm font-semibold text-spicy-black hover:bg-spicy-neon/80 transition-all duration-300"
                  >
                    {t("shop.rakuten")} {"\u2197"}
                  </a>
                  <a
                    href="#"
                    className="flex-1 inline-flex items-center justify-center gap-2 rounded-sm border border-spicy-gray/30 px-6 py-3 text-sm text-spicy-gray hover:border-spicy-neon hover:text-spicy-neon transition-all duration-300"
                  >
                    {t("shop.amazonJp")} {"\u2197"}
                  </a>
                </>
              )}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Social Proof: buyer showcase */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="relative z-10 mx-auto mt-24 max-w-5xl px-6"
      >
        <div className="text-center mb-12">
          <p className={"text-xs tracking-[0.3em] uppercase " + data.accent + " opacity-50 mb-2"}>
            SPICYBEAN
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-spicy-white mb-3">
            {t("social.title")}
          </h2>
          <p className={"text-sm " + data.accent + " opacity-60 max-w-md mx-auto"}>
            {t("social.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {/* Left: Video / Unboxing */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {series === "k4" ? (
              <VideoPlayer
                src={locale === "zh-CN" ? "/videos/k4-unboxing.mp4" : "/videos/k4-unboxing-en.mp4"}
                poster="/images/k4/video-cover.jpg"
                badge={"\uD83D\uDCE6"}
                badgeLabel={t("social.unboxing")}
              />
            ) : series === "k1" ? (
              <VideoPlayer
                src="/videos/k1-showcase.mp4"
                poster="/images/k1/cover.jpg"
                badge={"\uD83C\uDFB3"}
                badgeLabel={t("social.showcase")}
                aspectSquare={true}
              />
            ) : (
              <div className="relative aspect-[9/16] max-w-[400px] mx-auto overflow-hidden rounded-sm bg-spicy-black/50 border border-white/5 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-3 rounded-full border-2 border-dashed border-white/20 flex items-center justify-center">
                    <svg className="w-7 h-7 text-white/30" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <p className="text-xs text-white/30">{t("social.comingSoon")}</p>
                </div>
              </div>
            )}
          </motion.div>

          {/* Right: Buyer Showcase */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col justify-center gap-4"
          >
            <div className="grid grid-cols-3 gap-3">
              {(() => {
                const isK4 = series === "k4";
                const buyerImages = isK4
                  ? [1,2,3,4,5,6].map(function(i) { return "/images/k4/buyer-" + i + ".jpg"; })
                  : data.images.slice(0, 6);
                return renderBuyerPhotos(series, data, t, function(idx: number) {
                  setLightboxIndex(idx);
                });
              })()}
            </div>

            <p className={"text-center text-xs " + data.accent + " opacity-50 mt-1"}>
              {(t("social.hashtag") ? "#" : "#") + t("social.hashtag")}
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Lightbox */}
      {lightboxIndex !== null && (() => {
        const buyerImages = series === "k4"
          ? [1,2,3,4,5,6].map(function(i) { return "/images/k4/buyer-" + i + ".jpg"; })
          : data.images.slice(0, 6);
        return (
          <Lightbox
            images={buyerImages}
            currentIndex={lightboxIndex}
            onClose={function() { setLightboxIndex(null); }}
          />
        );
      })()}
    </section>
  );
}

function renderBuyerPhotos(series: string, data: any, t: any, onImageClick?: (idx: number) => void) {
  const isK4 = series === "k4";
  const items = isK4 ? [1, 2, 3, 4, 5, 6] : [0, 1, 2, 3, 4, 5];
  const k4Labels = ["@golfer_jane", "@seoul_swing", "@tee_time_kr", "@driver_queen", "@fairway_life", "@green_lover"];
  const allLabels = ["@golfer_jane", "@seoul_swing", "@tee_time_kr", "@driver_queen", "@fairway_life", "@green_lover"];
  const labels = isK4 ? k4Labels : allLabels;

  return items.map((i, idx) => {
    const bgImg = isK4
      ? "/images/k4/buyer-" + i + ".jpg"
      : data.images[i % data.images.length];
    return (
      <div
        key={isK4 ? "buyer-" + i : String(i)}
        className="group/photo relative aspect-square overflow-hidden rounded-sm bg-spicy-black/50 border border-white/5 hover:border-white/20 transition-all duration-300 cursor-pointer"
        onClick={() => onImageClick && onImageClick(idx)}
      >
        <img
          src={bgImg}
          alt={t("series." + series + ".name") + " buyer photo " + (idx + 1)}
          className="w-full h-full object-cover transition-transform duration-500 group-hover/photo:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover/photo:opacity-100 transition-opacity duration-300 flex items-end p-2">
          <span className="text-[10px] text-white/80">
            {labels[idx]}
          </span>
        </div>
      </div>
    );
  });
}

function DetailItem({ accent, title, desc, seriesKey, t }: {
  accent: string;
  title: string;
  desc: string;
  seriesKey?: string;
  t: any;
}) {
  // next-intl t() supports dot-notation keys like "series_details.k4.material.title"
  let finalTitle = title;
  let finalDesc = desc;
  if (seriesKey) {
    try {
      const tTitle = t(seriesKey + ".title");
      const tDesc = t(seriesKey + ".desc");
      // only use if translation returns a non-empty string (not the key itself)
      if (tTitle && tTitle !== seriesKey + ".title") {
        finalTitle = tTitle;
      }
      if (tDesc && tDesc !== seriesKey + ".desc") {
        finalDesc = tDesc;
      }
    } catch (_e) {
      // fallback to defaults
    }
  }
  return (
    <div className="flex items-start gap-4 p-4 rounded-sm border border-white/5 bg-white/5">
      <div className="w-10 h-10 rounded-full bg-spicy-red/10 flex items-center justify-center flex-shrink-0">
        <span className={"text-lg " + accent}>{"\u2726"}</span>
      </div>
      <div>
        <p className="text-sm font-semibold text-spicy-white">{finalTitle}</p>
        <p className="text-xs text-spicy-gray mt-1">{finalDesc}</p>
      </div>
    </div>
  );
}

function VideoPlayer({ src, poster, badge, badgeLabel, aspectSquare }: {
  src: string;
  poster: string;
  badge?: string;
  badgeLabel?: string;
  aspectSquare?: boolean;
}) {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlay = () => {
    setPlaying(true);
    // Start loading the video on click
    setTimeout(() => {
      videoRef.current?.play();
    }, 50);
  };

  if (!playing) {
    return (
      <div className={"relative " + (aspectSquare ? "aspect-square" : "aspect-[9/16]") + " max-w-[400px] mx-auto overflow-hidden rounded-sm bg-spicy-black/80 border border-white/5 group cursor-pointer"} onClick={handlePlay}>
        <img
          src={poster}
          alt=""
          className="w-full h-full object-cover"
          loading="lazy"
        />
        {/* Play button overlay */}
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center transition-opacity duration-300 group-hover:bg-black/20">
          <div className="w-16 h-16 rounded-full bg-spicy-red/80 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
            <svg className="w-7 h-7 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
        {badge && (
          <div className="absolute top-3 left-3 px-2.5 py-1 rounded-sm bg-black/70 text-xs text-spicy-white tracking-wider">
            {badge} {badgeLabel}
          </div>
        )}
      </div>
    );
  }

  return (
    <div className={"relative " + (aspectSquare ? "aspect-square" : "aspect-[9/16]") + " max-w-[400px] mx-auto overflow-hidden rounded-sm bg-spicy-black/80 border border-white/5 group"}>
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        src={src}
        controls
        playsInline
      >
        Video not supported
      </video>
    </div>
  );
}
