import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { z } from "zod";
import { pgTable, serial, text, integer, timestamp } from "drizzle-orm/pg-core";

export const generations = pgTable("generations", {
  id: serial("id").primaryKey().unique(),
  clerkUserId: text("clerk_user_id").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
  callories: integer("callories").notNull(),
  protein: integer("protein").notNull(),
  fat: integer("fat").notNull(),
  carbs: integer("carbs").notNull(),
  cuisine: text("cuisine").notNull(),
  days: integer("days").notNull(),
  productsToExclude: text("products_to_exclude"),
  aiResponse: text("ai_response"),
});

// Schema for CRUD - used to validate API requests
export const insertGenerationSchema = createInsertSchema(generations);
export const selectGenerationSchema = createSelectSchema(generations);
export const generationIdSchema = selectGenerationSchema.pick({ id: true });
export const updateGenerationSchema = selectGenerationSchema.pick({
  aiResponse: true,
  updatedAt: true,
});

export type Generation = z.infer<typeof selectGenerationSchema>;
export type NewGeneration = z.infer<typeof insertGenerationSchema>;
export type UpdatedGeneration = z.infer<typeof updateGenerationSchema>;
export type GenerationId = z.infer<typeof generationIdSchema>["id"];
