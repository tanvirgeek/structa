"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

type Project = {
  title: string;
  category: string;
  imageSrc: string;
};

const categories = [
  "All",
  "Residential",
  "Commercial",
  "Industrial",
  "Renovation",
  "Interior",
];

const projects: Project[] = [
  {
    title: "Modern Villa",
    category: "Residential",
    imageSrc: "/project1.png",
  },
  {
    title: "Office Tower",
    category: "Commercial",
    imageSrc: "/project2.png",
  },
  {
    title: "Factory Complex",
    category: "Industrial",
    imageSrc: "/project3.png",
  },
  {
    title: "Kitchen Makeover",
    category: "Renovation",
    imageSrc: "/project1.png",
  },
  {
    title: "Luxury Living Room",
    category: "Interior",
    imageSrc: "/project2.png",
  },
  {
    title: "Modern Apartment",
    category: "Residential",
    imageSrc: "/project3.png",
  },
  {
    title: "Penthouse Concept",
    category: "Interior",
    imageSrc: "/project1.png",
  },
  {
    title: "Shopping Complex",
    category: "Commercial",
    imageSrc: "/project2.png",
  },
];

const Projects2Component = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section className="app-section">
      <div className="container space-y-8">
        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm border transition ${
                activeCategory === cat
                  ? "bg-primary text-white border-primary"
                  : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry Style Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {filteredProjects.map((project, index) => (
            <Link
              key={index}
              href="/projectDetails"
              className="break-inside-avoid bg-white rounded-lg shadow-md overflow-hidden block"
            >
              <div className="relative w-full h-[300px]">
                <Image
                  src={project.imageSrc}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="text-sm text-gray-500">{project.category}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects2Component;
