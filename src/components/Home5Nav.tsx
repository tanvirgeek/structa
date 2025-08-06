"use client";

import { useState } from "react";
import Image from "next/image";
import { FaChevronDown, FaBars, FaTimes, FaTh } from "react-icons/fa";
import Link from "next/link";
import clsx from "clsx";
import Button from "./Button";
import MobileNavItem from "./MobileNavItems";
import { navItems } from "./NavigationBar";

export default function Home5Nav() {
  const [isLeftPanelOpen, setIsLeftPanelOpen] = useState(false);
  const [isRightPanelOpen, setIsRightPanelOpen] = useState(false);

  return (
    <nav className="relative z-50 bg-background/10 shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-6 md:px-0">
        {/* Logo */}
        <Link href="/">
          <Image src="/Logo.png" alt="Logo" width={88} height={20} />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8 text-foreground items-center">
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
        </div>

        {/* Six Dots Icon */}
        <button
          className="text-foreground text-2xl hidden lg:block"
          onClick={() => setIsRightPanelOpen(true)}
        >
          <FaTh />
        </button>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-foreground text-2xl"
          onClick={() => setIsLeftPanelOpen((prev) => !prev)}
        >
          {isLeftPanelOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Left Menu */}
      <div
        className={clsx(
          "fixed top-0 left-0 h-full w-[80%] max-w-xs bg-background text-foreground shadow-md transform transition-transform duration-300 z-40 p-6 overflow-y-auto",
          isLeftPanelOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex justify-between items-center mb-6">
          <Image src="/Logo.png" alt="Logo" width={88} height={20} />
          <button onClick={() => setIsLeftPanelOpen(false)}>
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
            onLinkClick={() => setIsLeftPanelOpen(false)}
          />
        ))}

        <Button
          text="Get a Quote"
          href="/contact"
          onClick={() => setIsLeftPanelOpen(false)}
        />
      </div>

      {/* Right Panel (for md+ screens) */}
      <div
        className={clsx(
          "fixed top-0 right-0 h-full w-[80%] max-w-md bg-background text-foreground shadow-md transform transition-transform duration-300 z-40 p-6 overflow-y-auto md:block hidden",
          isRightPanelOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex justify-between items-center mb-6">
          <Image src="/Logo.png" alt="Logo" width={88} height={20} />
          <button onClick={() => setIsRightPanelOpen(false)}>
            <FaTimes className="text-xl" />
          </button>
        </div>

        <div className="space-y-4">
          <p>
            We are a <strong>digital agency</strong> that helps businesses
            develop immersive and engaging solutions.
          </p>

          <div>
            <h3 className="font-semibold mb-2">Contact</h3>
            <p>740 New South Head Rd, Triple Bay Swfw 3108, New York</p>
          </div>

          <div>
            <p>
              Email:{" "}
              <a href="mailto:hello@structa.agency" className="text-blue-500">
                hello@structa.agency
              </a>
            </p>
            <p>
              Phone:{" "}
              <a href="tel:+18884567890" className="text-blue-500">
                +1 888 456 7890
              </a>
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-lg font-bold">4.8</span>
            <div className="flex text-yellow-400">
              {Array(5)
                .fill(null)
                .map((_, idx) => (
                  <span
                    key={idx}
                    className={idx < 4 ? "text-yellow-400" : "text-gray-300"}
                  >
                    ★
                  </span>
                ))}
            </div>
            <span className="text-gray-500">(2500+ reviews)</span>
          </div>
        </div>
      </div>
    </nav>
  );
}
