"use client";

import { cn } from "@/lib/utils";
import { useDemo, type DemoTab } from "./demo-context";
import { DemoSidebar } from "./demo-sidebar";
import { FlavorsTab } from "./tabs/flavors-tab";
import { InventoryTab } from "./tabs/inventory-tab";
import { OrdersTab } from "./tabs/orders-tab";
import { OverviewTab } from "./tabs/overview-tab";

const TITLES: Record<DemoTab, string> = {
  overview: "Overview",
  orders: "Orders",
  inventory: "Inventory",
  flavors: "Flavor Lab",
};

export function DemoShell({ compact }: { compact?: boolean }) {
  const { tab } = useDemo();
  return (
    <div
      className={cn(
        "flex w-full bg-sand-deep",
        compact ? "h-[420px]" : "h-[640px]"
      )}
    >
      <div
        className={cn(
          "hidden border-r-2 border-border md:block",
          "animate-in fade-in slide-in-from-top-2 duration-700 fill-mode-both [animation-delay:700ms] motion-reduce:animate-none"
        )}
      >
        <DemoSidebar />
      </div>
      <div
        className={cn(
          "m-3 ml-0 flex min-w-0 flex-1 flex-col overflow-hidden rounded-base border-2 border-border bg-secondary-background shadow-shadow max-md:ml-3",
          "animate-in fade-in slide-in-from-top-2 duration-700 fill-mode-both [animation-delay:900ms] motion-reduce:animate-none"
        )}
      >
        <div className="flex items-center justify-between gap-3 border-b-2 border-border px-5 py-3">
          <div className="flex items-baseline gap-3">
            <h3 className="font-display text-xl font-extrabold">{TITLES[tab]}</h3>
            <span className="hidden font-mono text-[11px] font-bold text-muted-foreground sm:inline">
              map.uncharted.sh/dashboard
            </span>
          </div>
          <span className="rounded-base border-2 border-border bg-background px-2 py-0.5 font-mono text-xs font-bold">
            Last 7 days
          </span>
        </div>
        <div className="min-h-0 flex-1 overflow-y-auto">
          {tab === "overview" && <OverviewTab />}
          {tab === "orders" && <OrdersTab />}
          {tab === "inventory" && <InventoryTab />}
          {tab === "flavors" && <FlavorsTab />}
        </div>
      </div>
    </div>
  );
}
