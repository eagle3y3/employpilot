ALTER TABLE `accounts` ADD `provides` varchar(191) NOT NULL;--> statement-breakpoint
ALTER TABLE `sessions` DROP COLUMN `expired`;