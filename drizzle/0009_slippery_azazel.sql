CREATE TABLE `jobs` (
	`jobId` varchar(21) NOT NULL,
	`about_company` text,
	`responsibilities` text,
	`urlId` varchar(255) NOT NULL,
	`tech_stack` text,
	`salary_range` varchar(255),
	`salary_high` mediumint,
	`job_type` varchar(255),
	`role` varchar(255),
	`min_years_of_experience` varchar(3),
	`industry` varchar(255),
	CONSTRAINT `jobs_jobId` PRIMARY KEY(`jobId`)
);
--> statement-breakpoint
CREATE INDEX `jobs__urlId__idx` ON `jobs` (`urlId`);