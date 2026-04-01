export const pageview = (url) => {
  if (typeof window !== 'undefined' && typeof window.fbq !== 'undefined') {
    window.fbq('track', 'PageView', { url });
  }
};

export const event = (name, options = {}) => {
  if (typeof window !== 'undefined' && typeof window.fbq !== 'undefined') {
    window.fbq('track', name, options);
  }
};
