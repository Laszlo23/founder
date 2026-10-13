import { proofIntro, proofs } from "@/content/chronicle";
import { Outbound } from "./Outbound";

export function Proof() {
  return (
    <section className="chapter" id="proof" aria-labelledby="proof-title">
      <div className="chapter-index">
        <p className="kicker">{proofIntro.kicker}</p>
        <p className="span">Onchain</p>
      </div>
      <div className="chapter-body chapter-body-wide">
        <h2 id="proof-title">{proofIntro.title}</h2>
        <p className="lede">{proofIntro.lede}</p>
        <dl className="proof-list">
          {proofs.map((item) => (
            <div className="proof-row" key={item.label}>
              <dt>{item.label}</dt>
              <dd>
                <Outbound href={item.href}>{item.value}</Outbound>
                <span className="proof-detail">{item.detail}</span>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
