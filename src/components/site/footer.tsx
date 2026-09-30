import Link from "next/link";

const mapOrigin = process.env.NEXT_PUBLIC_MAP_ORIGIN ?? "http://localhost:3001";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-10 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2">
            <span className="inline-block size-3.5 rounded-[4px] bg-caramel" />
            <span className="font-display text-lg font-medium">Uncharted</span>
          </div>
          <p className="mt-2 text-sm text-muted-foreground">
            The platform for independent sweet shops.
          </p>
        </div>
        <div className="flex flex-col gap-2 font-mono text-xs tracking-wide uppercase">
          <span className="text-muted-foreground">For owners</span>
          <a href={`${mapOrigin}/signup`} className="hover:text-caramel">
            Claim your shop
          </a>
          <a href={`${mapOrigin}/dashboard`} className="hover:text-caramel">
            See the demo
          </a>
          <a href={`${mapOrigin}/login`} className="hover:text-caramel">
            Sign in
          </a>
        </div>
        <div className="flex flex-col gap-2 font-mono text-xs tracking-wide uppercase">
          <span className="text-muted-foreground">Uncharted</span>
          <Link href="/" className="hover:text-caramel">
            Home
          </Link>
        </div>
      </div>
      <div className="border-t border-border py-4 text-center font-mono text-[11px] tracking-wide uppercase text-muted-foreground">
        Uncharted — for sweet shops everywhere
      </div>
    </footer>
  );
}
