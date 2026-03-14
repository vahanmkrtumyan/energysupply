import ContactForm from "@/components/contact/ContactForm";
import MoreHelp from "@/components/contact/MoreHelp";
import Banner from "@/components/shared/Banner";
import BrandSlider from "@/components/shared/BrandSlider";

const page = () => {
  return (
    <>
      <Banner title="Կապ" bgImage="contact-us-hero-bg.webp" />
      <ContactForm />
      <MoreHelp />
    </>
  );
};

export default page;
