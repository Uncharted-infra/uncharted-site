import {
  ReorderCard,
  RevenueChartCard,
  StatCards,
  TopItemsCard,
} from "../cards";

export function OverviewTab() {
  return (
    <div className="flex flex-col gap-4 px-5 py-5">
      <StatCards />
      <RevenueChartCard />
      <div className="grid gap-4 sm:grid-cols-2">
        <TopItemsCard />
        <ReorderCard />
      </div>
    </div>
  );
}
