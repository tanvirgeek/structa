"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";

const descriptions = [
  {
    title: "Planning & Strategy",
    text: "Our team of skilled professionals embraces technologies and methodologies to enhance efficiency, minimize impact optimize project outcomes. Designing, streamlining construction processes or integrating smart solutions.",
  },
  {
    title: "Quality Materials",
    text: "We source and use only the best materials for long-lasting builds.",
  },
  {
    title: "Skilled Workforce",
    text: "Our team includes certified and experienced professionals.",
  },
  {
    title: "Timely Execution",
    text: "Projects are delivered on time without compromising quality.",
  },
  {
    title: "Customer Support",
    text: "We maintain transparent communication throughout the process.",
  },
];

const Home4WhereTrustMeets = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleDescription = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="app-section md:mb-24 mb-0">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 relative">
        {/* Left Side */}
        <div className="flex flex-col justify-start space-y-4">
          <h6 className="text-sm uppercase text-gray-600">Why choose us</h6>
          <h2 className="text-3xl font-bold">Where trust meets excellence</h2>
          <p className="text-gray-700">
            We are committed to exceeding client expectations by delivering
            innovative, sustainable, and cost-effective construction solutions.
          </p>
        </div>

        {/* Right Side */}
        <div className="relative w-full h-64 md:h-120">
          <Image
            src="/construction-home4.png"
            alt="Construction"
            fill
            className="object-cover"
          />
        </div>

        {/* Overlay Section */}
        <div className="mt-8 md:mt-0 md:absolute w-full md:w-2/3 md:top-[250px] md:left-0 bg-black bg-opacity-80 text-white p-6 md:p-16 space-y-4 z-10">
          {descriptions.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="border-b border-white/20 overflow-hidden transition-all duration-500"
              >
                <button
                  onClick={() => toggleDescription(index)}
                  className="w-full text-left flex justify-between items-center text-lg font-medium py-2"
                >
                  {item.title}
                  <span className="text-xl">{isOpen ? "−" : "+"}</span>
                </button>

                <div
                  className={`transition-all duration-500 ease-in-out grid ${
                    isOpen ? "max-h-40 mt-2 opacity-100" : "max-h-0 opacity-0"
                  } overflow-hidden text-sm text-gray-300`}
                >
                  {item.text}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Home4WhereTrustMeets;
