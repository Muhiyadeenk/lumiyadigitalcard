import { Globe, MapPin } from "lucide-react";
import { useReveal } from "../hooks.js";
import ContactButton from "./ContactButton.jsx";
import { InstagramIcon, WhatsAppIcon } from "./Icons.jsx";
import {
  buildMapsUrl,
  buildWhatsAppUrl,
  cleanUrl,
} from "../utils.js";

// Page 2: the five buttons.
export default function ConnectSection({ config: c }) {
  const ref = useReveal();

  const buttons = [
    {
      icon: InstagramIcon,
      label: "Instagram",
      description: "Explore our collections",
      href: cleanUrl(c.instagramUrl),
      ariaLabel: "Open Lumiya on Instagram",
    },
    {
      icon: WhatsAppIcon,
      label: c.whatsapp1.label,
      description: c.whatsapp1.display,
      href: buildWhatsAppUrl(c.whatsapp1.phone, c.whatsappMessage),
      ariaLabel: `Chat with Lumiya on WhatsApp, ${c.whatsapp1.display}`,
    },
    {
      icon: WhatsAppIcon,
      label: c.whatsapp2.label,
      description: c.whatsapp2.display,
      href: buildWhatsAppUrl(c.whatsapp2.phone, c.whatsappMessage),
      ariaLabel: `Chat with Lumiya on WhatsApp, ${c.whatsapp2.display}`,
    },
    {
      icon: Globe,
      label: "Visit Our Website",
      // No website yet → the button shows "Coming soon" and is not a link
      description: cleanUrl(c.websiteUrl) ? "Discover Lumiya online" : "Coming soon",
      href: cleanUrl(c.websiteUrl),
      ariaLabel: "Visit the Lumiya website",
    },
    {
      icon: MapPin,
      label: "Find Our Location",
      description: "Gold Souq, Deira, Dubai",
      href: buildMapsUrl(c.location),
      ariaLabel: "Open the Lumiya location in Google Maps",
    },
  ];

  return (
    <section className="section" id="connect" ref={ref}>
      <div className="section__inner">
        <header className="section__head" data-reveal>
          <p className="eyebrow">Connect</p>
          <h2 className="section__title">Stay in touch</h2>
        </header>

        <nav className="links" aria-label="Contact Lumiya">
          {buttons.map((b, i) => (
            <ContactButton key={b.label} index={i + 1} {...b} />
          ))}
        </nav>
      </div>
    </section>
  );
}
