declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

const LEAD_FLAG = "nw:lead-submitted";

/**
 * Sends the visitor to the thank-you page with a full page load, leaving a
 * one-time flag so that page fires "SubmitApplication". Call only after
 * /api/submit-lead has accepted the lead.
 */
export function goToThankYou(href: string) {
  try {
    sessionStorage.setItem(LEAD_FLAG, "1");
  } catch {
    // Storage blocked (private mode etc.): the page still loads, untracked.
  }
  window.location.assign(href);
}

/**
 * Fires "SubmitApplication" once if the visitor arrived from a successful
 * submit. Refreshes and direct visits to the thank-you page find no flag.
 */
export function trackSubmitApplicationOnce() {
  try {
    if (sessionStorage.getItem(LEAD_FLAG) !== "1") return;
    sessionStorage.removeItem(LEAD_FLAG);
  } catch {
    return;
  }

  // The pixel snippet loads after hydration, so wait for fbq to appear.
  let tries = 0;
  const fire = () => {
    if (window.fbq) {
      window.fbq("track", "SubmitApplication");
    } else if (tries++ < 50) {
      setTimeout(fire, 100);
    }
  };
  fire();
}
