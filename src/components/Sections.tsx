import type { ComponentType } from "react";
import { Link } from "react-router-dom";
import { SERVICE_PAGES } from "../serviceContent";
import { SERVICES, STATS, REASONS, CLINIC, type Service } from "../data";
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
  PhoneIcon,
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
  return (
    <section id="about" aria-labelledby="about-heading" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(46rem_30rem_at_110%_20%,rgba(79,195,247,0.1),transparent_60%)]" aria-hidden="true" />
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-14 lg:gap-20">
        {/* Sticky intro */}
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-32">
            <Reveal>
              <Eyebrow>Why DentalArt Care</Eyebrow>
              <h2 id="about-heading" className="font-display font-semibold text-ink text-[34px] sm:text-[44px] leading-[1.08] tracking-tight mt-5">
                Excellence that{" "}
                <em className="italic font-medium text-primary">feels</em>{" "}
                like care.
              </h2>
              <p className="mt-6 text-[15.5px] leading-relaxed text-slate-brand font-medium max-w-[50ch]">
                We built this clinic around one idea: world-class dentistry and
                genuine warmth belong together. That's why families drive across
                the city to sit in our chairs — and why anxious patients finally
                stop postponing.
              </p>
            </Reveal>

            <Reveal delay={140} className="mt-10">
              <div className="relative rounded-3xl overflow-hidden shadow-card">
                <img
                  src="https://image.qwenlm.ai/generated-images/7156f562-e60b-4927-a237-8e8120873dc0/_result.png"
                  alt="A calm, modern DentalArt Care treatment room"
                  className="w-full aspect-[16/10] object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep/70 via-deep/10 to-transparent" />
                <div className="absolute bottom-0 inset-x-0 p-6 flex items-end justify-between gap-4">
                  <p className="text-paper font-display italic text-[17px] leading-snug max-w-[26ch]">
                    "A clinic should feel calm before it feels clinical."
                  </p>
                  <span className="shrink-0 flex items-center gap-1.5 rounded-full bg-white/15 backdrop-blur px-3 py-1.5 text-[11px] font-extrabold text-paper uppercase tracking-wider">
                    <StarIcon className="w-3 h-3 text-sky-brand" /> Our philosophy
                  </span>
                </div>
              </div>
            </Reveal>

            <Reveal delay={220} className="mt-8">
              <a href={CLINIC.phoneHref} className="group inline-flex items-center gap-3 text-ink">
                <span className="w-11 h-11 rounded-full bg-primary/10 text-primary grid place-items-center transition-colors group-hover:bg-primary group-hover:text-white">
                  <PhoneIcon className="w-5 h-5" />
                </span>
                <span>
                  <span className="block text-[11px] font-extrabold uppercase tracking-[0.18em] text-mist">Prefer to talk?</span>
                  <span className="block text-[15.5px] font-extrabold link-line">{CLINIC.phoneDisplay}</span>
                </span>
              </a>
            </Reveal>
          </div>
        </div>

        {/* Scrolling reasons */}
        <div className="lg:col-span-7 space-y-5">
          {REASONS.map((r, i) => {
            const Icon = REASON_ICONS[r.icon];
            return (
              <Reveal key={r.num} delay={i * 90}>
                <article className="group relative rounded-2xl border border-foam bg-white p-7 sm:p-8 transition-all duration-400 hover:border-sky-brand/50 hover:shadow-lift hover:-translate-y-1">
                  <span className="absolute top-7 right-7 font-display italic font-medium text-[40px] leading-none text-foam group-hover:text-sky-brand/40 transition-colors duration-400 select-none" aria-hidden="true">
                    {r.num}
                  </span>
                  <div className="flex items-start gap-5">
                    <span className="shrink-0 w-[52px] h-[52px] rounded-2xl bg-foam text-primary grid place-items-center transition-all duration-400 group-hover:bg-primary group-hover:text-white group-hover:rotate-6">
                      <Icon className="w-6 h-6" />
                    </span>
                    <div>
                      <h3 className="font-display font-semibold text-[21px] text-ink tracking-tight">{r.title}</h3>
                      <p className="mt-2.5 text-[14.5px] leading-relaxed text-slate-brand font-medium max-w-[58ch]">{r.desc}</p>
                    </div>
                  </div>
                  <span className="absolute bottom-0 left-8 right-8 h-0.5 rounded-full bg-gradient-to-r from-primary to-mint scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" aria-hidden="true" />
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════ SERVICES (editorial index) ═══════════════════ */

export function Services() {
  const slugFor = (icon: Service["icon"]) =>
    SERVICE_PAGES.find((p) => p.icon === icon)?.slug;

  const book = (service: string) => {
    window.dispatchEvent(new CustomEvent("dac:service", { detail: service }));
    document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="services" aria-labelledby="services-heading" className="relative py-24 sm:py-32 bg-white border-y border-foam">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-8 items-end mb-14">
          <Reveal className="lg:col-span-7">
            <Eyebrow>What we offer</Eyebrow>
            <h2 id="services-heading" className="font-display font-semibold text-ink text-[34px] sm:text-[46px] leading-[1.06] tracking-tight mt-5">
              Complete care,
              <br />
              <em className="italic font-medium text-primary">under one roof.</em>
            </h2>
          </Reveal>
          <Reveal delay={140} className="lg:col-span-5">
            <p className="text-[15px] leading-relaxed text-slate-brand font-medium lg:pb-2">
              Six core treatments, one standard: specialist hands, honest
              planning and results you'll photograph. Choose a treatment to
              start your booking.
            </p>
          </Reveal>
        </div>

        <div className="border-t border-foam" role="list" aria-label="Dental treatments">
          {SERVICES.map((s, i) => {
            const Icon = ICONS[s.icon];
            return (
              <Reveal key={s.id} delay={i * 60}>
                <article
                  role="listitem"
                  className="svc-row group grid sm:grid-cols-12 gap-x-6 gap-y-3 items-center border-b border-foam py-6 sm:py-7 px-3 sm:px-5 transition-colors duration-300"
                >
                  <span className="sm:col-span-1 font-display italic font-medium text-[22px] text-mist group-hover:text-primary transition-colors duration-300">
                    {s.num}
                  </span>
                  <div className="sm:col-span-4 flex items-center gap-4">
                    <span className="shrink-0 w-12 h-12 rounded-xl bg-foam text-primary grid place-items-center transition-all duration-300 group-hover:bg-primary group-hover:text-white group-hover:-rotate-6 group-hover:scale-105">
                      <Icon className="w-6 h-6" />
                    </span>
                    <h3 className="font-display font-semibold text-[21px] sm:text-[22px] text-ink tracking-tight leading-tight">
                      {s.title}
                    </h3>
                  </div>
                  <p className="sm:col-span-4 text-[13.5px] leading-relaxed text-slate-brand font-medium">
                    {s.desc}
                  </p>
                  <div className="sm:col-span-3 flex sm:justify-end items-center gap-4">
                    <span className="hidden md:inline-block rounded-full bg-foam px-3 py-1 text-[10.5px] font-extrabold uppercase tracking-[0.12em] text-primary-deep">
                      {s.meta}
                    </span>
                    {slugFor(s.icon) ? (
                      <Link
                        to={`/${slugFor(s.icon)}`}
                        aria-label={`Read about ${s.title}`}
                        className="inline-flex items-center gap-2 rounded-full border-[1.5px] border-ink/15 px-4 py-2 text-[12.5px] font-extrabold text-ink transition-all duration-300 hover:border-ink hover:bg-ink hover:text-paper group-hover:border-primary/40"
                      >
                        Learn more
                        <ArrowRightIcon className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
                      </Link>
                    ) : (
                      <button
                        onClick={() => book(s.id)}
                        aria-label={`Book ${s.title}`}
                        className="inline-flex items-center gap-2 rounded-full border-[1.5px] border-ink/15 px-4 py-2 text-[12.5px] font-extrabold text-ink transition-all duration-300 hover:border-ink hover:bg-ink hover:text-paper group-hover:border-primary/40"
                      >
                        Book
                        <ArrowRightIcon className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
                      </button>
                    )}
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="mt-9 flex flex-wrap items-center gap-3 text-[13.5px] font-semibold text-slate-brand">
          <SparkleIcon className="w-4 h-4 text-mint" />
          Not sure what you need? Start with a{" "}
          <button onClick={() => book("General Consultation")} className="link-line font-extrabold text-primary">
            general consultation
          </button>{" "}
          — we'll map it out together.
        </Reveal>
      </div>
    </section>
  );
}
