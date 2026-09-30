import { FlaskConical, Package, TrendingUp } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Reveal } from "@/components/site/reveal";
import { data } from "@/lib/data";

const mapOrigin = process.env.NEXT_PUBLIC_MAP_ORIGIN ?? "http://localhost:3001";

const steps = [
  {
    n: "01",
    title: "Claim your shop",
    body: "Sign up, tell us your hours and pickup details. Ten minutes and your storefront is live.",
  },
  {
    n: "02",
    title: "Put your menu on Uncharted",
    body: "Drop in your items — cakes, cookies, scoops, seasonal specials. Update availability anytime.",
  },
  {
    n: "03",
    title: "Watch your numbers",
    body: "Every sale becomes an answer: best sellers, what to reorder, and which flavor to try next.",
  },
];

const features = [
  {
    icon: TrendingUp,
    title: "Know your numbers",
    body: "Revenue by day, item, and hour — no spreadsheets, no guessing.",
  },
  {
    icon: Package,
    title: "Never run out",
    body: "Inventory tracks sales and tells you what to order before it's gone.",
  },
  {
    icon: FlaskConical,
    title: "Invent the next hit",
    body: "See what flavors are trending across the network — then make yours.",
  },
];

const stats = [
  { label: "This week", value: "$2,846" },
  { label: "Orders", value: "214" },
  { label: "Best seller", value: "Brown butter" },
];

const bars = [34, 48, 41, 62, 58, 74, 90];

const lowStock = [
  { item: "Tahini cookie dough", left: "6 left" },
  { item: "Vanilla bean base", left: "1 tub" },
  { item: "Cake boxes (6 in.)", left: "9 left" },
];

export default async function Home() {
  const flavors = await data.getFlavorTrends(12);

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative overflow-hidden px-5 pt-20 pb-16 md:pt-28">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,var(--color-vanilla),transparent)]"
        />
        <div className="relative mx-auto flex max-w-4xl flex-col items-center text-center">
          <Reveal>
            <Badge variant="secondary" className="gap-2 font-mono text-[11px] tracking-wide uppercase">
              <span className="size-1.5 animate-pulse rounded-full bg-matcha" />
              Now onboarding new shops
            </Badge>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-6 font-display text-5xl leading-[0.95] font-medium tracking-tight text-balance sm:text-6xl md:text-8xl">
              Sweet shops run on <span className="text-caramel">Uncharted.</span>
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-6 max-w-xl text-lg text-balance text-muted-foreground">
              One platform for independent bakeries, scoop shops, and candy makers —
              orders, inventory, and the flavor trends your customers are already
              telling you about.
            </p>
          </Reveal>
          <Reveal delay={240}>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a href={`${mapOrigin}/dashboard`} className={buttonVariants({ size: "lg" })}>
                See the demo →
              </a>
              <a
                href={`${mapOrigin}/signup`}
                className={buttonVariants({ variant: "outline", size: "lg" })}
              >
                Claim your shop
              </a>
            </div>
          </Reveal>
        </div>

        {/* Product visual */}
        <Reveal delay={320} className="relative mx-auto mt-16 max-w-4xl">
          <Card className="overflow-hidden py-0">
            <div className="flex items-center gap-2 border-b border-border bg-muted px-4 py-2.5">
              <span className="size-2.5 rounded-full bg-strawberry/70" />
              <span className="size-2.5 rounded-full bg-caramel/70" />
              <span className="size-2.5 rounded-full bg-matcha/70" />
              <span className="ml-3 font-mono text-[11px] text-muted-foreground">
                map.uncharted.sh/dashboard
              </span>
            </div>
            <div className="grid gap-6 p-5 md:grid-cols-[1fr_220px] md:p-7">
              <div>
                <p className="font-mono text-[11px] tracking-wide uppercase text-muted-foreground">
                  Butter &amp; Rye · this week
                </p>
                <div className="mt-3 grid grid-cols-3 gap-3">
                  {stats.map((s) => (
                    <div key={s.label} className="rounded-lg border border-border p-3">
                      <p className="font-mono text-[10px] tracking-wide uppercase text-muted-foreground">
                        {s.label}
                      </p>
                      <p className="mt-1 font-display text-lg font-medium">{s.value}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-4 flex h-24 items-end gap-2">
                  {bars.map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-t-sm bg-caramel/80"
                      style={{ height: `${h}%` }}
                    />
                  ))}
                </div>
              </div>
              <div className="rounded-lg border border-border p-4">
                <p className="font-mono text-[10px] tracking-wide uppercase text-muted-foreground">
                  Reorder soon
                </p>
                <ul className="mt-3 flex flex-col gap-2.5">
                  {lowStock.map((s) => (
                    <li key={s.item} className="flex items-center justify-between gap-2 text-sm">
                      <span className="truncate">{s.item}</span>
                      <Badge variant="outline" className="font-mono text-[10px]">
                        {s.left}
                      </Badge>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Card>
        </Reveal>
      </section>

      {/* Flavor marquee */}
      <section className="overflow-hidden border-y border-border bg-foreground py-3">
        <div className="anim-marquee flex w-max gap-8 font-mono text-xs tracking-[0.2em] whitespace-nowrap uppercase text-background">
          {[0, 1].map((copy) => (
            <div key={copy} className="flex gap-8">
              {flavors.map((f) => (
                <span key={`${copy}-${f.tag}`} className="flex items-center gap-8">
                  <span>{f.tag}</span>
                  <span className="text-caramel">·</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="mx-auto w-full max-w-6xl px-5 py-20 md:py-28">
        <Reveal className="max-w-2xl">
          <p className="font-mono text-xs tracking-wide uppercase text-caramel">For owners</p>
          <h2 className="mt-3 font-display text-4xl font-medium tracking-tight md:text-5xl">
            Running your shop shouldn&apos;t be guesswork
          </h2>
        </Reveal>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {steps.map((step, i) => (
            <Reveal key={step.n} delay={i * 100}>
              <Card className="h-full">
                <CardHeader>
                  <span className="font-mono text-xs text-caramel">{step.n}</span>
                  <CardTitle className="font-display text-xl">{step.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">{step.body}</CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="border-y border-border bg-secondary/40">
        <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 py-20 md:grid-cols-3 md:py-28">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={i * 100} className="flex flex-col gap-3">
              <f.icon className="size-5 text-caramel" strokeWidth={1.75} />
              <h3 className="font-display text-xl font-medium">{f.title}</h3>
              <p className="text-sm text-muted-foreground">{f.body}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Network flavors */}
      <section className="mx-auto w-full max-w-6xl px-5 py-20 md:py-28">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="font-mono text-xs tracking-wide uppercase text-caramel">The network</p>
          <h2 className="mt-3 font-display text-4xl font-medium tracking-tight md:text-5xl">
            See what no single shop can see
          </h2>
          <p className="mt-4 text-muted-foreground">
            Across every shop on Uncharted, flavor demand is visible in real time.
            Pistachio is up 37% this week. Ube is climbing. Your next flavor isn&apos;t
            a guess — it&apos;s in the data.
          </p>
        </Reveal>
        <Reveal delay={120} className="mt-8 flex flex-wrap justify-center gap-2">
          {flavors.map((f) => (
            <Badge
              key={f.tag}
              variant="outline"
              className="gap-1.5 font-mono text-xs tracking-wide normal-case"
            >
              {f.tag}
              <span className={f.wowPct >= 0 ? "text-matcha" : "text-strawberry"}>
                {f.wowPct > 0 ? "+" : ""}
                {f.wowPct}%
              </span>
            </Badge>
          ))}
        </Reveal>
      </section>

      {/* CTA */}
      <section className="border-t border-border">
        <div className="mx-auto flex max-w-3xl flex-col items-center px-5 py-24 text-center md:py-32">
          <Reveal>
            <h2 className="font-display text-4xl font-medium tracking-tight text-balance md:text-6xl">
              Put your shop on the map.
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="mt-5 max-w-md text-muted-foreground">
              Any bakery, scoop shop, or candy maker can join. Free while we&apos;re
              building.
            </p>
          </Reveal>
          <Reveal delay={180}>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a href={`${mapOrigin}/signup`} className={buttonVariants({ size: "lg" })}>
                Claim your shop
              </a>
              <a
                href={`${mapOrigin}/dashboard`}
                className={buttonVariants({ variant: "outline", size: "lg" })}
              >
                Peek at the demo first →
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
