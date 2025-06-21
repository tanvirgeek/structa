import Home2About from "@/components/ Home2About";
import ClientRecommendationSlider from "@/components/ClientRecommendationSlider";
import Comapnies from "@/components/Companies";
import Companies from "@/components/Companies";
import ExpertTeam from "@/components/ExpertTeam";
import Home2Blogs from "@/components/Home2Blogs";
import Home2Hero from "@/components/Home2Hero";
import Home2HeroBottom from "@/components/Home2HeroBottom";
import Home2Horizontal from "@/components/Home2Horizontal";
import Home2Projects from "@/components/Home2Projects";
import PlansToReality from "@/components/PlansToReality";
import React from "react";

const Home2 = () => {
  return (
    <div>
      <div>
        <Home2Hero />
        <Home2HeroBottom />
        <Home2About />
        <Home2Horizontal />
        <Home2Projects />
        <PlansToReality />
        <ExpertTeam />
        <ClientRecommendationSlider />
        <Comapnies />
        <Home2Blogs />
      </div>
    </div>
  );
};

export default Home2;
