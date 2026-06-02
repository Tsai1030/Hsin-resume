import { Reveal } from "./Reveal";

const STRENGTHS = [
  {
    num: "01",
    titleZh: "細心有條理",
    titleEn: "Meticulous",
    descZh: "重視流程與細節，降低錯誤與重工機率。",
    descEn: "Process- and detail-oriented; reduces errors and rework.",
  },
  {
    num: "02",
    titleZh: "效率與時間管理佳",
    titleEn: "Efficient",
    descZh: "能同時處理多項任務並掌握優先順序。",
    descEn: "Handles multiple tasks while prioritizing well.",
  },
  {
    num: "03",
    titleZh: "責任感與配合度高",
    titleEn: "Reliable",
    descZh: "願意學習、做事確實，能長期穩定支援團隊。",
    descEn: "Eager to learn, thorough, a steady long-term support.",
  },
];

export function Strengths() {
  return (
    <section id="strength">
      <div className="wrap">
        <Reveal className="sec-head">
          <span className="no">01</span>
          <h2>
            <span className="zh-only">我的優勢</span>
            <span className="en-only">Strengths</span>
          </h2>
          <span className="en zh-only">Strengths</span>
        </Reveal>
        <div className="strengths">
          {STRENGTHS.map((s, i) => (
            <Reveal
              key={s.num}
              className="strength"
              delay={i === 0 ? undefined : (i as 1 | 2 | 3)}
            >
              <div className="num">{s.num}</div>
              <h3>
                <span className="zh-only">{s.titleZh}</span>
                <span className="en-only">{s.titleEn}</span>
              </h3>
              <p>
                <span className="zh-only">{s.descZh}</span>
                <span className="en-only">{s.descEn}</span>
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
