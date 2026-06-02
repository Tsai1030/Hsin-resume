"use client";

import { useEffect, useRef } from "react";
import { Reveal } from "./Reveal";

interface Frame {
  badgeZh: string;
  badgeEn: string;
  titleZh: string;
  titleEn: string;
  capZh: string;
  capEn: string;
  tone: number;
  img?: string;
  imgAlt?: string;
}

const FRAMES: Frame[] = [
  {
    badgeZh: "個人照",
    badgeEn: "Profile",
    titleZh: "許馨文",
    titleEn: "Hsin-Wen Hsu",
    capZh: "個人形象（佔位）",
    capEn: "Portrait (placeholder)",
    tone: 1,
  },
  {
    badgeZh: "行政",
    badgeEn: "Admin",
    titleZh: "行政助理\n崴宇企業",
    titleEn: "Admin Assistant\nWei-Yu Enterprise",
    capZh: "文件・採購・行政支援",
    capEn: "Documents · Procurement · Admin",
    tone: 2,
    img: "/cnc.png",
    imgAlt: "崴宇企業",
  },
  {
    badgeZh: "眼科",
    badgeEn: "Eye Care",
    titleZh: "眼科助理\n大林眼科",
    titleEn: "Ophthalmic Asst.\nDa-Lin Eye Clinic",
    capZh: "病患接待・基礎檢查・病歷登錄",
    capEn: "Reception · Basic Exams · Records",
    tone: 3,
    img: "/eyes.png",
    imgAlt: "大林眼科診所",
  },
  {
    badgeZh: "體檢",
    badgeEn: "Health Exam",
    titleZh: "行政工讀\n義大醫院",
    titleEn: "Admin Intern\nE-Da Hospital",
    capZh: "體檢報告整理・系統建檔",
    capEn: "Health Exam Records · Digitization",
    tone: 4,
    img: "/hospital.png",
    imgAlt: "義大醫院預防醫學科",
  },
  {
    badgeZh: "門市",
    badgeEn: "Retail",
    titleZh: "門市人員\n尚亨運動",
    titleEn: "Retail Associate\nShang-Heng Sports",
    capZh: "結帳・盤點・商品銷售",
    capEn: "Checkout · Inventory · Sales",
    tone: 5,
    img: "/shoes.png",
    imgAlt: "尚亨運動用品",
  },
  {
    badgeZh: "牙科",
    badgeEn: "Dental",
    titleZh: "牙醫助理\n成泰牙醫",
    titleEn: "Dental Assistant\nCheng-Tai Dental",
    capZh: "看診協助・器械消毒",
    capEn: "Treatment Assist · Sterilization",
    tone: 1,
    img: "/tooth.png",
    imgAlt: "成泰牙醫診所",
  },
];

export function Gallery() {
  const pinRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const pin = pinRef.current;
    const track = trackRef.current;
    if (!pin || !track) return;

    let raf = 0;
    const update = () => {
      raf = 0;
      const rect = pin.getBoundingClientRect();
      const total = pin.offsetHeight - window.innerHeight;
      if (total <= 0) {
        track.style.transform = "";
        return;
      }
      const prog = Math.min(Math.max(-rect.top / total, 0), 1);
      const max = Math.max(track.scrollWidth - window.innerWidth + 40, 0);
      track.style.transform = `translateX(${-prog * max}px)`;
    };
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(update);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    update();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section id="gallery" className="gallery-section">
      <div className="gal-pin" ref={pinRef}>
        <div className="gal-sticky">
          <Reveal className="gal-head">
            <div className="sec-head">
              <span className="no">02</span>
              <h2>
                <span className="zh-only">橫向回顧每個身分</span>
                <span className="en-only">Roles in Retrospect</span>
              </h2>
              <span className="en zh-only">Career Slices</span>
            </div>
          </Reveal>

          <div className="gal-track" ref={trackRef}>
            {FRAMES.map((f, i) => (
              <div className="frame" key={i}>
                <div
                  className={`ph${f.img ? " img" : ` tone-${f.tone}`}`}
                  role={f.img ? "img" : undefined}
                  aria-label={f.imgAlt}
                  style={
                    f.img ? { backgroundImage: `url(${f.img})` } : undefined
                  }
                >
                  <span className="badge">
                    <span className="zh-only">{f.badgeZh}</span>
                    <span className="en-only">{f.badgeEn}</span>
                  </span>
                  <span className="ttl">
                    <span className="zh-only">{f.titleZh}</span>
                    <span className="en-only">{f.titleEn}</span>
                  </span>
                </div>
                <div className="cap">
                  <span className="zh-only">{f.capZh}</span>
                  <span className="en-only">{f.capEn}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="gal-note">
            <span className="zh-only">
              ← 滑動探索 ・ SCROLL → <em>／ 圖片為佔位，待替換</em>
            </span>
            <span className="en-only">
              ← SCROLL TO EXPLORE → <em>／ Placeholders pending photos</em>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
