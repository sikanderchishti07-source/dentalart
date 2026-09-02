import { useEffect, useState } from "react";
import { IMAGES } from "../data";
import { SparkleIcon, StarIcon, CalendarIcon, HeartPulseIcon, ArrowRightIcon } from "../icons";

const AVATARS = [
  { initials: "JM", bg: "from-primary to-sky-brand" },
  { initials: "SR", bg: "from-sky-brand to-mint" },
  { initials: "AP", bg: "from-mint to-moss" },
  { initials: "KL", bg: "from-primary-deep to-primary" },
];

export default function Hero() {
  const [masksIn, setMasksIn] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setMasksIn(true), 120);
    return () => clearTimeout(t);
  }, []);

  return (
    <section id="top" aria-label="Introduction" className="relative overflow-hidden pt-[104px] md:pt-[132px]">
      {/* Ambient background layers */}
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        <div className="absolute inset-0 bg-[radial-gradient(58rem_36rem_at_88%_-8%,rgba(79,195,247,0.16),transparent_62%),radial-gradient(48rem_32rem_at_-12%_68%,rgba(129,199,132,0.13),transparent_60%)]" />
        <div className="absolute inset-0 opacity-[0.35] bg-[linear-gradient(rgba(2,136,209,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(2,136,209,0.05)_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:radial-gradient(60rem_40rem_at_50%_0%,black,transparent_75%)]" />
      </div>

      <div className={`max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-14 lg:gap-8 items-center pb-20 lg:pb-24 ${masksIn ? "masks-in" : ""}`}>
        {/* ── Copy column ── */}
        <div className="lg:col-span-6 relative z-10">
          <div className="mask-line">
            <span>
              <span className="inline-flex items-center gap-2.5 rounded-full border border-mint/40 bg-mint/10 px-4 py-1.5 mb-7">
                <span className="relative w-2 h-2 rounded-full bg-moss pulse-ring text-moss" />
                <span className="text-[11px] font-extrabold uppercase tracking-[0.22em] text-moss">
                  Accepting new patients
                </span>
                <SparkleIcon className="w-3 h-3 text-mint" />
              </span>
            </span>
          </div>

          <h1 className="font-display font-semibold text-ink leading-[1.04] tracking-[-0.02em] text-[42px] sm:text-[56px] xl:text-[68px]">
            <span className="mask-line"><span style={{ transitionDelay: "120ms" }}>Your perfect</span></span>
            <span className="mask-line"><span style={{ transitionDelay: "240ms" }}>smile, designed</span></span>
            <span className="mask-line">
              <span style={{ transitionDelay: "360ms" }} className="flex items-baseline gap-3">
                like{" "}
                <em className="italic font-medium text-primary relative">
                  art.
                  <svg viewBox="0 0 120 12" className="absolute -bottom-1.5 left-0 w-full h-[10px] text-mint" fill="none" aria-hidden="true">
                    <path d="M3 9C30 3 70 2 117 6" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
                  </svg>
                </em>
              </span>
            </span>
          </h1>

          <div className="mask-line mt-7">
            <span style={{ transitionDelay: "480ms" }}>
              <p className="max-w-[52ch] text-[15.5px] sm:text-[16.5px] leading-relaxed text-slate-brand font-medium">
                Clinical excellence doesn't have to feel cold. Our board-certified
                specialists keep the environment calm, the explanations honest and
                the pacing respectful — from routine cleanings to complete smile
                makeovers.
              </p>
            </span>
          </div>

          <div className="mask-line mt-9">
            <span style={{ transitionDelay: "600ms" }} className="flex flex-wrap items-center gap-4">
              <a
                href="#booking"
                className="group inline-flex items-center gap-3 rounded-full bg-primary text-white pl-6 pr-2.5 py-2.5 text-[14.5px] font-bold shadow-[0_16px_36px_-14px_rgba(2,136,209,0.75)] hover:bg-primary-deep hover:-translate-y-0.5 transition-all duration-300"
              >
                Book Appointment
                <span className="w-9 h-9 rounded-full bg-white/15 grid place-items-center transition-transform duration-300 group-hover:translate-x-0.5 group-hover:bg-white/25">
                  <ArrowRightIcon className="w-4 h-4" />
                </span>
              </a>
              <a
                href="#services"
                className="link-line text-[14.5px] font-bold text-ink py-2"
              >
                Explore treatments
              </a>
            </span>
          </div>

          {/* Trust row */}
          <div className="mask-line mt-12">
            <span style={{ transitionDelay: "720ms" }} className="flex flex-wrap items-center gap-x-8 gap-y-5">
              <div className="flex items-center gap-3.5">
                <div className="flex -space-x-2.5">
                  {AVATARS.map((a) => (
                    <span
                      key={a.initials}
                      className={`w-9 h-9 rounded-full bg-gradient-to-br ${a.bg} ring-2 ring-paper grid place-items-center text-[10.5px] font-extrabold text-white`}
                    >
                      {a.initials}
                    </span>
                  ))}
                </div>
                <div className="leading-tight">
                  <p className="text-[13.5px] font-extrabold text-ink">10,000+ happy patients</p>
                  <p className="text-[12px] font-semibold text-mist">Trusted by families across the city</p>
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="flex text-primary">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} className="w-4 h-4" />
                  ))}
                </span>
                <p className="text-[13.5px] font-extrabold text-ink">
                  4.9<span className="text-mist font-bold">/5</span>
                  <span className="block text-[11.5px] font-semibold text-mist">2,140+ verified reviews</span>
                </p>
              </div>
            </span>
          </div>
        </div>

        {/* ── Visual column ── */}
        <div className="lg:col-span-6 relative" aria-hidden="false">
          <div className="relative max-w-[430px] mx-auto lg:mr-0 lg:ml-auto">
            {/* Offset arch outline */}
            <div className="absolute -inset-5 translate-x-5 translate-y-5 rounded-t-full rounded-b-[36px] border-2 border-dashed border-sky-brand/45" aria-hidden="true" />
            {/* Dot texture */}
            <svg className="absolute -top-10 -left-12 w-40 h-40 text-primary/25 hidden sm:block" aria-hidden="true">
              <defs>
                <pattern id="dots" width="14" height="14" patternUnits="userSpaceOnUse">
                  <circle cx="2" cy="2" r="1.6" fill="currentColor" />
                </pattern>
              </defs>
              <rect width="160" height="160" fill="url(#dots)" />
            </svg>

            {/* Arch image with Ken Burns breathing */}
            <div className="relative rounded-t-full rounded-b-[36px] overflow-hidden shadow-[0_40px_80px_-30px_rgba(4,29,48,0.45)] ring-8 ring-white/70">
              <img
                src={IMAGES.hero}
                alt="Dentist sharing a bright smile with a happy patient at DentalArt Care"
                className="w-full aspect-[4/5] object-cover animate-breathe"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-deep/35 via-transparent to-transparent" />
            </div>

            {/* Rotating circular badge */}
            <div className="absolute -left-8 bottom-16 w-28 h-28 hidden sm:block">
              <svg viewBox="0 0 120 120" className="w-full h-full animate-spin-slow text-ink" aria-hidden="true">
                <defs>
                  <path id="circ" d="M60,60 m-46,0 a46,46 0 1,1 92,0 a46,46 0 1,1 -92,0" />
                </defs>
                <text className="fill-current text-[10.5px] font-extrabold tracking-[0.24em] uppercase" style={{ fontFamily: "Manrope, sans-serif" }}>
                  <textPath href="#circ">Pain-free dentistry · smile with confidence ·</textPath>
                </text>
              </svg>
              <span className="absolute inset-0 grid place-items-center">
                <span className="w-12 h-12 rounded-full bg-white shadow-lift grid place-items-center text-primary">
                  <ToothMark />
                </span>
              </span>
            </div>

            {/* Floating: rating card */}
            <div className="absolute top-10 -right-3 sm:-right-10 animate-floaty">
              <div className="flex items-center gap-3 rounded-2xl bg-white/95 backdrop-blur px-4 py-3 shadow-lift border border-foam">
                <span className="w-10 h-10 rounded-xl bg-primary/10 text-primary grid place-items-center">
                  <StarIcon className="w-5 h-5" />
                </span>
                <div className="leading-tight">
                  <p className="text-[15px] font-extrabold text-ink">4.9 / 5</p>
                  <p className="text-[11px] font-bold text-mist">Patient rating</p>
                </div>
              </div>
            </div>

            {/* Floating: next opening */}
            <div className="absolute -bottom-5 right-6 sm:-right-6 animate-floaty" style={{ animationDelay: "1.4s" }}>
              <div className="flex items-center gap-3 rounded-2xl bg-deep text-paper px-4 py-3 shadow-lift">
                <span className="w-10 h-10 rounded-xl bg-sky-brand/15 text-sky-brand grid place-items-center">
                  <CalendarIcon className="w-5 h-5" />
                </span>
                <div className="leading-tight">
                  <p className="text-[13px] font-extrabold">Next opening</p>
                  <p className="text-[11.5px] font-semibold text-sky-brand">Today · 4:30 PM</p>
                </div>
              </div>
            </div>

            {/* Floating: pain-free chip */}
            <div className="absolute top-[46%] -left-4 sm:-left-12 animate-floaty" style={{ animationDelay: "0.7s" }}>
              <div className="flex items-center gap-2.5 rounded-full bg-white/95 backdrop-blur pl-2.5 pr-4 py-2 shadow-lift border border-foam">
                <span className="w-8 h-8 rounded-full bg-mint/20 text-moss grid place-items-center">
                  <HeartPulseIcon className="w-4 h-4" />
                </span>
                <span className="text-[12px] font-extrabold text-ink whitespace-nowrap">Pain-free treatments</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Smile-curve divider */}
      <div className="relative" aria-hidden="true">
        <svg viewBox="0 0 1440 64" className="w-full h-10 sm:h-14 block" preserveAspectRatio="none">
          <path d="M0 8 C 360 56, 1080 56, 1440 8 L1440 64 L0 64 Z" className="fill-foam" />
          <path d="M0 8 C 360 56, 1080 56, 1440 8" fill="none" className="stroke-sky-brand/50" strokeWidth="1.5" />
        </svg>
      </div>
    </section>
  );
}

function ToothMark() {
  return (
    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 3.4c-1.9-1-4.6-1.4-6.1.2C4.3 5.2 4.5 7.4 5 9.4c.5 1.8.7 3.8 1 5.7.2 1.6.5 5.6 2 5.6 1.8 0 1.6-3.3 2.2-5.5.3-1 .9-1.7 1.8-1.7s1.5.7 1.8 1.7c.6 2.2.4 5.5 2.2 5.5 1.5 0 1.8-4 2-5.6.3-1.9.5-3.9 1-5.7.5-2 .7-4.2-.9-5.8-1.5-1.6-4.2-1.2-6.1-.2Z" />
    </svg>
  );
}
