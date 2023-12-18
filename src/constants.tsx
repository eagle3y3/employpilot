import type { SideNavItem } from "lib/types";
import Image from "next/image";
import { Button } from "./components/ui/button";

export const SIDENAV_ITEMS: SideNavItem[] = [
  {
    title: "Search Jobs",
    path: "/",
    icon: (
      <Image src="/search.svg" height={30} width={30} alt="Apply For Jobs" />
    ),
  },

  {
    title: "Inbox",
    path: "/inbox",
    icon: <Image src="/inbox.svg" height={30} width={30} alt="Inbox message" />,
  },
  {
    title: "Prepare",
    path: "/prepare",
    icon: (
      <Image
        src="/prepare.svg"
        height={30}
        width={30}
        alt="Read Articles to prepare for interviews"
      />
    ),
  },
  {
    title: "Track",
    path: "/track",
    icon: (
      <Image
        src="/track.svg"
        height={30}
        width={30}
        alt="Track your applications"
      />
    ),
  },
  //   {
  //     title: "Projects",
  //     path: "/projects",
  //     icon: <Icon icon="lucide:folder" width="24" height="24" />,
  //     submenu: true,
  //     subMenuItems: [
  //       { title: "All", path: "/projects" },
  //       { title: "Web Design", path: "/projects/web-design" },
  //       { title: "Graphic Design", path: "/projects/graphic-design" },
  //     ],
  //   },
  //   {
  //     title: "Messages",
  //     path: "/messages",
  //     icon: <Icon icon="lucide:mail" width="24" height="24" />,
  //   },
  //   {
  //     title: "Settings",
  //     path: "/settings",
  //     icon: <Icon icon="lucide:settings" width="24" height="24" />,
  //     submenu: true,
  //     subMenuItems: [
  //       { title: "Account", path: "/settings/account" },
  //       { title: "Privacy", path: "/settings/privacy" },
  //     ],
  //   },
  //   {
  //     title: "Help",
  //     path: "/help",
  //     icon: <Icon icon="lucide:help-circle" width="24" height="24" />,
  //   },
];
