"use client";

import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    user_name: "",
    contact_number: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

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

    setStatus("loading");

    // Replace these with your actual EmailJS credentials
    const SERVICE_ID = "service_9z3cmwo";
    const TEMPLATE_ID = "template_ru46oby";
    const PUBLIC_KEY = "Jy4Mw8NPL7QD61Gte";

    if (formRef.current) {
      emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY).then(
        (result) => {
          console.log("Email successfully sent!", result.text);
          setStatus("success");
          setFormData({ user_name: "", contact_number: "", message: "" });
          // Reset status after a few seconds
          setTimeout(() => setStatus("idle"), 5000);
        },
        (error) => {
          console.error("Failed to send email:", error.text);
          setStatus("error");
          // Reset status after a few seconds
          setTimeout(() => setStatus("idle"), 5000);
        },
      );
    }
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
              <form id="contact-form" ref={formRef} onSubmit={handleSubmit}>
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

                  {status === "success" && (
                    <div className="col-12">
                      <div className="alert alert-success">Հաղորդագրությունը հաջողությամբ ուղարկվեց:</div>
                    </div>
                  )}

                  {status === "error" && (
                    <div className="col-12">
                      <div className="alert alert-danger">Ինչ-որ բան սխալ գնաց: Խնդրում ենք փորձել կրկին:</div>
                    </div>
                  )}

                  <div className="col-12 d-flex justify-content-center pt-lg-3">
                    <button type="submit" className="primary-btn" id="submit-btn" disabled={status === "loading"}>
                      {status === "loading" ? "Ուղարկվում է..." : "Ուղարկել"}
                      {status === "idle" && <i className="ti ti-arrow-up-right"></i>}
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
