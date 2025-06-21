"use client";

import Image from "next/image";

const logos = [
  "/Logo1.png",
  "/Logo2.png",
  "/Logo3.png",
  "/Logo4.png",
  "/Logo5.png",
  "/Logo6.png",
];

export default function Comapnies() {
  return (
    <div className="w-full overflow-hidden bg-white py-12">
      <div className="relative w-full">
        <div className="flex gap-10 whitespace-nowrap logo-marquee">
          {[...logos, ...logos].map((logo, index) => (
            <div
              key={index}
              className="relative w-32 h-20 flex-shrink-0 flex items-center justify-center transition-transform duration-300 hover:scale-110 hover:shadow-md overflow-hidden border-none"
            >
              <Image
                src={logo}
                alt={`Company logo ${index + 1}`}
                fill
                className="object-contain transition-all duration-300 hover:filter hover:hue-rotate-45 hover:sepia hover:saturate-200 border-none"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
