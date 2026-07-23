"use client";

import { useRef, useEffect, useState } from "react";

export default function LogoVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [err, setErr] = useState(false);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    // 延迟调用play，自动播放策略要求非autoplay属性的JS式播放
    const t = setTimeout(() => {
      v.play().catch(() => {});
    }, 200);

    return () => clearTimeout(t);
  }, []);

  const handleClick = () => {
    const v = videoRef.current;
    if (!v || !v.paused) return;
    v.play().catch(() => {});
  };

  // 如果视频加载失败，显示poster静态图
  if (err) {
    return (
      <div className="flex justify-center">
        <div className="w-72 h-72 rounded-sm border border-spicy-neon/30 bg-gradient-to-br from-spicy-black via-black to-spicy-dark p-3 shadow-lg shadow-spicy-neon/10 overflow-hidden flex items-center justify-center">
          <img src="/logo-poster.png" alt="SPICYBEAN" className="w-full h-full object-contain rounded-sm" />
        </div>
      </div>
    );
  }

  return (
    <div className="flex justify-center">
      <div
        className="w-72 h-72 rounded-sm border border-spicy-neon/30 bg-gradient-to-br from-spicy-black via-black to-spicy-dark p-3 shadow-lg shadow-spicy-neon/10 overflow-hidden"
        onClick={handleClick}
      >
        <video
          ref={videoRef}
          muted
          loop
          playsInline
          disablePictureInPicture
          disableRemotePlayback
          preload="auto"
          className="logo-video w-full h-full object-contain rounded-sm"
          onError={() => setErr(true)}
        >
          <source src="/logo-video.mp4" type="video/mp4" />
          <source src="/logo-video-small.mp4" type="video/mp4" />
          <img src="/logo-poster.png" alt="SPICYBEAN" />
        </video>
      </div>
    </div>
  );
}
