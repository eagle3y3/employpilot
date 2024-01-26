CREATE TABLE `jobs` (
	`jobId` varchar(21) NOT NULL,
	`aboutCompany` text,
	`responsibilities` text,
	`urlId` varchar(255) NOT NULL,
	`techStack` text,
	`salaryRange` varchar(255),
	`salaryHigh` mediumint,
	`jobType` varchar(255),
	`role` varchar(255),
	`minYearsOfExperience` tinyint,
	`industry` varchar(255),
	CONSTRAINT `jobs_jobId` PRIMARY KEY(`jobId`)
);
--> statement-breakpoint
CREATE INDEX `jobs__urlId__idx` ON `jobs` (`urlId`);