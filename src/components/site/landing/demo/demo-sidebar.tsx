"use client";

import {
  FlaskConical,
  LayoutDashboard,
  Package,
  ReceiptText,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useDemo, type DemoTab } from "./demo-context";
import { SHOP_NAME } from "./mock-data";

const NAV: { tab: DemoTab; label: string; icon: typeof LayoutDashboard }[] = [
  { tab: "overview", label: "Overview", icon: LayoutDashboard },
  { tab: "orders", label: "Orders", icon: ReceiptText },
  { tab: "inventory", label: "Inventory", icon: Package },
  { tab: "flavors", label: "Flavor Lab", icon: FlaskConical },
];

export function DemoSidebar() {
  const { tab, setTab } = useDemo();
  return (
    <div className="flex h-full w-56 shrink-0 flex-col gap-2 p-3">
      <div className="mb-4 flex items-center gap-2 px-1 pt-1">
        <span className="inline-block size-5 border-2 border-border bg-main" />
        <span className="font-display text-base font-extrabold">{SHOP_NAME}</span>
      </div>
      {NAV.map((item) => (
        <button
          key={item.tab}
          type="button"
          onClick={() => setTab(item.tab)}
          className={cn(
            "flex w-full items-center gap-2 rounded-base border-2 border-transparent px-3 py-2 text-left text-sm font-bold transition-colors",
            tab === item.tab
              ? "border-border bg-main text-main-foreground shadow-shadow"
              : "hover:border-border hover:bg-secondary-background"
          )}
        >
          <item.icon className="size-4" strokeWidth={2.25} />
          {item.label}
        </button>
      ))}
    </div>
  );
}
