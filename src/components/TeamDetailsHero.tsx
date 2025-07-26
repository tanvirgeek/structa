"use client";

import React from "react";
import Image from "next/image";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaTwitter,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

const TeamDetailsHero = () => {
  const member = {
    name: "Jane Doe",
    designation: "Senior Project Manager",
    imageUrl: "/TeamDetails.jpg",
    bio: `Jane has over 12 years of experience managing complex construction projects across multiple sectors. Her leadership and strategic thinking have driven the successful completion of dozens of large-scale builds with a focus on safety, efficiency, and client satisfaction.`,
    phone: "+1 (555) 123-4567",
    email: "jane.doe@example.com",
    socials: {
      facebook: "#",
      linkedin: "#",
      instagram: "#",
      twitter: "#",
    },
  };

  return (
    <section className="app-section">
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left: Image */}
        <div className="w-full h-[400px] md:h-[500px] relative rounded-xl overflow-hidden shadow">
          <Image
            src={member.imageUrl}
            alt={member.name}
            fill
            className="object-cover"
          />
        </div>

        {/* Right: Details */}
        <div className="space-y-6">
          <div>
            <h2 className="text-3xl font-bold text-foreground">
              {member.name}
            </h2>
            <p className="text-primary text-lg font-medium mt-1">
              {member.designation}
            </p>
          </div>

          <p className="text-muted-foreground leading-7">{member.bio}</p>

          <div className="space-y-2">
            <p className="flex items-center gap-2 text-sm text-foreground">
              <FaPhoneAlt className="text-primary" />
              {member.phone}
            </p>
            <p className="flex items-center gap-2 text-sm text-foreground">
              <FaEnvelope className="text-primary" />
              {member.email}
            </p>
          </div>

          <div className="flex gap-4 text-primary text-lg mt-4">
            <a
              href={member.socials.facebook}
              target="_blank"
              aria-label="Facebook"
            >
              <FaFacebookF className="hover:text-blue-600" />
            </a>
            <a
              href={member.socials.linkedin}
              target="_blank"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn className="hover:text-blue-800" />
            </a>
            <a
              href={member.socials.instagram}
              target="_blank"
              aria-label="Instagram"
            >
              <FaInstagram className="hover:text-pink-500" />
            </a>
            <a
              href={member.socials.twitter}
              target="_blank"
              aria-label="Twitter"
            >
              <FaTwitter className="hover:text-sky-500" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamDetailsHero;
