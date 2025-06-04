import React from "react";
import Home2HeroCard from "./Home2HeroCard";

const Home2HeroBottom = () => {
  return (
    <div className="bg-foreground pt-80">
      <div className="app-section container">
        <div className="flex">
          <Home2HeroCard
            imageSrc={"/residential.png"}
            imageAlt={"Residential Image"}
            header={"Residential Construction"}
            paragraph={
              "Offering comprehensive architectural services including conceptual design, drafting"
            }
          />

          <Home2HeroCard
            imageSrc={"/commercial.png"}
            imageAlt={"Residential Image"}
            header={"Commercial Construction"}
            paragraph={
              "Offering comprehensive architectural services including conceptual design, drafting"
            }
            hasBorder
          />

          <Home2HeroCard
            imageSrc={"/renovation.png"}
            imageAlt={"Residential Image"}
            header={"Residential Construction"}
            paragraph={
              "Offering comprehensive architectural services including conceptual design, drafting"
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Home2HeroBottom;
