# 許馨文 履歷網頁 · Hsin-Wen Hsu — Résumé

互動式個人履歷網頁，採用 **方向 A 編年敘事 (Editorial Timeline)** 設計。

## 技術 Stack

- **Next.js 15** (App Router) + **React 19**
- **TypeScript**
- **Tailwind CSS v4**
- **Bun** 套件管理與執行

## 設計

- **配色**：`#F4F2F3` 暖灰底 / `#C0A9BD` 霧紫 / `#94A7AE` 霧藍灰 / `#64766A` 霧綠
- **字體**：Noto Serif TC（標題）、Noto Sans TC（內文）、Cormorant Garamond（拉丁點綴）
- **互動**：scroll-reveal 進場、sticky 年份時間軸、圖片 hover 放大、左側 scroll-spy 導覽、頂部捲動模糊、中／英語言切換

## 開發

```bash
bun install      # 安裝相依套件
bun run dev      # 開發伺服器 → http://localhost:4321
bun run build    # 正式編譯
bun run start    # 啟動正式伺服器 → http://localhost:4321
```

> 連接埠固定為 **4321**（避開 3000 / 8000）。

## 專案結構

```
app/
  layout.tsx          # 根佈局、字體、語言屬性
  page.tsx            # 組合各區段
  globals.css         # 設計系統與所有樣式
components/
  LanguageProvider.tsx  # 中／英語言狀態 (Context)
  Reveal.tsx            # IntersectionObserver scroll-reveal 包裝元件
  TopBar.tsx            # 頂部列（捲動狀態 + 語言切換）
  Rail.tsx              # 左側 scroll-spy 導覽
  Hero.tsx              # 首屏（含大頭照佔位卡片）
  Strengths.tsx         # 我的優勢
  Experience.tsx        # 工作經歷時間軸
  Story.tsx             # 自傳（含貓咪「未來期望」）
  InfoPanel.tsx         # 基本資料 + 專長
  Contact.tsx           # 聯絡資訊
  Footer.tsx            # 頁尾
lib/
  experience.ts       # 工作經歷資料（中／英）
public/               # 公司圖片、貓咪圖片
prototypes/           # 初期 HTML 方向稿 (A / B / C)
```

## 待補

- **大頭照**：在 `components/Hero.tsx` 的 `portrait-card` 內放入 `<img src="/大頭照.jpg" alt="許馨文" />` 即可取代佔位卡片。
