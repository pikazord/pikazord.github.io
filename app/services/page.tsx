import { services } from "@/public/data";
import CategoryHeading from "@/views/components/shared/CategoryHeading";
import Heading from "@/views/components/shared/Heading";
import HeadingWithBG from "@/views/components/shared/HeadingWithBG";
import ServiceDescriptionCard from "@/views/services/ServiceDescriptionCard";
import React from "react";

export default function page() {
  // console.log(services);
  return (
    <>
      <HeadingWithBG
        heading='Our Services'
        subHeading='Transform your brand with our innovative digital solutions that captivate and engage your audience.'
        src='/images/Services-Section.png' />
      {
        services.map((service, index) =>
          <div key={index}>
            <Heading
              title={service.title}
              description={service.description}
              tagline={`Our ${service.title.toLowerCase()} services include:`}
            />
            {
              service.categories.map((category, index) =>
                <div key={index}>
                  <CategoryHeading
                    title={category.title}
                  />
                  <div className="grid grid-cols-2 lg:grid-cols-4">
                    {
                      category.services.map((s, i) =>
                        <ServiceDescriptionCard
                          key={i}
                          icon={s.icon}
                          description={s.description}
                        />
                      )
                    }
                  </div>
                </div>)
            }

          </div>
        )
      }
    </>);
}
