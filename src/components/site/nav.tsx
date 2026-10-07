import Link from "next/link";
import { Button } from "@/components/ui/button";

const mapOrigin = process.env.NEXT_PUBLIC_MAP_ORIGIN ?? "http://localhost:3001";

export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b-4 border-border bg-background">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">
        <Link href="/" className="flex items-center gap-2">
          <span className="inline-block size-4 border-2 border-border bg-main" />
          <span className="font-display text-xl font-extrabold tracking-tight">
            Uncharted
          </span>
        </Link>
        <nav className="flex items-center gap-6">
          <a
            href={`${mapOrigin}/dashboard`}
            className="text-sm font-bold transition-colors hover:text-main"
          >
            Demo
          </a>
          <a
            href={`${mapOrigin}/login`}
            className="text-sm font-bold transition-colors hover:text-main"
          >
            Sign in
          </a>
          <Button render={<a href={`${mapOrigin}/signup`} />} size="sm">
            Claim your shop
          </Button>
        </nav>
      </div>
    </header>
  );
}
