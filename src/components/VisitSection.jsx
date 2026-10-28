import { MapPin, Phone } from "lucide-react";
import { useReveal } from "../hooks.js";
import { WhatsAppIcon } from "./Icons.jsx";
import { buildMapsUrl, buildTelUrl, buildWhatsAppUrl } from "../utils.js";

// Page 3: the address box, phone numbers and the map button.
export default function VisitSection({ config: c }) {
  const ref = useReveal();
  const phones = [c.whatsapp1, c.whatsapp2];

  return (
    <section className="section section--visit" id="visit" ref={ref}>
      <div className="section__inner">
        <header className="section__head" data-reveal>
          <p className="eyebrow">Visit us</p>
          <h2 className="section__title">Find us in the Gold Souq</h2>
        </header>

        <address className="box" data-reveal style={{ "--i": 1 }}>
          <div className="box__block">
            <p className="box__label">Address</p>
            <p className="box__address">
              {c.address.lines.map((line) => (
                <span key={line}>{line}</span>
              ))}
            </p>
            <p className="box__area">{c.address.area}</p>
          </div>

          <div className="box__block">
            <p className="box__label">Call or WhatsApp</p>
            <ul className="phones">
              {phones.map((p) => (
                <li key={p.phone} className="phones__row">
                  <a
                    className="phones__call"
                    href={buildTelUrl(p.phone)}
                    aria-label={`Call ${p.display}`}
                  >
                    <Phone size={16} strokeWidth={1.5} aria-hidden="true" />
                    <span>{p.display}</span>
                  </a>
                  <a
                    className="phones__wa"
                    href={buildWhatsAppUrl(p.phone, c.whatsappMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`WhatsApp ${p.display}`}
                  >
                    <WhatsAppIcon width={20} height={20} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </address>

        <a
          className="cta"
          href={buildMapsUrl(c.location)}
          target="_blank"
          rel="noopener noreferrer"
          data-reveal
          style={{ "--i": 2 }}
        >
          <MapPin size={18} strokeWidth={1.6} aria-hidden="true" />
          <span>Open in Google Maps</span>
        </a>
      </div>

      <footer className="footer">
        <span className="footer__mark" aria-hidden="true" />
        <p>{c.footerText}</p>
        <p className="footer__legal">
          © {new Date().getFullYear()} Lumiya Gold and Diamonds
        </p>
      </footer>
    </section>
  );
}
