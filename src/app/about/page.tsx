import AboutDescription from "@/components/AboutDescription";
import ClientRecommendationSlider from "@/components/ClientRecommendationSlider";
import AboutUsMiddle from "@/components/AboutUsMiddle";
import ExcitedToStart from "@/components/ExcitedToStart";
import ExpertTeam from "@/components/ExpertTeam";
import React from "react";
import CompanyLogoMarquee from "@/components/Companies";
import PageHeroImage from "@/components/PageHeroImage";
import PageHero from "@/components/PageHero";

const About = () => {
  return (
    <div>
      
      <PageHero heading={`Crafting\nstructures for`} text="Contact With Us" />
      <PageHeroImage imageUrl={"/aboutUsHero.png"} />
      <AboutDescription />
      <AboutUsMiddle />
      <ExpertTeam />
      <ClientRecommendationSlider />
      <CompanyLogoMarquee />
      <ExcitedToStart />
    </div>
  );
};

export default About;
