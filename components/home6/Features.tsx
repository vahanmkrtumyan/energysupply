import home6experience from "@/public/images/home6-experience.webp";
import installation from "@/public/images/installation.png";
import support2 from "@/public/images/support-2.png";
import Image from "next/image";
const Features = () => {
  return (
    <section className="features-6 pt-120 pb-120">
      <div className="container">
        <div className="row g-4 align-items-center position-relative">
          <div className="col-lg-5 col-xl-6">
            <div className="fade_up_anim">
              <div className="exp-img">
                <Image src={home6experience} className="img-fluid" alt="" />
                <div className="exp-info">
                  <h2 className="display-4 mb-1">25+</h2>
                  <p>Years Experience</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-7 col-xl-6">
            <h2 className="mb-3 mb-xl-4 fade_up_anim">Bringing Solar, Wind, and Hydro Power Within Reach</h2>
            <p className="mb-4 pb-xl-3 fade_up_anim" data-delay=".3">
              We are dedicated to making renewable energy accessible and affordable for everyone. By harnessing the power of solar, wind, and hydro technologies.
            </p>
            <div className="row mb-4 g-3 g-md-4 pb-xl-3 fade_up_anim" data-delay=".4">
              <div className="col-md-6 about-info-1">
                <div className="d-flex gap-3 align-items-start">
                  <Image src={support2} width="40" height="40" alt="" />
                  <div>
                    <h5 className="fw-semibold">24 Hours Supports</h5>
                    <p>Enjoy peace of mind with our 24/7 support services.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="d-flex gap-3 align-items-start ps-md-3">
                  <Image src={installation} width="40" height="40" alt="" />
                  <div>
                    <h5 className="fw-semibold">Cheap Cost Installation</h5>
                    <p>Experience top-quality renewable energy solutions.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row fade_up_anim" data-delay=".5">
              <div className="col-sm-6">
                <div className="d-flex align-items-center gap-2 mb-sm-3">
                  <i className="ti ti-checkbox text-secondary3 xl-text"></i>
                  <p>Commitment to Sustainability</p>
                </div>
                <div className="d-flex align-items-center gap-2">
                  <i className="ti ti-checkbox text-secondary3 xl-text"></i>
                  <p>Sustainable Energy Solutions</p>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="d-flex align-items-center gap-2 mb-sm-3">
                  <i className="ti ti-checkbox text-secondary3 xl-text"></i>
                  <p>Reliable Renewable Power</p>
                </div>
                <div className="d-flex align-items-center gap-2">
                  <i className="ti ti-checkbox text-secondary3 xl-text"></i>
                  <p>Maintenance and Support</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
