"use client";

import Image from "next/image";
import { useRef, type MouseEvent } from "react";

type StillProps = {
  src: string;
  alt: string;
  href: string;
  plate: string;
};

export function Still({ src, alt, href, plate }: StillProps) {
  const frame = useRef<HTMLAnchorElement>(null);

  function onMove(event: MouseEvent<HTMLAnchorElement>) {
    const node = frame.current;
    if (!node) {
      return;
    }
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }
    const box = node.getBoundingClientRect();
    const x = (event.clientX - box.left) / box.width - 0.5;
    const y = (event.clientY - box.top) / box.height - 0.5;
    node.style.setProperty("--ry", `${(x * 7).toFixed(2)}deg`);
    node.style.setProperty("--rx", `${(-y * 5).toFixed(2)}deg`);
  }

  function onLeave() {
    const node = frame.current;
    if (!node) {
      return;
    }
    node.style.setProperty("--ry", "0deg");
    node.style.setProperty("--rx", "0deg");
  }

  return (
    <a
      ref={frame}
      className="still"
      data-parallax="72"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      <span className="still-tilt">
        <Image
          className="still-img"
          src={src}
          alt={alt}
          fill
          sizes="(min-width: 980px) 68rem, 100vw"
        />
        <span className="still-sheen" aria-hidden="true" />
        <span className="still-marks" aria-hidden="true" />
      </span>
      <span className="still-plate">{plate}</span>
    </a>
  );
}
