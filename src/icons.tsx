/* Custom hand-drawn inline SVG icon set — consistent 1.7px stroke */

type IconProps = { className?: string };

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  viewBox: "0 0 24 24",
};

export const ToothIcon = ({ className = "w-6 h-6" }: IconProps) => (
  <svg {...base} className={className} aria-hidden="true">
    <path d="M12 3.4c-1.9-1-4.6-1.4-6.1.2C4.3 5.2 4.5 7.4 5 9.4c.5 1.8.7 3.8 1 5.7.2 1.6.5 5.6 2 5.6 1.8 0 1.6-3.3 2.2-5.5.3-1 .9-1.7 1.8-1.7s1.5.7 1.8 1.7c.6 2.2.4 5.5 2.2 5.5 1.5 0 1.8-4 2-5.6.3-1.9.5-3.9 1-5.7.5-2 .7-4.2-.9-5.8-1.5-1.6-4.2-1.2-6.1-.2Z" />
  </svg>
);

export const SparkleIcon = ({ className = "w-5 h-5" }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M12 2.5l2.1 7.4 7.4 2.1-7.4 2.1L12 21.5l-2.1-7.4-7.4-2.1 7.4-2.1L12 2.5z" />
  </svg>
);

export const WhitenIcon = ({ className = "w-7 h-7" }: IconProps) => (
  <svg {...base} className={className} aria-hidden="true">
    <path d="M11 4.6c-1.6-.8-3.8-1.1-5 .2C4.7 6.1 4.9 7.9 5.3 9.5c.4 1.5.6 3.1.8 4.7.2 1.3.4 4.5 1.7 4.5 1.5 0 1.3-2.7 1.8-4.5.2-.8.7-1.4 1.4-1.4s1.2.6 1.4 1.4c.5 1.8.3 4.5 1.8 4.5 1.3 0 1.5-3.2 1.7-4.5.2-1.6.4-3.2.8-4.7.2-.8.3-1.7.2-2.5" />
    <path d="M18.5 2.5l.9 3.1 3.1.9-3.1.9-.9 3.1-.9-3.1-3.1-.9 3.1-.9.9-3.1z" />
  </svg>
);

export const ImplantIcon = ({ className = "w-7 h-7" }: IconProps) => (
  <svg {...base} className={className} aria-hidden="true">
    <path d="M8.2 2.8h7.6l-1 4.6H9.2l-1-4.6z" />
    <path d="M9.4 7.4h5.2v3.2c0 4.2-1 7.6-2.6 9.9-1.6-2.3-2.6-5.7-2.6-9.9V7.4z" />
    <path d="M9.4 10.4h5.2M9.8 13.2h4.4M10.4 16h3.2" />
  </svg>
);

export const BracesIcon = ({ className = "w-7 h-7" }: IconProps) => (
  <svg {...base} className={className} aria-hidden="true">
    <path d="M3.5 12.5C3.5 7.5 7.2 4 12 4s8.5 3.5 8.5 8.5" />
    <rect x="4.4" y="11" width="3.4" height="4.4" rx="1" />
    <rect x="10.3" y="12.2" width="3.4" height="4.4" rx="1" />
    <rect x="16.2" y="11" width="3.4" height="4.4" rx="1" />
    <path d="M7.8 13.2h2.5M13.7 14.4h2.5" />
  </svg>
);

export const RootCanalIcon = ({ className = "w-7 h-7" }: IconProps) => (
  <svg {...base} className={className} aria-hidden="true">
    <path d="M12 3.6c-1.8-.9-4.3-1.3-5.7.2-1.5 1.5-1.3 3.6-.8 5.5.4 1.7.6 3.5.9 5.3.2 1.5.5 5.2 1.8 5.2 1.7 0 1.5-3.1 2-5.1.3-1 .9-1.6 1.8-1.6s1.5.6 1.8 1.6c.5 2 .3 5.1 2 5.1 1.3 0 1.6-3.7 1.8-5.2.3-1.8.5-3.6.9-5.3.5-1.9.7-4-.8-5.5-1.4-1.5-3.9-1.1-5.7-.2Z" />
    <path d="M8.2 10.8h1.9l1-1.9 1.8 3.6 1-1.7h1.9" />
  </svg>
);

export const CleanIcon = ({ className = "w-7 h-7" }: IconProps) => (
  <svg {...base} className={className} aria-hidden="true">
    <path d="M11.4 5.2c-1.5-.8-3.6-1.1-4.8.2-1.3 1.4-1.1 3.3-.7 5 .4 1.5.5 3.2.8 4.8.2 1.4.4 4.3 1.6 4.3 1.4 0 1.2-2.5 1.7-4.2.2-.8.7-1.3 1.4-1.3s1.2.5 1.4 1.3c.5 1.7.3 4.2 1.7 4.2.5 0 .8-.5 1-1.2" />
    <path d="M17.5 3.2v4.4M15.3 5.4h4.4" />
    <path d="M19.8 10.2l.6 2 2 .6-2 .6-.6 2-.6-2-2-.6 2-.6.6-2z" />
  </svg>
);

export const VeneerIcon = ({ className = "w-7 h-7" }: IconProps) => (
  <svg {...base} className={className} aria-hidden="true">
    <path d="M7 3.5h10l3.5 5L12 21 3.5 8.5l3.5-5z" />
    <path d="M3.5 8.5h17M12 21 8.4 8.5 12 3.5l3.6 5L12 21z" />
  </svg>
);

export const StarIcon = ({ className = "w-4 h-4" }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M12 2.8l2.8 5.9 6.4.8-4.7 4.4 1.2 6.3L12 17.1l-5.7 3.1 1.2-6.3-4.7-4.4 6.4-.8L12 2.8z" />
  </svg>
);

export const CalendarIcon = ({ className = "w-5 h-5" }: IconProps) => (
  <svg {...base} className={className} aria-hidden="true">
    <rect x="3.5" y="5" width="17" height="15.5" rx="2.5" />
    <path d="M8 3v4M16 3v4M3.5 10h17" />
  </svg>
);

export const ClockIcon = ({ className = "w-5 h-5" }: IconProps) => (
  <svg {...base} className={className} aria-hidden="true">
    <circle cx="12" cy="12" r="8.5" />
    <path d="M12 7.5V12l3 2" />
  </svg>
);

export const PhoneIcon = ({ className = "w-5 h-5" }: IconProps) => (
  <svg {...base} className={className} aria-hidden="true">
    <path d="M5.2 3.8h3.4l1.6 4.2-2.1 1.6a12.8 12.8 0 0 0 6.3 6.3l1.6-2.1 4.2 1.6v3.4c0 .9-.7 1.6-1.6 1.6C10.3 20.4 3.6 13.7 3.6 5.4c0-.9.7-1.6 1.6-1.6z" />
  </svg>
);

export const PinIcon = ({ className = "w-5 h-5" }: IconProps) => (
  <svg {...base} className={className} aria-hidden="true">
    <path d="M12 21s-7-6.1-7-11a7 7 0 0 1 14 0c0 4.9-7 11-7 11z" />
    <circle cx="12" cy="10" r="2.6" />
  </svg>
);

export const WhatsAppIcon = ({ className = "w-5 h-5" }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
  </svg>
);

export const ArrowRightIcon = ({ className = "w-4 h-4" }: IconProps) => (
  <svg {...base} strokeWidth={2} className={className} aria-hidden="true">
    <path d="M4.5 12h15M13 5.5l6.5 6.5-6.5 6.5" />
  </svg>
);

export const ArrowUpRightIcon = ({ className = "w-4 h-4" }: IconProps) => (
  <svg {...base} strokeWidth={2} className={className} aria-hidden="true">
    <path d="M6.5 17.5 17.5 6.5M8.5 6.5h9v9" />
  </svg>
);

export const ChevronLeftIcon = ({ className = "w-5 h-5" }: IconProps) => (
  <svg {...base} strokeWidth={2.2} className={className} aria-hidden="true">
    <path d="M14.5 5.5 8 12l6.5 6.5" />
  </svg>
);

export const ChevronRightIcon = ({ className = "w-5 h-5" }: IconProps) => (
  <svg {...base} strokeWidth={2.2} className={className} aria-hidden="true">
    <path d="M9.5 5.5 16 12l-6.5 6.5" />
  </svg>
);

export const CheckIcon = ({ className = "w-4 h-4" }: IconProps) => (
  <svg {...base} strokeWidth={2.4} className={className} aria-hidden="true">
    <path d="M4.5 12.5l5 5 10-11" />
  </svg>
);

export const ShieldIcon = ({ className = "w-6 h-6" }: IconProps) => (
  <svg {...base} className={className} aria-hidden="true">
    <path d="M12 3 4.8 5.8v5.4c0 4.6 3 8 7.2 9.8 4.2-1.8 7.2-5.2 7.2-9.8V5.8L12 3z" />
    <path d="M8.8 11.8l2.2 2.2 4.2-4.4" />
  </svg>
);

export const HeartPulseIcon = ({ className = "w-6 h-6" }: IconProps) => (
  <svg {...base} className={className} aria-hidden="true">
    <path d="M12 20.5S3.5 15.3 3.5 9.6C3.5 6.8 5.6 5 8 5c1.7 0 3.2.9 4 2.3C12.8 5.9 14.3 5 16 5c2.4 0 4.5 1.8 4.5 4.6 0 5.7-8.5 10.9-8.5 10.9z" />
    <path d="M6.5 12h3l1.2-2 2.4 3.6 1.2-1.6h3.2" />
  </svg>
);

export const BadgeIcon = ({ className = "w-6 h-6" }: IconProps) => (
  <svg {...base} className={className} aria-hidden="true">
    <circle cx="12" cy="9.5" r="5.5" />
    <path d="M12 7.2l.9 1.8 2 .3-1.4 1.4.3 2-1.8-1-1.8 1 .3-2-1.4-1.4 2-.3.9-1.8z" />
    <path d="M8.5 14 7 21l5-2.6L17 21l-1.5-7" />
  </svg>
);

export const PulseIcon = ({ className = "w-6 h-6" }: IconProps) => (
  <svg {...base} className={className} aria-hidden="true">
    <circle cx="12" cy="12" r="8.5" />
    <path d="M6.5 12h2.6l1.3-2.6 2.9 5.2 1.3-2.6h2.9" />
  </svg>
);

export const QuoteIcon = ({ className = "w-8 h-8" }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
  </svg>
);

export const MenuIcon = ({ className = "w-6 h-6" }: IconProps) => (
  <svg {...base} strokeWidth={2} className={className} aria-hidden="true">
    <path d="M4 7h16M4 12h16M4 17h10" />
  </svg>
);

export const CloseIcon = ({ className = "w-6 h-6" }: IconProps) => (
  <svg {...base} strokeWidth={2} className={className} aria-hidden="true">
    <path d="M6 6l12 12M18 6 6 18" />
  </svg>
);

export const FacebookIcon = ({ className = "w-5 h-5" }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M13.5 21v-7.4h2.5l.4-2.9h-2.9V8.8c0-.8.2-1.4 1.4-1.4h1.6V4.8c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.4-4 4.1v1.9H7.6v2.9h2.5V21h3.4z" />
  </svg>
);

export const InstagramIcon = ({ className = "w-5 h-5" }: IconProps) => (
  <svg {...base} className={className} aria-hidden="true">
    <rect x="4" y="4" width="16" height="16" rx="4.5" />
    <circle cx="12" cy="12" r="3.6" />
    <circle cx="16.8" cy="7.2" r="0.6" fill="currentColor" stroke="none" />
  </svg>
);

export const MapIcon = ({ className = "w-6 h-6" }: IconProps) => (
  <svg {...base} className={className} aria-hidden="true">
    <path d="M9 4.5 3.5 6.5v13L9 17.5l6 2 5.5-2v-13l-5.5 2-6-2z" />
    <path d="M9 4.5v13M15 6.5v13" />
  </svg>
);
