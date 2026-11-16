import { i as __toESM } from "../_runtime.mjs";
import { J as require_react, S as require_jsx_runtime, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { _ as steps, a as WHATSAPP_DISPLAY, b as whatsappHref, c as foundingOffer, d as paymentTerms, f as principles, h as services, i as SiteFrame, m as projectKinds, o as budgets, r as PageIntro, s as founders, t as EMAIL, u as packages, x as work, y as timeframes } from "./chrome-BNWVzqOG.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/pages-DzE_kGKF.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ServicesPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteFrame, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageIntro, {
		eyebrow: "Services",
		title: "What we engineer, and how an engagement actually starts.",
		lede: "Each offer below is a different job: the problem, what you leave with, who it fits, and how we sell it. A website package is available. It is not a ticket you must buy first."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-6xl px-4 py-16 sm:px-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
			className: "space-y-16",
			children: services.map((service) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				id: service.id,
				className: "grid gap-8 border-t border-line pt-10 lg:grid-cols-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:col-span-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-mono text-xs text-gold",
							children: service.index
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-3 font-display text-3xl leading-tight text-paper sm:text-4xl",
							children: service.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-sm leading-relaxed text-muted",
							children: service.summary
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-8 sm:grid-cols-2 lg:col-span-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-sm text-paper",
							children: "Problem"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm leading-relaxed text-muted",
							children: service.problem
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-sm text-paper",
							children: "What you leave with"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-2 space-y-2 text-sm leading-relaxed text-muted",
							children: service.outputs.map((output) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: output }, output))
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-sm text-paper",
							children: "Who it fits"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm leading-relaxed text-muted",
							children: service.fit
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-sm text-paper",
							children: "How we engage"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm leading-relaxed text-muted",
							children: service.engage
						})] })
					]
				})]
			}, service.id))
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "mt-16 text-sm text-muted",
			children: [
				"Shops that want a published price can",
				" ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/pricing",
					className: "text-gold",
					children: "open the website packages"
				}),
				". Everyone else should",
				" ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/contact",
					className: "text-gold",
					children: "describe the project"
				}),
				"."
			]
		})]
	})] });
}
function ApproachPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteFrame, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageIntro, {
		eyebrow: "Approach",
		title: "Discover, scope, prototype, deploy, improve.",
		lede: "A small senior studio. We would rather ship a slice that runs than staff a programme that only describes one."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-6xl space-y-16 px-4 py-16 sm:px-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "grid gap-8 md:grid-cols-5",
				children: steps.map((step, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "border-t border-line pt-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "font-mono text-xs text-gold",
							children: ["0", index + 1]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-3 font-display text-2xl text-paper",
							children: step.label
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm leading-relaxed text-muted",
							children: step.text
						})
					]
				}, step.label))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "grid gap-8 border-t border-line pt-10 lg:grid-cols-2",
				"aria-labelledby": "maturity-heading",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					id: "maturity-heading",
					className: "font-display text-3xl text-paper",
					children: "A foundation is optional. It is not a gate."
				}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-4 text-sm leading-relaxed text-muted",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Some companies need a legible digital presence first: a site, clean records, a catalog people can try. That is a foundation. It is one way to start." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Others already run on email, chat, spreadsheets and a system of record. We can begin there — connected systems, an intelligent workflow, then the routine that keeps it in production." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Stage one and stage two are a maturity path you can recognise. They are not a rule that every AI conversation must purchase a website." })
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "border-t border-line pt-10",
				"aria-labelledby": "onsite-heading",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					id: "onsite-heading",
					className: "font-display text-3xl text-paper",
					children: "On-site, when the work needs it."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 max-w-2xl text-sm leading-relaxed text-muted",
					children: "Forward-deployed means we work alongside the team that owns the workflow. Some of that is in the room. Some of it is remote. The balance is written into the scope. We do not promise a full-time resident staff, and we do not hire a bench to look larger than we are."
				})]
			})
		]
	})] });
}
function WorkPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteFrame, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageIntro, {
		eyebrow: "Work",
		title: "A registry, not a logo wall.",
		lede: "Status is part of the claim. Concept means concept. A shipped game is a game. Nothing here is labelled client work, because we are not going to imply a paid relationship we have not earned in public."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-6xl space-y-12 px-4 py-16 sm:px-6",
		children: [work.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
			id: item.slug,
			className: "grid gap-6 border-t border-line pt-10 lg:grid-cols-12",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "lg:col-span-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-xs tracking-widest text-gold uppercase",
						children: item.status
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 font-display text-4xl text-paper",
						children: item.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-quiet",
						children: item.discipline
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
				className: "grid gap-6 lg:col-span-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
						className: "text-sm text-paper",
						children: "Problem"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
						className: "mt-2 text-sm leading-relaxed text-muted",
						children: item.problem
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
						className: "text-sm text-paper",
						children: "What was built"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
						className: "mt-2 text-sm leading-relaxed text-muted",
						children: item.implementation
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
						className: "text-sm text-paper",
						children: "What it demonstrates"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
						className: "mt-2 text-sm leading-relaxed text-muted",
						children: item.showed
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							className: "inline-flex min-h-11 items-center text-sm text-gold",
							href: item.href,
							children: item.linkLabel
						}), "secondaryHref" in item && item.secondaryHref ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							className: "inline-flex min-h-11 items-center text-sm text-quiet",
							href: item.secondaryHref,
							children: item.secondaryLabel
						}) : null]
					})
				]
			})]
		}, item.slug)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-sm leading-relaxed text-quiet",
			children: "An AI workflow demo will be linked here only after it exists and has been tried. Planned capability is described on the services page. It is not dressed up as a case study."
		})]
	})] });
}
function AboutPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteFrame, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageIntro, {
		eyebrow: "About",
		title: "A founder-led studio in Dhaka.",
		lede: "Fahad Ibrahim and Tamim Abir are the co-founders. Clients work with the people who scope and build, not with a layer in front of them."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-6xl px-4 py-16 sm:px-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "grid gap-10 md:grid-cols-2",
				children: founders.map((founder) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "border-t border-line pt-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-4xl text-paper",
							children: founder.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-gold",
							children: founder.role
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 max-w-md text-sm leading-relaxed text-muted",
							children: founder.text
						})
					]
				}, founder.name))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-16 border-t border-line pt-10",
				"aria-labelledby": "principles-heading",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					id: "principles-heading",
					className: "font-display text-3xl text-paper",
					children: "Operating principles"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
					className: "mt-8 max-w-3xl space-y-4",
					children: principles.map((principle, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "grid grid-cols-[auto_1fr] gap-4 text-sm leading-relaxed text-muted",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "font-mono text-xs text-gold",
							children: ["0", index + 1]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: principle })]
					}, principle))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-12 max-w-2xl text-sm leading-relaxed text-quiet",
				children: "Not stated, because it is not established: a registered-entity blurb, client counts, revenue, certifications, a contracted always-on SLA, or hardware we have proposed buying but do not operate as client infrastructure."
			})
		]
	})] });
}
var fieldClass = "min-h-11 w-full border border-line bg-ink px-3 text-sm text-paper placeholder:text-quiet";
function ContactPage() {
	const [name, setName] = (0, import_react.useState)("");
	const [company, setCompany] = (0, import_react.useState)("");
	const [kind, setKind] = (0, import_react.useState)("");
	const [objective, setObjective] = (0, import_react.useState)("");
	const [tools, setTools] = (0, import_react.useState)("");
	const [industry, setIndustry] = (0, import_react.useState)("");
	const [timeframe, setTimeframe] = (0, import_react.useState)("");
	const [budget, setBudget] = (0, import_react.useState)(budgets[0]);
	const [preference, setPreference] = (0, import_react.useState)("whatsapp");
	const [contact, setContact] = (0, import_react.useState)("");
	const [consent, setConsent] = (0, import_react.useState)(false);
	const [errors, setErrors] = (0, import_react.useState)({});
	const [link, setLink] = (0, import_react.useState)("");
	const submit = (event) => {
		event.preventDefault();
		const next = {};
		if (name.trim().length < 2) next.name = "Please add your name.";
		if (!kind) next.kind = "Choose the kind of project.";
		if (objective.trim().length < 12) next.objective = "Say what you want to change, in a sentence or two.";
		if (!timeframe) next.timeframe = "Choose a timeframe.";
		if (preference === "email") {
			if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contact.trim())) next.contact = "Add an email address.";
		} else if (contact.replace(/\D/g, "").length < 6) next.contact = "Add a WhatsApp number.";
		if (!consent) next.consent = "Confirm you understand this is not stored here.";
		setErrors(next);
		const first = [
			"name",
			"kind",
			"objective",
			"timeframe",
			"contact",
			"consent"
		].find((key) => next[key]);
		if (first) {
			window.setTimeout(() => document.getElementById(first)?.focus(), 0);
			setLink("");
			return;
		}
		const body = [
			"Hi Hope Theory Labs, I'd like to discuss a project.",
			`Name: ${name.trim()}`,
			company.trim() ? `Company: ${company.trim()}` : "",
			`Project: ${kind}`,
			`Objective: ${objective.trim()}`,
			industry.trim() ? `Industry: ${industry.trim()}` : "",
			tools.trim() ? `Current tools: ${tools.trim()}` : "",
			`Timeframe: ${timeframe}`,
			`Budget: ${budget}`,
			`Reply via: ${preference}`,
			`Contact: ${contact.trim()}`
		].filter(Boolean).join("\n");
		const href = preference === "email" ? `mailto:${EMAIL}?subject=${encodeURIComponent("Project enquiry — Hope Theory Labs")}&body=${encodeURIComponent(body)}` : whatsappHref(body);
		setLink(href);
		window.location.href = href;
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteFrame, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageIntro, {
		eyebrow: "Contact",
		title: "Discuss the project.",
		lede: "Tell us enough to know which path you are on. Submitting opens WhatsApp or your email app. Nothing is saved on a server, and this is not a confirmed booking."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-12",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			className: "space-y-5 lg:col-span-7",
			onSubmit: submit,
			noValidate: true,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					id: "name",
					label: "Your name",
					error: errors.name,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						id: "name",
						className: fieldClass,
						value: name,
						onChange: (event) => setName(event.target.value),
						autoComplete: "name",
						"aria-invalid": Boolean(errors.name)
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					id: "company",
					label: "Company (optional)",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						id: "company",
						className: fieldClass,
						value: company,
						onChange: (event) => setCompany(event.target.value),
						autoComplete: "organization"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					id: "kind",
					label: "What kind of project?",
					error: errors.kind,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
						id: "kind",
						className: fieldClass,
						value: kind,
						onChange: (event) => setKind(event.target.value),
						"aria-invalid": Boolean(errors.kind),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: "",
							children: "Select"
						}), projectKinds.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: item,
							children: item
						}, item))]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					id: "objective",
					label: "What should be true when this is done?",
					error: errors.objective,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
						id: "objective",
						className: `${fieldClass} min-h-28 py-3`,
						value: objective,
						onChange: (event) => setObjective(event.target.value),
						"aria-invalid": Boolean(errors.objective)
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					id: "industry",
					label: "Industry (optional)",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						id: "industry",
						className: fieldClass,
						value: industry,
						onChange: (event) => setIndustry(event.target.value)
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					id: "tools",
					label: "Tools you already use (optional)",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
						id: "tools",
						className: `${fieldClass} min-h-24 py-3`,
						value: tools,
						onChange: (event) => setTools(event.target.value)
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					id: "timeframe",
					label: "Timeframe",
					error: errors.timeframe,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
						id: "timeframe",
						className: fieldClass,
						value: timeframe,
						onChange: (event) => setTimeframe(event.target.value),
						"aria-invalid": Boolean(errors.timeframe),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: "",
							children: "Select"
						}), timeframes.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: item,
							children: item
						}, item))]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					id: "budget",
					label: "Budget band (optional)",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
						id: "budget",
						className: fieldClass,
						value: budget,
						onChange: (event) => setBudget(event.target.value),
						children: budgets.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: item,
							children: item
						}, item))
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("fieldset", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("legend", {
					className: "text-sm text-paper",
					children: "How should we reply?"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-2 flex gap-3",
					children: ["whatsapp", "email"].map((value) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "inline-flex min-h-11 items-center gap-2 text-sm text-muted",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "radio",
							name: "preference",
							value,
							checked: preference === value,
							onChange: () => setPreference(value)
						}), value === "whatsapp" ? "WhatsApp" : "Email"]
					}, value))
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					id: "contact",
					label: preference === "email" ? "Email" : "WhatsApp number",
					error: errors.contact,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						id: "contact",
						className: fieldClass,
						value: contact,
						onChange: (event) => setContact(event.target.value),
						autoComplete: preference === "email" ? "email" : "tel",
						"aria-invalid": Boolean(errors.contact)
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "flex items-start gap-3 text-sm leading-relaxed text-muted",
					htmlFor: "consent",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						id: "consent",
						type: "checkbox",
						className: "mt-1",
						checked: consent,
						onChange: (event) => setConsent(event.target.checked),
						"aria-invalid": Boolean(errors.consent)
					}), "I understand this opens WhatsApp or email and is not stored on this site. It does not confirm a call."]
				}), errors.consent ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-sm text-amber",
					role: "alert",
					children: errors.consent
				}) : null] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "submit",
					className: "inline-flex min-h-11 items-center bg-gold px-5 text-sm font-medium text-ink",
					children: preference === "email" ? "Open email" : "Open WhatsApp"
				}),
				link ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-sm text-muted",
					children: [
						"If nothing opened,",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							className: "text-gold",
							href: link,
							children: "use this link"
						}),
						". Still not a confirmed booking."
					]
				}) : null
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("aside", {
			className: "lg:col-span-5",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "border border-line p-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-2xl text-paper",
						children: "Or go direct"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						className: "mt-4 block text-paper",
						href: whatsappHref("Hi Hope Theory Labs, I'd like to discuss a project."),
						children: ["WhatsApp ", WHATSAPP_DISPLAY]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						className: "mt-2 block text-paper",
						href: `mailto:${EMAIL}`,
						children: EMAIL
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 text-sm leading-relaxed text-quiet",
						children: "We have not published a response-time promise. A person replies on the channel you chose. There is no calendar hold until we agree one."
					})
				]
			})
		})]
	})] });
}
function Field({ id, label, error, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
			className: "text-sm text-paper",
			htmlFor: id,
			children: label
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-2",
			children
		}),
		error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-1 text-sm text-amber",
			role: "alert",
			children: error
		}) : null
	] });
}
function PricingPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteFrame, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageIntro, {
		eyebrow: "Pricing",
		title: "Custom work is quoted. Website packages stay published.",
		lede: "Apps, AI, forward-deployed engineering, enterprise systems and managed engineering are custom scope — a quote after discovery. We do not invent a range. The taka prices below are only the standard website packages, unchanged from what is already public."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-6xl px-4 py-16 sm:px-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "border border-gold p-6 sm:p-8",
			"aria-labelledby": "custom-price-heading",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-mono text-xs tracking-widest text-gold uppercase",
					children: "Custom scope"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					id: "custom-price-heading",
					className: "mt-3 font-display text-4xl text-paper",
					children: "Quote after discovery"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 max-w-2xl text-sm leading-relaxed text-muted",
					children: "Paid discovery only when we have agreed it. Then a fixed scope, milestones, or a time-bounded embedded engagement. Optional maintenance is separate, and only after something is in production."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/contact",
					className: "mt-6 inline-flex min-h-11 items-center bg-gold px-4 text-sm font-medium text-ink",
					children: "Discuss a custom project"
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mt-8 bg-paper px-6 py-10 text-ink sm:px-8",
			"aria-labelledby": "packages-heading",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-mono text-xs tracking-widest text-gold-deep uppercase",
					children: "Standard website packages"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					id: "packages-heading",
					className: "mt-3 font-display text-4xl",
					children: "Clear prices in taka, for sites and shops."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-4 max-w-2xl text-sm leading-relaxed text-slate",
					children: [
						paymentTerms,
						" ",
						foundingOffer,
						" Domain and hosting stay in your name. No monthly fee from us for these builds."
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-10 grid gap-6 lg:grid-cols-3",
					children: packages.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex flex-col border border-slate/30 p-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-baseline justify-between gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-display text-3xl",
									children: item.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm text-gold-deep",
									children: item.price
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm text-slate",
								children: item.subtitle
							}),
							"badge" in item && item.badge ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 font-mono text-xs tracking-widest text-gold-deep uppercase",
								children: item.badge
							}) : null,
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-4 flex-1 space-y-2 text-sm leading-relaxed text-ink",
								children: item.features.map((feature) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: feature }, feature))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 text-sm text-slate",
								children: item.delivery
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-slate",
								children: item.forWho
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								className: "mt-5 inline-flex min-h-11 items-center text-sm font-medium text-gold-deep",
								href: whatsappHref(`Hi Hope Theory Labs, I'm interested in ${item.topic}.`),
								children: ["Ask about ", item.name]
							})
						]
					}, item.name))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-8 text-sm text-slate",
					children: "Add-ons: domain and hosting set up at cost, in your name. Monthly care for updates, backups and fixes — ask us. There is no published monthly figure."
				})
			]
		})]
	})] });
}
//#endregion
export { ServicesPage as a, PricingPage as i, ApproachPage as n, WorkPage as o, ContactPage as r, AboutPage as t };
