"use client";

import Image from "next/image";
import React from "react";
import Button from "./Button";
import VisionMission from "./VisionMission";

const Commitment = () => {
  return (
    <div>
      <div className="app-section container grid grid-cols-1 md:grid-cols-2 gap-y-6 md:gap-x-12 relative">
        {/* Left Image Block */}
        <div className="w-full aspect-square relative">
          <Image
            src="/commitment.png"
            alt="Commitment"
            fill
            className="object-cover"
          />
        </div>

        {/* Right Content */}
        <div className="flex flex-col w-full justify-start gap-3">
          <h6>Our Commitment</h6>
          <h2>We embrace the uniqueness of every single project</h2>
          <p>
            Construction is a premier construction company dedicated to
            delivering exceptional projects characterized by quality,
            innovation, and client satisfaction. With a strong foundation built
            on years of industry expertise.
          </p>
          <span>
            <Button text="More About" href="/about" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Commitment;
