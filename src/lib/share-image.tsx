import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { profile, site } from "@/content/chronicle";

export const shareAlt = `${profile.name} — ${profile.thesis}`;
export const shareSize = { width: 1200, height: 630 };
export const shareContentType = "image/png";

export async function shareImage() {
  const [regular, italic] = await Promise.all([
    readFile(join(process.cwd(), "src/fonts/InstrumentSerif-Regular.ttf")),
    readFile(join(process.cwd(), "src/fonts/InstrumentSerif-Italic.ttf")),
  ]);

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: "#0c0b0a",
        color: "#efe8dc",
        padding: "68px 76px 60px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          color: "#c6a57a",
          fontSize: 22,
          letterSpacing: "0.28em",
          textTransform: "uppercase",
        }}
      >
        <span>{profile.place}</span>
        <span>{profile.cultureName.label}</span>
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div
          style={{
            display: "flex",
            fontFamily: "Instrument Serif",
            fontSize: 112,
            lineHeight: 0.9,
            letterSpacing: "-0.03em",
          }}
        >
          {profile.name}
        </div>
        <div
          style={{
            width: 148,
            height: 2,
            background: "#c6a57a",
            marginTop: 32,
            marginBottom: 28,
          }}
        />
        <div
          style={{
            display: "flex",
            fontFamily: "Instrument Serif",
            fontStyle: "italic",
            fontSize: 36,
            lineHeight: 1.15,
          }}
        >
          {profile.thesis}
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          color: "#c6a57a",
          fontSize: 22,
          letterSpacing: "0.12em",
          textTransform: "uppercase",
        }}
      >
        <span>Culture Chronicle</span>
        <span>{site.url.replace("https://", "")}</span>
      </div>
    </div>,
    {
      ...shareSize,
      fonts: [
        {
          name: "Instrument Serif",
          data: regular,
          style: "normal",
          weight: 400,
        },
        {
          name: "Instrument Serif",
          data: italic,
          style: "italic",
          weight: 400,
        },
      ],
    },
  );
}
