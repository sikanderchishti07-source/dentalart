import type { ComponentType } from "react";
import { Link } from "react-router-dom";
import { SERVICE_PAGES } from "../serviceContent";
import { SERVICES, STATS, REASONS, ALSO_AVAILABLE, IMAGES, type Service } from "../data";
import { Reveal, CountUp, Eyebrow } from "../ui";
import {
  SparkleIcon,
  ToothIcon,
  WhitenIcon,
  ImplantIcon,
  BracesIcon,
  RootCanalIcon,
  CleanIcon,
  VeneerIcon,
  ArrowRightIcon,
  BadgeIcon,
  HeartPulseIcon,
  ShieldIcon,
  PulseIcon,
  StarIcon,
} from "../icons";

const ICONS: Record<Service["icon"], ComponentType<{ className?: string }>> = {
  whiten: WhitenIcon,
  implant: ImplantIcon,
  braces: BracesIcon,
  rootcanal: RootCanalIcon,
  clean: CleanIcon,
  veneer: VeneerIcon,
};

const REASON_ICONS: Record<string, ComponentType<{ className?: string }>> = {
  badge: BadgeIcon,
  heart: HeartPulseIcon,
  shield: ShieldIcon,
  pulse: PulseIcon,
};

/* ═══════════════════ MARQUEE ═══════════════════ */

const MARQUEE_ITEMS = [
  "Teeth Whitening",
  "Dental Implants",
  "Braces & Aligners",
  "Root Canal Therapy",
  "Professional Cleaning",
  "Porcelain Veneers",
  "Kids Dentistry",
  "Emergency Care",
];

export function Marquee() {
  const row = (key: string) => (
    <div key={key} className="flex items-center shrink-0" aria-hidden={key === "b"}>
      {MARQUEE_ITEMS.map((item) => (
        <span key={`${key}-${item}`} className="flex items-center">
          <span className="px-7 font-display italic text-[19px] sm:text-[21px] font-medium text-ink/80 whitespace-nowrap">
            {item}
          </span>
          <SparkleIcon className="w-3.5 h-3.5 text-mint shrink-0" />
        </span>
      ))}
    </div>
  );
  return (
    <div className="marquee overflow-hidden bg-foam border-y border-sky-brand/15 py-4 select-none" aria-label="Treatments offered">
      <div className="marquee-track flex w-max">
        {row("a")}
        {row("b")}
      </div>
    </div>
  );
}

/* ═══════════════════ STATS BAND ═══════════════════ */

export function Stats() {
  const STAT_ICONS = [BadgeIcon, ShieldIcon, ToothIcon, StarIcon];

  return (
    <section aria-label="Clinic at a glance" className="relative bg-deep overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(50rem_30rem_at_15%_-20%,rgba(2,136,209,0.22),transparent_60%),radial-gradient(40rem_26rem_at_95%_130%,rgba(129,199,132,0.14),transparent_60%)]" aria-hidden="true" />
      <div className="absolute inset-0 opacity-[0.28] bg-[linear-gradient(rgba(79,195,247,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(79,195,247,0.06)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(50rem_24rem_at_50%_50%,black,transparent_78%)]" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 py-9 lg:py-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-5 gap-y-7 lg:gap-x-0">
          {STATS.map((s, i) => {
            const Icon = STAT_ICONS[i] ?? StarIcon;
            return (
              <Reveal
                key={s.label}
                delay={i * 90}
                className="relative flex items-center gap-3.5 lg:px-7 lg:first:pl-0 lg:last:pr-0"
              >
                {i > 0 && (
                  <span
                    className="absolute inset-y-0.5 left-0 hidden lg:block w-px bg-gradient-to-b from-transparent via-sky-brand/25 to-transparent"
                    aria-hidden="true"
                  />
                )}
                <span className="shrink-0 w-[38px] h-[38px] rounded-[14px] border border-sky-brand/20 bg-sky-brand/10 text-sky-brand grid place-items-center">
                  <Icon className="w-[19px] h-[19px]" />
                </span>
                <div className="min-w-0">
                  <p className="font-display font-semibold text-[27px] leading-none text-paper tracking-tight">
                    <CountUp target={s.value} suffix={s.suffix} decimals={s.decimals} />
                  </p>
                  <p className="mt-1.5 text-[11px] font-extrabold uppercase tracking-[0.13em] text-sky-brand">
                    {s.label}
                  </p>
                  <p className="text-[11px] font-semibold text-paper/40">{s.sub}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════ WHY CHOOSE US (sticky two-column) ═══════════════════ */

export function WhyUs() {
  const REASON_ICON_MAP: Record<string, ComponentType<{ className?: string }>> = {
    badge: BadgeIcon,
    heart: HeartPulseIcon,
    shield: ShieldIcon,
    pulse: PulseIcon,
  };

  /* Short, checkable claim shown beside each heading */
  const PROOF: Record<string, string> = {
    "01": "MDS & FCPS qualified",
    "02": "Sedation available",
    "03": "Free rescheduling",
    "04": "Every instrument, every visit",
  };

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="relative bg-white border-y border-foam py-16 sm:py-20"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-11 lg:gap-16 items-start">
          {/* ── Sticky intro + photo ── */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-24">
              <Reveal>
                <Eyebrow>Why DentalArt Care</Eyebrow>
                <h2
                  id="about-heading"
                  className="font-display font-semibold text-ink text-[32px] sm:text-[40px] leading-[1.1] tracking-tight mt-5"
                >
                  Excellence that{" "}
                  <em className="italic font-medium text-primary">feels</em>
                  <br />
                  like care.
                </h2>
                <p className="mt-5 max-w-[46ch] text-[15px] leading-relaxed text-slate-brand font-medium">
                  We built this clinic around one idea: world-class dentistry and
                  genuine warmth belong together. That is why families drive
                  across the city to sit in our chairs, and why anxious patients
                  finally stop postponing.
                </p>
              </Reveal>

              <Reveal delay={140}>
                <figure className="relative mt-8 rounded-3xl overflow-hidden aspect-[5/4] bg-foam shadow-card">
                  <img
                    src={IMAGES.room}
                    alt="A calm, modern treatment room at DentalArt Care"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <span
                    className="absolute inset-0 bg-gradient-to-t from-deep/85 via-deep/10 to-transparent"
                    aria-hidden="true"
                  />
                  <figcaption className="absolute inset-x-6 bottom-5">
                    <p className="font-display italic text-[17px] leading-snug text-paper">
                      "A clinic should feel calm before it feels clinical."
                    </p>
                    <span className="block mt-2.5 text-[10.5px] font-extrabold uppercase tracking-[0.16em] text-sky-brand">
                      Our philosophy
                    </span>
                  </figcaption>
                </figure>
              </Reveal>
            </div>
          </div>

          {/* ── The list ── */}
          <div className="lg:col-span-7">
            <ul className="border-t border-foam">
              {REASONS.map((r, i) => {
                const Icon = REASON_ICON_MAP[r.icon];
                return (
                  <Reveal key={r.num} delay={i * 80}>
                    <li className="group relative grid grid-cols-[auto_1fr] gap-[18px] border-b border-foam py-5 pl-1 pr-1 transition-[padding] duration-400 hover:pl-4">
                      <span
                        className="pointer-events-none absolute -inset-x-6 inset-y-0 rounded-2xl bg-gradient-to-r from-primary/[0.05] to-transparent opacity-0 transition-opacity duration-400 group-hover:opacity-100"
                        aria-hidden="true"
                      />
                      <span className="relative grid h-10 w-10 shrink-0 place-items-center rounded-[14px] bg-foam text-primary transition-all duration-400 group-hover:-rotate-6 group-hover:scale-105 group-hover:bg-primary group-hover:text-white">
                        <Icon className="w-5 h-5" />
                      </span>
                      <div className="relative">
                        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1.5">
                          <h3 className="font-display font-semibold text-[18px] tracking-tight text-ink">
                            {r.title}
                          </h3>
                          {PROOF[r.num] && (
                            <span className="rounded-full bg-mint/15 px-2.5 py-[3px] text-[10px] font-extrabold uppercase tracking-[0.08em] text-moss whitespace-nowrap">
                              {PROOF[r.num]}
                            </span>
                          )}
                        </div>
                        <p className="mt-1.5 max-w-[60ch] text-[13.5px] font-medium leading-[1.6] text-slate-brand">
                          {r.desc}
                        </p>
                      </div>
                    </li>
                  </Reveal>
                );
              })}
            </ul>

            <Reveal delay={360}>
              <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
                <span className="text-[13.5px] font-semibold text-slate-brand">
                  Specialist care, one standard throughout.
                </span>
                <a
                  href="#team"
                  className="group inline-flex items-center gap-2.5 rounded-full bg-ink py-2.5 pl-5 pr-2.5 text-[13px] font-extrabold text-paper transition-colors duration-300 hover:bg-primary"
                >
                  Meet the specialists
                  <span className="grid h-[26px] w-[26px] place-items-center rounded-full bg-paper/15 transition-transform duration-300 group-hover:translate-x-0.5">
                    <ArrowRightIcon className="w-3 h-3" />
                  </span>
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════ SERVICES (editorial index) ═══════════════════ */

export function Services() {
  const pageFor = (icon: Service["icon"]) =>
    SERVICE_PAGES.find((p) => p.icon === icon);

  /* Short "who does it / how long" line under each title */
  const SUBLABEL: Record<Service["icon"], string> = {
    implant: "Oral surgeon · 3 to 6 months",
    braces: "FCPS orthodontist · 1 to 2 years",
    veneer: "Custom shaded · 2 visits",
    whiten: "Up to 8 shades · one visit",
    rootcanal: "Saves the tooth · 1 to 2 visits",
    clean: "Full check-up · every 6 months",
  };

  const IMG: Record<Service["icon"], string> = {
    implant: "/images/svc-implant.jpg",
    braces: "/images/svc-braces.jpg",
    veneer: "/images/svc-veneer.jpg",
    whiten: "/images/svc-whiten.jpg",
    rootcanal: "/images/svc-root.jpg",
    clean: "/images/svc-clean.jpg",
  };

  const featured = SERVICES.find((s) => s.icon === "implant");
  const rest = SERVICES.filter((s) => s.icon !== "implant");

  const book = (service: string) => {
    window.dispatchEvent(new CustomEvent("dac:service", { detail: service }));
    document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" });
  };

  const Arrow = () => (
    <ArrowRightIcon className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-0.5" />
  );

  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="relative py-24 sm:py-28 bg-paper border-y border-foam"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* ── Heading ── */}
        <div className="grid lg:grid-cols-12 gap-6 lg:gap-8 items-end mb-10">
          <Reveal className="lg:col-span-7">
            <Eyebrow>What we offer</Eyebrow>
            <h2
              id="services-heading"
              className="font-display font-semibold text-ink text-[32px] sm:text-[42px] leading-[1.08] tracking-tight mt-5"
            >
              Complete care,
              <br />
              <em className="italic font-medium text-primary">under one roof.</em>
            </h2>
          </Reveal>
          <Reveal delay={140} className="lg:col-span-5">
            <p className="text-[15px] leading-relaxed text-slate-brand font-medium lg:pb-2">
              Six core treatments, each planned and delivered by a dentist with a
              postgraduate specialty in that field. Choose one to read what it
              involves, what it costs and how long it takes.
            </p>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-2 gap-4.5 gap-y-4">
          {/* ── Featured: implants ── */}
          {featured && (
            <Reveal className="md:col-span-2">
              <Link
                to={`/${pageFor(featured.icon)?.slug ?? ""}`}
                className="group grid md:grid-cols-[1.5fr_1fr] rounded-3xl bg-deep border border-deep overflow-hidden transition-all duration-400 hover:-translate-y-1 hover:shadow-[0_24px_48px_-24px_rgba(4,29,48,0.5)]"
              >
                <div className="p-8 md:pr-8 md:pl-7 flex flex-col justify-center order-2 md:order-1">
                  <span className="inline-flex items-center gap-1.5 text-[10.5px] font-extrabold uppercase tracking-[0.12em] text-sky-brand mb-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-brand" aria-hidden="true" />
                    Most requested
                  </span>
                  <h3 className="font-display font-semibold text-[23px] tracking-tight text-white">
                    {featured.title}
                  </h3>
                  <p className="mt-1.5 text-[11px] font-extrabold uppercase tracking-[0.04em] text-sky-brand/75 whitespace-nowrap">
                    {SUBLABEL[featured.icon]}
                  </p>
                  <p className="mt-3 max-w-[52ch] text-[13.5px] leading-relaxed text-paper/60 font-medium">
                    {featured.desc}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-1.5 self-start rounded-full border-[1.5px] border-paper/28 px-4 py-2 text-[12.5px] font-extrabold text-white transition-all duration-300 group-hover:bg-paper group-hover:text-ink group-hover:border-paper">
                    Learn more <Arrow />
                  </span>
                </div>
                <div className="relative min-h-[170px] overflow-hidden bg-foam order-1 md:order-2">
                  <img
                    src={IMG[featured.icon]}
                    alt=""
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                  />
                  <span
                    className="absolute inset-0 bg-gradient-to-t from-deep via-deep/30 to-transparent md:bg-gradient-to-r md:from-deep md:via-deep/25 md:to-transparent"
                    aria-hidden="true"
                  />
                </div>
              </Link>
            </Reveal>
          )}

          {/* ── The other five ── */}
          {rest.map((s, i) => (
            <Reveal key={s.id} delay={i * 70}>
              <Link
                to={`/${pageFor(s.icon)?.slug ?? ""}`}
                className="group grid sm:grid-cols-[1.15fr_.85fr] h-full rounded-3xl border border-foam bg-white overflow-hidden transition-all duration-400 hover:-translate-y-1 hover:border-primary/35 hover:shadow-[0_24px_48px_-24px_rgba(4,29,48,0.3)]"
              >
                <div className="p-7 flex flex-col order-2 sm:order-1">
                  <h3 className="font-display font-semibold text-[21px] tracking-tight text-ink">
                    {s.title}
                  </h3>
                  <p className="mt-1.5 text-[11px] font-extrabold uppercase tracking-[0.04em] text-mist whitespace-nowrap">
                    {SUBLABEL[s.icon]}
                  </p>
                  <p className="mt-3 flex-1 text-[13.5px] leading-relaxed text-slate-brand font-medium">
                    {s.desc}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-1.5 self-start rounded-full border-[1.5px] border-ink/14 px-4 py-2 text-[12.5px] font-extrabold text-ink transition-all duration-300 group-hover:bg-ink group-hover:text-paper group-hover:border-ink">
                    Learn more <Arrow />
                  </span>
                </div>
                <div className="relative min-h-[150px] overflow-hidden bg-foam order-1 sm:order-2">
                  <img
                    src={IMG[s.icon]}
                    alt=""
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                  />
                  <span
                    className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent sm:bg-gradient-to-r sm:from-white sm:via-transparent sm:to-transparent"
                    aria-hidden="true"
                  />
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        {/* ── Also available ── */}
        <Reveal className="mt-10 pt-8 border-t border-foam">
          <h3 className="font-body text-[11px] font-extrabold uppercase tracking-[0.22em] text-mist mb-5">
            Also available
          </h3>
          <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8">
            {ALSO_AVAILABLE.map((item) => (
              <li key={item.name}>
                <button
                  onClick={() => book(item.name)}
                  className="group w-full flex items-baseline gap-3 py-2.5 border-b border-foam text-left transition-all duration-250 hover:pl-1.5"
                >
                  <span
                    className="w-[5px] h-[5px] rounded-full bg-sky-brand shrink-0 -translate-y-0.5 transition-transform duration-250 group-hover:scale-150 group-hover:bg-primary"
                    aria-hidden="true"
                  />
                  <span className="text-[14.5px] font-bold text-ink whitespace-nowrap">
                    {item.name}
                  </span>
                  <span className="ml-auto text-[12px] font-semibold text-mist whitespace-nowrap">
                    {item.meta}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal className="mt-8 flex flex-wrap items-center gap-2 text-[13.5px] font-semibold text-slate-brand">
          <SparkleIcon className="w-4 h-4 text-mint" />
          Not sure what you need? Start with a{" "}
          <button
            onClick={() => book("General Consultation")}
            className="link-line font-extrabold text-primary"
          >
            general consultation
          </button>{" "}
          and we will map it out together.
        </Reveal>
      </div>
    </section>
  );
}
