"use client";

import { MailerContext } from "@/contexts/MailerContext";
import Banner from "@/views/home/Banner";
import ContactUs from "@/views/home/ContactUs";
import Services from "@/views/home/Services";

export default function page() {
  return (
    <>
      <MailerContext>
        <Banner />
        <Services />
        <ContactUs />
      </MailerContext>
    </>
  );
}
