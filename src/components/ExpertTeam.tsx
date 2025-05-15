"use client";
import Image from "next/image";

const teamMembers = [
  {
    id: 1,
    name: "Alice Johnson",
    title: "Founder & CEO",
    image: "/team1.png",
  },
  {
    id: 2,
    name: "Mark Thompson",
    title: "Project Manager",
    image: "/team3.png",
  },
  {
    id: 3,
    name: "Sophia Lee",
    title: "Head of Engineering",
    image: "/team1.png",
  },
  {
    id: 4,
    name: "Ethan Brown",
    title: "Lead Architect",
    image: "/team2.png",
  },
  {
    id: 5,
    name: "Luna Kim",
    title: "Civil Enginner",
    image: "/team1.png",
  },
  {
    id: 6,
    name: "Noah Smith",
    title: "Mechanical Engineer",
    image: "/team3.png",
  },
];

export default function TeamSection() {
  return (
    <div className="container mx-auto my-32 px-4 md:px-0">
      <h6 className="text-center uppercase tracking-widest text-gray-500 mb-2">
        expert team
      </h6>
      <h1 className="text-2xl font-bold text-center mb-0">
        The experts bringing
      </h1>
      <h1 className="text-2xl font-bold text-center mb-12">
        your design to life
      </h1>

      {/* Mobile: Horizontal Scrollable Row */}
      <div className="md:hidden flex space-x-6 overflow-x-auto pb-4 scrollbar-hide">
        {teamMembers.map((member) => (
          <div
            key={member.id}
            className="flex-shrink-0 w-64 text-center bg-white shadow rounded-lg p-6"
          >
            <Image
              src={member.image}
              alt={member.name}
              width={96}
              height={96}
              className="rounded-full object-cover mx-auto mb-4"
            />
            <h3 className="text-lg font-semibold">{member.name}</h3>
            <p className="text-gray-500">{member.title}</p>
          </div>
        ))}
      </div>
      {/* Desktop: 2 Rows Grid */}
      <div className="hidden md:grid grid-cols-4 gap-8">
        {teamMembers.map((member) => (
          <div
            key={member.id}
            className="text-center bg-white shadow rounded-lg p-6"
          >
            <Image
              src={member.image}
              alt={member.name}
              width={96}
              height={96}
              className="rounded-xl object-cover mx-auto mb-4"
            />
            <h3 className="text-lg font-semibold">{member.name}</h3>
            <p className="text-gray-500">{member.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
