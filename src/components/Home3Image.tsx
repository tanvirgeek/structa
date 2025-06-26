"use client";

import React from "react";
import Image from "next/image";

const Home3Image: React.FC = () => {
  return (
    <div className="w-full h-[600px] relative my-10 md:my-20">
      <Image
        src="/contact-hero.png" // Replace with your image path
        alt="Home 3 Image"
        layout="fill"
        objectFit="cover"
        className=""
      />
    </div>
  );
};

export default Home3Image;
