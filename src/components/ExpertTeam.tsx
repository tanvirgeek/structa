"use client";
import Image from "next/image";
import Link from "next/link";
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

export default function TeamSection() {
  const renderCard = (member: (typeof teamMembers)[0]) => (
    <Link
      key={member.id}
      href={member.linkedin}
      target="_blank"
      rel="noopener noreferrer"
      className="group block text-center bg-white shadow rounded-lg p-6 overflow-hidden transition-transform hover:scale-[1.02]"
    >
      {/* Image Container with Hover Zoom and Overlay */}
      <div className="w-full h-72 relative overflow-hidden rounded-md">
        <Image
          src={member.image}
          alt={member.name}
          fill
          className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-30 transition-opacity duration-300 flex items-center justify-center">
          <FaLinkedin className="text-white text-3xl group-hover:opacity-100 transition-opacity" />
        </div>
      </div>

      {/* Name & Title */}
      <h4 className="text-lg font-semibold mt-4">{member.name}</h4>
      <p className="text-gray-500">{member.title}</p>
    </Link>
  );

  return (
    <div className="app-section container">
      <h6 className="text-center uppercase tracking-widest text-gray-500 mb-2">
        expert team
      </h6>
      <div className="text-center">
        <h2>The experts bringing</h2>
        <h2>your design to life</h2>
      </div>

      {/* Mobile: Horizontal Scrollable Row */}
      <div className="md:hidden flex space-x-6 overflow-x-auto pb-4 scrollbar-hide">
        {teamMembers.map((member) => (
          <div key={member.id} className="flex-shrink-0 w-[250px]">
            {renderCard(member)}
          </div>
        ))}
      </div>

      {/* Desktop: 2 Rows Grid */}
      <div className="hidden md:grid grid-cols-4 gap-8">
        {teamMembers.map(renderCard)}
      </div>
    </div>
  );
}
