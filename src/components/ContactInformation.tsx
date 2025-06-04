import React from "react";
import ContactForm from "./ContactForm";

const ContactInformation = () => {
  return (
    <div className="app-section container flex flex-col md:flex-row justify-center gap-8 md:gap20">
      <div className="w-full md:w-1/3">
        <p className="mb-2">Contact Information</p>
        <h3 className="">
          Contact us today <br /> and let’s bring
          <br /> your vision to life
        </h3>
        <div className="flex flex-col gap-2 mt-10">
          <p>
            hotline:
            <br />
            <b>+(469) 537-2410</b>
          </p>
          <p>
            email:
            <br />
            <b>structa@email.com</b>
          </p>
          <p>
            Location:
            <br />
            <b>
              123 Main Street
              <br /> New York, NY 10001
            </b>
          </p>
        </div>
      </div>
      <div className="w-full md:w-1/3">
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactInformation;
