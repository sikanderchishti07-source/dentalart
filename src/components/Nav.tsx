import { useEffect, useState } from "react";
import { CLINIC } from "../data";
import {
  ToothIcon,
  SparkleIcon,
  PhoneIcon,
  ClockIcon,
  WhatsAppIcon,
  MenuIcon,
  CloseIcon,
} from "../icons";

const LINKS = [
  { label: "Treatments", href: "#services" },
  { label: "Results", href: "#results" },
  { label: "Doctors", href: "#doctors" },
  { label: "Reviews", href: "#reviews" },
  { label: "FAQ", href: "#faq" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* Utility bar */}
      <div
        className={`hidden md:block bg-deep text-paper/85 overflow-hidden transition-all duration-500 ${
          scrolled ? "max-h-0" : "max-h-12"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 h-9 flex items-center justify-between text-[12.5px] font-semibold tracking-wide">
          <div className="flex items-center gap-6">
            <a
              href={CLINIC.phoneHref}
              className="flex items-center gap-2 hover:text-sky-brand transition-colors"
            >
              <PhoneIcon className="w-3.5 h-3.5" /> {CLINIC.phoneDisplay}
            </a>
            <span className="hidden lg:flex items-center gap-2 text-paper/65">
              <ClockIcon className="w-3.5 h-3.5" /> Mon–Sat · 10:00 AM – 8:00 PM
            </span>
          </div>
          <div className="flex items-center gap-2 text-mint">
            <span className="relative inline-block w-1.5 h-1.5 rounded-full bg-mint text-mint pulse-ring" />
            <span className="uppercase tracking-[0.18em] text-[10.5px] font-extrabold">
              Accepting new patients
            </span>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <nav
        aria-label="Main navigation"
        className={`transition-all duration-500 border-b ${
          scrolled
            ? "bg-paper/90 backdrop-blur-xl border-foam shadow-[0_8px_30px_-18px_rgba(4,29,48,0.25)]"
            : "bg-transparent border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 h-[70px] flex items-center justify-between gap-6">
          {/* Logo */}
          <a href="#top" className="flex items-center gap-2.5 group" aria-label="DentalArt Care — home">
            <span className="relative w-10 h-10 rounded-[14px] bg-primary text-white grid place-items-center shadow-[0_8px_20px_-8px_rgba(2,136,209,0.65)] transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-105">
              <ToothIcon className="w-[22px] h-[22px]" />
              <SparkleIcon className="absolute -top-1.5 -right-1.5 w-3.5 h-3.5 text-mint" />
            </span>
            <span className="leading-none">
              <span className="block font-display font-semibold text-[19px] tracking-tight text-ink">
                DentalArt<span className="text-primary"> Care</span>
              </span>
              <span className="block text-[9.5px] font-bold uppercase tracking-[0.3em] text-mist mt-1">
                Smile Studio
              </span>
            </span>
          </a>

          {/* Desktop links */}
          <ul className="hidden lg:flex items-center gap-8">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="link-line text-[13.5px] font-bold text-slate-brand hover:text-ink transition-colors"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <a
              href="#booking"
              className="hidden sm:inline-flex items-center gap-2 rounded-full bg-ink text-paper pl-5 pr-4 py-2.5 text-[13px] font-bold hover:bg-primary transition-all duration-300 hover:shadow-[0_10px_24px_-10px_rgba(2,136,209,0.7)] hover:-translate-y-0.5"
            >
              Book Appointment
              <span className="w-6 h-6 rounded-full bg-paper/15 grid place-items-center">
                <SparkleIcon className="w-3 h-3 text-sky-brand" />
              </span>
            </a>
            <a
              href={CLINIC.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat on WhatsApp"
              className="hidden sm:grid w-10 h-10 place-items-center rounded-full border border-foam text-wa hover:bg-wa hover:text-white hover:border-wa transition-all duration-300"
            >
              <WhatsAppIcon className="w-[18px] h-[18px]" />
            </a>
            <button
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              className="lg:hidden w-10 h-10 grid place-items-center rounded-full border border-foam text-ink hover:bg-foam transition-colors"
            >
              <MenuIcon />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-[70] lg:hidden transition-opacity duration-300 ${
          open ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden={!open}
      >
        <div className="absolute inset-0 bg-deep/60 backdrop-blur-sm" onClick={() => setOpen(false)} />
        <div
          className={`absolute right-0 top-0 h-full w-[300px] bg-paper shadow-2xl p-7 flex flex-col transition-transform duration-400 ease-out ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
          role="dialog"
          aria-label="Mobile menu"
        >
          <div className="flex items-center justify-between mb-8">
            <span className="font-display font-semibold text-lg text-ink">
              DentalArt<span className="text-primary"> Care</span>
            </span>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="w-9 h-9 grid place-items-center rounded-full border border-foam text-ink hover:bg-foam transition-colors"
            >
              <CloseIcon className="w-5 h-5" />
            </button>
          </div>
          <ul className="space-y-1">
            {LINKS.map((l, i) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between py-3.5 border-b border-foam text-[15px] font-bold text-ink hover:text-primary transition-colors"
                >
                  {l.label}
                  <span className="text-[11px] font-extrabold text-mist">0{i + 1}</span>
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-auto space-y-3">
            <a
              href="#booking"
              onClick={() => setOpen(false)}
              className="flex items-center justify-center gap-2 rounded-full bg-primary text-white py-3.5 text-sm font-bold hover:bg-primary-deep transition-colors"
            >
              Book Appointment
            </a>
            <a
              href={CLINIC.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-full border-2 border-wa/40 text-moss py-3 text-sm font-bold hover:bg-wa hover:text-white transition-colors"
            >
              <WhatsAppIcon className="w-4 h-4" /> WhatsApp Us
            </a>
            <a href={CLINIC.phoneHref} className="block text-center text-[13px] font-bold text-slate-brand">
              {CLINIC.phoneDisplay}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
