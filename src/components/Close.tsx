import { closeCopy, contacts, profile } from "@/content/chronicle";
import { Outbound } from "./Outbound";

export function Close() {
  return (
    <section className="chapter close" id="close" aria-labelledby="close-title">
      <div className="chapter-index">
        <p className="kicker">{closeCopy.kicker}</p>
        <p className="span">{profile.place}</p>
      </div>
      <div className="chapter-body chapter-body-wide">
        <h2 id="close-title">{closeCopy.title}</h2>
        <p className="lede">{closeCopy.lede}</p>
        <nav className="contacts" aria-label="Contact">
          {contacts.map((contact) => (
            <Outbound key={contact.href} className="contact" href={contact.href}>
              {contact.label}
            </Outbound>
          ))}
        </nav>
        <p className="colophon">
          {profile.name}
          <span aria-hidden="true"> · </span>
          {profile.place}
          <span aria-hidden="true"> · </span>
          A personal ledger
        </p>
      </div>
    </section>
  );
}
