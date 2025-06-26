"use client";

import React from "react";
import Image from "next/image";

interface CardProps {
  image: string;
  title: string;
}

const Home3Services: React.FC = () => {
  const cards: CardProps[] = [
    {
      image: "/home3_services1.png",
      title: "Renovations and Remodeling",
    },
    {
      image: "/home3_services2.png",
      title: "Building construction",
    },
    {
      image: "/home3_services3.png",
      title: "Architectural planning",
    },
  ];

  return (
    <div className="container mx-auto app-section flex flex-col items-center justify-center gap-4 px-4">
      {/* Top Heading */}
      <h6 className="text-sm text-gray-500 text-center">our services</h6>

      {/* Main Heading */}
      <h2 className="text-3xl font-bold text-center mt-2 mb-8">
        We Provide Best Service <br /> To Our Clients
      </h2>

      {/* Grid Layout for Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-32">
        {cards.map((card, index) => (
          <div
            key={index}
            className="relative group overflow-visible shadow-lg"
          >
            {/* Card Image with Hover Effect */}
            <div className="overflow-hidden">
              <Image
                src={card.image}
                alt={card.title}
                width={1000}
                height={600}
                className="w-full h-[350px] object-cover transform transition-transform duration-300 group-hover:scale-110"
              />
            </div>

            {/* Overlay */}
            <div className="absolute bottom-[-20%] left-1/2 transform -translate-x-1/2 bg-white p-4 w-3/4 shadow-lg transition-transform duration-300 ease-out">
              <h4 className="mb-2 text-center">{card.title}</h4>
              <button className="text-primary hover:text-blue-700 font-medium block mx-auto cursor-pointer transition-colors duration-300">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home3Services;
