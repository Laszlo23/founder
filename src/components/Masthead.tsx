import { profile } from "@/content/chronicle";

const links = [
  { href: "#craft", label: "Craft" },
  { href: "#turn", label: "Turn" },
  { href: "#rooms", label: "Rooms" },
  { href: "#films", label: "Films" },
  { href: "#proof", label: "Proof" },
];

export function Masthead() {
  return (
    <header className="mast">
      <a className="mast-name" href="#top">
        {profile.name}
      </a>
      <nav className="mast-nav" aria-label="Chapters">
        {links.map((link) => (
          <a key={link.href} href={link.href}>
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
