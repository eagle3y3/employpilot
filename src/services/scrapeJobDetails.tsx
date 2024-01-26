import * as cheerio from "cheerio";
import axios from "axios";
import { JobListParams } from "openai/resources/fine-tuning/jobs.mjs";
import { JobListing } from "lib/types";

type JobType = {
  JobDescription: string;
  JobRequirements: string;
};

export const scrapeJobDetails = async (
  url: string,
): Promise<JobListing | null> => {
  try {
    // Fetch the webpage
    const response = await fetch(url);
    const body = (await response.json()) as JobListing;

    // Load the HTML into cheerio
    // const $ = cheerio.load(body.description);
    // //Extract job description and requirements
    // const jobRequirements = $('div[data-ui="job-requirements"]').text().trim();

    // Compile the results
    return body;
  } catch (error) {
    if (error instanceof Error) {
      console.error(`Error fetching the webpage: ${error.message}`);
    } else {
      console.error("An unknown error occurred");
    }
    return null;
  }
};

// Example usage
const url = "https://apply.workable.com/aviture/j/C124893FD9/";
