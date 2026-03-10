
const Adventages = () => {
  return (
     <section className="whychoose">
      <div className="side-text d-none d-xl-flex flex-column align-items-center gap-5">
        <h2 className="vertical">Մեր առավելությունները</h2>
      </div>
      <div className="line"></div>
      <div className="container">
        <div className="row">
          <div className="col-lg-10 col-xl-9 position-relative">
            <div className="reveal reveal--right">
              <div className="whychoose-card">
                <h2 className="pb-1 fade_up_anim">Մեր առավելությունները</h2>
                <ul className="why-list fade_up_anim" data-delay=".6">
                  <li>
                    <i className="ti ti-point-filled"></i> Խորը փորձ ազատականացված շուկայում
                  </li>
                  <li>
                    <i className="ti ti-point-filled"></i> Մեծածախ ծավալներ և ուժեղ բանակցային դիրք
                  </li>
                  <li>
                    <i className="ti ti-point-filled"></i> Վերականգնվող էներգիայի ինտեգրում
                  </li>
                  <li>
                    <i className="ti ti-point-filled"></i> Թափանցիկ հաշվարկային համակարգ
                  </li>
                   <li>
                    <i className="ti ti-point-filled"></i> Արագ որոշումների կայացում
                  </li>
                </ul>
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

export default Adventages;
