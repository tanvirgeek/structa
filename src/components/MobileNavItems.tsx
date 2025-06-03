"use client";

import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import Link from "next/link";

type SubItem = {
  label: string;
  href: string;
};

interface MobileNavItemProps {
  label: string;
  href: string;
  hasDropdown: boolean;
  subItems: SubItem[];
  onLinkClick: () => void;
}

const MobileNavItem: React.FC<MobileNavItemProps> = ({
  label,
  href,
  hasDropdown,
  subItems,
  onLinkClick,
}) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    if (hasDropdown && subItems.length > 0) {
      setExpanded((prev) => !prev);
    }
  };

  return (
    <div className="mb-3 border-b border-gray-300 pb-2">
      {hasDropdown && subItems.length > 0 ? (
        <button
          className="flex justify-between items-center w-full text-base font-semibold text-gray-800 hover:text-primary px-4 py-3 transition-colors"
          onClick={toggleExpand}
        >
          <span>{label}</span>
          <FaChevronDown
            className={`ml-2 text-sm transition-transform duration-300 ${
              expanded ? "rotate-180 text-primary" : "rotate-0"
            }`}
          />
        </button>
      ) : (
        <Link
          href={href}
          onClick={onLinkClick}
          className="block w-full text-left text-base font-semibold text-gray-800 hover:text-primary px-4 py-3 transition-colors"
        >
          {label}
        </Link>
      )}

      {hasDropdown && (
        <div
          className={`transition-all duration-300 ease-in-out overflow-hidden ${
            expanded ? "max-h-96 mt-2 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="bg-gray-50 rounded-md mx-2 shadow-inner border border-gray-200">
            {subItems.map((sub, i) => (
              <Link
                key={sub.href}
                href={sub.href}
                onClick={onLinkClick}
                className={`block text-sm text-gray-700 hover:text-primary px-5 py-3 transition-colors border-b border-gray-200 ${
                  i === subItems.length - 1 ? "border-b-0" : ""
                }`}
              >
                {sub.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileNavItem;
