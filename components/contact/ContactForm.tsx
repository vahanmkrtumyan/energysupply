"use client";

import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    user_name: "",
    contact_number: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newErrors: Record<string, string> = {};
    if (!formData.user_name.trim()) {
      newErrors.user_name = "Անվանումը պարտադիր է";
    }
    if (!formData.contact_number.trim()) {
      newErrors.contact_number = "Հեռախոսահամարը պարտադիր է";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Հաղորդագրությունը պարտադիր է";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Submit form logic here
    console.log("Form successfully submitted:", formData);
  };

  return (
    <section className="contact-page pt-120 pb-120" id="quote">
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
              <form id="contact-form" onSubmit={handleSubmit}>
                <div className="row g-3 g-lg-4">
                  <div className="col-md-6">
                    <label htmlFor="name">Անվանում</label>
                    <input name="user_name" type="text" id="name" placeholder="Մուտքագրեք ձեր կազմակերպության անունը" value={formData.user_name} onChange={handleChange} />
                    {errors.user_name && <small className="text-danger mt-1 d-block">{errors.user_name}</small>}
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="phone">Հեռախոսահամար</label>
                    <input name="contact_number" type="number" id="phone" placeholder="Մուտքագրեք ձեր հեռախոսահամարը" value={formData.contact_number} onChange={handleChange} />
                    {errors.contact_number && <small className="text-danger mt-1 d-block">{errors.contact_number}</small>}
                  </div>

                  <div className="col-12">
                    <label htmlFor="message">Հաղորդագրություն</label>
                    <textarea placeholder="Մուտքագրեք ձեր հաղորդագրությունը" name="message" id="message" className="w-100" rows={5} value={formData.message} onChange={handleChange}></textarea>
                    {errors.message && <small className="text-danger mt-1 d-block">{errors.message}</small>}
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
