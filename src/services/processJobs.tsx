// const urls = await retrieveGoogleURLsforSearchTerm('software engineer jobs');
// const jobDetailsPromises = urls.map(url => processJobListing(url));
// const jobDetails = await Promise.all(jobDetailsPromises);

import { db } from "@/server/db";
import { googleUrls, jobs } from "@/server/db/schema";
import { JobDetails, JobListing } from "lib/types";
import OpenAI from "openai";
import type {
  ChatCompletionFunctionMessageParam,
  ChatCompletionMessage,
  ChatCompletionMessageParam,
  ChatCompletionTool,
  ChatCompletionUserMessageParam,
} from "openai/resources/chat/completions.mjs";
import { tools } from "./functions";
import { nanoid } from "nanoid";
import { eq } from "drizzle-orm";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

// Function type for fetchPageContent
type FetchPageContentType = (url: string) => Promise<JobListing | null>;
interface UpdatedJobDetails extends Omit<JobDetails, "techStack"> {
  techStack?: string; // techStack is now a string
}

interface AvailableFunctionsType {
  get_job_post: FetchPageContentType;
  // Other functions can be added with their specific types
}

type FunctionArguments = {
  url: string;
};
type UrlObject = {
  apiUrl: string;
  urlId: string;
};

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const urlObjects = await db
  .select({ apiUrl: googleUrls.apiUrl, urlId: googleUrls.urlId })
  .from(googleUrls)
  .where(eq(googleUrls.isProcessed, 0));

const extractUrls = (
  urlObjects: UrlObject[],
): { apiUrl: string; urlId: string }[] => {
  return urlObjects.map((obj) => ({
    apiUrl: obj.apiUrl,
    urlId: obj.urlId,
  }));
};

function extractJobIdFromUrl(url: string): string | undefined {
  const urlParts = url.split("/");
  return urlParts[urlParts.length - 1];
}

function extractCompanyName(url: string): string | undefined {
  const parts = url.split("/");
  // Assuming the company name is always after 'accounts' in the URL
  const accountsIndex = parts.indexOf("accounts");
  if (accountsIndex !== -1 && accountsIndex < parts.length - 1) {
    return parts[accountsIndex + 1];
  }
  return undefined;
}

export async function insertJobPosting(
  urlId: string,
  companyName: string,
  jobData: JobDetails,
) {
  try {
    const existingJob = await db
      .select()
      .from(jobs)
      .where(eq(jobs.urlId, urlId));
    console.log(existingJob);
    if (existingJob.length == 1) {
      // If a job posting with this urlId already exists, handle accordingly
      console.log("Job posting already exists for this urlId:", urlId);
      return "Job posting already exists";
    } else {
      const jobPosting = {
        jobId: nanoid(), // Replace with your jobId generation logic
        urlId: urlId,
        companyName: companyName, // Replace with your urlId generation logic
        ...jobData, // Spread operator to include all other properties from jobDat
        techStack: Array.isArray(jobData.techStack)
          ? JSON.stringify(jobData.techStack)
          : jobData.techStack,
      };
      console.log(jobPosting);

      await db.insert(jobs).values(jobPosting);
      return "Job posting inserted successfully";
    }
  } catch (error) {
    console.error("Error inserting job posting:", error);
    return "Error occurred";
  }
}

export async function fetchPageContent(url: string): Promise<JobListing> {
  try {
    // Implementation to fetch page content, e.g., using ScrapingBee
    const response = await fetch(url);
    const body = (await response.json()) as JobListing;

    return body;
    // Return the content or throw an error if the URL is broken
  } catch (error) {
    console.error(`Failed to fetch content for URL ${url}:`, error);
    throw error; // Re-throw the error to handle it in the calling function
  }
}

// async function fetchAllPageContentsParallel(
//   urls: string[],
// ): Promise<JobListing[]> {
//   const fetchPromises = urls.map((url) =>
//     fetchPageContent(url).catch((error) => {
//       console.error(`Error fetching content for URL ${url}:`, error);
//       return null; // Return null or a default value for failed fetches
//     }),
//   );
//   const results = await Promise.all(fetchPromises);
//   return results.filter((result): result is JobListing => result !== null);
// }

// Usage
// const allContentsParallel = await fetchAllPageContentsParallel(urls);

export async function callChatGPT(url: string): Promise<JobDetails | null> {
  const job = await fetchPageContent(url);

  const urlId = extractJobIdFromUrl(url);
  const companyName = extractCompanyName(url);

  const messages: ChatCompletionMessageParam[] = [
    {
      role: "system",
      content:
        "you are an expert hr manager that is to inform users about a job post. Don't make assumptions. Answer everything in 100 characters or less.",
    },
    {
      role: "user",
      content: `
      What is this job post about? ${JSON.stringify(job)}`,
    },
  ];

  const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo-1106",
    messages: messages,
    tools: tools,
    temperature: 0.3,
    tool_choice: "auto",
  });

  const responseMessage = response.choices[0]?.message.tool_calls;
  if (typeof responseMessage === "object" && urlId && companyName) {
    const arugmentString = responseMessage[0]?.function.arguments;
    if (typeof arugmentString === "string") {
      try {
        const parsedData = JSON.parse(arugmentString) as JobDetails;
        await insertJobPosting(urlId, companyName, parsedData);
        // jsonData is now a JavaScript object
        return parsedData;
      } catch (error) {
        console.error("Error parsing JSON string:", error);
      }
    }
  }
  return null;
}

export async function fetchAllPageContentsParallel(): Promise<JobDetails[]> {
  const urls = extractUrls(urlObjects);
  const results: (JobDetails | null | undefined)[] = [];
  // First run
  for (const urlObject of urls) {
    try {
      const result = await callChatGPT(urlObject.apiUrl);
      results.push(result);
    } catch (error) {
      console.error(
        `Error fetching content for URL ${urlObject.apiUrl}:`,
        error,
      );
      results.push(null);
    }
    await delay(3000);
  }

  // Check for null values in the database and re-fetch if necessary
  for (let i = 0; i < urls.length; i++) {
    const urlObject = urls[i];
    if (!urlObject?.apiUrl) {
      console.error("URL object or API URL is undefined");
      continue;
    }

    const urlId = extractJobIdFromUrl(urlObject.apiUrl);
    if (urlId === undefined) {
      console.error(`Could not extract job ID from URL: ${urlObject.apiUrl}`);
      continue;
    }

    if (results[i] === null || (await checkIfJobHasNulls(urlId))) {
      try {
        const apiUrl = urlObject.apiUrl ?? "";
        results[i] = await callChatGPT(apiUrl);
      } catch (error) {
        console.error(
          `Error re-fetching content for URL ${urlObject.apiUrl}:`,
          error,
        );
      }
      await delay(4000);
    }

    // Only call updateJobRecord if results[i] is not null
    if (results[i] !== null && results[i] !== undefined) {
      console.log(urlId);
      console.log(results[i]);
      // Using the non-null assertion operator to assert results[i] is not null or undefined
      await updateJobRecord(urlId, results[i]!); // Non-null assertion
    }
  }

  // const jobData: JobDetails = {
  //   aboutCompany: "Blockchaino technology company",
  // };

  // await updateJobRecord("DDFA437FFD", jobData); // Non-null assertion
  return results.filter((result): result is JobDetails => result !== null);
}

async function checkIfJobHasNulls(urlId: string): Promise<boolean> {
  try {
    const jobRecord = await db.select().from(jobs).where(eq(jobs.urlId, urlId));
    if (jobRecord) {
      return Object.values(jobRecord).some((value) => value === null);
    }
    return false; // Return false if no record is found
  } catch (error) {
    console.error("Error checking job record for nulls:", error);
    throw error;
  }
}

async function updateJobRecord(urlId: string, jobDetails: JobDetails) {
  try {
    // Create a new object with the same properties as jobDetails
    const updatedJobDetails: UpdatedJobDetails = {
      ...jobDetails,
      techStack: Array.isArray(jobDetails.techStack)
        ? JSON.stringify(jobDetails.techStack)
        : jobDetails.techStack,
    };
    // Serialize techStack if it is an array
    if (Array.isArray(jobDetails.techStack)) {
      updatedJobDetails.techStack = JSON.stringify(jobDetails.techStack);
    }
    // Serialize techStack if it is an array

    await db.update(jobs).set(updatedJobDetails).where(eq(jobs.urlId, urlId));
    console.log(`Job record updated for urlId: ${urlId}`);
  } catch (error) {
    console.error("Error updating job record:", error);
    throw error;
  }
}
