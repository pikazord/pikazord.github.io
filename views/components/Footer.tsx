import Link from "next/link";
import React from "react";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import { FaDiscord } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="fixed bottom-0 w-full py-2">
      <div className="container flex justify-between items-center">
        <div className="flex justify-center items-center space-x-3 text-2xl">
          <Link href={"https://github.com/pikazord"} target="_blank">
            <GitHubLogoIcon width="24" height="24" />
          </Link>
          <Link href={""}>
            <FaDiscord width="24" height="24" />
          </Link>
          <Link href={""}>
            <LinkedInLogoIcon width="24" height="24" />
          </Link>
        </div>
        <div>&copy; {new Date().getFullYear()} Pikazord. All rights reserved.</div>
      </div>
    </div>
  );
}
