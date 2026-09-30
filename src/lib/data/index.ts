import { seedMenuItems, seedShops } from "./seed";
import {
  flavorTrendSchema,
  menuItemSchema,
  shopSchema,
  type FlavorTrend,
  type MenuItem,
  type Shop,
} from "./types";

export type ItemWithShop = MenuItem & { shopName: string; shopSlug: string };

export interface DataProvider {
  getShops(): Promise<Shop[]>;
  getShop(slug: string): Promise<Shop | null>;
  getMenu(shopId: string): Promise<MenuItem[]>;
  getAllItems(): Promise<ItemWithShop[]>;
  getFeaturedShops(limit?: number): Promise<Shop[]>;
  getFlavorTrends(limit?: number): Promise<FlavorTrend[]>;
}

const shops = shopSchema.array().parse(seedShops);
const menuItems = menuItemSchema.array().parse(seedMenuItems);

// Deterministic mock flavor trends — same data owners will see in the dashboard.
const seedTrends: FlavorTrend[] = flavorTrendSchema.array().parse([
  { tag: "pistachio", unitsLastWeek: 214, unitsPrevWeek: 156, wowPct: 37 },
  { tag: "ube", unitsLastWeek: 128, unitsPrevWeek: 97, wowPct: 32 },
  { tag: "miso caramel", unitsLastWeek: 96, unitsPrevWeek: 81, wowPct: 19 },
  { tag: "brown butter", unitsLastWeek: 342, unitsPrevWeek: 311, wowPct: 10 },
  { tag: "key lime", unitsLastWeek: 88, unitsPrevWeek: 84, wowPct: 5 },
  { tag: "peach", unitsLastWeek: 176, unitsPrevWeek: 183, wowPct: -4 },
]);

export const mockProvider: DataProvider = {
  async getShops() {
    return shops.filter((s) => s.status === "active");
  },
  async getShop(slug) {
    return shops.find((s) => s.slug === slug) ?? null;
  },
  async getMenu(shopId) {
    return menuItems.filter((m) => m.shopId === shopId);
  },
  async getAllItems() {
    return menuItems.map((item) => {
      const shop = shops.find((s) => s.id === item.shopId);
      return { ...item, shopName: shop?.name ?? "", shopSlug: shop?.slug ?? "" };
    });
  },
  async getFeaturedShops(limit = 3) {
    return (await this.getShops()).slice(0, limit);
  },
  async getFlavorTrends(limit = 6) {
    return seedTrends.slice(0, limit);
  },
};

// Phase 4: swap to supabaseProvider behind env flag.
export const data: DataProvider = mockProvider;

export type { FlavorTrend, MenuItem, Shop, ShopCategory } from "./types";
export { categoryLabels } from "./seed";
