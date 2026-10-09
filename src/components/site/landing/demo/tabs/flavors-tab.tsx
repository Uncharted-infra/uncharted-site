import { useDemo } from "../demo-context";
import { SuggestedCombosCard, TrendingFlavorsCard } from "../cards";

export function FlavorsTab() {
  const { flavors } = useDemo();
  return (
    <div className="grid gap-4 px-5 py-5 sm:grid-cols-[2fr_1fr]">
      <TrendingFlavorsCard flavors={flavors} />
      <SuggestedCombosCard />
    </div>
  );
}
