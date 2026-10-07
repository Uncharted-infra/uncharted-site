export const SHOP_NAME = "Butter & Rye";

export const statCards = [
  { label: "Revenue this week", value: "$2,846", delta: "+12%" },
  { label: "Orders", value: "214", delta: "+8%" },
  { label: "Avg ticket", value: "$13.30", delta: "+3%" },
  { label: "Best seller", value: "Brown butter chocolate chip", delta: "" },
];

export const revenueByDay = [
  { day: "Mon", value: 34 },
  { day: "Tue", value: 48 },
  { day: "Wed", value: 41 },
  { day: "Thu", value: 62 },
  { day: "Fri", value: 58 },
  { day: "Sat", value: 74 },
  { day: "Sun", value: 90 },
];

export const topItems = [
  { item: "Brown butter chocolate chip", units: 96, revenue: "$432" },
  { item: "Pistachio croissant", units: 74, revenue: "$370" },
  { item: "Ube crinkle", units: 58, revenue: "$232" },
  { item: "Miso caramel tart", units: 41, revenue: "$205" },
  { item: "Key lime bar", units: 36, revenue: "$144" },
];

export const reorderSoon = [
  { item: "Pistachio paste", left: "2 days" },
  { item: "Cake boxes (6 in.)", left: "3 days" },
  { item: "Vanilla bean", left: "4 days" },
];

export type Order = {
  id: string;
  customer: string;
  items: string;
  pickup: string;
  status: "Ready" | "Preparing" | "Picked up";
};

export const orders: Order[] = [
  { id: "#1042", customer: "Maya", items: "2× crinkle, 1× tart", pickup: "9:15 AM", status: "Ready" },
  { id: "#1041", customer: "Jordan", items: "1× croissant box", pickup: "9:30 AM", status: "Ready" },
  { id: "#1040", customer: "Priya", items: "6× cupcakes", pickup: "10:00 AM", status: "Preparing" },
  { id: "#1039", customer: "Sam", items: "1× key lime pie", pickup: "10:15 AM", status: "Preparing" },
  { id: "#1038", customer: "Alex", items: "3× cookies, 1× brownie", pickup: "10:30 AM", status: "Preparing" },
  { id: "#1037", customer: "Nina", items: "1× birthday cake", pickup: "11:00 AM", status: "Picked up" },
  { id: "#1036", customer: "Chris", items: "2× croissant, 1× coffee cake", pickup: "11:15 AM", status: "Picked up" },
  { id: "#1035", customer: "Taylor", items: "4× donuts", pickup: "11:30 AM", status: "Picked up" },
];

export type InventoryRow = {
  name: string;
  onHand: string;
  weeklyUsage: string;
  daysLeft: number;
};

export const inventory: InventoryRow[] = [
  { name: "Pistachio paste", onHand: "4 lb", weeklyUsage: "12 lb", daysLeft: 2 },
  { name: "Cake boxes (6 in.)", onHand: "18", weeklyUsage: "42", daysLeft: 3 },
  { name: "Vanilla bean", onHand: "9 oz", weeklyUsage: "16 oz", daysLeft: 4 },
  { name: "Unsalted butter", onHand: "36 lb", weeklyUsage: "58 lb", daysLeft: 4 },
  { name: "Ube halaya", onHand: "5 jars", weeklyUsage: "6 jars", daysLeft: 6 },
  { name: "Bread flour", onHand: "48 lb", weeklyUsage: "50 lb", daysLeft: 7 },
  { name: "Brown sugar", onHand: "22 lb", weeklyUsage: "20 lb", daysLeft: 8 },
  { name: "Eggs", onHand: "15 doz", weeklyUsage: "12 doz", daysLeft: 9 },
];

export const suggestedCombos = [
  { name: "Pistachio × brown butter", note: "Both climbing — pairs with your best seller" },
  { name: "Ube × key lime", note: "Bright flavor weekends are trending" },
  { name: "Miso caramel × pretzel", note: "Salty-sweet up 19% w/w" },
];
