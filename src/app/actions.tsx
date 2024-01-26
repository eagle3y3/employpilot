"use server";

import { db } from "@/server/db";
import { jobs } from "@/server/db/schema";

export const fetchJobData = async (page: number) => {
  const response = await db
    .select()
    .from(jobs)
    .offset(page * 8)
    .limit(8);

  // Fetch data from your database
  const processedData = response.map((job) => ({
    ...job,
    techStack: JSON.parse(job.techStack ?? "[]") as string[], // Ensure techStack is an array
  }));

  return processedData;
};
