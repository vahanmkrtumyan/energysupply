"use client";
import arrow from "@/public/images/arrow-down.png";
import bestSolar from "@/public/images/best-solar.webp";
import Image from "next/image";
import Link from "next/link";
const BestSolar = () => {
  return (
    <section className="legal-partner">
      <a href="#services" className="scroll-banner d-none d-xxl-flex">
        <h3 className="vertical-sm-black">Discover</h3>
        <div className="arrow-down">
          <Image src={arrow} alt="" />
        </div>
      </a>
      <div className="container px-0 position-relative">
        <div className="legal-content px-3">
          <div className="row">
            <div className="col-md-6">
              <h2 className="fade_up_anim">Best Solar Panels Industry</h2>
            </div>
            <div className="col-md-6">
              <div className="mb-5 pb-lg-4 pb-xl-5">
                <p className="pb-2 mb-3 mb-lg-4 fade_up_anim" data-delay=".3">
                  Our commitment to innovation, efficiency, and customer satisfaction drives us to deliver reliable and cost-effective solar solutions that make a difference.
                </p>
                <Link href="/about-us" className="black-btn mb-3 mb-sm-0">
                  About Us <i className="ti ti-arrow-up-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="solar-video">
        <div className="container z-3">
          <div className="row">
            <div className="col-12 px-0">
              <div className="reveal reveal--right reveal--overlay">
                <div className="text-center position-relative">
                  <Image src={bestSolar} className="max-un" alt="" />
               
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BestSolar;
