import { useCallback, useEffect, useRef, useState, type PointerEvent as RPointerEvent } from "react";
import { GALLERY, DOCTORS, TESTIMONIALS, type GalleryCase } from "../data";
import { Reveal, Eyebrow, usePrefersReducedMotion } from "../ui";
import {
  StarIcon,
  QuoteIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ArrowRightIcon,
  SparkleIcon,
} from "../icons";

/* ═══════════════════ BEFORE / AFTER SLIDER ═══════════════════ */

function BeforeAfter({ item, delay }: { item: GalleryCase; delay: number }) {
  const [pos, setPos] = useState(56);
  const wrapRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const setFromClientX = useCallback((clientX: number) => {
    const el = wrapRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const p = ((clientX - r.left) / r.width) * 100;
    setPos(Math.min(96, Math.max(4, p)));
  }, []);

  const onPointerDown = (e: RPointerEvent<HTMLDivElement>) => {
    dragging.current = true;
    (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
    setFromClientX(e.clientX);
  };
  const onPointerMove = (e: RPointerEvent<HTMLDivElement>) => {
    if (dragging.current) setFromClientX(e.clientX);
  };
  const stop = () => (dragging.current = false);

  return (
    <Reveal delay={delay} variant="pop">
      <figure className="group rounded-3xl bg-white border border-foam shadow-card overflow-hidden transition-all duration-500 hover:shadow-lift hover:-translate-y-1.5">
        {/* Compare surface */}
        <div
          ref={wrapRef}
          className="relative aspect-[10/7] select-none touch-none cursor-ew-resize overflow-hidden"
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={stop}
          onPointerLeave={stop}
        >
          {/* After (base) */}
          <img src={item.img} alt={`${item.title} — after treatment result`} className="absolute inset-0 w-full h-full object-cover" loading="lazy" draggable={false} />
          {/* Before (clipped, tinted) */}
          <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }} aria-hidden="true">
            <img src={item.img} alt="" className="absolute inset-0 w-full h-full object-cover ba-img-before" loading="lazy" draggable={false} />
          </div>

          {/* Labels */}
          <span className="absolute top-3.5 left-3.5 rounded-full bg-deep/80 backdrop-blur px-3 py-1 text-[10.5px] font-extrabold uppercase tracking-[0.16em] text-paper">Before</span>
          <span className="absolute top-3.5 right-3.5 rounded-full bg-primary/90 backdrop-blur px-3 py-1 text-[10.5px] font-extrabold uppercase tracking-[0.16em] text-white">After</span>

          {/* Handle */}
          <div className="absolute inset-y-0" style={{ left: `${pos}%` }} aria-hidden="false">
            <div className="absolute inset-y-0 -ml-px w-0.5 bg-white/90 shadow-[0_0_12px_rgba(4,29,48,0.35)]" />
            <button
              role="slider"
              aria-label={`Compare before and after — ${item.title}`}
              aria-valuemin={0}
              aria-valuemax={100}
              aria-valuenow={Math.round(pos)}
              onKeyDown={(e) => {
                if (e.key === "ArrowLeft") setPos((p) => Math.max(4, p - 6));
                if (e.key === "ArrowRight") setPos((p) => Math.min(96, p + 6));
              }}
              className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-11 h-11 rounded-full bg-white text-primary shadow-lift grid place-items-center transition-transform duration-200 hover:scale-110 focus:outline-none focus-visible:ring-4 focus-visible:ring-sky-brand/60"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M8.5 7.5 4 12l4.5 4.5M15.5 7.5 20 12l-4.5 4.5" />
              </svg>
            </button>
          </div>
        </div>

        <figcaption className="p-6 flex items-start justify-between gap-4">
          <div>
            <h3 className="font-display font-semibold text-[20px] text-ink tracking-tight">{item.title}</h3>
            <p className="mt-1.5 text-[13.5px] leading-relaxed text-slate-brand font-medium">{item.caption}</p>
          </div>
          <span className="shrink-0 mt-1 rounded-full bg-mint/15 text-moss px-3 py-1.5 text-[10.5px] font-extrabold uppercase tracking-[0.12em] whitespace-nowrap">
            {item.result}
          </span>
        </figcaption>
      </figure>
    </Reveal>
  );
}

export function Gallery() {
  return (
    <section id="results" aria-labelledby="results-heading" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(50rem_32rem_at_-10%_10%,rgba(129,199,132,0.1),transparent_60%)]" aria-hidden="true" />
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-8 items-end mb-14">
          <Reveal className="lg:col-span-7">
            <Eyebrow>Real results</Eyebrow>
            <h2 id="results-heading" className="font-display font-semibold text-ink text-[34px] sm:text-[46px] leading-[1.06] tracking-tight mt-5">
              Smile{" "}
              <em className="italic font-medium text-primary">transformations,</em>
              <br className="hidden sm:block" /> verified by the mirror.
            </h2>
          </Reveal>
          <Reveal delay={140} className="lg:col-span-5">
            <p className="text-[15px] leading-relaxed text-slate-brand font-medium lg:pb-2">
              Drag the handle on any case to compare before and after. Every
              result below was achieved in our clinic — no filters, no stock
              promises.
            </p>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-7">
          {GALLERY.map((g, i) => (
            <BeforeAfter key={g.title} item={g} delay={i * 120} />
          ))}
        </div>

        <Reveal className="mt-12 text-center">
          <a
            href="#booking"
            className="group inline-flex items-center gap-3 rounded-full border-[1.5px] border-ink/15 px-7 py-3.5 text-[14px] font-extrabold text-ink hover:bg-ink hover:text-paper transition-all duration-300 hover:-translate-y-0.5"
          >
            Start your own transformation
            <ArrowRightIcon className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}

/* ═══════════════════ DOCTORS ═══════════════════ */

function DoctorCard({ doc, delay }: { doc: (typeof DOCTORS)[number]; delay: number }) {
  const [open, setOpen] = useState(false);
  return (
    <Reveal delay={delay} variant="pop">
      <article
        className="group relative rounded-t-[160px] rounded-b-3xl overflow-hidden bg-white border border-foam shadow-card cursor-pointer transition-all duration-500 hover:shadow-lift hover:-translate-y-1.5 focus-within:shadow-lift"
        onClick={() => setOpen((o) => !o)}
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            setOpen((o) => !o);
          }
        }}
        aria-label={`${doc.name}, ${doc.role}. Activate to read biography.`}
      >
        <img
          src={doc.img}
          alt={`${doc.name} — ${doc.role} at DentalArt Care`}
          className="w-full aspect-[3/3.6] object-cover object-top transition-transform duration-700 group-hover:scale-[1.04]"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-deep/85 via-deep/20 to-transparent" />

        {/* Front info */}
        <div className={`absolute inset-x-0 bottom-0 p-7 transition-all duration-500 ${open ? "opacity-0 translate-y-3 pointer-events-none" : "opacity-100"}`}>
          <h3 className="font-display font-semibold text-[22px] text-paper tracking-tight">{doc.name}</h3>
          <p className="text-[12px] font-extrabold uppercase tracking-[0.16em] text-sky-brand mt-1">{doc.role}</p>
          <div className="flex flex-wrap gap-1.5 mt-3.5">
            {doc.tags.map((t) => (
              <span key={t} className="rounded-full bg-white/15 backdrop-blur px-2.5 py-1 text-[10.5px] font-bold text-paper">{t}</span>
            ))}
          </div>
          <p className="mt-3.5 text-[11px] font-bold text-paper/60 uppercase tracking-[0.14em]">Tap for biography ↓</p>
        </div>

        {/* Bio overlay */}
        <div className={`absolute inset-0 bg-deep/[0.94] p-7 sm:p-8 flex flex-col justify-end transition-all duration-500 ${open ? "opacity-100" : "opacity-0 pointer-events-none translate-y-3"}`}>
          <SparkleIcon className="w-4 h-4 text-mint absolute top-7 right-7" />
          <h3 className="font-display font-semibold text-[21px] text-paper tracking-tight">{doc.name}</h3>
          <p className="text-[12px] font-extrabold text-sky-brand mt-1">{doc.credentials}</p>
          <p className="mt-4 text-[13.5px] leading-relaxed text-paper/85 font-medium">{doc.bio}</p>
          <a
            href="#booking"
            tabIndex={open ? 0 : -1}
            onClick={(e) => e.stopPropagation()}
            className="mt-5 inline-flex items-center gap-2 self-start rounded-full bg-primary text-white px-5 py-2.5 text-[12.5px] font-extrabold hover:bg-sky-brand hover:text-deep transition-colors duration-300"
          >
            Book with {doc.name.split(" ")[1]}
            <ArrowRightIcon className="w-3.5 h-3.5" />
          </a>
        </div>
      </article>
    </Reveal>
  );
}

export function Team() {
  return (
    <section id="doctors" aria-labelledby="doctors-heading" className="relative py-24 sm:py-32 bg-white border-y border-foam overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-8 items-end mb-16">
          <Reveal className="lg:col-span-7">
            <Eyebrow>Our specialists</Eyebrow>
            <h2 id="doctors-heading" className="font-display font-semibold text-ink text-[34px] sm:text-[46px] leading-[1.06] tracking-tight mt-5">
              Hands you can{" "}
              <em className="italic font-medium text-primary">trust,</em>
              <br className="hidden sm:block" /> people you'll like.
            </h2>
          </Reveal>
          <Reveal delay={140} className="lg:col-span-5">
            <p className="text-[15px] leading-relaxed text-slate-brand font-medium lg:pb-2">
              Board-certified specialists with decades of combined experience —
              and the patience to explain everything before they touch a thing.
            </p>
          </Reveal>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto lg:max-w-none">
          {DOCTORS.map((d, i) => (
            <DoctorCard key={d.name} doc={d} delay={i * 130} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════ TESTIMONIALS ═══════════════════ */

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduced = usePrefersReducedMotion();
  const count = TESTIMONIALS.length;

  useEffect(() => {
    if (paused || reduced) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % count), 6000);
    return () => clearInterval(id);
  }, [paused, reduced, count]);

  return (
    <section id="reviews" aria-labelledby="reviews-heading" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(48rem_30rem_at_110%_80%,rgba(79,195,247,0.12),transparent_60%)]" aria-hidden="true" />
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-14">
        {/* Summary */}
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-32">
            <Reveal>
              <Eyebrow>Patient stories</Eyebrow>
              <h2 id="reviews-heading" className="font-display font-semibold text-ink text-[34px] sm:text-[42px] leading-[1.08] tracking-tight mt-5">
                What our patients{" "}
                <em className="italic font-medium text-primary">say.</em>
              </h2>
            </Reveal>
            <Reveal delay={140}>
              <div className="mt-9 rounded-3xl bg-deep text-paper p-8 relative overflow-hidden">
                <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-primary/20 blur-2xl" aria-hidden="true" />
                <p className="font-display font-semibold text-[64px] leading-none">
                  4.9<span className="text-[28px] text-paper/50">/5</span>
                </p>
                <div className="flex gap-1 mt-4 text-sky-brand">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} className="w-5 h-5" />
                  ))}
                </div>
                <p className="mt-4 text-[13.5px] font-semibold text-paper/70 leading-relaxed">
                  Based on 2,140+ verified patient reviews. Read a few of them —
                  in their own words.
                </p>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Carousel */}
        <div className="lg:col-span-8">
          <Reveal delay={100}>
            <div
              className="relative overflow-hidden rounded-3xl"
              onMouseEnter={() => setPaused(true)}
              onMouseLeave={() => setPaused(false)}
              aria-live="polite"
            >
              <div
                className="flex transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
                style={{ transform: `translateX(-${index * 100}%)` }}
              >
                {TESTIMONIALS.map((t, i) => (
                  <blockquote
                    key={t.name}
                    className="w-full shrink-0 bg-white border border-foam rounded-3xl p-8 sm:p-11 shadow-card"
                    aria-hidden={i !== index}
                  >
                    <QuoteIcon className="w-9 h-9 text-sky-brand/70" />
                    <div className="flex gap-1 mt-6 text-primary" aria-label="5 out of 5 stars">
                      {[...Array(5)].map((_, s) => (
                        <StarIcon key={s} className="w-4 h-4" />
                      ))}
                    </div>
                    <p className="mt-5 font-display text-[20px] sm:text-[24px] leading-[1.45] text-ink font-medium">
                      "{t.quote}"
                    </p>
                    <footer className="mt-8 flex items-center gap-4">
                      <span className={`w-12 h-12 rounded-full bg-gradient-to-br ${t.gradient} grid place-items-center text-[13px] font-extrabold text-white ring-4 ring-foam`}>
                        {t.initials}
                      </span>
                      <div>
                        <cite className="not-italic font-extrabold text-[15px] text-ink block">{t.name}</cite>
                        <p className="text-[12.5px] font-bold text-mist uppercase tracking-[0.12em] mt-0.5">{t.treatment}</p>
                      </div>
                    </footer>
                  </blockquote>
                ))}
              </div>
            </div>

            {/* Controls */}
            <div className="mt-7 flex items-center justify-between">
              <div className="flex gap-2" role="tablist" aria-label="Choose testimonial">
                {TESTIMONIALS.map((t, i) => (
                  <button
                    key={t.name}
                    role="tab"
                    aria-selected={i === index}
                    aria-label={`Testimonial from ${t.name}`}
                    onClick={() => setIndex(i)}
                    className={`h-2 rounded-full transition-all duration-400 ${
                      i === index ? "w-8 bg-primary" : "w-2 bg-ink/15 hover:bg-primary/40"
                    }`}
                  />
                ))}
              </div>
              <div className="flex gap-2.5">
                <button
                  onClick={() => setIndex((index - 1 + count) % count)}
                  aria-label="Previous testimonial"
                  className="w-11 h-11 rounded-full border-[1.5px] border-ink/15 grid place-items-center text-ink hover:bg-ink hover:text-paper hover:border-ink transition-all duration-300"
                >
                  <ChevronLeftIcon />
                </button>
                <button
                  onClick={() => setIndex((index + 1) % count)}
                  aria-label="Next testimonial"
                  className="w-11 h-11 rounded-full border-[1.5px] border-ink/15 grid place-items-center text-ink hover:bg-ink hover:text-paper hover:border-ink transition-all duration-300"
                >
                  <ChevronRightIcon />
                </button>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
