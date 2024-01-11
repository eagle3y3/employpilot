import JobCard from "@/components/(jobs)/Card";
import Search from "@/components/ui/search";
import { retrieveGoogleURLsforSearchTerm } from "@/services/scrapeJobs";

export default async function Home() {
  const googleUrls = await retrieveGoogleURLsforSearchTerm(
    "software engineer site:https://apply.workable.com/",
  );

  return (
    <div className="flex flex-wrap  justify-center gap-5 lg:justify-evenly ">
      <Search placeholder={"Search Job here..."} />
      <JobCard />
      <JobCard />
      <JobCard />
      <JobCard />
    </div>
  );
}
