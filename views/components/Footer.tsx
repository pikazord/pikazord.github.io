import Link from "next/link";
import React from "react";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import { FaDiscord } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="fixed bottom-0 w-full py-2 bg-slate-900">
      <div className="container flex flex-col sm:flex-row justify-between items-center">
        <div className="flex justify-center items-center space-x-3 text-2xl">
          <Link href={"https://github.com/pikazord"} target="_blank">
            <GitHubLogoIcon width="24" height="24" />
          </Link>
          <Link href={"https://discord.gg/UpwqrqNE5x"} target="_blank">
            <FaDiscord width="24" height="24" />
          </Link>
          <Link href={"https://www.linkedin.com/in/yeasir-hossain"} target="_blank">
            <LinkedInLogoIcon width="24" height="24" />
          </Link>
        </div>
        <div>&copy; {new Date().getFullYear()} Pikazord. All rights reserved.</div>
      </div>
    </div>
  );
}
