"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const blogs = [
  {
    id: 1,
    title: "AI and Robotics Reshape Modern Construction Sites",
    category: "Technology",
    date: "May 10, 2025",
    imageUrl: "/blog1.png",
    description:
      "Explore how AI and robotics are transforming the way construction projects are managed and executed.",
  },
  {
    id: 2,
    title: "Sustainable Materials Leading the Future of Buildings",
    category: "Sustainability",
    date: "May 5, 2025",
    imageUrl: "/blog2.png",
    description:
      "Discover innovative materials driving sustainable architecture and greener buildings.",
  },
  {
    id: 3,
    title: "Top 10 Smart Building Trends in 2025",
    category: "Innovation",
    date: "April 28, 2025",
    imageUrl: "/blog1.png",
    description:
      "From automation to smart sensors, see what’s shaping the future of smart buildings this year.",
  },
  {
    id: 4,
    title: "How 3D Printing is Revolutionizing Housing Construction",
    category: "Construction Tech",
    date: "April 20, 2025",
    imageUrl: "/blog2.png",
    description:
      "Understand how 3D printing is enabling faster, cheaper, and more customized home building.",
  },
  {
    id: 5,
    title: "Modular Construction: Faster, Greener, Smarter",
    category: "Architecture",
    date: "April 15, 2025",
    imageUrl: "/blog1.png",
    description:
      "Learn how modular building is speeding up construction timelines and reducing waste.",
  },
];

const BlogsComponent = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 3;

  const startIndex = (currentPage - 1) * blogsPerPage;
  const currentBlogs = blogs.slice(startIndex, startIndex + blogsPerPage);
  const totalPages = Math.ceil(blogs.length / blogsPerPage);

  return (
    <section className="">
      <div className="container">
        <div className="grid gap-8">
          {currentBlogs.map((blog) => (
            <div key={blog.id} className="bg-background rounded-xl shadow p-4">
              {/* Image */}
              <div className="relative w-full md:h-100 h-64 rounded-lg overflow-hidden mb-4">
                <Image
                  src={blog.imageUrl}
                  alt={blog.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Category + Date */}
              <div className="flex items-center gap-3 text-sm text-foreground mb-2">
                <span className="text-primary font-medium">
                  {blog.category}
                </span>
                <span>|</span>
                <span>{blog.date}</span>
              </div>

              {/* Title */}
              <h2 className="font-semibold text-foreground mb-2">
                {blog.title}
              </h2>

              {/* Description */}
              <p className="text-foreground mb-4">{blog.description}</p>

              {/* Read More */}
              <Link
                href={`/blog/${blog.id}`}
                className="text-primary font-medium hover:underline"
              >
                Read more →
              </Link>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-10 gap-3">
          {Array.from({ length: totalPages }, (_, idx) => idx + 1).map(
            (num) => (
              <button
                key={num}
                onClick={() => setCurrentPage(num)}
                className={`w-9 h-9 rounded-full border ${
                  currentPage === num
                    ? "bg-primary text-white border-primary"
                    : "text-gray-700 hover:bg-gray-100 border-gray-300"
                }`}
              >
                {num}
              </button>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default BlogsComponent;
