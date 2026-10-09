import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const mapOrigin = process.env.NEXT_PUBLIC_MAP_ORIGIN ?? "http://localhost:3001";

const rise =
  "animate-in fade-in slide-in-from-bottom-2 duration-700 fill-mode-both motion-reduce:animate-none";

export function PageHeader({
  eyebrow,
  title,
  body,
}: {
  eyebrow: string;
  title: React.ReactNode;
  body: string;
}) {
  return (
    <section className="mx-auto w-full max-w-7xl px-5 pt-10 sm:px-8">
      <span
        className={cn(
          "inline-block -rotate-2 rounded-base border-2 border-border bg-blue px-3 py-1 font-mono text-xs font-bold tracking-wide uppercase shadow-shadow",
          rise
        )}
      >
        {eyebrow}
      </span>
      <h1
        className={cn(
          "mt-6 max-w-4xl font-display text-5xl leading-[0.95] font-extrabold tracking-tight text-balance md:text-7xl",
          rise,
          "[animation-delay:150ms]"
        )}
      >
        {title}
      </h1>
      <p
        className={cn(
          "mt-6 max-w-xl text-lg font-medium text-muted-foreground text-pretty",
          rise,
          "[animation-delay:250ms]"
        )}
      >
        {body}
      </p>
      <div className={cn("mt-8 flex gap-3", rise, "[animation-delay:350ms]")}>
        <Button render={<a href={`${mapOrigin}/signup`} />}>Get started</Button>
        <Button render={<a href={`${mapOrigin}/dashboard`} />} variant="neutral">
          See the demo
        </Button>
      </div>
    </section>
  );
}
