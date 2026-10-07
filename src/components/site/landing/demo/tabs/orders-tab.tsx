import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";
import { orders, type Order } from "../mock-data";

const statusStyles: Record<Order["status"], string> = {
  Ready: "bg-blue",
  Preparing: "bg-main text-main-foreground",
  "Picked up": "bg-secondary-background",
};

export function OrdersTab() {
  return (
    <div className="flex flex-col gap-4 px-5 py-5">
      <p className="font-mono text-xs font-bold text-muted-foreground">
        Today <span className="text-foreground">38 orders</span> ·{" "}
        <span className="text-main">3 preparing</span>
      </p>
      <Card className="gap-0 py-0">
        <CardContent className="px-0">
          <Table>
            <TableHeader>
              <TableRow className="bg-sand-deep">
                <TableHead className="h-9 pl-4 font-mono text-[10px] font-bold uppercase">#</TableHead>
                <TableHead className="h-9 font-mono text-[10px] font-bold uppercase">Customer</TableHead>
                <TableHead className="h-9 font-mono text-[10px] font-bold uppercase">Items</TableHead>
                <TableHead className="h-9 font-mono text-[10px] font-bold uppercase">Pickup</TableHead>
                <TableHead className="h-9 pr-4 text-right font-mono text-[10px] font-bold uppercase">
                  Status
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {orders.map((o) => (
                <TableRow key={o.id}>
                  <TableCell className="py-2.5 pl-4 font-mono text-xs font-bold">{o.id}</TableCell>
                  <TableCell className="py-2.5 font-medium">{o.customer}</TableCell>
                  <TableCell className="py-2.5 text-muted-foreground">{o.items}</TableCell>
                  <TableCell className="py-2.5 font-mono text-xs font-bold text-muted-foreground">
                    {o.pickup}
                  </TableCell>
                  <TableCell className="py-2.5 pr-4 text-right">
                    <Badge className={cn("font-mono font-bold", statusStyles[o.status])}>
                      {o.status}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
