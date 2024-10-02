import ContactUs from "@/views/components/ContactUs";
import Faq from "@/views/components/Faq";
import Banner from "@/views/home/Banner";
import Choose from "@/views/home/Choose";
import Services from "@/views/home/Services";

export default function page() {
  return (
    <>
      <Banner />
      <Services />
      <Choose />
      <Faq />
      <ContactUs />
    </>
  );
}
