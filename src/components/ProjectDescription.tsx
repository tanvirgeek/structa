"use client";

import React from "react";
import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";

const ProjectDescription = () => {
  const description = `This modern residential project showcases the perfect blend of
  functionality, aesthetics, and sustainability. Our team focused on
  precision, design efficiency, and top-notch materials to deliver a
  lasting structure.`;

  const features = [
    "Energy-efficient architecture",
    "Smart home integrations",
    "Eco-friendly materials",
    "Minimalist interior design",
  ];

  return (
    <section className="container app-section">
      {/* Heading + Description */}
      <div className="md:flex md:items-start md:gap-12">
        {/* Left Column */}
        <h2 className="text-3xl font-bold mb-4 md:mb-0 flex-1">
          A showcase <br /> of excellence in modern home construction
        </h2>

        {/* Right Column */}
        <p className="text-muted-foreground text-lg leading-7 flex-1">
          Crafting spaces that resonate with you through Interior Design. Merge
          fact with aesthetics, creation. Id suspendisse vel in non arcu,
          interdum quis placerat accumsan. InVision is the visual collaboration
          platform powering the world's smartest companies. More than 7 million
          people across global enterprises. <br />
          <br />
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
        </p>
      </div>

      {/* Details Row */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        <div>
          <p className="text-sm text-muted-foreground uppercase">Client</p>
          <p className="text-lg font-semibold text-foreground">John Doe</p>
        </div>
        <div>
          <p className="text-sm text-muted-foreground uppercase">Budget</p>
          <p className="text-lg font-semibold text-foreground">$500,000</p>
        </div>
        <div>
          <p className="text-sm text-muted-foreground uppercase">Location</p>
          <p className="text-lg font-semibold text-foreground">New York, USA</p>
        </div>
        <div>
          <p className="text-sm text-muted-foreground uppercase">Completion</p>
          <p className="text-lg font-semibold text-foreground">May 2025</p>
        </div>
        <div>
          <p className="text-sm text-muted-foreground uppercase">Category</p>
          <p className="text-lg font-semibold text-foreground">Residential</p>
        </div>
      </div>

      {/* Two Images */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="relative h-84 w-full rounded-xl overflow-hidden">
          <Image
            src="/project1.png"
            alt="Project Image 1"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative h-84 w-full rounded-xl overflow-hidden">
          <Image
            src="/project2.png"
            alt="Project Image 2"
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Section with Feature List */}
      <div className="md:flex gap-12 items-start">
        <h3 className="text-2xl font-semibold min-w-[200px] mb-6 md:mb-0">
          Key Features
        </h3>
        <div className="space-y-4">
          <p className="text-muted-foreground leading-7">{description}</p>
          <ul className="space-y-2">
            {features.map((item, idx) => (
              <li key={idx} className="flex items-start gap-3 text-foreground">
                <FaCheckCircle className="text-primary mt-1" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ProjectDescription;
