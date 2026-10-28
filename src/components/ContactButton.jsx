import { ArrowUpRight } from "lucide-react";

// A link button. With no href it becomes an inactive "coming soon" tile.
export default function ContactButton({
  icon: Icon,
  label,
  description,
  href,
  ariaLabel,
  index = 0,
}) {
  const inner = (
    <>
      <span className="btn__icon">
        <Icon />
      </span>
      <span className="btn__text">
        <span className="btn__label">{label}</span>
        {description && <span className="btn__desc">{description}</span>}
      </span>
    </>
  );

  const style = { "--i": index };

  if (!href) {
    return (
      <div className="btn btn--soon" style={style} data-reveal>
        {inner}
      </div>
    );
  }

  return (
    <a
      className="btn"
      style={style}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel || label}
      data-reveal
    >
      {inner}
      <ArrowUpRight
        className="btn__arrow"
        size={18}
        strokeWidth={1.5}
        aria-hidden="true"
      />
    </a>
  );
}
