import React from "react";
import Button from "./Button";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="h-[500px] md:h-[800px] bg-[url('/Hero.png')] bg-cover bg-center">
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
        <div className="py-5 md:py-0 md:pt-20">
          <div className="relative w-32 h-12">
            <Image
              src="/profile1.png"
              alt="Profile 1"
              width={48}
              height={48}
              className="rounded-full absolute left-0 z-30 border-1 border-white"
            />
            <Image
              src="/profile2.png"
              alt="Profile 2"
              width={48}
              height={48}
              className="rounded-full absolute left-8 z-20 border-1 border-white"
            />
            <Image
              src="/profile3.png"
              alt="Profile 3"
              width={48}
              height={48}
              className="rounded-full absolute left-16 z-10 border-1 border-white"
            />
          </div>
          <div>
            <p>
              <span className="font-bold">200+</span> experts ready to bring
            </p>
            <p>your dream to life</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
