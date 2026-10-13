"use client";

import { useEffect } from "react";

export function Parallax() {
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;

    const update = () => {
      if (reduced.matches) {
        return;
      }

      const mid = window.innerHeight / 2;
      document.documentElement.style.setProperty("--depth", String(window.scrollY));

      const layers = document.querySelectorAll<HTMLElement>("[data-parallax], .chapter h2");
      layers.forEach((node) => {
        const box = node.getBoundingClientRect();
        if (box.bottom < -240 || box.top > window.innerHeight + 240) {
          return;
        }
        const delta = (box.top + box.height / 2 - mid) / window.innerHeight;
        const speed = Number(node.dataset.parallax) || 22;
        node.style.setProperty("--py", `${(delta * -speed).toFixed(2)}px`);
      });
    };

    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    reduced.addEventListener("change", onScroll);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      reduced.removeEventListener("change", onScroll);
    };
  }, []);

  return null;
}
