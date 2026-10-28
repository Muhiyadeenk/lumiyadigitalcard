import { useHeroScroll, useRotatingIndex } from "../hooks.js";

// Page 1: the logo and the taglines, nothing else.
export default function Hero({ brandName, subtitle, taglines }) {
  const ref = useHeroScroll();
  const active = useRotatingIndex(taglines.length);

  return (
    <section className="hero" ref={ref} aria-label={`${brandName} ${subtitle}`}>
      <div className="hero__stage">
        <h1 className="hero__logo-wrap">
          <img
            className="hero__logo"
            src="/images/lumiya-logo.png"
            alt={`${brandName} ${subtitle}`}
            width="1089"
            height="1283"
            decoding="async"
            fetchpriority="high"
          />
        </h1>

        <div className="hero__tag">
          <span className="hero__rule" aria-hidden="true">
            <i />
          </span>
          {/* All taglines share one spot; the active one fades in. */}
          <div className="hero__taglines">
            {taglines.map((text, i) => (
              <p
                key={text}
                className={`hero__tagline${i === active ? " is-active" : ""}`}
                aria-hidden={i === active ? undefined : "true"}
              >
                {text}
              </p>
            ))}
          </div>
        </div>
      </div>

      <a className="hero__cue" href="#connect" aria-label="Scroll to contact options">
        <span>Scroll</span>
        <i aria-hidden="true" />
      </a>
    </section>
  );
}
