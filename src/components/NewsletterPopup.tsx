"use client";

import { useState, useEffect } from "react";
import { useLocale } from "next-intl";

type LangTexts = {
  title: string;
  subtitle: string;
  placeholder: string;
  button: string;
  success: string;
  error: string;
  dismiss: string;
};

const texts: Record<string, LangTexts> = {
  "zh-CN": {
    title: "抢先获取 SPICYBEAN 新品通知",
    subtitle: "第一时间了解新品上架、折扣活动和 COUPANG 开售信息",
    placeholder: "输入您的邮箱",
    button: "订阅通知",
    success: "✅ 订阅成功！我们会第一时间通知您",
    error: "❌ 订阅失败，请稍后再试",
    dismiss: "稍后再说",
  },
  en: {
    title: "Get SPICYBEAN Updates First",
    subtitle: "Be the first to know about new drops, sales & COUPANG launch",
    placeholder: "Enter your email",
    button: "Subscribe",
    success: "✅ Subscribed! We'll keep you posted",
    error: "❌ Something went wrong. Please try again",
    dismiss: "Maybe later",
  },
  "ko-KR": {
    title: "SPICYBEAN 신제품 소식을 가장 먼저 받아보세요",
    subtitle: "COUPANG 입점 소식, 할인 이벤트, 신제품 출시 알림",
    placeholder: "이메일 주소 입력",
    button: "구독하기",
    success: "✅ 구독 완료! 소식을 가장 먼저 알려드립니다",
    error: "❌ 구독 실패. 다시 시도해주세요",
    dismiss: "나중에",
  },
  "ja-JP": {
    title: "SPICYBEAN 新着情報をお届け",
    subtitle: "新商品、セール、Rakuten出品情報をいち早くお知らせ",
    placeholder: "メールアドレスを入力",
    button: "購読する",
    success: "✅ 購読完了！最新情報をお届けします",
    error: "❌ エラーが発生しました。もう一度お試しください",
    dismiss: "後で",
  },
};

export default function NewsletterPopup() {
  const locale = useLocale();
  const t = texts[locale] || texts.en;
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [dismissed, setDismissed] = useState(false);

  // Show popup after 30s on first visit (only once per session)
  useEffect(() => {
    if (typeof window === "undefined") return;
    const alreadyDismissed = sessionStorage.getItem("spicybean-newsletter-dismissed");
    if (alreadyDismissed) {
      setDismissed(true);
      return;
    }

    const timer = setTimeout(() => {
      setShow(true);
    }, 30000);

    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return;

    setStatus("loading");

    try {
      // 1) Send confirmation email via our own API (Resend)
      await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, locale }),
      });

      // 2) Also notify Formspree (so admin gets notified at hello@spicybean.net)
      fetch("https://formspree.io/f/mdaqkkyl", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ email, locale, source: "spicybean-site-popup" }),
      }).catch(() => {});

      setStatus("success");
      sessionStorage.setItem("spicybean-newsletter-dismissed", "true");
      setTimeout(() => {
        setShow(false);
        setDismissed(true);
      }, 3000);
    } catch {
      setStatus("error");
    }
  };

  const handleDismiss = () => {
    setShow(false);
    setDismissed(true);
    sessionStorage.setItem("spicybean-newsletter-dismissed", "true");
  };

  if (!show || dismissed) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
      <div className="relative mx-4 w-full max-w-md rounded-sm border border-white/10 bg-spicy-dark p-8 shadow-2xl">
        {/* Close button */}
        <button
          onClick={handleDismiss}
          className="absolute right-4 top-4 text-spicy-gray hover:text-spicy-white transition-colors"
          aria-label="Close"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Logo */}
        <div className="flex items-center justify-center mb-6">
          <img src="/logo.png" alt="SPICYBEAN" className="h-8 w-auto" />
        </div>

        {status === "success" ? (
          <p className="text-center text-sm text-green-400">{t.success}</p>
        ) : (
          <>
            <h3 className="text-lg font-bold text-spicy-white text-center mb-2">{t.title}</h3>
            <p className="text-sm text-spicy-gray text-center mb-6">{t.subtitle}</p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t.placeholder}
                required
                className="w-full rounded-sm border border-white/10 bg-spicy-black px-4 py-3 text-sm text-spicy-white placeholder-spicy-gray/50 focus:border-spicy-neon focus:outline-none transition-colors"
              />
              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full rounded-sm bg-spicy-neon px-6 py-3 text-sm font-semibold text-spicy-black hover:bg-spicy-neon/80 transition-all duration-300 disabled:opacity-50"
              >
                {status === "loading" ? "..." : t.button}
              </button>
              {status === "error" && (
                <p className="text-center text-xs text-red-400">{t.error}</p>
              )}
            </form>

            <button
              onClick={handleDismiss}
              className="mt-4 w-full text-center text-xs text-spicy-gray/50 hover:text-spicy-gray transition-colors"
            >
              {t.dismiss}
            </button>
          </>
        )}
      </div>
    </div>
  );
}
