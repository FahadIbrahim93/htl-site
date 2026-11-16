import { Link } from "@tanstack/react-router";
import { useState, type FormEvent, type ReactNode } from "react";
import { PageIntro, SiteFrame } from "@/components/site/chrome";
import {
  budgets,
  EMAIL,
  founders,
  foundingOffer,
  packages,
  paymentTerms,
  principles,
  projectKinds,
  services,
  steps,
  timeframes,
  WHATSAPP_DISPLAY,
  whatsappHref,
  work,
} from "@/content/site";

export function ServicesPage() {
  return (
    <SiteFrame>
      <PageIntro
        eyebrow="Services"
        title="What we engineer, and how an engagement actually starts."
        lede="Each offer below is a different job: the problem, what you leave with, who it fits, and how we sell it. A website package is available. It is not a ticket you must buy first."
      />
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <ol className="space-y-16">
          {services.map((service) => (
            <li key={service.id} id={service.id} className="grid gap-8 border-t border-line pt-10 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <p className="font-mono text-xs text-gold">{service.index}</p>
                <h2 className="mt-3 font-display text-3xl leading-tight text-paper sm:text-4xl">{service.name}</h2>
                <p className="mt-4 text-sm leading-relaxed text-muted">{service.summary}</p>
              </div>
              <div className="grid gap-8 sm:grid-cols-2 lg:col-span-8">
                <div>
                  <h3 className="text-sm text-paper">Problem</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{service.problem}</p>
                </div>
                <div>
                  <h3 className="text-sm text-paper">What you leave with</h3>
                  <ul className="mt-2 space-y-2 text-sm leading-relaxed text-muted">
                    {service.outputs.map((output) => (
                      <li key={output}>{output}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-sm text-paper">Who it fits</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{service.fit}</p>
                </div>
                <div>
                  <h3 className="text-sm text-paper">How we engage</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{service.engage}</p>
                </div>
              </div>
            </li>
          ))}
        </ol>
        <p className="mt-16 text-sm text-muted">
          Shops that want a published price can{" "}
          <Link to="/pricing" className="text-gold">
            open the website packages
          </Link>
          . Everyone else should{" "}
          <Link to="/contact" className="text-gold">
            describe the project
          </Link>
          .
        </p>
      </div>
    </SiteFrame>
  );
}

export function ApproachPage() {
  return (
    <SiteFrame>
      <PageIntro
        eyebrow="Approach"
        title="Discover, scope, prototype, deploy, improve."
        lede="A small senior studio. We would rather ship a slice that runs than staff a programme that only describes one."
      />
      <div className="mx-auto max-w-6xl space-y-16 px-4 py-16 sm:px-6">
        <ol className="grid gap-8 md:grid-cols-5">
          {steps.map((step, index) => (
            <li key={step.label} className="border-t border-line pt-4">
              <p className="font-mono text-xs text-gold">0{index + 1}</p>
              <h2 className="mt-3 font-display text-2xl text-paper">{step.label}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted">{step.text}</p>
            </li>
          ))}
        </ol>
        <section className="grid gap-8 border-t border-line pt-10 lg:grid-cols-2" aria-labelledby="maturity-heading">
          <div>
            <h2 id="maturity-heading" className="font-display text-3xl text-paper">
              A foundation is optional. It is not a gate.
            </h2>
          </div>
          <div className="space-y-4 text-sm leading-relaxed text-muted">
            <p>
              Some companies need a legible digital presence first: a site, clean records, a catalog people can
              try. That is a foundation. It is one way to start.
            </p>
            <p>
              Others already run on email, chat, spreadsheets and a system of record. We can begin there —
              connected systems, an intelligent workflow, then the routine that keeps it in production.
            </p>
            <p>
              Stage one and stage two are a maturity path you can recognise. They are not a rule that every AI
              conversation must purchase a website.
            </p>
          </div>
        </section>
        <section className="border-t border-line pt-10" aria-labelledby="onsite-heading">
          <h2 id="onsite-heading" className="font-display text-3xl text-paper">
            On-site, when the work needs it.
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted">
            Forward-deployed means we work alongside the team that owns the workflow. Some of that is in the room.
            Some of it is remote. The balance is written into the scope. We do not promise a full-time resident
            staff, and we do not hire a bench to look larger than we are.
          </p>
        </section>
      </div>
    </SiteFrame>
  );
}

export function WorkPage() {
  return (
    <SiteFrame>
      <PageIntro
        eyebrow="Work"
        title="A registry, not a logo wall."
        lede="Status is part of the claim. Concept means concept. A shipped game is a game. Nothing here is labelled client work, because we are not going to imply a paid relationship we have not earned in public."
      />
      <div className="mx-auto max-w-6xl space-y-12 px-4 py-16 sm:px-6">
        {work.map((item) => (
          <article key={item.slug} id={item.slug} className="grid gap-6 border-t border-line pt-10 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <p className="font-mono text-xs tracking-widest text-gold uppercase">{item.status}</p>
              <h2 className="mt-3 font-display text-4xl text-paper">{item.title}</h2>
              <p className="mt-2 text-sm text-quiet">{item.discipline}</p>
            </div>
            <dl className="grid gap-6 lg:col-span-8">
              <div>
                <dt className="text-sm text-paper">Problem</dt>
                <dd className="mt-2 text-sm leading-relaxed text-muted">{item.problem}</dd>
              </div>
              <div>
                <dt className="text-sm text-paper">What was built</dt>
                <dd className="mt-2 text-sm leading-relaxed text-muted">{item.implementation}</dd>
              </div>
              <div>
                <dt className="text-sm text-paper">What it demonstrates</dt>
                <dd className="mt-2 text-sm leading-relaxed text-muted">{item.showed}</dd>
              </div>
              <div className="flex flex-wrap gap-4">
                <a className="inline-flex min-h-11 items-center text-sm text-gold" href={item.href}>
                  {item.linkLabel}
                </a>
                {"secondaryHref" in item && item.secondaryHref ? (
                  <a className="inline-flex min-h-11 items-center text-sm text-quiet" href={item.secondaryHref}>
                    {item.secondaryLabel}
                  </a>
                ) : null}
              </div>
            </dl>
          </article>
        ))}
        <p className="text-sm leading-relaxed text-quiet">
          An AI workflow demo will be linked here only after it exists and has been tried. Planned capability is
          described on the services page. It is not dressed up as a case study.
        </p>
      </div>
    </SiteFrame>
  );
}

export function AboutPage() {
  return (
    <SiteFrame>
      <PageIntro
        eyebrow="About"
        title="A founder-led studio in Dhaka."
        lede="Fahad Ibrahim and Tamim Abir are the co-founders. Clients work with the people who scope and build, not with a layer in front of them."
      />
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <ul className="grid gap-10 md:grid-cols-2">
          {founders.map((founder) => (
            <li key={founder.name} className="border-t border-line pt-6">
              <h2 className="font-display text-4xl text-paper">{founder.name}</h2>
              <p className="mt-2 text-sm text-gold">{founder.role}</p>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-muted">{founder.text}</p>
            </li>
          ))}
        </ul>
        <section className="mt-16 border-t border-line pt-10" aria-labelledby="principles-heading">
          <h2 id="principles-heading" className="font-display text-3xl text-paper">
            Operating principles
          </h2>
          <ol className="mt-8 max-w-3xl space-y-4">
            {principles.map((principle, index) => (
              <li key={principle} className="grid grid-cols-[auto_1fr] gap-4 text-sm leading-relaxed text-muted">
                <span className="font-mono text-xs text-gold">0{index + 1}</span>
                <span>{principle}</span>
              </li>
            ))}
          </ol>
        </section>
        <p className="mt-12 max-w-2xl text-sm leading-relaxed text-quiet">
          Not stated, because it is not established: a registered-entity blurb, client counts, revenue,
          certifications, a contracted always-on SLA, or hardware we have proposed buying but do not operate as
          client infrastructure.
        </p>
      </div>
    </SiteFrame>
  );
}

const fieldClass = "min-h-11 w-full border border-line bg-ink px-3 text-sm text-paper placeholder:text-quiet";

export function ContactPage() {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [kind, setKind] = useState("");
  const [objective, setObjective] = useState("");
  const [tools, setTools] = useState("");
  const [industry, setIndustry] = useState("");
  const [timeframe, setTimeframe] = useState("");
  const [budget, setBudget] = useState<string>(budgets[0]);
  const [preference, setPreference] = useState<"whatsapp" | "email">("whatsapp");
  const [contact, setContact] = useState("");
  const [consent, setConsent] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [link, setLink] = useState("");

  const submit = (event: FormEvent) => {
    event.preventDefault();
    const next: Record<string, string> = {};
    if (name.trim().length < 2) next.name = "Please add your name.";
    if (!kind) next.kind = "Choose the kind of project.";
    if (objective.trim().length < 12) next.objective = "Say what you want to change, in a sentence or two.";
    if (!timeframe) next.timeframe = "Choose a timeframe.";
    if (preference === "email") {
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contact.trim())) next.contact = "Add an email address.";
    } else if (contact.replace(/\D/g, "").length < 6) {
      next.contact = "Add a WhatsApp number.";
    }
    if (!consent) next.consent = "Confirm you understand this is not stored here.";
    setErrors(next);
    const first = ["name", "kind", "objective", "timeframe", "contact", "consent"].find((key) => next[key]);
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
      `Contact: ${contact.trim()}`,
    ]
      .filter(Boolean)
      .join("\n");
    const href =
      preference === "email"
        ? `mailto:${EMAIL}?subject=${encodeURIComponent("Project enquiry — Hope Theory Labs")}&body=${encodeURIComponent(body)}`
        : whatsappHref(body);
    setLink(href);
    window.location.href = href;
  };

  return (
    <SiteFrame>
      <PageIntro
        eyebrow="Contact"
        title="Discuss the project."
        lede="Tell us enough to know which path you are on. Submitting opens WhatsApp or your email app. Nothing is saved on a server, and this is not a confirmed booking."
      />
      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-12">
        <form className="space-y-5 lg:col-span-7" onSubmit={submit} noValidate>
          <Field id="name" label="Your name" error={errors.name}>
            <input id="name" className={fieldClass} value={name} onChange={(event) => setName(event.target.value)} autoComplete="name" aria-invalid={Boolean(errors.name)} />
          </Field>
          <Field id="company" label="Company (optional)">
            <input id="company" className={fieldClass} value={company} onChange={(event) => setCompany(event.target.value)} autoComplete="organization" />
          </Field>
          <Field id="kind" label="What kind of project?" error={errors.kind}>
            <select id="kind" className={fieldClass} value={kind} onChange={(event) => setKind(event.target.value)} aria-invalid={Boolean(errors.kind)}>
              <option value="">Select</option>
              {projectKinds.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </Field>
          <Field id="objective" label="What should be true when this is done?" error={errors.objective}>
            <textarea id="objective" className={`${fieldClass} min-h-28 py-3`} value={objective} onChange={(event) => setObjective(event.target.value)} aria-invalid={Boolean(errors.objective)} />
          </Field>
          <Field id="industry" label="Industry (optional)">
            <input id="industry" className={fieldClass} value={industry} onChange={(event) => setIndustry(event.target.value)} />
          </Field>
          <Field id="tools" label="Tools you already use (optional)">
            <textarea id="tools" className={`${fieldClass} min-h-24 py-3`} value={tools} onChange={(event) => setTools(event.target.value)} />
          </Field>
          <Field id="timeframe" label="Timeframe" error={errors.timeframe}>
            <select id="timeframe" className={fieldClass} value={timeframe} onChange={(event) => setTimeframe(event.target.value)} aria-invalid={Boolean(errors.timeframe)}>
              <option value="">Select</option>
              {timeframes.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </Field>
          <Field id="budget" label="Budget band (optional)">
            <select id="budget" className={fieldClass} value={budget} onChange={(event) => setBudget(event.target.value)}>
              {budgets.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </Field>
          <fieldset>
            <legend className="text-sm text-paper">How should we reply?</legend>
            <div className="mt-2 flex gap-3">
              {(["whatsapp", "email"] as const).map((value) => (
                <label key={value} className="inline-flex min-h-11 items-center gap-2 text-sm text-muted">
                  <input
                    type="radio"
                    name="preference"
                    value={value}
                    checked={preference === value}
                    onChange={() => setPreference(value)}
                  />
                  {value === "whatsapp" ? "WhatsApp" : "Email"}
                </label>
              ))}
            </div>
          </fieldset>
          <Field id="contact" label={preference === "email" ? "Email" : "WhatsApp number"} error={errors.contact}>
            <input
              id="contact"
              className={fieldClass}
              value={contact}
              onChange={(event) => setContact(event.target.value)}
              autoComplete={preference === "email" ? "email" : "tel"}
              aria-invalid={Boolean(errors.contact)}
            />
          </Field>
          <div>
            <label className="flex items-start gap-3 text-sm leading-relaxed text-muted" htmlFor="consent">
              <input
                id="consent"
                type="checkbox"
                className="mt-1"
                checked={consent}
                onChange={(event) => setConsent(event.target.checked)}
                aria-invalid={Boolean(errors.consent)}
              />
              I understand this opens WhatsApp or email and is not stored on this site. It does not confirm a call.
            </label>
            {errors.consent ? (
              <p className="mt-1 text-sm text-amber" role="alert">
                {errors.consent}
              </p>
            ) : null}
          </div>
          <button type="submit" className="inline-flex min-h-11 items-center bg-gold px-5 text-sm font-medium text-ink">
            {preference === "email" ? "Open email" : "Open WhatsApp"}
          </button>
          {link ? (
            <p className="text-sm text-muted">
              If nothing opened,{" "}
              <a className="text-gold" href={link}>
                use this link
              </a>
              . Still not a confirmed booking.
            </p>
          ) : null}
        </form>
        <aside className="lg:col-span-5">
          <div className="border border-line p-6">
            <h2 className="font-display text-2xl text-paper">Or go direct</h2>
            <a className="mt-4 block text-paper" href={whatsappHref("Hi Hope Theory Labs, I'd like to discuss a project.")}>
              WhatsApp {WHATSAPP_DISPLAY}
            </a>
            <a className="mt-2 block text-paper" href={`mailto:${EMAIL}`}>
              {EMAIL}
            </a>
            <p className="mt-6 text-sm leading-relaxed text-quiet">
              We have not published a response-time promise. A person replies on the channel you chose. There is
              no calendar hold until we agree one.
            </p>
          </div>
        </aside>
      </div>
    </SiteFrame>
  );
}

function Field({
  id,
  label,
  error,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  children: ReactNode;
}) {
  return (
    <div>
      <label className="text-sm text-paper" htmlFor={id}>
        {label}
      </label>
      <div className="mt-2">{children}</div>
      {error ? (
        <p className="mt-1 text-sm text-amber" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}

export function PricingPage() {
  return (
    <SiteFrame>
      <PageIntro
        eyebrow="Pricing"
        title="Custom work is quoted. Website packages stay published."
        lede="Apps, AI, forward-deployed engineering, enterprise systems and managed engineering are custom scope — a quote after discovery. We do not invent a range. The taka prices below are only the standard website packages, unchanged from what is already public."
      />
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <section className="border border-gold p-6 sm:p-8" aria-labelledby="custom-price-heading">
          <p className="font-mono text-xs tracking-widest text-gold uppercase">Custom scope</p>
          <h2 id="custom-price-heading" className="mt-3 font-display text-4xl text-paper">
            Quote after discovery
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted">
            Paid discovery only when we have agreed it. Then a fixed scope, milestones, or a time-bounded
            embedded engagement. Optional maintenance is separate, and only after something is in production.
          </p>
          <Link to="/contact" className="mt-6 inline-flex min-h-11 items-center bg-gold px-4 text-sm font-medium text-ink">
            Discuss a custom project
          </Link>
        </section>

        <section className="mt-8 bg-paper px-6 py-10 text-ink sm:px-8" aria-labelledby="packages-heading">
          <p className="font-mono text-xs tracking-widest text-gold-deep uppercase">Standard website packages</p>
          <h2 id="packages-heading" className="mt-3 font-display text-4xl">
            Clear prices in taka, for sites and shops.
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate">
            {paymentTerms} {foundingOffer} Domain and hosting stay in your name. No monthly fee from us for these
            builds.
          </p>
          <ul className="mt-10 grid gap-6 lg:grid-cols-3">
            {packages.map((item) => (
              <li key={item.name} className="flex flex-col border border-slate/30 p-5">
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="font-display text-3xl">{item.name}</h3>
                  <p className="text-sm text-gold-deep">{item.price}</p>
                </div>
                <p className="mt-1 text-sm text-slate">{item.subtitle}</p>
                {"badge" in item && item.badge ? (
                  <p className="mt-3 font-mono text-xs tracking-widest text-gold-deep uppercase">{item.badge}</p>
                ) : null}
                <ul className="mt-4 flex-1 space-y-2 text-sm leading-relaxed text-ink">
                  {item.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
                <p className="mt-4 text-sm text-slate">{item.delivery}</p>
                <p className="mt-2 text-sm text-slate">{item.forWho}</p>
                <a
                  className="mt-5 inline-flex min-h-11 items-center text-sm font-medium text-gold-deep"
                  href={whatsappHref(`Hi Hope Theory Labs, I'm interested in ${item.topic}.`)}
                >
                  Ask about {item.name}
                </a>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-sm text-slate">
            Add-ons: domain and hosting set up at cost, in your name. Monthly care for updates, backups and fixes —
            ask us. There is no published monthly figure.
          </p>
        </section>
      </div>
    </SiteFrame>
  );
}
