DROP INDEX `jobs__googleUrlId__idx` ON `jobs`;--> statement-breakpoint
ALTER TABLE `jobs` MODIFY COLUMN `jobId` varchar(21) NOT NULL;--> statement-breakpoint
ALTER TABLE `jobs` ADD `about_company` text;--> statement-breakpoint
ALTER TABLE `jobs` ADD `responsibilities` text;--> statement-breakpoint
ALTER TABLE `jobs` ADD `urlId` varchar(255) NOT NULL;--> statement-breakpoint
ALTER TABLE `jobs` ADD `tech_stack` text;--> statement-breakpoint
ALTER TABLE `jobs` ADD `salary_range` varchar(255);--> statement-breakpoint
ALTER TABLE `jobs` ADD `salary_high` mediumint;--> statement-breakpoint
ALTER TABLE `jobs` ADD `job_type` varchar(255);--> statement-breakpoint
ALTER TABLE `jobs` ADD `role` varchar(255);--> statement-breakpoint
ALTER TABLE `jobs` ADD `min_years_of_experience` varchar(3);--> statement-breakpoint
ALTER TABLE `jobs` ADD `industry` varchar(255);--> statement-breakpoint
CREATE INDEX `jobs__urlId__idx` ON `jobs` (`urlId`);--> statement-breakpoint
ALTER TABLE `jobs` DROP COLUMN `googleUrlId`;--> statement-breakpoint
ALTER TABLE `jobs` DROP COLUMN `title`;--> statement-breakpoint
ALTER TABLE `jobs` DROP COLUMN `description`;--> statement-breakpoint
ALTER TABLE `jobs` DROP COLUMN `company`;--> statement-breakpoint
ALTER TABLE `jobs` DROP COLUMN `location`;--> statement-breakpoint
ALTER TABLE `jobs` DROP COLUMN `postedAt`;