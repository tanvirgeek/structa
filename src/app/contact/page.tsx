"use client";
import ContactForm from "@/components/ContactForm";
import ContactHero from "@/components/ContactHero";
import ContactImage from "@/components/ContactImage";
import ContactInformation from "@/components/ContactInformation";
import dynamic from "next/dynamic";
import React from "react";

const OfficeMap = dynamic(() => import("@/components/OfficeMap"), {
  ssr: false,
});

const Contact = () => {
  return (
    <div>
      <ContactHero />
      <ContactImage />
      <ContactInformation />
      <OfficeMap position={[23.8103, 90.4125]} label="Dhaka Office" />
    </div>
  );
};

export default Contact;
