import { db } from "@/server/db";
import { googleUrls } from "@/server/db/schema";
import { eq } from "drizzle-orm";
import { nanoid } from "nanoid";

// Define a type for the expected structure of the ScrapingBee response
interface ScrapingBeeResponse {
  content: string; // HTML content of the scraped page
  statusCode: number; // HTTP status code of the response
  headers: Headers; // HTTP headers of the response
  cookies: Record<string, string>; // Cookies set by the website
  organic_results: Array<{
    // Array of organic results
    url: string; // URL of each organic result
  }>;
  // Additional metadata (optional, depending on your configuration)
  metaData?: {
    renderTime?: number; // Time taken to render the page
    logs?: string[]; // Logs or errors from the rendering process
    // ... other metadata fields
  };
}

// Example of using the interface
export const retrieveGoogleURLsforSearchTerm = async (
  searchTerm: string,
): Promise<void> => {
  const response = await fetch(
    `https://app.scrapingbee.com/api/v1/store/google?api_key=${
      process.env.SCRAPING_BEE_KEY
    }&search=${encodeURIComponent(searchTerm)}`,
  );

  if (!response.ok) {
    throw new Error(`Error: ${response.status}`);
  }

  const data = (await response.json()) as ScrapingBeeResponse;
  const organicResults = data.organic_results;

  for (const organicResult of organicResults) {
    const url = organicResult.url;
    const urlId = extractUrlId(url);
    const companyName = extractCompanyName(url);

    if (urlId) {
      const apiUrl = `
      https://apply.workable.com/api/v2/accounts/${companyName}/jobs/${urlId}`;
      await insertGoogleUrl(url, urlId, apiUrl, searchTerm);
    } else {
      console.log(
        `Skipped insertion for URL: ${url}, unable to extract URL ID.`,
      );
      // Or handle this case as needed
    }
  }
};

const extractUrlId = (url: string) => {
  // Split the URL by '/j/' and get the last part
  const parts = url.split("/j/");
  if (parts.length < 2) {
    return ""; // Return an empty string if '/j/' is not found
  }

  // Further split the last part by '/' to isolate the ID
  const lastPart = parts[1]?.split("/");

  if (!lastPart) {
    return "";
  }

  return lastPart[0]; // Return the first segment which is the ID
};

const extractCompanyName = (url: string): string | undefined => {
  const parts = url.split("/");
  // Assuming the URL is of the format 'https://apply.workable.com/ccri/j/...'
  // the company name would be the segment immediately after 'apply.workable.com'
  const domainIndex = parts.findIndex((part) =>
    part.includes("apply.workable.com"),
  );

  if (domainIndex >= 0 && domainIndex + 1 < parts.length) {
    return parts[domainIndex + 1];
  }
  return "Unknown";
};

// Function to insert a new Google URL into the database
async function insertGoogleUrl(
  url: string,
  urlId: string,
  apiUrl: string,
  searchTerm: string,
): Promise<void> {
  try {
    // Create a new record object
    const newRecord = {
      id: nanoid(),
      url,
      urlId,
      apiUrl,
      searchTerm,
      retrievedAt: new Date(), // Current timestamp
    };

    // Insert the new record into the database
    console.log(apiUrl);
    await db
      .update(googleUrls)
      .set({ apiUrl: apiUrl.trim() })
      .where(eq(googleUrls.urlId, urlId)); // Assuming the method is .insert()

    console.log("URL successfully inserted into the database.");
  } catch (error) {
    console.error("Error inserting URL into the database: ", error);
  }
}
