import { InventoryTable, SuggestionCard } from "../cards";

export function InventoryTab() {
  return (
    <div className="flex flex-col gap-4 px-5 py-5">
      <SuggestionCard />
      <InventoryTable />
    </div>
  );
}
