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

export default function CompanyLogoMarquee() {
  return (
    <div className="overflow-hidden w-full pb-24 bg-white">
      <div className="relative w-full">
        <div className="animate-marquee whitespace-nowrap flex gap-10">
          {[...logos, ...logos].map((logo, index) => (
            <div key={index} className="w-32 h-20 relative flex-shrink-0">
              <Image
                src={logo}
                alt={`Company logo ${index + 1}`}
                fill
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
