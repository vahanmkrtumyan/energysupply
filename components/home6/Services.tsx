"use client";
import audit from "@/public/images/audit.png";
import battery from "@/public/images/battery.png";
import consult from "@/public/images/consult.png";
import monitor from "@/public/images/monitor.png";
import service2 from "@/public/images/service-2.png";
import windmill from "@/public/images/windmill.png";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";

const servicesObj = {
  consulting: {
    id: 1,
    image: consult,
    title: "Wind Consultation",
  },
  installation: {
    id: 2,
    image: windmill,
    title: "Wind Installation",
  },
  storage: {
    id: 3,
    image: battery,
    title: "Energy Storage",
  },
  audit: {
    id: 4,
    image: audit,
    title: "Efficiency Audit",
  },
  maintenance: {
    id: 5,
    image: service2,
    title: "Wind Maintenance",
  },
  monitoring: {
    id: 6,
    image: monitor,
    title: "Monitoring Systems",
  },
};

const Services = () => {
  return (
    <section className="experts-3 overflow-x-hidden" id="experts">
      <div className="container">
        <div className="row align-items-end g-4 section-title">
          <div className="col-lg-6">
            <h2 className="mb-3 fade_up_anim">We Provide Our Best</h2>
            <p className="fade_up_anim" data-delay=".3">
              We specialize in delivering a wide range of water-based energy solutions designed to meet the demands of a sustainable future.
            </p>
          </div>
          <div className="col-lg-6 d-flex justify-content-end">
            <div className="btns">
              <button className="expert-prev">
                <i className="ti ti-arrow-narrow-left"></i>
              </button>
              <button className="expert-next">
                <i className="ti ti-arrow-narrow-right"></i>
              </button>
            </div>
          </div>
        </div>
        <Swiper
          navigation={{
            nextEl: ".expert-next",
            prevEl: ".expert-prev",
          }}
          loop
          autoplay
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 24,
            },
            992: {
              slidesPerView: 3,
              spaceBetween: 24,
            },
            1400: {
              slidesPerView: 4,
              spaceBetween: 24,
            },
          }}
          className="swiper expertSwiper3"
        >
          {Object.entries(servicesObj).map(([key, value]) => (
            <SwiperSlide key={value.id}>
              <Link href={`/services/${value.id}`} className="legal-card bg1">
                <Image src={value.image} width="68" height="68" className="mb-5" alt="" />
                <p className="mb-2 pt-2">{key}</p>
                <h4>{value.title}</h4>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Services;
