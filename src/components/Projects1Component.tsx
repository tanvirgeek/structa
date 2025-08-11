"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

type Project = {
  title: string;
  category: string;
  imageSrc: string;
  height: number;
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
    height: 300,
  },
  {
    title: "Office Tower",
    category: "Commercial",
    imageSrc: "/project2.png",
    height: 400,
  },
  {
    title: "Factory Complex",
    category: "Industrial",
    imageSrc: "/project3.png",
    height: 350,
  },
  {
    title: "Kitchen Makeover",
    category: "Renovation",
    imageSrc: "/project1.png",
    height: 250,
  },
  {
    title: "Luxury Living Room",
    category: "Interior",
    imageSrc: "/project2.png",
    height: 320,
  },
  {
    title: "Modern Apartment",
    category: "Residential",
    imageSrc: "/project3.png",
    height: 280,
  },
  {
    title: "Interior Harmony",
    category: "Interior",
    imageSrc: "/project1.png",
    height: 370,
  },
  {
    title: "Shopping Complex",
    category: "Commercial",
    imageSrc: "/project2.png",
    height: 300,
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
      <div className="container">
        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm border transition ${
                activeCategory === cat
                  ? "bg-primary text-background border-primary"
                  : "bg-background text-foreground border-gray-300 hover:bg-gray-100"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry Columns - max 2 */}
        <div className="columns-1 md:columns-2 gap-4 space-y-4">
          {filteredProjects.map((project, index) => (
            <Link
              key={index}
              href="/projectDetails"
              className="break-inside-avoid rounded-lg overflow-hidden shadow-md bg-background block"
            >
              <div
                className="relative w-full"
                style={{ height: `${project.height}px` }}
              >
                <Image
                  src={project.imageSrc}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-foreground">
                  {project.title}
                </h3>
                <p className="text-sm text-foreground">{project.category}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects2Component;
