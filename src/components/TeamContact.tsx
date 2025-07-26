"use client";

import React from "react";

const TeamContact = () => {
  return (
    <section className="bg-black text-white app-section">
      <div className="container max-w-2xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 text-center !text-background">
          Contact Me
        </h2>
        <form className="space-y-6">
          {/* Name */}
          <div>
            <label htmlFor="name" className="block mb-1 text-sm font-medium">
              Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-2 bg-transparent border border-white rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block mb-1 text-sm font-medium">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-2 bg-transparent border border-white rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block mb-1 text-sm font-medium">
              Message
            </label>
            <textarea
              id="message"
              placeholder="Your Message"
              rows={5}
              className="w-full px-4 py-2 bg-transparent border border-white rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-primary text-white px-6 py-3 rounded-md hover:bg-primary/80 transition font-semibold"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default TeamContact;
