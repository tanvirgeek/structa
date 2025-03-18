import React from "react";
import ServicesList from "./ServiceList";

const Services = () => {
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
  return (
    <div>
      <div className="container mx-auto my-32 px-4 md:px-0">
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
