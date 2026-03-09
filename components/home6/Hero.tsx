import CircularText from "../shared/CircleText";

const Hero = () => {
  return (
    <section className="banner banner-6 overflow-hidden">
      <video muted loop autoPlay>
        <source src="/images/home6-hero-video.webm" />
      </video>
      <div className="container">
        <div className="row banner-content z-2">
          <div className="col-md-8 align-items-end d-flex">
            <h2 className="hero-6-text fade_up_anim">Wind Energy Solutions</h2>
          </div>
          <div className="col-md-4">
            <div className="d-flex flex-column gap-3 gap-xxl-5 align-items-md-end">
              <CircularText />
              <p className="text-lg fade_up_anim" data-delay=".3">
                Discover the power of renewable energy with our cutting-edge wind energy solutions. Join us in revolutionizing the way.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
