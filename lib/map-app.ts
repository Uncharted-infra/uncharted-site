export const PROD_SITE_ORIGIN = "https://uncharted.sh";
export const PROD_MAP_ORIGIN = "https://map.uncharted.sh";

const PROD_HOSTS = new Set(["uncharted.sh", "www.uncharted.sh"]);

function isProductionHost(hostname: string): boolean {
  return PROD_HOSTS.has(hostname);
}

function isProductionDeploy(): boolean {
  return (
    process.env.VERCEL_ENV === "production" ||
    process.env.NODE_ENV === "production"
  );
}

/**
 * Marketing site links to map.uncharted.sh for auth and the app.
 * Supabase keys live on the map Vercel project only.
 */
export function mapAppOrigin(): string {
  if (typeof window !== "undefined") {
    if (isProductionHost(window.location.hostname)) {
      return PROD_MAP_ORIGIN;
    }
  }

  const fromEnv = process.env.NEXT_PUBLIC_MAP_ORIGIN?.trim();
  if (fromEnv) return fromEnv.replace(/\/+$/, "");
  if (isProductionDeploy()) return PROD_MAP_ORIGIN;
  return "http://localhost:3001";
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

/** Server-side auth redirect — always map.uncharted.sh when host is uncharted.sh. */
export function mapAuthUrlForHost(
  path: "/login" | "/signup",
  host: string | null
): string {
  const normalizedHost = host?.split(":")[0] ?? "";
  if (isProductionHost(normalizedHost)) {
    return `${PROD_MAP_ORIGIN}${path}`;
  }
  return mapAuthUrl(path);
}
