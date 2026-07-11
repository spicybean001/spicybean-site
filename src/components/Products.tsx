"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

const series = [
  {
    key: "k1",
    className: "bg-linear-to-br from-zinc-900 to-spicy-dark",
    borderColor: "border-zinc-700",
    accent: "text-zinc-300",
    imageDesc: "Black pebble-grain leather headcover",
  },
  {
    key: "k2",
    className: "bg-linear-to-br from-zinc-800 to-spicy-dark",
    borderColor: "border-zinc-600",
    accent: "text-rose-200",
    imageDesc: "White headcover with embroidered heart",
  },
  {
    key: "k3",
    className: "bg-linear-to-br from-spicy-neon-dim/30 to-spicy-dark",
    borderColor: "border-red-800/50",
    accent: "text-red-300",
    imageDesc: "Red full-overprint pattern headcover",
  },
  {
    key: "k4",
    className: "bg-linear-to-br from-spicy-dark to-violet-950/30",
    borderColor: "border-violet-800/40",
    accent: "text-fuchsia-300",
    imageDesc: "Neon noir cyberpunk signature headcover",
  },
];

export default function Products() {
  const t = useTranslations();

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
            <motion.div
              key={s.key}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`group relative overflow-hidden rounded-sm border ${s.borderColor} ${s.className} transition-all duration-500 hover:border-spicy-red/40`}
            >
              {/* Image placeholder - replace with actual product images */}
              <div className="aspect-[4/3] flex items-center justify-center bg-spicy-black/50">
                <div className="text-center p-8">
                  {/* Product image placeholder */}
                  <div className="mx-auto mb-4 h-40 w-40 rounded-full border-2 border-dashed border-spicy-red/20 flex items-center justify-center">
                    <span className="text-4xl font-bold tracking-widest text-spicy-red/30">
                      {t(`series.${s.key}.name`).split("—")[0]?.trim() ||
                        s.key.toUpperCase()}
                    </span>
                  </div>
                </div>
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
              </div>

              {/* Hover shimmer */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-full bg-linear-to-br from-white/5 to-transparent" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Shop CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-sm text-spicy-gray mb-4">
            Available on our partner platforms
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://spicybean.m.tmall.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-sm border border-spicy-gray/30 px-6 py-2.5 text-sm text-spicy-gray hover:border-spicy-neon hover:text-spicy-neon transition-all duration-300"
            >
              Tmall (天猫) ↗
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-sm border border-spicy-gray/30 px-6 py-2.5 text-sm text-spicy-gray hover:border-spicy-neon hover:text-spicy-neon transition-all duration-300"
            >
              Coupang
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-sm border border-spicy-gray/30 px-6 py-2.5 text-sm text-spicy-gray hover:border-spicy-neon hover:text-spicy-neon transition-all duration-300"
            >
              Amazon
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
