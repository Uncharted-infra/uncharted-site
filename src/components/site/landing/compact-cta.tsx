import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/site/reveal";

const mapOrigin = process.env.NEXT_PUBLIC_MAP_ORIGIN ?? "http://localhost:3001";

export function CompactCta() {
  return (
    <section className="mx-auto mb-24 w-full max-w-7xl px-5 sm:mb-40 sm:px-8">
      <Reveal>
        <div className="rounded-base border-2 border-border bg-main px-6 py-16 text-center text-main-foreground shadow-[8px_8px_0_0_var(--border)] sm:py-24">
          <h2 className="font-display text-5xl font-extrabold tracking-tight text-balance sm:text-7xl">
            Your shop,
            <br />
            charted.
          </h2>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button
              render={<a href={`${mapOrigin}/signup`} />}
              variant="neutral"
              className="h-11 px-5 text-base"
            >
              Sign up
            </Button>
            <Button
              render={<a href={`${mapOrigin}/dashboard`} />}
              className="h-11 border-2 border-border bg-blue px-5 text-base text-blue-foreground shadow-shadow hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none"
            >
              See the demo
            </Button>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
