import Link from "next/link";

const mapOrigin = process.env.NEXT_PUBLIC_MAP_ORIGIN ?? "http://localhost:3001";

export function Footer() {
  return (
    <footer className="border-t-4 border-border bg-secondary-background">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-5 py-12 sm:px-8">
        <div className="flex flex-col justify-between gap-8 sm:flex-row">
          <div>
            <div className="flex items-center gap-2">
              <span className="inline-block size-4 border-2 border-border bg-main" />
              <span className="font-display text-xl font-extrabold">
                Uncharted
              </span>
            </div>
            <p className="mt-2 max-w-xs text-sm font-medium text-muted-foreground">
              The platform for independent sweet shops.
            </p>
          </div>
          <div className="flex gap-16 text-sm">
            <div className="flex flex-col gap-2">
              <span className="font-bold text-muted-foreground">For owners</span>
              <a href={`${mapOrigin}/signup`} className="font-bold hover:text-main">
                Sign up
              </a>
              <a href={`${mapOrigin}/dashboard`} className="font-bold hover:text-main">
                See the demo
              </a>
              <a href={`${mapOrigin}/login`} className="font-bold hover:text-main">
                Sign in
              </a>
            </div>
            <div className="flex flex-col gap-2">
              <span className="font-bold text-muted-foreground">Product</span>
              <Link href="/platform" className="font-bold hover:text-main">
                Platform
              </Link>
              <Link href="/pricing" className="font-bold hover:text-main">
                Pricing
              </Link>
              <Link href="/#faq" className="font-bold hover:text-main">
                FAQ
              </Link>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between border-t-2 border-border pt-6 font-mono text-xs font-bold uppercase">
          <span>© Uncharted</span>
          <span>For sweet shops everywhere</span>
        </div>
      </div>
    </footer>
  );
}
