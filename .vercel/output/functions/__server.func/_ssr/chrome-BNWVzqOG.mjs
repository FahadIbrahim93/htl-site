import { i as __toESM } from "../_runtime.mjs";
import { J as require_react, S as require_jsx_runtime, b as Link, p as useRouterState } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as Menu, r as MessageSquare, t as X } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/chrome-BNWVzqOG.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
/**
* Proposed positioning for founder review (issue #42).
* Visible strings live here. Published website prices are copied from the
* live site and are not new commercial terms.
*/
var EMAIL = "hopetheorybd@gmail.com";
var WHATSAPP_E164 = "8801718463471";
var WHATSAPP_DISPLAY = "+8801718463471";
function whatsappHref(text) {
	return `https://wa.me/${WHATSAPP_E164}?text=${encodeURIComponent(text)}`;
}
var tagline = "Your data. Connected. Your business. Smarter.";
var nav = [
	{
		href: "/services",
		label: "Services"
	},
	{
		href: "/approach",
		label: "Approach"
	},
	{
		href: "/work",
		label: "Work"
	},
	{
		href: "/about",
		label: "About"
	},
	{
		href: "/contact",
		label: "Contact"
	}
];
var sources = [
	{
		name: "Productivity",
		detail: "Calendars, docs, tasks and notes, in one place."
	},
	{
		name: "CRM",
		detail: "Customer history, deals and follow-ups, in one record."
	},
	{
		name: "Databases",
		detail: "Your tables and spreadsheets, kept in sync."
	},
	{
		name: "Files",
		detail: "Contracts, invoices and documents, searchable."
	},
	{
		name: "Apps",
		detail: "The tools your team uses every day."
	},
	{
		name: "APIs",
		detail: "Live connections to suppliers and services."
	},
	{
		name: "Systems",
		detail: "Accounting, inventory and day-to-day operations."
	},
	{
		name: "People",
		detail: "Your team, with the right access and context."
	}
];
var services = [
	{
		id: "forward-deployed-engineering",
		index: "01",
		name: "Forward-deployed engineering",
		summary: "Engineers work beside your team, from the real workflow through to something running in production.",
		problem: "A slide deck about AI does not change how orders, cases or approvals actually move. The people who feel the friction are rarely in the room when the software is designed.",
		outputs: [
			"A written picture of the workflow, the systems it touches, and what “better” means",
			"A proof of value your own users can try, with a human still approving what matters",
			"Integration into the tools you already run, then a production handoff"
		],
		fit: "Teams that want a senior pair inside the problem for a defined engagement — not a large resident staff on payroll.",
		engage: "Scoped and embedded for the length of the work. Time on site is agreed per project. It is not an unconditional full-time placement, and it does not require buying a website first."
	},
	{
		id: "custom-software",
		index: "02",
		name: "Custom web and mobile software",
		summary: "Websites, apps, shops, SaaS, portals, APIs and internal tools, built to the job rather than a theme.",
		problem: "Off-the-shelf pages and disconnected apps leave the business looking finished online while the actual work still happens in chat and spreadsheets.",
		outputs: [
			"A product scoped to one job: selling, operating, or serving customers",
			"Mobile-ready interfaces, admin tools where the work needs them, and APIs where systems must talk",
			"A handover you can run without us sitting in the middle of every change"
		],
		fit: "Startups and operating companies that need software shaped around their process, including shops that want a fixed website package.",
		engage: "Fixed-scope builds when the edges are clear. Milestone-based custom builds when they are not. Published website packages stay on their own page."
	},
	{
		id: "ai-integration",
		index: "03",
		name: "AI integration and automation",
		summary: "Language models, grounded answers over your own material, agents and document workflows — with a person in the loop.",
		problem: "Staff retype the same facts, search the same folders, and answer the same questions, while generic chat tools are not allowed to see the real files.",
		outputs: [
			"A bounded assistant or workflow over sources you choose",
			"Retrieval over your material, not a claim that a model “knows” your company",
			"Evaluations and an approval step before anything is sent, paid or changed"
		],
		fit: "Companies that already have the documents, inboxes or tools worth connecting — small or large.",
		engage: "Custom scope, quoted after discovery. No public fee, and no promise of a measured return."
	},
	{
		id: "enterprise-systems",
		index: "04",
		name: "Enterprise systems and data",
		summary: "Legacy tools, CRM and ERP edges, pipelines and dashboards, so there is one version of an operational fact.",
		problem: "The order, the customer and the invoice live in different places. Reports are exported by hand, and nobody trusts the latest spreadsheet.",
		outputs: [
			"Interfaces between the systems you already pay for",
			"Pipelines and views for the decisions people actually make",
			"A narrower workflow, modernised, rather than a rip-and-replace slogan"
		],
		fit: "Growing companies and larger organisations with tools that must keep working while something new is attached.",
		engage: "Discovery first where the map is unclear, then a milestone build. We do not claim a history of Fortune 500 programmes."
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
			"A clear end to the agreement, not an open retainer by default"
		],
		fit: "Teams that have something in production and want the same founders available after go-live.",
		engage: "Optional, and only after a build or an existing system is understood. Support hours are whatever the agreement says — not an unlimited 24/7 claim."
	}
];
var steps = [
	{
		label: "Discover",
		text: "We sit with the people who do the work. We list the tools, the handoffs and the decision you want software to change."
	},
	{
		label: "Scope",
		text: "You get a written edge: what will be built, what will not, how we will know it worked, and how it will be paid."
	},
	{
		label: "Prototype",
		text: "A thin version in front of real users. They approve the path before we harden it."
	},
	{
		label: "Deploy",
		text: "We integrate, put it into production, and hand over access, docs and the operating routine."
	},
	{
		label: "Improve",
		text: "We watch what actually happens and change the next smallest thing. Ongoing care is optional and scoped."
	}
];
var problems = [
	{
		title: "Unconnected data",
		text: "The same fact is retyped across chat, sheets and a system of record."
	},
	{
		title: "Manual workflows",
		text: "People carry work between tools that were never introduced to each other."
	},
	{
		title: "Outdated software",
		text: "The public site, or the internal tool, no longer matches how the company operates."
	},
	{
		title: "Slow delivery",
		text: "A large programme is proposed when a founder-led slice would answer the question."
	}
];
var packages = [
	{
		name: "Starter",
		subtitle: "One-page website",
		price: "৳10,000",
		digits: "10000",
		features: ["One mobile-first page: your offer, photos, location, call and WhatsApp buttons", "Simple build, set up on your domain"],
		delivery: "About 5 days · 1 revision round · 15 days support",
		forWho: "For a shop, clinic, or service business that just needs to be found online.",
		topic: "the Starter website (৳10,000)"
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
			"Easy to update yourself"
		],
		delivery: "About 2 weeks · 2 revision rounds · 30 days of fixes free",
		forWho: "For Facebook and Instagram sellers ready for a real storefront.",
		topic: "the Counter mobile shop (৳25,000)"
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
			"AI chat assistant that answers product questions"
		],
		delivery: "About 3–4 weeks · 3 revision rounds · 60 days support",
		forWho: "For growing shops with a large catalog and steady orders.",
		topic: "the Showroom store (৳45,000)"
	}
];
var foundingOffer = "Founding clients: ৳15,000 for the Counter, in exchange for a short review and permission to show your site.";
var foundingDigits = "15000";
var paymentTerms = "Payment: 50% deposit, 25% at design approval, 25% before launch.";
var pricingIntro = "No monthly fee from us for these website builds. Domain and hosting stay in your name.";
var work = [
	{
		slug: "rollers-republic",
		title: "Rollers Republic",
		status: "Concept",
		discipline: "Website",
		problem: "A Dhaka catalog that lived in conversation, not in a storefront someone could try on a phone.",
		implementation: "A concept shop built from that catalog: mobile browsing, a cart, a prefilled WhatsApp order and a cash-on-delivery path.",
		showed: "Storefront flow and WhatsApp ordering. Not a launched client store, and not presented as one.",
		href: "https://rollers-republic-pitch.vercel.app",
		linkLabel: "View the concept"
	},
	{
		slug: "emberfall",
		title: "EMBERFALL",
		status: "Shipped game",
		discipline: "Browser game",
		problem: "A studio exercise in shipping a complete, installable browser game — not a client operations problem.",
		implementation: "Vanilla JavaScript on canvas, procedural art and audio, touch and reduced-motion options, optional pilot accounts. Guest scores stay on the device.",
		showed: "We can ship a polished interactive product. This is a game. It is not evidence of an enterprise AI deployment.",
		href: "https://emberfall-game-two.vercel.app/",
		linkLabel: "Play EMBERFALL",
		secondaryHref: "https://github.com/FahadIbrahim93/emberfall",
		secondaryLabel: "View source"
	},
	{
		slug: "hope-theory-labs-site",
		title: "Hope Theory Labs site",
		status: "Internal / Shipped",
		discipline: "Marketing site",
		problem: "The studio needed a public site with an honest contact path and a narrative about connected systems.",
		implementation: "The production site is a static export with an accessible fallback and a WebGL scene on capable desktops. This review build proposes new positioning; it is not that deployment.",
		showed: "Our own site, labelled as internal. No client logo is implied.",
		href: "https://hopetheorylabs.vercel.app",
		linkLabel: "Open the live site"
	}
];
var founders = [{
	name: "Fahad Ibrahim",
	role: "Co-founder · engineering",
	text: "Technical delivery. Architecture, build and the handoff of software that has to run."
}, {
	name: "Tamim Abir",
	role: "Co-founder · commercial",
	text: "Client relationships and operations. Scope, expectations and the commercial path of an engagement."
}];
var principles = [
	"The founders stay on the work. Outside specialists join only when a project actually needs them.",
	"A website is one offer. It is not a gate in front of AI, integration or forward-deployed work.",
	"Custom fees are written down after discovery. We do not publish a number we have not agreed.",
	"Anything an assistant might send or change keeps a human approval step.",
	"Proof is labelled. A concept, a game and an internal site are not client case studies."
];
var projectKinds = [
	"Website or online shop",
	"Custom web or mobile software",
	"AI integration or automation",
	"Forward-deployed engineering",
	"Enterprise systems and data",
	"Managed engineering",
	"Not sure yet"
];
var timeframes = [
	"Ready to start",
	"This quarter",
	"Exploring — no date yet"
];
var budgets = [
	"Prefer not to say",
	"A published website package",
	"Custom scope — quote after discovery"
];
var jsonLd = {
	"@context": "https://schema.org",
	"@type": "ProfessionalService",
	name: "Hope Theory Labs",
	description: "Founder-led AI engineering and custom software studio in Dhaka, Bangladesh. Forward-deployed engineering, web and mobile software, AI integration, and systems work.",
	email: EMAIL,
	telephone: `+${WHATSAPP_E164}`,
	url: "https://hopetheorylabs.vercel.app",
	areaServed: "Bangladesh",
	address: {
		"@type": "PostalAddress",
		addressLocality: "Dhaka",
		addressCountry: "BD"
	}
};
function stateFor(progress) {
	if (progress < .22) return "Scattered";
	if (progress < .62) return "Structured";
	return "Alive";
}
function Atmosphere() {
	const svgRef = (0, import_react.useRef)(null);
	const labelRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const svg = svgRef.current;
		if (!svg) return;
		const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
		let frame = 0;
		let alive = true;
		let width = 0;
		let height = 0;
		let particles = [];
		let morph = reduced ? .5 : 0;
		const dots = [];
		let links = null;
		const layout = () => {
			width = window.innerWidth;
			height = window.innerHeight;
			svg.setAttribute("viewBox", `0 0 ${width} ${height}`);
			const count = width < 720 ? 32 : 52;
			const cx = width * (width < 720 ? .72 : .74);
			const cy = height * .42;
			particles = Array.from({ length: count }, (_, index) => {
				const angle = index / count * Math.PI * 2 + index % 3 * .2;
				const ring = 1 + index % 3;
				const radius = (width < 720 ? 58 : 100) * ring * .55;
				return {
					sx: index * 47 % 100 / 100 * width,
					sy: index * 29 % 100 / 100 * height,
					tx: cx + Math.cos(angle) * radius,
					ty: cy + Math.sin(angle) * radius * .68,
					gold: index % 7 === 0,
					phase: index % 11 * .57
				};
			});
			while (dots.length) dots.pop()?.remove();
			links?.remove();
			links = document.createElementNS("http://www.w3.org/2000/svg", "path");
			links.setAttribute("fill", "none");
			links.setAttribute("stroke", "#B8892F");
			svg.appendChild(links);
			for (let i = 0; i < count; i += 1) {
				const dot = document.createElementNS("http://www.w3.org/2000/svg", "circle");
				dot.setAttribute("fill", particles[i].gold ? "#FFBD61" : "#EEF0F2");
				svg.appendChild(dot);
				dots.push(dot);
			}
		};
		const progress = () => {
			const max = document.documentElement.scrollHeight - window.innerHeight;
			if (max <= 0) return 0;
			return Math.min(1, Math.max(0, window.scrollY / max));
		};
		const draw = (time) => {
			const target = reduced ? .48 : progress();
			morph += (target - morph) * (reduced ? 1 : .055);
			const label = stateFor(morph);
			if (labelRef.current && labelRef.current.textContent !== label) labelRef.current.textContent = label;
			const energy = Math.max(0, (morph - .55) / .45);
			const points = particles.map((particle) => {
				const drift = reduced ? 0 : Math.sin(time * 35e-5 + particle.phase) * (4 + energy * 12);
				return {
					x: particle.sx + (particle.tx - particle.sx) * morph + Math.cos(particle.phase) * drift * morph,
					y: particle.sy + (particle.ty - particle.sy) * morph + Math.sin(particle.phase) * drift * morph,
					gold: particle.gold
				};
			});
			const reach = 110 + morph * 50;
			let commands = "";
			for (let i = 0; i < points.length; i += 1) for (let j = i + 1; j < points.length; j += 1) {
				const dx = points[i].x - points[j].x;
				const dy = points[i].y - points[j].y;
				if (dx * dx + dy * dy < reach * reach) commands += `M${points[i].x.toFixed(1)} ${points[i].y.toFixed(1)}L${points[j].x.toFixed(1)} ${points[j].y.toFixed(1)}`;
			}
			if (!links) return;
			links.setAttribute("d", commands);
			links.setAttribute("stroke-opacity", (.1 + morph * .22).toFixed(3));
			points.forEach((point, index) => {
				const dot = dots[index];
				if (!dot) return;
				dot.setAttribute("cx", String(point.x));
				dot.setAttribute("cy", String(point.y));
				dot.setAttribute("r", point.gold ? "2.2" : "1.2");
				dot.setAttribute("fill-opacity", point.gold ? String(.55 + morph * .4) : String(.35 + morph * .4));
			});
			if (alive && !reduced) frame = requestAnimationFrame(draw);
		};
		layout();
		draw(0);
		const onResize = () => {
			layout();
			if (reduced) draw(0);
		};
		window.addEventListener("resize", onResize);
		return () => {
			alive = false;
			cancelAnimationFrame(frame);
			window.removeEventListener("resize", onResize);
		};
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "pointer-events-none fixed inset-0 z-0",
		"aria-hidden": "true",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
				ref: svgRef,
				className: "h-full w-full"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "field-scrim absolute inset-0" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "grain absolute inset-0" })
		]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
		className: "pointer-events-none fixed bottom-5 left-4 z-20 hidden border border-line bg-ink px-3 py-2 font-mono text-xs tracking-widest text-quiet uppercase sm:block",
		"aria-hidden": "true",
		children: ["Signal · ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			ref: labelRef,
			className: "text-amber",
			children: "Scattered"
		})]
	})] });
}
var ALLOWED = /* @__PURE__ */ new Set([...packages.map((item) => item.digits), foundingDigits]);
var PRICE_PATTERNS = [
	/৳\s?[\d,]+/g,
	/[\d][\d,]{2,}\s*(?:taka|tk|bdt)\b/gi,
	/\b(?:taka|tk|bdt)\s*[\d][\d,]{2,}/gi
];
var HANDOFF = `I don't have a grounded answer for that. Email ${EMAIL} or WhatsApp ${WHATSAPP_DISPLAY}.`;
var ASSISTANT_CHIPS = [
	"What is forward-deployed engineering?",
	"What software do you build?",
	"How does AI integration work?",
	"Website packages",
	"Startups and larger companies",
	"How does discovery work?"
];
function unknownPrice(text) {
	for (const pattern of PRICE_PATTERNS) for (const match of text.matchAll(pattern)) {
		const digits = match[0].replace(/[^\d]/g, "");
		if (digits && !ALLOWED.has(digits)) return match[0].trim();
	}
	return null;
}
var PACKAGE_LINE = packages.map((item) => `${item.name} ${item.price} (${item.subtitle}). ${item.delivery}`).join(" ");
function priceReply() {
	return `${pricingIntro} ${PACKAGE_LINE} ${paymentTerms} ${foundingOffer} Apps, AI integration, forward-deployed engineering, enterprise systems and managed engineering are custom scope — quote after discovery. I will not invent a fee.`;
}
var RULES = [
	{
		id: "price",
		test: /price|pricing|cost|budget|how much|৳|taka|\btk\b|quote|charge|package|starter|counter|showroom|fee/i,
		reply: priceReply()
	},
	{
		id: "fde",
		test: /forward[ -]?deploy|fde|embedded|on-?site|alongside/i,
		reply: `${services[0].name}: ${services[0].summary} ${services[0].engage}`
	},
	{
		id: "discover",
		test: /discover|discovery|how (do|does) (you|we|it) work|process|engage|onboard|timeline|how long/i,
		reply: `Where it is useful, discovery is a paid diagnostic we agree before it starts — there is no public fee for it. Then ${steps.map((step) => step.label.toLowerCase()).join(", ")}. ${steps.map((step) => `${step.label}: ${step.text}`).join(" ")} Timing is confirmed per project.`
	},
	{
		id: "who",
		test: /enterprise|sme|startup|mid-?market|who do you|larger compan|small business|international/i,
		reply: "We work with startups and small businesses, growing companies, and larger organisations. Bangladesh is the base; international enquiries are welcome. That is a plan for reach, not a claim that a global client list already exists. The work stays founder-led."
	},
	{
		id: "ai",
		test: /\bai\b|rag|agent|automat|llm|model|chatbot/i,
		reply: `${services[2].name}: ${services[2].summary} ${services[2].outputs.join(" ")} ${services[2].engage}`
	},
	{
		id: "apps",
		test: /what do you (build|do)|software|app\b|mobile|saas|portal|api|website|service/i,
		reply: `Hope Theory Labs is a founder-led AI engineering and custom software studio in Dhaka. ${tagline} We do five things: ${services.map((item) => item.name).join("; ")}. A website package is available if that is the whole job. It is not required before the others.`
	},
	{
		id: "founders",
		test: /founder|fahad|tamim|who are you|about|team/i,
		reply: "Two co-founders. Fahad Ibrahim leads engineering and technical delivery. Tamim Abir leads commercial operations and client relationships. We deploy software with a small senior team, and bring in a specialist only when the project needs one. We do not publish headcount we do not have."
	},
	{
		id: "work",
		test: /portfolio|case stud|rollers|emberfall|proof|demo|client/i,
		reply: "Labelled work only. Rollers Republic is a concept storefront, not a paid case study. EMBERFALL is a shipped browser game, not an enterprise AI deployment. The Hope Theory Labs site is internal and shipped. We do not invent client logos."
	},
	{
		id: "contact",
		test: /whatsapp|e-?mail|phone|contact|reach/i,
		reply: `WhatsApp ${WHATSAPP_DISPLAY} or email ${EMAIL}. An enquiry from the contact page opens one of those apps. It is not stored here, and it is not a confirmed booking.`
	}
];
function answerQuestion(message) {
	const text = message.trim();
	if (!text) return {
		id: "empty",
		reply: "Ask a question about the work, the packages, or how an engagement starts."
	};
	if (text.length > 1e3) return {
		id: "long",
		reply: "That message is too long. Keep it under 1,000 characters, or write to us directly."
	};
	const invented = unknownPrice(text);
	if (invented) return {
		id: "unknown-price",
		reply: `I can't confirm ${invented}. ${priceReply()}`
	};
	const bangla = /[\u0980-\u09FF]/.test(text);
	const matched = RULES.find((rule) => rule.test.test(text));
	const reply = matched?.reply ?? HANDOFF;
	if (!bangla) return {
		id: matched?.id ?? "handoff",
		reply
	};
	return {
		id: matched?.id ?? "handoff",
		reply: `Bangla pages are not published yet — a translation has to be reviewed first. ${reply}`
	};
}
whatsappHref("Hi Hope Theory Labs, I'd like to discuss a project. This is not a website-package enquiry unless I say so.");
var INTRO = "Ask what forward-deployed engineering means, what we build, how AI work is scoped, or which website prices are actually published. I only answer from that record.";
function Assistant() {
	const [open, setOpen] = (0, import_react.useState)(false);
	const [draft, setDraft] = (0, import_react.useState)("");
	const [turns, setTurns] = (0, import_react.useState)([]);
	const sent = (0, import_react.useRef)(0);
	const inputRef = (0, import_react.useRef)(null);
	const ask = (value) => {
		const text = value.trim();
		if (!text) return;
		if (sent.current >= 12) {
			setTurns((current) => [
				...current,
				{
					role: "you",
					text
				},
				{
					role: "studio",
					text: "You've sent a few messages already. Continue on WhatsApp or email and a person will reply."
				}
			]);
			setDraft("");
			return;
		}
		sent.current += 1;
		const result = answerQuestion(text);
		setTurns((current) => [
			...current,
			{
				role: "you",
				text
			},
			{
				role: "studio",
				text: result.reply
			}
		]);
		setDraft("");
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "fixed right-4 bottom-4 z-40 flex w-[min(100%-2rem,22rem)] flex-col items-end gap-3",
		children: [open ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "flex max-h-[min(70vh,34rem)] w-full flex-col border border-line bg-ink-2 text-paper shadow-none",
			"aria-label": "Hope Theory assistant",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
					className: "flex items-start justify-between gap-3 border-b border-line px-4 py-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-xs tracking-widest text-gold uppercase",
						children: "Assistant"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-xl",
						children: "Hope Theory"
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "inline-flex min-h-11 min-w-11 items-center justify-center text-paper",
						onClick: () => setOpen(false),
						"aria-label": "Close the assistant",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { "aria-hidden": "true" })
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex-1 space-y-3 overflow-y-auto px-4 py-4",
					"aria-live": "polite",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm leading-relaxed text-muted",
							children: INTRO
						}),
						turns.map((turn, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: turn.role === "you" ? "text-sm text-paper" : "text-sm leading-relaxed text-muted",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-mono text-xs tracking-widest text-quiet uppercase",
								children: turn.role === "you" ? "You" : "Studio"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mt-1 block",
								children: turn.text
							})]
						}, `${turn.role}-${index}`)),
						turns.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "flex flex-col gap-2",
							children: ASSISTANT_CHIPS.map((chip) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: "min-h-11 w-full border border-line px-3 text-left text-sm text-paper hover:border-gold",
								onClick: () => ask(chip),
								children: chip
							}) }, chip))
						}) : null
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					className: "border-t border-line p-3",
					onSubmit: (event) => {
						event.preventDefault();
						ask(draft);
					},
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: "sr-only",
							htmlFor: "assistant-input",
							children: "Your message"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								id: "assistant-input",
								ref: inputRef,
								value: draft,
								onChange: (event) => setDraft(event.target.value),
								maxLength: 1e3,
								placeholder: "Ask about the work",
								className: "min-h-11 w-full border border-line bg-ink px-3 text-sm text-paper placeholder:text-quiet"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "submit",
								className: "min-h-11 bg-gold px-3 text-sm font-medium text-ink",
								children: "Send"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-2 text-xs leading-relaxed text-quiet",
							children: [
								"Runs in your browser. Nothing is sent to a server. Continue on WhatsApp ",
								WHATSAPP_DISPLAY,
								" if you would rather talk to a person."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							className: "mt-1 inline-flex min-h-11 items-center text-xs text-gold",
							href: whatsappHref("Hi Hope Theory Labs, the website assistant couldn't answer my question."),
							children: "Message us on WhatsApp"
						})
					]
				})
			]
		}) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
			type: "button",
			className: "inline-flex min-h-11 items-center gap-2 border border-line bg-ink px-4 text-sm text-paper",
			"aria-expanded": open,
			onClick: () => {
				setOpen((value) => !value);
				window.setTimeout(() => inputRef.current?.focus(), 0);
			},
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageSquare, {
				className: "size-4 text-gold",
				"aria-hidden": "true"
			}), open ? "Hide assistant" : "Ask the studio"]
		})]
	});
}
function Mark() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		viewBox: "0 0 40 32",
		className: "h-8 w-10 text-gold",
		"aria-hidden": "true",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			fill: "currentColor",
			d: "M2 4h3.2v9.2h8.2V4H16.6v24h-3.2v-11H5.2V28H2V4zm18 0h16.4v3.1h-6.6V28h-3.2V7.1H20V4z"
		})
	});
}
function SiteFrame({ children }) {
	const pathname = useRouterState({ select: (state) => state.location.pathname });
	const [open, setOpen] = (0, import_react.useState)(false);
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 8);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	(0, import_react.useEffect)(() => {
		setOpen(false);
	}, [pathname]);
	(0, import_react.useEffect)(() => {
		if (!open) return;
		const onKey = (event) => {
			if (event.key === "Escape") setOpen(false);
		};
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, [open]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative min-h-screen",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Atmosphere, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: "#content",
				className: "sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:bg-paper focus:px-3 focus:py-2 focus:text-ink",
				children: "Skip to content"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: `fixed inset-x-0 top-0 z-30 border-b ${scrolled ? "border-line bg-ink/95" : "border-transparent bg-ink/40"}`,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex h-16 max-w-6xl items-center gap-4 px-4 sm:px-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/",
							className: "flex items-center gap-2 text-paper",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mark, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-sans text-sm font-medium tracking-wide",
								children: "Hope Theory Labs"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
							className: "ml-auto hidden items-center gap-6 lg:flex",
							"aria-label": "Primary",
							children: [nav.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: item.href,
								className: "text-sm text-quiet hover:text-paper data-[status=active]:text-paper",
								children: item.label
							}, item.href)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/contact",
								className: "inline-flex min-h-11 items-center bg-gold px-4 text-sm font-medium text-ink",
								children: "Discuss a project"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							className: "ml-auto inline-flex min-h-11 min-w-11 items-center justify-center border border-line text-paper lg:hidden",
							"aria-expanded": open,
							"aria-controls": "site-menu",
							onClick: () => setOpen((value) => !value),
							children: [open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { "aria-hidden": "true" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { "aria-hidden": "true" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "sr-only",
								children: open ? "Close menu" : "Open menu"
							})]
						})
					]
				}), open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					id: "site-menu",
					className: "border-t border-line bg-ink px-4 py-3 lg:hidden",
					"aria-label": "Mobile",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "flex flex-col",
						children: [
							nav.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: item.href,
								className: "flex min-h-11 items-center text-paper",
								children: item.label
							}) }, item.href)),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/pricing",
								className: "flex min-h-11 items-center text-quiet",
								children: "Website packages"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
								className: "pt-2",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/contact",
									className: "inline-flex min-h-11 w-full items-center justify-center bg-gold text-sm font-medium text-ink",
									children: "Discuss a project"
								})
							})
						]
					})
				}) : null]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				id: "content",
				className: "relative z-10",
				children
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
				className: "relative z-10 border-t border-line",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-2xl text-paper",
							children: "Hope Theory Labs"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 max-w-xs text-sm leading-relaxed text-muted",
							children: "Founder-led AI engineering and custom software. Dhaka, with international enquiries welcome."
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "text-sm leading-7",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-mono text-xs tracking-widest text-gold uppercase",
									children: "Contact"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									className: "mt-2 block text-paper",
									href: whatsappHref("Hi Hope Theory Labs, I'd like to discuss a project."),
									children: ["WhatsApp ", WHATSAPP_DISPLAY]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									className: "block text-paper",
									href: `mailto:${EMAIL}`,
									children: EMAIL
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "text-sm leading-7",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-mono text-xs tracking-widest text-gold uppercase",
									children: "Also"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/pricing",
									className: "mt-2 block text-paper",
									children: "Standard website packages"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									className: "block text-quiet",
									href: "https://hopetheorylabs.vercel.app",
									children: "Current public site"
								})
							]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mx-auto max-w-6xl px-4 pb-24 text-xs leading-relaxed text-quiet sm:px-6 sm:pb-16",
					children: "© 2026 Hope Theory Labs · Dhaka, Bangladesh. Founder review of proposed positioning — the live site is unchanged until this is approved. No analytics on this review. No invented clients, certifications or facilities."
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Assistant, {})
		]
	});
}
function Eyebrow({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "font-mono text-xs tracking-widest text-gold uppercase",
		children
	});
}
function PageIntro({ eyebrow, title, lede }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: "mx-auto max-w-6xl px-4 pt-28 sm:px-6 sm:pt-36",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-3xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: eyebrow }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-4 font-display text-4xl leading-tight text-paper sm:text-6xl",
					children: title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 max-w-2xl text-lg leading-relaxed text-muted",
					children: lede
				})
			]
		})
	});
}
//#endregion
export { steps as _, WHATSAPP_DISPLAY as a, whatsappHref as b, foundingOffer as c, paymentTerms as d, principles as f, sources as g, services as h, SiteFrame as i, jsonLd as l, projectKinds as m, Eyebrow as n, budgets as o, problems as p, PageIntro as r, founders as s, EMAIL as t, packages as u, tagline as v, work as x, timeframes as y };
