import JobCard from "@/components/(jobs)/Card";
import Search from "@/components/ui/search";

export default function Home() {
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
