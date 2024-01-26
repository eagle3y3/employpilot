"use client";
import { fetchJobData } from "@/app/actions";
import { Skeleton } from "@/components/ui/skeleton";
import type { JobDetails } from "lib/types";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import JobCard from "./Card";

export function LoaderCard() {
  const { ref, inView } = useInView();
  const [data, setData] = useState<JobDetails[]>([]);
  const [allDataFetched, setAllDataFetched] = useState(false);
  const [page, setPage] = useState(1);
  useEffect(() => {
    if (inView) {
      fetchJobData(page)
        .then((res) => {
          if (res.length === 0) {
            // No more data to fetch
            setAllDataFetched(true);
          } else {
            setData((prevData) => [...prevData, ...res]);
            setPage(page + 1);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [inView, data, page]);

  return (
    <>
      {data.map((job, index) => (
        <JobCard key={job.jobId} jobdata={job} index={index} />
      ))}
      {allDataFetched ? null : (
        <div className="mx-auto w-full max-w-sm p-4" ref={ref}>
          <div className="flex items-center justify-between">
            <Skeleton className="h-6 w-3/4" />
            <Skeleton className="h-6 w-1/4" />
          </div>

          <Skeleton className="my-2 h-4 w-1/2" />
          <Skeleton className="my-2 h-4 w-1/3" />
          <Skeleton className="my-4 h-10 w-full" />
          <Skeleton className="my-1 h-4 w-5/6" />
          <Skeleton className="my-1 h-4 w-5/6" />
          <Skeleton className="my-1 h-4 w-2/3" />
          <div className="my-4 flex items-center justify-start">
            {Array(8)
              .fill(0)
              .map((_, index) => (
                <Skeleton key={index} className="mr-2 h-6 w-6" />
              ))}
          </div>
        </div>
      )}
    </>
  );
}
