import { choosingReasons } from "@/public/data";
import CareerCard from "@/views/careers/CareerCard";
import { Button } from "@/views/components/shared/Button";
import { Checkbox } from "@/views/components/shared/Checkbox";
import FormFieldWrapper from "@/views/components/shared/FormFieldWrapper";
import Heading from "@/views/components/shared/Heading";
import HeadingWithBG from "@/views/components/shared/HeadingWithBG";
import { Input } from "@/views/components/shared/Input";
import NumberedCard from "@/views/components/shared/NumberedCard";
import SocialIcon from "@/views/components/shared/SocialIcon";
import { Textarea } from "@/views/components/shared/Textarea";
import ExperienceCard from "@/views/home/components/ExperienceCard";
import ServiceCard from "@/views/home/components/ServiceCard";
import ServiceDescriptionCard from "@/views/services/ServiceDescriptionCard";
import React from "react";
import { BiBrush } from "react-icons/bi";
import { LuFacebook } from "react-icons/lu";
import Faq from "@/views/components/Faq";
import ContactUs from "@/views/components/ContactUs";

export default function page() {
  return <div className="">
    <p>Input</p>
    <FormFieldWrapper label="Full Name">
      <Input placeholder="Type here" />
    </FormFieldWrapper>
    <p>Check</p>
    <div className="flex items-center space-x-1">
      <Checkbox id="terms" name="terms" />
      <label
        htmlFor="terms"
        className="font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        Accept terms and conditions
      </label>
    </div>
    <p>Textarea</p>
    <Textarea />
    <p>FAQ</p>
    <Faq />
    <p>Heading</p>
    <HeadingWithBG src="/images/FAQ-Section.png" heading="Frequently Asked Questions" subHeading="Still you have any questions? Contact our Team via hello@squareup.com" />
    <p>Service Card</p>
    <ServiceCard title="Design" description="At Pikazord, our design team is passionate about creating stunning, user-centric designs that captivate your audience and elevate your brand. We believe that great design is not just about aesthetics; it&apos;s about creating seamless and intuitive user experiences." icon={<BiBrush />} />
    <p>Experience Card</p>
    {
      choosingReasons.map((reason, index) => <ExperienceCard key={index} title={reason.title} description={reason.description} icon={reason.icon} />)
    }
    <ExperienceCard title="Design" description="At Pikazord, our design team is passionate about creating stunning, user-centric designs that captivate your audience and elevate your brand. We believe that great design is not just about aesthetics; it&apos;s about creating seamless and intuitive user experiences." icon={<BiBrush />} />
    <p>Service Description Card</p>
    <ServiceDescriptionCard description="At Pikazord, our design team is passionate about creating stunning, user-centric designs that captivate your audience and elevate your brand. We believe that great design is not just about aesthetics; it&apos;s about creating seamless and intuitive user experiences." icon={<BiBrush />} />
    <p>Numbered Card</p>
    <NumberedCard
      index={1}
      title="Design"
      description="Once upon a time, in a world driven by technology, a group of talented designers came together with a shared vision. They believed that design could shape the way people interacted with digital products. With their passion for aesthetics and usability, they founded Pikazord Digital Product Agency's design department. Their mission was to create visually stunning and user-friendly interfaces that would leave a lasting impression." />
    <p>CareerCard</p>
    <CareerCard
      title="Challenging and Rewarding Work"
      description="Our projects are challenging, but the rewards are even greater. We tackle complex problems and push ourselves to deliver innovative solutions. You'll be empowered to take ownership of your work, make a real impact, and see your ideas come to life." />
    <p>Buttons</p>
    <Button>Primary</Button>
    <Button variant={'secondary'}>Secondary</Button>
    <Button variant={"outline"}>Outline</Button>
    <Button variant={"ghost"}>Ghost</Button>
    <Button variant={"destructive"} >Destructive</Button>
    <Button variant={"link"} >Link</Button>
    <SocialIcon icon={<LuFacebook />} />
    <p>About Us Pic</p>
    <div className="relative h-[337px] md:h-[483px] 2xl:h-[530px] rounded-2xl overflow-hidden">
      <img src="/images/about-bg.png" alt="" className="absolute w-full h-full -z-20 opacity-80 object-cover" />
      <img src="/images/about.png" alt="" className="absolute w-full h-full -z-10" />
    </div>
    <p>Heading</p>
    <Heading tagline="Our design services include:" title="Design" description="At Pikazord, our design team is passionate about creating stunning, user-centric designs that captivate your audience and elevate your brand. We believe that great design is not just about aesthetics; it's about creating seamless and intuitive user experiences. " />
    <p>contact us</p>
    <ContactUs />
  </div>;
}
