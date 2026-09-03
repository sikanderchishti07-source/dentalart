import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { getServicePage } from "../serviceContent";
import { CLINIC } from "../data";
import { Reveal } from "../ui";
import {
  WhitenIcon,
  ImplantIcon,
  BracesIcon,
  RootCanalIcon,
  CleanIcon,
  VeneerIcon,
  CheckIcon,
  ArrowRightIcon,
  WhatsAppIcon,
} from "../icons";

const ICONS = {
  whiten: WhitenIcon,
  implant: ImplantIcon,
  braces: BracesIcon,
  rootcanal: RootCanalIcon,
  clean: CleanIcon,
  veneer: VeneerIcon,
};

export default function ServicePage() {
  const { slug } = useParams();
  const page = getServicePage(slug);

  /* Title, description and canonical, set per page */
  useEffect(() => {
    if (!page) return;
    window.scrollTo(0, 0);
    document.title = page.metaTitle;

    const setMeta = (selector: string, attr: string, value: string, content: string) => {
      let el = document.head.querySelector<HTMLMetaElement>(selector);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, value);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    setMeta('meta[name="description"]', "name", "description", page.metaDescription);
    setMeta('meta[property="og:title"]', "property", "og:title", page.metaTitle);
    setMeta('meta[property="og:description"]', "property", "og:description", page.metaDescription);

    let link = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!link) {
      link = document.createElement("link");
      link.rel = "canonical";
      document.head.appendChild(link);
    }
    link.href = `${window.location.origin}/${page.slug}`;

    /* MedicalProcedure + FAQ structured data for this page */
    const ld = document.getElementById("service-ld") ?? document.createElement("script");
    ld.id = "service-ld";
    (ld as HTMLScriptElement).type = "application/ld+json";
    ld.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "MedicalProcedure",
          name: page.navLabel,
          description: page.metaDescription,
          url: `${window.location.origin}/${page.slug}`,
          provider: {
            "@type": "Dentist",
            name: CLINIC.name,
            telephone: CLINIC.phoneDisplay,
            address: {
              "@type": "PostalAddress",
              streetAddress: CLINIC.address,
              addressLocality: "Lahore",
              addressCountry: "PK",
            },
          },
        },
        {
          "@type": "FAQPage",
          mainEntity: page.faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        },
      ],
    });
    if (!ld.parentNode) document.head.appendChild(ld);
  }, [page]);

  if (!page) {
    return (
      <div className="grid min-h-[70vh] place-items-center px-6 pt-32 text-center">
        <div>
          <h1 className="font-display text-[32px] font-semibold text-ink">
            That treatment page does not exist
          </h1>
          <p className="mt-3 text-[15px] font-medium text-slate-brand">
            It may have moved. All our treatments are listed on the homepage.
          </p>
          <Link
            to="/"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-[14px] font-bold text-white"
          >
            Back to homepage
          </Link>
        </div>
      </div>
    );
  }

  const Icon = ICONS[page.icon];

  return (
    <article>
      {/* ══ Hero ══ */}
      <header className="relative overflow-hidden bg-deep pt-[104px] md:pt-[132px]">
        <div
          className="absolute inset-0 bg-[radial-gradient(46rem_28rem_at_85%_-10%,rgba(2,136,209,0.28),transparent_62%),radial-gradient(36rem_24rem_at_0%_110%,rgba(129,199,132,0.14),transparent_60%)]"
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-6xl px-6 pb-14 pt-8 lg:px-10">
          <nav aria-label="Breadcrumb" className="mb-6 text-[12.5px] font-bold text-paper/45">
            <Link to="/" className="text-sky-brand hover:underline">
              Home
            </Link>
            <span className="px-2 text-paper/25">/</span>
            <Link to="/#services" className="text-sky-brand hover:underline">
              Treatments
            </Link>
            <span className="px-2 text-paper/25">/</span>
            {page.navLabel}
          </nav>

          <span className="mb-6 grid h-14 w-14 place-items-center rounded-2xl border border-sky-brand/20 bg-sky-brand/10 text-sky-brand">
            <Icon className="h-7 w-7" />
          </span>

          <h1 className="font-display text-[34px] font-semibold leading-[1.08] tracking-tight text-paper sm:text-[46px]">
            {page.h1Lead}
            <br />
            <em className="font-medium italic text-sky-brand">{page.h1Accent}</em>
            {page.h1Tail}
          </h1>

          <p className="mt-6 max-w-[54ch] text-[15.5px] font-medium leading-relaxed text-paper/60">
            {page.intro}
          </p>

          <ul className="mt-8 flex flex-wrap gap-2">
            {page.chips.map((c) => (
              <li
                key={c}
                className="rounded-full border border-sky-brand/25 bg-sky-brand/10 px-3.5 py-1.5 text-[12px] font-bold text-sky-brand"
              >
                {c}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/#booking"
              className="inline-flex items-center gap-2.5 rounded-full bg-primary px-6 py-3 text-[14px] font-bold text-white transition-colors hover:bg-primary-deep"
            >
              Book a consultation
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
            <a
              href={CLINIC.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 rounded-full border border-paper/20 bg-paper/10 px-6 py-3 text-[14px] font-bold text-paper transition-colors hover:bg-paper/20"
            >
              <WhatsAppIcon className="h-[17px] w-[17px]" />
              Ask a question
            </a>
          </div>
        </div>
      </header>

      {/* ══ What it is ══ */}
      <section className="py-14 lg:py-20">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <Reveal>
            <p className="mb-3.5 text-[11px] font-extrabold tracking-[0.22em] text-primary">
              WHAT IT IS
            </p>
            <h2 className="font-display text-[28px] font-semibold leading-tight tracking-tight text-ink sm:text-[34px]">
              {page.whatHeading}
            </h2>
            <div className="mt-5 max-w-[65ch] space-y-4 text-[15.5px] font-medium leading-[1.8] text-slate-brand">
              {page.what.map((para) => (
                <p key={para.slice(0, 24)}>{para}</p>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ══ Who it suits + clinician ══ */}
      <section className="border-y border-foam bg-white py-14 lg:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-2 lg:gap-16 lg:px-10">
          <Reveal>
            <p className="mb-3.5 text-[11px] font-extrabold tracking-[0.22em] text-primary">
              WHO IT SUITS
            </p>
            <h2 className="font-display text-[26px] font-semibold leading-tight tracking-tight text-ink sm:text-[30px]">
              {page.suitsHeading}
            </h2>
            <ul className="mt-6 grid gap-3.5">
              {page.suits.map((s) => (
                <li
                  key={s}
                  className="flex items-start gap-3 text-[15px] font-medium leading-snug text-slate-brand"
                >
                  <CheckIcon className="mt-[3px] h-[18px] w-[18px] shrink-0 text-moss" />
                  {s}
                </li>
              ))}
            </ul>
            <p className="mt-7 rounded-2xl bg-foam p-5 text-[13.5px] font-semibold leading-[1.7] text-slate-brand">
              <span className="text-ink">{page.cautionTitle}. </span>
              {page.caution}
            </p>
          </Reveal>

          <Reveal delay={140}>
            <p className="mb-3.5 text-[11px] font-extrabold tracking-[0.22em] text-primary">
              WHO TREATS YOU
            </p>
            <div className="rounded-3xl border border-foam bg-paper p-7 shadow-card">
              <div className="flex items-center gap-5">
                <span className="grid h-[76px] w-[76px] shrink-0 place-items-center rounded-[999px_999px_14px_14px] bg-gradient-to-br from-sky-brand to-primary-deep font-display text-2xl text-white">
                  {page.doctor.initials}
                </span>
                <div>
                  <h3 className="font-display text-[20px] font-semibold tracking-tight text-ink">
                    {page.doctor.name}
                  </h3>
                  <p className="mt-0.5 text-[13px] font-bold text-primary">{page.doctor.role}</p>
                  <p className="mt-0.5 text-[12.5px] font-semibold text-mist">
                    {page.doctor.credentials}
                  </p>
                </div>
              </div>
              <p className="mt-5 text-[14px] font-medium leading-[1.7] text-slate-brand">
                {page.doctor.bio}
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ══ Process ══ */}
      <section className="py-14 lg:py-20">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <Reveal>
            <p className="mb-3.5 text-[11px] font-extrabold tracking-[0.22em] text-primary">
              THE PROCESS
            </p>
            <h2 className="font-display text-[28px] font-semibold leading-tight tracking-tight text-ink sm:text-[34px]">
              What actually happens, and when
            </h2>
          </Reveal>
          <ol className="mt-8 max-w-[62ch]">
            {page.process.map((step, i) => (
              <Reveal key={step.title} delay={i * 70}>
                <li
                  className={`relative ml-[18px] border-l-2 pb-7 pl-14 ${
                    i === page.process.length - 1 ? "border-transparent pb-0" : "border-foam"
                  }`}
                >
                  <span className="absolute -left-[18px] -top-0.5 grid h-9 w-9 place-items-center rounded-full bg-primary text-[13px] font-extrabold text-white">
                    {i + 1}
                  </span>
                  <h3 className="font-display text-[17px] font-semibold tracking-tight text-ink">
                    {step.title}
                  </h3>
                  <p className="mt-1.5 max-w-[56ch] text-[14px] font-medium leading-[1.65] text-slate-brand">
                    {step.body}
                  </p>
                  <span className="mt-2 inline-block text-[11.5px] font-extrabold text-mist">
                    {step.when}
                  </span>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* ══ Costs ══ */}
      {page.showCosts && (
        <section className="border-y border-foam bg-white py-14 lg:py-20">
          <div className="mx-auto max-w-6xl px-6 lg:px-10">
            <Reveal>
              <p className="mb-3.5 text-[11px] font-extrabold tracking-[0.22em] text-primary">
                COST
              </p>
              <h2 className="font-display text-[28px] font-semibold leading-tight tracking-tight text-ink sm:text-[34px]">
                What it costs in Lahore
              </h2>
              <p className="mt-5 max-w-[62ch] text-[15px] font-medium leading-[1.8] text-slate-brand">
                {page.costIntro}
              </p>

              <div className="mt-8 max-w-[46rem] overflow-hidden rounded-3xl border border-foam">
                <p className="bg-foam px-6 py-4 text-[13px] font-extrabold text-ink">
                  Typical ranges
                </p>
                <table className="w-full border-collapse">
                  <tbody>
                    {page.costs.map((row) => (
                      <tr key={row.item}>
                        <td className="border-t border-foam px-6 py-4 text-[14px] font-semibold text-slate-brand">
                          {row.item}
                        </td>
                        <td className="whitespace-nowrap border-t border-foam px-6 py-4 text-right text-[14px] font-extrabold text-ink">
                          {row.price || (
                            <span className="inline-block min-w-[6.5rem] border-b-2 border-dashed border-mist text-mist">
                              &nbsp;
                            </span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <p className="border-t border-foam bg-paper px-6 py-4 text-[12.5px] font-semibold leading-[1.65] text-mist">
                  No payment is taken at the consultation. You receive a written
                  estimate before treatment begins.
                </p>
              </div>
            </Reveal>
          </div>
        </section>
      )}

      {/* ══ FAQs ══ */}
      <section className="py-14 lg:py-20">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <Reveal>
            <p className="mb-3.5 text-[11px] font-extrabold tracking-[0.22em] text-primary">
              QUESTIONS
            </p>
            <h2 className="font-display text-[28px] font-semibold leading-tight tracking-tight text-ink sm:text-[34px]">
              What patients ask before booking
            </h2>
          </Reveal>
          <div className="mt-7 max-w-[52rem]">
            {page.faqs.map((f, i) => (
              <details
                key={f.q}
                open={i === 0}
                className="group border-b border-foam"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 font-display text-[18px] font-semibold text-ink [&::-webkit-details-marker]:hidden">
                  {f.q}
                  <span className="shrink-0 text-[22px] font-normal text-primary group-open:hidden">
                    +
                  </span>
                  <span className="hidden shrink-0 text-[22px] font-normal text-primary group-open:block">
                    &minus;
                  </span>
                </summary>
                <p className="max-w-[62ch] pb-5 text-[14.5px] font-medium leading-[1.75] text-slate-brand">
                  {f.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CTA ══ */}
      <section className="relative overflow-hidden bg-deep">
        <div
          className="absolute inset-0 bg-[radial-gradient(40rem_24rem_at_80%_0%,rgba(2,136,209,0.3),transparent_60%)]"
          aria-hidden="true"
        />
        <div className="relative mx-auto grid max-w-6xl gap-7 px-6 py-14 lg:grid-cols-[1.4fr_1fr] lg:items-center lg:px-10 lg:py-16">
          <div>
            <h2 className="font-display text-[28px] font-semibold tracking-tight text-paper sm:text-[32px]">
              {page.ctaHeading}
            </h2>
            <p className="mt-3 max-w-[48ch] text-[15px] font-medium leading-[1.7] text-paper/60">
              {page.ctaBody}
            </p>
          </div>
          <div className="flex flex-wrap gap-3 lg:justify-end">
            <Link
              to="/#booking"
              className="inline-flex items-center gap-2 rounded-full bg-paper px-6 py-3 text-[14px] font-bold text-ink transition-colors hover:bg-sky-brand"
            >
              Book a consultation
            </Link>
            <a
              href={CLINIC.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-wa px-6 py-3 text-[14px] font-bold text-white transition-colors hover:bg-moss"
            >
              <WhatsAppIcon className="h-[17px] w-[17px]" />
              WhatsApp us
            </a>
          </div>
        </div>
      </section>
    </article>
  );
}
