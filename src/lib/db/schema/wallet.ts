import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { z } from "zod";
import {
  pgTable,
  serial,
  text,
  integer,
  timestamp,
  boolean,
} from "drizzle-orm/pg-core";

export const wallets = pgTable("wallets", {
  id: serial("id").primaryKey(),
  tokens: integer("tokens").notNull().default(0),
  isBonusCollected: boolean("is_bonus_collected").notNull().default(false),
  clerkUserId: text("clerk_user_id").notNull().unique(),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

// Schema for CRUD - used to validate API requests
export const insertWalletSchema = createInsertSchema(wallets);
export const selectWalletSchema = createSelectSchema(wallets);
export const walletClerkUserIdSchema = selectWalletSchema.pick({
  clerkUserId: true,
});
export const updateWalletSchema = selectWalletSchema.pick({
  tokens: true,
  updatedAt: true,
  isBonusCollected: true,
});

export type Wallet = z.infer<typeof selectWalletSchema>;
export type NewWallet = z.infer<typeof insertWalletSchema>;
export type UpdateWallet = z.infer<typeof updateWalletSchema>;
export type WalletClerkUserId = z.infer<
  typeof walletClerkUserIdSchema
>["clerkUserId"];
