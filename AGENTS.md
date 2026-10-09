# AGENTS.md — uncharted-site (platform landing)

**uncharted.sh** — the public-facing site for Uncharted. Copy is **geo-agnostic** — any sweets shop can sign up; do not reintroduce city/neighborhood references to the site copy.

Stack: Next.js 16 (App Router) + React 19 + Tailwind v4 + TypeScript strict + **shadcn (base-nova, Base UI primitives)**. pnpm. Dev on **:3000**.

## Product intent

Uncharted is a **platform for independent sweets-shop owners** — not a physical store and (for now) not a consumer ordering marketplace. The site's job is owner acquisition:

- `/` — landing. Owner-first pitch: hero + product-mock dashboard preview, flavor-trend marquee, how-it-works, network insights, CTA.
- `/platform` — module tour (Overview, Orders, Inventory, Flavor Lab) built from the demo cards + how-it-works steps.
- `/pricing` — free-while-building plan, early shop promise, roadmap, pricing FAQ.
- Nav: Uncharted · Home · Platform · Pricing · Log in.
- All conversion CTAs point to the map app: `/dashboard` (demo), `/signup` (CTA label: "Sign up" — never "Claim your shop"), `/login`.

Consumer marketplace routes (`/shops`, `/cart`, `/checkout`, `/flavors`, `/owners`) were built then **cut** — do not restore without user direction. Seed data layer remains for future reuse.

**No secrets on this app.** No Supabase keys, no auth callbacks. Login/account links go to `NEXT_PUBLIC_MAP_ORIGIN`. Guest-first UX.

## Data layer

`src/lib/data/` is the only way components read data. `mockProvider` serves zod-validated seed JSON; `SupabaseProvider` arrives in Phase 4 behind an env flag. Never fetch Supabase or hardcode shop data in components.

## Design rules

- Design source of truth: [`../docs/design-system.md`](../docs/design-system.md). Tokens duplicated in `src/app/globals.css`.
- **Components: shadcn/ui** (`src/components/ui/`, base-nova style, Base UI + cva + `cn` package). Add via `pnpm dlx shadcn@latest add <component>`.
- Palette: sand canvas (#F3E5C8), black ink + 2px black borders with hard 4px offset shadows, red main (#FF4B4B), blue accent (#3D8BFF), white cards. Neobrutalism (neobrutalism.dev components on Base UI).
- Fonts: Bricolage Grotesque (display/heading), Instrument Sans (body), Space Mono (prices/labels). Do not add others.
- Feel: neobrutalist — bold, playful, colorful; chunky type, hard shadows, no gradients/blur.
- Seeded shops are **fictional** Alpharetta shops — never list real businesses without permission.
- Brand name is **Uncharted** — never "Uncharted Sweets"; no Slice branding/references.

## Engineering rules

- Simplicity first; minimal diff; no hacks.
- TypeScript strict, zod at data boundaries.
- `pnpm lint` + `pnpm build` must pass before calling work done.
- Run `pnpm dev` on :3000 and verify in the browser.
- No commits/pushes unless the user asks (see root `../AGENTS.md`).
