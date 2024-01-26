// const urlObjects = await db.select({ url: googleUrls.url }).from(googleUrls);

// const extractUrls = (urlObjects: UrlObject[]): string[] => {
//   const urls = urlObjects.map((obj) => obj.url);
//   return urls;
// };

// const urlTest = "https://apply.workable.com/ccri/j/6A58D706DB/";

// async function processJobListing(url: string): Promise<void> {
//   try {
//     const pageContent = await fetchPageContent(url);
//     const chatGPTResponse = await processJob(pageContent);
//   } catch (error) {
//     console.error(`Error processing job listing for URL ${url}:`, error);
//     throw error;
//   }

//   // Make a request to the job listing page (can also use ScrapingBee)
//   // Parse the page to extract job details
//   // Return the extracted details
// }

// async function processJob(job: JobListing) {
//   try {
//     const response = await open;
//   } catch (error) {
//     console.log(error);
//   }
// }
