"use client";

import { ArrowRight, Square } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { answer } from "./knowledge";

type Phase = "idle" | "thinking" | "streaming" | "done";

export function AskUncharted() {
  const [input, setInput] = useState("");
  const [phase, setPhase] = useState<Phase>("idle");
  const [shown, setShown] = useState("");
  const timers = useRef<{ timeout?: number; interval?: number }>({});
  const busy = phase === "thinking" || phase === "streaming";

  const clearTimers = () => {
    if (timers.current.timeout) clearTimeout(timers.current.timeout);
    if (timers.current.interval) clearInterval(timers.current.interval);
    timers.current = {};
  };

  useEffect(() => clearTimers, []);

  const submit = (q: string) => {
    clearTimers();
    setShown("");
    setPhase("thinking");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const full = answer(q);
    timers.current.timeout = window.setTimeout(
      () => {
        if (reduced) {
          setShown(full);
          setPhase("done");
          return;
        }
        setPhase("streaming");
        const words = full.split(" ");
        let i = 0;
        timers.current.interval = window.setInterval(() => {
          i += 1;
          setShown(words.slice(0, i).join(" "));
          if (i >= words.length) {
            clearTimers();
            setPhase("done");
          }
        }, 28);
      },
      500 + Math.random() * 300
    );
  };

  const stop = () => {
    clearTimers();
    setPhase("done");
  };

  return (
    <div>
      <form
        className="flex items-center gap-3 rounded-base border-2 border-border bg-secondary-background px-4 py-3 shadow-shadow"
        onSubmit={(e) => {
          e.preventDefault();
          const q = input.trim();
          if (!q || busy) return;
          submit(q);
        }}
      >
        <label htmlFor="ask-uncharted" className="sr-only">
          Ask a question about Uncharted
        </label>
        <input
          id="ask-uncharted"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask anything else"
          maxLength={300}
          autoComplete="off"
          className="min-w-0 flex-1 bg-transparent text-base font-medium outline-none placeholder:text-muted-foreground"
        />
        {busy ? (
          <Button
            type="button"
            size="icon-sm"
            variant="neutral"
            aria-label="Stop"
            onClick={stop}
          >
            <Square className="fill-current" />
          </Button>
        ) : (
          <Button
            type="submit"
            size="icon-sm"
            variant={input.trim() ? "default" : "neutral"}
            aria-label="Send"
            disabled={!input.trim()}
          >
            <ArrowRight strokeWidth={3} />
          </Button>
        )}
      </form>

      {phase !== "idle" && (
        <div className="mt-4 min-h-32 rounded-base border-2 border-border bg-sand-deep p-4 text-[15px] leading-relaxed font-medium text-muted-foreground">
          {phase === "thinking" && (
            <span className="bg-[linear-gradient(90deg,var(--color-muted-foreground),var(--color-foreground),var(--color-muted-foreground))] bg-[length:200%_100%] bg-clip-text text-transparent animate-[shimmer_1.6s_linear_infinite]">
              Thinking…
            </span>
          )}
          {shown && <p>{shown}</p>}
        </div>
      )}
    </div>
  );
}
