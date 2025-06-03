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
    <div className="mb-2 border-b border-gray-200 pb-2">
      {hasDropdown && subItems.length > 0 ? (
        <button
          className="flex justify-between items-center w-full text-base font-semibold text-gray-800 hover:text-primary transition-colors"
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
          className="block w-full text-left text-base font-semibold text-gray-800 hover:text-primary transition-colors py-2"
        >
          {label}
        </Link>
      )}

      {/* Sub-items dropdown */}
      {hasDropdown && (
        <div
          className={`transition-all duration-300 ease-in-out overflow-hidden ${
            expanded ? "max-h-64 mt-2 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="bg-gray-50 rounded-md px-3 py-2 space-y-2 shadow-inner">
            {subItems.map((sub) => (
              <Link
                key={sub.href}
                href={sub.href}
                className="block text-sm text-gray-600 hover:text-primary transition-colors"
                onClick={onLinkClick}
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
