import React from "react";
import Image from "next/image";
import Link from "next/link";

const services = [
  {
    imageSrc: "/construction.png",
    title: "Construction",
    description:
      "Offering comprehensive architectural services including conceptual design, drafting",
  },
  {
    imageSrc: "/arch.png",
    title: "Architecture",
    description:
      "Offering comprehensive architectural services including conceptual design, drafting",
  },
  {
    imageSrc: "/interior.png",
    title: "Interior Design",
    description:
      "Offering comprehensive architectural services including conceptual design, drafting",
  },
  {
    imageSrc: "/refurbishment.png",
    title: "Refurbishment",
    description:
      "Offering comprehensive architectural services including conceptual design, drafting",
  },
];

const Home3Expertise = () => {
  return (
    <div className="app-section container flex flex-col md:flex-row gap-4">
      {/* Left Side */}
      <div className="md:w-1/2 flex flex-col justify-start">
        <h6>Our Expertise</h6>
        <h2>
          Empowering <br /> Your Building <br />
          Vision
        </h2>
      </div>

      {/* Right Side */}
      <div className="w-full md:w-2/3 grid grid-cols-1 gap-6 md:grid-cols-2">
        {services.map((service, index) => (
          <Link href="/serviceDetails" key={index}>
            <div className="flex flex-col gap-4 items-start cursor-pointer">
              <Image
                src={service.imageSrc}
                alt={service.title}
                width={60}
                height={60}
                className="rounded-md"
              />
              <div>
                <h3 className="!text-sm md:!text-lg font-bold">
                  {service.title}
                </h3>
                <p className="text-gray-500">{service.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home3Expertise;
