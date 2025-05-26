import AboutDescription from "@/components/AboutDescription";
import AboutHero from "@/components/AboutHero";
import AboutImage from "@/components/AboutImage";
import ClientRecommendationSlider from "@/components/ClientRecommendationSlider";
import AboutUsMiddle from "@/components/AboutUsMiddle";
import ExcitedToStart from "@/components/ExcitedToStart";
import ExpertTeam from "@/components/ExpertTeam";
import Footer from "@/components/Footer";
import React from "react";
import CompanyLogoMarquee from "@/components/Companies";

const About = () => {
  return (
    <div>
      <AboutHero />
      <AboutImage />
      <AboutDescription />
      <AboutUsMiddle />
      <ExpertTeam />
      <ClientRecommendationSlider />
      <CompanyLogoMarquee />
      <ExcitedToStart />
      <Footer />
    </div>
  );
};

export default About;
