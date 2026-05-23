/**
 * Marketing site links to map.uncharted.sh for auth and the app.
 * Supabase keys live on the map Vercel project only.
 */

export function mapAppOrigin(): string {
  const raw =
    typeof process.env.NEXT_PUBLIC_MAP_ORIGIN === "string" &&
    process.env.NEXT_PUBLIC_MAP_ORIGIN.trim()
      ? process.env.NEXT_PUBLIC_MAP_ORIGIN.trim()
      : "http://localhost:3001";
  return raw.replace(/\/+$/, "");
}

export function mapAppUrl(params?: Record<string, string>): string {
  const origin = mapAppOrigin();
  if (!params || Object.keys(params).length === 0) return `${origin}/`;
  const qs = new URLSearchParams(params);
  return `${origin}/?${qs.toString()}`;
}

export function mapAuthUrl(path: "/login" | "/signup"): string {
  return `${mapAppOrigin()}${path}`;
}
