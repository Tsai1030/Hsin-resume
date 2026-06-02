"use client";

import { useEffect, useState } from "react";

const ITEMS = [
  { id: "hero", zh: "關於", en: "About" },
  { id: "strength", zh: "優勢", en: "Strengths" },
  { id: "exp", zh: "經歷", en: "Experience" },
  { id: "story", zh: "自傳", en: "Story" },
  { id: "info", zh: "資料", en: "Info" },
  { id: "contact", zh: "聯絡", en: "Contact" },
];

export function Rail() {
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const sections = ITEMS.map((i) => document.getElementById(i.id)).filter(
      (el): el is HTMLElement => el !== null,
    );

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { threshold: 0.5 },
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  return (
    <nav className="rail">
      {ITEMS.map((item) => (
        <a
          key={item.id}
          href={`#${item.id}`}
          className={active === item.id ? "active" : ""}
        >
          <span className="dot" />
          <span className="label zh-only">{item.zh}</span>
          <span className="label en-only">{item.en}</span>
        </a>
      ))}
    </nav>
  );
}
