/// <reference types="vite/client" />
/* ──────────────────────────────────────────────────────────────
   Meta Pixel tracking.

   The Pixel ID is read from the VITE_META_PIXEL_ID environment
   variable. If it is not set, nothing loads and nothing fires, so
   local development and preview builds stay clean.

   Conversions on this site all end in WhatsApp, so the events are:

     Lead        booking form submitted (strongest signal)
     Contact     WhatsApp or phone tapped directly
     ViewContent a treatment page opened

   Every event carries an eventID so the same action sent later
   through the Conversions API is deduplicated rather than counted
   twice.
   ────────────────────────────────────────────────────────────── */

declare global {
  interface Window {
    fbq?: ((...args: unknown[]) => void) & { callMethod?: unknown; queue?: unknown[] };
    _fbq?: unknown;
  }
}

const PIXEL_ID = import.meta.env.VITE_META_PIXEL_ID as string | undefined;

const eventId = () =>
  `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 10)}`;

/* Safe wrapper: never throws if the Pixel is blocked or absent */
export function track(event: string, params: Record<string, unknown> = {}) {
  try {
    window.fbq?.("track", event, params, { eventID: eventId() });
  } catch {
    /* tracking must never break the page */
  }
}

function loadPixel(id: string) {
  /* Standard Meta base code, written out rather than pasted as a
     blob so it can be read and reasoned about */
  const f = window as Window;
  if (f.fbq) return;
  const n: Window["fbq"] = function (...args: unknown[]) {
    // @ts-expect-error runtime shim matching Meta's own snippet
    n.callMethod ? n.callMethod.apply(n, args) : n.queue!.push(args);
  } as NonNullable<Window["fbq"]>;
  n.queue = [];
  f.fbq = n;
  f._fbq = n;

  const s = document.createElement("script");
  s.async = true;
  s.src = "https://connect.facebook.net/en_US/fbevents.js";
  document.head.appendChild(s);

  window.fbq?.("init", id);
  window.fbq?.("track", "PageView");
}

/* One delegated listener instead of editing every button.
   WhatsApp and phone links appear in the nav, hero, footer,
   emergency band and both service page CTAs. */
function onDocumentClick(e: MouseEvent) {
  const el = (e.target as HTMLElement | null)?.closest?.("a");
  if (!el) return;
  const href = el.getAttribute("href") || "";

  if (href.startsWith("tel:")) {
    track("Contact", { contact_method: "phone" });
    return;
  }
  if (href.includes("wa.me") || href.includes("whatsapp")) {
    /* The booking form fires its own Lead event, so skip the
       window.open it triggers and only count direct taps */
    if (!el.dataset.dacBooking) {
      track("Contact", { contact_method: "whatsapp" });
    }
  }
}

export function initTracking() {
  if (!PIXEL_ID) return;
  loadPixel(PIXEL_ID);
  document.addEventListener("click", onDocumentClick, { capture: true });
}

/* Called from the booking form once validation passes */
export function trackBooking(service: string) {
  track("Lead", { content_name: service, content_category: "appointment" });
}

/* Called from a treatment page when it mounts */
export function trackTreatmentView(slug: string, title: string) {
  track("ViewContent", { content_name: title, content_ids: [slug] });
}
