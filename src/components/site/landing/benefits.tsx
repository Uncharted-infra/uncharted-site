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
import { Button } from "@/components/ui/button";
import { FeatureRow, type FeatureChip } from "@/components/site/feature-row";
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

const SECTIONS: {
  id: string;
  chips: FeatureChip[];
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
        <FeatureRow
          key={s.id}
          id={s.id}
          chips={s.chips}
          title={s.title}
          body={s.body}
          stage={s.stage}
          action={
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
          }
        >
          {s.figure(flavors)}
        </FeatureRow>
      ))}
    </div>
  );
}
