"use client";

import { useState } from "react";
import Button from "./Button";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    projectType: "",
    budget: "",
    size: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", form);
    // Handle sending logic here (API call)
  };

  return (
    <div className="p-8 border border-gray-300">
      <h4 className="mb-8">Send Us Message</h4>
      <form onSubmit={handleSubmit} className="max-w-3xl mx-auto bg-white">
        {/* Row 1: Name & Phone */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <input
            name="name"
            placeholder="Name"
            value={form.name}
            onChange={handleChange}
            className="border-b border-gray-600 focus:outline-none p-2"
          />
          <input
            name="phone"
            placeholder="Phone"
            value={form.phone}
            onChange={handleChange}
            className="border-b border-gray-600 focus:outline-none p-2"
          />
        </div>

        {/* Row 2: Email */}
        <div className="mb-6">
          <input
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className="w-full border-b border-gray-600 focus:outline-none p-2"
          />
        </div>

        {/* Row 3: Project Type */}
        <div className="mb-6">
          <select
            name="projectType"
            value={form.projectType}
            onChange={handleChange}
            className="w-full border-b border-gray-600 focus:outline-none p-2 bg-white"
          >
            <option value="">Select Project Type</option>
            <option value="Residential Building">Residential Building</option>
            <option value="Commercial Building">Commercial Building</option>
            <option value="Renovation">Renovation</option>
            <option value="Interior Design">Interior Design</option>
            <option value="Landscape Architecture">
              Landscape Architecture
            </option>
          </select>
        </div>

        {/* Row 4: Budget & Size */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <input
            name="budget"
            placeholder="Budget (in USD)"
            value={form.budget}
            onChange={handleChange}
            className="border-b border-gray-600 focus:outline-none p-2"
          />
          <input
            name="size"
            placeholder="Size (sqft)"
            value={form.size}
            onChange={handleChange}
            className="border-b border-gray-600 focus:outline-none p-2"
          />
        </div>

        {/* Row 5: Message */}
        <div className="mb-6">
          <textarea
            name="message"
            rows={5}
            placeholder="Message"
            value={form.message}
            onChange={handleChange}
            className="w-full border-b border-gray-600 focus:outline-none p-2 resize-none"
          />
        </div>

        {/* Button */}
        <div className="text-right">
          <Button text={"Send Message"} />
        </div>
      </form>
    </div>
  );
}
