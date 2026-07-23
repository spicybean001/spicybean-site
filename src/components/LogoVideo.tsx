"use client";

import { useRef, useEffect } from "react";

/**
 * LogoVideo — 品牌动态Logo
 *
 * 极致精简方案：
 * - 视频自动播放（muted+playsinline满足浏览器策略）
 * - 微信内用户点击播放
 * - 无额外canvas/state开销，不拖慢加载
 */
export default function LogoVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.play().catch(() => {});
  }, []);

  const handleClick = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) v.play().catch(() => {});
  };

  return (
    <div className="flex justify-center">
      <div
        className="w-72 h-72 overflow-hidden rounded-sm border border-spicy-neon/30 bg-gradient-to-br from-spicy-black via-black to-spicy-dark flex items-center justify-center shadow-lg shadow-spicy-neon/10 cursor-pointer"
        onClick={handleClick}
      >
        <video
          ref={videoRef}
          muted
          loop
          playsInline
          preload="auto"
          className="w-full h-full object-contain"
        >
          <source src="/logo-video-baseline.mp4" type="video/mp4" />
          <source src="/logo-video.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
}
