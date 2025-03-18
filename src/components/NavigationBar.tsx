"use client";

import { useState } from "react";
import Image from "next/image";
import { FaChevronDown, FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";
import Button from "./Button";

const navItems = [
  { item: "Home", hasDropdown: true },
  { item: "About", hasDropdown: true },
  { item: "Services", hasDropdown: true },
  { item: "Contact", hasDropdown: false },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-background shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-6 px-4 md:px-0">
        {/* Logo */}
        <Image src="/Logo.png" alt="Logo" width={146 * 0.6} height={32 * 0.6} />

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-10 text-foreground">
          {navItems.map((nav) => (
            <Link
              key={nav.item}
              className="flex gap-1 items-center cursor-pointer font-mono"
              href={"/"}
            >
              {nav.item}
              {nav.hasDropdown && (
                <FaChevronDown className="w-[14px] h-[14px]" />
              )}
            </Link>
          ))}
          <Button text="Get a Quote" />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-foreground text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white py-4 px-6 border-t text-foreground">
          {navItems.map((nav) => (
            <Link
              key={nav.item}
              className="flex justify-between items-center py-2 cursor-pointer"
              href={"/"}
            >
              {nav.item}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
