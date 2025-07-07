"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { FaChevronDown, FaBars, FaTimes, FaSearch } from "react-icons/fa";
import Link from "next/link";
import clsx from "clsx";
import Button from "./Button";
import MobileNavItem from "./MobileNavItems";
import { navItems } from "./NavigationBar";

export default function Home2Navbar({ showQuoteButton = true }) {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <nav className="relative z-50">
      {/* Top Section */}
      <div className="hidden sm:block text-sm bg-gray-100">
        <div className="container mx-auto flex justify-between items-center py-2 px-6">
          <div>📍 123 Main St, City, Country</div>
          <div className="flex space-x-6">
            <div>📞 +1 (234) 567-890</div>
            <div>✉️ info@domain.com</div>
          </div>
        </div>
        <hr className="border-gray-200" />
      </div>

      {/* Main Navbar */}
      <div className="bg-background shadow-md">
        <div className="container mx-auto flex justify-between items-center py-4 px-6 md:px-0">
          <Link href="/">
            <Image src="/Logo.png" alt="Logo" width={88} height={20} />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-10 text-foreground items-center">
            {navItems.map((nav) => (
              <div key={nav.item} className="relative group inline-block">
                {/* Main Nav Link + Dropdown Icon */}
                <div className="flex gap-1 items-center font-mono cursor-pointer">
                  {nav.hasDropdown ? (
                    <span className="transition-colors duration-200 text-foreground">
                      {nav.item}
                    </span>
                  ) : (
                    <Link
                      href={nav.href}
                      className="transition-colors duration-200 hover:text-primary"
                    >
                      {nav.item}
                    </Link>
                  )}

                  {nav.hasDropdown && (
                    <FaChevronDown className="w-[14px] h-[14px] transition-transform duration-200 group-hover:rotate-180" />
                  )}
                </div>

                {/* Dropdown Items */}
                {nav.hasDropdown && nav.subItems.length > 0 && (
                  <div className="absolute left-0 top-full mt-2 bg-background shadow-md rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 min-w-[160px] py-2 z-50">
                    {nav.subItems.map((sub) => (
                      <Link
                        key={sub.href}
                        href={sub.href}
                        className="block px-4 py-2 hover:bg-muted hover:text-primary hover:bg-gray-100 transition-all duration-200"
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            {/* Search Button */}
            <button
              onClick={() => setShowSearch(true)}
              className="flex items-center space-x-2 hover:text-primary transition-colors duration-200"
            >
              <FaSearch className="w-4 h-4" />
            </button>
            {showQuoteButton && <Button text="Get a Quote" />}
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
            "fixed top-0 left-0 h-full w-[80%] max-w-xs bg-background text-gray-800 shadow-md transform transition-transform duration-300 md:hidden z-40 p-6 overflow-y-auto",
            isOpen ? "translate-x-0" : "-translate-x-full"
          )}
        >
          <div className="flex justify-between items-center mb-6">
            <Image src="/Logo.png" alt="Logo" width={88} height={20} />
            <button onClick={() => setIsOpen(false)}>
              <FaTimes className="text-xl" />
            </button>
          </div>

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

      {/* Search Bar Popup */}
      {showSearch && (
        <div className="fixed inset-0 bg-foreground/50 flex items-start justify-center z-50 pt-24">
          <div className="bg-background w-full max-w-md mx-4 rounded-lg shadow-lg relative p-4">
            <button
              onClick={() => setShowSearch(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              <FaTimes className="text-lg" />
            </button>
            <input
              type="text"
              placeholder="Search..."
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
      )}
    </nav>
  );
}
