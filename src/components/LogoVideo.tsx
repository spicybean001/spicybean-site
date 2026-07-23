"use client";

import { useRef, useEffect } from "react";

export default function LogoVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    // 等待DOM就绪后主动播放
    // 无音轨视频(mute+no audio track) + playsinline 满足手机自动播放条件
    const timer = setTimeout(() => {
      v.play().catch(() => {
        // 如果播放失败（极少情况），用户可以点视频
      });
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const handleClick = () => {
    const v = videoRef.current;
    if (!v || !v.paused) return;
    v.play().catch(() => {});
  };

  return (
    <div className="flex justify-center">
      <div
        className="w-72 h-72 rounded-sm border border-spicy-neon/30 bg-gradient-to-br from-spicy-black via-black to-spicy-dark p-3 shadow-lg shadow-spicy-neon/10 overflow-hidden"
        onClick={handleClick}
      >
        <video
          ref={videoRef}
          src="/logo-video-small.mp4"
          muted
          loop
          playsInline
          disablePictureInPicture
          disableRemotePlayback
          preload="auto"
          className="logo-video w-full h-full object-contain rounded-sm"
        />
      </div>
    </div>
  );
}
