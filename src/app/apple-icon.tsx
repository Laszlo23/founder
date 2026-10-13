import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#0c0b0a",
          color: "#c6a57a",
          fontSize: 112,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "Georgia",
        }}
      >
        L
      </div>
    ),
    { ...size },
  );
}
