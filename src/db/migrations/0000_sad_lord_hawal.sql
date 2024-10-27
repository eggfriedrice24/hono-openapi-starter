CREATE TABLE IF NOT EXISTS "tasks" (
	"id" varchar(255) PRIMARY KEY NOT NULL,
	"title" varchar(256),
	"done" boolean,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT current_timestamp
);
