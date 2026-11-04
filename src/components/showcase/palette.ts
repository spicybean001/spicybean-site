/**
 * SPICYBEAN Showcase — 色板 & 系列数据（单一数据源）
 *
 * 设计原则（2026-11-04 重做）：
 * 产品图是白底/黑底的方形图，因此展示页统一使用「浅底纸感」背景，
 * 产品图不做全屏铺满裁切，而是完整居中呈现（object-contain），
 * 用留白 + 细线 + 尺寸对比来建立高级感，而不是靠大图铺满压字。
 */

export type SeriesKey = "k1" | "k2" | "k3" | "k4";

export const PALETTE = {
  paper: "#F7F6F3", // 主背景（温白纸张）
  paperAlt: "#EFEEE9", // 交替区块
  ink: "#111111", // 主文字
  inkSoft: "#6B6B6B", // 次文字
  hairline: "#DCDAD3", // 细分隔线
  dark: "#0B0B0B", // 收尾深色
  darkSoft: "#9A9A9A",
  accent: "#C0433A", // SPICY 红（点睛，用量极少）
} as const;

export const SERIES: {
  key: SeriesKey;
  index: string;
  colorName: string;
  hex: string;
  swatch: string;
  image: string;
  image2: string;
  tmallId: string;
}[] = [
  {
    key: "k1",
    index: "01",
    colorName: "CARBON NOIR",
    hex: "#1A1A1A",
    swatch: "#1A1A1A",
    image: "/images/k1/cover.jpg",
    image2: "/images/k1/img-3.jpg",
    tmallId: "1033412438912",
  },
  {
    key: "k2",
    index: "02",
    colorName: "SIGNATURE WHITE",
    hex: "#F4F2EE",
    swatch: "#EDE7E1",
    image: "/images/k2/cover.jpg",
    image2: "/images/k2/img-3.jpg",
    tmallId: "1032734315021",
  },
  {
    key: "k3",
    index: "03",
    colorName: "SPICY RED",
    hex: "#B4453C",
    swatch: "#B4453C",
    image: "/images/k3/cover.jpg",
    image2: "/images/k3/img-3.jpg",
    tmallId: "1033432898401",
  },
  {
    key: "k4",
    index: "04",
    colorName: "NEON NOIR",
    hex: "#1C1530",
    swatch: "#2A2140",
    image: "/images/k4/cover.jpg",
    image2: "/images/k4/img-3.jpg",
    tmallId: "1040983367337",
  },
];
