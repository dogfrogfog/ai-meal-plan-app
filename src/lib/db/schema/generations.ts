import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { z } from "zod";
import { pgTable, serial, text, integer, timestamp } from "drizzle-orm/pg-core";

export const generations = pgTable("generations", {
  id: serial("id").primaryKey(),
  clerkUserId: text("clerk_user_id").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
  prompt: text("prompt").notNull(),
});

// Schema for CRUD - used to validate API requests
export const insertGenerationSchema = createInsertSchema(generations);
export const selectGenerationSchema = createSelectSchema(generations);
export const generationIdSchema = selectGenerationSchema.pick({ id: true });
export const updateGenerationSchema = selectGenerationSchema;

export type Generation = z.infer<typeof selectGenerationSchema>;
export type NewGeneration = z.infer<typeof insertGenerationSchema>;
export type GenerationId = z.infer<typeof generationIdSchema>["id"];
