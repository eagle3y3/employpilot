CREATE TABLE `google_urls` (
  `id` varchar(191) NOT NULL,
  `url` varchar(2048) NOT NULL,
  `urlId` varchar(255) NOT NULL,
  `searchTerm` varchar(255) NOT NULL,
  `retrievedAt` timestamp NOT NULL DEFAULT (now()),
  `isProcessed` tinyint DEFAULT '0',
  `apiUrl` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `google_urls__urlId__idx` (`urlId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
