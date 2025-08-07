"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

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
    imageSrc: "/project2.png",
    title: "North Carolina Centre",
    description: "Building, Renovation",
  },
  {
    imageSrc: "/project1.png",
    title: "Tranquil Heights Homes",
    description:
      "Offering comprehensive architectural services including conceptual design, drafting",
  },
];

const Home3FeaturedProjects: React.FC = () => {
  return (
    <section className="container app-section mx-auto px-4 py-8">
      {/* Header Section */}
      <div className="relative mb-8">
        {/* Mobile Layout */}
        <div className="md:hidden text-center">
          <h6>Recent Projects</h6>
          <h2>Featured Projects</h2>
          <Link
            href="/projects1"
            className="block mt-4 text-foreground hover:underline text-sm"
          >
            View All Projects
          </Link>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:flex justify-between items-center">
          <div className="text-center w-full">
            <h6>Recent Projects</h6>
            <h2>Featured Projects</h2>
          </div>
          <Link
            href="/projects2"
            className="absolute right-0 -bottom-2 text-foreground hover:underline text-sm"
          >
            View All Projects
          </Link>
        </div>
      </div>

      {/* Grid Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {featuredProjects.map((project, index) => (
          <Link href="/projectDetails" key={index}>
            <div
              className={`relative overflow-hidden shadow-md cursor-pointer ${"row-span-2 h-80 md:h-120"}`}
            >
              <Image
                src={project.imageSrc}
                alt={project.title}
                layout="fill"
                objectFit="cover"
                className=""
              />
              <div className="absolute bottom-0 left-0 right-0 bg-background p-4">
                <h4>{project.title}</h4>
                <p>{project.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Home3FeaturedProjects;
