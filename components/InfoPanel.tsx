import { Reveal } from "./Reveal";

const INFO = [
  { kZh: "性別 / 年齡", kEn: "Gender / Age", vZh: "女 · 26 歲", vEn: "Female · 26" },
  { kZh: "學歷", kEn: "Education", vZh: "高科大科技法律所（肄）", vEn: "NKUST · Tech Law (incomplete)" },
  { kZh: "語言", kEn: "Languages", vZh: "英文略懂 · 台語中等", vEn: "English (basic) · Taiwanese (fair)" },
  { kZh: "駕照 / 交通", kEn: "License", vZh: "普通重型機車", vEn: "Motorcycle license" },
  { kZh: "希望地點", kEn: "Locations", vZh: "台北 · 新北 · 高雄", vEn: "Taipei · New Taipei · Kaohsiung" },
  { kZh: "遠端 / 上班", kEn: "Remote / Start", vZh: "願遠端 · 隨時可上班", vEn: "Open to remote · Available now" },
];

const TAGS = ["#ChatGPT", "#Midjourney", "#PowerPoint", "#Excel", "#Word"];

export function InfoPanel() {
  return (
    <div className="panel" id="info">
      <section>
        <div className="wrap">
          <Reveal className="sec-head">
            <span className="no">04</span>
            <h2>
              <span className="zh-only">基本資料</span>
              <span className="en-only">Details</span>
            </h2>
            <span className="en zh-only">Profile</span>
          </Reveal>
          <Reveal className="info-grid">
            {INFO.map((cell) => (
              <div className="info-cell" key={cell.kEn}>
                <div className="k zh-only">{cell.kZh}</div>
                <div className="k en-only">{cell.kEn}</div>
                <div className="v zh-only">{cell.vZh}</div>
                <div className="v en-only">{cell.vEn}</div>
              </div>
            ))}
          </Reveal>

          <Reveal className="sec-head" style={{ marginTop: 80 }}>
            <span className="no">05</span>
            <h2>
              <span className="zh-only">專長</span>
              <span className="en-only">Skills</span>
            </h2>
          </Reveal>
          <Reveal className="tags">
            {TAGS.map((t) => (
              <span className="tag" key={t}>
                {t}
              </span>
            ))}
            <span className="tag zh-only">#文書處理</span>
            <span className="tag en-only">#Documentation</span>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
