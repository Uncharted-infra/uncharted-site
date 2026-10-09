import type { LucideIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/site/reveal";
import { cn } from "@/lib/utils";

export type FeatureChip = { icon: LucideIcon; label: string };

export function FeatureRow({
  id,
  chips,
  title,
  body,
  action,
  stage,
  reverse,
  children,
}: {
  id: string;
  chips: FeatureChip[];
  title: string;
  body: string;
  action?: React.ReactNode;
  stage: string;
  reverse?: boolean;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className={cn(
        "grid scroll-mt-16 items-center gap-10 py-16 sm:py-24 lg:gap-16",
        reverse ? "lg:grid-cols-[2fr_1fr]" : "lg:grid-cols-[1fr_2fr]"
      )}
    >
      <Reveal className={cn("max-w-sm", reverse && "lg:order-last")}>
        <div className="mb-5 flex flex-wrap gap-1.5">
          {chips.map((chip) => (
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
          id={`${id}-heading`}
          className="font-display text-4xl leading-[1.0] font-extrabold tracking-tight text-balance sm:text-5xl"
        >
          {title}
        </h2>
        <p className="mt-4 text-base leading-relaxed font-medium text-muted-foreground text-pretty">
          {body}
        </p>
        {action}
      </Reveal>
      <Reveal delay={120}>
        <div
          className={cn(
            "rounded-base border-2 border-border p-6 shadow-[8px_8px_0_0_var(--border)] sm:p-10",
            stage
          )}
        >
          {children}
        </div>
      </Reveal>
    </section>
  );
}
