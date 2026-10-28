const digitsOnly = (phone) => String(phone || "").replace(/\D/g, "");

// https://wa.me/<digits>?text=<message>   (spaces, "+" and dashes removed)
export const buildWhatsAppUrl = (phone, message) => {
  const digits = digitsOnly(phone);
  if (!digits) return null;
  const text = message ? `?text=${encodeURIComponent(message)}` : "";
  return `https://wa.me/${digits}${text}`;
};

// tel:+971508896916
export const buildTelUrl = (phone) => {
  const digits = digitsOnly(phone);
  return digits ? `tel:+${digits}` : null;
};

// Opens the exact pin in Google Maps (app on phones, website on desktop)
export const buildMapsUrl = ({ latitude, longitude }) =>
  `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`;

// Empty value means "not ready yet"
export const cleanUrl = (url) => (url && String(url).trim() ? url : null);
