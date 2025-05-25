"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight, FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    image: "/profile1.png",
    name: "Engr. Ahsan Rahman",
    designation: "Project Manager, BuildWell Ltd.",
    recommendation:
      "Working with this construction team was a game changer. They delivered our commercial project ahead of schedule with zero compromise on quality.",
  },
  {
    id: 2,
    image: "/profile2.png",
    name: "Sarah Malik",
    designation: "Architect, UrbanVista",
    recommendation:
      "From foundation to finishing, their attention to structural integrity and aesthetics was outstanding. Highly recommended!",
  },
];

export default function ClientRecommendationSlider() {
  const [index, setIndex] = useState(0);
  const [hasMounted, setHasMounted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const nextSlide = () => {
    setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  useEffect(() => {
    setHasMounted(true);
  }, []);

  useEffect(() => {
    if (!hasMounted || isHovered) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [hasMounted, isHovered]);

  if (!hasMounted) return null;

  const testimonial = testimonials[index];

  return (
    <div className="app-section">
      <div className="max-w-4xl mx-auto py-16 px-6 text-center">
        <div
          className="relative bg-white shadow-2xl rounded-2xl px-10 py-14"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Top Icon */}
          <div className="text-primary text-4xl mb-6">
            <FaQuoteLeft className="mx-auto" />
          </div>

          {/* Recommendation */}
          <p className="text-xl italic text-gray-700 mb-10 max-w-3xl mx-auto">
            “{testimonial.recommendation}”
          </p>

          {/* Client Info */}
          <div className="flex items-center justify-center gap-6">
            <div className="w-20 h-20 relative rounded-full overflow-hidden border border-primary">
              <Image
                src={testimonial.image}
                alt={testimonial.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="text-left">
              <h4 className="text-lg font-bold text-gray-800">
                {testimonial.name}
              </h4>
              <p className="text-sm text-gray-500">{testimonial.designation}</p>
            </div>
          </div>

          {/* Arrows */}
          <div className="absolute left-4 top-1/2 -translate-y-1/2">
            <button
              onClick={prevSlide}
              className="p-3 bg-gray-100 rounded-full hover:bg-gray-200 transition"
            >
              <FaChevronLeft />
            </button>
          </div>

          <div className="absolute right-4 top-1/2 -translate-y-1/2">
            <button
              onClick={nextSlide}
              className="p-3 bg-gray-100 rounded-full hover:bg-gray-200 transition"
            >
              <FaChevronRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
