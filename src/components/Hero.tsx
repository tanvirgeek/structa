import React from "react";
import Button from "./Button";
import Image from "next/image";
import CircularExperts from "./CircularExperts";

const Hero = () => {
  return (
    <div className="h-[650px] md:h-[800px] bg-[url('/Hero.png')] bg-cover bg-center">
      <div className="container mx-auto pt-20 flex flex-col gap-3 px-4 md:px-0">
        <div>
          <h1>
            Build Your <br /> Dream House <br />
            Today
          </h1>
        </div>

        <p className="w-1/2">
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
