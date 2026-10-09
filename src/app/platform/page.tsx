import {
  BellRing,
  ChartColumn,
  Clock,
  FlaskConical,
  Package,
  ReceiptText,
  Repeat,
  ShieldCheck,
  Store,
  TrendingUp,
  Users,
} from "lucide-react";
import type { Metadata } from "next";
import { FeatureRow } from "@/components/site/feature-row";
import { PageHeader } from "@/components/site/page-header";
import { Reveal } from "@/components/site/reveal";
import { CompactCta } from "@/components/site/landing/compact-cta";
import {
  InventoryTable,
  OrdersTable,
  RevenueChartCard,
  StatCards,
  SuggestedCombosCard,
  SuggestionCard,
  TopItemsCard,
  TrendingFlavorsCard,
} from "@/components/site/landing/demo/cards";
import { inventory, orders } from "@/components/site/landing/demo/mock-data";
import { Card, CardContent } from "@/components/ui/card";
import { data } from "@/lib/data";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Platform",
  description:
    "Storefront, orders, inventory, and flavor trends for independent sweet shops — in one dashboard.",
};

const MODULES = [
  { href: "#overview", icon: ChartColumn, name: "Overview", line: "Revenue, orders, best sellers", fill: "bg-main text-main-foreground" },
  { href: "#orders", icon: ReceiptText, name: "Orders", line: "Every pickup, in order", fill: "bg-blue" },
  { href: "#inventory", icon: Package, name: "Inventory", line: "Stock that counts itself", fill: "bg-secondary-background" },
  { href: "#flavor-lab", icon: FlaskConical, name: "Flavor Lab", line: "What's climbing next", fill: "bg-sand-deep" },
];

const STEPS = [
  { n: "01", title: "Sign up", body: "Tell us your hours and pickup details.", fill: "bg-main text-main-foreground" },
  { n: "02", title: "Add your menu", body: "Your storefront goes live with your menu, hours, and pickup info.", fill: "bg-blue" },
  { n: "03", title: "Watch it chart", body: "Orders, inventory, and trends fill in as you sell.", fill: "bg-secondary-background" },
];

export default async function PlatformPage() {
  const flavors = await data.getFlavorTrends(6);
  return (
    <div className="flex flex-col">
      <PageHeader
        eyebrow="The platform"
        title={
          <>
            Everything your{" "}
            <span className="bg-blue px-2">shop</span> runs on
          </>
        }
        body="Storefront, orders, inventory, and flavor trends — built to work together, so every sale teaches you something."
      />

      <div className="mx-auto mt-16 grid w-full max-w-7xl grid-cols-2 gap-3 px-5 sm:px-8 lg:grid-cols-4 lg:gap-4">
        {MODULES.map((m, i) => (
          <Reveal key={m.href} delay={i * 80} className="h-full">
            <a href={m.href} className="group block h-full">
              <Card
                className={cn(
                  "h-full transition-transform group-hover:translate-x-boxShadowX group-hover:translate-y-boxShadowY group-hover:shadow-none",
                  m.fill
                )}
              >
                <CardContent>
                  <m.icon className="size-6" strokeWidth={2.5} />
                  <p className="mt-4 font-display text-xl font-extrabold">{m.name}</p>
                  <p className="mt-1 text-sm font-medium opacity-80">{m.line}</p>
                </CardContent>
              </Card>
            </a>
          </Reveal>
        ))}
      </div>

      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        <FeatureRow
          id="overview"
          chips={[
            { icon: ChartColumn, label: "Revenue" },
            { icon: TrendingUp, label: "Best sellers" },
          ]}
          title="See the whole week at a glance"
          body="Revenue, orders, average ticket, and best sellers on one screen — so you know what to bake more of before the weekend."
          stage="bg-blue"
        >
          <div className="flex flex-col gap-4">
            <StatCards />
            <div className="grid gap-4 md:grid-cols-[3fr_2fr]">
              <RevenueChartCard />
              <TopItemsCard />
            </div>
          </div>
        </FeatureRow>

        <FeatureRow
          id="orders"
          reverse
          chips={[
            { icon: Store, label: "Storefront" },
            { icon: ReceiptText, label: "Orders" },
            { icon: Clock, label: "Pickup times" },
          ]}
          title="Every order, in pickup order"
          body="Customers order from your storefront and pick up at your counter. See what's ready, what's in the oven, and who's coming next."
          stage="bg-sand-deep"
        >
          <OrdersTable rows={orders.slice(0, 6)} />
        </FeatureRow>

        <FeatureRow
          id="inventory"
          chips={[
            { icon: Package, label: "Inventory" },
            { icon: Repeat, label: "Reorders" },
            { icon: BellRing, label: "Alerts" },
          ]}
          title="Stock that counts itself"
          body="Every sale decrements the ingredients behind it. Uncharted watches how fast you use each one and tells you what to reorder, and when."
          stage="bg-main"
        >
          <div className="flex flex-col gap-4">
            <SuggestionCard />
            <InventoryTable rows={inventory.slice(0, 5)} />
          </div>
        </FeatureRow>

        <FeatureRow
          id="flavor-lab"
          reverse
          chips={[
            { icon: FlaskConical, label: "Flavor trends" },
            { icon: Users, label: "Network" },
            { icon: ShieldCheck, label: "Private" },
          ]}
          title="Know what's next before it's obvious"
          body="Anonymous, aggregated demand across every shop on Uncharted. Your numbers stay yours — no shop ever sees another shop's sales."
          stage="bg-blue"
        >
          <div className="grid gap-4 md:grid-cols-[2fr_1fr]">
            <TrendingFlavorsCard flavors={flavors} />
            <SuggestedCombosCard />
          </div>
        </FeatureRow>
      </div>

      <section className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 sm:py-24">
        <Reveal>
          <h2 className="font-display text-4xl font-extrabold tracking-tight text-balance sm:text-5xl">
            Live in about ten minutes
          </h2>
        </Reveal>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {STEPS.map((s, i) => (
            <Reveal key={s.n} delay={i * 100} className="h-full">
              <Card className={cn("h-full", s.fill)}>
                <CardContent>
                  <span className="font-mono text-sm font-bold">{s.n}</span>
                  <p className="mt-6 font-display text-2xl font-extrabold">{s.title}</p>
                  <p className="mt-2 font-medium opacity-80">{s.body}</p>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </section>

      <div className="h-8 sm:h-12" />
      <CompactCta />
    </div>
  );
}
