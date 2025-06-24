"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { FaChevronDown, FaBars, FaTimes, FaSearch } from "react-icons/fa";
import Link from "next/link";
import clsx from "clsx";
import Button from "./Button";
import MobileNavItem from "./MobileNavItems";

const navItems = [
  {
    item: "Home",
    href: "/",
    hasDropdown: true,
    subItems: [
      { label: "Home 1", href: "/" },
      { label: "Home 2", href: "/home2" },
      { label: "Home 3", href: "/home3" },
    ],
  },
  {
    item: "About",
    href: "/about",
    hasDropdown: true,
    subItems: [
      { label: "Mission", href: "/about#mission" },
      { label: "Vision", href: "/about#vision" },
    ],
  },
  {
    item: "Services",
    href: "/services",
    hasDropdown: true,
    subItems: [
      { label: "Consulting", href: "/services/consulting" },
      { label: "Design", href: "/services/design" },
    ],
  },
  {
    item: "Contact",
    href: "/contact",
    hasDropdown: false,
    subItems: [],
  },
];

export default function Home2Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <nav className="relative z-50">
      {/* Top Section */}
      <div className="hidden sm:block text-sm bg-gray-100">
        <div className="container mx-auto flex justify-between items-center py-2 px-6">
          {/* Left Side: Location */}
          <div>📍 123 Main St, City, Country</div>

          {/* Right Side: Call and Email */}
          <div className="flex space-x-6">
            <div>📞 +1 (234) 567-890</div>
            <div>✉️ info@domain.com</div>
          </div>
        </div>
        <hr className="border-gray-200" />
      </div>

      {/* Main Navbar */}
      <div className="bg-white shadow-md">
        <div className="container mx-auto flex justify-between items-center py-4 px-6 md:px-0">
          {/* Logo */}
          <Link href="/">
            <Image src="/Logo.png" alt="Logo" width={88} height={20} />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-10 text-gray-800 items-center">
            {navItems.map((nav) => (
              <div key={nav.item} className="relative group">
                <Link
                  className="flex gap-1 items-center cursor-pointer font-mono"
                  href={nav.href}
                >
                  {nav.item}
                  {nav.hasDropdown && (
                    <FaChevronDown className="w-[14px] h-[14px]" />
                  )}
                </Link>
                {nav.hasDropdown && nav.subItems.length > 0 && (
                  <div className="absolute left-0 top-full mt-2 bg-white shadow-md rounded-lg opacity-0 group-hover:opacity-100 group-hover:translate-y-1 transition-all duration-200 min-w-[160px] py-2 z-50">
                    {nav.subItems.map((sub) => (
                      <Link
                        key={sub.href}
                        href={sub.href}
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            {/* Search Button */}
            <button className="flex items-center space-x-2 hover:text-blue-500">
              <FaSearch className="w-4 h-4" />
            </button>
            <Button text="Get a Quote" />
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-gray-800 text-2xl"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mounted && (
        <div
          className={clsx(
            "fixed top-0 left-0 h-full w-[80%] max-w-xs bg-white text-gray-800 shadow-md transform transition-transform duration-300 md:hidden z-40 p-6 overflow-y-auto",
            isOpen ? "translate-x-0" : "-translate-x-full"
          )}
        >
          <div className="flex justify-between items-center mb-6">
            <Image src="/Logo.png" alt="Logo" width={88} height={20} />
            <button onClick={() => setIsOpen(false)}>
              <FaTimes className="text-xl" />
            </button>
          </div>

          {/* Top Section in Mobile Menu */}
          <div className="text-sm text-gray-700 mb-6">
            <div className="mb-2">📍 123 Main St, City, Country</div>
            <div className="flex flex-col space-y-1">
              <div>📞 +1 (234) 567-890</div>
              <div>✉️ info@domain.com</div>
            </div>
          </div>

          {navItems.map((nav) => (
            <MobileNavItem
              key={nav.item}
              label={nav.item}
              href={nav.href}
              hasDropdown={nav.hasDropdown}
              subItems={nav.subItems}
              onLinkClick={() => setIsOpen(false)}
            />
          ))}

          <Button text="Get a Quote" onClick={() => setIsOpen(false)} />
        </div>
      )}
    </nav>
  );
}
