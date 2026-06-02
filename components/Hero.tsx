import { Reveal } from "./Reveal";

export function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="watermark">patience.</div>
      <div className="wrap" style={{ position: "relative", zIndex: 1 }}>
        <div className="hero-grid">
          <div className="hero-text">
            <Reveal className="eyebrow">
              <span className="zh-only">細心 · 耐心 · 有條理</span>
              <span className="en-only">Careful · Patient · Organized</span>
            </Reveal>
            <Reveal as="h1">
              <span className="zh-only">許馨文</span>
              <span className="en-only">
                Hsin-Wen
                <br />
                Hsu
              </span>
            </Reveal>
            <Reveal className="role" delay={1}>
              <span className="zh-only">行政人員</span>
              <span className="en-only">Administrative Professional</span>
              <span className="en zh-only">Administrative Professional</span>
              <span style={{ color: "var(--line)" }}>/</span>
              <span className="zh-only">高雄市鳳山區</span>
              <span className="en-only">Kaohsiung, Taiwan</span>
            </Reveal>
            <Reveal as="p" className="intro" delay={2}>
              <span className="zh-only">
                畢業於義守大學醫務管理學系，具備醫療體系流程與行政作業的基礎理解。擅長文件整理、資料彙整與歸檔管理，並具備良好的時間管理與溝通協調能力，能在多項任務並行下維持效率與正確性。
              </span>
              <span className="en-only">
                A graduate in Healthcare Administration from I-Shou University
                with a solid grounding in medical-system workflows and
                administrative operations. Skilled in document organization,
                data compilation and archive management, with strong
                time-management and coordination abilities under parallel
                workloads.
              </span>
            </Reveal>
            <div className="scrollcue">
              <span className="zh-only">向下捲動</span>
              <span className="en-only">Scroll</span>
            </div>
          </div>

          <Reveal className="hero-portrait" delay={2}>
            <div className="portrait-card">
              {/* 大頭照佔位：日後將 <img src="/大頭照.jpg" alt="許馨文" /> 放入即可 */}
              <span className="portrait-frame" />
              <div className="ph">
                <span className="mark">Hsin-Wen Hsu</span>
                <small className="zh-only">大頭照預留位</small>
                <small className="en-only">PORTRAIT PLACEHOLDER</small>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
