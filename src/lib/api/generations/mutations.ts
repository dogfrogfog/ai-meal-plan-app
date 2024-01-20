import { db } from "@/lib/db/index";
import { eq } from "drizzle-orm";
import {
  insertGenerationSchema,
  generations,
  generationIdSchema,
  GenerationId,
  NewGeneration,
} from "@/lib/db/schema/generations";

export const createGeneration = async (generation: NewGeneration) => {
  const newGeneration = insertGenerationSchema.parse(generation);
  try {
    const [g] = await db.insert(generations).values(newGeneration).returning();
    return { generation: g };
  } catch (err) {
    const message = (err as Error).message ?? "Error, please try again";
    console.error(message);
    throw { error: message };
  }
};

export const updateGeneration = async (
  id: GenerationId,
  generation: NewGeneration
) => {
  const { id: generationId } = generationIdSchema.parse({ id });
  const newGeneration = insertGenerationSchema.parse(generation);
  try {
    const [g] = await db
      .update(generations)
      .set(newGeneration)
      .where(eq(generations.id, generationId!))
      .returning();
    return { generation: g };
  } catch (err) {
    const message = (err as Error).message ?? "Error, please try again";
    console.error(message);
    throw { error: message };
  }
};

export const deleteGeneration = async (id: GenerationId) => {
  const { id: generationId } = generationIdSchema.parse({ id });
  try {
    const [g] = await db
      .delete(generations)
      .where(eq(generations.id, generationId!))
      .returning();
    return { generation: g };
  } catch (err) {
    const message = (err as Error).message ?? "Error, please try again";
    console.error(message);
    throw { error: message };
  }
};
