"use client";

import { Button } from "@/components/ui/button";
import Marquee from "@/components/ui/marquee";
import { cn } from "@/lib/utils";
import { useDemo } from "./demo/demo-context";
import { DemoShell } from "./demo/demo-shell";

const mapOrigin = process.env.NEXT_PUBLIC_MAP_ORIGIN ?? "http://localhost:3001";

const rise =
  "animate-in fade-in slide-in-from-bottom-2 duration-700 fill-mode-both motion-reduce:animate-none";

function DemoFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="overflow-hidden rounded-base border-2 border-border bg-secondary-background shadow-[8px_8px_0_0_var(--border)]">
      {children}
    </div>
  );
}

const CATEGORIES = [
  "Bakeries",
  "Scoop shops",
  "Patisseries",
  "Candy makers",
  "Chocolatiers",
  "Donut shops",
  "Cake studios",
  "Boba & dessert bars",
].map((c) => (
  <span key={c} className="inline-flex items-center gap-4">
    {c}
    <span className="text-main">★</span>
  </span>
));

export function Hero() {
  const { showInDemo } = useDemo();
  return (
    <section className="relative isolate w-full overflow-x-clip pt-10">
      <div className="mx-auto flex max-w-7xl items-end justify-between px-5 sm:px-8">
        <div className="flex-col">
          <span
            className={cn(
              "inline-block -rotate-2 rounded-base border-2 border-border bg-blue px-3 py-1 font-mono text-xs font-bold tracking-wide uppercase shadow-shadow",
              rise
            )}
          >
            Now onboarding sweet shops
          </span>
          <h1
            className={cn(
              "mt-6 font-display text-5xl leading-[0.95] font-extrabold tracking-tight text-balance md:text-7xl",
              rise,
              "[animation-delay:150ms]"
            )}
          >
            Know what your{" "}
            <span className="bg-main px-2 text-main-foreground">shop</span> is
            doing
          </h1>
          <p
            className={cn(
              "mt-6 max-w-md text-lg font-medium text-muted-foreground text-pretty",
              rise,
              "[animation-delay:250ms]"
            )}
          >
            Orders, inventory, and the flavor trends your customers are already
            telling you about. One dashboard, built for independent sweet shops.
          </p>
          <div className="mt-8 flex gap-3">
            <Button
              render={<a href={`${mapOrigin}/signup`} />}
              className={cn(rise, "[animation-delay:350ms]")}
            >
              Claim your shop
            </Button>
            <Button
              render={
                <a
                  href={`${mapOrigin}/dashboard`}
                  onClick={(e) => {
                    if (showInDemo("overview")) e.preventDefault();
                  }}
                />
              }
              variant="neutral"
              className={cn(rise, "[animation-delay:450ms]")}
            >
              See the demo
            </Button>
          </div>
        </div>
        <div
          className={cn(
            "hidden items-center gap-2 border-l-4 border-border pl-3 text-sm font-bold text-muted-foreground md:flex",
            rise,
            "[animation-delay:600ms]"
          )}
        >
          Built for bakeries, scoop shops &amp; candy makers
        </div>
      </div>

      <div
        id="demo"
        className="relative mx-auto mt-20 hidden w-full max-w-[1500px] px-5 sm:px-16 md:block"
      >
        <div className="relative animate-in fade-in zoom-in-95 slide-in-from-bottom-4 duration-1000 fill-mode-both [animation-delay:500ms] motion-reduce:animate-none">
          <DemoFrame>
            <DemoShell />
          </DemoFrame>
        </div>
      </div>

      <div className="mt-12 w-[150%] pl-5 sm:pl-8 md:hidden">
        <DemoFrame>
          <DemoShell compact />
        </DemoFrame>
      </div>

      <div className="relative left-1/2 mt-18 w-screen -translate-x-1/2 border-y-4 border-border bg-foreground">
        <Marquee
          items={CATEGORIES}
          className="border-0 bg-transparent text-background"
          itemClassName="font-display text-xl font-extrabold uppercase"
          trackClassName="py-3"
        />
      </div>
    </section>
  );
}
