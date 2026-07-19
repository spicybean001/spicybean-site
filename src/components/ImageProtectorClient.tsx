"use client";

import { useEffect } from "react";

/**
 * 全局图片版权保护
 *
 * 1. 正常显示原图（无瑕疵）
 * 2. 右键 → canvas水印临时覆盖，浏览器保存的是水印版
 * 3. 拖拽保存 → 阻止
 * 4. PrintScreen → 临时在图片上层叠加水印
 *
 * 只需要在 layout 里挂载一次
 */
export default function ImageProtectorClient() {
  useEffect(() => {
    // 水印canvas - 全局唯一实例
    let watermarkCanvas: HTMLCanvasElement | null = null;

    const getCanvas = () => {
      if (!watermarkCanvas) {
        watermarkCanvas = document.createElement("canvas");
        watermarkCanvas.style.cssText = "position:fixed;top:0;left:0;z-index:999999;pointer-events:none;";
        watermarkCanvas.style.display = "none";
        document.body.appendChild(watermarkCanvas);
      }
      return watermarkCanvas;
    };

    const drawWatermark = (img: HTMLImageElement) => {
      const canvas = getCanvas();
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      canvas.width = img.naturalWidth || img.width || 800;
      canvas.height = img.naturalHeight || img.height || 600;

      // 绘制原图
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

      // 半透明斜向水印
      const fontSize = Math.max(canvas.width / 16, 32);
      ctx.font = `bold ${fontSize}px Arial, sans-serif`;
      ctx.fillStyle = "rgba(255, 255, 255, 0.4)";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";

      const step = Math.max(fontSize * 4, 200);
      for (let x = -canvas.width; x < canvas.width * 2; x += step) {
        for (let y = -canvas.height; y < canvas.height * 2; y += step) {
          ctx.save();
          ctx.translate(x + step / 2, y + step / 2);
          ctx.rotate(-0.5);
          ctx.fillText("SPICYBEAN", 0, 0);
          ctx.restore();
        }
      }

      // 右下角大号Logo水印
      const bigSize = Math.max(canvas.width / 10, 48);
      ctx.font = `bold ${bigSize}px Arial, sans-serif`;
      ctx.fillStyle = "rgba(255, 255, 255, 0.6)";
      ctx.textAlign = "right";
      ctx.textBaseline = "bottom";
      ctx.fillText("SPICYBEAN", canvas.width - 20, canvas.height - 20);
    };

    const showWatermark = (img: HTMLImageElement, duration = 800) => {
      drawWatermark(img);
      const canvas = getCanvas();
      // 覆盖在图片位置上
      const rect = img.getBoundingClientRect();
      canvas.style.display = "block";
      canvas.style.left = `${rect.left}px`;
      canvas.style.top = `${rect.top}px`;
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
      canvas.width = rect.width;
      canvas.height = rect.height;
      drawWatermark(img);

      setTimeout(() => {
        canvas.style.display = "none";
      }, duration);
    };

    // 拦截所有图片的右键
    const handleContextMenu = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === "IMG") {
        e.preventDefault();
        showWatermark(target as HTMLImageElement);
      }
    };

    // 阻止拖拽
    const handleDragStart = (e: DragEvent) => {
      if ((e.target as HTMLElement).tagName === "IMG") {
        e.preventDefault();
        return false;
      }
    };

    // PrintScreen 检测 - 在所有图片上显示水印
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "PrintScreen") {
        const images = document.querySelectorAll("img");
        images.forEach((img) => {
          if (img.closest("nav") || img.closest("header")) return; // 跳过导航logo
          drawWatermark(img);
        });
        // 短暂显示全屏水印
        const canvas = getCanvas();
        canvas.style.display = "block";
        canvas.style.position = "fixed";
        canvas.style.left = "0";
        canvas.style.top = "0";
        canvas.style.width = "100%";
        canvas.style.height = "100%";
        // 绘制全屏水印覆盖
        const ctx = canvas.getContext("2d");
        if (ctx) {
          canvas.width = window.innerWidth;
          canvas.height = window.innerHeight;
          ctx.fillStyle = "rgba(255,255,255,0.03)";
          ctx.fillRect(0, 0, canvas.width, canvas.height);
          const fs = Math.max(canvas.width / 20, 32);
          ctx.font = `bold ${fs}px Arial, sans-serif`;
          ctx.fillStyle = "rgba(255, 255, 255, 0.15)";
          ctx.textAlign = "center";
          ctx.textBaseline = "middle";
          const step = Math.max(fs * 3, 150);
          for (let x = -canvas.width; x < canvas.width * 2; x += step) {
            for (let y = -canvas.height; y < canvas.height * 2; y += step) {
              ctx.save();
              ctx.translate(x + step / 2, y + step / 2);
              ctx.rotate(-0.5);
              ctx.fillText("SPICYBEAN", 0, 0);
              ctx.restore();
            }
          }
        }
        setTimeout(() => {
          canvas.style.display = "none";
        }, 300);
      }
    };

    document.addEventListener("contextmenu", handleContextMenu, true);
    document.addEventListener("dragstart", handleDragStart, true);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("contextmenu", handleContextMenu, true);
      document.removeEventListener("dragstart", handleDragStart, true);
      document.removeEventListener("keydown", handleKeyDown);
      if (watermarkCanvas?.parentNode) {
        watermarkCanvas.parentNode.removeChild(watermarkCanvas);
      }
    };
  }, []);

  return null;
}
