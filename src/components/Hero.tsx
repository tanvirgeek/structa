import React from "react";
import Button from "./Button";
import Image from "next/image";
import CircularExperts from "./CircularExperts";
import AnimatedHeading from "./AnimatedHeading";

const Hero = () => {
  return (
    <div className="h-[650px] md:h-[800px] bg-[url('/Hero.png')] bg-cover bg-center">
      <div className="app-section container">
        <AnimatedHeading lines={["Build Your", "Dream House", "Today"]} />

        <p className="w-1/2 mb-4">
          Your trusted partner in construction from innovative designs to expert
          project management deliver excellence.
        </p>
        <div className="flex flex-col md:flex-row gap-4">
          <Button text="Get a Quote" />
          <Button text="Our Work" />
        </div>
        <CircularExperts />
      </div>
    </div>
  );
};

export default Hero;
