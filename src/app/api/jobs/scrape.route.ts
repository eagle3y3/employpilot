// src/app/api/jobs/scrape.route.ts
import type { NextApiRequest, NextApiResponse } from "next";
import { scrapeJobs } from "../../services/scrapeService";

const SECRET_TOKEN = process.env.SECRET_TOKEN;

export async function post(req: NextApiRequest, res: NextApiResponse) {
  if (req.headers.authorization !== `Bearer ${SECRET_TOKEN}`) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  try {
    await scrapeJobs();
    res.status(200).json({ message: "Scraping initiated" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error during scraping" });
  }
}
