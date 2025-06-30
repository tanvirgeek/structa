import React from "react";
import Image from "next/image";
import TotalProjects from "./TotalProjects";

const AboutUsMiddle = () => {
  return (
    <div className="app-section container mb-15 md:mb-0">
      <div className="flex flex-col md:flex-row items-center md:items-start">
        {/* Left: Image */}
        <div className="relative w-full md:w-1/2 h-64 md:h-[500px] p-4">
          <div className="relative w-full h-full rounded-xl overflow-hidden">
            <Image
              src="/aboutUsMiddle.png"
              alt="About Us"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Right: Total Projects */}
        <div className="w-full md:w-1/2 h-64 md:h-[500px] flex justify-center items-center p-4">
          <TotalProjects isVertical />
        </div>
      </div>
    </div>
  );
};

export default AboutUsMiddle;
