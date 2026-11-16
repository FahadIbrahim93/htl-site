import { i as __toESM } from "../_runtime.mjs";
import { J as require_react, S as require_jsx_runtime, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { _ as steps, g as sources, h as services, i as SiteFrame, l as jsonLd, n as Eyebrow, p as problems, s as founders, v as tagline, x as work } from "./chrome-BNWVzqOG.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-CqiXfhsH.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function HomePage() {
	const [source, setSource] = (0, import_react.useState)(0);
	const active = sources[source];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteFrame, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("script", {
			type: "application/ld+json",
			dangerouslySetInnerHTML: { __html: JSON.stringify(jsonLd) }
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto flex min-h-screen max-w-6xl flex-col justify-end px-4 pt-28 pb-16 sm:px-6 sm:pb-24",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "AI engineering · Custom software · Dhaka / global delivery" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-5 max-w-4xl font-display text-4xl leading-tight text-paper sm:text-6xl lg:text-7xl",
					children: "We engineer software that makes businesses smarter."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 max-w-2xl text-lg leading-relaxed text-muted",
					children: "Hope Theory Labs builds custom web and mobile applications, integrates AI into existing workflows, and works directly with teams to turn complex business problems into software that runs in production."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-5 font-display text-2xl text-amber italic sm:text-3xl",
					children: tagline
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 flex flex-col gap-3 sm:flex-row sm:items-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/contact",
							className: "inline-flex min-h-11 items-center justify-center bg-gold px-5 text-sm font-medium text-ink",
							children: "Discuss your project"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/work",
							className: "inline-flex min-h-11 items-center justify-center border border-line px-5 text-sm text-paper",
							children: "Explore our work"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/services",
							className: "inline-flex min-h-11 items-center text-sm text-gold",
							children: "Explore our services"
						})
					]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-t border-line",
			"aria-labelledby": "caption-heading",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto grid max-w-6xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:col-span-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "The field" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							id: "caption-heading",
							className: "mt-4 font-display text-3xl leading-tight text-paper sm:text-5xl",
							children: "From disconnected systems to intelligent operations."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 text-base leading-relaxed text-muted",
							children: "The field behind this page moves from scattered points, to a structure, to a living core as you read. It is a picture of the work — not a claim that your systems are already connected."
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:col-span-7",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-quiet",
							children: "Select a source to trace what it would mean to connect it."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-4 flex flex-wrap gap-2",
							children: sources.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								"aria-pressed": index === source,
								className: `min-h-11 border px-3 text-sm ${index === source ? "border-gold text-amber" : "border-line text-paper"}`,
								onClick: () => setSource(index),
								children: item.name
							}, item.name))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-5 max-w-xl text-lg leading-relaxed text-paper",
							"aria-live": "polite",
							children: [
								active.name,
								". ",
								active.detail
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-8 grid gap-4 sm:grid-cols-3",
							children: [
								["Connect", "Sources into one record"],
								["Automate", "Repeated work, with approval"],
								["Improve", "What is already running"]
							].map(([title, text]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "border-t border-line pt-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm text-paper",
									children: title
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-sm text-quiet",
									children: text
								})]
							}, title))
						})
					]
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			id: "services",
			className: "border-t border-line",
			"aria-labelledby": "services-heading",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-6xl px-4 py-20 sm:px-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "What we engineer" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						id: "services-heading",
						className: "mt-4 max-w-2xl font-display text-3xl text-paper sm:text-5xl",
						children: "Five offers. Different jobs."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
						className: "mt-12 divide-y divide-line border-y border-line",
						children: services.map((service) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "grid gap-3 py-6 md:grid-cols-12 md:items-baseline",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-mono text-xs text-gold md:col-span-1",
									children: service.index
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-display text-2xl text-paper md:col-span-4",
									children: service.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm leading-relaxed text-muted md:col-span-5",
									children: service.summary
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/services",
									hash: service.id,
									className: "text-sm text-gold md:col-span-2 md:text-right",
									children: "Read the offer"
								})
							]
						}, service.id))
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			id: "delivery",
			className: "border-t border-line",
			"aria-labelledby": "delivery-heading",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto grid max-w-6xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "How delivery works" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						id: "delivery-heading",
						className: "mt-4 font-display text-3xl leading-tight text-paper sm:text-5xl",
						children: "The founders work inside the problem. Then the software leaves with you."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 leading-relaxed text-muted",
						children: "Forward-deployed, in plain words: we learn the workflow with your people, try a thin version they can approve, connect it to the tools you already use, and put it into production. On-site time is decided per project. This is not a large team living in your office, and you do not buy a website before we will talk about AI."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/approach",
						className: "mt-6 inline-flex min-h-11 items-center text-sm text-gold",
						children: "Read the approach"
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
					className: "space-y-6",
					children: steps.map((step, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "grid grid-cols-[auto_1fr] gap-4 border-t border-line pt-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "font-mono text-xs text-gold",
							children: ["0", index + 1]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-paper",
							children: step.label
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm leading-relaxed text-muted",
							children: step.text
						})] })]
					}, step.label))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-t border-line",
			"aria-labelledby": "problems-heading",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-6xl px-4 py-20 sm:px-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					id: "problems-heading",
					className: "font-display text-3xl text-paper sm:text-4xl",
					children: "Problems we take on"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-10 grid gap-8 sm:grid-cols-2",
					children: problems.map((problem) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-paper",
						children: problem.title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm leading-relaxed text-muted",
						children: problem.text
					})] }, problem.title))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			id: "work",
			className: "border-t border-line",
			"aria-labelledby": "work-heading",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-6xl px-4 py-20 sm:px-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-end justify-between gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Evidence" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						id: "work-heading",
						className: "mt-4 font-display text-3xl text-paper sm:text-5xl",
						children: "Proof, labelled honestly."
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/work",
						className: "text-sm text-gold",
						children: "Open the registry"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-10 grid gap-6 lg:grid-cols-3",
					children: work.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex flex-col border border-line p-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-mono text-xs tracking-widest text-gold uppercase",
								children: item.status
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-3 font-display text-2xl text-paper",
								children: item.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-xs text-quiet",
								children: item.discipline
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 flex-1 text-sm leading-relaxed text-muted",
								children: item.showed
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								className: "mt-5 inline-flex min-h-11 items-center text-sm text-paper",
								href: item.href,
								children: item.linkLabel
							})
						]
					}, item.slug))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			id: "paths",
			className: "border-t border-line",
			"aria-labelledby": "paths-heading",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-6xl px-4 py-20 sm:px-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					id: "paths-heading",
					className: "max-w-2xl font-display text-3xl text-paper sm:text-5xl",
					children: "Choose the engagement. Don’t decode the jargon."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-10 grid gap-4 lg:grid-cols-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "border border-gold p-6 lg:col-span-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-mono text-xs tracking-widest text-gold uppercase",
								children: "Custom work"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-3 font-display text-3xl text-paper",
								children: "An app, an integration, an agent, or a workflow."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 text-sm leading-relaxed text-muted",
								children: "We scope it. Discovery is paid when we agree it up front. The quote comes after we understand the work — not from a menu on this page."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/contact",
								className: "mt-6 inline-flex min-h-11 items-center bg-gold px-4 text-sm font-medium text-ink",
								children: "Discuss a custom project"
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "bg-paper p-6 text-ink lg:col-span-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-mono text-xs tracking-widest text-gold-deep uppercase",
								children: "Website packages"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-3 font-display text-3xl",
								children: "Need a site or a shop?"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 text-sm leading-relaxed text-slate",
								children: "Starter, Counter and Showroom stay published in taka. They are a separate offer, not the front door of the studio."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/pricing",
								className: "mt-6 inline-flex min-h-11 items-center text-sm font-medium text-gold-deep",
								children: "See website packages"
							})
						]
					})]
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			id: "founders",
			className: "border-t border-line",
			"aria-labelledby": "founders-heading",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-6xl px-4 py-20 sm:px-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "The studio" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						id: "founders-heading",
						className: "mt-4 max-w-2xl font-display text-3xl text-paper sm:text-5xl",
						children: "Two founders. You work with the people who build."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-10 grid gap-8 md:grid-cols-2",
						children: founders.map((founder) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "border-t border-line pt-5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-display text-3xl text-paper",
									children: founder.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-sm text-gold",
									children: founder.role
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 max-w-md text-sm leading-relaxed text-muted",
									children: founder.text
								})
							]
						}, founder.name))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/about",
						className: "mt-8 inline-flex min-h-11 items-center text-sm text-gold",
						children: "How the studio operates"
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-t border-line",
			"aria-labelledby": "close-heading",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-6xl px-4 py-20 sm:px-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						id: "close-heading",
						className: "max-w-3xl font-display text-4xl leading-tight text-paper sm:text-6xl",
						children: "Tell us the problem. We’ll say which path it is."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 max-w-xl text-muted",
						children: "The form opens WhatsApp or email with what you wrote. It does not book a meeting, and it does not store the enquiry on a server."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/contact",
						className: "mt-8 inline-flex min-h-11 items-center bg-gold px-5 text-sm font-medium text-ink",
						children: "Discuss your project"
					})
				]
			})
		})
	] });
}
var SplitComponent = HomePage;
//#endregion
export { SplitComponent as component };
