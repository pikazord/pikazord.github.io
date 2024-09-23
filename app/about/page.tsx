import { aboutUs, ourStory } from "@/public/data";
import Heading from "@/views/components/shared/Heading";
import HeadingWithBG from "@/views/components/shared/HeadingWithBG";
import NumberedCard from "@/views/components/shared/NumberedCard";
import React from "react";

export default function page() {
  return <>
    <HeadingWithBG
      heading='About Us'
      subHeading='Welcome to Pikazord, where collaboration, expertise, and client-centricity intersect to shape the future of digital innovation.'
      src='/images/Services-Section.png' />
    <div className="flex flex-col lg:flex-row justify-center items-center w-full px-4 md:px-10 xl:px-[100px] py-10 lg:py-20 gap-[30px] lg:gap-[100px]">
      <div className="lg:w-1/2">
        <h3 className="text-[28px] md:text-[38px] 2xl:text-[48px] text-nowrap font-semibold">About Pikazord</h3>
        <p className="text-sm md:text-base 2xl:text-[20px]">{aboutUs}</p>
      </div>
      <div className="relative w-full lg:w-1/2 h-[337px] md:h-[483px] 2xl:h-[530px] rounded-2xl overflow-hidden">
        <img src="/images/about-bg.png" alt="" className="absolute w-full h-full -z-20 opacity-80 object-cover" />
        <img src="/images/about.png" alt="" className="absolute w-full h-full -z-10" />
      </div>
    </div>
    <Heading title="Our Story" />
    <div className="grid grid-cols-1 lg:grid-cols-2">
      {
        ourStory.map((story, i) =>
          <NumberedCard
            key={i}
            index={i + 1}
            title={story.title}
            description={story.description}
          />
        )
      }
    </div>
  </>;
}
