import { BellIcon, CheckIcon } from "@radix-ui/react-icons";

import { cn } from "lib/utils";
import { Button } from "@/components/ui/button";
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
const notifications = [
  {
    title: "About",
    description: "1 hour ago",
  },
  {
    title: "You have a new message!",
    description: "1 hour ago",
  },
  {
    title: "Your subscription is expiring soon!",
    description: "2 hours ago",
  },
];

type CardProps = React.ComponentProps<typeof Card>;

export default function JobCard({ className, ...props }: CardProps) {
  return (
    <Card className={cn("flex w-[345px] flex-col", className)} {...props}>
      <NewTextAnimation />
      <CardHeader>
        <CardTitle>Software Engineer</CardTitle>
        <CardDescription>Company Name</CardDescription>
        <CardDescription>$50,000 - $100,000</CardDescription>
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
                <p className="text-sm text-muted-foreground">
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
        <Badge variant="outline" className="mb-1 mr-2 flex-shrink-0">
          Outline
        </Badge>
        <Badge variant="outline" className="mb-1 mr-2 flex-shrink-0">
          Outline
        </Badge>
        <Badge variant="outline" className="mb-1 mr-2 flex-shrink-0">
          Outline
        </Badge>
        <Badge variant="outline" className="mb-1 mr-2 flex-shrink-0">
          Outline
        </Badge>
        <Badge variant="outline" className="mb-1 mr-2 flex-shrink-0">
          Outline
        </Badge>
        <Badge variant="outline" className="mb-1 mr-2 flex-shrink-0">
          Outline
        </Badge>
        <Badge variant="outline" className="mb-1 mr-2 flex-shrink-0">
          Outline
        </Badge>
        <Badge variant="outline" className="mb-1 mr-2 flex-shrink-0">
          Outline
        </Badge>
        <Badge variant="outline" className="mb-1 mr-2 flex-shrink-0">
          Outline
        </Badge>
      </CardFooter>
    </Card>
  );
}
