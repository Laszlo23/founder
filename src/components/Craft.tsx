import { craft } from "@/content/chronicle";

export function Craft() {
  return (
    <section className="chapter" id="craft" aria-labelledby="craft-title">
      <div className="chapter-index">
        <p className="kicker">{craft.kicker}</p>
        <p className="span">{craft.span}</p>
      </div>
      <div className="chapter-body">
        <h2 id="craft-title">{craft.title}</h2>
        <p>{craft.opening}</p>
        <p id="studio">{craft.studio}</p>
        <p>{craft.record}</p>
        <blockquote lang="de" cite="https://www.linkedin.com/in/laszlo-bihary/">
          <p>{craft.quote.text}</p>
        </blockquote>
        <p className="translation">{craft.quote.english}</p>
        <p className="note">{craft.quote.source}</p>
      </div>
    </section>
  );
}
