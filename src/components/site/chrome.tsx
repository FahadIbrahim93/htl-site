import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useEffect, useState, type ReactNode } from "react";
import { EMAIL, nav, WHATSAPP_DISPLAY, whatsappHref } from "@/content/site";
import { Atmosphere } from "@/components/site/atmosphere";
import { Assistant } from "@/components/site/assistant";

function Mark() {
  return (
    <svg viewBox="0 0 40 32" className="h-8 w-10 text-gold" aria-hidden="true">
      <path
        fill="currentColor"
        d="M2 4h3.2v9.2h8.2V4H16.6v24h-3.2v-11H5.2V28H2V4zm18 0h16.4v3.1h-6.6V28h-3.2V7.1H20V4z"
      />
    </svg>
  );
}

export function SiteFrame({ children }: { children: ReactNode }) {
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <div className="relative min-h-screen">
      <Atmosphere />
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:bg-paper focus:px-3 focus:py-2 focus:text-ink"
      >
        Skip to content
      </a>
      <header
        className={`fixed inset-x-0 top-0 z-30 border-b ${scrolled ? "border-line bg-ink/95" : "border-transparent bg-ink/40"}`}
      >
        <div className="mx-auto flex h-16 max-w-6xl items-center gap-4 px-4 sm:px-6">
          <Link to="/" className="flex items-center gap-2 text-paper">
            <Mark />
            <span className="font-sans text-sm font-medium tracking-wide">Hope Theory Labs</span>
          </Link>
          <nav className="ml-auto hidden items-center gap-6 lg:flex" aria-label="Primary">
            {nav.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className="text-sm text-quiet hover:text-paper data-[status=active]:text-paper"
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="inline-flex min-h-11 items-center bg-gold px-4 text-sm font-medium text-ink"
            >
              Discuss a project
            </Link>
          </nav>
          <button
            type="button"
            className="ml-auto inline-flex min-h-11 min-w-11 items-center justify-center border border-line text-paper lg:hidden"
            aria-expanded={open}
            aria-controls="site-menu"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          </button>
        </div>
        {open ? (
          <nav id="site-menu" className="border-t border-line bg-ink px-4 py-3 lg:hidden" aria-label="Mobile">
            <ul className="flex flex-col">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link to={item.href} className="flex min-h-11 items-center text-paper">
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/pricing" className="flex min-h-11 items-center text-quiet">
                  Website packages
                </Link>
              </li>
              <li className="pt-2">
                <Link
                  to="/contact"
                  className="inline-flex min-h-11 w-full items-center justify-center bg-gold text-sm font-medium text-ink"
                >
                  Discuss a project
                </Link>
              </li>
            </ul>
          </nav>
        ) : null}
      </header>
      <main id="content" className="relative z-10">
        {children}
      </main>
      <footer className="relative z-10 border-t border-line">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-3">
          <div>
            <p className="font-display text-2xl text-paper">Hope Theory Labs</p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted">
              Founder-led AI engineering and custom software. Dhaka, with international enquiries welcome.
            </p>
          </div>
          <div className="text-sm leading-7">
            <p className="font-mono text-xs tracking-widest text-gold uppercase">Contact</p>
            <a className="mt-2 block text-paper" href={whatsappHref("Hi Hope Theory Labs, I'd like to discuss a project.")}>
              WhatsApp {WHATSAPP_DISPLAY}
            </a>
            <a className="block text-paper" href={`mailto:${EMAIL}`}>
              {EMAIL}
            </a>
          </div>
          <div className="text-sm leading-7">
            <p className="font-mono text-xs tracking-widest text-gold uppercase">Also</p>
            <Link to="/pricing" className="mt-2 block text-paper">
              Standard website packages
            </Link>
            <a className="block text-quiet" href="https://hopetheorylabs.vercel.app">
              Current public site
            </a>
          </div>
        </div>
        <p className="mx-auto max-w-6xl px-4 pb-24 text-xs leading-relaxed text-quiet sm:px-6 sm:pb-16">
          © 2026 Hope Theory Labs · Dhaka, Bangladesh. Founder review of proposed positioning — the live site is
          unchanged until this is approved. No analytics on this review. No invented clients, certifications or
          facilities.
        </p>
      </footer>
      <Assistant />
    </div>
  );
}

export function Eyebrow({ children }: { children: string }) {
  return <p className="font-mono text-xs tracking-widest text-gold uppercase">{children}</p>;
}

export function PageIntro({
  eyebrow,
  title,
  lede,
}: {
  eyebrow: string;
  title: string;
  lede: string;
}) {
  return (
    <header className="mx-auto max-w-6xl px-4 pt-28 sm:px-6 sm:pt-36">
      <div className="max-w-3xl">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="mt-4 font-display text-4xl leading-tight text-paper sm:text-6xl">{title}</h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">{lede}</p>
      </div>
    </header>
  );
}
