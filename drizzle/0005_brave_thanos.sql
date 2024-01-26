CREATE TABLE `jobs` (
	`jobId` varchar(191) NOT NULL,
	`googleUrlId` varchar(255) NOT NULL,
	`title` varchar(255),
	`description` text,
	`company` varchar(255),
	`location` varchar(255),
	`postedAt` timestamp,
	CONSTRAINT `jobs_jobId` PRIMARY KEY(`jobId`)
);
--> statement-breakpoint
ALTER TABLE `google_urls` ADD `isProcessed` tinyint DEFAULT 0;--> statement-breakpoint
CREATE INDEX `jobs__googleUrlId__idx` ON `jobs` (`googleUrlId`);