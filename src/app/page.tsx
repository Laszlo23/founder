import { Close } from "@/components/Close";
import { Craft } from "@/components/Craft";
import { Masthead } from "@/components/Masthead";
import { Parallax } from "@/components/Parallax";
import { Pictures } from "@/components/Pictures";
import { Progress } from "@/components/Progress";
import { Proof } from "@/components/Proof";
import { Rooms } from "@/components/Rooms";
import { Threshold } from "@/components/Threshold";
import { Turn } from "@/components/Turn";
import { YearRail } from "@/components/YearRail";

export default function Home() {
  return (
    <>
      <Progress />
      <Parallax />
      <a className="skip" href="#craft">
        Skip to the chronicle
      </a>
      <Masthead />
      <YearRail />
      <main className="shell">
        <Threshold />
        <Craft />
        <Turn />
        <Rooms />
        <Pictures />
        <Proof />
        <Close />
      </main>
    </>
  );
}
