import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useDemo } from "../demo-context";
import { TrendingFlavorsCard } from "../cards";
import { suggestedCombos } from "../mock-data";

export function FlavorsTab() {
  const { flavors } = useDemo();
  return (
    <div className="grid gap-4 px-5 py-5 sm:grid-cols-[2fr_1fr]">
      <TrendingFlavorsCard flavors={flavors} />
      <Card>
        <CardHeader>
          <CardTitle className="font-mono text-[11px] font-normal tracking-wide uppercase text-muted-foreground">
            Try next
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="flex flex-col gap-4">
            {suggestedCombos.map((c) => (
              <li key={c.name}>
                <p className="text-sm font-medium">{c.name}</p>
                <p className="mt-0.5 text-xs text-muted-foreground">{c.note}</p>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
