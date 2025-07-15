"use client";

import React, { useState } from "react";
import Image from "next/image";

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
];

const Projects1Component: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section className="app-section">
      <div className="container">
        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
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

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, idx) => (
            <div
              key={idx}
              className="bg-white shadow-md rounded-xl overflow-hidden"
            >
              <div className="relative h-60 w-full">
                <Image
                  src={project.imageSrc}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-500">{project.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects1Component;
