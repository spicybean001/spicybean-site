"use client";

import { useRef, useEffect } from "react";

/**
 * 图片版权保护组件
 *
 * 正常显示原图（无瑕疵），但：
 * 1. 右键 → 弹出水印预览（浏览器默认保存菜单只能保存水印版）
 * 2. 拖拽 → 阻止
 * 3. 键盘 PrintScreen → 临时在图片上层叠加水印覆盖层
 */
export default function ImageProtector({
  src,
  alt,
  className = "",
  width,
  height,
}: {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
}) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const canvas = canvasRef.current;
    if (!wrapper || !canvas) return;

    const img = wrapper.querySelector("img");
    if (!img) return;

    // 1. 拦截右键 → 用canvas绘制水印版替换预览
    const handleContextMenu = (e: MouseEvent) => {
      // 在canvas上绘制带水印的版本
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      canvas.width = img.naturalWidth || img.width;
      canvas.height = img.naturalHeight || img.height;

      // 绘制原图
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

      // 叠加水印
      ctx.font = `bold ${Math.max(canvas.width / 16, 32)}px Arial, sans-serif`;
      ctx.fillStyle = "rgba(255, 255, 255, 0.35)";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";

      // 斜向循环水印
      const step = 200;
      for (let x = -canvas.width; x < canvas.width * 2; x += step) {
        for (let y = -canvas.height; y < canvas.height * 2; y += step) {
          ctx.save();
          ctx.translate(x + step / 2, y + step / 2);
          ctx.rotate(-0.5);
          ctx.fillText("SPICYBEAN", 0, 0);
          ctx.restore();
        }
      }

      // 右下角大号水印
      ctx.font = `bold ${Math.max(canvas.width / 10, 48)}px Arial, sans-serif`;
      ctx.fillStyle = "rgba(255, 255, 255, 0.5)";
      ctx.textAlign = "right";
      ctx.textBaseline = "bottom";
      ctx.fillText("SPICYBEAN", canvas.width - 20, canvas.height - 20);

      // 让canvas浮现在图片上方一瞬间，使右键菜单截图是水印版
      canvas.style.display = "block";
      setTimeout(() => {
        canvas.style.display = "none";
      }, 500);
    };

    // 2. 阻止拖拽
    const handleDragStart = (e: DragEvent) => {
      e.preventDefault();
      return false;
    };

    // 3. 监听键盘 PrintScreen 和截图快捷键
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "PrintScreen" || (e.ctrlKey && e.key === "p")) {
        canvas.style.display = "block";
        const ctx = canvas.getContext("2d");
        if (ctx) {
          canvas.width = img.naturalWidth || img.width;
          canvas.height = img.naturalHeight || img.height;
          ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

          // 水印
          ctx.font = `bold ${Math.max(canvas.width / 16, 32)}px Arial, sans-serif`;
          ctx.fillStyle = "rgba(255, 255, 255, 0.35)";
          ctx.textAlign = "center";
          ctx.textBaseline = "middle";
          const step = 200;
          for (let x = -canvas.width; x < canvas.width * 2; x += step) {
            for (let y = -canvas.height; y < canvas.height * 2; y += step) {
              ctx.save();
              ctx.translate(x + step / 2, y + step / 2);
              ctx.rotate(-0.5);
              ctx.fillText("SPICYBEAN", 0, 0);
              ctx.restore();
            }
          }
          ctx.font = `bold ${Math.max(canvas.width / 10, 48)}px Arial, sans-serif`;
          ctx.fillStyle = "rgba(255, 255, 255, 0.5)";
          ctx.textAlign = "right";
          ctx.textBaseline = "bottom";
          ctx.fillText("SPICYBEAN", canvas.width - 20, canvas.height - 20);
        }
        setTimeout(() => {
          canvas.style.display = "none";
        }, 1000);
      }
    };

    img.addEventListener("contextmenu", handleContextMenu);
    img.addEventListener("dragstart", handleDragStart);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      img.removeEventListener("contextmenu", handleContextMenu);
      img.removeEventListener("dragstart", handleDragStart);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div ref={wrapperRef} className={`relative inline-block ${className}`}>
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="w-full h-full object-cover"
        draggable={false}
        onContextMenu={(e) => e.preventDefault()}
      />
      {/* 水印canvas - 隐藏状态，仅在右键/截图时短暂显示 */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full hidden pointer-events-none"
        aria-hidden="true"
      />
    </div>
  );
}
