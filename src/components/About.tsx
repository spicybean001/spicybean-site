"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

export default function About() {
  const t = useTranslations();

  return (
    <section id="about" className="relative bg-spicy-dark py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-noise" />
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-spicy-red/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-spicy-neon/5 rounded-full blur-3xl" />

      <div className="relative z-10 mx-auto max-w-5xl px-6">
        {/* Story */}
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
          <div className="max-w-3xl mx-auto space-y-6 text-spicy-gray/80 leading-relaxed text-left md:text-center">
            <p className="text-base md:text-lg">{t("about.p1")}</p>
            <p className="text-base md:text-lg">{t("about.p2")}</p>
          </div>
        </motion.div>

        {/* Details Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
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
