import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Eyebrow, SiteFrame } from "@/components/site/chrome";
import {
  founders,
  jsonLd,
  problems,
  services,
  sources,
  steps,
  tagline,
  work,
} from "@/content/site";

export function HomePage() {
  const [source, setSource] = useState(0);
  const active = sources[source];

  return (
    <SiteFrame>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <section className="mx-auto flex min-h-screen max-w-6xl flex-col justify-end px-4 pt-28 pb-16 sm:px-6 sm:pb-24">
        <Eyebrow>AI engineering · Custom software · Dhaka / global delivery</Eyebrow>
        <h1 className="mt-5 max-w-4xl font-display text-4xl leading-tight text-paper sm:text-6xl lg:text-7xl">
          We engineer software that makes businesses smarter.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
          Hope Theory Labs builds custom web and mobile applications, integrates AI into existing workflows, and
          works directly with teams to turn complex business problems into software that runs in production.
        </p>
        <p className="mt-5 font-display text-2xl text-amber italic sm:text-3xl">{tagline}</p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
          <Link
            to="/contact"
            className="inline-flex min-h-11 items-center justify-center bg-gold px-5 text-sm font-medium text-ink"
          >
            Discuss your project
          </Link>
          <Link
            to="/work"
            className="inline-flex min-h-11 items-center justify-center border border-line px-5 text-sm text-paper"
          >
            Explore our work
          </Link>
          <Link to="/services" className="inline-flex min-h-11 items-center text-sm text-gold">
            Explore our services
          </Link>
        </div>
      </section>

      <section className="border-t border-line" aria-labelledby="caption-heading">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Eyebrow>The field</Eyebrow>
            <h2 id="caption-heading" className="mt-4 font-display text-3xl leading-tight text-paper sm:text-5xl">
              From disconnected systems to intelligent operations.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted">
              The field behind this page moves from scattered points, to a structure, to a living core as you
              read. It is a picture of the work — not a claim that your systems are already connected.
            </p>
          </div>
          <div className="lg:col-span-7">
            <p className="text-sm text-quiet">Select a source to trace what it would mean to connect it.</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {sources.map((item, index) => (
                <button
                  key={item.name}
                  type="button"
                  aria-pressed={index === source}
                  className={`min-h-11 border px-3 text-sm ${index === source ? "border-gold text-amber" : "border-line text-paper"}`}
                  onClick={() => setSource(index)}
                >
                  {item.name}
                </button>
              ))}
            </div>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-paper" aria-live="polite">
              {active.name}. {active.detail}
            </p>
            <ul className="mt-8 grid gap-4 sm:grid-cols-3">
              {[
                ["Connect", "Sources into one record"],
                ["Automate", "Repeated work, with approval"],
                ["Improve", "What is already running"],
              ].map(([title, text]) => (
                <li key={title} className="border-t border-line pt-3">
                  <p className="text-sm text-paper">{title}</p>
                  <p className="mt-1 text-sm text-quiet">{text}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="services" className="border-t border-line" aria-labelledby="services-heading">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <Eyebrow>What we engineer</Eyebrow>
          <h2 id="services-heading" className="mt-4 max-w-2xl font-display text-3xl text-paper sm:text-5xl">
            Five offers. Different jobs.
          </h2>
          <ol className="mt-12 divide-y divide-line border-y border-line">
            {services.map((service) => (
              <li key={service.id} className="grid gap-3 py-6 md:grid-cols-12 md:items-baseline">
                <p className="font-mono text-xs text-gold md:col-span-1">{service.index}</p>
                <h3 className="font-display text-2xl text-paper md:col-span-4">{service.name}</h3>
                <p className="text-sm leading-relaxed text-muted md:col-span-5">{service.summary}</p>
                <Link
                  to="/services"
                  hash={service.id}
                  className="text-sm text-gold md:col-span-2 md:text-right"
                >
                  Read the offer
                </Link>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="delivery" className="border-t border-line" aria-labelledby="delivery-heading">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2">
          <div>
            <Eyebrow>How delivery works</Eyebrow>
            <h2 id="delivery-heading" className="mt-4 font-display text-3xl leading-tight text-paper sm:text-5xl">
              The founders work inside the problem. Then the software leaves with you.
            </h2>
            <p className="mt-5 leading-relaxed text-muted">
              Forward-deployed, in plain words: we learn the workflow with your people, try a thin version they
              can approve, connect it to the tools you already use, and put it into production. On-site time is
              decided per project. This is not a large team living in your office, and you do not buy a website
              before we will talk about AI.
            </p>
            <Link to="/approach" className="mt-6 inline-flex min-h-11 items-center text-sm text-gold">
              Read the approach
            </Link>
          </div>
          <ol className="space-y-6">
            {steps.map((step, index) => (
              <li key={step.label} className="grid grid-cols-[auto_1fr] gap-4 border-t border-line pt-4">
                <span className="font-mono text-xs text-gold">0{index + 1}</span>
                <div>
                  <h3 className="text-paper">{step.label}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted">{step.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-t border-line" aria-labelledby="problems-heading">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <h2 id="problems-heading" className="font-display text-3xl text-paper sm:text-4xl">
            Problems we take on
          </h2>
          <ul className="mt-10 grid gap-8 sm:grid-cols-2">
            {problems.map((problem) => (
              <li key={problem.title}>
                <h3 className="text-paper">{problem.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{problem.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="work" className="border-t border-line" aria-labelledby="work-heading">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <Eyebrow>Evidence</Eyebrow>
              <h2 id="work-heading" className="mt-4 font-display text-3xl text-paper sm:text-5xl">
                Proof, labelled honestly.
              </h2>
            </div>
            <Link to="/work" className="text-sm text-gold">
              Open the registry
            </Link>
          </div>
          <ul className="mt-10 grid gap-6 lg:grid-cols-3">
            {work.map((item) => (
              <li key={item.slug} className="flex flex-col border border-line p-5">
                <p className="font-mono text-xs tracking-widest text-gold uppercase">{item.status}</p>
                <h3 className="mt-3 font-display text-2xl text-paper">{item.title}</h3>
                <p className="mt-1 text-xs text-quiet">{item.discipline}</p>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-muted">{item.showed}</p>
                <a className="mt-5 inline-flex min-h-11 items-center text-sm text-paper" href={item.href}>
                  {item.linkLabel}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="paths" className="border-t border-line" aria-labelledby="paths-heading">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <h2 id="paths-heading" className="max-w-2xl font-display text-3xl text-paper sm:text-5xl">
            Choose the engagement. Don’t decode the jargon.
          </h2>
          <div className="mt-10 grid gap-4 lg:grid-cols-5">
            <article className="border border-gold p-6 lg:col-span-3">
              <p className="font-mono text-xs tracking-widest text-gold uppercase">Custom work</p>
              <h3 className="mt-3 font-display text-3xl text-paper">An app, an integration, an agent, or a workflow.</h3>
              <p className="mt-4 text-sm leading-relaxed text-muted">
                We scope it. Discovery is paid when we agree it up front. The quote comes after we understand the
                work — not from a menu on this page.
              </p>
              <Link to="/contact" className="mt-6 inline-flex min-h-11 items-center bg-gold px-4 text-sm font-medium text-ink">
                Discuss a custom project
              </Link>
            </article>
            <article className="bg-paper p-6 text-ink lg:col-span-2">
              <p className="font-mono text-xs tracking-widest text-gold-deep uppercase">Website packages</p>
              <h3 className="mt-3 font-display text-3xl">Need a site or a shop?</h3>
              <p className="mt-4 text-sm leading-relaxed text-slate">
                Starter, Counter and Showroom stay published in taka. They are a separate offer, not the front door
                of the studio.
              </p>
              <Link to="/pricing" className="mt-6 inline-flex min-h-11 items-center text-sm font-medium text-gold-deep">
                See website packages
              </Link>
            </article>
          </div>
        </div>
      </section>

      <section id="founders" className="border-t border-line" aria-labelledby="founders-heading">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <Eyebrow>The studio</Eyebrow>
          <h2 id="founders-heading" className="mt-4 max-w-2xl font-display text-3xl text-paper sm:text-5xl">
            Two founders. You work with the people who build.
          </h2>
          <ul className="mt-10 grid gap-8 md:grid-cols-2">
            {founders.map((founder) => (
              <li key={founder.name} className="border-t border-line pt-5">
                <h3 className="font-display text-3xl text-paper">{founder.name}</h3>
                <p className="mt-1 text-sm text-gold">{founder.role}</p>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-muted">{founder.text}</p>
              </li>
            ))}
          </ul>
          <Link to="/about" className="mt-8 inline-flex min-h-11 items-center text-sm text-gold">
            How the studio operates
          </Link>
        </div>
      </section>

      <section className="border-t border-line" aria-labelledby="close-heading">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <h2 id="close-heading" className="max-w-3xl font-display text-4xl leading-tight text-paper sm:text-6xl">
            Tell us the problem. We’ll say which path it is.
          </h2>
          <p className="mt-5 max-w-xl text-muted">
            The form opens WhatsApp or email with what you wrote. It does not book a meeting, and it does not store
            the enquiry on a server.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-flex min-h-11 items-center bg-gold px-5 text-sm font-medium text-ink"
          >
            Discuss your project
          </Link>
        </div>
      </section>
    </SiteFrame>
  );
}
