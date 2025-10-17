"use client";

import dynamic from "next/dynamic";

const FacebookPixel = dynamic(() => import("@/components/FacebookPixel"), {
  ssr: false,
});

export default function FacebookPixelClient() {
  return <FacebookPixel />;
}
