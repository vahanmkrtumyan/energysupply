import Banner from "@/components/about-us/Banner";
import About from "@/components/home1/About";
import Experts from "@/components/home1/Experts";
import Faq from "@/components/home1/Faq";
import Footer from "@/components/home1/Footer";
import Testimonial from "@/components/home1/Testimonial";
import WhyChoose from "@/components/home1/WhyChoose";
import Navbar from "@/components/shared/Navbar";

const AboutPage = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <About />
      <WhyChoose />
      <Experts />
      <Testimonial />
      <Faq />
      <Footer />
    </>
  );
};

export default AboutPage;
