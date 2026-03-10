import Specialist from "@/components/home2/Specialist";
import About from "@/components/home4/About";
import Banner from "@/components/home4/Banner";
import Adventages from "@/components/home4/Adventages";
import Counter from "@/components/home4/Counter";
import Faq from "@/components/home4/Faq";
import Footer from "@/components/home4/Footer";
import News from "@/components/home4/News";
import Position from "@/components/home4/Position";
import ProjectShowcase from "@/components/home4/ProjectShowcase";
import Services from "@/components/home4/Services";
import Testimonial from "@/components/home4/Testimonial";
import Navbar from "@/components/shared/Navbar";
import Content from "@/components/home4/Content";

const HomeFour = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <About />
      <Position />
      <Adventages />
      <Content />
      {/* <Services /> */}
      {/* <Counter /> */}
      {/* <ProjectShowcase /> */}
      {/* <Testimonial /> */}
      {/* <Specialist /> */}
      <Faq />
      {/* <News /> */}
      <Footer />
    </>
  );
};

export default HomeFour;
