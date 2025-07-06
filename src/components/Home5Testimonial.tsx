"use client";

import React, { useState, useEffect, useRef } from "react";
import { FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    name: "John Doe",
    designation: "CEO, BuildCorp",
    feedback:
      "They delivered the project on time with exceptional quality. Their professionalism and attention to detail ensured we got exactly what we needed. Highly recommended!",
  },
  {
    name: "Jane Smith",
    designation: "Director, ArchiTech",
    feedback:
      "Professional, efficient, and highly skilled. From concept to completion, they maintained great communication and delivered outstanding results.",
  },
  {
    name: "Alice Johnson",
    designation: "Founder, UrbanWorks",
    feedback:
      "Their attention to detail and commitment is unmatched. We were impressed by the quality of their execution and the creativity they brought to the project.",
  },
];

const Home5Testimonial: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-rotate logic
  useEffect(() => {
    if (isHovered) return;

    intervalRef.current = setInterval(() => {
      setActiveIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isHovered]);

  return (
    <section className="app-section">
      <div className="container grid md:grid-cols-2 gap-10 items-center">
        {/* Left Text Block */}
        <div>
          <h6 className="text-sm uppercase text-gray-500 mb-2">Testimonials</h6>
          <h2 className="text-3xl font-bold text-gray-800">
            What Our Clients Say
          </h2>
        </div>

        {/* Right Testimonial Block */}
        <div
          className="relative bg-gray-100 p-6 rounded-xl min-h-[260px] flex flex-col justify-between shadow-md"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div>
            <FaQuoteLeft className="text-primary text-2xl mb-4" />

            <p className="text-sm md:text-xl text-gray-700 mb-6 leading-relaxed">
              {testimonials[activeIndex].feedback}”
            </p>

            <div>
              <p className="text-sm font-semibold text-gray-900">
                — {testimonials[activeIndex].name}
              </p>
              <p className="text-xs text-gray-600">
                {testimonials[activeIndex].designation}
              </p>
            </div>
          </div>

          {/* Navigation Circles */}
          <div className="absolute bottom-4 right-4 flex gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition ${
                  activeIndex === index
                    ? "bg-black scale-110"
                    : "bg-gray-400 hover:bg-gray-600"
                }`}
                aria-label={`Testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home5Testimonial;
