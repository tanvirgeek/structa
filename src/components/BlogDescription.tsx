"use client";

import React from "react";
import Image from "next/image";
import { FaQuoteLeft } from "react-icons/fa";

const BlogDescription = () => {
  const firstHalf = `Modern construction design is undergoing a revolutionary transformation. From sustainable materials to the integration of AI and robotics, today's construction industry is more dynamic than ever. Architects are leveraging smart technologies to craft buildings that are not only visually striking but also energy-efficient. The use of recycled materials and green architecture has become more than a trend—it's now an industry standard. Alongside this, the rise of prefabricated construction allows entire structures to be assembled in record time, reducing waste and improving cost efficiency. Construction sites are now equipped with drones for surveying and robots for bricklaying, changing the pace of development forever.

Moreover, with smart home systems becoming more popular, residential buildings are designed with automation in mind. Builders and designers consider factors such as thermal performance, natural lighting, and air circulation from the earliest stages. City planners are also shifting toward more sustainable layouts, promoting walkability and minimizing the environmental footprint of urban growth. The collaboration between engineers, environmentalists, and software developers is leading to designs that are adaptive and responsive to changing climate conditions. With 3D printing making its way into large-scale construction, the future promises custom-made structures built faster and cheaper than ever.`;

  const quote = `“Innovation in construction is not just a trend; it’s a revolution that is reshaping the way we build our world.”`;

  const secondHalf = `Digital twins, which create virtual replicas of real-world structures, are enabling constant monitoring and optimization of building performance. These advancements help identify issues before they become costly problems and ensure greater safety standards. Meanwhile, modular construction continues to gain popularity due to its scalability and minimal site disruption. It allows for buildings to be constructed off-site and assembled on-site within a matter of days. Sustainability is also being addressed through solar-integrated façades, rainwater harvesting, and self-healing concrete.

The human experience is also at the core of these new design philosophies. Structures are being designed to enhance mental well-being, productivity, and connection to nature. Biophilic designs that incorporate plants and natural elements into buildings have shown positive impacts on occupants’ health. In essence, construction is no longer just about building—it’s about creating smarter, more humane environments. As we push the boundaries of what's possible, the fusion of creativity and cutting-edge technology is redefining the skylines of the future.`;

  const categories = ["Technology", "Architecture", "Sustainability"];

  return (
    <section className="container my-12 space-y-10">
      {/* First Half of Description */}
      <p className="text-muted-foreground text-lg leading-8">{firstHalf}</p>

      {/* Quote */}
      <div className="flex flex-col items-center text-center space-y-4">
        <FaQuoteLeft className="text-primary text-4xl" />
        <blockquote className="text-xl italic text-foreground max-w-2xl">
          {quote}
        </blockquote>
      </div>

      {/* Second Half of Description */}
      <p className="text-muted-foreground text-lg leading-8">{secondHalf}</p>

      {/* Two side-by-side images */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="relative w-full h-64 rounded-xl overflow-hidden">
          <Image
            src="/blog1.png"
            alt="Construction Site"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative w-full h-64 rounded-xl overflow-hidden">
          <Image
            src="/blog2.png"
            alt="Modern Building"
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Categories */}
      <div className="flex flex-wrap gap-4 items-center">
        <h4 className="font-semibold text-foreground">Categories:</h4>
        {categories.map((cat, idx) => (
          <span
            key={idx}
            className="text-sm text-primary bg-primary/10 px-3 py-1 rounded-full"
          >
            {cat}
          </span>
        ))}
      </div>
    </section>
  );
};

export default BlogDescription;
