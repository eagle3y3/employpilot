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
): Promise<string[]> => {
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
  const urls = organicResults.map((organicResult) => organicResult.url);
  return urls;
};
