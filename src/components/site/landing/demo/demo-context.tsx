"use client";

import { createContext, useContext, useMemo, useState } from "react";
import type { FlavorTrend } from "@/lib/data";

export type DemoTab = "overview" | "orders" | "inventory" | "flavors";

type DemoContextValue = {
  tab: DemoTab;
  setTab: (tab: DemoTab) => void;
  flavors: FlavorTrend[];
  showInDemo: (tab: DemoTab) => boolean;
};

const DemoContext = createContext<DemoContextValue | null>(null);

export function DemoProvider({
  flavors,
  children,
}: {
  flavors: FlavorTrend[];
  children: React.ReactNode;
}) {
  const [tab, setTab] = useState<DemoTab>("overview");

  const value = useMemo<DemoContextValue>(
    () => ({
      tab,
      setTab,
      flavors,
      showInDemo(next) {
        setTab(next);
        if (
          typeof window !== "undefined" &&
          window.matchMedia("(min-width: 768px)").matches
        ) {
          document
            .getElementById("demo")
            ?.scrollIntoView({ behavior: "smooth", block: "start" });
          return true;
        }
        return false;
      },
    }),
    [tab, flavors]
  );

  return <DemoContext.Provider value={value}>{children}</DemoContext.Provider>;
}

export function useDemo() {
  const ctx = useContext(DemoContext);
  if (!ctx) throw new Error("useDemo must be used within <DemoProvider>");
  return ctx;
}
