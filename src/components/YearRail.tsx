"use client";

import { useEffect, useState } from "react";
import { nowChapters, yearMarks } from "@/content/chronicle";

function activeMark(id: string): string | null {
  if (nowChapters.some((chapter) => chapter === id)) {
    return "rooms";
  }

  const mark = yearMarks.find((item) => item.id === id);
  return mark ? mark.id : null;
}

export function YearRail() {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const ids = [
      ...yearMarks.map((mark) => mark.id),
      ...nowChapters.filter((id) => id !== "rooms"),
    ];
    const nodes = ids
      .map((id) => document.getElementById(id))
      .filter((node): node is HTMLElement => node !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        const top = visible[0];
        if (!top) {
          return;
        }
        const next = activeMark(top.target.id);
        if (next) {
          setActive(next);
        }
      },
      {
        rootMargin: "-42% 0px -48% 0px",
        threshold: [0, 0.2, 0.45, 0.7, 1],
      },
    );

    for (const node of nodes) {
      observer.observe(node);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="rail" aria-label="Years">
      {yearMarks.map((mark) => {
        const current = active === mark.id;
        return (
          <a
            key={mark.id}
            href={`#${mark.id}`}
            aria-current={current ? "location" : undefined}
            aria-label={`${mark.year}, ${mark.label}`}
          >
            {mark.year}
          </a>
        );
      })}
    </nav>
  );
}
