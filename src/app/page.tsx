import { LandingPage } from "@/components/site/landing/landing-page";
import { data } from "@/lib/data";

export default async function Home() {
  const flavors = await data.getFlavorTrends(8);
  return <LandingPage flavors={flavors} />;
}
