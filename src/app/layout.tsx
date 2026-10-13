import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import { contacts, profile, site } from "@/content/chronicle";
import "./globals.css";

const sans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
});

const mono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

const serif = Instrument_Serif({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

const sameAs = [
  ...contacts
    .map((contact) => contact.href)
    .filter((href) => href.startsWith("https://")),
  profile.ens.href,
  profile.cultureName.href,
  "https://www.youtube.com/@LaszloBihary",
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${site.url}/#laszlo`,
      name: profile.name,
      url: site.url,
      email: "founders@aibusiness.fun",
      jobTitle: "Founder",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Vienna",
        addressCountry: "AT",
      },
      sameAs,
    },
    {
      "@type": "WebSite",
      "@id": `${site.url}/#site`,
      url: site.url,
      name: site.title,
      description: site.description,
      inLanguage: "en",
      author: { "@id": `${site.url}/#laszlo` },
    },
    {
      "@type": "ProfilePage",
      "@id": `${site.url}/#page`,
      url: site.url,
      name: site.title,
      description: site.description,
      inLanguage: "en",
      isPartOf: { "@id": `${site.url}/#site` },
      mainEntity: { "@id": `${site.url}/#laszlo` },
    },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    absolute: site.title,
  },
  description: site.description,
  applicationName: "Culture Chronicle",
  authors: [{ name: profile.name, url: site.url }],
  creator: profile.name,
  publisher: profile.name,
  category: "portfolio",
  keywords: [
    "Laszlo Bihary",
    "Building Culture",
    "Vienna",
    "culture layer",
    "laszlo.culture",
    "laszloleonardo.eth",
  ],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: site.title,
    description: `${profile.thesis} ${profile.place}.`,
    type: "website",
    url: "/",
    siteName: site.name,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: profile.thesis,
    creator: "@bihary41418",
  },
};

export const viewport: Viewport = {
  themeColor: "#0c0b0a",
  colorScheme: "dark",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${sans.variable} ${mono.variable} ${serif.variable}`}
    >
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <div className="grain" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
