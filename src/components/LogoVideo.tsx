"use client";

export default function LogoVideo() {
  return (
    <div className="flex justify-center">
      <div className="w-72 h-72 rounded-sm border border-spicy-neon/30 bg-gradient-to-br from-spicy-black via-black to-spicy-dark p-3 flex items-center justify-center shadow-lg shadow-spicy-neon/10">
        <video
          src="/logo-video.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-contain rounded-sm"
        />
      </div>
    </div>
  );
}
