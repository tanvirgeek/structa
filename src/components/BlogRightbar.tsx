import Link from "next/link";
import React from "react";

const BlogRightbar = () => {
  return (
    <div className="w-full bg-background p-6 rounded-xl shadow space-y-10">
      {/* Search Bar */}
      <div>
        <h3 className="text-xl font-semibold mb-3">Search</h3>
        <div className="relative w-full">
          <input
            type="text"
            placeholder="Search posts..."
            className="w-full border border-gray-300 rounded-lg px-4 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-4.35-4.35M17 11a6 6 0 11-12 0 6 6 0 0112 0z"
            />
          </svg>
        </div>
      </div>

      {/* Post Categories */}
      <div>
        <h3 className="text-xl font-semibold mb-3">Categories</h3>
        <ul className="space-y-2 text-sm text-muted-foreground cursor-pointer">
          <li className="flex justify-between">
            <span>Technology</span> <span>(3)</span>
          </li>
          <li className="flex justify-between">
            <span>Sustainability</span> <span>(2)</span>
          </li>
          <li className="flex justify-between">
            <span>Innovation</span> <span>(1)</span>
          </li>
          <li className="flex justify-between">
            <span>Architecture</span> <span>(2)</span>
          </li>
          <li className="flex justify-between">
            <span>Construction Tech</span> <span>(1)</span>
          </li>
        </ul>
      </div>

      {/* Recent Posts */}
      <div>
        <div className="mb-3">
          <h3 className="text-xl font-semibold">Recent Posts</h3>
          <p className="text-sm text-muted-foreground">
            Latest articles from our blog
          </p>
        </div>
        <ul className="space-y-5">
          {[
            {
              id: 1,
              title: "AI and Robotics Reshape Modern Sites",
              image: "/blog1.png",
              date: "May 10, 2025",
            },
            {
              id: 2,
              title: "Sustainable Materials for the Future",
              image: "/blog2.png",
              date: "May 5, 2025",
            },
            {
              id: 3,
              title: "Top Smart Building Trends",
              image: "/blog1.png",
              date: "Apr 28, 2025",
            },
          ].map((post) => (
            <Link
              key={post.id}
              href="/blogDetails"
              className="flex items-center gap-3 cursor-pointer"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-16 h-16 object-cover rounded-md"
              />
              <div className="text-sm">
                <h4 className="leading-tight">{post.title}</h4>
                <p className="text-xs text-muted-foreground">{post.date}</p>
              </div>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BlogRightbar;
