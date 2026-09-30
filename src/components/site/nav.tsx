import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

const mapOrigin = process.env.NEXT_PUBLIC_MAP_ORIGIN ?? "http://localhost:3001";

export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-sm">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-5">
        <Link href="/" className="flex items-center gap-2">
          <span className="inline-block size-3.5 rounded-[4px] bg-caramel" />
          <span className="font-display text-lg font-medium tracking-tight">Uncharted</span>
        </Link>
        <nav className="hidden items-center gap-6 font-mono text-xs tracking-wide uppercase md:flex">
          <a
            href={`${mapOrigin}/dashboard`}
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Demo
          </a>
          <a
            href={`${mapOrigin}/login`}
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Sign in
          </a>
        </nav>
        <a href={`${mapOrigin}/signup`} className={buttonVariants({ size: "sm" })}>
          Claim your shop
        </a>
      </div>
    </header>
  );
}
