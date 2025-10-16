import type { Metadata } from "next";
import { Inter, Lora } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SPA Ondalis - Equilíbrio e bem-estar em cada toque",
  description:
    "Descubra o poder do relaxamento no SPA Ondalis. Massagens terapêuticas, drenagem linfática, reflexologia e muito mais. Agende sua sessão de bem-estar.",
  keywords:
    "spa, massagem, relaxamento, bem-estar, terapias, drenagem linfática, reflexologia, pedras quentes",
  authors: [{ name: "SPA Ondalis" }],
  creator: "SPA Ondalis",
  publisher: "SPA Ondalis",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://spaondalis.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "SPA Ondalis - Equilíbrio e bem-estar em cada toque",
    description:
      "Descubra o poder do relaxamento no SPA Ondalis. Massagens terapêuticas, drenagem linfática, reflexologia e muito mais.",
    url: "https://spaondalis.com",
    siteName: "SPA Ondalis",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "SPA Ondalis - Ambiente relaxante",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SPA Ondalis - Equilíbrio e bem-estar em cada toque",
    description:
      "Descubra o poder do relaxamento no SPA Ondalis. Massagens terapêuticas, drenagem linfática, reflexologia e muito mais.",
    images: ["/og-image.jpg"],
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        {/* Google Analytics */}
        {process.env.NEXT_PUBLIC_GTAG && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GTAG}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GTAG}');
              `}
            </Script>
          </>
        )}

        {/* Facebook Pixel */}
        {process.env.NEXT_PUBLIC_FB_PIXEL && (
          <Script id="facebook-pixel" strategy="afterInteractive">
            {`
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '${process.env.NEXT_PUBLIC_FB_PIXEL}');
              fbq('track', 'PageView');
            `}
          </Script>
        )}
      </head>
      <body
        className={`${inter.variable} ${lora.variable} antialiased font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
