import React from "react";
import Image from "next/image";
import { FaChevronDown } from "react-icons/fa";

const NavigationBar = () => {
  const navItems = [
    {
      item: "home",
      link: "/",
      hasDropdown: true,
      children: [],
    },
    {
      item: "pages",
      link: "/",
      hasDropdown: true,
      children: [],
    },
    {
      item: "projects",
      link: "/",
      hasDropdown: true,
      children: [],
    },
    {
      item: "blog",
      link: "/",
      hasDropdown: true,
      children: [],
    },
    {
      item: "shop",
      link: "/",
      hasDropdown: true,
      children: [],
    },
    {
      item: "contact",
      link: "/",
      hasDropdown: false,
      children: [],
    },
  ];

  return (
    <div className="bg-white">
      <div className="container bg-white flex justify-between mx-auto py-2">
        <div>
          <Image
            src="/Logo.png"
            alt="Logo"
            width={146 * 0.6}
            height={32 * 0.6}
          />
        </div>
        <div className="flex gap-10 text-black">
          {navItems.map((nav) => (
            <div
              key={nav.item}
              className="flex gap-1 items-center cursor-pointer"
            >
              {nav.item}
              {nav.hasDropdown && (
                <FaChevronDown className="w-[14px] h-[14px]" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;
