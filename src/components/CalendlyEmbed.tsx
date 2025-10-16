"use client";

import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

export default function CalendlyEmbed() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "avaliacao" });
      cal("ui", { hideEventTypeDetails: false, layout: "month_view" });
    })();
  }, []);

  return (
    <Cal
      id="calendly"
      namespace="agenda"
      calLink={
        process.env.NEXT_PUBLIC_CAL_URL?.replace("https://cal.com/", "") ||
        "ondalis"
      }
      style={{ width: "100%", height: "100%", overflow: "scroll" }}
      config={{ layout: "month_view" }}
    />
  );
}
