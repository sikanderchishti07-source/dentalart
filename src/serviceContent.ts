/* ────────────────────────────────────────────────────────────────
   Content for the six treatment pages.
   Costs are intentionally blank. Fill in `price` values before
   publishing, or set `showCosts: false` to hide the table.
   ──────────────────────────────────────────────────────────────── */

export type ProcessStep = {
  title: string;
  body: string;
  when: string;
};

export type CostRow = { item: string; price: string };

export type ServicePageContent = {
  slug: string;
  /** matches the `icon` key in SERVICES so the right glyph is used */
  icon: "whiten" | "implant" | "braces" | "rootcanal" | "clean" | "veneer";
  navLabel: string;
  h1Lead: string;
  h1Accent: string;
  h1Tail: string;
  intro: string;
  chips: string[];
  metaTitle: string;
  metaDescription: string;
  whatHeading: string;
  what: string[];
  suitsHeading: string;
  suits: string[];
  cautionTitle: string;
  caution: string;
  doctor: { name: string; role: string; credentials: string; bio: string; initials: string };
  process: ProcessStep[];
  showCosts: boolean;
  costs: CostRow[];
  costIntro: string;
  faqs: { q: string; a: string }[];
  ctaHeading: string;
  ctaBody: string;
};

const ANSARI = {
  name: "Dr. Raza Ansari",
  role: "Oral & Maxillofacial Surgeon",
  credentials: "BDS, MDS (Oral & Maxillofacial Surgery)",
  initials: "RA",
  bio: "Ten years in surgical dentistry, with a BDS from Nishtar Medical College. Alongside implants he handles wisdom tooth surgery, bone grafting, facial trauma and TMJ disorders. That surgical training is what makes complex cases routine here rather than referred elsewhere.",
};

const CHISHTI = {
  name: "Dr. Madiha Chishti",
  role: "Orthodontist",
  credentials: "BDS, FCPS (Orthodontics)",
  initials: "MC",
  bio: "Ten years in clinical dentistry with an FCPS in Orthodontics. She plans fixed braces, clear aligners, growth modification and interceptive treatment for children, as well as adult smile design. Every orthodontic plan here is hers before any bracket is bonded.",
};

const JAVERIA = {
  name: "Dr. Javeria Sohail",
  role: "Dental Surgeon",
  credentials: "BDS, Distinction in Oral Pathology",
  initials: "JS",
  bio: "Leads preventive and restorative care at DentalArt Care: fillings, extractions, scaling, emergency treatment and long term oral health planning. Patients who have avoided dentists for years tend to ask for her by name.",
};

export const SERVICE_PAGES: ServicePageContent[] = [
  /* ══════════════════ 1. IMPLANTS ══════════════════ */
  {
    slug: "dental-implants-lahore",
    icon: "implant",
    navLabel: "Dental Implants",
    h1Lead: "Dental implants in Lahore,",
    h1Accent: "placed by an oral surgeon",
    h1Tail: ".",
    intro:
      "A missing tooth does not have to be permanent. An implant replaces the root as well as the crown, so it bites, feels and lasts like the tooth you lost, and it protects the bone underneath.",
    chips: ["Surgeon-placed", "3 to 6 month process", "Lifetime solution", "Sedation available"],
    metaTitle: "Dental Implants in Lahore | Placed by an Oral Surgeon | DentalArt Care",
    metaDescription:
      "Dental implants in Lahore placed by an MDS-qualified oral and maxillofacial surgeon. Free consultation and 3D scan, written costs, sedation available. Book on WhatsApp.",
    whatHeading: "A replacement root, not just a replacement tooth",
    what: [
      "A dental implant is a small titanium post placed into the jawbone where your tooth root used to be. Over the following months the bone grows onto its surface and locks it in place, a process called osseointegration. Once it has fused, a custom crown is fixed on top.",
      "That is what separates an implant from a bridge or a denture. A bridge sits on the teeth either side, which means grinding down two healthy teeth. A denture rests on the gum and moves. An implant stands on its own and transmits chewing force into the bone, which is what stops the jaw shrinking where a tooth is missing.",
      "At DentalArt Care implants are placed by an oral and maxillofacial surgeon. That matters when a case needs bone grafting, or sits close to a nerve or a sinus, which are the situations a general dentist would refer on.",
    ],
    suitsHeading: "An implant is usually the right choice if",
    suits: [
      "You have lost a single tooth and do not want the neighbouring teeth touched",
      "A tooth is broken below the gum and cannot be saved",
      "Your denture moves, clicks or makes eating difficult",
      "You have had a gap for years and want to stop further bone loss",
      "You are missing several teeth and want a fixed solution rather than a plate",
    ],
    cautionTitle: "When we would suggest something else",
    caution:
      "Uncontrolled diabetes, active gum disease and heavy smoking all reduce how well an implant fuses. None of these rules you out permanently, but we would treat them first rather than place an implant that fails. If your jawbone has thinned, a graft is usually the answer, and we will tell you at the consultation.",
    doctor: ANSARI,
    process: [
      {
        title: "Consultation and scan",
        body: "A full examination and X-ray to check bone height, width and the position of nerves and sinuses. You leave with a written plan and a fixed cost. No treatment starts on this visit.",
        when: "Day 1, 45 minutes",
      },
      {
        title: "Bone graft, if needed",
        body: "Where the jaw has thinned, graft material is placed to rebuild it. Not every case needs this and we will know from the scan. If it is needed, healing runs three to six months before the implant goes in.",
        when: "Only some cases",
      },
      {
        title: "Implant placement",
        body: "The titanium post is placed under local anaesthetic, with sedation if you would prefer. It takes under an hour for a single implant. Most patients return to work the next day and describe it as easier than an extraction.",
        when: "60 minutes",
      },
      {
        title: "Healing and fusion",
        body: "The bone grows onto the implant over three to six months. You wear a temporary tooth throughout, so you will not have a visible gap at any point. We check progress at intervals.",
        when: "3 to 6 months",
      },
      {
        title: "Crown fitting",
        body: "An impression is taken and a crown is made to match the shade and shape of your own teeth. It is fitted, adjusted against your bite, and that is the end of the process.",
        when: "2 visits, 2 weeks apart",
      },
    ],
    showCosts: true,
    costIntro:
      "The price depends on how many implants you need, whether the bone needs building up first, and the type of crown. These are our ranges. You will get one fixed figure after the scan, and nothing is added later.",
    costs: [
      { item: "Single implant with crown", price: "" },
      { item: "Implant only, crown separate", price: "" },
      { item: "Bone graft, where required", price: "" },
      { item: "Full arch, four implants", price: "" },
      { item: "Consultation and scan", price: "" },
    ],
    faqs: [
      {
        q: "Does it hurt?",
        a: "The placement itself does not, because the area is fully numbed, and sedation is available if you are anxious. Afterwards expect soreness for two to three days, manageable with ordinary painkillers. Most patients tell us it was easier than the extraction that preceded it.",
      },
      {
        q: "How long do implants last?",
        a: "With good hygiene and regular check-ups, decades. Many last a lifetime. The crown on top may need replacing after fifteen years or so, which is a much smaller procedure than placing the implant itself.",
      },
      {
        q: "Will I have a gap while it heals?",
        a: "No. You wear a temporary tooth from the day of placement until the permanent crown is fitted, so nobody will see a gap at any stage.",
      },
      {
        q: "Can it be done in one visit?",
        a: "Immediate loading, where implant and crown go in together, is possible in selected cases with excellent bone quality. It is not right for everyone, and we would rather take three months and have it last thirty years. Your surgeon will tell you honestly which applies to you.",
      },
      {
        q: "I am diabetic. Can I still have one?",
        a: "Usually yes, if your blood sugar is well controlled. Uncontrolled diabetes slows healing and raises the risk of failure, so we would ask for a recent HbA1c and may coordinate with your physician first.",
      },
      {
        q: "What happens if the implant fails?",
        a: "Failure is uncommon but not impossible. If an implant does not fuse, it is removed, the site is allowed to heal, and it can usually be replaced. We explain our policy on this in writing at the consultation.",
      },
    ],
    ctaHeading: "Find out if an implant is right for you",
    ctaBody:
      "A consultation and scan with our oral surgeon. You will get a written plan and a fixed price, with no obligation.",
  },

  /* ══════════════════ 2. BRACES ══════════════════ */
  {
    slug: "braces-and-aligners-lahore",
    icon: "braces",
    navLabel: "Braces & Aligners",
    h1Lead: "Braces and clear aligners in Lahore,",
    h1Accent: "planned by an FCPS orthodontist",
    h1Tail: ".",
    intro:
      "Crowding, gaps and bite problems are fixable at almost any age. What changes with age is which method suits you, and that decision should be made by a specialist rather than a general dentist.",
    chips: ["FCPS orthodontist", "Metal, ceramic or clear", "Ages 7 to 60+", "Monthly reviews"],
    metaTitle: "Braces & Clear Aligners in Lahore | FCPS Orthodontist | DentalArt Care",
    metaDescription:
      "Fixed braces, ceramic braces and clear aligners in Lahore, planned by an FCPS-qualified orthodontist. Treatment for children and adults. Written costs and monthly plans.",
    whatHeading: "Moving teeth is slow, controlled and entirely predictable",
    what: [
      "Orthodontics works by applying gentle, continuous pressure to a tooth. The bone ahead of it remodels away and the bone behind it fills in. That is why treatment is measured in months rather than weeks, and why forcing it faster damages roots.",
      "Fixed braces use brackets and a wire. They handle every kind of movement, including rotations and severe crowding, and they work regardless of whether you remember to wear anything. Ceramic brackets do the same job in a tooth-coloured material.",
      "Clear aligners are a series of removable trays, each moving your teeth slightly further than the last. They are discreet and comfortable, but they only work while they are in your mouth, which means around 22 hours a day. They also cannot handle every case.",
    ],
    suitsHeading: "Orthodontic treatment is worth discussing if",
    suits: [
      "Your teeth are crowded, overlapping or rotated",
      "You have gaps you would rather close",
      "Your upper and lower teeth do not meet properly when you bite",
      "Your child is seven or older and their adult teeth are coming through crooked",
      "You had braces as a teenager and your teeth have shifted back",
      "You are planning veneers and want the teeth aligned first",
    ],
    cautionTitle: "What we will tell you honestly",
    caution:
      "Clear aligners are not right for every case. Severe crowding, large rotations and some bite corrections still need fixed braces, and an orthodontist who promises aligners for everything is selling rather than planning. Untreated gum disease must also be resolved before any tooth is moved.",
    doctor: CHISHTI,
    process: [
      {
        title: "Assessment and records",
        body: "Photographs, X-rays and impressions or a digital scan. Your orthodontist maps where each tooth needs to go and how long that will realistically take.",
        when: "Day 1, 45 minutes",
      },
      {
        title: "Your plan and options",
        body: "You see the plan and the choices open to you: metal, ceramic or aligners, with the trade-offs of each explained. Cost and duration are given in writing before anything begins.",
        when: "1 week later",
      },
      {
        title: "Fitting",
        body: "Brackets are bonded and the first wire placed, or your first set of aligners is issued. It is not painful, though teeth ache for a few days as they begin moving. Soft food helps.",
        when: "60 to 90 minutes",
      },
      {
        title: "Monthly adjustments",
        body: "Short visits to change the wire or check aligner progress. This is where the treatment actually happens, and missed appointments are the commonest reason cases run long.",
        when: "Every 4 to 6 weeks",
      },
      {
        title: "Removal and retention",
        body: "Braces come off, teeth are polished, and retainers are fitted the same day. Retainers are not optional. Teeth drift back for the rest of your life without them.",
        when: "12 to 30 months in",
      },
    ],
    showCosts: true,
    costIntro:
      "Orthodontic cost depends on how far the teeth have to move and which appliance you choose, not on how long you are in treatment. Most patients pay monthly across the treatment rather than upfront.",
    costs: [
      { item: "Metal fixed braces, full treatment", price: "" },
      { item: "Ceramic braces, full treatment", price: "" },
      { item: "Clear aligners, full treatment", price: "" },
      { item: "Single arch treatment", price: "" },
      { item: "Retainers, per set", price: "" },
    ],
    faqs: [
      {
        q: "How long will I need braces?",
        a: "Most full cases run between 12 and 24 months. Minor alignment can finish in six to nine. Your orthodontist will give you a realistic range after seeing the X-rays, and anyone quoting a duration before that is guessing.",
      },
      {
        q: "Am I too old for braces?",
        a: "No. Bone remodels throughout life, so teeth can be moved at any age. Adults make up a large share of our orthodontic patients, and ceramic braces or aligners keep it discreet if that is a concern at work.",
      },
      {
        q: "Do braces hurt?",
        a: "Fitting does not hurt. For three or four days afterwards the teeth feel tender and bruised, and the same happens briefly after each adjustment. Ordinary painkillers and soft food cover it.",
      },
      {
        q: "When should my child first be seen?",
        a: "Around age seven. Most children will not need treatment then, but that is the age when a specialist can spot developing bite problems early, when they are far simpler to correct.",
      },
      {
        q: "Can I choose aligners instead of braces?",
        a: "If your case suits them, yes. Your orthodontist will tell you at the assessment whether aligners can achieve your result, and where they cannot, why fixed braces are being recommended instead.",
      },
      {
        q: "What happens if I do not wear my retainer?",
        a: "Your teeth will gradually move back towards where they started. This is the single most common reason people need orthodontic treatment twice. Retainers are for life, though usually only at night after the first year.",
      },
    ],
    ctaHeading: "Book an orthodontic assessment",
    ctaBody:
      "A full assessment with our FCPS orthodontist, with your options and costs explained in writing before anything begins.",
  },

  /* ══════════════════ 3. VENEERS ══════════════════ */
  {
    slug: "porcelain-veneers-lahore",
    icon: "veneer",
    navLabel: "Porcelain Veneers",
    h1Lead: "Porcelain veneers in Lahore,",
    h1Accent: "shaped for your face",
    h1Tail: ", not a template.",
    intro:
      "Veneers correct chips, gaps, worn edges and discolouration that whitening cannot reach. Done well nobody can tell. Done badly they are the most obvious dentistry there is.",
    chips: ["2 visits", "Custom shaded", "Preview before commitment", "10 to 15 year lifespan"],
    metaTitle: "Porcelain Veneers in Lahore | Natural Smile Makeover | DentalArt Care",
    metaDescription:
      "Custom porcelain veneers in Lahore. Preview your smile before treatment starts, custom shading, two visits. Honest advice on whether veneers are right for you.",
    whatHeading: "A thin porcelain shell, bonded to the front of the tooth",
    what: [
      "A veneer is a wafer of porcelain, usually under a millimetre thick, bonded permanently to the front surface of a tooth. It changes shape, colour, length and alignment in one step, which is why a full set can transform a smile in two visits.",
      "A small amount of enamel is removed so the veneer sits flush rather than bulking the tooth forward. That removal is permanent, which is the single most important thing to understand before starting. A veneered tooth will always need a veneer or a crown from then on.",
      "Shade and shape are chosen against your face, not from a catalogue. Age, skin tone, lip line and the shape of your other teeth all feed into it. This is the part that separates natural-looking work from the uniform white blocks people recognise instantly.",
    ],
    suitsHeading: "Veneers are worth considering if",
    suits: [
      "Your front teeth are chipped, worn or uneven at the edges",
      "You have small gaps you do not want to close with braces",
      "Discolouration has not responded to professional whitening",
      "A tooth is slightly out of line but the bite itself is fine",
      "You want a permanent change rather than a repeatable treatment",
    ],
    cautionTitle: "We will talk you out of veneers if",
    caution:
      "Your teeth are healthy and only need whitening. Enamel removal is permanent and we will not do it for a result that a cheaper, reversible treatment can achieve. We also postpone veneers where there is active gum disease, untreated decay, or heavy grinding, and where teeth are significantly misaligned we recommend orthodontics first rather than masking the problem with porcelain.",
    doctor: JAVERIA,
    process: [
      {
        title: "Consultation and smile design",
        body: "We photograph your smile, discuss what you want changed, and agree a shade and shape against your face. Managing expectations here is most of the work.",
        when: "Day 1, 45 minutes",
      },
      {
        title: "Preview",
        body: "A mock-up is placed over your teeth so you can see the proposed result in your own mouth before any enamel is touched. If you do not like it, nothing has been lost.",
        when: "Same or next visit",
      },
      {
        title: "Preparation and impressions",
        body: "A thin layer of enamel is removed under local anaesthetic and precise impressions are taken. Temporary veneers are fitted so you leave looking normal.",
        when: "2 hours",
      },
      {
        title: "Laboratory work",
        body: "Your veneers are made individually by a technician working from the photographs and shade record. This is not a step to rush.",
        when: "1 to 2 weeks",
      },
      {
        title: "Fitting",
        body: "Each veneer is tried in, checked against your bite and the shade confirmed in daylight before it is bonded permanently. Adjustments happen now, not after.",
        when: "90 minutes",
      },
    ],
    showCosts: true,
    costIntro:
      "Veneers are priced per tooth. Most people need six to ten across the front to get an even result, since treating only one or two makes shade matching considerably harder.",
    costs: [
      { item: "Porcelain veneer, per tooth", price: "" },
      { item: "Six veneers, upper front", price: "" },
      { item: "Ten veneers, full smile", price: "" },
      { item: "Composite veneer, per tooth", price: "" },
      { item: "Consultation and smile design", price: "" },
    ],
    faqs: [
      {
        q: "How long do veneers last?",
        a: "Typically ten to fifteen years with good care, and often longer. They can chip if you bite hard objects, and grinding shortens their life considerably, which is why we fit a night guard for patients who grind.",
      },
      {
        q: "Will they look fake?",
        a: "Not if the shade is chosen against your face and the technician builds in the natural translucency at the edges. The uniform bright white look people recognise comes from choosing a shade far lighter than any natural tooth.",
      },
      {
        q: "Is the enamel removal reversible?",
        a: "No, and this is the most important thing to understand. Once enamel is removed the tooth will always need a veneer or crown. That is why we offer a preview first and why we will suggest whitening instead where it can do the job.",
      },
      {
        q: "Veneers or whitening?",
        a: "If your teeth are well shaped and simply darker than you would like, whitening first. It is cheaper, reversible and removes nothing. Veneers are for shape, edges, gaps and stains that whitening cannot lift.",
      },
      {
        q: "Can I have just one?",
        a: "Yes, and it is common after a chip or a discoloured root-treated tooth. Matching a single veneer to your existing teeth is technically harder than doing several, so allow extra time at the fitting for shade adjustment.",
      },
      {
        q: "Do they stain?",
        a: "Porcelain itself does not stain the way natural enamel does. The bonding margins at the gum line can pick up colour over years, particularly with heavy tea, coffee or paan use, which is why regular hygiene visits matter.",
      },
    ],
    ctaHeading: "See your smile before you commit",
    ctaBody:
      "A consultation, photographs and a preview mock-up in your own mouth, before any enamel is touched.",
  },

  /* ══════════════════ 4. WHITENING ══════════════════ */
  {
    slug: "teeth-whitening-lahore",
    icon: "whiten",
    navLabel: "Teeth Whitening",
    h1Lead: "Professional teeth whitening in Lahore,",
    h1Accent: "up to eight shades",
    h1Tail: ", in one visit.",
    intro:
      "In-clinic whitening lifts years of tea, coffee and paan staining in a single appointment, under supervision, with your gums protected and sensitivity managed as it happens.",
    chips: ["Single 60 minute visit", "Enamel safe", "Sensitivity managed", "Results last 1 to 2 years"],
    metaTitle: "Teeth Whitening in Lahore | Up to 8 Shades in One Visit | DentalArt Care",
    metaDescription:
      "Professional in-clinic teeth whitening in Lahore. Up to eight shades lighter in a single 60 minute visit, enamel safe with sensitivity management. Book on WhatsApp.",
    whatHeading: "How whitening actually works, and what it cannot do",
    what: [
      "Whitening gel releases oxygen which passes through the enamel and breaks apart the coloured molecules trapped inside. Nothing is scraped off and no enamel is removed. The tooth structure is unchanged and only the stain within it is altered.",
      "In-clinic whitening uses a stronger gel than anything sold over the counter, applied with your gums sealed off. That combination is what produces a visible result in one appointment rather than over several weeks.",
      "It works on natural tooth structure only. Crowns, veneers, bridges and white fillings do not change colour, so if you have visible restorations at the front, whitening the teeth around them can make them stand out more. We check for this before starting.",
    ],
    suitsHeading: "Whitening suits you if",
    suits: [
      "Your teeth have yellowed gradually with age",
      "Tea, coffee, cola or paan have dulled them",
      "You have an event coming up and want a quick change",
      "You want a visible improvement without altering the teeth themselves",
      "Over the counter strips and whitening toothpaste have not worked",
    ],
    cautionTitle: "Whitening will not help if",
    caution:
      "The discolouration comes from within the tooth after root canal treatment or from tetracycline staining, which need different approaches. We also postpone whitening during pregnancy and breastfeeding, with untreated decay or gum disease, and for patients under sixteen. Existing crowns and white fillings will not change shade and may need replacing afterwards to match.",
    doctor: JAVERIA,
    process: [
      {
        title: "Check and shade record",
        body: "A short examination to confirm there is no decay or gum inflammation, and to check whether any visible fillings or crowns will be left behind. Your starting shade is recorded against a guide.",
        when: "15 minutes",
      },
      {
        title: "Cleaning first",
        body: "Whitening works on a clean surface. If there is plaque or tartar present, a scale and polish is done first, either on the same day or at a separate appointment.",
        when: "Same day if needed",
      },
      {
        title: "Gum protection",
        body: "A barrier is placed over the gums and lips so the gel only contacts enamel. This step is why in-clinic whitening is safe at concentrations that would not be given to you to take home.",
        when: "10 minutes",
      },
      {
        title: "Whitening cycles",
        body: "The gel is applied in two or three cycles, with the shade checked between each. If sensitivity appears we stop and treat it rather than pushing through.",
        when: "45 minutes",
      },
      {
        title: "Result and aftercare",
        body: "Final shade recorded against the starting photograph. Avoid strongly coloured food and drink for 48 hours while the enamel rehydrates, which is when staining is most likely.",
        when: "Same visit",
      },
    ],
    showCosts: true,
    costIntro:
      "One in-clinic session is enough for most people. Home top-up trays are useful afterwards for maintaining the result rather than achieving it.",
    costs: [
      { item: "In-clinic whitening, single session", price: "" },
      { item: "Home whitening kit with custom trays", price: "" },
      { item: "In-clinic plus home top-up trays", price: "" },
      { item: "Top-up gel for existing trays", price: "" },
      { item: "Scale and polish, if needed first", price: "" },
    ],
    faqs: [
      {
        q: "Does it damage enamel?",
        a: "No. Professional whitening gel works within the enamel without removing it, and studies have not shown structural weakening at clinical concentrations. What causes harm is unsupervised use of high strength gel without gum protection.",
      },
      {
        q: "How long does it last?",
        a: "Typically one to two years, though this depends heavily on your habits. Heavy tea, coffee, cola or paan use shortens it. Occasional home top-ups with custom trays keep the result going almost indefinitely.",
      },
      {
        q: "Will it make my teeth sensitive?",
        a: "Some people feel short sharp twinges during and for a day or two after. It is temporary and we manage it as it happens with desensitising agents. Tell us if you already have sensitive teeth and we will adjust the protocol.",
      },
      {
        q: "Are the results guaranteed to be eight shades?",
        a: "No, and anyone promising a specific number before seeing your teeth is guessing. Eight shades is the upper end of what we see. Your result depends on your starting shade and the cause of the discolouration.",
      },
      {
        q: "Is it better than a home kit?",
        a: "It is faster and safer. Over the counter kits use much weaker gel and ill-fitting trays, which is why they take weeks and often irritate the gums. Custom trays from us sit between the two and work well for maintenance.",
      },
      {
        q: "Will my crowns and fillings whiten too?",
        a: "No. They stay exactly the shade they are. If you have visible white fillings or a crown at the front, whitening the surrounding teeth may leave them looking darker, and replacing them afterwards is often part of the plan.",
      },
    ],
    ctaHeading: "Book a whitening appointment",
    ctaBody:
      "One visit, around an hour, with your shade recorded before and after so you can see exactly what changed.",
  },

  /* ══════════════════ 5. ROOT CANAL ══════════════════ */
  {
    slug: "root-canal-treatment-lahore",
    icon: "rootcanal",
    navLabel: "Root Canal Therapy",
    h1Lead: "Root canal treatment in Lahore,",
    h1Accent: "to save the tooth",
    h1Tail: ", not remove it.",
    intro:
      "A root canal has a worse reputation than it deserves. It is the treatment that ends the pain, and it lets you keep a tooth that would otherwise have to come out.",
    chips: ["1 to 2 visits", "Fully numbed", "Rotary instruments", "Crown usually follows"],
    metaTitle: "Root Canal Treatment in Lahore | Painless & Tooth Saving | DentalArt Care",
    metaDescription:
      "Root canal treatment in Lahore using modern rotary endodontics. Ends the pain and saves your natural tooth, usually in one or two visits. Emergency appointments available.",
    whatHeading: "Clearing the infection from inside the tooth",
    what: [
      "Inside every tooth is a soft core of nerve and blood vessels. When decay, a crack or an old deep filling lets bacteria reach it, that tissue becomes infected. The pain that follows is pressure inside a space that cannot expand, which is why it can be severe and why painkillers struggle with it.",
      "A root canal removes that infected tissue, disinfects the empty canals, and seals them so bacteria cannot return. The tooth stays in place. It no longer has a live nerve, which is why it does not hurt afterwards, but it still functions normally.",
      "The alternative is extraction, and then a gap that needs an implant or a bridge to fill. Keeping your own tooth root is almost always the better long term outcome, and it is considerably cheaper.",
    ],
    suitsHeading: "You may need a root canal if",
    suits: [
      "You have a persistent, throbbing toothache, often worse lying down",
      "Hot or cold pain lingers for more than a few seconds after the source is gone",
      "A tooth is tender to bite on",
      "There is swelling in the gum near a tooth, or a small recurring pimple",
      "A tooth has darkened compared with its neighbours",
      "A deep filling or crack has become painful",
    ],
    cautionTitle: "When a tooth cannot be saved",
    caution:
      "If a tooth is cracked below the gum line, or so much structure has been lost that nothing remains to build a crown onto, a root canal will fail and extraction is the honest answer. Severe bone loss from gum disease is the other case. We would rather tell you that at the assessment than take payment for treatment that will not hold.",
    doctor: JAVERIA,
    process: [
      {
        title: "Diagnosis",
        body: "An X-ray and sensitivity tests to confirm which tooth is involved and how far the infection has spread. Referred pain is common, so the tooth that hurts is not always the tooth at fault.",
        when: "Day 1, 30 minutes",
      },
      {
        title: "Anaesthetic and isolation",
        body: "The tooth is fully numbed and isolated with a rubber sheet so the canals stay clean and nothing passes into your mouth. If you can feel anything at all, we stop and give more anaesthetic.",
        when: "15 minutes",
      },
      {
        title: "Cleaning the canals",
        body: "The infected tissue is removed and the canals shaped with fine rotary instruments, then disinfected. This is the longest part and it is where the outcome is decided.",
        when: "60 to 90 minutes",
      },
      {
        title: "Sealing",
        body: "The canals are filled with a rubber-like material and sealed. Depending on the infection, this happens the same day or at a second visit with medicated dressing in between.",
        when: "Same or second visit",
      },
      {
        title: "Crown",
        body: "A root treated back tooth becomes brittle and usually needs a crown to stop it fracturing. This is not an upsell. Teeth left unrestored are the ones that fail years later.",
        when: "2 to 4 weeks after",
      },
    ],
    showCosts: true,
    costIntro:
      "Cost depends on which tooth is involved, because front teeth have one canal while molars have three or four. The crown afterwards is priced separately.",
    costs: [
      { item: "Root canal, front tooth", price: "" },
      { item: "Root canal, premolar", price: "" },
      { item: "Root canal, molar", price: "" },
      { item: "Retreatment of a previous root canal", price: "" },
      { item: "Crown after root canal", price: "" },
    ],
    faqs: [
      {
        q: "Is it as painful as people say?",
        a: "No. That reputation comes from an era of weaker anaesthetic and slower instruments. The tooth is fully numbed and most patients say it felt no different from having a filling. What hurts is the infection beforehand, and that is what the treatment ends.",
      },
      {
        q: "How many visits will it take?",
        a: "Often one, sometimes two. A second visit is needed when there is significant infection and the canals benefit from a medicated dressing in between. Your dentist will tell you which after the X-ray.",
      },
      {
        q: "Why do I need a crown afterwards?",
        a: "A root treated tooth has lost its blood supply and a good deal of structure, which makes it brittle. Back teeth take heavy biting force and fracture without a crown. Front teeth sometimes manage without one.",
      },
      {
        q: "Can I just have it pulled instead?",
        a: "You can, and it is cheaper on the day. But you are then left with a gap that will need an implant or bridge, which costs several times more, and the neighbouring teeth drift over time. Keeping your own tooth is usually the better decision.",
      },
      {
        q: "How long will the tooth last?",
        a: "A well done root canal with a proper crown commonly lasts decades. The main causes of later failure are a missing or delayed crown, a new cavity at the margin, or a crack that was already present.",
      },
      {
        q: "I am in pain right now. Can I be seen today?",
        a: "Call us. We keep daily slots for dental emergencies and a surgeon is on call outside clinic hours. If there is facial swelling affecting your breathing or swallowing, go to a hospital emergency department first.",
      },
    ],
    ctaHeading: "In pain? Get it assessed",
    ctaBody:
      "An X-ray and honest assessment of whether the tooth can be saved, with the cost given before treatment starts.",
  },

  /* ══════════════════ 6. CLEANING ══════════════════ */
  {
    slug: "teeth-cleaning-scaling-lahore",
    icon: "clean",
    navLabel: "Scaling & Cleaning",
    h1Lead: "Scaling and professional cleaning in Lahore,",
    h1Accent: "every six months",
    h1Tail: ".",
    intro:
      "The cheapest dentistry you will ever have is the appointment that stops you needing the expensive kind. Scaling removes what brushing cannot, and the examination catches problems while they are still small.",
    chips: ["45 minutes", "Every 6 months", "Ultrasonic scaling", "Includes full check-up"],
    metaTitle: "Teeth Cleaning & Scaling in Lahore | Dental Hygiene | DentalArt Care",
    metaDescription:
      "Professional scaling and polishing in Lahore. Removes tartar and stains brushing cannot reach, with a full oral health check included. Recommended every six months.",
    whatHeading: "Why brushing well is still not enough",
    what: [
      "Plaque is a soft film of bacteria that forms constantly. Brushing removes most of it, but what is missed hardens within about 48 hours into tartar, and tartar cannot be brushed off at any pressure. It has to be removed with instruments.",
      "Tartar matters because it sits at the gum line and holds bacteria against the gum. That is what causes bleeding, then gum recession, then bone loss around the tooth. Gum disease is the leading cause of tooth loss in adults, and it is largely silent until it is advanced.",
      "The appointment is also an examination. Early decay, a cracked filling, an ulcer that has not healed, all of these are far simpler and cheaper to deal with when found early. That is most of the value of a six monthly visit.",
    ],
    suitsHeading: "Book a cleaning if",
    suits: [
      "It has been six months or more since your last one",
      "Your gums bleed when you brush or floss",
      "You can see yellow or brown deposits at the gum line",
      "You have persistent bad breath",
      "You smoke, or drink a lot of tea, coffee or paan",
      "You are pregnant, as gum inflammation increases during pregnancy",
    ],
    cautionTitle: "If your gums are already inflamed",
    caution:
      "Where gum disease has progressed and pockets have formed around the teeth, a routine scale is not enough. That needs deep cleaning below the gum line, sometimes across more than one appointment and under local anaesthetic. We will tell you if that is what you need rather than doing a surface clean that leaves the problem in place.",
    doctor: JAVERIA,
    process: [
      {
        title: "Examination",
        body: "A check of every tooth, your gums, and the soft tissues of your mouth. Gum pockets are measured where there is any sign of disease, and X-rays are taken if needed.",
        when: "10 minutes",
      },
      {
        title: "Ultrasonic scaling",
        body: "A fine vibrating tip breaks tartar away from the tooth surface with water. It is not painful, though it can feel odd, and sensitive areas can be numbed if you prefer.",
        when: "20 minutes",
      },
      {
        title: "Hand finishing",
        body: "Areas the ultrasonic cannot fully reach, particularly just under the gum edge and between teeth, are finished by hand.",
        when: "10 minutes",
      },
      {
        title: "Polish",
        body: "A polishing paste removes surface stain from tea, coffee, paan and smoking, and leaves the enamel smooth so plaque takes longer to re-form.",
        when: "5 minutes",
      },
      {
        title: "What to change",
        body: "Specific advice on the spots you are missing, based on what we actually found in your mouth rather than general instructions. Then a recall date, usually six months.",
        when: "5 minutes",
      },
    ],
    showCosts: true,
    costIntro:
      "A routine scale and polish is a single appointment. Deep cleaning for established gum disease is priced by quadrant, since it takes considerably longer and needs anaesthetic.",
    costs: [
      { item: "Scale and polish, routine", price: "" },
      { item: "Scale, polish and full examination", price: "" },
      { item: "Deep cleaning, per quadrant", price: "" },
      { item: "Stain removal, heavy paan or smoking", price: "" },
      { item: "Child check-up and clean", price: "" },
    ],
    faqs: [
      {
        q: "Does scaling damage or loosen teeth?",
        a: "No. This is a common worry and it is not correct. Scaling removes deposits from the tooth surface without touching the enamel. Teeth can feel slightly loose afterwards where heavy tartar was actually splinting them, and gums tighten back over the following weeks.",
      },
      {
        q: "How often do I need it?",
        a: "Every six months for most people. Smokers, heavy paan or tea drinkers, diabetics and anyone with a history of gum disease usually need it every three to four months, and we will tell you which applies to you.",
      },
      {
        q: "Will it whiten my teeth?",
        a: "It removes surface staining, which often looks like whitening, but it does not change the underlying shade of the tooth. If you want them genuinely lighter, whitening after a clean is the combination that works.",
      },
      {
        q: "Why do my gums bleed during it?",
        a: "Bleeding is a sign of inflammation that was already there, not of the cleaning being too rough. Healthy gums do not bleed. Once the tartar is removed and you brush along the gum line properly, bleeding usually stops within two weeks.",
      },
      {
        q: "Is it uncomfortable?",
        a: "For most people no, though the vibration and cold water feel strange at first. If your gums are inflamed or roots are exposed it can be sensitive, and we can numb the area. Tell us and we will slow down.",
      },
      {
        q: "Can I bring my children?",
        a: "Yes. We see children for check-ups and cleaning, and we pace the first visit so it is a positive experience rather than something they dread. Early habits are worth far more than any treatment we can provide later.",
      },
    ],
    ctaHeading: "Book your six monthly check-up",
    ctaBody:
      "Scaling, polishing and a full examination in one appointment, with honest advice on what to change.",
  },
];

export const getServicePage = (slug?: string) =>
  SERVICE_PAGES.find((p) => p.slug === slug);
