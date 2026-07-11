"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  const t = useTranslations();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-spicy-black">
      {/* Background gradient / ambient */}
      <div className="absolute inset-0 bg-noise" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-spicy-red/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-spicy-neon/5 rounded-full blur-3xl" />

      {/* Decorative lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-0 w-full h-px bg-linear-to-r from-transparent via-spicy-red/20 to-transparent" />
        <div className="absolute top-2/3 left-0 w-full h-px bg-linear-to-r from-transparent via-spicy-neon/20 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="mb-4 text-sm tracking-[0.3em] uppercase text-spicy-neon/80">
            SPICYBEAN
          </p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-none"
        >
          <span className="text-gradient">{t("hero.tagline")}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="mx-auto mt-6 max-w-2xl text-lg md:text-xl text-spicy-gray/80 leading-relaxed"
        >
          {t("hero.subtitle")}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45, ease: "easeOut" }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#products"
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-sm bg-spicy-red px-8 py-3.5 text-sm font-semibold tracking-widest uppercase text-white transition-all duration-300 hover:bg-spicy-neon glow-red"
          >
            <span className="relative z-10">{t("hero.cta")}</span>
          </a>

          <a
            href="#about"
            className="inline-flex items-center gap-2 rounded-sm border border-spicy-red/40 px-8 py-3.5 text-sm font-semibold tracking-widest uppercase text-spicy-white transition-all duration-300 hover:border-spicy-neon hover:text-spicy-neon"
          >
            {t("hero.cta_alt")}
          </a>
        </motion.div>

        {/* Small decorative indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-5 h-8 rounded-full border border-spicy-red/30 flex items-start justify-center pt-1.5"
          >
            <div className="w-1 h-2 rounded-full bg-spicy-red/60" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
