"use client";

import React, { useRef } from "react";
import { Service, ServiceProps } from "./Service";

const ServicesList: React.FC<{ services: ServiceProps[] }> = ({ services }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: "smooth" }); // Scroll left by 500px
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: "smooth" }); // Scroll right by 500px
    }
  };

  return (
    <div className="relative w-full my-4">
      {/* Left Arrow Button */}
      <button
        onClick={scrollLeft}
        className="absolute right-18 -top-8 -translate-y-1/2 bg-gray-100 shadow-lg p-2 z-10"
      >
        ◀
      </button>

      {/* Scrollable Services */}
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto scroll-smooth scrollbar-hidden"
      >
        {services.map((item, index) => (
          <Service key={index} {...item} />
        ))}
      </div>

      {/* Right Arrow Button */}
      <button
        onClick={scrollRight}
        className="absolute right-6 -top-8 -translate-y-1/2 bg-gray-100 shadow-lg p-2 z-10"
      >
        ▶
      </button>
    </div>
  );
};

export default ServicesList;
