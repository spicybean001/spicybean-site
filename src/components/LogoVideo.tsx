"use client";

export default function LogoVideo() {
  return (
    <div className="flex justify-center">
      <div className="w-72 h-72 rounded-sm border border-spicy-neon/30 bg-gradient-to-br from-spicy-black via-black to-spicy-dark p-3 flex items-center justify-center shadow-lg shadow-spicy-neon/10">
        <div className="relative w-full h-full">
          <video
            src="/logo-video-small.mp4"
            autoPlay
            loop
            muted
            playsInline
            disablePictureInPicture
            preload="auto"
            className="w-full h-full object-contain rounded-sm"
            // @ts-ignore
            controlslist="nodownload nofullscreen noremoteplayback"
          />
          {/* 覆盖层遮挡video内部原生控件 */}
          <div
            className="absolute inset-0 z-10"
            onClick={(e) => {
              // 点击传递到video让其播放
              const video = e.currentTarget
                .previousElementSibling as HTMLVideoElement | null;
              if (video && video.paused) video.play();
            }}
          />
        </div>
      </div>
    </div>
  );
}
