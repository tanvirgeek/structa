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
    imageSrc: "/project3.png",
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

const Home5Projects: React.FC = () => {
  return (
    <section className="app-section">
      <div className="flex gap-6 px-4 overflow-scroll scrollbar-hidden">
        {featuredProjects.map((project, index) => (
          <Link
            key={index}
            href="/projectDetails"
            className="relative w-[440px] h-[500px] flex-shrink-0 overflow-hidden group rounded-xl shadow-lg"
          >
            <Image
              src={project.imageSrc}
              alt={project.title}
              fill
              className="object-cover rounded-xl"
            />

            {/* Hover Overlay */}
            <div className="absolute bottom-0 left-0 w-[80%] h-1/4 bg-black bg-opacity-80 text-white p-4 opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-tr-xl">
              <h4 className="!text-background">{project.title}</h4>
              <p className="!text-background">{project.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Home5Projects;
