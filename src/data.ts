/* ──────────────────────────────────────────────────────────────────
   DentalArt Care, central content model
   ────────────────────────────────────────────────────────────────── */

export const CLINIC = {
  name: "DentalArt Care",
  phoneDisplay: "+92 342 9069970",
  phoneHref: "tel:+923429069970",
  whatsappNumber: "923429069970",
  whatsappHref:
    "https://wa.me/923429069970?text=" +
    encodeURIComponent(
      "Hi! I'd like to inquire about booking an appointment with DentalArt Care."
    ),
  phone2Display: "+92 329 1271907",
  phone2Href: "tel:+923291271907",
  email: "dentalartcare.pk@gmail.com",
  address: "48-C, Block Al-Kabir Town Phase 2, Raiwind Road, Lahore",
  city: "Lahore",
  hours: [
    { days: "Mon – Sat", time: "3:00 PM – 10:00 PM" },
    { days: "Sunday", time: "Closed" },
    { days: "Emergencies", time: "24/7 on call" },
  ],
  tagline: "Specialist-led dentistry, delivered gently.",
};

export const IMAGES = {
  hero: "https://image.qwenlm.ai/generated-images/ecf95986-ea74-487b-b222-63614d8eadfc/_result.png",
  interior: "/images/clinic-interior.jpg",
};

/* ── Services ───────────────────────────────────────────────────── */

export type Service = {
  id: string;
  num: string;
  title: string;
  desc: string;
  meta: string;
  icon: "whiten" | "implant" | "braces" | "rootcanal" | "clean" | "veneer";
};

export const SERVICES: Service[] = [
  {
    id: "Teeth Whitening",
    num: "01",
    title: "Teeth Whitening",
    desc: "Professional in-office whitening lifts years of stains by up to 8 shades in a single visit. Enamel safe, fast and long lasting.",
    meta: "60 min · Single visit",
    icon: "whiten",
  },
  {
    id: "Dental Implants",
    num: "02",
    title: "Dental Implants",
    desc: "Titanium implants that look, feel and function exactly like natural teeth. The permanent answer to missing teeth, placed by our oral surgeon.",
    meta: "Lifetime solution",
    icon: "implant",
  },
  {
    id: "Braces & Orthodontics",
    num: "03",
    title: "Braces & Orthodontics",
    desc: "Fixed metal or ceramic braces and virtually invisible clear aligners, with customised plans for every age, supervised by our FCPS orthodontist.",
    meta: "Metal · Ceramic · Aligners",
    icon: "braces",
  },
  {
    id: "Root Canal Therapy",
    num: "04",
    title: "Root Canal Therapy",
    desc: "Modern rotary endodontics saves your natural tooth and ends the pain. Most patients are surprised by how comfortable the procedure feels.",
    meta: "Pain-free protocol",
    icon: "rootcanal",
  },
  {
    id: "Professional Cleaning",
    num: "05",
    title: "Professional Cleaning",
    desc: "Ultrasonic scaling and polishing that removes plaque, tartar and stains regular brushing can't reach. Recommended every six months.",
    meta: "Every 6 months",
    icon: "clean",
  },
  {
    id: "Porcelain Veneers",
    num: "06",
    title: "Porcelain Veneers",
    desc: "Ultra-thin custom porcelain shells correct chips, gaps and discolouration. A complete, natural looking smile makeover in just two visits.",
    meta: "2 visits · Custom-shaded",
    icon: "veneer",
  },
];

/* ── Doctors ────────────────────────────────────────────────────── */

export type Doctor = {
  name: string;
  role: string;
  credentials: string;
  tags: string[];
  bio: string;
  img: string;
};

export const DOCTORS: Doctor[] = [
  {
    name: "Dr. Raza Ansari",
    role: "Oral & Maxillofacial Surgeon",
    credentials: "BDS, MDS (Oral & Maxillofacial Surgery)",
    tags: ["Implants", "Wisdom Teeth", "Jaw Surgery"],
    bio: "10+ years of clinical excellence. BDS from Nishtar Medical College (2015). Specialises in dental implants, wisdom tooth surgery, facial trauma, bone grafting and TMJ disorders.",
    img: "https://dentalartscare.vercel.app/images/doc1.jpeg",
  },
  {
    name: "Dr. Madiha Chishti",
    role: "Orthodontist",
    credentials: "BDS, FCPS (Orthodontics)",
    tags: ["Braces", "Clear Aligners", "Smile Design"],
    bio: "10+ years in dentistry. BDS (2015) and FCPS in Orthodontics. Expert in fixed braces, clear aligners, growth modification, interceptive orthodontics and smile design.",
    img: "https://dentalartscare.vercel.app/images/doc2.jpeg",
  },
  {
    name: "Dr. Javeria Sohail",
    role: "Dental Surgeon",
    credentials: "BDS, Distinction in Oral Pathology",
    tags: ["Restorative", "Preventive", "Oral Care"],
    bio: "BDS (2021) with Distinction in Oral Pathology. Compassionate care in preventive and restorative dentistry, extractions, scaling, dental emergencies and long-term oral health.",
    img: "https://dentalartscare.vercel.app/images/doc3.jpeg",
  },
];

/* ── Stats ──────────────────────────────────────────────────────── */

export const STATS = [
  { value: 10000, suffix: "+", decimals: 0, label: "Patients treated", sub: "across Lahore" },
  { value: 10, suffix: "+", decimals: 0, label: "Years of practice", sub: "specialist experience" },
  { value: 5, suffix: "", decimals: 0, label: "Specialist doctors", sub: "MDS & FCPS qualified" },
  { value: 4.9, suffix: "★", decimals: 1, label: "Average rating", sub: "from patient reviews" },
];

/* ── Smile transformations (before/after gallery) ───────────────── */

export type GalleryCase = {
  title: string;
  caption: string;
  result: string;
  img: string;
};

export const GALLERY: GalleryCase[] = [
  {
    title: "Teeth Whitening",
    caption: "8 shades brighter in a single in-office visit.",
    result: "1 visit · 60 minutes",
    img: "https://image.qwenlm.ai/generated-images/e00d7f66-a0b2-48ca-961d-a6bd1d53a95d/_result.png",
  },
  {
    title: "Dental Implants",
    caption: "A permanent, natural-feeling replacement after tooth loss.",
    result: "Full function restored",
    img: "https://image.qwenlm.ai/generated-images/f1f874c1-583e-43eb-8c9a-dc4c967ef287/_result.png",
  },
  {
    title: "Porcelain Veneers",
    caption: "A complete smile makeover, custom-shaded in two visits.",
    result: "2 visits · 10 veneers",
    img: "https://image.qwenlm.ai/generated-images/6ffe7efa-5e14-4171-a38b-26decdd7638c/_result.png",
  },
];

/* ── Testimonials ───────────────────────────────────────────────── */

export type Testimonial = {
  quote: string;
  name: string;
  treatment: string;
  initials: string;
  gradient: string;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "I was terrified of dentists for years, but DentalArt Care completely changed that. Dr. Chishti was so patient and gentle, my braces journey was actually enjoyable, and my smile is now perfect.",
    name: "Zainab Malik",
    treatment: "Orthodontics Patient",
    initials: "ZM",
    gradient: "from-sky-brand to-mint",
  },
  {
    quote:
      "Dr. Ansari gave me back my confidence with dental implants. After losing a tooth in an accident, I thought I'd never smile freely again. The procedure was painless and the results are stunning.",
    name: "Muhammad Bilal",
    treatment: "Implant Patient",
    initials: "MB",
    gradient: "from-primary to-sky-brand",
  },
  {
    quote:
      "The whitening treatment was incredible, I went 7 shades lighter in one visit. Dr. Javeria is an artist, and the entire team was warm and professional. I now recommend DentalArt Care to everyone I know.",
    name: "Ayesha Khan",
    treatment: "Whitening Patient",
    initials: "AK",
    gradient: "from-mint to-moss",
  },
  {
    quote:
      "I had a root canal that I was dreading for months. The DentalArt Care team made the whole experience so easy, I barely felt a thing. Modern dentistry is amazing when you're in the right hands.",
    name: "Hamza Yousuf",
    treatment: "Root Canal Patient",
    initials: "HY",
    gradient: "from-primary-deep to-primary",
  },
  {
    quote:
      "My porcelain veneers look completely natural, everyone thinks they're my real teeth! Dr. Javeria spent hours planning the perfect shape for my face. I smile in every photo now.",
    name: "Mariam Shah",
    treatment: "Veneers Patient",
    initials: "MS",
    gradient: "from-sky-brand to-primary",
  },
];

/* ── Why choose us ──────────────────────────────────────────────── */

export const REASONS = [
  {
    num: "01",
    title: "Specialist-led, never rushed",
    desc: "Every treatment plan is designed and delivered by board-certified specialists, and your consultation is never timed by a clock. We explain honestly, then let you decide.",
    icon: "badge",
  },
  {
    num: "02",
    title: "Gentle, anxiety-free dentistry",
    desc: "Calm rooms, honest pacing and proven pain-free protocols. Patients who avoided dentists for years tell us this is where that changed, especially families balancing school and work.",
    icon: "heart",
  },
  {
    num: "03",
    title: "Transparent, honest pricing",
    desc: "A written estimate before any treatment begins, no upfront payment and no hidden charges. Free rescheduling, always, your plan should fit your life, not the other way round.",
    icon: "shield",
  },
  {
    num: "04",
    title: "Hospital-grade sterilisation",
    desc: "Autoclave-verified instruments, single-use disposables and digital diagnostics. The same safety standards you'd expect in a hospital, applied to every cleaning, every filling.",
    icon: "pulse",
  },
] as const;

/* ── FAQ (SEO-rich answers) ─────────────────────────────────────── */

export const FAQS = [
  {
    q: "Do I need an appointment, or can I walk in?",
    a: "Appointments help us give you unhurried, fully-prepared care, and booking takes under a minute on WhatsApp. We keep daily slots for dental emergencies, so if you're in pain, call us and we'll see you as soon as possible.",
  },
  {
    q: "Will my treatment be painful?",
    a: "No. Pain-free dentistry is a protocol here, not a slogan, modern anaesthesia, gentle technique and honest pacing at every step. Most patients are surprised by how comfortable procedures like root canals and implants actually are.",
  },
  {
    q: "How much do treatments cost?",
    a: "You'll receive a clear written estimate after your consultation, before any treatment begins. There is no upfront payment for consultations, and we'll always discuss the most conservative option first.",
  },
  {
    q: "Do you treat children?",
    a: "Yes. Dr. Javeria and our preventive team are experienced with young patients, and Dr. Chishti handles early (interceptive) orthodontics. We pace visits for kids and make the first check-up a positive experience.",
  },
  {
    q: "How long does professional whitening last?",
    a: "With normal habits, in-office whitening typically lasts 12–24 months. We'll give you a simple maintenance routine, and touch-ups for existing patients are always quick and affordable.",
  },
  {
    q: "What should I bring to my first visit?",
    a: "Just yourself and any previous dental records or X-rays if you have them. Arrive a few minutes early, and we'll handle the rest, your consultation includes a full examination and an honest, written treatment plan.",
  },
];

/* ── Booking form options ───────────────────────────────────────── */

/* ── Additional treatments (no dedicated page, book directly) ─────── */

export type ExtraService = { name: string; meta: string };

export const ALSO_AVAILABLE: ExtraService[] = [
  { name: "Wisdom Tooth Removal", meta: "Surgical" },
  { name: "Children's Dentistry", meta: "From age 3" },
  { name: "Dental Emergencies", meta: "Same day" },
  { name: "Crowns & Bridges", meta: "2 visits" },
  { name: "Tooth Extraction", meta: "Under local" },
  { name: "Dentures", meta: "Full or partial" },
  { name: "Bone Grafting", meta: "Pre-implant" },
  { name: "Gum Disease Treatment", meta: "Deep cleaning" },
  { name: "TMJ & Jaw Pain", meta: "Assessment" },
];

export const SERVICE_OPTIONS = [
  ...SERVICES.map((s) => s.title),
  ...ALSO_AVAILABLE.map((s) => s.name),
  "General Consultation",
];
