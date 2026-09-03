import { useEffect, useState } from "react";
import { CLINIC } from "../data";
import {
  ToothIcon,
  SparkleIcon,
  PhoneIcon,
  ClockIcon,
  PinIcon,
  WhatsAppIcon,
  MenuIcon,
  CloseIcon,
  ArrowRightIcon,
} from "../icons";

const LINKS = [
  { label: "Treatments", href: "#services" },
  { label: "Results", href: "#results" },
  { label: "Doctors", href: "#doctors" },
  { label: "Reviews", href: "#reviews" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Highlight the section currently in view */
  useEffect(() => {
    const ids = LINKS.map((l) => l.href.slice(1));
    const els = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));
    if (!els.length) return;
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive("#" + visible.target.id);
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: [0, 0.25, 0.5] }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  /* Close the drawer on Escape */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* ── Utility bar ── */}
      <div
        className={`hidden overflow-hidden bg-deep text-paper/85 transition-all duration-500 md:block ${
          scrolled ? "max-h-0" : "max-h-12"
        }`}
      >
        <div className="mx-auto flex h-9 max-w-7xl items-center justify-between px-6 text-[12.5px] font-semibold tracking-wide lg:px-10">
          <div className="flex items-center gap-6">
            <a
              href={CLINIC.phoneHref}
              className="flex items-center gap-2 transition-colors hover:text-sky-brand"
            >
              <PhoneIcon className="h-3.5 w-3.5" /> {CLINIC.phoneDisplay}
            </a>
            <span className="hidden items-center gap-2 text-paper/65 lg:flex">
              <ClockIcon className="h-3.5 w-3.5" /> {CLINIC.hours[0].days} ·{" "}
              {CLINIC.hours[0].time}
            </span>
          </div>
          {/* Location instead of a second "accepting patients" — the hero
              already says that, and the address is the thing people look for */}
          <span className="flex items-center gap-2 text-paper/65">
            <PinIcon className="h-3.5 w-3.5 text-sky-brand" />
            <span className="hidden sm:inline">{CLINIC.address}</span>
          </span>
        </div>
      </div>

      {/* ── Main nav ── */}
      <nav
        aria-label="Main navigation"
        className={`border-b transition-all duration-500 ${
          scrolled
            ? "border-foam bg-paper/90 shadow-[0_8px_30px_-18px_rgba(4,29,48,0.25)] backdrop-blur-xl"
            : "border-transparent bg-gradient-to-b from-paper/80 to-transparent backdrop-blur-[2px]"
        }`}
      >
        <div className="mx-auto flex h-[70px] max-w-7xl items-center justify-between gap-6 px-6 lg:px-10">
          {/* Logo */}
          <a
            href="#top"
            className="group flex shrink-0 items-center gap-2.5"
            aria-label="DentalArt Care — home"
          >
            <span className="relative grid h-10 w-10 place-items-center rounded-[14px] bg-primary text-white shadow-[0_8px_20px_-8px_rgba(2,136,209,0.65)] transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-105">
              <ToothIcon className="h-[22px] w-[22px]" />
              <SparkleIcon className="absolute -right-1.5 -top-1.5 h-3.5 w-3.5 text-mint" />
            </span>
            <span className="leading-none">
              <span className="block font-display text-[19px] font-semibold tracking-tight text-ink">
                DentalArt<span className="text-primary"> Care</span>
              </span>
              <span className="mt-1 block text-[9.5px] font-bold uppercase tracking-[0.3em] text-mist">
                Smile Studio
              </span>
            </span>
          </a>

          {/* Desktop links */}
          <ul className="hidden items-center gap-7 lg:flex">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  aria-current={active === l.href ? "true" : undefined}
                  className={`link-line text-[13.5px] font-bold transition-colors ${
                    active === l.href
                      ? "text-primary"
                      : "text-slate-brand hover:text-ink"
                  }`}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Actions — WhatsApp first so it can never sit under the book pill */}
          <div className="flex shrink-0 items-center gap-2.5">
            <a
              href={CLINIC.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden items-center gap-2 whitespace-nowrap rounded-full bg-wa/[0.12] px-[18px] py-2.5 text-[13px] font-bold text-moss transition-colors duration-300 hover:bg-wa/20 md:inline-flex"
            >
              <WhatsAppIcon className="h-[17px] w-[17px] shrink-0" />
              WhatsApp
            </a>
            <a
              href="#booking"
              className="group hidden items-center gap-2 rounded-full bg-ink py-2.5 pl-5 pr-2.5 text-[13px] font-bold text-paper transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary hover:shadow-[0_10px_24px_-10px_rgba(2,136,209,0.7)] sm:inline-flex"
            >
              Book Appointment
              <span className="grid h-6 w-6 place-items-center rounded-full bg-paper/15 transition-transform duration-300 group-hover:translate-x-0.5">
                <ArrowRightIcon className="h-3 w-3 text-sky-brand" />
              </span>
            </a>
            <button
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              aria-expanded={open}
              className="grid h-10 w-10 place-items-center rounded-full border border-foam bg-white/80 text-ink transition-colors hover:bg-foam lg:hidden"
            >
              <MenuIcon />
            </button>
          </div>
        </div>
      </nav>

      {/* ── Mobile drawer ── */}
      <div
        className={`fixed inset-0 z-[70] transition-opacity duration-300 lg:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        aria-hidden={!open}
      >
        <div
          className="absolute inset-0 bg-deep/60 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        />
        <div
          className={`absolute right-0 top-0 flex h-full w-[300px] flex-col bg-paper p-7 shadow-2xl transition-transform duration-300 ease-out ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
          role="dialog"
          aria-modal="true"
          aria-label="Mobile menu"
        >
          <div className="mb-8 flex items-center justify-between">
            <span className="font-display text-lg font-semibold text-ink">
              DentalArt<span className="text-primary"> Care</span>
            </span>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="grid h-9 w-9 place-items-center rounded-full border border-foam text-ink transition-colors hover:bg-foam"
            >
              <CloseIcon className="h-5 w-5" />
            </button>
          </div>

          <ul className="space-y-1">
            {LINKS.map((l, i) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between border-b border-foam py-3.5 text-[15px] font-bold text-ink transition-colors hover:text-primary"
                >
                  {l.label}
                  <span className="text-[11px] font-extrabold text-mist">
                    0{i + 1}
                  </span>
                </a>
              </li>
            ))}
          </ul>

          {/* Hours + address, so the drawer answers the two commonest questions */}
          <div className="mt-7 rounded-2xl bg-foam/70 p-4 text-[12.5px] leading-relaxed text-slate-brand">
            <p className="mb-1.5 flex items-start gap-2 font-bold text-ink">
              <ClockIcon className="mt-[2px] h-3.5 w-3.5 shrink-0 text-primary" />
              {CLINIC.hours[0].days} · {CLINIC.hours[0].time}
            </p>
            <p className="flex items-start gap-2 font-semibold">
              <PinIcon className="mt-[2px] h-3.5 w-3.5 shrink-0 text-primary" />
              {CLINIC.address}
            </p>
          </div>

          <div className="mt-auto space-y-3 pt-6">
            <a
              href="#booking"
              onClick={() => setOpen(false)}
              className="flex items-center justify-center gap-2 rounded-full bg-primary py-3.5 text-sm font-bold text-white transition-colors hover:bg-primary-deep"
            >
              Book Appointment
            </a>
            <a
              href={CLINIC.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-full border-2 border-wa/40 py-3 text-sm font-bold text-moss transition-colors hover:bg-wa hover:text-white"
            >
              <WhatsAppIcon className="h-4 w-4" /> WhatsApp Us
            </a>
            <a
              href={CLINIC.phoneHref}
              className="block text-center text-[13px] font-bold text-slate-brand"
            >
              {CLINIC.phoneDisplay}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
