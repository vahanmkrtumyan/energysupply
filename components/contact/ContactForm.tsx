const ContactForm = () => {
  return (
    <section className="contact-page pt-120 pb-120">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10 col-xl-8">
            <div className="contact-form reveal reveal--top">
              <div className="contact-title">
                <h3 className="fade_up_anim">Ստանալ գնառաջարկ</h3>
                <p className="mb-3 pb-lg-3 fade_up_anim" data-delay=".3">
                  Լրացրեք ստորև ներկայացված ձևը և մենք կկապվենք ձեզ հետ հնարավորինս շուտ:
                </p>
              </div>
              <form id="contact-form">
                <div className="row g-3 g-lg-4">
                  <div className="col-md-6">
                    <label htmlFor="name">Անվանում</label>
                    <input name="user_name" type="text" id="name" placeholder="Մուտքագրեք ձեր կազմակերպության անունը" required />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="phone">Հեռախոսահամար</label>
                    <input name="contact_number" type="number" id="phone" placeholder="Մուտքագրեք ձեր հեռախոսահամարը" required />
                  </div>
                
                  <div className="col-12">
                    <label htmlFor="message">Հաղորդագրություն</label>
                    <textarea placeholder="Մուտքագրեք ձեր հաղորդագրությունը" name="message" id="message" className="w-100" rows={5} required></textarea>
                  </div>
                  <div className="col-12 d-flex justify-content-center pt-lg-3">
                    <button type="submit" className="primary-btn" id="submit-btn">
                      Ուղարկել <i className="ti ti-arrow-up-right"></i>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
