import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import type { FlavorTrend } from "@/lib/data";
import { cn } from "@/lib/utils";
import {
  inventory,
  reorderSoon,
  revenueByDay,
  statCards,
  topItems,
  type InventoryRow,
} from "./mock-data";

const STAT_FILLS = [
  "bg-main text-main-foreground",
  "bg-blue",
  "bg-secondary-background",
  "bg-sand-deep",
];

export function StatCards({ compact }: { compact?: boolean }) {
  const items = compact ? statCards.slice(0, 2) : statCards;
  return (
    <div className={cn("grid gap-3", compact ? "grid-cols-2" : "grid-cols-2 sm:grid-cols-4")}>
      {items.map((s, i) => (
        <Card key={s.label} size="sm" className={STAT_FILLS[i % STAT_FILLS.length]}>
          <CardContent>
            <p className="font-mono text-[11px] font-bold uppercase">{s.label}</p>
            <p className="mt-1 truncate font-display text-2xl font-extrabold">
              {s.value}
            </p>
            {s.delta && <p className="font-mono text-xs font-bold">{s.delta}</p>}
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

export function RevenueChartCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-mono text-[11px] font-bold tracking-wide uppercase">
          Revenue by day
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex h-32 items-end gap-2">
          {revenueByDay.map((d, i) => (
            <div key={d.day} className="flex flex-1 flex-col items-center gap-1.5">
              <div
                className={cn(
                  "w-full rounded-t-base border-2 border-border",
                  i === revenueByDay.length - 1 ? "bg-main" : "bg-blue"
                )}
                style={{ height: `${d.value}%` }}
              />
              <span className="font-mono text-[11px] font-bold">{d.day}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

export function TopItemsCard() {
  return (
    <Card className="gap-0 py-0">
      <CardHeader className="border-b-2 border-border bg-sand-deep py-3">
        <CardTitle className="font-mono text-[11px] font-bold tracking-wide uppercase">
          Top items
        </CardTitle>
      </CardHeader>
      <CardContent className="px-0">
        <Table>
          <TableBody>
            {topItems.map((t) => (
              <TableRow key={t.item}>
                <TableCell className="py-2 pl-4 font-medium">{t.item}</TableCell>
                <TableCell className="py-2 text-right font-mono text-xs font-bold">
                  {t.units}
                </TableCell>
                <TableCell className="py-2 pr-4 text-right font-mono text-xs font-bold">
                  {t.revenue}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}

export function ReorderCard() {
  return (
    <Card className="gap-0 py-0">
      <CardHeader className="border-b-2 border-border bg-sand-deep py-3">
        <CardTitle className="font-mono text-[11px] font-bold tracking-wide uppercase">
          Reorder soon
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="flex flex-col gap-2.5">
          {reorderSoon.map((s, i) => (
            <li key={s.item} className="flex items-center justify-between gap-2 text-sm font-medium">
              <span className="truncate">{s.item}</span>
              <Badge variant={i === 0 ? "default" : "neutral"} className="font-mono font-bold">
                {s.left}
              </Badge>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}

export function SuggestionCard() {
  return (
    <Card className="bg-blue">
      <CardContent className="flex items-start gap-3">
        <span className="mt-1 size-3 shrink-0 border-2 border-border bg-secondary-background" />
        <div>
          <p className="font-display text-base font-extrabold">
            Order 12 lb pistachio paste before Thursday
          </p>
          <p className="mt-0.5 font-mono text-xs font-bold">
            Usage up 37% w/w
          </p>
        </div>
      </CardContent>
    </Card>
  );
}

export function InventoryTable({ rows = inventory }: { rows?: InventoryRow[] }) {
  return (
    <Card className="gap-0 py-0">
      <CardContent className="px-0">
        <Table>
          <TableHeader>
            <TableRow className="bg-sand-deep">
              <TableHead className="h-9 pl-4 font-mono text-[10px] font-bold uppercase">
                Ingredient
              </TableHead>
              <TableHead className="h-9 text-right font-mono text-[10px] font-bold uppercase">
                On hand
              </TableHead>
              <TableHead className="h-9 text-right font-mono text-[10px] font-bold uppercase">
                Per week
              </TableHead>
              <TableHead className="h-9 text-right font-mono text-[10px] font-bold uppercase">
                Days left
              </TableHead>
              <TableHead className="h-9 pr-4" />
            </TableRow>
          </TableHeader>
          <TableBody>
            {rows.map((r) => (
              <TableRow key={r.name}>
                <TableCell className="py-2.5 pl-4 font-medium">{r.name}</TableCell>
                <TableCell className="py-2.5 text-right font-mono text-xs font-bold text-muted-foreground">
                  {r.onHand}
                </TableCell>
                <TableCell className="py-2.5 text-right font-mono text-xs font-bold text-muted-foreground">
                  {r.weeklyUsage}
                </TableCell>
                <TableCell className="py-2.5 text-right font-mono text-xs font-bold">
                  {r.daysLeft}d
                </TableCell>
                <TableCell className="py-2.5 pr-4 text-right">
                  {r.daysLeft <= 3 && (
                    <Badge className="font-mono font-bold">Reorder</Badge>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}

export function TrendingFlavorsCard({ flavors }: { flavors: FlavorTrend[] }) {
  const max = Math.max(...flavors.map((f) => f.unitsLastWeek));
  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-mono text-[11px] font-bold tracking-wide uppercase">
          Trending across the network
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="flex flex-col gap-3">
          {flavors.map((f) => (
            <li key={f.tag} className="flex items-center gap-3">
              <span className="w-28 truncate text-sm font-medium">{f.tag}</span>
              <div className="h-3 flex-1 overflow-hidden rounded-base border-2 border-border bg-sand-deep">
                <div
                  className="h-full bg-main"
                  style={{ width: `${Math.round((f.unitsLastWeek / max) * 100)}%` }}
                />
              </div>
              <span
                className={cn(
                  "w-12 rounded-base border-2 border-border px-1 text-center font-mono text-xs font-bold",
                  f.wowPct >= 0 ? "bg-blue" : "bg-main text-main-foreground"
                )}
              >
                {f.wowPct > 0 ? "+" : ""}
                {f.wowPct}%
              </span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
