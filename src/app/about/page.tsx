import AboutDescription from "@/components/AboutDescription";
import AboutHero from "@/components/AboutHero";
import AboutImage from "@/components/AboutImage";
import ExcitedToStart from "@/components/ExcitedToStart";
import ExpertTeam from "@/components/ExpertTeam";
import Footer from "@/components/Footer";
import React from "react";

const About = () => {
  return (
    <div>
      <AboutHero />
      <AboutImage />
      <AboutDescription />
      <ExpertTeam />
      <ExcitedToStart />
      <Footer />
    </div>
  );
};

export default About;
