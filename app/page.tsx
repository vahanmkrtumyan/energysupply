import About from "@/components/home4/About";
import Banner from "@/components/home4/Banner";
import Adventages from "@/components/home4/Adventages";
import Faq from "@/components/home4/Faq";
import Footer from "@/components/home4/Footer";
import Position from "@/components/home4/Position";
import Navbar from "@/components/shared/Navbar";
import Content from "@/components/home4/Content";
import Agreements from "@/components/home4/Agreements";

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
      <Agreements />
      {/* <News /> */}
      <Footer />
    </>
  );
};

export default HomeFour;
