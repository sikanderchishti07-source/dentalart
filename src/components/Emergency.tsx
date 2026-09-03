import { CLINIC } from "../data";
import { Reveal } from "../ui";
import { PhoneIcon, ClockIcon, PinIcon, HeartPulseIcon } from "../icons";

/* What counts as urgent — helps people self-triage instead of waiting it out */
const URGENT = [
  "A knocked-out or pushed-out tooth",
  "Severe toothache that painkillers aren't touching",
  "Facial or gum swelling",
  "Bleeding that won't stop after 20 minutes",
  "A broken tooth with sharp pain or a visible nerve",
  "A lost crown, filling or bracket causing pain",
];

export function Emergency() {
  return (
    <section
      id="emergency"
      aria-labelledby="emergency-heading"
      className="relative overflow-hidden bg-deep"
    >
      <div
        className="absolute inset-0 bg-[radial-gradient(44rem_28rem_at_88%_-10%,rgba(229,72,77,0.16),transparent_62%),radial-gradient(40rem_26rem_at_5%_110%,rgba(2,136,209,0.2),transparent_60%)]"
        aria-hidden="true"
      />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-16 sm:py-20 lg:grid-cols-12 lg:gap-16 lg:px-10">
        {/* ── Left: the ask ── */}
        <Reveal className="lg:col-span-5">
          <span className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-alert/30 bg-alert/10 px-4 py-1.5">
            <span className="pulse-ring relative h-2 w-2 rounded-full bg-alert text-alert" />
            <span className="text-[11px] font-extrabold tracking-[0.2em] text-alert">
              24/7 ON CALL
            </span>
          </span>

          <h2
            id="emergency-heading"
            className="font-display text-[32px] font-semibold leading-[1.08] tracking-tight text-paper sm:text-[40px]"
          >
            In pain right now?
          </h2>

          <p className="mt-5 max-w-[46ch] text-[15px] font-medium leading-relaxed text-paper/60">
            You don't have to wait for opening hours. One of our surgeons is
            reachable around the clock — call and we'll tell you what to do
            next, and bring you in the same day where it's needed.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={CLINIC.phoneHref}
              className="group inline-flex items-center gap-3 rounded-full bg-alert py-3 pl-6 pr-3 text-[15px] font-bold text-white shadow-[0_18px_40px_-16px_rgba(229,72,77,0.9)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-alert-deep"
            >
              Call {CLINIC.phoneDisplay}
              <span className="grid h-9 w-9 place-items-center rounded-full bg-white/20">
                <PhoneIcon className="h-[18px] w-[18px]" />
              </span>
            </a>
            <a
              href={CLINIC.phone2Href}
              className="link-line py-2 text-[14px] font-bold text-paper/75 hover:text-paper"
            >
              or {CLINIC.phone2Display}
            </a>
          </div>

          <dl className="mt-9 grid gap-3 border-t border-paper/10 pt-7 text-[12.5px] sm:grid-cols-2">
            <div className="flex items-start gap-2.5">
              <ClockIcon className="mt-[3px] h-4 w-4 shrink-0 text-sky-brand" />
              <div>
                <dt className="font-extrabold text-paper/85">Clinic hours</dt>
                <dd className="font-semibold text-paper/45">
                  {CLINIC.hours[0].days} · {CLINIC.hours[0].time}
                </dd>
              </div>
            </div>
            <div className="flex items-start gap-2.5">
              <PinIcon className="mt-[3px] h-4 w-4 shrink-0 text-sky-brand" />
              <div>
                <dt className="font-extrabold text-paper/85">Walk-in address</dt>
                <dd className="font-semibold text-paper/45">{CLINIC.address}</dd>
              </div>
            </div>
          </dl>
        </Reveal>

        {/* ── Right: triage list ── */}
        <Reveal delay={140} className="lg:col-span-7">
          <div className="rounded-3xl border border-paper/10 bg-white/[0.04] p-7 backdrop-blur sm:p-9">
            <div className="mb-6 flex items-center gap-3">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl bg-alert/15 text-alert">
                <HeartPulseIcon className="h-5 w-5" />
              </span>
              <h3 className="font-display text-[21px] font-semibold tracking-tight text-paper">
                When to call straight away
              </h3>
            </div>

            <ul className="grid gap-x-8 gap-y-3.5 sm:grid-cols-2">
              {URGENT.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-[14px] font-medium leading-snug text-paper/70"
                >
                  <span
                    className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-alert"
                    aria-hidden="true"
                  />
                  {item}
                </li>
              ))}
            </ul>

            <p className="mt-7 rounded-2xl border border-sky-brand/20 bg-sky-brand/[0.07] p-4 text-[13px] font-semibold leading-relaxed text-paper/70">
              If swelling is affecting your breathing or swallowing, or you have
              a serious facial injury, go to a hospital emergency department
              first — that needs care we can't give over the phone.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
