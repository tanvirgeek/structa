"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { FaChevronDown, FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";
import clsx from "clsx";
import Button from "./Button";
import MobileNavItem from "./MobileNavItems";

const navItems = [
  {
    item: "Home",
    href: "/",
    hasDropdown: true,
    subItems: [{ label: "Home 2", href: "/home2" }],
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
        <Link href="/">
          <Image src="/Logo.png" alt="Logo" width={88} height={20} />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-10 text-foreground items-center">
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
                      className="block px-4 py-2 hover:bg-muted"
                    >
                      {sub.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <Button text="Get a Quote" />
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-foreground text-2xl"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mounted && (
        <div
          className={clsx(
            "fixed top-0 left-0 h-full w-[80%] max-w-xs bg-white text-foreground shadow-md transform transition-transform duration-300 md:hidden z-40 p-6 overflow-y-auto",
            isOpen ? "translate-x-0" : "-translate-x-full"
          )}
        >
          <div className="flex justify-between items-center mb-6">
            <Image src="/Logo.png" alt="Logo" width={88} height={20} />
            <button onClick={() => setIsOpen(false)}>
              <FaTimes className="text-xl" />
            </button>
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
