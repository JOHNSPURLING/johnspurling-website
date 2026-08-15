import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { headers } from "next/headers";
import { InteractiveBackground } from "@/components/background/InteractiveBackground";
import { siteConfig } from "./data/site-content";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

async function getMetadataBase() {
  const requestHeaders = await headers();
  const host =
    requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host");
  const protocol = requestHeaders.get("x-forwarded-proto") ?? "https";

  return new URL(host ? `${protocol}://${host}` : siteConfig.canonicalUrl);
}

export async function generateMetadata(): Promise<Metadata> {
  const metadataBase = await getMetadataBase();
  const imageUrl = new URL("/og.png", metadataBase).toString();

  return {
    metadataBase,
    title: siteConfig.title,
    description: siteConfig.description,
    icons: {
      icon: "/favicon.svg",
      shortcut: "/favicon.svg",
    },
    openGraph: {
      title: siteConfig.title,
      description: siteConfig.description,
      type: "website",
      url: metadataBase.toString(),
      images: [
        {
          url: imageUrl,
          width: 240,
          height: 153,
          alt: "John Spurling - Education / Behaviour / AI & Tech / Tools / Media",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: siteConfig.title,
      description: siteConfig.description,
      images: [imageUrl],
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <InteractiveBackground />
        {children}
      </body>
    </html>
  );
}
