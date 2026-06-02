import { Reveal } from "./Reveal";

export function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="wrap">
        <Reveal as="div" className="big">
          Let’s talk.
        </Reveal>
        <Reveal className="contact-rows">
          <div>
            <span className="k">TEL</span>
            <a href="tel:0939998693">0939-998-693</a>
          </div>
          <div>
            <span className="k">MAIL</span>
            <a href="mailto:a880918a@yahoo.com.tw">a880918a@yahoo.com.tw</a>
          </div>
          <div>
            <span className="k zh-only">地址</span>
            <span className="k en-only">ADDR</span>
            <span className="zh-only">高雄市鳳山區</span>
            <span className="en-only">Qingnian Rd., Fengshan, Kaohsiung</span>
          </div>
          <div>
            <span className="k zh-only">待遇</span>
            <span className="k en-only">SALARY</span>
            <span className="zh-only">面議</span>
            <span className="en-only">Negotiable</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
