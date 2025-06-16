import Home2About from "@/components/ Home2About";
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
      </div>
    </div>
  );
};

export default Home2;
