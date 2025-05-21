"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { FaChevronDown, FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";
import Button from "./Button";
import clsx from "clsx";

const navItems = [
  { item: "Home", hasDropdown: true, href: "/" },
  { item: "About", hasDropdown: true, href: "/about" },
  { item: "Services", hasDropdown: true, href: "/services" },
  { item: "Contact", hasDropdown: false, href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <nav className="bg-background shadow-md relative z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6 md:px-0">
        {/* Logo */}
        <Image src="/Logo.png" alt="Logo" width={88} height={20} />

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-10 text-foreground">
          {navItems.map((nav) => (
            <Link
              key={nav.item}
              className="flex gap-1 items-center cursor-pointer font-mono"
              href={nav.href}
            >
              {nav.item}
              {nav.hasDropdown && (
                <FaChevronDown className="w-[14px] h-[14px]" />
              )}
            </Link>
          ))}
          <Button text="Get a Quote" />
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          className="md:hidden text-foreground text-2xl"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu: render only on client to avoid hydration mismatch */}
      {mounted && (
        <div
          className={clsx(
            "absolute top-0 left-0 w-full bg-white text-foreground shadow-md transition-transform duration-400 transform md:hidden z-40",
            isOpen ? "translate-y-14" : "-translate-y-full"
          )}
        >
          <div className="py-4 px-6 border-t">
            {navItems.map((nav) => (
              <Link
                key={nav.item}
                className="block py-2"
                href={nav.href}
                onClick={() => setIsOpen(false)}
              >
                {nav.item}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
