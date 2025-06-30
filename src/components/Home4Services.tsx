"use client";

import { useState } from "react";
import Image from "next/image";

const services = [
  "Architectural Design",
  "Structural Engineering",
  "Project Management",
  "Renovation & Remodeling",
  "Construction Supervision",
];

const Home4Services = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="bg-white py-16 px-6 md:px-20">
      <div className="max-w-5xl mx-auto text-center">
        {/* Top Heading */}
        <h6 className="mb-4">Our Services</h6>

        {/* Service List */}
        <div className="flex flex-col items-center space-y-6">
          {services.map((service, idx) => (
            <div
              key={idx}
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="relative group cursor-pointer border-b border-gray-300 pb-4 w-full max-w-xl"
            >
              {/* Left Image */}
              {hoveredIndex === idx && (
                <div className="absolute -left-20 top-1/2 transform -translate-y-1/2 hidden md:block">
                  <Image
                    src="/blog2.png"
                    alt="Left"
                    width={80}
                    height={80}
                    className="rounded shadow-lg"
                  />
                </div>
              )}

              {/* Right Image */}
              {hoveredIndex === idx && (
                <div className="absolute -right-20 top-1/2 transform -translate-y-1/2 hidden md:block">
                  <Image
                    src="/blog1.png"
                    alt="Right"
                    width={80}
                    height={80}
                    className="rounded shadow-lg"
                  />
                </div>
              )}

              {/* Headline */}
              <h3
                className={`text-xl font-semibold transition-colors duration-300 ${
                  hoveredIndex === idx ? "!text-primary" : "text-black"
                }`}
              >
                {service}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home4Services;
