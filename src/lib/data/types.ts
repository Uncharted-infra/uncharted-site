import { z } from "zod";

export const shopCategorySchema = z.enum(["cakes", "cookies", "ice_cream", "pastry", "candy"]);
export type ShopCategory = z.infer<typeof shopCategorySchema>;

export const shopSchema = z.object({
  id: z.string(),
  slug: z.string(),
  name: z.string(),
  categories: z.array(shopCategorySchema),
  story: z.string(),
  phone: z.string(),
  address: z.string(),
  city: z.string(),
  state: z.string(),
  lat: z.number(),
  lng: z.number(),
  hours: z.record(z.string(), z.string()),
  photo: z.string().nullable(),
  status: z.enum(["active", "pending", "paused"]),
});
export type Shop = z.infer<typeof shopSchema>;

export const menuItemSchema = z.object({
  id: z.string(),
  shopId: z.string(),
  name: z.string(),
  description: z.string(),
  priceCents: z.number().int(),
  category: shopCategorySchema,
  flavorTags: z.array(z.string()),
  photo: z.string().nullable(),
  available: z.boolean(),
  bestseller: z.boolean().default(false),
});
export type MenuItem = z.infer<typeof menuItemSchema>;

export const flavorTrendSchema = z.object({
  tag: z.string(),
  unitsLastWeek: z.number().int(),
  unitsPrevWeek: z.number().int(),
  wowPct: z.number(),
});
export type FlavorTrend = z.infer<typeof flavorTrendSchema>;
