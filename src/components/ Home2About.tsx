import Image from "next/image";
import React from "react";
import Button from "./Button";

const Home2About = () => {
  return (
    <div className="app-section container">
      <div className="grid grid-cols-1 lg:grid-cols-[calc(40%_-_20px)_calc(60%_-_20px)] gap-10 w-full items-center">
        {/* Left column with full-width image */}
        <div className="relative w-full aspect-[3/4] rounded-lg overflow-hidden">
          <Image
            src="/aboutUsHero.png"
            alt="Main feature"
            fill
            className="object-cover"
          />
        </div>

        {/* Right column */}
        <div className="flex flex-col justify-between h-full">
          {/* Top content */}
          <div className="mb-6">
            <h6 className="text-sm text-gray-500 mb-1">about company</h6>
            <h3 className="text-2xl font-bold mb-4">
              Crafting your vision. Turning innovative ideas into lasting &
              sustainable structures, with years of expertise
            </h3>
            <Button text={"Learn More"} />
          </div>

          {/* Bottom-right content */}
          <div className="flex flex-col items-end gap-3 md:mt-auto md:ml-auto">
            <Image
              src="/commitment.png"
              alt="Commitment"
              width={350}
              height={230}
            />
            <p className="text-sm text-gray-600 w-[250px]">
              Our mission is to inspire builders, architects, and homeowners to
              make responsible decisions that reduce carbon footprints.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home2About;
