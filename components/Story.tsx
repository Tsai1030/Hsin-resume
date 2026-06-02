import { Reveal } from "./Reveal";

const BLOCKS = [
  {
    titleZh: "關於我",
    titleEn: "Who I Am",
    bodyZh:
      "從小我就是一個做事細心、有耐心的人，面對任何事情都希望能完整理解與確實完成。雖然個性較為慢熱，但我會在熟悉環境後穩定地投入工作，並用心觀察、學習與成長。",
    bodyEn:
      "I have always been careful and patient — I want to fully understand a task and complete it thoroughly. Though slow to warm up, once familiar with an environment I devote myself steadily, observing, learning and growing.",
  },
  {
    titleZh: "求學經歷",
    titleEn: "Education",
    bodyZh:
      "在義守大學修習「醫療品質管理」「管理學」「醫務管理實務」及「文書處理實務」等課程，奠定行政與資料整理基礎。專題研究〈醫療糾紛與民眾就醫意願影響之相關研究〉中，學會問卷設計與資料蒐集，並運用 SPSS 進行分析，培養邏輯思考與問題解決能力。",
    bodyEn:
      "At I-Shou University I studied Healthcare Quality Management, Management, Healthcare Management Practice and Office Document Processing. My capstone, “Medical Disputes and the Public’s Willingness to Seek Care,” taught me questionnaire design and SPSS analysis, strengthening logical thinking and problem-solving.",
  },
  {
    titleZh: "克服困難",
    titleEn: "Problem-Solving",
    bodyZh:
      "專題研究中曾面臨組員方向分歧與統計結果異常。我冷靜分析，協助重新討論架構與分工；針對統計異常，與指導老師討論後重新檢視問卷並以 SPSS 交叉比對，最終成功修正並完成研究。這讓我學會在困難中保持耐心，一步步找到解法。",
    bodyEn:
      "During my research we faced disagreements on direction and abnormal statistics. I stayed calm, helped restructure the framework and re-divide tasks, then reviewed the questionnaire with our advisor and cross-validated in SPSS — ultimately correcting the issue. It taught me patience and step-by-step problem-solving.",
  },
  {
    titleZh: "成就感",
    titleEn: "Achievement",
    bodyZh:
      "在義大醫院預防醫學科負責高科大校區體檢報告整理建檔。資料量大、時間緊，我先規劃每日進度、依項目與期限分批處理，並建立檢查表降低錯誤率，最終如期完成、錯誤率極低，獲主管稱讚。這讓我對自己的細心與責任感更有信心。",
    bodyEn:
      "At E-Da Hospital I organized and digitized health-exam reports for NKUST. Facing large volumes and tight deadlines, I scheduled daily progress, batched by item and deadline, and built checklists to cut errors — finishing on time with a very low error rate and earning my supervisor’s praise.",
  },
];

export function Story() {
  return (
    <section id="story">
      <div className="wrap">
        <Reveal className="sec-head">
          <span className="no">03</span>
          <h2>
            <span className="zh-only">自傳</span>
            <span className="en-only">My Story</span>
          </h2>
          <span className="en zh-only">Autobiography</span>
        </Reveal>
        <div className="story">
          {BLOCKS.map((b) => (
            <Reveal key={b.titleEn} className="story-block">
              <h3>
                <span className="zh-only">{b.titleZh}</span>
                <span className="en-only">{b.titleEn}</span>
              </h3>
              <div>
                <p>
                  <span className="zh-only">{b.bodyZh}</span>
                  <span className="en-only">{b.bodyEn}</span>
                </p>
              </div>
            </Reveal>
          ))}

          <Reveal className="pullquote">
            <p>
              <span className="zh-only">
                「能在有限的時間內完成高品質的成果，是我工作上最有成就感的時刻之一。」
              </span>
              <span className="en-only">
                “Delivering high-quality results within tight deadlines remains
                one of my most rewarding experiences.”
              </span>
            </p>
          </Reveal>

          <Reveal className="future">
            <div className="cat-photo">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/cat.png" alt="家中的貓咪" loading="lazy" />
            </div>
            <div className="ft">
              <h3>
                <span className="paw">ʚ•ᴥ•ɞ</span>
                <span className="zh-only">未來期望</span>
                <span className="en-only">Future Aspirations</span>
              </h3>
              <p>
                <span className="zh-only">
                  我非常熱愛動物，家中目前飼養三隻貓咪，平時也會關注寵物健康與行為的相關知識。希望未來能結合自己在行政與資料處理方面的專長，投入與寵物相關的行政或服務性工作，在持續學習中成長，為團隊帶來正面與長久的助力。
                </span>
                <span className="en-only">
                  I have a strong passion for animals and currently care for
                  three cats at home, following pet health and behavior closely.
                  In the future I hope to combine my administrative and
                  data-processing strengths with pet-related administrative or
                  service work — growing through continuous learning and
                  bringing lasting, positive value to a team.
                </span>
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
