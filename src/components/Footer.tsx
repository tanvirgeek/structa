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

const Footer = () => {
  return (
    <footer className="bg-background-soft text-gray-800 pt-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:px-0 px-4">
        {/* Column 1: Logo, Paragraph, Social Links */}
        <div>
          <Image
            src="/Logo.png"
            alt="Logo"
            width={146 * 0.6}
            height={32 * 0.6}
          />
          <p className="mb-4 mt-8 text-gray-700">
            Building the future, one construct at a time. Let’s shape your
            vision into reality.
          </p>
          <div className="flex space-x-4 text-gray-600">
            <Link href="#" className="hover:text-blue-600">
              <FaFacebookF />
            </Link>
            <Link href="#" className="hover:text-blue-500">
              <FaTwitter />
            </Link>
            <Link href="#" className="hover:text-pink-500">
              <FaInstagram />
            </Link>
            <Link href="#" className="hover:text-blue-700">
              <FaLinkedinIn />
            </Link>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-600">
            <li>
              <Link href="/" className="hover:text-gray-900">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-gray-900">
                About
              </Link>
            </li>
            <li>
              <Link href="/projects" className="hover:text-gray-900">
                Projects
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-gray-900">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Services */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Services</h3>
          <ul className="space-y-2 text-gray-600">
            <li>
              <Link href="/services/design" className="hover:text-gray-900">
                Design & Planning
              </Link>
            </li>
            <li>
              <Link
                href="/services/construction"
                className="hover:text-gray-900"
              >
                Construction
              </Link>
            </li>
            <li>
              <Link href="/services/renovation" className="hover:text-gray-900">
                Renovation
              </Link>
            </li>
            <li>
              <Link href="/services/consulting" className="hover:text-gray-900">
                Consulting
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 4: Contact */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact</h3>
          <ul className="space-y-2 text-gray-600">
            <li>
              Email:{" "}
              <span className="hover:text-gray-900">info@yourdomain.com</span>
            </li>
            <li>
              Phone:{" "}
              <span className="hover:text-gray-900">+1 (234) 567-890</span>
            </li>
            <li>Address: 123 Main St, City, Country</li>
          </ul>
        </div>
      </div>
      <div className="w-full border-t border-gray-300 mt-12">
        <div className="font-bold max-w-7xl mx-auto px-6 py-4 text-center text-black-500 text-sm flex items-center justify-center">
          © {new Date().getFullYear()} Themeadapt. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
