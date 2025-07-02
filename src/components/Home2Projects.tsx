"use client";

import { useRef } from "react";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

type Project = {
  imageSrc: string;
  title: string;
  description: string;
};

const featuredProjects: Project[] = [
  {
    imageSrc: "/project1.png",
    title: "North Carolina Centre",
    description: "Building, Renovation",
  },
  {
    imageSrc: "/project2.png",
    title: "Tranquil Heights Homes",
    description:
      "Offering comprehensive architectural services including conceptual design, drafting",
  },
  {
    imageSrc: "/project1.png",
    title: "Modern Office Complex",
    description: "Corporate design and execution",
  },
  {
    imageSrc: "/project2.png",
    title: "Urban Retreat",
    description: "Residential Planning",
  },
  {
    imageSrc: "/project1.png",
    title: "New Horizons Tower",
    description: "Commercial & residential",
  },
];

export default function ImageSlider() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const scrollAmount = 400; // You can change this value to fine-tune

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -scrollAmount, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  return (
    <div className="app-section container overflow-hidden relative">
      {/* Scroll Buttons */}
      <button
        onClick={scrollLeft}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-background p-2 rounded-full shadow hover:bg-gray-200"
      >
        <FaChevronLeft size={20} />
      </button>
      <button
        onClick={scrollRight}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-background p-2 rounded-full shadow hover:bg-gray-200"
      >
        <FaChevronRight size={20} />
      </button>

      {/* Slider */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto no-scrollbar scroll-smooth space-x-4 px-4 scrollbar-hidden"
      >
        {featuredProjects.map((project, index) => (
          <div key={index} className="flex-none w-[400px]">
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src={project.imageSrc}
                alt={project.title}
                fill
                className="object-cover"
                sizes="400px"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-foreground/60 text-background p-4">
                <h3 className="!text-primary font-bold">{project.title}</h3>
                <p className="text-sm">{project.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
