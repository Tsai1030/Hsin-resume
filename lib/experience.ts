export interface ExperienceItem {
  year: string;
  span: string;
  durZh: string;
  durEn: string;
  titleZh: string;
  titleEn: string;
  orgZh: string;
  orgEn: string;
  metaZh: string;
  metaEn: string;
  bullets: { zh: string; en: string }[];
  img: string;
  imgAlt: string;
}

export const EXPERIENCE: ExperienceItem[] = [
  {
    year: "2024",
    span: "2024/6 – 2026/1",
    durZh: "1 年 8 個月",
    durEn: "1 yr 8 mo",
    titleZh: "行政助理",
    titleEn: "Administrative Assistant",
    orgZh: "崴宇企業有限公司",
    orgEn: "Wei-Yu Enterprise Co., Ltd.",
    metaZh: "金屬加工用機械製造修配業 · 新北市樹林區",
    metaEn: "Metal-processing machinery · Shulin, New Taipei",
    bullets: [
      { zh: "接聽電話、接待訪客。", en: "Answered calls and received visitors." },
      { zh: "文件整理、影印掃描、資料歸檔。", en: "Document organization, scanning and archiving." },
      { zh: "收發信件／包裹。", en: "Handled incoming and outgoing mail and parcels." },
      { zh: "協助採購文具、管理辦公用品庫存。", en: "Procured supplies and managed office inventory." },
      { zh: "協助主管交辦事項與基本行政支援。", en: "Supported supervisors and general administration." },
    ],
    img: "/崴宇企業有限公司.webp",
    imgAlt: "崴宇企業有限公司",
  },
  {
    year: "2023",
    span: "2023/12 – 2024/4",
    durZh: "5 個月",
    durEn: "5 mo",
    titleZh: "門市人員",
    titleEn: "Retail Associate",
    orgZh: "尚亨運動用品股份有限公司",
    orgEn: "Shang-Heng Sports Co., Ltd.",
    metaZh: "運動服務業 · 高雄市楠梓區",
    metaEn: "Sporting goods retail · Nanzih, Kaohsiung",
    bullets: [
      { zh: "結帳與收銀。", en: "Checkout and cashiering." },
      { zh: "商品盤點。", en: "Inventory stocktaking." },
      { zh: "商品推薦與銷售。", en: "Product recommendation and sales." },
    ],
    img: "/上亨.png",
    imgAlt: "尚亨運動用品股份有限公司",
  },
  {
    year: "2022",
    span: "2022/8 – 2022/11",
    durZh: "4 個月",
    durEn: "4 mo",
    titleZh: "行政工讀生",
    titleEn: "Administrative Intern",
    orgZh: "義大醫院 · 預防醫學科",
    orgEn: "E-Da Hospital · Preventive Medicine",
    metaZh: "醫院 · 高雄市燕巢區",
    metaEn: "Hospital · Yanchao, Kaohsiung",
    bullets: [
      { zh: "紙本體檢病歷檢查與電腦上傳。", en: "Checked and digitized paper health records." },
      { zh: "追蹤學生體檢缺項。", en: "Tracked missing student examination items." },
      { zh: "完成各校體檢報告交付。", en: "Delivered completed examination reports." },
    ],
    img: "/義大醫院.jpg",
    imgAlt: "義大醫院",
  },
  {
    year: "2021",
    span: "2021/11 – 2022/3",
    durZh: "5 個月",
    durEn: "5 mo",
    titleZh: "眼科助理",
    titleEn: "Ophthalmic Assistant",
    orgZh: "大林眼科診所",
    orgEn: "Da-Lin Eye Clinic",
    metaZh: "診所 · 高雄市仁武區",
    metaEn: "Clinic · Renwu, Kaohsiung",
    bullets: [
      { zh: "病患接待與門診流程引導。", en: "Patient reception and visit-flow guidance." },
      { zh: "操作基礎眼科檢查設備（視力、眼壓）。", en: "Operated basic equipment (vision, IOP tests)." },
      { zh: "協助醫師檢查與治療前後準備。", en: "Assisted physicians before and after procedures." },
      { zh: "病歷整理與系統登錄。", en: "Record organization and system entry." },
    ],
    img: "/大林眼科診所.jpg",
    imgAlt: "大林眼科診所",
  },
  {
    year: "2021",
    span: "2021/1 – 2021/4",
    durZh: "4 個月",
    durEn: "4 mo",
    titleZh: "牙醫助理",
    titleEn: "Dental Assistant",
    orgZh: "成泰牙醫診所",
    orgEn: "Cheng-Tai Dental Clinic",
    metaZh: "診所 · 高雄市仁武區",
    metaEn: "Clinic · Renwu, Kaohsiung",
    bullets: [
      { zh: "門診日常作業與病患接待。", en: "Daily clinic operations and patient reception." },
      { zh: "協助看診、治療及器械傳遞。", en: "Assisted treatment and instrument handling." },
      { zh: "器械清潔、消毒與環境整理。", en: "Instrument sterilization and environment upkeep." },
    ],
    img: "/成泰牙醫診所.png",
    imgAlt: "成泰牙醫診所",
  },
];
