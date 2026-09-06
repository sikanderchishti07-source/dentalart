import { useEffect, useState } from "react";
import { usePrefersReducedMotion } from "../ui";

/**
 * Brand splash shown while the page loads.
 * Fades out as soon as the window has loaded, with a short minimum so it
 * never flashes, and is skipped entirely for reduced-motion users.
 */
export default function Preloader() {
  const reduceMotion = usePrefersReducedMotion();
  const [leaving, setLeaving] = useState(false);
  const [gone, setGone] = useState(false);

  useEffect(() => {
    if (reduceMotion) {
      setGone(true);
      return;
    }
    const start = Date.now();
    const MIN_VISIBLE = 700;

    const finish = () => {
      const wait = Math.max(0, MIN_VISIBLE - (Date.now() - start));
      window.setTimeout(() => {
        setLeaving(true);
        window.setTimeout(() => setGone(true), 520);
      }, wait);
    };

    if (document.readyState === "complete") finish();
    else window.addEventListener("load", finish, { once: true });

    /* Never trap the visitor if something stalls */
    const bail = window.setTimeout(finish, 3500);
    return () => {
      window.removeEventListener("load", finish);
      window.clearTimeout(bail);
    };
  }, [reduceMotion]);

  useEffect(() => {
    document.body.style.overflow = gone ? "" : "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [gone]);

  if (gone) return null;

  return (
    <div
      aria-hidden="true"
      className={`fixed inset-0 z-[100] grid place-items-center bg-white transition-opacity duration-500 ${
        leaving ? "opacity-0" : "opacity-100"
      }`}
    >
      {/* soft brand glow */}
      <div
        className="absolute inset-0 bg-[radial-gradient(40rem_28rem_at_50%_45%,rgba(2,136,209,0.10),transparent_68%)]"
      />

      <div className="relative grid place-items-center">
        {/* two concentric rings, the outer one turning slowly */}
        <span className="absolute h-[300px] w-[300px] rounded-full border border-primary/12 sm:h-[400px] sm:w-[400px]" />
        <span className="absolute h-[300px] w-[300px] animate-spin-slow rounded-full border border-transparent border-t-[#C9A227] sm:h-[400px] sm:w-[400px]" />
        

        <img
          src="/images/dac-splash.jpg"
          alt="DentalArt Care"
          className="relative h-[230px] w-auto mix-blend-multiply sm:h-[310px]"
        />
      </div>

      {/* thin progress line */}
      <div className="absolute bottom-[16%] h-[2px] w-64 overflow-hidden rounded-full bg-ink/10 sm:w-80">
        <span className="preloader-line block h-full w-1/3 bg-primary" />
      </div>
    </div>
  );
}
