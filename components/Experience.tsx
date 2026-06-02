import { Reveal } from "./Reveal";
import { EXPERIENCE } from "@/lib/experience";

export function Experience() {
  return (
    <section id="exp">
      <div className="wrap">
        <Reveal className="sec-head">
          <span className="no">02</span>
          <h2>
            <span className="zh-only">工作經歷</span>
            <span className="en-only">Experience</span>
          </h2>
          <span className="en zh-only">Experience</span>
        </Reveal>
        <div className="timeline">
          {EXPERIENCE.map((job, i) => (
            <Reveal key={`${job.titleZh}-${i}`} className="tl-item">
              <div className="tl-year">
                <div className="y">{job.year}</div>
                <div className="span">{job.span}</div>
                <div className="dur zh-only">{job.durZh}</div>
                <div className="dur en-only">{job.durEn}</div>
              </div>
              <div className="tl-body">
                <h3>
                  <span className="zh-only">{job.titleZh}</span>
                  <span className="en-only">{job.titleEn}</span>
                </h3>
                <div className="org">
                  <span className="zh-only">{job.orgZh}</span>
                  <span className="en-only">{job.orgEn}</span>
                </div>
                <div className="meta">
                  <span className="zh-only">{job.metaZh}</span>
                  <span className="en-only">{job.metaEn}</span>
                </div>
                <ul>
                  {job.bullets.map((b, j) => (
                    <li key={j}>
                      <span className="zh-only">{b.zh}</span>
                      <span className="en-only">{b.en}</span>
                    </li>
                  ))}
                </ul>
                <div className="tl-img">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={job.img} alt={job.imgAlt} loading="lazy" />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
