const MoreHelp = () => {
  return (
    <section className="more-help">
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-lg-8 col-xl-6">
            <h2 className="fade_up_anim">Ունե՞ք հարցեր</h2>
            <p className="fade_up_anim" data-delay=".3">
             Կարող եք կապվել մեզ հետ հետևյալ եղանակներով՝ հեռախոսով, էլ. փոստով կամ այցելելով մեր գրասենյակ։ Մենք պատրաստ ենք օգնել ձեզ ցանկացած հարցում։
            </p>
          </div>
        </div>
        <div className="row g-4">
          <div className="col-md-6 col-lg-4">
            <div className="help-card fade_up_anim">
              <i className="ti ti-phone-call"></i>
              <h4 className="mb-3">Զանգահարել</h4>
              <div className="d-flex flex-column gap-1">
                <a href="tel:9075550101">(907) 555-0101</a>
                <a href="tel:9075550101">(907) 555-0101</a>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="help-card fade_up_anim" data-delay=".2">
              <i className="ti ti-mail-opened"></i>
              <h4 className="mb-3">Էլ. փոստ</h4>
              <div className="d-flex flex-column gap-1">
                <a href="mailto:info@example.com">info@example.com</a>
                <a href="mailto:info@example.com">info@example.com</a>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="help-card fade_up_anim" data-delay=".4">
              <i className="ti ti-map-pin-pin"></i>
              <h4 className="mb-3">Հասցե</h4>
              <div className="d-flex flex-column gap-1">
                <span>Royal Ln. Mesa, New Jersey 45463</span>
                <span>Thornridge Cir. Shiloh, Hawaii 81063</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MoreHelp;
