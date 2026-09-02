import { useEffect, useState } from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import { Marquee, Stats, WhyUs, Services } from "./components/Sections";
import { Gallery, Team, Testimonials } from "./components/Showcase";
import { Booking, Faq, Footer } from "./components/Closing";
import { WhatsAppIcon } from "./icons";
import { CLINIC } from "./data";

function FloatingWhatsApp() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 420);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <a
      href={CLINIC.whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with DentalArt Care on WhatsApp"
      className={`fixed bottom-6 right-6 z-50 group transition-all duration-500 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6 pointer-events-none"
      }`}
    >
      <span className="absolute inset-0 rounded-full bg-wa/50 text-wa pulse-ring" aria-hidden="true" />
      <span className="relative flex items-center gap-0 rounded-full bg-wa text-white pl-4 pr-4 py-3.5 shadow-[0_18px_40px_-12px_rgba(37,211,102,0.8)] transition-all duration-400 group-hover:pr-6 group-hover:gap-3 overflow-hidden">
        <WhatsAppIcon className="w-6 h-6 shrink-0" />
        <span className="max-w-0 group-hover:max-w-[140px] overflow-hidden whitespace-nowrap text-[13.5px] font-extrabold transition-all duration-400">
          Chat with us
        </span>
      </span>
    </a>
  );
}

export default function App() {
  return (
    <div className="noise min-h-screen">
      <Nav />
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
        <Faq />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
