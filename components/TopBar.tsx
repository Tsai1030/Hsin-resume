"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "./LanguageProvider";

export function TopBar() {
  const { lang, setLang } = useLanguage();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className={`topbar${scrolled ? " scrolled" : ""}`}>
      <div className="brand">
        <b className="zh-only">許馨文</b>
        <b className="en-only">Hsin-Wen Hsu</b> ·{" "}
        <span className="zh-only">履歷</span>
        <span className="en-only">Résumé</span>
      </div>
      <div className="lang-toggle">
        <button
          className={lang === "zh" ? "active" : ""}
          onClick={() => setLang("zh")}
          aria-pressed={lang === "zh"}
        >
          中文
        </button>
        <button
          className={lang === "en" ? "active" : ""}
          onClick={() => setLang("en")}
          aria-pressed={lang === "en"}
        >
          EN
        </button>
      </div>
    </div>
  );
}
