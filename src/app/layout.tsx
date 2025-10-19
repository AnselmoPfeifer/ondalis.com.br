import type { Metadata } from "next";
import {
  Inter,
  Playfair_Display,
  Poppins,
  Source_Sans_3,
  Crimson_Text,
} from "next/font/google";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
import FacebookPixelClient from "@/components/FacebookPixelClient";
import "./globals.css";

// Primary sans-serif font - Modern, clean, highly readable
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
});

// Elegant serif for headings - Sophisticated and luxurious
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  preload: true,
  weight: ["400", "500", "600", "700"],
});

// Modern sans-serif alternative - Clean and contemporary
const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

// Professional body text - Excellent readability
const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-source-sans",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

// Elegant serif for special headings - Refined and classic
const crimsonText = Crimson_Text({
  subsets: ["latin"],
  variable: "--font-crimson",
  display: "swap",
  weight: ["400", "600", "700"],
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://ondalis.com.br"),
  title: "Ondalis | Massagens e Bem-Estar em Campo Grande - MS",
  description:
    "Ondalis é o refúgio ideal para relaxar corpo e mente em Campo Grande - MS. Experimente massagens relaxantes, terapêuticas, pedras quentes e muito mais em um ambiente de conforto e harmonia. Equilíbrio e bem-estar em cada toque.",
  keywords:
    "Ondalis, massagem Campo Grande MS, massagem relaxante, massagem terapêutica, pedras quentes, liberação miofascial, bem-estar Campo Grande, relaxamento, terapias Campo Grande, massagem MS, Ondalis Campo Grande",
  authors: [{ name: "Ondalis" }],
  creator: "Ondalis",
  publisher: "Ondalis",
  alternates: {
    canonical: "https://ondalis.com.br",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    shortcut: "/favicon/favicon.ico",
    apple: "/favicon/apple-touch-icon.png",
    other: [
      {
        rel: "android-chrome-192x192",
        url: "/favicon/android-chrome-192x192.png",
      },
      {
        rel: "android-chrome-512x512",
        url: "/favicon/android-chrome-512x512.png",
      },
    ],
  },
  manifest: "/favicon/site.webmanifest",
  openGraph: {
    title: "Ondalis | Massagens e Bem-Estar em Campo Grande - MS",
    description:
      "Ondalis é o refúgio ideal para relaxar corpo e mente em Campo Grande - MS. Experimente massagens relaxantes, terapêuticas, pedras quentes e muito mais em um ambiente de conforto e harmonia. Equilíbrio e bem-estar em cada toque.",
    url: "https://ondalis.com.br",
    siteName: "Ondalis",
    images: [
      {
        url: "https://ondalis.com.br/images/social.png",
        width: 1200,
        height: 630,
        alt: "Ondalis Campo Grande MS - Massagens e Bem-estar",
        type: "image/png",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ondalis | Massagens e Bem-Estar em Campo Grande - MS",
    description:
      "Ondalis é o refúgio ideal para relaxar corpo e mente em Campo Grande - MS. Experimente massagens relaxantes, terapêuticas, pedras quentes e muito mais em um ambiente de conforto e harmonia. Equilíbrio e bem-estar em cada toque.",
    images: ["/images/social.png"],
    creator: "@ondalis.br",
    site: "@ondalis.br",
  },
  other: {
    "linkedin:owner": "ondalis",
    "linkedin:title": "Ondalis | Massagens e Bem-Estar em Campo Grande - MS",
    "linkedin:description":
      "Ondalis é o refúgio ideal para relaxar corpo e mente em Campo Grande - MS. Experimente massagens relaxantes, terapêuticas, pedras quentes e muito mais em um ambiente de conforto e harmonia. Equilíbrio e bem-estar em cada toque.",
    "linkedin:image": "/images/social.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body
        className={`${inter.variable} ${playfair.variable} ${poppins.variable} ${sourceSans.variable} ${crimsonText.variable}`}
      >
        <GoogleTagManager
          gtmId={process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID ?? ""}
        />
        <GoogleAnalytics
          gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID ?? ""}
        />
        <FacebookPixelClient />

        {children}
      </body>
    </html>
  );
}
