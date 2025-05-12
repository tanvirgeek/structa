import Link from "next/link";
import React from "react";
import FeaturedProject from "./FeaturedProject";

const featuredProjects = [
  {
    imageSrc: "/construction.png",
    title: "Construction",
    description:
      "Offering comprehensive architectural services including conceptual design, drafting",
  },
  {
    imageSrc: "/arch.png",
    title: "Architecture",
    description:
      "Offering comprehensive architectural services including conceptual design, drafting",
  },
  {
    imageSrc: "/construction.png",
    title: "Construction",
    description:
      "Offering comprehensive architectural services including conceptual design, drafting",
  },
  {
    imageSrc: "/arch.png",
    title: "Architecture",
    description:
      "Offering comprehensive architectural services including conceptual design, drafting",
  },
  {
    imageSrc: "/construction.png",
    title: "Construction",
    description:
      "Offering comprehensive architectural services including conceptual design, drafting",
  },
  {
    imageSrc: "/arch.png",
    title: "Architecture",
    description:
      "Offering comprehensive architectural services including conceptual design, drafting",
  },
  {
    imageSrc: "/construction.png",
    title: "Construction",
    description:
      "Offering comprehensive architectural services including conceptual design, drafting",
  },
  {
    imageSrc: "/arch.png",
    title: "Architecture",
    description:
      "Offering comprehensive architectural services including conceptual design, drafting",
  },
];

const FeaturedProjects = () => {
  return (
    <div>
      <div className="container mx-auto pt-5 md:pt-20 flex flex-col gap-6 px-4 md:px-0">
        <div className="flex justify-between items-start">
          <div>
            <h6>Recent works</h6>
            <h1 className="text-2xl font-bold">Featured Projects</h1>
          </div>
          <Link href={"/"} className="self-end underline text-sm">
            view all projects
          </Link>
        </div>

        {/* Horizontal scroll container */}
        <div className="overflow-x-auto scrollbar-hidden">
          <div className="flex gap-5 flex-nowrap">
            {featuredProjects.map((item, index) => (
              <div
                key={index}
                className="min-w-[280px] max-w-[320px] flex-shrink-0"
              >
                <FeaturedProject
                  imageSrc={item.imageSrc}
                  title={item.title}
                  description={item.description}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProjects;
