"use client";

import React from "react";
import Image from "next/image";
import ProgressBar from "./ProgressBar";

const Transforming = () => {
  return (
    <div className="app-section">
      <div className="px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left: Image */}
        <div className="relative w-full h-80 md:h-[600px]">
          <Image
            src="/contact-hero.png" // Replace with your actual image path
            alt="Transforming Construction"
            fill
            className="object-cover rounded-md"
            priority
          />
        </div>

        {/* Right: Text Content */}
        <div className="flex flex-col gap-3">
          <h6>why choose structa</h6>
          <h2>Transforming spaces & enriching lives with Structa</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Where innovation meets excellence in the world of construction
            vision redefine architectural landscapes, structa is committed to
            delivering exceptional projects that blend creativity,
            sustainability, and quality.
          </p>
          <div className="flex flex-col gap-1">
            <ProgressBar label={"Building Construction"} value={90} />
            <ProgressBar label={"Interior Design"} value={70} />
            <ProgressBar label={"Renovation & Remodeling"} value={70} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transforming;
