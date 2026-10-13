import { groupLabel, rooms, roomsIntro } from "@/content/chronicle";
import { Room } from "./Room";

export function Rooms() {
  return (
    <section className="chapter" id="rooms" aria-labelledby="rooms-title">
      <div className="chapter-index">
        <p className="kicker">{roomsIntro.kicker}</p>
        <p className="span">Ten doors</p>
      </div>
      <div className="chapter-body chapter-body-wide">
        <h2 id="rooms-title">{roomsIntro.title}</h2>
        <p className="lede">{roomsIntro.lede}</p>
        <nav className="room-index" aria-label="Rooms">
          {rooms.map((room) => (
            <a key={room.id} href={`#${room.id}`}>
              {room.name}
            </a>
          ))}
        </nav>
        <div className="room-list">
          {rooms.map((room, index) => {
            const previous = rooms[index - 1];
            const opensGroup = previous === undefined || previous.group !== room.group;

            return (
              <div key={room.id}>
                {opensGroup ? (
                  <p className="group-label">{groupLabel(room.group)}</p>
                ) : null}
                <Room room={room} index={index + 1} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
