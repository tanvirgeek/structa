import React from "react";
import ServicesList from "./ServiceList";

const Services = () => {
  const services = [
    {
      imageSrc: "/construction.png",
      title: "Construction",
      description:
        "Offering comprehensive architectural services including conceptual design, drafting",
      href: "/serviceDetails",
    },
    {
      imageSrc: "/arch.png",
      title: "Architecture",
      description:
        "Offering comprehensive architectural services including conceptual design, drafting",
      href: "/serviceDetails",
    },
    {
      imageSrc: "/interior.png",
      title: "Interior Design",
      description:
        "Offering comprehensive architectural services including conceptual design, drafting",
      href: "/serviceDetails",
    },
    {
      imageSrc: "/refurbishment.png",
      title: "Refurbishment",
      description:
        "Offering comprehensive architectural services including conceptual design, drafting",
      href: "/serviceDetails",
    },
    {
      imageSrc: "/construction.png",
      title: "Construction",
      description:
        "Offering comprehensive architectural services including conceptual design, drafting",
      href: "/serviceDetails",
    },
    {
      imageSrc: "/arch.png",
      title: "Architecture",
      description:
        "Offering comprehensive architectural services including conceptual design, drafting",
      href: "/serviceDetails",
    },
    {
      imageSrc: "/interior.png",
      title: "Interior Design",
      description:
        "Offering comprehensive architectural services including conceptual design, drafting",
      href: "/serviceDetails",
    },
    {
      imageSrc: "/refurbishment.png",
      title: "Refurbishment",
      description:
        "Offering comprehensive architectural services including conceptual design, drafting",
      href: "/serviceDetails",
    },
  ];

  return (
    <div>
      <div className="app-section container">
        <h6>Our Services</h6>
        <h2>
          We provide best service
          <br />
          to our clients
        </h2>
        <ServicesList services={services} />
      </div>
    </div>
  );
};

export default Services;
