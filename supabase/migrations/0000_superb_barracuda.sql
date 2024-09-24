CREATE TABLE IF NOT EXISTS "tracks" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"artist" text NOT NULL,
	"src" text NOT NULL,
	"thumbnail" text NOT NULL
);
