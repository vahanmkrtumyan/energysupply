import About from "@/components/home1/About";
import Banner from "@/components/home1/Banner";
import Experts from "@/components/home1/Experts";
import Faq from "@/components/home1/Faq";
import Footer from "@/components/home1/Footer";
import RecentProject from "@/components/home1/RecentProject";
import Services from "@/components/home1/Services";
import Testimonial from "@/components/home1/Testimonial";
import WhyChoose from "@/components/home1/WhyChoose";
import Navbar from "@/components/shared/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <About />
      <Services />
      <WhyChoose />
      <RecentProject />
      <Experts />
      <Testimonial />
      <Faq />
      <Footer />
    </>
  );
}
