"use client";
import { useState } from "react";
import { FaPlus, FaTimes } from "react-icons/fa";

export default function ToggleDetail({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full border-t border-b border-gray-300 py-4">
      {/* Header */}
      <div
        className="flex items-center justify-between w-full cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h2 className="text-xl font-semibold">{title}</h2>
        <div className="text-gray-600">
          {isOpen ? (
            <FaTimes className="w-5 h-5" />
          ) : (
            <FaPlus className="w-5 h-5" />
          )}
        </div>
      </div>

      {/* Animated detail section */}
      <div
        className={`transition-max-height duration-500 ease-in-out overflow-hidden ${
          isOpen ? "max-h-96 mt-4" : "max-h-0"
        }`}
      >
        <div className="text-gray-700">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}
