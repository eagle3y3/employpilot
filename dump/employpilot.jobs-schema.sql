CREATE TABLE `jobs` (
  `jobId` varchar(21) NOT NULL,
  `aboutCompany` text,
  `responsibilities` text,
  `urlId` varchar(255) NOT NULL,
  `techStack` text,
  `salaryRange` varchar(255) DEFAULT NULL,
  `salaryHigh` mediumint DEFAULT NULL,
  `jobType` varchar(255) DEFAULT NULL,
  `role` varchar(255) DEFAULT NULL,
  `minYearsOfExperience` tinyint DEFAULT NULL,
  `industry` varchar(255) DEFAULT NULL,
  `companyName` varchar(255) NOT NULL,
  PRIMARY KEY (`jobId`),
  KEY `jobs__urlId__idx` (`urlId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
