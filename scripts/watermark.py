#!/usr/bin/env python3
"""给 public/images 下所有 jpg 和 webp 图打上强版权水印"""

import os
import shutil
from PIL import Image, ImageDraw, ImageFont

BASE = "public/images"
WATERMARK_TEXT = "SPICYBEAN"
FONT_SIZE = 64

def add_watermark(img):
    """添加半透明斜向循环水印覆盖层"""
    w, h = img.size

    # 创建水印层 - 半透明
    watermark = Image.new("RGBA", (w, h), (0, 0, 0, 0))
    draw = ImageDraw.Draw(watermark)

    # 用默认字体
    try:
        font = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf", FONT_SIZE)
    except:
        font = ImageFont.load_default()

    # 计算文字大小
    bbox = draw.textbbox((0, 0), WATERMARK_TEXT, font=font)
    tw = bbox[2] - bbox[0]
    th = bbox[3] - bbox[1]

    # 重复覆盖整个图片，间距150px，45度斜向
    spacing_x = tw + 120
    spacing_y = th + 120

    # 用45度斜向排列，多偏移几次保证全面覆盖
    for ox in range(-spacing_x, w + spacing_x, spacing_x):
        for oy in range(-spacing_y, h + spacing_y, spacing_y):
            # 原始位置
            draw.text((ox + 10, oy + 10), WATERMARK_TEXT, font=font, fill=(255, 255, 255, 28))
            draw.text((ox + 20, oy + 20), WATERMARK_TEXT, font=font, fill=(0, 0, 0, 20))
            # 偏移一半间距
            draw.text((ox + spacing_x // 2 + 10, oy + spacing_y // 2 + 10), WATERMARK_TEXT, font=font, fill=(255, 255, 255, 28))
            draw.text((ox + spacing_x // 2 + 20, oy + spacing_y // 2 + 20), WATERMARK_TEXT, font=font, fill=(0, 0, 0, 20))

    # 右下角再加一个显眼的大水印
    big_font_size = min(w, h) // 12
    try:
        big_font = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf", big_font_size)
    except:
        big_font = font
    big_bbox = draw.textbbox((0, 0), WATERMARK_TEXT, font=big_font)
    btw = big_bbox[2] - big_bbox[0]
    bth = big_bbox[3] - big_bbox[1]
    draw.text(
        (w - btw - 20, h - bth - 20),
        WATERMARK_TEXT,
        font=big_font,
        fill=(255, 255, 255, 100)
    )

    # 合并
    if img.mode == "RGBA":
        result = Image.alpha_composite(img, watermark)
    else:
        img_rgba = img.convert("RGBA")
        result = Image.alpha_composite(img_rgba, watermark)

    return result


def process_file(filepath):
    try:
        img = Image.open(filepath)
        original_mode = img.mode
        img = img.convert("RGBA")

        watermarked = add_watermark(img)

        # 转回原格式保存
        if filepath.endswith(".jpg") or filepath.endswith(".jpeg"):
            watermarked = watermarked.convert("RGB")
            watermarked.save(filepath, "JPEG", quality=90)
        elif filepath.endswith(".webp"):
            watermarked = watermarked.convert("RGB") if original_mode == "RGB" else watermarked
            if watermarked.mode == "RGBA":
                watermarked.save(filepath, "WEBP", quality=85)
            else:
                watermarked.convert("RGB").save(filepath, "WEBP", quality=85)
        elif filepath.endswith(".png"):
            watermarked.save(filepath, "PNG")

        return True
    except Exception as e:
        print(f"  ❌ {os.path.basename(filepath)}: {e}")
        return False


total = 0
ok = 0

# 排除文件（logo、品牌文件不加）
exclude_names = [
    "logo", "favicon", "og-image", "baidu_verify",
]

for root, dirs, files in os.walk(BASE):
    for fname in files:
        if not any(fname.lower().endswith(ext) for ext in [".jpg", ".jpeg", ".webp", ".png"]):
            continue

        # 跳过 logo 等品牌文件
        if any(ex in fname.lower() for ex in exclude_names):
            continue

        fpath = os.path.join(root, fname)
        total += 1
        if process_file(fpath):
            ok += 1
            print(f"  ✓ {os.path.relpath(fpath, BASE)}")

print(f"\n处理完成：{ok}/{total} 张图片已添加水印")
