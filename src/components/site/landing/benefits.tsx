"use client";

import {
  BellRing,
  ChartColumn,
  FlaskConical,
  Package,
  ReceiptText,
  Repeat,
  Sparkles,
  TrendingUp,
  Users,
} from "lucide-react";
import type { MouseEvent } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/site/reveal";
import { useDemo, type DemoTab } from "./demo/demo-context";
import {
  InventoryTable,
  RevenueChartCard,
  StatCards,
  SuggestionCard,
  TrendingFlavorsCard,
} from "./demo/cards";
import { inventory } from "./demo/mock-data";
import type { FlavorTrend } from "@/lib/data";

const mapOrigin = process.env.NEXT_PUBLIC_MAP_ORIGIN ?? "http://localhost:3001";

type Chip = { icon: typeof Package; label: string };

const SECTIONS: {
  id: string;
  chips: Chip[];
  title: string;
  body: string;
  cta: string;
  tab: DemoTab;
  stage: string;
  figure: (flavors: FlavorTrend[]) => React.ReactNode;
}[] = [
  {
    id: "numbers",
    chips: [
      { icon: ChartColumn, label: "Revenue" },
      { icon: ReceiptText, label: "Orders" },
      { icon: TrendingUp, label: "Best sellers" },
    ],
    title: "Know where your money comes from",
    body: "Revenue by day, item, and hour. See what sells, when it sells, and what to bake more of.",
    cta: "Explore the dashboard",
    tab: "overview",
    stage: "bg-blue",
    figure: () => (
      <div className="flex flex-col gap-4">
        <StatCards compact />
        <RevenueChartCard />
      </div>
    ),
  },
  {
    id: "stock",
    chips: [
      { icon: Package, label: "Inventory" },
      { icon: Repeat, label: "Reorders" },
      { icon: BellRing, label: "Alerts" },
    ],
    title: "Never run out mid-rush",
    body: "Inventory tracks every sale and tells you what to order before it's gone.",
    cta: "Explore inventory",
    tab: "inventory",
    stage: "bg-main",
    figure: () => (
      <div className="flex flex-col gap-4">
        <SuggestionCard />
        <InventoryTable rows={inventory.slice(0, 4)} />
      </div>
    ),
  },
  {
    id: "flavors",
    chips: [
      { icon: FlaskConical, label: "Flavor trends" },
      { icon: Users, label: "Network" },
      { icon: Sparkles, label: "Experiments" },
    ],
    title: "Invent the next hit",
    body: "See which flavors are climbing across every shop on Uncharted, then make yours first.",
    cta: "Explore Flavor Lab",
    tab: "flavors",
    stage: "bg-sand-deep",
    figure: (flavors) => <TrendingFlavorsCard flavors={flavors} />,
  },
];

export function Benefits() {
  const { showInDemo, flavors } = useDemo();
  const explore = (tab: DemoTab) => (event: MouseEvent) => {
    if (showInDemo(tab)) event.preventDefault();
  };
  return (
    <div className="mx-auto mt-12 w-full max-w-7xl px-5 sm:mt-20 sm:px-8">
      {SECTIONS.map((s) => (
        <section
          key={s.id}
          aria-labelledby={`${s.id}-heading`}
          className="grid items-center gap-10 py-16 sm:py-24 lg:grid-cols-[1fr_2fr] lg:gap-16"
        >
          <Reveal className="max-w-sm">
            <div className="mb-5 flex flex-wrap gap-1.5">
              {s.chips.map((chip) => (
                <Badge
                  key={chip.label}
                  variant="neutral"
                  className="gap-1 font-mono text-[11px] font-bold"
                >
                  <chip.icon data-icon="inline-start" />
                  {chip.label}
                </Badge>
              ))}
            </div>
            <h2
              id={`${s.id}-heading`}
              className="font-display text-4xl leading-[1.0] font-extrabold tracking-tight text-balance sm:text-5xl"
            >
              {s.title}
            </h2>
            <p className="mt-4 text-base leading-relaxed font-medium text-muted-foreground text-pretty">
              {s.body}
            </p>
            <Button
              render={
                <a
                  href={`${mapOrigin}/dashboard`}
                  onClick={explore(s.tab)}
                />
              }
              className="mt-6"
            >
              {s.cta}
            </Button>
          </Reveal>
          <Reveal delay={120}>
            <div
              className={`rounded-base border-2 border-border p-6 shadow-[8px_8px_0_0_var(--border)] sm:p-10 ${s.stage}`}
            >
              {s.figure(flavors)}
            </div>
          </Reveal>
        </section>
      ))}
    </div>
  );
}
