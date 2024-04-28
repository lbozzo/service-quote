CREATE TABLE `author` (
	`id` text PRIMARY KEY NOT NULL,
	`name` text NOT NULL
);
--> statement-breakpoint
CREATE TABLE `quote` (
	`id` text PRIMARY KEY NOT NULL,
	`quote` text NOT NULL,
	`author_id` text
);
--> statement-breakpoint
DROP TABLE `foo`;--> statement-breakpoint
CREATE UNIQUE INDEX `author_id_unique` ON `author` (`id`);--> statement-breakpoint
CREATE UNIQUE INDEX `quote_id_unique` ON `quote` (`id`);