import { db } from "@/lib/db/index";
import { eq } from "drizzle-orm";
import {
  generationIdSchema,
  generations,
  GenerationId,
} from "@/lib/db/schema/generations";

export const getGenerations = async () => {
  const g = await db.select().from(generations);
  return { generations: g };
};

export const getGenerationById = async (id: GenerationId) => {
  const { id: generationId } = generationIdSchema.parse({ id });
  const [g] = await db
    .select()
    .from(generations)
    .where(eq(generations.id, generationId));

  return { generation: g };
};
