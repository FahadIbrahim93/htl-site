import { useRef, useState } from "react";
import { MessageSquare, X } from "lucide-react";
import { ASSISTANT_CHIPS, answerQuestion } from "@/lib/assistant";
import { WHATSAPP_DISPLAY, whatsappHref } from "@/content/site";

type Turn = { role: "you" | "studio"; text: string };

const INTRO =
  "Ask what forward-deployed engineering means, what we build, how AI work is scoped, or which website prices are actually published. I only answer from that record.";

export function Assistant() {
  const [open, setOpen] = useState(false);
  const [draft, setDraft] = useState("");
  const [turns, setTurns] = useState<Turn[]>([]);
  const sent = useRef(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const ask = (value: string) => {
    const text = value.trim();
    if (!text) return;
    if (sent.current >= 12) {
      setTurns((current) => [
        ...current,
        { role: "you", text },
        {
          role: "studio",
          text: "You've sent a few messages already. Continue on WhatsApp or email and a person will reply.",
        },
      ]);
      setDraft("");
      return;
    }
    sent.current += 1;
    const result = answerQuestion(text);
    setTurns((current) => [
      ...current,
      { role: "you", text },
      { role: "studio", text: result.reply },
    ]);
    setDraft("");
  };

  return (
    <div className="fixed right-4 bottom-4 z-40 flex w-[min(100%-2rem,22rem)] flex-col items-end gap-3">
      {open ? (
        <section
          className="flex max-h-[min(70vh,34rem)] w-full flex-col border border-line bg-ink-2 text-paper shadow-none"
          aria-label="Hope Theory assistant"
        >
          <header className="flex items-start justify-between gap-3 border-b border-line px-4 py-3">
            <div>
              <p className="font-mono text-xs tracking-widest text-gold uppercase">Assistant</p>
              <h2 className="font-display text-xl">Hope Theory</h2>
            </div>
            <button
              type="button"
              className="inline-flex min-h-11 min-w-11 items-center justify-center text-paper"
              onClick={() => setOpen(false)}
              aria-label="Close the assistant"
            >
              <X aria-hidden="true" />
            </button>
          </header>
          <div className="flex-1 space-y-3 overflow-y-auto px-4 py-4" aria-live="polite">
            <p className="text-sm leading-relaxed text-muted">{INTRO}</p>
            {turns.map((turn, index) => (
              <p
                key={`${turn.role}-${index}`}
                className={turn.role === "you" ? "text-sm text-paper" : "text-sm leading-relaxed text-muted"}
              >
                <span className="font-mono text-xs tracking-widest text-quiet uppercase">
                  {turn.role === "you" ? "You" : "Studio"}
                </span>
                <span className="mt-1 block">{turn.text}</span>
              </p>
            ))}
            {turns.length === 0 ? (
              <ul className="flex flex-col gap-2">
                {ASSISTANT_CHIPS.map((chip) => (
                  <li key={chip}>
                    <button
                      type="button"
                      className="min-h-11 w-full border border-line px-3 text-left text-sm text-paper hover:border-gold"
                      onClick={() => ask(chip)}
                    >
                      {chip}
                    </button>
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
          <form
            className="border-t border-line p-3"
            onSubmit={(event) => {
              event.preventDefault();
              ask(draft);
            }}
          >
            <label className="sr-only" htmlFor="assistant-input">
              Your message
            </label>
            <div className="flex gap-2">
              <input
                id="assistant-input"
                ref={inputRef}
                value={draft}
                onChange={(event) => setDraft(event.target.value)}
                maxLength={1000}
                placeholder="Ask about the work"
                className="min-h-11 w-full border border-line bg-ink px-3 text-sm text-paper placeholder:text-quiet"
              />
              <button type="submit" className="min-h-11 bg-gold px-3 text-sm font-medium text-ink">
                Send
              </button>
            </div>
            <p className="mt-2 text-xs leading-relaxed text-quiet">
              Runs in your browser. Nothing is sent to a server. Continue on WhatsApp {WHATSAPP_DISPLAY} if you
              would rather talk to a person.
            </p>
            <a
              className="mt-1 inline-flex min-h-11 items-center text-xs text-gold"
              href={whatsappHref("Hi Hope Theory Labs, the website assistant couldn't answer my question.")}
            >
              Message us on WhatsApp
            </a>
          </form>
        </section>
      ) : null}
      <button
        type="button"
        className="inline-flex min-h-11 items-center gap-2 border border-line bg-ink px-4 text-sm text-paper"
        aria-expanded={open}
        onClick={() => {
          setOpen((value) => !value);
          window.setTimeout(() => inputRef.current?.focus(), 0);
        }}
      >
        <MessageSquare className="size-4 text-gold" aria-hidden="true" />
        {open ? "Hide assistant" : "Ask the studio"}
      </button>
    </div>
  );
}
