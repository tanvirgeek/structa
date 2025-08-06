import AboutDescription from "@/components/AboutDescription";
import ClientRecommendationSlider from "@/components/ClientRecommendationSlider";
import AboutUsMiddle from "@/components/AboutUsMiddle";
import ExcitedToStart from "@/components/ExcitedToStart";
import ExpertTeam from "@/components/ExpertTeam";
import React from "react";
import Comapnies from "@/components/Companies";
import PageHeroImage from "@/components/PageHeroImage";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";
import NavigationBar from "@/components/NavigationBar";

const About = () => {
  return (
    <div>
      <div className="sticky top-0 z-50 bg-background shadow-md">
        <NavigationBar />
      </div>
      <PageHero heading={`Crafting\nstructures for`} text="About Us" />
      <PageHeroImage imageUrl={"/aboutUsHero.png"} />
      <AboutDescription />
      <AboutUsMiddle />
      <ExpertTeam />
      <ClientRecommendationSlider />
      <Comapnies />
      <ExcitedToStart />
      <Footer />
    </div>
  );
};

export default About;
