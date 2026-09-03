import { IMAGES, CLINIC } from "../data";
import {
  StarIcon,
  ArrowRightIcon,
  ShieldIcon,
  HeartPulseIcon,
  SparkleIcon,
  WhatsAppIcon,
} from "../icons";

/* Trust pillars — qualitative reassurance, shown before the numbers */
const PILLARS = [
  {
    Icon: ShieldIcon,
    title: "Specialist-led",
    desc: "MDS & FCPS qualified",
  },
  {
    Icon: HeartPulseIcon,
    title: "Pain-free protocol",
    desc: "Comfort-first technique",
  },
  {
    Icon: SparkleIcon,
    title: "Hospital-grade",
    desc: "Sterilisation standards",
  },
];

const PROOF = [
  { value: "10,000+", label: "Patients treated", sub: "across Lahore" },
  { value: "10+", label: "Years of practice", sub: "specialist experience" },
  { value: "4.9", label: "Average rating", sub: "from patient reviews" },
];

export default function Hero() {
  return (
    <section
      id="top"
      aria-label="Introduction"
      className="relative overflow-hidden bg-paper"
    >
      {/* ── Split canvas: copy left, clinic photo bleeding right ── */}
      <div className="relative lg:min-h-[640px]">
        {/* Photo panel — diagonal edge on desktop, full-width band on mobile */}
        <div
          className="relative h-[300px] sm:h-[380px] lg:absolute lg:inset-y-0 lg:right-0 lg:h-auto lg:w-[52%]"
          aria-hidden="true"
        >
          <div className="absolute inset-0 lg:[clip-path:polygon(14%_0,100%_0,100%_100%,0_100%)]">
            <img
              src={IMAGES.interior}
              alt=""
              className="h-full w-full object-cover animate-breathe"
              loading="eager"
              fetchPriority="high"
            />
            {/* Wash so the photo never fights the headline */}
            <div className="absolute inset-0 bg-gradient-to-r from-paper via-paper/10 to-transparent lg:from-paper/80 lg:via-transparent" />
          </div>
        </div>

        {/* Soft ambient tint behind the copy */}
        <div
          className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(46rem_32rem_at_-10%_10%,rgb(2_136_209/0.10),transparent_60%),radial-gradient(38rem_28rem_at_20%_95%,rgb(129_199_132/0.10),transparent_60%)]"
          aria-hidden="true"
        />

        {/* Copy column */}
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
          <div className="max-w-[36rem] py-14 lg:py-24">
            <span className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-mint/40 bg-mint/10 px-4 py-1.5">
              <span className="pulse-ring relative h-2 w-2 rounded-full bg-moss text-moss" />
              <span className="text-[11px] font-extrabold tracking-[0.2em] text-moss">
                ACCEPTING NEW PATIENTS
              </span>
            </span>

            <h1 className="font-display text-[40px] font-semibold leading-[1.05] tracking-[-0.02em] text-ink sm:text-[54px] xl:text-[62px]">
              Specialist dentistry
              <br />
              in Lahore,{" "}
              <em className="relative font-medium italic text-primary">
                designed
                <svg
                  viewBox="0 0 160 12"
                  className="absolute -bottom-1 left-0 h-[9px] w-full text-mint"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M3 9C40 3 100 2 157 6"
                    stroke="currentColor"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                  />
                </svg>
              </em>{" "}
              around you.
            </h1>

            <p className="mt-7 max-w-[46ch] text-[16px] font-medium leading-relaxed text-slate-brand">
              Implants placed by an oral surgeon, braces planned by an FCPS
              orthodontist, and everyday care from a team that explains before it
              treats. Evening hours, six days a week.
            </p>

            {/* Actions */}
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a
                href="#booking"
                className="group inline-flex items-center gap-3 rounded-full bg-primary py-2.5 pl-6 pr-2.5 text-[14.5px] font-bold text-white shadow-[0_16px_36px_-14px_rgb(2_136_209/0.75)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary-deep"
              >
                Book appointment
                <span className="grid h-9 w-9 place-items-center rounded-full bg-white/15 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:bg-white/25">
                  <ArrowRightIcon className="h-4 w-4" />
                </span>
              </a>
              <a
                href={CLINIC.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 rounded-full border-2 border-wa/30 bg-white px-6 py-3 text-[14.5px] font-bold text-ink transition-colors duration-300 hover:border-wa hover:bg-wa/5"
              >
                <WhatsAppIcon className="h-[18px] w-[18px] text-wa" />
                Chat on WhatsApp
              </a>
            </div>

            {/* Trust pillars */}
            <ul className="mt-11 grid gap-x-6 gap-y-5 sm:grid-cols-3">
              {PILLARS.map(({ Icon, title, desc }) => (
                <li key={title} className="flex items-start gap-3">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
                    <Icon className="h-[18px] w-[18px]" />
                  </span>
                  <span className="leading-tight">
                    <span className="block text-[13px] font-extrabold text-ink">
                      {title}
                    </span>
                    <span className="block text-[12px] font-semibold text-mist">
                      {desc}
                    </span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* ── Proof bar: real numbers, spanning the full width ── */}
      <div className="relative mx-auto max-w-7xl px-6 pb-16 lg:px-10 lg:pb-20">
        <div className="grid divide-y divide-foam rounded-3xl border border-foam bg-white/95 shadow-lift backdrop-blur sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {PROOF.map((p, i) => (
            <div key={p.label} className="flex items-center gap-4 px-7 py-6">
              <span className="font-display text-[34px] font-semibold leading-none text-primary">
                {p.value}
              </span>
              <span className="leading-tight">
                <span className="block text-[13.5px] font-extrabold text-ink">
                  {p.label}
                </span>
                <span className="block text-[12px] font-semibold text-mist">
                  {p.sub}
                </span>
              </span>
              {i === 2 && (
                <span className="ml-auto hidden text-primary lg:flex">
                  {[...Array(5)].map((_, s) => (
                    <StarIcon key={s} className="h-3.5 w-3.5" />
                  ))}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Smile-curve divider (kept from the original hero) */}
      <div className="relative" aria-hidden="true">
        <svg
          viewBox="0 0 1440 64"
          className="block h-10 w-full sm:h-14"
          preserveAspectRatio="none"
        >
          <path
            d="M0 8 C 360 56, 1080 56, 1440 8 L1440 64 L0 64 Z"
            className="fill-foam"
          />
          <path
            d="M0 8 C 360 56, 1080 56, 1440 8"
            fill="none"
            className="stroke-sky-brand/50"
            strokeWidth="1.5"
          />
        </svg>
      </div>
    </section>
  );
}
