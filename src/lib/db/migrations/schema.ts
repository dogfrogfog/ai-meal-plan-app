import {
  pgTable,
  unique,
  serial,
  integer,
  text,
  timestamp,
  boolean,
} from "drizzle-orm/pg-core";

export const wallets = pgTable(
  "wallets",
  {
    id: serial("id").primaryKey().notNull(),
    tokens: integer("tokens").default(0).notNull(),
    clerkUserId: text("clerk_user_id").notNull(),
    createdAt: timestamp("created_at", { mode: "string" }).defaultNow(),
    updatedAt: timestamp("updated_at", { mode: "string" }).defaultNow(),
    isBonusCollected: boolean("is_bonus_collected").default(false).notNull(),
  },
  (table) => {
    return {
      walletsClerkUserIdUnique: unique("wallets_clerk_user_id_unique").on(
        table.clerkUserId
      ),
    };
  }
);

export const generations = pgTable("generations", {
  id: serial("id").primaryKey().notNull(),
  clerkUserId: text("clerk_user_id").notNull(),
  createdAt: timestamp("created_at", { mode: "string" }).defaultNow(),
  updatedAt: timestamp("updated_at", { mode: "string" }).defaultNow(),
  productsToExclude: text("products_to_exclude"),
  callories: integer("callories").notNull(),
  protein: integer("protein").notNull(),
  fat: integer("fat").notNull(),
  carbs: integer("carbs").notNull(),
  cuisine: text("cuisine").notNull(),
  days: integer("days").notNull(),
});
