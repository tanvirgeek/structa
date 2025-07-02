"use client";

import Image from "next/image";
import { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const featuredProjects = [
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
    title: "North Carolina Centre",
    description: "Building, Renovation",
  },
  {
    imageSrc: "/project2.png",
    title: "Tranquil Heights Homes",
    description:
      "Offering comprehensive architectural services including conceptual design, drafting",
  },
];

const Home4FeaturedProjects = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -300 : 300,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="bg-foreground text-background">
      <div className="flex flex-col md:flex-row gap-10 justify-between items-start app-section container">
        {/* Left Section */}
        <div className="flex flex-col justify-between md:w-1/3 w-full h-full md:min-h-[400px]">
          <div>
            <h6 className="!text-background mb-3">Featured Projects</h6>
            <h2 className="!text-background mb-6">
              Recent <br /> Works
            </h2>
          </div>

          <div className="flex-grow" />

          <div className="flex gap-4">
            <button
              onClick={() => scroll("left")}
              className="p-3 border border-background rounded-full hover:bg-background hover:text-foreground transition"
            >
              <FaChevronLeft />
            </button>
            <button
              onClick={() => scroll("right")}
              className="p-3 border border-background rounded-full hover:bg-background hover:text-foreground transition"
            >
              <FaChevronRight />
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div
          ref={scrollRef}
          className="md:w-2/3 w-full overflow-x-auto whitespace-nowrap scrollbar-hidden"
        >
          {featuredProjects.map((project, idx) => (
            <div
              key={idx}
              className="inline-block w-[280px] md:w-[350px] mr-6 align-top whitespace-normal break-words"
            >
              <div className="relative w-full h-[200px] md:h-[250px] rounded overflow-hidden mb-3">
                <Image
                  src={project.imageSrc}
                  alt={project.title}
                  fill
                  className="object-cover rounded"
                />
              </div>
              <h3 className="!text-background break-words">{project.title}</h3>
              <p className="!text-background break-words">
                {project.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home4FeaturedProjects;
