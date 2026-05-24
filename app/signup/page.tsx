import { headers } from "next/headers";
import { redirect } from "next/navigation";

import { mapAuthUrlForHost } from "@/lib/map-app";

export default async function SignupPage() {
  const host = (await headers()).get("host");
  redirect(mapAuthUrlForHost("/signup", host));
}
