import React from "react";
import CircularExperts from "./CircularExperts";

const AboutHero = () => {
  return (
    <div>
      <div className="app-section container flex flex-col md:flex-row justify-center gap-16 md:gap-40">
        <div>
          <h1 className="app-sub-heading">
            Crafting <br /> structures for <br /> a better future
          </h1>
          <p className="text-primary">about our structa construction company</p>
        </div>
        <CircularExperts />
      </div>
    </div>
  );
};

export default AboutHero;
