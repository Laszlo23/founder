import { turn } from "@/content/chronicle";
import { Outbound } from "./Outbound";

export function Turn() {
  return (
    <section className="chapter" id="turn" aria-labelledby="turn-title">
      <div className="chapter-index">
        <p className="kicker">{turn.kicker}</p>
        <p className="span">2020 —</p>
      </div>
      <div className="chapter-body">
        <h2 id="turn-title">{turn.title}</h2>
        <p className="lede">{turn.lede}</p>
        <p className="note">
          <Outbound href={turn.ledeHref}>{turn.ledeNote}</Outbound>
        </p>
        <ol className="milestones">
          {turn.milestones.map((milestone) => (
            <li key={milestone.id} id={milestone.id}>
              <p className="mile-year">{milestone.year}</p>
              <div>
                <h3>{milestone.title}</h3>
                <p>{milestone.body}</p>
              </div>
            </li>
          ))}
        </ol>
        <p className="after">{turn.close}</p>
        <p className="note">
          <Outbound href={turn.closeHref}>{turn.closeNote}</Outbound>
        </p>
      </div>
    </section>
  );
}
