import { profile } from "@/content/chronicle";
import { Outbound } from "./Outbound";

export function Threshold() {
  return (
    <section className="threshold" id="top">
      <p className="eyebrow">
        {profile.place}
        <span aria-hidden="true"> · </span>
        <Outbound href={profile.cultureName.href}>
          {profile.cultureName.label}
        </Outbound>
      </p>
      <div className="threshold-main">
        <h1>
          Laszlo
          <br />
          <em>Bihary</em>
        </h1>
        <p className="thesis">{profile.thesis}</p>
      </div>
      <p className="identity-line">
        <Outbound href={profile.ens.href}>{profile.ens.label}</Outbound>
        <span aria-hidden="true"> · </span>
        <a href="#craft">Begin at 1996</a>
      </p>
    </section>
  );
}
