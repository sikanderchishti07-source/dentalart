import { useEffect, useRef, useState, type FormEvent } from "react";
import { CLINIC, FAQS, SERVICE_OPTIONS } from "../data";
import { Reveal, Eyebrow } from "../ui";
import {
  WhatsAppIcon,
  ClockIcon,
  ShieldIcon,
  CalendarIcon,
  CheckIcon,
  ToothIcon,
  SparkleIcon,
  PhoneIcon,
  ArrowRightIcon,
  FacebookIcon,
  InstagramIcon,
} from "../icons";

/* ═══════════════════ BOOKING ═══════════════════ */

const BENEFITS = [
  {
    icon: ClockIcon,
    title: "Confirmation within 2 hours",
    desc: "Our coordinators reply fast — usually within minutes.",
  },
  {
    icon: ShieldIcon,
    title: "No upfront payment",
    desc: "Pay only after your consultation, once you've decided.",
  },
  {
    icon: CalendarIcon,
    title: "Free rescheduling",
    desc: "Plans change. Move your visit anytime, free of charge.",
  },
];

type Errors = { name?: boolean; service?: boolean; date?: boolean };

export function Booking() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");
  const [date, setDate] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);
  const [waUrl, setWaUrl] = useState(CLINIC.whatsappHref);
  const selectRef = useRef<HTMLSelectElement>(null);

  const today = new Date().toISOString().split("T")[0];

  /* Preselect service when a "Book" button is pressed elsewhere */
  useEffect(() => {
    const onService = (e: Event) => {
      const detail = (e as CustomEvent<string>).detail;
      setService(detail);
      setSent(false);
      setErrors((er) => ({ ...er, service: false }));
    };
    window.addEventListener("dac:service", onService);
    return () => window.removeEventListener("dac:service", onService);
  }, []);

  const submit = (e: FormEvent) => {
    e.preventDefault();
    const errs: Errors = {
      name: name.trim().length < 2,
      service: !service,
      date: !!date && date < today,
    };
    setErrors(errs);
    if (errs.name || errs.service || errs.date) return;

    const msg = [
      "Hello DentalArt Care! I'd like to book an appointment.",
      `• Name: ${name.trim()}`,
      phone.trim() ? `• Phone: ${phone.trim()}` : "",
      `• Service: ${service}`,
      date ? `• Preferred date: ${date}` : "",
    ]
      .filter(Boolean)
      .join("\n");
    const url = `https://wa.me/${CLINIC.whatsappNumber}?text=${encodeURIComponent(msg)}`;
    setWaUrl(url);
    setSent(true);
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const inputCls = (bad?: boolean) =>
    `w-full rounded-xl border-[1.5px] bg-paper px-4 py-3 text-[14.5px] font-semibold text-ink placeholder:text-mist/70 placeholder:font-medium outline-none transition-all duration-300 focus:border-primary focus:bg-white focus:shadow-[0_0_0_4px_rgba(2,136,209,0.12)] ${
      bad ? "border-red-400 bg-red-50/40" : "border-foam"
    }`;

  return (
    <section id="booking" aria-labelledby="booking-heading" className="relative bg-deep py-24 sm:py-32 overflow-hidden">
      {/* Ambient glows */}
      <div className="absolute inset-0 bg-[radial-gradient(52rem_34rem_at_8%_-10%,rgba(2,136,209,0.28),transparent_60%),radial-gradient(44rem_30rem_at_100%_110%,rgba(129,199,132,0.16),transparent_62%)]" aria-hidden="true" />
      <div className="absolute inset-0 opacity-[0.25] bg-[linear-gradient(rgba(79,195,247,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(79,195,247,0.06)_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:radial-gradient(50rem_36rem_at_50%_50%,black,transparent_80%)]" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-14 lg:gap-16">
        {/* Pitch */}
        <div className="lg:col-span-5">
          <Reveal>
            <Eyebrow light>Schedule your visit</Eyebrow>
            <h2 id="booking-heading" className="font-display font-semibold text-paper text-[34px] sm:text-[46px] leading-[1.06] tracking-tight mt-5">
              Book your visit in{" "}
              <em className="italic font-medium text-sky-brand">under a minute.</em>
            </h2>
            <p className="mt-6 text-[15.5px] leading-relaxed text-paper/70 font-medium max-w-[52ch]">
              Fill in three fields and your request lands directly on our
              coordinators' WhatsApp. We confirm within two hours and prepare
              everything for a smooth, unhurried visit.
            </p>
          </Reveal>

          <div className="mt-10 space-y-5">
            {BENEFITS.map((b, i) => (
              <Reveal key={b.title} delay={i * 110}>
                <div className="flex items-start gap-4">
                  <span className="shrink-0 w-11 h-11 rounded-xl bg-sky-brand/15 text-sky-brand grid place-items-center">
                    <b.icon className="w-5 h-5" />
                  </span>
                  <div>
                    <h3 className="text-[15px] font-extrabold text-paper">{b.title}</h3>
                    <p className="text-[13px] font-semibold text-paper/55 mt-0.5">{b.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={200} className="mt-10">
            <div className="rounded-2xl border border-paper/10 bg-paper/5 backdrop-blur p-6">
              <p className="text-[11px] font-extrabold uppercase tracking-[0.22em] text-sky-brand flex items-center gap-2">
                <ClockIcon className="w-4 h-4" /> Opening hours
              </p>
              <ul className="mt-4 space-y-2.5">
                {CLINIC.hours.map((h) => (
                  <li key={h.days} className="flex items-baseline justify-between gap-4 text-[13.5px] font-semibold">
                    <span className="text-paper/75">{h.days}</span>
                    <span className="h-px flex-1 bg-paper/10 translate-y-[-3px]" aria-hidden="true" />
                    <span className="text-paper">{h.time}</span>
                  </li>
                ))}
              </ul>
              <a href={CLINIC.phoneHref} className="mt-5 inline-flex items-center gap-2.5 text-[15px] font-extrabold text-sky-brand hover:text-paper transition-colors">
                <PhoneIcon className="w-4.5 h-4.5 w-[18px] h-[18px]" /> {CLINIC.phoneDisplay}
              </a>
            </div>
          </Reveal>
        </div>

        {/* Form card */}
        <Reveal delay={150} variant="pop" className="lg:col-span-7">
          <div className="relative rounded-[28px] bg-paper p-7 sm:p-10 shadow-[0_50px_100px_-40px_rgba(0,0,0,0.6)]">
            <SparkleIcon className="absolute -top-4 -right-3 w-9 h-9 text-mint rotate-12" />

            {sent ? (
              /* Success state */
              <div className="text-center py-10 sm:py-14" role="status" aria-live="polite">
                <span className="mx-auto w-16 h-16 rounded-full bg-mint/20 text-moss grid place-items-center">
                  <CheckIcon className="w-7 h-7" />
                </span>
                <h3 className="font-display font-semibold text-[26px] text-ink mt-6">Opening WhatsApp…</h3>
                <p className="mt-3 text-[14.5px] text-slate-brand font-medium max-w-[42ch] mx-auto leading-relaxed">
                  Your booking request is ready to send. If WhatsApp didn't open
                  automatically, use the button below.
                </p>
                <div className="mt-7 flex flex-wrap justify-center gap-3">
                  <a
                    href={waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 rounded-full bg-wa text-white px-6 py-3 text-[14px] font-extrabold hover:brightness-110 hover:-translate-y-0.5 transition-all duration-300 shadow-[0_14px_30px_-12px_rgba(37,211,102,0.8)]"
                  >
                    <WhatsAppIcon className="w-4.5 h-4.5 w-[18px] h-[18px]" /> Open WhatsApp
                  </a>
                  <button
                    onClick={() => setSent(false)}
                    className="rounded-full border-[1.5px] border-ink/15 px-6 py-3 text-[14px] font-extrabold text-ink hover:bg-ink hover:text-paper transition-colors duration-300"
                  >
                    Edit details
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={submit} noValidate aria-label="Appointment request form">
                <div className="flex items-center gap-3 mb-7">
                  <span className="w-10 h-10 rounded-xl bg-primary/10 text-primary grid place-items-center">
                    <ToothIcon className="w-5 h-5" />
                  </span>
                  <div>
                    <h3 className="font-display font-semibold text-[21px] text-ink leading-tight tracking-tight">Request an appointment</h3>
                    <p className="text-[12px] font-bold text-mist">Sent via WhatsApp · takes 30 seconds</p>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="bk-name" className="block text-[12px] font-extrabold uppercase tracking-[0.14em] text-slate-brand mb-2">
                      Full name <span className="text-primary">*</span>
                    </label>
                    <input
                      id="bk-name"
                      type="text"
                      value={name}
                      autoComplete="name"
                      onChange={(e) => { setName(e.target.value); setErrors((er) => ({ ...er, name: false })); }}
                      placeholder="e.g. Raza Ansari"
                      className={inputCls(errors.name)}
                      aria-invalid={!!errors.name}
                    />
                    {errors.name && <p className="mt-1.5 text-[12px] font-bold text-red-500">Please enter your full name.</p>}
                  </div>
                  <div>
                    <label htmlFor="bk-phone" className="block text-[12px] font-extrabold uppercase tracking-[0.14em] text-slate-brand mb-2">
                      Phone <span className="text-mist normal-case tracking-normal font-bold">(optional)</span>
                    </label>
                    <input
                      id="bk-phone"
                      type="tel"
                      value={phone}
                      autoComplete="tel"
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+92 ___ _______"
                      className={inputCls(false)}
                    />
                  </div>
                  <div>
                    <label htmlFor="bk-service" className="block text-[12px] font-extrabold uppercase tracking-[0.14em] text-slate-brand mb-2">
                      Treatment <span className="text-primary">*</span>
                    </label>
                    <select
                      id="bk-service"
                      ref={selectRef}
                      value={service}
                      onChange={(e) => { setService(e.target.value); setErrors((er) => ({ ...er, service: false })); }}
                      className={`${inputCls(errors.service)} ${service ? "" : "text-mist/80"}`}
                      aria-invalid={!!errors.service}
                    >
                      <option value="" disabled>Select a treatment</option>
                      {SERVICE_OPTIONS.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                    {errors.service && <p className="mt-1.5 text-[12px] font-bold text-red-500">Please select a treatment.</p>}
                  </div>
                  <div>
                    <label htmlFor="bk-date" className="block text-[12px] font-extrabold uppercase tracking-[0.14em] text-slate-brand mb-2">
                      Preferred date
                    </label>
                    <input
                      id="bk-date"
                      type="date"
                      min={today}
                      value={date}
                      onChange={(e) => { setDate(e.target.value); setErrors((er) => ({ ...er, date: false })); }}
                      className={inputCls(errors.date)}
                      aria-invalid={!!errors.date}
                    />
                    {errors.date && <p className="mt-1.5 text-[12px] font-bold text-red-500">Please choose a future date.</p>}
                  </div>
                </div>

                <button
                  type="submit"
                  className="group mt-7 w-full inline-flex items-center justify-center gap-3 rounded-xl bg-wa text-white py-4 text-[15px] font-extrabold shadow-[0_18px_40px_-14px_rgba(37,211,102,0.75)] hover:brightness-110 hover:-translate-y-0.5 transition-all duration-300"
                >
                  <WhatsAppIcon className="w-5 h-5" />
                  Book via WhatsApp
                  <ArrowRightIcon className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
                <p className="mt-4 text-center text-[12px] font-semibold text-mist">
                  No payment now · Free rescheduling · Reply within 2 hours
                </p>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ═══════════════════ FAQ ═══════════════════ */

export function Faq() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  return (
    <section id="faq" aria-labelledby="faq-heading" className="relative py-24 sm:py-32 bg-white border-t border-foam">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-32">
            <Reveal>
              <Eyebrow>Good to know</Eyebrow>
              <h2 id="faq-heading" className="font-display font-semibold text-ink text-[34px] sm:text-[42px] leading-[1.08] tracking-tight mt-5">
                Questions,{" "}
                <em className="italic font-medium text-primary">answered.</em>
              </h2>
              <p className="mt-5 text-[14.5px] leading-relaxed text-slate-brand font-medium">
                The things patients ask us most — before they've even sat in
                the chair. Anything else? We're one message away.
              </p>
              <a
                href={CLINIC.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-flex items-center gap-2.5 rounded-full border-[1.5px] border-wa/50 text-moss px-6 py-3 text-[13.5px] font-extrabold hover:bg-wa hover:text-white hover:border-wa transition-all duration-300"
              >
                <WhatsAppIcon className="w-4 h-4" /> Ask us anything
              </a>
            </Reveal>
          </div>
        </div>

        <div className="lg:col-span-8">
          <div className="divide-y divide-foam border-y border-foam">
            {FAQS.map((f, i) => {
              const open = openIdx === i;
              return (
                <Reveal key={f.q} delay={i * 60}>
                  <div>
                    <button
                      onClick={() => setOpenIdx(open ? null : i)}
                      aria-expanded={open}
                      className="w-full flex items-center justify-between gap-6 py-6 text-left group"
                    >
                      <span className={`font-display font-semibold text-[18px] sm:text-[20px] tracking-tight transition-colors duration-300 ${open ? "text-primary" : "text-ink group-hover:text-primary"}`}>
                        {f.q}
                      </span>
                      <span className={`shrink-0 w-9 h-9 rounded-full border-[1.5px] grid place-items-center transition-all duration-400 ${open ? "bg-primary border-primary text-white rotate-45" : "border-ink/15 text-ink group-hover:border-primary group-hover:text-primary"}`}>
                        <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden="true">
                          <path d="M12 5v14M5 12h14" />
                        </svg>
                      </span>
                    </button>
                    <div className={`acc-body ${open ? "open" : ""}`}>
                      <div>
                        <p className="pb-7 pr-12 text-[14.5px] leading-relaxed text-slate-brand font-medium max-w-[64ch]">
                          {f.a}
                        </p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════ FOOTER ═══════════════════ */

const FOOTER_TREATMENTS = [
  "Teeth Whitening",
  "Dental Implants",
  "Braces & Orthodontics",
  "Root Canal Therapy",
  "Professional Cleaning",
  "Porcelain Veneers",
];

export function Footer() {
  const [showTop, setShowTop] = useState(false);
  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 700);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <footer className="relative bg-deep text-paper overflow-hidden" aria-label="Footer">
      <div className="absolute inset-0 bg-[radial-gradient(40rem_24rem_at_90%_-20%,rgba(2,136,209,0.2),transparent_60%)]" aria-hidden="true" />
      {/* Smile curve top */}
      <svg viewBox="0 0 1440 48" className="w-full h-8 block rotate-180" preserveAspectRatio="none" aria-hidden="true">
        <path d="M0 10 C 360 46, 1080 46, 1440 10 L1440 48 L0 48 Z" className="fill-white" />
      </svg>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 pt-16 pb-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-12 gap-12">
          {/* Brand */}
          <div className="lg:col-span-4">
            <a href="#top" className="flex items-center gap-2.5">
              <span className="w-10 h-10 rounded-[14px] bg-primary text-white grid place-items-center">
                <ToothIcon className="w-[22px] h-[22px]" />
              </span>
              <span className="font-display font-semibold text-[20px] tracking-tight">
                DentalArt<span className="text-sky-brand"> Care</span>
              </span>
            </a>
            <p className="mt-5 text-[13.5px] leading-relaxed text-paper/60 font-medium max-w-[40ch]">
              {CLINIC.tagline} Premium dentistry for the whole family — calm
              rooms, honest plans and results worth smiling about.
            </p>
            <div className="flex gap-3 mt-6">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-10 h-10 rounded-full border border-paper/15 grid place-items-center text-paper/70 hover:bg-primary hover:border-primary hover:text-white transition-all duration-300">
                <FacebookIcon className="w-4.5 h-4.5 w-[18px] h-[18px]" />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-10 h-10 rounded-full border border-paper/15 grid place-items-center text-paper/70 hover:bg-primary hover:border-primary hover:text-white transition-all duration-300">
                <InstagramIcon className="w-4.5 h-4.5 w-[18px] h-[18px]" />
              </a>
              <a href={CLINIC.whatsappHref} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="w-10 h-10 rounded-full border border-paper/15 grid place-items-center text-paper/70 hover:bg-wa hover:border-wa hover:text-white transition-all duration-300">
                <WhatsAppIcon className="w-4.5 h-4.5 w-[18px] h-[18px]" />
              </a>
            </div>
          </div>

          {/* Explore */}
          <nav className="lg:col-span-2" aria-label="Explore">
            <h3 className="text-[11px] font-extrabold uppercase tracking-[0.24em] text-sky-brand">Explore</h3>
            <ul className="mt-5 space-y-3 text-[13.5px] font-semibold text-paper/70">
              {[
                ["Why us", "#about"],
                ["Treatments", "#services"],
                ["Results", "#results"],
                ["Doctors", "#doctors"],
                ["Reviews", "#reviews"],
                ["FAQ", "#faq"],
              ].map(([label, href]) => (
                <li key={href}>
                  <a href={href} className="hover:text-sky-brand transition-colors">{label}</a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Treatments */}
          <nav className="lg:col-span-3" aria-label="Treatments">
            <h3 className="text-[11px] font-extrabold uppercase tracking-[0.24em] text-sky-brand">Treatments</h3>
            <ul className="mt-5 space-y-3 text-[13.5px] font-semibold text-paper/70">
              {FOOTER_TREATMENTS.map((t) => (
                <li key={t}>
                  <a href="#services" className="hover:text-sky-brand transition-colors">{t}</a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h3 className="text-[11px] font-extrabold uppercase tracking-[0.24em] text-sky-brand">Contact</h3>
            <ul className="mt-5 space-y-4 text-[13.5px] font-semibold text-paper/70">
              <li>
                <a href={CLINIC.phoneHref} className="flex items-center gap-3 hover:text-sky-brand transition-colors">
                  <PhoneIcon className="w-4 h-4 text-sky-brand shrink-0" /> {CLINIC.phoneDisplay}
                </a>
              </li>
              {CLINIC.hours.map((h) => (
                <li key={h.days} className="flex items-start gap-3">
                  <ClockIcon className="w-4 h-4 text-sky-brand shrink-0 mt-0.5" />
                  <span>
                    {h.days}
                    <span className="block text-paper/50 font-medium text-[12.5px]">{h.time}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-7 border-t border-paper/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[12.5px] font-semibold text-paper/45">
          <p>© {new Date().getFullYear()} DentalArt Care. All rights reserved.</p>
          <p className="flex items-center gap-2">
            Designed for smiles <SparkleIcon className="w-3 h-3 text-mint" /> by DentalArt Care
          </p>
        </div>
      </div>

      {/* Back to top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
        className={`fixed bottom-6 left-6 z-40 w-11 h-11 rounded-full bg-ink text-paper grid place-items-center shadow-lift transition-all duration-400 hover:bg-primary ${
          showTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        <svg viewBox="0 0 24 24" className="w-4.5 h-4.5 w-[18px] h-[18px]" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M12 19V5M5.5 11.5 12 5l6.5 6.5" />
        </svg>
      </button>
    </footer>
  );
}
