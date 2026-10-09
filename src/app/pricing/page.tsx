import { Check } from "lucide-react";
import type { Metadata } from "next";
import { PageHeader } from "@/components/site/page-header";
import { Reveal } from "@/components/site/reveal";
import { CompactCta } from "@/components/site/landing/compact-cta";
import { Faq, type FaqItem } from "@/components/site/landing/faq";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Pricing",
  description: "Uncharted is free while we're building. Early shops keep their terms.",
};

const mapOrigin = process.env.NEXT_PUBLIC_MAP_ORIGIN ?? "http://localhost:3001";

const INCLUDED = [
  "Storefront with your menu, hours, and pickup details",
  "Orders dashboard with pickup times",
  "Inventory tracking and reorder alerts",
  "Flavor Lab trends from across the network",
  "A human on email at hello@uncharted.sh",
];

const PROMISES = [
  {
    title: "Pricing announced ahead of time",
    body: "No surprise bills. You'll hear from us before anything changes.",
  },
  {
    title: "Early shops keep their terms",
    body: "The deal you join on is the deal you keep.",
  },
  {
    title: "Built with owners",
    body: "The roadmap follows what owners actually ask for.",
  },
];

const ROADMAP = ["POS integrations", "Stripe payouts", "Multiple locations", "Staff accounts"];

const PRICING_FAQS: FaqItem[] = [
  {
    q: "What does it cost?",
    a: "Nothing while we're building. Every shop gets the full platform for free.",
  },
  {
    q: "What happens when pricing launches?",
    a: "We'll announce it before anything changes, and shops that joined early keep their terms.",
  },
  {
    q: "Is anything held back on the free plan?",
    a: "No. Storefront, orders, inventory, and Flavor Lab are all included.",
  },
  {
    q: "Do I need a website already?",
    a: "No. Signing up gives you a storefront with your menu, hours, and pickup details in about ten minutes.",
  },
  {
    q: "Can I use my own POS?",
    a: "You can start with Uncharted's ordering today. POS integrations are on the roadmap — tell us what you use when you sign up.",
  },
];

export default function PricingPage() {
  return (
    <div className="flex flex-col">
      <PageHeader
        eyebrow="Pricing"
        title={
          <>
            Free while we <span className="bg-main px-2 text-main-foreground">build</span>
          </>
        }
        body="Every shop gets the full platform. We'll announce pricing before anything changes, and early shops keep their terms."
      />

      <section className="mx-auto mt-16 grid w-full max-w-7xl gap-6 px-5 sm:px-8 lg:grid-cols-[3fr_2fr]">
        <Reveal className="h-full">
          <div className="flex h-full flex-col overflow-hidden rounded-base border-2 border-border bg-secondary-background shadow-[8px_8px_0_0_var(--border)]">
            <div className="flex items-center justify-between border-b-2 border-border bg-main px-6 py-3 text-main-foreground">
              <span className="font-mono text-xs font-bold tracking-wide uppercase">
                Early access
              </span>
              <Badge variant="neutral" className="font-mono font-bold">
                Every feature
              </Badge>
            </div>
            <div className="flex flex-1 flex-col p-6 sm:p-10">
              <p className="flex items-baseline gap-2">
                <span className="font-display text-7xl font-extrabold tracking-tight sm:text-8xl">
                  $0
                </span>
                <span className="font-mono text-sm font-bold text-muted-foreground">
                  / month
                </span>
              </p>
              <p className="mt-2 font-medium text-muted-foreground">
                While we&apos;re building. No tiers, no feature gates.
              </p>
              <ul className="mt-8 flex flex-col gap-3">
                {INCLUDED.map((item) => (
                  <li key={item} className="flex items-start gap-3 font-medium">
                    <span className="mt-0.5 inline-flex size-5 shrink-0 items-center justify-center rounded-base border-2 border-border bg-blue">
                      <Check className="size-3" strokeWidth={4} />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <Button
                render={<a href={`${mapOrigin}/signup`} />}
                size="lg"
                className="mt-10 w-full text-base sm:w-fit"
              >
                Sign up
              </Button>
            </div>
          </div>
        </Reveal>

        <div className="flex flex-col gap-6">
          <Reveal delay={100}>
            <Card className="bg-blue">
              <CardHeader>
                <CardTitle className="font-mono text-[11px] font-bold tracking-wide uppercase">
                  The early shop promise
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="flex flex-col gap-5">
                  {PROMISES.map((p) => (
                    <li key={p.title}>
                      <p className="font-display text-lg font-extrabold">{p.title}</p>
                      <p className="mt-0.5 text-sm font-medium">{p.body}</p>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </Reveal>
          <Reveal delay={200}>
            <Card className="bg-sand-deep">
              <CardHeader>
                <CardTitle className="font-mono text-[11px] font-bold tracking-wide uppercase">
                  On the roadmap
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2">
                {ROADMAP.map((r) => (
                  <Badge key={r} variant="neutral" className="font-mono font-bold">
                    {r}
                  </Badge>
                ))}
              </CardContent>
            </Card>
          </Reveal>
        </div>
      </section>

      <Faq items={PRICING_FAQS} title="Pricing questions" />

      <div className="h-8 sm:h-12" />
      <CompactCta />
    </div>
  );
}
