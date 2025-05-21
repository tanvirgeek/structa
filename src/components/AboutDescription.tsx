import React from "react";
import Button from "./Button";

const AboutDescription = () => {
  return (
    <div className="app-section flex justify-end">
      <div className="w-full md:w-[70%] flex flex-col gap-5">
        <h6>about company</h6>
        <h1>
          Crafting your vision. Turning innovative ideas into lasting &
          sustainable structures, with years of expertise
        </h1>
        <p>
          Where innovation meets excellence in the world of construction.
          Established with vision to redefine architectural landscapes, Skyrise
          is committed to delivering exceptional projects that blend creativity,
          sustainability, and quality craftsmanship.
        </p>
        <Button text={"Explore Services"} />
      </div>
    </div>
  );
};

export default AboutDescription;
