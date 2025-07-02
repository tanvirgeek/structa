"use client";

import Image from "next/image";
import { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

type Blog = {
  id: number;
  title: string;
  category: string;
  date: string;
  imageUrl: string;
};

const blogs: Blog[] = [
  {
    id: 1,
    title: "AI and Robotics Reshape Modern Construction Sites",
    category: "Technology",
    date: "May 10, 2025",
    imageUrl: "/blog1.png",
  },
  {
    id: 2,
    title: "Sustainable Materials Leading the Future of Buildings",
    category: "Sustainability",
    date: "May 5, 2025",
    imageUrl: "/blog2.png",
  },
  {
    id: 3,
    title: "Top 10 Smart Building Trends in 2025",
    category: "Innovation",
    date: "April 28, 2025",
    imageUrl: "/blog1.png",
  },
  {
    id: 4,
    title: "How 3D Printing is Revolutionizing Housing Construction",
    category: "Construction Tech",
    date: "April 20, 2025",
    imageUrl: "/blog2.png",
  },
  {
    id: 5,
    title: "Modular Construction: Faster, Greener, Smarter",
    category: "Architecture",
    date: "April 15, 2025",
    imageUrl: "/blog1.png",
  },
];

export default function BlogSlider() {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (sliderRef.current) {
      const scrollAmount = 300;
      sliderRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="flex flex-col md:flex-row app-section container">
      {/* Left Side */}
      <div className="md:w-1/3">
        <h6>blog posts</h6>
        <h2>Our Latest News</h2>
      </div>

      {/* Right Side - Blog Slider */}
      <div className="md:w-2/3 relative w-full">
        {/* Scroll Buttons */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-background shadow rounded-full p-2 hidden md:block"
        >
          <FaChevronLeft className="text-xl" />
        </button>
        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-background shadow rounded-full p-2 hidden md:block"
        >
          <FaChevronRight className="text-xl" />
        </button>

        <div
          ref={sliderRef}
          className="flex gap-6 overflow-x-auto py-2 scroll-smooth whitespace-nowrap scrollbar-hidden"
        >
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-background rounded-xl shadow-sm group w-[280px] flex-shrink-0 inline-block"
            >
              <div className="w-full h-56 overflow-hidden relative">
                <Image
                  src={blog.imageUrl}
                  alt={blog.title}
                  width={500}
                  height={300}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-4">
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span className="text-primary">{blog.category}</span>
                  <span>{blog.date}</span>
                </div>
                <hr className="my-2 border-muted" />
                <h4 className="text-base font-semibold leading-snug text-gray-800 break-words whitespace-normal">
                  {blog.title}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
