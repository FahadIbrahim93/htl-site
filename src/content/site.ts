/**
 * Proposed positioning for founder review (issue #42).
 * Visible strings live here. Published website prices are copied from the
 * live site and are not new commercial terms.
 */

export const EMAIL = "hopetheorybd@gmail.com";
export const WHATSAPP_E164 = "8801718463471";
export const WHATSAPP_DISPLAY = "+8801718463471";

export function whatsappHref(text: string) {
  return `https://wa.me/${WHATSAPP_E164}?text=${encodeURIComponent(text)}`;
}

export const tagline = "Your data. Connected. Your business. Smarter.";

export const nav = [
  { href: "/services", label: "Services" },
  { href: "/approach", label: "Approach" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export const sources = [
  { name: "Productivity", detail: "Calendars, docs, tasks and notes, in one place." },
  { name: "CRM", detail: "Customer history, deals and follow-ups, in one record." },
  { name: "Databases", detail: "Your tables and spreadsheets, kept in sync." },
  { name: "Files", detail: "Contracts, invoices and documents, searchable." },
  { name: "Apps", detail: "The tools your team uses every day." },
  { name: "APIs", detail: "Live connections to suppliers and services." },
  { name: "Systems", detail: "Accounting, inventory and day-to-day operations." },
  { name: "People", detail: "Your team, with the right access and context." },
] as const;

export const services = [
  {
    id: "forward-deployed-engineering",
    index: "01",
    name: "Forward-deployed engineering",
    summary: "Engineers work beside your team, from the real workflow through to something running in production.",
    problem:
      "A slide deck about AI does not change how orders, cases or approvals actually move. The people who feel the friction are rarely in the room when the software is designed.",
    outputs: [
      "A written picture of the workflow, the systems it touches, and what “better” means",
      "A proof of value your own users can try, with a human still approving what matters",
      "Integration into the tools you already run, then a production handoff",
    ],
    fit: "Teams that want a senior pair inside the problem for a defined engagement — not a large resident staff on payroll.",
    engage:
      "Scoped and embedded for the length of the work. Time on site is agreed per project. It is not an unconditional full-time placement, and it does not require buying a website first.",
  },
  {
    id: "custom-software",
    index: "02",
    name: "Custom web and mobile software",
    summary: "Websites, apps, shops, SaaS, portals, APIs and internal tools, built to the job rather than a theme.",
    problem:
      "Off-the-shelf pages and disconnected apps leave the business looking finished online while the actual work still happens in chat and spreadsheets.",
    outputs: [
      "A product scoped to one job: selling, operating, or serving customers",
      "Mobile-ready interfaces, admin tools where the work needs them, and APIs where systems must talk",
      "A handover you can run without us sitting in the middle of every change",
    ],
    fit: "Startups and operating companies that need software shaped around their process, including shops that want a fixed website package.",
    engage:
      "Fixed-scope builds when the edges are clear. Milestone-based custom builds when they are not. Published website packages stay on their own page.",
  },
  {
    id: "ai-integration",
    index: "03",
    name: "AI integration and automation",
    summary: "Language models, grounded answers over your own material, agents and document workflows — with a person in the loop.",
    problem:
      "Staff retype the same facts, search the same folders, and answer the same questions, while generic chat tools are not allowed to see the real files.",
    outputs: [
      "A bounded assistant or workflow over sources you choose",
      "Retrieval over your material, not a claim that a model “knows” your company",
      "Evaluations and an approval step before anything is sent, paid or changed",
    ],
    fit: "Companies that already have the documents, inboxes or tools worth connecting — small or large.",
    engage: "Custom scope, quoted after discovery. No public fee, and no promise of a measured return.",
  },
  {
    id: "enterprise-systems",
    index: "04",
    name: "Enterprise systems and data",
    summary: "Legacy tools, CRM and ERP edges, pipelines and dashboards, so there is one version of an operational fact.",
    problem:
      "The order, the customer and the invoice live in different places. Reports are exported by hand, and nobody trusts the latest spreadsheet.",
    outputs: [
      "Interfaces between the systems you already pay for",
      "Pipelines and views for the decisions people actually make",
      "A narrower workflow, modernised, rather than a rip-and-replace slogan",
    ],
    fit: "Growing companies and larger organisations with tools that must keep working while something new is attached.",
    engage: "Discovery first where the map is unclear, then a milestone build. We do not claim a history of Fortune 500 programmes.",
  },
  {
    id: "managed-engineering",
    index: "05",
    name: "Managed engineering",
    summary: "After launch: monitoring, maintenance and the next small improvement, under a scope you can see.",
    problem: "A launch is not the last week the software needs an engineer. Small fixes get lost, and nobody owns the next iteration.",
    outputs: [
      "A named list of what is watched and what is out of scope",
      "Fixes and small improvements against that list",
      "A clear end to the agreement, not an open retainer by default",
    ],
    fit: "Teams that have something in production and want the same founders available after go-live.",
    engage: "Optional, and only after a build or an existing system is understood. Support hours are whatever the agreement says — not an unlimited 24/7 claim.",
  },
] as const;

export const steps = [
  {
    label: "Discover",
    text: "We sit with the people who do the work. We list the tools, the handoffs and the decision you want software to change.",
  },
  {
    label: "Scope",
    text: "You get a written edge: what will be built, what will not, how we will know it worked, and how it will be paid.",
  },
  {
    label: "Prototype",
    text: "A thin version in front of real users. They approve the path before we harden it.",
  },
  {
    label: "Deploy",
    text: "We integrate, put it into production, and hand over access, docs and the operating routine.",
  },
  {
    label: "Improve",
    text: "We watch what actually happens and change the next smallest thing. Ongoing care is optional and scoped.",
  },
] as const;

export const problems = [
  { title: "Unconnected data", text: "The same fact is retyped across chat, sheets and a system of record." },
  { title: "Manual workflows", text: "People carry work between tools that were never introduced to each other." },
  { title: "Outdated software", text: "The public site, or the internal tool, no longer matches how the company operates." },
  { title: "Slow delivery", text: "A large programme is proposed when a founder-led slice would answer the question." },
] as const;

export const packages = [
  {
    name: "Starter",
    subtitle: "One-page website",
    price: "৳10,000",
    digits: "10000",
    features: [
      "One mobile-first page: your offer, photos, location, call and WhatsApp buttons",
      "Simple build, set up on your domain",
    ],
    delivery: "About 5 days · 1 revision round · 15 days support",
    forWho: "For a shop, clinic, or service business that just needs to be found online.",
    topic: "the Starter website (৳10,000)",
  },
  {
    name: "Counter",
    subtitle: "Mobile shop",
    price: "৳25,000",
    digits: "25000",
    badge: "Most chosen website",
    features: [
      "Mobile shop with your product catalog",
      "Orders straight to your WhatsApp",
      "Cash on delivery",
      "Easy to update yourself",
    ],
    delivery: "About 2 weeks · 2 revision rounds · 30 days of fixes free",
    forWho: "For Facebook and Instagram sellers ready for a real storefront.",
    topic: "the Counter mobile shop (৳25,000)",
  },
  {
    name: "Showroom",
    subtitle: "Full store with admin",
    price: "৳45,000",
    digits: "45000",
    features: [
      "Everything in Counter",
      "WooCommerce admin: products, stock, orders, coupons",
      "bKash/Nagad payments and courier setup (Pathao/Steadfast/RedX)",
      "SEO setup (titles, sitemap, Search Console)",
      "AI chat assistant that answers product questions",
    ],
    delivery: "About 3–4 weeks · 3 revision rounds · 60 days support",
    forWho: "For growing shops with a large catalog and steady orders.",
    topic: "the Showroom store (৳45,000)",
  },
] as const;

export const foundingOffer =
  "Founding clients: ৳15,000 for the Counter, in exchange for a short review and permission to show your site.";
export const foundingDigits = "15000";
export const paymentTerms = "Payment: 50% deposit, 25% at design approval, 25% before launch.";
export const pricingIntro = "No monthly fee from us for these website builds. Domain and hosting stay in your name.";

export type WorkStatus = "Concept" | "Internal / Shipped" | "Shipped game";

export const work = [
  {
    slug: "rollers-republic",
    title: "Rollers Republic",
    status: "Concept" as WorkStatus,
    discipline: "Website",
    problem: "A Dhaka catalog that lived in conversation, not in a storefront someone could try on a phone.",
    implementation:
      "A concept shop built from that catalog: mobile browsing, a cart, a prefilled WhatsApp order and a cash-on-delivery path.",
    showed: "Storefront flow and WhatsApp ordering. Not a launched client store, and not presented as one.",
    href: "https://rollers-republic-pitch.vercel.app",
    linkLabel: "View the concept",
  },
  {
    slug: "emberfall",
    title: "EMBERFALL",
    status: "Shipped game" as WorkStatus,
    discipline: "Browser game",
    problem: "A studio exercise in shipping a complete, installable browser game — not a client operations problem.",
    implementation:
      "Vanilla JavaScript on canvas, procedural art and audio, touch and reduced-motion options, optional pilot accounts. Guest scores stay on the device.",
    showed:
      "We can ship a polished interactive product. This is a game. It is not evidence of an enterprise AI deployment.",
    href: "https://emberfall-game-two.vercel.app/",
    linkLabel: "Play EMBERFALL",
    secondaryHref: "https://github.com/FahadIbrahim93/emberfall",
    secondaryLabel: "View source",
  },
  {
    slug: "hope-theory-labs-site",
    title: "Hope Theory Labs site",
    status: "Internal / Shipped" as WorkStatus,
    discipline: "Marketing site",
    problem: "The studio needed a public site with an honest contact path and a narrative about connected systems.",
    implementation:
      "The production site is a static export with an accessible fallback and a WebGL scene on capable desktops. This review build proposes new positioning; it is not that deployment.",
    showed: "Our own site, labelled as internal. No client logo is implied.",
    href: "https://hopetheorylabs.vercel.app",
    linkLabel: "Open the live site",
  },
] as const;

export const founders = [
  {
    name: "Fahad Ibrahim",
    role: "Co-founder · engineering",
    text: "Technical delivery. Architecture, build and the handoff of software that has to run.",
  },
  {
    name: "Tamim Abir",
    role: "Co-founder · commercial",
    text: "Client relationships and operations. Scope, expectations and the commercial path of an engagement.",
  },
] as const;

export const principles = [
  "The founders stay on the work. Outside specialists join only when a project actually needs them.",
  "A website is one offer. It is not a gate in front of AI, integration or forward-deployed work.",
  "Custom fees are written down after discovery. We do not publish a number we have not agreed.",
  "Anything an assistant might send or change keeps a human approval step.",
  "Proof is labelled. A concept, a game and an internal site are not client case studies.",
] as const;

export const projectKinds = [
  "Website or online shop",
  "Custom web or mobile software",
  "AI integration or automation",
  "Forward-deployed engineering",
  "Enterprise systems and data",
  "Managed engineering",
  "Not sure yet",
] as const;

export const timeframes = ["Ready to start", "This quarter", "Exploring — no date yet"] as const;

export const budgets = [
  "Prefer not to say",
  "A published website package",
  "Custom scope — quote after discovery",
] as const;

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Hope Theory Labs",
  description:
    "Founder-led AI engineering and custom software studio in Dhaka, Bangladesh. Forward-deployed engineering, web and mobile software, AI integration, and systems work.",
  email: EMAIL,
  telephone: `+${WHATSAPP_E164}`,
  url: "https://hopetheorylabs.vercel.app",
  areaServed: "Bangladesh",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Dhaka",
    addressCountry: "BD",
  },
};
