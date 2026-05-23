import { redirect } from "next/navigation";

import { mapAuthUrl } from "@/lib/map-app";

export default function SignupPage() {
  redirect(mapAuthUrl("/signup"));
}
