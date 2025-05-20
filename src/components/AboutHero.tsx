import React from "react";
import CircularExperts from "./CircularExperts";

const AboutHero = () => {
  return (
    <div>
      <div className="app-section flex flex-row justify-center gap-40">
        <div>
          <h2>
            Crafting <br /> structures for <br /> a better future
          </h2>
          <p className="text-primary">about our structa construction company</p>
        </div>
        <div>
          <CircularExperts />
        </div>
      </div>
    </div>
  );
};

export default AboutHero;
