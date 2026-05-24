import { headers } from "next/headers";
import { redirect } from "next/navigation";

import { mapAuthUrlForHost } from "@/lib/map-app";

export default async function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{ next?: string }>;
}) {
  const host = (await headers()).get("host");
  const { next } = await searchParams;
  redirect(mapAuthUrlForHost("/login", host, next));
}
