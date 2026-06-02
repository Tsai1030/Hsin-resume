"use client";

import LiquidEther from "./LiquidEther";

/**
 * 全頁固定式流體背景。
 * 透明畫布 + 負 z-index，讓流體顯示在 paper 底色之上、內容文字之下。
 * 滑鼠互動由元件內部監聽 window，故容器設 pointer-events: none 不影響操作。
 * 極淡白紫色系（由最淺到最深，對應流速由慢到快）：
 * 近白 #FBFAFB → 淡白紫 #F2ECF3 → 淺薰衣草 #E7DCE9 → 柔丁香 #D8C4DB
 * 整體偏白，最深僅到淺丁香紫，避免出現深色。
 */
export function Background() {
  return (
    <div className="bg-fx" aria-hidden="true">
      <LiquidEther
        colors={["#FBFAFB", "#F2ECF3", "#E7DCE9", "#D8C4DB"]}
        mouseForce={18}
        cursorSize={100}
        isViscous={false}
        viscous={30}
        iterationsViscous={32}
        iterationsPoisson={32}
        resolution={0.5}
        isBounce={false}
        autoDemo
        autoSpeed={0.4}
        autoIntensity={2.0}
        takeoverDuration={0.25}
        autoResumeDelay={2500}
        autoRampDuration={0.6}
      />
    </div>
  );
}
