"use client";

import Image from "next/image";
import { useState } from "react";
import { films, picturesIntro } from "@/content/chronicle";
import { Outbound } from "./Outbound";

type Film = (typeof films)[number];

function posterFor(id: string, size: "max" | "hq") {
  const file = size === "max" ? "maxresdefault" : "hqdefault";
  return `https://i.ytimg.com/vi/${id}/${file}.jpg`;
}

export function Pictures() {
  const [active, setActive] = useState<Film>(films[0]);
  const [playing, setPlaying] = useState(false);
  const [poster, setPoster] = useState(posterFor(films[0].id, "max"));

  function choose(film: Film) {
    setActive(film);
    setPlaying(false);
    setPoster(posterFor(film.id, "max"));
  }

  return (
    <section className="chapter" id="films" aria-labelledby="films-title">
      <div className="chapter-index">
        <p className="kicker">{picturesIntro.kicker}</p>
        <p className="span">Limes</p>
      </div>
      <div className="chapter-body chapter-body-wide">
        <h2 id="films-title">{picturesIntro.title}</h2>
        <p className="lede">{picturesIntro.lede}</p>
        <p className="note">
          <Outbound href={picturesIntro.channel}>youtube.com/@LaszloBihary</Outbound>
        </p>
        <div className="reel">
          <div className="stage-wrap">
            <div className="stage" data-parallax="36">
              <span className="still-sheen" aria-hidden="true" />
              <span className="still-marks" aria-hidden="true" />
              {playing ? (
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${active.id}?autoplay=1&rel=0`}
                  title={active.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              ) : (
                <button
                  className="stage-play"
                  type="button"
                  onClick={() => setPlaying(true)}
                >
                  <Image
                    src={poster}
                    alt=""
                    fill
                    sizes="(min-width: 980px) 42rem, 100vw"
                    onError={() => setPoster(posterFor(active.id, "hq"))}
                  />
                  <span className="play-mark">Play</span>
                </button>
              )}
            </div>
            <p className="stage-caption">
              <span>{active.title}</span>
              <span>{active.note}</span>
            </p>
          </div>
          <ol className="film-list">
            {films.map((film) => {
              const current = film.id === active.id;
              return (
                <li key={film.id}>
                  <button
                    type="button"
                    aria-current={current ? "true" : undefined}
                    onClick={() => choose(film)}
                  >
                    <span className="film-year">{film.year}</span>
                    <span className="film-name">{film.title}</span>
                    <span className="film-note">{film.note}</span>
                  </button>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
