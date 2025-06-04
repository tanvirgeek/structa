"use client";

import React from "react";
import AnimatedHeading from "./AnimatedHeading"; // adjust the path as necessary

type PageHeroProps = {
  heading: string;
  text: string;
};

const PageHero: React.FC<PageHeroProps> = ({ heading, text }) => {
  // Split heading by line breaks
  const lines = heading.split("\n");

  return (
    <div className="app-section container flex flex-col md:flex-row gap-16 md:gap-40">
      <div className="pl-16">
        <AnimatedHeading lines={lines} className="mb-4" />
        <p className="text-primary">{text}</p>
      </div>
    </div>
  );
};

export default PageHero;
