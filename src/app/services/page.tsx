import ExcitedToStart from "@/components/ExcitedToStart";
import PageHero from "@/components/PageHero";
import ContactHero from "@/components/PageHero";
import PageHeroImage from "@/components/PageHeroImage";
import Services from "@/components/Services";
import React from "react";

const Service = () => {
  return (
    <div>
      <PageHero heading={`Building Timeless\nSpaces`} text="our services" />
      <PageHeroImage imageUrl={"/contact-hero.png"} />
      <Services />
      <ExcitedToStart />
    </div>
  );
};

export default Service;
