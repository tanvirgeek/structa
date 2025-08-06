"use client";

import React from "react";
import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import Image from "next/image";
import Button from "./Button";

const Home2Footer = () => {
  return (
    <footer className="app-section bg-foreground text-gray-300 pt-12 px-4 md:px-0">
      {/* Top Section */}
      <div className=" container">
        <div className="">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left">
            <h3 className="!text-background mb-4 md:mb-0">
              Building a better <br /> Future with Our Help
            </h3>
            <div className="w-full md:w-auto">
              <Button text={"Get A Quote"} href="/contact" />
            </div>
          </div>
          <hr className="border-gray-700 mt-4" />
        </div>

        {/* Footer Main Section */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
          {/* Column 1: Logo, Paragraph, Social Links */}
          <div>
            <Image
              src="/Logo-White.png"
              alt="Logo"
              width={146 * 0.6}
              height={32 * 0.6}
            />
            <p className="mb-4 mt-8 text-gray-400">
              Building the future, one construct at a time. Let’s shape your
              vision into reality.
            </p>
            <div className="flex space-x-4 text-gray-400">
              <Link href="#" className="hover:text-blue-400">
                <FaFacebookF />
              </Link>
              <Link href="#" className="hover:text-blue-300">
                <FaTwitter />
              </Link>
              <Link href="#" className="hover:text-pink-400">
                <FaInstagram />
              </Link>
              <Link href="#" className="hover:text-blue-500">
                <FaLinkedinIn />
              </Link>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-xl font-semibold !text-background mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/" className="hover:text-gray-100">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-gray-100">
                  About
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-gray-100">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-gray-100">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h4 className="text-xl font-semibold !text-background mb-4">
              Services
            </h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/services/design" className="hover:text-gray-100">
                  Design & Planning
                </Link>
              </li>
              <li>
                <Link
                  href="/services/construction"
                  className="hover:text-gray-100"
                >
                  Construction
                </Link>
              </li>
              <li>
                <Link
                  href="/services/renovation"
                  className="hover:text-gray-100"
                >
                  Renovation
                </Link>
              </li>
              <li>
                <Link
                  href="/services/consulting"
                  className="hover:text-gray-100"
                >
                  Consulting
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h4 className="text-xl font-semibold !text-background mb-4">
              Contact
            </h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                Email:{" "}
                <span className="hover:text-gray-100">info@yourdomain.com</span>
              </li>
              <li>
                Phone:{" "}
                <span className="hover:text-gray-100">+1 (234) 567-890</span>
              </li>
              <li>Address: 123 Main St, City, Country</li>
            </ul>
          </div>
        </div>

        <div className="container mx-auto border-t border-gray-700 mt-12">
          <div className="font-bold max-w-7xl mx-auto px-6 py-4 text-center text-gray-400 text-sm flex items-center justify-center">
            © {new Date().getFullYear()} Themeadapt. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Home2Footer;
