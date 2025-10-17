import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
import FacebookPixelClient from "@/components/FacebookPixelClient";
import "../globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ondalis.com.br"),
  title: "Bio | SPA Ondalis - Links Diretos para Serviços",
  description:
    "Links diretos para agendamento e serviços do SPA Ondalis. Massagens relaxantes, terapêuticas, pedras quentes e muito mais em Campo Grande - MS.",
  keywords:
    "spa ondalis, massagem, relaxamento, bem-estar, instagram bio, contato direto, whatsapp, Campo Grande MS",
  authors: [{ name: "SPA Ondalis" }],
  creator: "SPA Ondalis",
  publisher: "SPA Ondalis",
  alternates: {
    canonical: "https://ondalis.com.br/bio",
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
  openGraph: {
    title: "Bio | SPA Ondalis - Links Diretos para Serviços",
    description:
      "Acesso direto aos nossos serviços de massagens e bem-estar. Relaxamento, terapia, pedras quentes e experiências exclusivas.",
    url: "https://ondalis.com.br/bio",
    siteName: "SPA Ondalis",
    images: [
      {
        url: "https://ondalis.com.br/images/social.png",
        width: 1200,
        height: 630,
        alt: "SPA Ondalis - Massagens e Bem-estar em Campo Grande - MS",
        type: "image/png",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bio | SPA Ondalis - Links Diretos para Serviços",
    description:
      "Acesso direto aos nossos serviços de massagens e bem-estar. Relaxamento, terapia, pedras quentes e experiências exclusivas.",
    images: ["https://ondalis.com.br/images/social.png"],
    creator: "@spaondalis",
    site: "@spaondalis",
  },
  other: {
    "linkedin:owner": "spa-ondalis",
    "linkedin:title": "Bio | SPA Ondalis - Links Diretos para Serviços",
    "linkedin:description":
      "Acesso direto aos nossos serviços de massagens e bem-estar. Relaxamento, terapia, pedras quentes e experiências exclusivas.",
    "linkedin:image": "https://ondalis.com.br/images/social.png",
  },
};

export default function BioLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} ${playfair.variable}`}>
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
