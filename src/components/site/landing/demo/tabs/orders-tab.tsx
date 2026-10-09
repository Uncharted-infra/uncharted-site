import { OrdersTable } from "../cards";

export function OrdersTab() {
  return (
    <div className="flex flex-col gap-4 px-5 py-5">
      <p className="font-mono text-xs font-bold text-muted-foreground">
        Today <span className="text-foreground">38 orders</span> ·{" "}
        <span className="text-main">3 preparing</span>
      </p>
      <OrdersTable />
    </div>
  );
}
