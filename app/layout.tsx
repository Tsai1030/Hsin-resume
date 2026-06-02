import type { Metadata } from "next";
import { LanguageProvider } from "@/components/LanguageProvider";
import { Background } from "@/components/Background";
import "./globals.css";

export const metadata: Metadata = {
  title: "許馨文 · 履歷 | Hsin-Wen Hsu · Résumé",
  description:
    "許馨文的個人履歷網頁 — 行政人員。細心、耐心、有條理，能在多項任務並行下維持效率與正確性的行政支援。",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-Hant" data-lang="zh">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400&family=Noto+Sans+TC:wght@300;400;500;700&family=Noto+Serif+TC:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Background />
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
