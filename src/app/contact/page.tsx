"use client";
import ContactHero from "@/components/ContactHero";
import ContactImage from "@/components/ContactImage";
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
      <OfficeMap position={[23.8103, 90.4125]} label="Dhaka Office" />
    </div>
  );
};

export default Contact;
