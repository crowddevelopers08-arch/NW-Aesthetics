"use client";

import { useEffect } from "react";
import { trackSubmitApplicationOnce } from "@/lib/metaPixel";

/** Drop onto a thank-you page to fire the Meta "SubmitApplication" event. */
export default function SubmitApplicationEvent() {
  useEffect(() => {
    trackSubmitApplicationOnce();
  }, []);

  return null;
}
