import React from "react";
import { FaLinkedin } from "react-icons/fa";

const teamMembers = [
  {
    id: 1,
    name: "Alice Johnson",
    title: "Founder & CEO",
    image: "/team1.png",
    linkedin: "https://linkedin.com/in/alicejohnson",
  },
  {
    id: 2,
    name: "Mark Thompson",
    title: "Project Manager",
    image: "/team3.png",
    linkedin: "https://linkedin.com/in/markthompson",
  },
  {
    id: 3,
    name: "Sophia Lee",
    title: "Head of Engineering",
    image: "/team1.png",
    linkedin: "https://linkedin.com/in/sophialee",
  },
  {
    id: 4,
    name: "Ethan Brown",
    title: "Lead Architect",
    image: "/team2.png",
    linkedin: "https://linkedin.com/in/ethanbrown",
  },
  {
    id: 5,
    name: "Luna Kim",
    title: "Civil Engineer",
    image: "/team1.png",
    linkedin: "https://linkedin.com/in/lunakim",
  },
  {
    id: 6,
    name: "Noah Smith",
    title: "Mechanical Engineer",
    image: "/team3.png",
    linkedin: "https://linkedin.com/in/noahsmith",
  },
];

const Home2Experts = () => {
  return (
    <div className="app-section container py-12">
      <div className="mb-10 text-center">
        <h6>Expert Team</h6>
        <h2>
          The experts bringing <br /> your design to life
        </h2>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {teamMembers.map((member) => (
          <a
            key={member.id}
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-80 object-cover"
            />

            {/* Bottom overlay with name + title */}
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white px-4 py-3">
              <h5 className="text-white">{member.name}</h5>
              <p className="">{member.title}</p>
            </div>

            {/* Hover LinkedIn Icon */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/30 bg-opacity-60 opacity-0 group-hover:opacity-100 transition">
              <FaLinkedin className="text-white text-3xl" />
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Home2Experts;
