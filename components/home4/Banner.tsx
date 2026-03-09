"use client";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const Banner = () => {
  return (
    <section className="banner-four position-relative overflow-x-hidden">
      <div className="container-fluid px-0 position-relative">
        <Swiper
          effect="fade"
          loop
          autoplay={{
            delay: 2000,
          }}
          modules={[Pagination, Autoplay, EffectFade]}
          pagination={{
            el: ".hero4-pagination",
            clickable: true,
          }}
          className="swiper hero4-slider"
        >
          <SwiperSlide style={{ backgroundImage: "url(/images/home-4-hero-1.webp)" }}>
            <div className="slide-content one">
              <div className="container">
                <div className="row">
                  <div className="col-12 d-flex justify-content-between align-items-end gap-3 flex-wrap flex-sm-nowrap">
                    <h2 className="subheading-4 order-2 fw-normal order-md-1 fade_up_anim">Reliable Energy From</h2>
                  </div>
                  <div className="col-12">
                    <h2 className="heading-4 fade_up_anim" data-delay=".3">
                      The Power of Water
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide style={{ backgroundImage: "url(/images/home-4-hero-2.webp)" }}>
            <div className="slide-content two">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <h2 className="heading-4 order-2 order-md-1 fade_up_anim">Էներջի Սփփլայ</h2>
                  </div>
                  <div className="col-12">
                    <p className="subheading-4 fade_up_anim fw-normal" data-delay=".3">
                      Առաջատար էլեկտրաէներգիայի մատակարար ազատականացված շուկայում
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide style={{ backgroundImage: "url(/images/home-4-hero-3.webp)" }}>
            <div className="slide-content three">
              <div className="container">
                <div className="row">
                  <div className="col-12 d-flex align-items-center">
                    <h2 className="heading-4_3 fade_up_anim text-center">Hydro Power Energy</h2>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
        <div className="hero4-pagination"></div>
      </div>
    </section>
  );
};

export default Banner;
