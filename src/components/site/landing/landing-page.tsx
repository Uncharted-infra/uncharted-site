"use client";

import type { FlavorTrend } from "@/lib/data";
import { Benefits } from "./benefits";
import { CompactCta } from "./compact-cta";
import { DemoProvider } from "./demo/demo-context";
import { Faq } from "./faq";
import { Hero } from "./hero";

export function LandingPage({ flavors }: { flavors: FlavorTrend[] }) {
  return (
    <DemoProvider flavors={flavors}>
      <div className="flex flex-col">
        <Hero />
        <Benefits />
        <Faq />
        <div className="h-16 sm:h-24" />
        <CompactCta />
      </div>
    </DemoProvider>
  );
}
