import { BellIcon } from "@radix-ui/react-icons";

import { badgeUrls, cn } from "lib/utils";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "../ui/badge";
import NewTextAnimation from "../animation/newtext";
import { MotionDiv } from "../animation/MotionDiv";
import { easeInOut } from "framer-motion";
import { JobDetails } from "lib/types";
import Image from "next/image";

type CardProps = React.ComponentProps<typeof Card>;
type Props = {
  key: string | undefined;
  jobdata: JobDetails;
  index: number;
};

const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const BadgeURL: React.FC<{ name: string }> = ({ name }) => {
  const badgeUrl = badgeUrls[name]; // Replace "default-badge-url" with a default URL

  return badgeUrl ? (
    <div className="flex h-12 items-center justify-center overflow-hidden">
      <Image
        className="  w-full rounded-md  border text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
        src={badgeUrl}
        alt={`${name} badge`}
        width={75}
        height={48}
      />
    </div>
  ) : (
    <Badge variant="outline" className="">
      {name}
    </Badge>
  );
};

export default function JobCard({ className, ...props }: CardProps & Props) {
  const { key, jobdata, index } = props;

  const notifications = [
    {
      title: "Description",
      description: jobdata.aboutCompany,
    },
    {
      title: "Requirements",
      description: jobdata.responsibilities,
    },
  ];

  return (
    <MotionDiv
      variants={variants}
      initial="hidden"
      animate="visible"
      transition={{
        delay: (index % 8) * 0.1,
        ease: "easeInOut",
        duration: 0.5,
      }}
      viewport={{ amount: 0 }}
      className="relative w-full max-w-sm rounded"
    >
      <Card
        className={cn("flex  max-h-[750px] w-[350px] flex-col", className)}
        {...props}
      >
        <NewTextAnimation />
        <CardHeader>
          <CardTitle>{"Software Engineer"}</CardTitle>
          <CardDescription>{jobdata.companyName}</CardDescription>
          <CardDescription>{jobdata.salaryRange}</CardDescription>
          <CardDescription>Location: Dallas</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className=" flex items-center space-x-4 rounded-md border p-4">
            <BellIcon />
            <div className="flex-1 space-y-1">
              <p className="text-sm font-medium leading-none">
                Push Notifications
              </p>
              <p className="text-sm text-muted-foreground">
                Send notifications to device.
              </p>
            </div>
          </div>
          <div>
            {notifications.map((notification, index) => (
              <div
                key={index}
                className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
              >
                <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
                <div className="space-y-1">
                  <p className="text-sm font-medium leading-none">
                    {notification.title}
                  </p>
                  <p className="line-clamp-5 overflow-hidden text-sm text-muted-foreground">
                    {notification.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
        <CardFooter className="flex max-w-[345px] flex-wrap items-center justify-start">
          <p className="w-full pb-2 text-sm font-medium leading-none">
            Tech Stack:
          </p>
          <div className="grid grid-cols-4 items-center gap-1 overflow-hidden">
            {jobdata.techStack?.map((name, idx) => {
              return (
                <Badge
                  key={idx}
                  variant={"outline"}
                  className="line-clamp-1 flex items-center justify-center overflow-ellipsis"
                >
                  {name}
                </Badge>
              );
            })}
          </div>
        </CardFooter>
      </Card>
    </MotionDiv>
  );
}
