"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import clsx from "clsx";

const services = [
  { name: "Project Management", href: "/serviceDetails" },
  { name: "Structural", href: "/serviceDetails" },
  { name: "Interior Design", href: "/serviceDetails" },
  { name: "Construction", href: "/serviceDetails" },
  { name: "Renovation", href: "/serviceDetails" },
  { name: "Consultancy", href: "/serviceDetails" },
];

const ServiceButtonGroup = () => {
  const pathname = usePathname();

  return (
    <div className="flex flex-col gap-3">
      {services.map((service) => {
        const isActive = service.name == "Project Management";

        return (
          <Link
            key={service.name}
            href={service.href}
            className={clsx(
              "flex items-center justify-between px-5 py-3 border border-black text-sm font-medium transition",
              {
                "bg-primary text-white": isActive,
                "bg-transparent text-foreground hover:bg-accent": !isActive,
              }
            )}
          >
            <span>{service.name}</span>
            <FaArrowRight className="w-4 h-4 -rotate-45" />
          </Link>
        );
      })}
    </div>
  );
};

export default ServiceButtonGroup;
