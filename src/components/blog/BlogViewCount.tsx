"use client";

import { useEffect, useState } from "react";

const views: Record<string, number> = {
  "golf-headcover-buying-guide": 1280,
  "k4-neon-noir-story": 892,
  "golf-headcover-faq": 356,
  "spicybean-brand-guide": 124,
};

export default function BlogViewCount({ slug }: { slug: string }) {
  const [count, setCount] = useState(views[slug] ?? 0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // 后续可替换为 GA API 真实数据
    // 模拟每次页面加载+1
    setCount((c) => c + 1);
  }, []);

  if (!mounted) return null;

  return (
    <div className="flex items-center gap-1.5 text-xs text-spicy-gray/50">
      <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
      </svg>
      <span>{count.toLocaleString()}</span>
    </div>
  );
}
