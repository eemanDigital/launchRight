export const trackEvent = (eventName, params = {}) => {
  if (typeof window === "undefined") return;

  if (typeof window.gtag === "function") {
    window.gtag("event", eventName, params);
  }

  if (typeof window.fbq === "function") {
    window.fbq("track", eventName, params);
  }

  console.log("[Analytics]", eventName, params);
};

export const trackWhatsAppClick = (source, page) => {
  trackEvent("whatsapp_cta_click", {
    content_name: source,
    page: page || (typeof window !== "undefined" ? window.location.pathname : "unknown"),
    method: "WhatsApp",
  });
};
