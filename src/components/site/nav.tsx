"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const mapOrigin = process.env.NEXT_PUBLIC_MAP_ORIGIN ?? "http://localhost:3001";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/platform", label: "Platform" },
  { href: "/pricing", label: "Pricing" },
];

export function Nav() {
  const pathname = usePathname();
  return (
    <header className="sticky top-0 z-50 border-b-4 border-border bg-background">
      <div className="mx-auto flex h-16 max-w-7xl items-center gap-3 px-5 sm:gap-8 sm:px-8">
        <Link href="/" className="flex shrink-0 items-center gap-2">
          <span className="inline-block size-4 border-2 border-border bg-main" />
          <span className="font-display text-xl font-extrabold tracking-tight max-sm:sr-only">
            Uncharted
          </span>
        </Link>
        <nav className="flex flex-1 items-center gap-1 sm:gap-2">
          {LINKS.map((l) => {
            const active = pathname === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "rounded-base border-2 px-2 py-1 text-sm font-bold transition-colors sm:px-3",
                  active
                    ? "border-border bg-secondary-background shadow-shadow"
                    : "border-transparent hover:text-main"
                )}
              >
                {l.label}
              </Link>
            );
          })}
        </nav>
        <Button render={<a href={`${mapOrigin}/login`} />} size="sm" className="shrink-0">
          Log in
        </Button>
      </div>
    </header>
  );
}
