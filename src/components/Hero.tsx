import React from "react";
import Button from "./Button";
import Image from "next/image";

const Hero = () => {
  const heroTextClasses = "font-sans font-bold text-5xl uppercase";
  return (
    <div className="h-[500px] md:h-[800px] bg-[url('/Hero.png')] bg-cover bg-center">
      <div className="container mx-auto pt-20 pl-10 flex flex-col gap-3">
        <div>
          <p className={heroTextClasses}>Build Your</p>
          <p className={heroTextClasses}>Dream House</p>
          <p className={heroTextClasses}>Today</p>
        </div>

        <p className="w-1/2">
          Your trusted partner in construction from innovative designs to expert
          project management deliver excellence.
        </p>
        <div className="flex gap-4">
          <Button text="Get a Quote" />
          <Button text="Our Work" />
        </div>
        <div className="pt-20">
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
