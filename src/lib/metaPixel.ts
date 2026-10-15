declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

/**
 * Fires the Meta Pixel "SubmitApplication" event. Call only after the lead
 * has been accepted by /api/submit-lead, so the event never fires on a page
 * load or a failed submit.
 */
export function trackSubmitApplication() {
  window.fbq?.("track", "SubmitApplication");
}
