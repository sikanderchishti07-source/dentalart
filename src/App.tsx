import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Preloader from "./components/Preloader";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import { Marquee, Stats, WhyUs, Services } from "./components/Sections";
import { Gallery, Team, Testimonials } from "./components/Showcase";
import { Booking, Faq, Footer } from "./components/Closing";
import { Emergency } from "./components/Emergency";
import ServicePage from "./components/ServicePage";
import { WhatsAppIcon, PhoneIcon } from "./icons";
import { CLINIC } from "./data";

/* Jump to #hash targets after a route change */
function HashScroll() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const t = setTimeout(() => {
        document.querySelector(hash)?.scrollIntoView({ behavior: "smooth" });
      }, 60);
      return () => clearTimeout(t);
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
}

function FloatingActions() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 420);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-4 right-3 z-50 flex flex-col items-end gap-2.5 sm:bottom-6 sm:right-6 sm:gap-3 transition-all duration-500 ${
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-6 opacity-0"
      }`}
    >
      <a
        href={CLINIC.phoneHref}
        aria-label="Call the on-call surgeon for a dental emergency"
        className="group relative"
      >
        <span className="relative flex items-center gap-0 overflow-hidden rounded-full border border-alert/30 bg-white py-2.5 pl-3 pr-3 shadow-[0_14px_32px_-14px_rgba(4,29,48,0.5)] sm:py-3 sm:pl-3.5 sm:pr-3.5 transition-all duration-400 group-hover:gap-2.5 group-hover:pr-5">
          <PhoneIcon className="h-[18px] w-[18px] shrink-0 text-alert sm:h-5 sm:w-5" />
          <span className="max-w-0 overflow-hidden whitespace-nowrap text-[13px] font-extrabold text-ink transition-all duration-400 group-hover:max-w-[120px]">
            In pain? Call
          </span>
        </span>
      </a>

      <a
        href={CLINIC.whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with DentalArt Care on WhatsApp"
        className="group relative"
      >
        <span
          className="pulse-ring absolute inset-0 rounded-full bg-wa/50 text-wa"
          aria-hidden="true"
        />
        <span className="relative flex items-center gap-0 overflow-hidden rounded-full bg-wa py-3 pl-3.5 pr-3.5 text-white shadow-[0_18px_40px_-12px_rgba(37,211,102,0.8)] sm:py-3.5 sm:pl-4 sm:pr-4 transition-all duration-400 group-hover:gap-3 group-hover:pr-6">
          <WhatsAppIcon className="h-[21px] w-[21px] shrink-0 sm:h-6 sm:w-6" />
          <span className="max-w-0 overflow-hidden whitespace-nowrap text-[13.5px] font-extrabold transition-all duration-400 group-hover:max-w-[140px]">
            Chat with us
          </span>
        </span>
      </a>
    </div>
  );
}

function HomePage() {
  useEffect(() => {
    document.title =
      "Specialist Dental Clinic in Lahore | Implants, Braces & Veneers | DentalArt Care";
  }, []);
  return (
    <main>
      <Hero />
      <Marquee />
      <Stats />
      <WhyUs />
      <Services />
      <Gallery />
      <Team />
      <Testimonials />
      <Booking />
      <Emergency />
      <Faq />
    </main>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <HashScroll />
      <div className="noise min-h-screen">
        <Preloader />
        <Nav />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/:slug" element={<ServicePage />} />
        </Routes>
        <Footer />
        <FloatingActions />
      </div>
    </BrowserRouter>
  );
}
