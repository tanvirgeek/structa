"use client";

import React from "react";
import Image from "next/image";
import ClientRecommendationSlider from "./ClientRecommendationSlider";

const Home3Testimonial = () => {
  return (
    <div className="app-section container relative">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        {/* Left Section */}
        <div className="text-left">
          <h6 className="text-lg font-medium text-gray-600 uppercase">
            Client Testimonials
          </h6>
          <h2 className="text-3xl md:text-5xl font-bold mt-2">
            See What Our Clients Say
          </h2>
        </div>

        {/* Right Section */}
        <div className="justify-center hidden md:flex">
          <Image
            src="/h3-testimonial.png"
            alt="Testimonial"
            width={500}
            height={500}
            className="rounded-lg shadow-lg object-cover"
          />
        </div>
      </div>

      {/* Slider */}
      <div className="static md:absolute md:top-[30%] md:left-[50%] md:transform md:-translate-x-1/2 w-full">
        <ClientRecommendationSlider />
      </div>
    </div>
  );
};

export default Home3Testimonial;
