import {
  EMAIL,
  WHATSAPP_DISPLAY,
  foundingDigits,
  foundingOffer,
  packages,
  paymentTerms,
  pricingIntro,
  services,
  steps,
  tagline,
  whatsappHref,
} from "@/content/site";

const ALLOWED = new Set<string>([...packages.map((item) => item.digits), foundingDigits]);

const PRICE_PATTERNS = [/৳\s?[\d,]+/g, /[\d][\d,]{2,}\s*(?:taka|tk|bdt)\b/gi, /\b(?:taka|tk|bdt)\s*[\d][\d,]{2,}/gi];

export const HANDOFF = `I don't have a grounded answer for that. Email ${EMAIL} or WhatsApp ${WHATSAPP_DISPLAY}.`;

export const ASSISTANT_CHIPS = [
  "What is forward-deployed engineering?",
  "What software do you build?",
  "How does AI integration work?",
  "Website packages",
  "Startups and larger companies",
  "How does discovery work?",
] as const;

function unknownPrice(text: string): string | null {
  for (const pattern of PRICE_PATTERNS) {
    for (const match of text.matchAll(pattern)) {
      const digits = match[0].replace(/[^\d]/g, "");
      if (digits && !ALLOWED.has(digits)) return match[0].trim();
    }
  }
  return null;
}

const PACKAGE_LINE = packages
  .map((item) => `${item.name} ${item.price} (${item.subtitle}). ${item.delivery}`)
  .join(" ");

function priceReply() {
  return `${pricingIntro} ${PACKAGE_LINE} ${paymentTerms} ${foundingOffer} Apps, AI integration, forward-deployed engineering, enterprise systems and managed engineering are custom scope — quote after discovery. I will not invent a fee.`;
}

const RULES: { id: string; test: RegExp; reply: string }[] = [
  {
    id: "price",
    test: /price|pricing|cost|budget|how much|৳|taka|\btk\b|quote|charge|package|starter|counter|showroom|fee/i,
    reply: priceReply(),
  },
  {
    id: "fde",
    test: /forward[ -]?deploy|fde|embedded|on-?site|alongside/i,
    reply: `${services[0].name}: ${services[0].summary} ${services[0].engage}`,
  },
  {
    id: "discover",
    test: /discover|discovery|how (do|does) (you|we|it) work|process|engage|onboard|timeline|how long/i,
    reply: `Where it is useful, discovery is a paid diagnostic we agree before it starts — there is no public fee for it. Then ${steps.map((step) => step.label.toLowerCase()).join(", ")}. ${steps.map((step) => `${step.label}: ${step.text}`).join(" ")} Timing is confirmed per project.`,
  },
  {
    id: "who",
    test: /enterprise|sme|startup|mid-?market|who do you|larger compan|small business|international/i,
    reply:
      "We work with startups and small businesses, growing companies, and larger organisations. Bangladesh is the base; international enquiries are welcome. That is a plan for reach, not a claim that a global client list already exists. The work stays founder-led.",
  },
  {
    id: "ai",
    test: /\bai\b|rag|agent|automat|llm|model|chatbot/i,
    reply: `${services[2].name}: ${services[2].summary} ${services[2].outputs.join(" ")} ${services[2].engage}`,
  },
  {
    id: "apps",
    test: /what do you (build|do)|software|app\b|mobile|saas|portal|api|website|service/i,
    reply: `Hope Theory Labs is a founder-led AI engineering and custom software studio in Dhaka. ${tagline} We do five things: ${services.map((item) => item.name).join("; ")}. A website package is available if that is the whole job. It is not required before the others.`,
  },
  {
    id: "founders",
    test: /founder|fahad|tamim|who are you|about|team/i,
    reply:
      "Two co-founders. Fahad Ibrahim leads engineering and technical delivery. Tamim Abir leads commercial operations and client relationships. We deploy software with a small senior team, and bring in a specialist only when the project needs one. We do not publish headcount we do not have.",
  },
  {
    id: "work",
    test: /portfolio|case stud|rollers|emberfall|proof|demo|client/i,
    reply:
      "Labelled work only. Rollers Republic is a concept storefront, not a paid case study. EMBERFALL is a shipped browser game, not an enterprise AI deployment. The Hope Theory Labs site is internal and shipped. We do not invent client logos.",
  },
  {
    id: "contact",
    test: /whatsapp|e-?mail|phone|contact|reach/i,
    reply: `WhatsApp ${WHATSAPP_DISPLAY} or email ${EMAIL}. An enquiry from the contact page opens one of those apps. It is not stored here, and it is not a confirmed booking.`,
  },
];

export function answerQuestion(message: string): { id: string; reply: string } {
  const text = message.trim();
  if (!text) return { id: "empty", reply: "Ask a question about the work, the packages, or how an engagement starts." };
  if (text.length > 1000) {
    return { id: "long", reply: "That message is too long. Keep it under 1,000 characters, or write to us directly." };
  }
  const invented = unknownPrice(text);
  if (invented) {
    return {
      id: "unknown-price",
      reply: `I can't confirm ${invented}. ${priceReply()}`,
    };
  }
  const bangla = /[\u0980-\u09FF]/.test(text);
  const matched = RULES.find((rule) => rule.test.test(text));
  const reply = matched?.reply ?? HANDOFF;
  if (!bangla) return { id: matched?.id ?? "handoff", reply };
  return {
    id: matched?.id ?? "handoff",
    reply: `Bangla pages are not published yet — a translation has to be reviewed first. ${reply}`,
  };
}

export const whatsappHome = whatsappHref(
  "Hi Hope Theory Labs, I'd like to discuss a project. This is not a website-package enquiry unless I say so.",
);
