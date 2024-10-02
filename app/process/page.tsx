import { projectFlow } from "@/public/data";
import Heading from "@/views/components/shared/Heading";
import HeadingWithBG from "@/views/components/shared/HeadingWithBG";
import NumberedCard from "@/views/components/shared/NumberedCard";
import React from "react";

export default function page() {
  return <>
    <HeadingWithBG
      heading='Process of Starting the Project'
      subHeading='At Pikazord, we value transparency, collaboration, and delivering exceptional results.'
      src='/images/FAQ-Section.png' />
    <Heading
      title="At Pikazord"
      description="We follow a structured and collaborative process to ensure the successful delivery of exceptional digital products. Our process combines industry best practices, creative thinking, and a client-centric approach."
      tagline="Here's an overview of our typical process:"
    />
    <div className="grid grid-cols-1 lg:grid-cols-2">
      {
        projectFlow.map((p, i) =>
          <React.Fragment key={i}>
            <NumberedCard
              index={i + 1}
              title={p.title}
              description={p.description} />
          </React.Fragment>)
      }
    </div>
  </>;
}
