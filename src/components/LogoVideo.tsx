"use client";

import { useRef, useState, useEffect } from "react";

/**
 * LogoVideo — 品牌动态Logo
 *
 * 方案：
 * 1. 优先尝试浏览器原生video（通过手动交互启动）
 * 2. 完全不显示时用canvas回退
 * 3. 万不得已显示静态poster
 */
export default function LogoVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [failed, setFailed] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [interacted, setInteracted] = useState(false);
  const animRef = useRef<number | null>(null);

  // 转canvas模式（video完全播不了时）
  const startCanvasRender = () => {
    const v = document.createElement("video");
    v.muted = true;
    v.loop = true;
    v.playsInline = true;
    v.preload = "auto";
    v.src = "/logo-video-baseline.mp4";
    v.load();

    v.addEventListener("canplay", () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      canvas.width = v.videoWidth || 720;
      canvas.height = v.videoHeight || 720;

      const drawFrame = () => {
        ctx!.drawImage(v, 0, 0, canvas!.width, canvas!.height);
        animRef.current = requestAnimationFrame(drawFrame);
      };

      v.play().catch(() => {});
      drawFrame();
    });
  };

  // 点击播放（微信用户手势后video就能播了）
  const handleInteraction = () => {
    setInteracted(true);
    const video = videoRef.current;
    if (video) {
      video.play().catch(() => {
        // 如果video还是播不了，转canvas
        setFailed(true);
        startCanvasRender();
      });
      setPlaying(true);
    }
  };

  useEffect(() => {
    // 检测是否在微信环境
    const ua = navigator.userAgent.toLowerCase();
    const isWechat = /micromessenger/.test(ua);

    if (!isWechat) {
      // 非微信环境，正常视频自动播放
      const video = videoRef.current;
      if (video) {
        video.play().then(() => setPlaying(true)).catch(() => {
          setFailed(true);
          startCanvasRender();
        });
      }
    }
    // 微信里等待用户点击
  }, []);

  // 如果完全失败了（canvas也不work），显示静态图
  const showFallback = failed && !interacted;

  if (showFallback) {
    return (
      <div className="flex justify-center">
        <div className="w-72 h-72 rounded-sm border border-spicy-neon/30 bg-gradient-to-br from-spicy-black via-black to-spicy-dark p-3 flex items-center justify-center shadow-lg shadow-spicy-neon/10">
          <img src="/logo-poster.png" alt="SPICYBEAN" className="w-full h-full object-contain rounded-sm" />
        </div>
      </div>
    );
  }

  return (
    <div className="flex justify-center">
      <div
        className="w-72 h-72 rounded-sm border border-spicy-neon/30 bg-gradient-to-br from-spicy-black via-black to-spicy-dark p-3 flex items-center justify-center shadow-lg shadow-spicy-neon/10 cursor-pointer relative overflow-hidden"
        onClick={handleInteraction}
      >
        {/* 原生video */}
        <video
          ref={videoRef}
          muted
          loop
          playsInline
          preload="auto"
          className={`w-full h-full object-contain rounded-sm ${failed ? "hidden" : "block"}`}
          onError={() => {
            setFailed(true);
            startCanvasRender();
          }}
        >
          <source src="/logo-video-baseline.mp4" type="video/mp4" />
          <source src="/logo-video.mp4" type="video/mp4" />
        </video>

        {/* canvas后备 */}
        <canvas
          ref={canvasRef}
          className={`w-full h-full object-contain rounded-sm ${!failed ? "hidden" : playing ? "block" : "hidden"}`}
        />

        {/* 播放提示（微信内首次显示） */}
        {!playing && !failed && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/40 rounded-sm">
            <div className="flex flex-col items-center gap-2">
              <svg className="w-10 h-10 text-white/80" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
              <span className="text-xs text-white/60 tracking-wider">点击播放</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
