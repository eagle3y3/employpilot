import JobCard from "@/components/(jobs)/Card";
import Search from "@/components/ui/search";
import { db } from "@/server/db";
import { googleUrls, jobs } from "@/server/db/schema";
import {
  callChatGPT,
  fetchAllPageContentsParallel,
} from "@/services/processJobs";
import { retrieveGoogleURLsforSearchTerm } from "@/services/scrapeJobs";
import { fetchJobData } from "./actions";
import { LoaderCard } from "@/components/(jobs)/LoaderCard";
import { JobDetails } from "lib/types";

export default async function Home() {
  const jobData = await fetchJobData(0);
  // const googleUrls = await retrieveGoogleURLsforSearchTerm(
  //   "software engineer site:https://apply.workable.com/",
  // );

  // console.log(googleUrls);
  // const gpt = fetchPageContent(
  //   "https://apply.workable.com/aviture/j/C124893FD9/",
  // );

  // const scraped = scrapeJobDetails(
  //   "https://apply.workable.com/api/v2/accounts/ccri/jobs/6A58D706DB",
  // )
  //   .then((result) => console.log(result))
  //   .catch((err) => console.log(err));

  // const gpt = await fetchAllPageContentsParallel();
  // console.log(gpt);
  // const upDateAll = await db.update(googleUrls).set({ isProcessed: 2 });
  // const jobData = await db.select().from(jobs).limit(10);
  // console.log(jobData);
  return (
    <div className="flex flex-wrap  justify-center gap-5 lg:justify-evenly ">
      <Search placeholder={"Search Job here..."} />
      {jobData.map((job, index) => (
        <JobCard key={job.jobId} jobdata={job} index={index} />
      ))}
      <LoaderCard />
    </div>
  );
}
