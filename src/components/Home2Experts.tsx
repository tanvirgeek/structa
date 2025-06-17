import React from "react";
import { FaLinkedin } from "react-icons/fa";

type Expert = {
  name: string;
  designation: string;
  imageUrl: string;
  linkedinUrl: string;
};

const experts: Expert[] = [
  {
    name: "Jane Doe",
    designation: "Structural Engineer",
    imageUrl: "/experts/jane.jpg",
    linkedinUrl: "https://linkedin.com/in/janedoe",
  },
  {
    name: "John Smith",
    designation: "Architect",
    imageUrl: "/experts/john.jpg",
    linkedinUrl: "https://linkedin.com/in/johnsmith",
  },
  // Add more experts as needed
];

const Home2Experts = () => {
  return (
    <div className="app-section container py-12">
      <div className="mb-10 text-center">
        <h6 className="text-gray-500 uppercase tracking-widest">Expert Team</h6>
        <h2 className="text-3xl md:text-4xl font-bold">
          The experts bringing <br /> your design to life
        </h2>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {experts.map((expert, index) => (
          <a
            key={index}
            href={expert.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="relative group rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition"
          >
            <img
              src={expert.imageUrl}
              alt={expert.name}
              className="w-full h-80 object-cover"
            />

            {/* Overlay info */}
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white p-4">
              <h3 className="text-lg font-semibold">{expert.name}</h3>
              <p className="text-sm">{expert.designation}</p>
            </div>

            {/* LinkedIn icon on hover */}
            <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
              <FaLinkedin className="text-white text-3xl" />
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Home2Experts;
