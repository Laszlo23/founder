import type { Room as RoomData } from "@/content/chronicle";
import { placeOf, statusLabel } from "@/content/chronicle";
import { Outbound } from "./Outbound";
import { Still } from "./Still";

type RoomProps = {
  room: RoomData;
  index: number;
};

export function Room({ room, index }: RoomProps) {
  const number = String(index).padStart(2, "0");

  return (
    <article className="room" id={room.id}>
      <p className="room-no">{number}</p>
      <div className="room-copy">
        <h3>{room.name}</h3>
        <p>{room.story}</p>
        <p className="proves">
          <span>Proves</span>
          {room.proves}
        </p>
      </div>
      <div className="room-meta">
        <p className="status" data-status={room.status}>
          <span className="pip" data-status={room.status} aria-hidden="true" />
          {statusLabel(room.status)}
        </p>
        <p>{room.where}</p>
        <p>{room.since}</p>
        <Outbound className="enter" href={room.href}>
          <span className="enter-label">
            Enter the room
            <span aria-hidden="true"> →</span>
          </span>
          <span className="host">{placeOf(room.href)}</span>
        </Outbound>
      </div>
      <Still
        src={room.still}
        alt={room.stillAlt}
        href={room.href}
        plate={placeOf(room.href)}
      />
    </article>
  );
}
