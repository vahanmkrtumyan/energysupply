import Link from "next/link";

const WhyChoose = () => {
  return (
    <section className="whychoose">
      <div className="side-text d-none d-xl-flex flex-column align-items-center gap-5">
        <h2 className="vertical">why choose</h2>
      </div>
      <div className="line"></div>
      <div className="container">
        <div className="row">
          <div className="col-lg-10 col-xl-9 position-relative">
            <div className="reveal reveal--right">
              <div className="whychoose-card">
                <h2 className="pb-1 fade_up_anim">Why We&apos;re the Best Choice!</h2>
                <p className="mb-4 fade_up_anim" data-delay=".3">
                  Choosing the right solar energy provider is essential for a successful transition to clean energy. At Solarox, we bring together expertise, innovation...
                </p>
                <ul className="why-list fade_up_anim" data-delay=".6">
                  <li>
                    <i className="ti ti-point-filled"></i> Customized Solar Solutions
                  </li>
                  <li>
                    <i className="ti ti-point-filled"></i> Affordable &amp; Transparent Pricing
                  </li>
                  <li>
                    <i className="ti ti-point-filled"></i> High-Quality Components
                  </li>
                  <li>
                    <i className="ti ti-point-filled"></i> Commitment to Sustainability
                  </li>
                </ul>
                <Link className="primary-btn" href="/projects">
                  Our Projects <i className="ti ti-arrow-up-right"></i>
                </Link>
              </div>
            </div>
          </div>
          <div className="d-none col-lg-2 col-xl-3 d-lg-block position-relative">
            <div className="about-line-2"></div>
            <div className="about-line-3"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
