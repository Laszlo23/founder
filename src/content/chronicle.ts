export type RoomGroupId =
  | "identity"
  | "culture"
  | "attention"
  | "world"
  | "company";

export type RoomStatus = "live" | "demo" | "shell";

export type Room = {
  id: string;
  name: string;
  group: RoomGroupId;
  status: RoomStatus;
  where: string;
  since: string;
  story: string;
  proves: string;
  href: string;
  still: string;
  stillAlt: string;
};

export type YearMark = {
  id: string;
  year: string;
  label: string;
};

export const site = {
  url: "https://founder.aibusiness.fun",
  name: "Laszlo Bihary",
  title: "Laszlo Bihary — Culture Chronicle",
  description:
    "Laszlo Bihary in Vienna. A personal chronicle of twenty-six years building for the web, from IT in 1996 to identity, cities, and companies on Base.",
};

export const profile = {
  name: "Laszlo Bihary",
  place: "Vienna",
  thesis: "Twenty-six years of building. One culture layer.",
  cultureName: {
    label: "laszlo.culture",
    href: "https://app.buildingcultureid.space/id/laszlo.culture",
  },
  ens: {
    label: "laszloleonardo.eth",
    href: "https://web3.bio/laszloleonardo.eth",
  },
};

export const yearMarks: YearMark[] = [
  { id: "craft", year: "1996", label: "The craft" },
  { id: "studio", year: "2005", label: "8Limes" },
  { id: "turn", year: "2020", label: "Building Culture" },
  { id: "hero", year: "2021", label: "Local Hero" },
  { id: "fans", year: "2022", label: "4fans" },
  { id: "rooms", year: "Now", label: "The rooms" },
];

export const nowChapters = ["rooms", "films", "proof", "close"] as const;

export const craft = {
  kicker: "Chapter I",
  title: "The craft",
  span: "1996 — 2019",
  opening:
    "I started in IT in 1996. The web was still something you had to explain. The job was already the one I kept: make a thing a person can find, trust, and use.",
  studio:
    "In 2005 I founded 8Limes. Web, video, search, and the systems under them: mail, shops, campaigns, relaunches. Creative direction through the studio years. Hundreds of client projects, between Houston and Vienna. The founder chapter ran to 2023. The practice did not stop.",
  record:
    "The public line is plainer than a manifesto. More than twenty-five years of product leadership, from the early web into blockchain and AI platforms. I treat that as the length of the apprenticeship.",
  quote: {
    text: "Im Marketing geht es nicht mehr um das, was Sie herstellen sondern um die Geschichte, die Sie erzählen.",
    english:
      "Marketing is no longer about what you manufacture. It is the story you tell.",
    source: "Noted at 8Limes",
  },
};

export const turn = {
  kicker: "Chapter II",
  title: "The turn",
  lede: "Building Culture is what happens when you stop optimizing for launches and start optimizing for places people actually live in.",
  ledeHref: "https://app.buildingcultureid.space/story",
  ledeNote: "From Web2 builder to Building Culture · May 2025",
  milestones: [
    {
      id: "culture-founded",
      year: "2020",
      title: "Building Culture",
      body: "Founder. A community for digital identity, education, and agents, with the roadmap and the partnerships required to make it something people can join.",
    },
    {
      id: "hero",
      year: "2021",
      title: "Local Hero",
      body: "Founder, from Markt Piesting. A nonprofit community for experiences you leave the house for. The directory came first. The city game is what it became.",
    },
    {
      id: "fans",
      year: "2022",
      title: "4fans",
      body: "Project manager since February 2022. Stakeholders, requirements, and the launch of a decentralized product a community has to choose for itself.",
    },
  ],
  close:
    "Some people negotiate with systems. Builders rewrite the parts that stop communities from participating. Co-founder and product, in Vienna. The standard is proof first, on Base, so people can use what got built.",
  closeHref: "https://app.buildingcultureid.space/story",
  closeNote: "Natural born builder · April 2025",
};

export const roomsIntro = {
  kicker: "Chapter III",
  title: "The rooms",
  lede: "One culture layer, and a door for each thing it had to hold. A name. A crowd. A measure of attention. A street. A company. These are the prototypes, at their own addresses.",
};

export const rooms: Room[] = [
  {
    id: "room-culture",
    name: "Culture Layer",
    group: "identity",
    status: "live",
    where: "Base",
    since: "2020",
    story:
      "Own your name. A .culture name is the wallet, the profile, and the reputation, held as one object on Base.",
    proves: "Identity can be something you keep.",
    href: "https://buildingcultureid.space/",
    still: "/stills/culture.jpg",
    stillAlt: "Culture Layer homepage: Own your name, over a glass hall.",
  },
  {
    id: "room-pepe",
    name: "STACK XI",
    group: "culture",
    status: "live",
    where: "Base",
    since: "Matchday",
    story:
      "Pepe doesn't chase. Matchday here is lore, a prediction, and a founding squad: a watch party that learned how to mint.",
    proves: "A crowd can gather around a game and stay a crowd.",
    href: "https://pepe.buildingcultureid.space/",
    still: "/stills/pepe.jpg",
    stillAlt: "STACK XI matchday page, with Pepe in a neon green kit.",
  },
  {
    id: "room-match",
    name: "MatchMind",
    group: "culture",
    status: "demo",
    where: "Solana devnet",
    since: "Test funds",
    story:
      "Football, as a live board. It runs on Solana devnet, with test USDC only, and it says so on the door.",
    proves: "The matchday loop can be tried before anyone is asked to trust it.",
    href: "https://match.buildingcultureid.space/",
    still: "/stills/match.jpg",
    stillAlt: "MatchMind live hub: a match card that says every match becomes your game.",
  },
  {
    id: "room-mining",
    name: "Human Value",
    group: "attention",
    status: "live",
    where: "Culture",
    since: "Passport",
    story:
      "Attention, priced as contribution. Knowledge, building, and a passport that starts at zero, so the score has to be earned in the open.",
    proves: "A person can be measured by what they notice.",
    href: "https://mining.buildingcultureid.space/",
    still: "/stills/mining.jpg",
    stillAlt: "Human Value opening: your attention is the most valuable thing you own.",
  },
  {
    id: "room-dex",
    name: "Builders DEX",
    group: "attention",
    status: "shell",
    where: "Web3",
    since: "A shell",
    story:
      "Where Web3 discovers who deserves to win. The live page is still mostly that sentence, and the room stays because the question is already the product.",
    proves: "A brief can be public before the interface is finished.",
    href: "https://dex.buildingcultureid.space/",
    still: "/stills/dex.jpg",
    stillAlt: "Builders DEX onboarding: you are entering the reputation layer.",
  },
  {
    id: "room-hero",
    name: "Local Hero",
    group: "world",
    status: "live",
    where: "The city",
    since: "2021",
    story:
      "A city game for things that happen outside. You take a quest on an ordinary walk: help someone, plant something, learn a street you already live on.",
    proves: "Screen time can be pointed at a neighborhood.",
    href: "https://localhero.space/",
    still: "/stills/hero.jpg",
    stillAlt: "Local Hero homepage over a city courtyard: real quests, real rewards.",
  },
  {
    id: "room-immogo",
    name: "IMMOGO",
    group: "world",
    status: "live",
    where: "Vienna",
    since: "Residences",
    story:
      "Vienna, searched before the listing is public. Light on the facade, an off-market scout, and an audit of the Grundbuch and the contract.",
    proves: "A search for a home can be specific to one city.",
    href: "https://immogo.buildingcultureid.space/arena",
    still: "/stills/immogo.jpg",
    stillAlt: "IMMOGO Vienna search: a dark apartment and a prompt for a dream residence.",
  },
  {
    id: "room-aethelred",
    name: "Aethelred",
    group: "world",
    status: "demo",
    where: "Solana",
    since: "Open source",
    story:
      "Heritage buildings, made legible. The live demo publishes 8 verified assets, €50.97M of portfolio NAV, and six Anchor programs. Those are its own numbers.",
    proves: "A European building can be read on a chain.",
    href: "https://rwa.buildingcultureid.space/",
    still: "/stills/aethelred.jpg",
    stillAlt: "Aethelred hub: a verified building card over a lit city model.",
  },
  {
    id: "room-kinder",
    name: "KinderStimme",
    group: "world",
    status: "live",
    where: "Austria",
    since: "Base · IPFS",
    story:
      "A companion for family proceedings: document, understand, and keep the child in the frame. The line on the door is the product. Nicht gegen Institutionen. Für Kinder.",
    proves: "A case file can be careful with the people inside it.",
    href: "https://forkids.buildingcultureid.space/#features",
    still: "/stills/kinder.jpg",
    stillAlt: "KinderStimme Austria: the digital companion for family proceedings.",
  },
  {
    id: "room-aura",
    name: "Aura OS",
    group: "company",
    status: "live",
    where: "Base",
    since: "Vienna",
    story:
      "You own the company. The AI does the work. It started as a tired homepage in Vienna, one real visit, then a Melange, then a city.",
    proves: "An operating system can sit behind a shop.",
    href: "https://aibusiness.fun/",
    still: "/stills/aura.jpg",
    stillAlt: "Aura OS: own a company, with a fair-launch note and a green start button.",
  },
];

export const proofIntro = {
  kicker: "Chapter IV",
  title: "Proof",
  lede: "The name resolves. A token, a wallet, a face, an essay.",
};

export const proofs = [
  {
    label: "ENS",
    value: "laszloleonardo.eth",
    detail: "Since 20 Sep 2022",
    href: "https://web3.bio/laszloleonardo.eth",
  },
  {
    label: "Culture name",
    value: "laszlo.culture",
    detail: "Culture Layer token #1 · Base",
    href: "https://app.buildingcultureid.space/id/laszlo.culture",
  },
  {
    label: "Wallet",
    value: "0x502c…c2e1",
    detail: "Published on the culture profile",
    href: "https://app.buildingcultureid.space/id/laszlo.culture",
  },
  {
    label: "Farcaster",
    value: "Leonardo.based",
    detail: "0xleonardo",
    href: "https://farcaster.xyz/0xleonardo",
  },
  {
    label: "Solana",
    value: "Aethelred",
    detail: "Open source · MIT · devnet",
    href: "https://github.com/Laszlo23/aethelred-rwa",
  },
  {
    label: "Essays",
    value: "Builder Chronicle",
    detail: "Dial-up whispers to onchain culture",
    href: "https://app.buildingcultureid.space/story",
  },
];

export const picturesIntro = {
  kicker: "The pictures",
  title: "Films",
  lede: "Made for the work, then put on the channel. Limes. The recent ones are here. Press play.",
  channel: "https://www.youtube.com/@LaszloBihary",
};

export const films = [
  { id: "_SPIHdEjCYc", title: "Hood", note: "Aura", year: "2026" },
  { id: "m46mK6Z3QVM", title: "Get the collection out there", note: "Aura OS", year: "2026" },
  { id: "yg3iXFIfKy0", title: "The AI Creator Company", note: "A company that makes", year: "2026" },
  { id: "as8k9ZVq1YM", title: "Meet Aura OS", note: "One system", year: "2026" },
  { id: "Qm8ZL1_VgFQ", title: "Culture Node", note: "Identity", year: "2026" },
  { id: "VTuQgB_ozNM", title: "Your attention creates value", note: "Reputation", year: "2026" },
  { id: "hY4Gl4d23JI", title: "Building Culture Mining", note: "Build a miner", year: "2026" },
  { id: "6d0GJhzI014", title: "Real assets", note: "Aethelred", year: "2026" },
  { id: "s-6HKUTL0bw", title: "Building Culture", note: "The layer", year: "2026" },
  { id: "2sgzLt069bo", title: "PropChain", note: "Buildings", year: "2026" },
  { id: "2e0pGXWO6Rc", title: "Elias Residence", note: "Vienna", year: "2025" },
] as const;

export const closeCopy = {
  kicker: "Close",
  title: "Open",
  lede: "Open to builders, partners, investors, and people who want a culture they can actually enter.",
};

export const contacts = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/laszlo-bihary/",
  },
  {
    label: "X",
    href: "https://x.com/bihary41418",
  },
  {
    label: "Farcaster",
    href: "https://farcaster.xyz/0xleonardo",
  },
  {
    label: "GitHub",
    href: "https://github.com/Laszlo23",
  },
  {
    label: "founders@aibusiness.fun",
    href: "mailto:founders@aibusiness.fun",
  },
];

export function groupLabel(group: RoomGroupId): string {
  switch (group) {
    case "identity":
      return "Identity";
    case "culture":
      return "Culture";
    case "attention":
      return "Attention";
    case "world":
      return "The real world";
    case "company":
      return "The company";
    default: {
      const exhaustive: never = group;
      return exhaustive;
    }
  }
}

export function statusLabel(status: RoomStatus): string {
  switch (status) {
    case "live":
      return "Live";
    case "demo":
      return "Demo";
    case "shell":
      return "In progress";
    default: {
      const exhaustive: never = status;
      return exhaustive;
    }
  }
}

export function placeOf(href: string): string {
  const url = new URL(href);
  const path = url.pathname === "/" ? "" : url.pathname.replace(/\/$/, "");
  return `${url.host}${path}`;
}
