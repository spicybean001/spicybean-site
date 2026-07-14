"use client";

import { useTranslations, useLocale } from "next-intl";
import { motion } from "framer-motion";
import { useState } from "react";

export default function About() {
  const t = useTranslations();
  const locale = useLocale();
  const [awardOpen, setAwardOpen] = useState(false);

  // Original brand story from the brand assets
  const brandStoryCN = `我们的爱情故事，始于一个高尔夫头套。在第9洞球道上，TA那别具一格的高尔夫装备引发了我的好奇——"那是什么?"，也由此开启了我们的余生。当我们的宝宝SpicyBean降临后，我们将这份热情倾注于为像你一样大胆不羁的灵魂，打造引人注目的高尔夫配饰。如今，SPICY BEAN代表的已不仅仅是时尚装备：她更是绿茵场上的"红娘"。勇敢表达你独特的个人风采吧。谁知道呢？你的下一次挥杆，或许就能点燃一段超越18洞的缘分。#SpicyLoveStory`;

  const brandStoryEN = `Our love story began with a golf headcover. On the 9th fairway, their distinctive gear caught my eye — "What's that?" — and the rest is history. When our baby SpicyBean arrived, we poured that passion into crafting head-turning accessories for bold, unapologetic souls like you. Today, SPICYBEAN is more than just stylish gear: it's a matchmaker on the greens. Dare to express your unique style. Who knows? Your next swing might just spark a connection that goes beyond 18 holes. #SpicyLoveStory`;

  const brandStoryKO = `우리의 러브스토리는 골프 헤드커버에서 시작되었습니다. 9번 페어웨이에서, 그들의 독특한 장비가 제 호기심을 자극했습니다 — "저게 뭐지?" — 그리고 나머지는 역사가 되었습니다. 아기 SpicyBean이 태어난 후, 우리는 그 열정을 담아 대담하고 자유로운 영혼을 위한 눈길을 사로잡는 골프 액세서리를 만들기 시작했습니다. 오늘날 SPICYBEAN은 단순한 스타일리시한 장비 그 이상입니다: 그린 위의 중매쟁이입니다. 당신만의 개성을 표현할 용기를 가지세요. 당신의 다음 스윙이 18홀을 넘어선 인연을 시작할지 누가 알겠습니까? #SpicyLoveStory`;

  const brandStoryJP = `私たちのラブストーリーは、ゴルフヘッドカバーから始まりました。9番フェアウェイで、彼の個性的なギアが私の目を引きました——「それ、何？」——そして残りは歴史となりました。赤ちゃんのSpicyBeanが誕生した後、私たちはその情熱を、大胆不敵な魂を持つあなたのような人のための存在感のあるゴルフアクセサリー作りに注ぎ込みました。今日、SPICYBEANは単なるスタイリッシュなギア以上のものです：グリーン上のマッチメーカーなのです。自分らしいスタイルを表現する勇気を持って。あなたの次のスイングが、18ホールを超えた縁を紡ぎ出すかもしれません。#SpicyLoveStory`;

  const getStory = () => {
    switch (locale) {
      case "zh-CN": return brandStoryCN;
      case "ko-KR": return brandStoryKO;
      case "ja-JP": return brandStoryJP;
      default: return brandStoryEN;
    }
  };

  const getStoryTitle = () => {
    switch (locale) {
      case "zh-CN": return "#SpicyLoveStory";
      case "ko-KR": return "#SpicyLoveStory";
      case "ja-JP": return "#SpicyLoveStory";
      default: return "#SpicyLoveStory";
    }
  };

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
            {/* Story image */}
            <div className="overflow-hidden rounded-sm border border-white/5">
              <img
                src="/images/brand/story.jpg"
                alt="SPICYBEAN Brand Story"
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>

            {/* Story text */}
            <div className="space-y-4">
              <p className="text-sm leading-relaxed text-spicy-gray/80 italic border-l-2 border-spicy-neon/50 pl-4">
                {getStory()}
              </p>
              <p className="text-xs tracking-widest text-spicy-neon/60 uppercase">
                {getStoryTitle()}
              </p>
              {/* Original p1/p2 from translations */}
              <div className="pt-4 border-t border-white/5 space-y-4">
                <p className="text-sm leading-relaxed text-spicy-gray/80">
                  {t("about.p1")}
                </p>
                <p className="text-sm leading-relaxed text-spicy-gray/80">
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
              {awardOpen ? "▼" : "▶"} {locale === "zh-CN" ? "查看获奖证书" : locale === "ko-KR" ? "수상 증서 보기" : locale === "ja-JP" ? "受賞証明書を見る" : "View Award Certificates"}
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
              <img src="/images/brand/logo-white.png" alt="SPICYBEAN White Logo" className="max-w-full max-h-full object-contain" />
            </div>
            <div className="w-32 h-32 rounded-sm border border-white/5 bg-spicy-black/50 p-4 flex items-center justify-center">
              <img src="/images/brand/logo-red.png" alt="SPICYBEAN Red Logo" className="max-w-full max-h-full object-contain" />
            </div>
            <div className="w-32 h-32 rounded-sm border border-white/5 bg-spicy-black/50 p-4 flex items-center justify-center">
              <img src="/images/brand/logo-color.png" alt="SPICYBEAN Color Logo" className="max-w-full max-h-full object-contain" />
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
