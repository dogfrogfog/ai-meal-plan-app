CREATE TABLE IF NOT EXISTS "generations" (
	"id" serial PRIMARY KEY NOT NULL,
	"clerk_user_id" text NOT NULL,
	"created_at" timestamp DEFAULT now(),
	"updated_at" timestamp DEFAULT now(),
	"prompt" text NOT NULL,
	CONSTRAINT "generations_clerk_user_id_unique" UNIQUE("clerk_user_id")
);
--> statement-breakpoint
DROP TABLE "computers";