import type { ComponentType } from "react";
import { Link } from "react-router-dom";
import { SERVICE_PAGES } from "../serviceContent";
import { SERVICES, STATS, REASONS, CLINIC, ALSO_AVAILABLE, type Service } from "../data";
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
