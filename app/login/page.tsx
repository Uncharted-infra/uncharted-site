import { redirect } from "next/navigation";

import { mapAuthUrl } from "@/lib/map-app";

export default function LoginPage() {
  redirect(mapAuthUrl("/login"));
}
