ALTER TABLE "generations" ADD COLUMN "callories" integer NOT NULL;--> statement-breakpoint
ALTER TABLE "generations" ADD COLUMN "protein" integer NOT NULL;--> statement-breakpoint
ALTER TABLE "generations" ADD COLUMN "fat" integer NOT NULL;--> statement-breakpoint
ALTER TABLE "generations" ADD COLUMN "carbs" integer NOT NULL;--> statement-breakpoint
ALTER TABLE "generations" ADD COLUMN "cuisine" text NOT NULL;--> statement-breakpoint
ALTER TABLE "generations" ADD COLUMN "days" integer NOT NULL;--> statement-breakpoint
ALTER TABLE "generations" ADD COLUMN "products_to_exclude" text;