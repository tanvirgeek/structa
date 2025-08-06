import Link from "next/link";
import React from "react";
import FeaturedProject from "./FeaturedProject";

const featuredProjects = [
  {
    imageSrc: "/project1.png",
    title: "North Carolina Centre",
    description: "Building, Renovation",
    href: "/projectDetails",
  },
  {
    imageSrc: "/project2.png",
    title: "Tranquil Heights Homes",
    description:
      "Offering comprehensive architectural services including conceptual design, drafting",
    href: "/projectDetails",
  },
  {
    imageSrc: "/project1.png",
    title: "North Carolina Centre",
    description: "Building, Renovation",
    href: "/projectDetails",
  },
  {
    imageSrc: "/project2.png",
    title: "Tranquil Heights Homes",
    description:
      "Offering comprehensive architectural services including conceptual design, drafting",
    href: "/projectDetails",
  },
];

const FeaturedProjects = () => {
  return (
    <div>
      <div className="app-section container flex flex-col gap-6 px-4 md:px-0">
        <div className="flex justify-between items-start">
          <div>
            <h6>Recent works</h6>
            <h2>Featured Projects</h2>
          </div>
          <Link href={"/projects1"} className="self-end underline text-sm">
            view all projects
          </Link>
        </div>

        {/* Horizontal scroll container */}
        <div className="overflow-x-auto scrollbar-hidden">
          <div className="flex gap-5 flex-nowrap">
            {featuredProjects.map((item, index) => (
              <div key={index} className="min-w-[320px] flex-shrink-0">
                <Link href={item.href}>
                  <FeaturedProject
                    imageSrc={item.imageSrc}
                    title={item.title}
                    description={item.description}
                  />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProjects;
