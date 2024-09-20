import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/views/components/shared/Accordion";
import { Button } from "@/views/components/shared/Button";
import { Checkbox } from "@/views/components/shared/Checkbox";
import Heading from "@/views/components/shared/Heading";
import Icon from "@/views/components/shared/Icon";
import { Input } from "@/views/components/shared/Input";
import NumberedCard from "@/views/components/shared/NumberedCard";
import SocialIcon from "@/views/components/shared/SocialIcon";
import { Textarea } from "@/views/components/shared/Textarea";
import ExperienceCard from "@/views/home/components/ExperienceCard";
import ServiceCard from "@/views/home/components/ServiceCard";
import ServiceDescriptionCard from "@/views/services/components/ServiceDescriptionCard";
import React from "react";
import { BiBrush } from "react-icons/bi";
import { LuFacebook } from "react-icons/lu";

export default function page() {
  return <div className="">
    <p>Input</p>
    <Input placeholder="Type here" />
    <p>Check</p>
    <div className="flex items-center space-x-1">
      <Checkbox id="terms" />
      <label
        htmlFor="terms"
        className="font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        Accept terms and conditions
      </label>
    </div>
    <p>Textarea</p>
    <Textarea />
    <p>Accordion</p>
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1" className="px-10 2xl:px-12 py-7 2xl:py-8">
        <AccordionTrigger>
          <div>
            <div className="w-[68px] 2xl:w-[72px] inline-flex items-center justify-center text-primary rounded p-4 2xl:p-5 text-[24px] 2xl:text-[28px] faq-number font-semibold mr-4 2xl:mr-5">
              01
            </div>
            Is it accessible?
          </div>
        </AccordionTrigger>
        <AccordionContent>
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
    <p>Heading</p>
    <Heading heading="Frequently Asked Questions" subHeading="Still you have any questions? Contact our Team via hello@squareup.com" />
    <p>Icon</p>
    <Icon icon={<BiBrush />} />
    <p>Service Card</p>
    <ServiceCard title="Design" description="At Pikazord, our design team is passionate about creating stunning, user-centric designs that captivate your audience and elevate your brand. We believe that great design is not just about aesthetics; it&apos;s about creating seamless and intuitive user experiences." icon={<BiBrush />} />
    <p>Experience Card</p>
    <ExperienceCard title="Design" description="At Pikazord, our design team is passionate about creating stunning, user-centric designs that captivate your audience and elevate your brand. We believe that great design is not just about aesthetics; it&apos;s about creating seamless and intuitive user experiences." icon={<BiBrush />} />
    <p>Service Description Card</p>
    <ServiceDescriptionCard description="At Pikazord, our design team is passionate about creating stunning, user-centric designs that captivate your audience and elevate your brand. We believe that great design is not just about aesthetics; it&apos;s about creating seamless and intuitive user experiences." icon={<BiBrush />} />
    <p>Numbered Card</p>
    <NumberedCard
      index={1}
      title="Design"
      description="Once upon a time, in a world driven by technology, a group of talented designers came together with a shared vision. They believed that design could shape the way people interacted with digital products. With their passion for aesthetics and usability, they founded Pikazord Digital Product Agency's design department. Their mission was to create visually stunning and user-friendly interfaces that would leave a lasting impression." />
    <p>Buttons</p>
    <Button>Primary</Button>
    <Button variant={'secondary'}>Secondary</Button>
    <Button variant={"outline"}>Outline</Button>
    <Button variant={"ghost"}>Ghost</Button>
    <Button variant={"destructive"} >Destructive</Button>
    <Button variant={"link"} >Link</Button>
    <SocialIcon icon={<LuFacebook />} />
  </div>;
}
