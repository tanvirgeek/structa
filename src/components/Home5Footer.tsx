"use client";

import React from "react";
import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Home5Footer = () => {
  return (
    <footer className="bg-background text-gray-800 pt-12">
      <div className="app-section max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Column 1: Contact */}
        <div>
          <h4 className="text-xl font-semibold mb-4">Contact</h4>
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

        {/* Column 2: Quick Links */}
        <div>
          <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
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
          <h4 className="text-xl font-semibold mb-4">Services</h4>
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

        {/* Column 4: Newsletter */}
        <div>
          <h4 className="text-xl font-semibold mb-4">Newsletter</h4>
          <p className="text-gray-700 mb-4">
            Subscribe to receive updates, news, and exclusive offers.
          </p>
          <form className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none"
            />
            <button
              type="submit"
              className="bg-primary text-background px-4 py-2 rounded-r-lg hover:bg-blue-700 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Structa Brand Name */}
      <div className="text-center">
        <p className="text-4xl md:text-9xl font-bold !text-primary">structa</p>
      </div>

      {/* Footer Bottom */}
      <div className="w-full border-t border-gray-300 mt-12">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between">
          <p className="font-bold text-sm text-gray-600">
            © {new Date().getFullYear()} Themeadapt. All rights reserved.
          </p>
          <div className="flex space-x-4 text-gray-600 mt-4 md:mt-0">
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
      </div>
    </footer>
  );
};

export default Home5Footer;
