import menuItems from "@/config/menuItems";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import SocialIcon from "./shared/SocialIcon";
import { FaDiscord, FaFacebook, FaLinkedin, FaLocationDot, FaPhone } from "react-icons/fa6";
import { IoMailSharp } from "react-icons/io5";

export default function Footer() {
  return (
    <div className=" bottom-0 w-full bg-background border-t border-secondary-15 px-4 lg:px-0 py-[30px] md:py-10 2xl:py-12 text-base 2xl:text-lg font-medium">
      <div className="container">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-5 lg:gap-0 pb-0 lg:pb-10">
          <Link href={'/'}>
            <Image src={'/images/pikazord.png'} alt='logo' width={100} height={21} className='w-[118px] 2xl:w-[177px]' />
          </Link>
          <div className="flex flex-col lg:flex-row gap-5 lg:gap-10 xl:gap-20 border-t lg:border-t-0 border-secondary-15 py-5 2xl:py-0">
            <div className='flex gap-5 2xl:gap-8 justify-center items-center flex-wrap'>
              {
                menuItems.map(menuItem => {
                  return (
                    <Link key={menuItem.href} href={menuItem.href} className='text-sm 2xl:text-lg font-semibold hover:border-b border-primary px-1'>
                      {menuItem.label}
                    </Link>
                  )
                })
              }
            </div>
            <div className="flex flex-col lg:flex-row justify-center items-center gap-3 border border-secondary-15 rounded-xl md:pl-5 p-3">
              <p>Stay Connected</p>
              <div className='flex gap-2 justify-center items-center'>
                <Link href={''}>
                  <SocialIcon icon={<FaFacebook />} />
                </Link>
                <Link href={''}>
                  <SocialIcon icon={<FaDiscord />} />
                </Link>
                <Link href={''}>
                  <SocialIcon icon={<FaLinkedin />} />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row justify-between items-center gap-5 lg:gap-0 w-full lg:border-t border-secondary-15 pt-5 lg:pt-10">
          <div className="flex flex-col gap-5 lg:gap-7 lg:flex-row justify-center items-center w-full lg:w-auto">
            <div className="w-full lg:w-auto flex justify-center items-end border-b border-secondary-15 pb-5 lg:pb-4 gap-2">
              <IoMailSharp className="text-primary" size={22} />
              <p>pikazord@gmail.com</p>
            </div>
            <div className="w-full lg:w-auto flex justify-center items-end border-b border-secondary-15 pb-5 lg:pb-4 gap-2">
              <FaPhone className="text-primary" size={22} />
              <p>+8801970851626</p>
            </div>
            <div className="w-full lg:w-auto flex justify-center items-end border-b border-secondary-15 pb-5 lg:pb-4 gap-2">
              <FaLocationDot className="text-primary" size={22} />
              <p>Dhaka, Bangladesh</p>
            </div>
          </div>
          <div>
            &copy; {new Date().getFullYear()} Pikazord. All rights reserved.
          </div>
        </div>
      </div>
    </div>
  );
}
