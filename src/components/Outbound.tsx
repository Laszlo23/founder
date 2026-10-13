import type { ReactNode } from "react";

type OutboundProps = {
  href: string;
  className?: string;
  children: ReactNode;
};

export function Outbound({ href, className, children }: OutboundProps) {
  const external = href.startsWith("http");

  if (external) {
    return (
      <a
        className={className}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  }

  return (
    <a className={className} href={href}>
      {children}
    </a>
  );
}
