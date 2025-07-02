"use client";
import ContactForm from "@/components/ContactForm";
import PageHero from "@/components/PageHero";
import PageHeroImage from "@/components/PageHeroImage";
import ContactInformation from "@/components/ContactInformation";
import dynamic from "next/dynamic";
import React from "react";
import Footer from "@/components/Footer";
import NavigationBar from "@/components/NavigationBar";

const OfficeMap = dynamic(() => import("@/components/OfficeMap"), {
  ssr: false,
});

const Contact = () => {
  return (
    <div>
      <div className="sticky top-0 z-50 bg-background shadow-md">
        <NavigationBar />
      </div>
      <PageHero
        heading={`Need Help?\nJust Message Us`}
        text="Contact With Us"
      />
      <PageHeroImage imageUrl={"/contact-hero.png"} />
      <ContactInformation />
      <OfficeMap position={[23.8103, 90.4125]} label="Dhaka Office" />
      <Footer />
    </div>
  );
};

export default Contact;
