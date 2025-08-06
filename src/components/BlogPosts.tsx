import Link from "next/link";
import React from "react";
import Image from "next/image";

// Blog data
const blogs = [
  {
    id: 1,
    title: "AI and Robotics Reshape Modern Construction Sites",
    category: "Technology",
    date: "May 10, 2025",
    imageUrl: "/blog1.png",
    href: "/blogDetails",
  },
  {
    id: 2,
    title: "Sustainable Materials Leading the Future of Buildings",
    category: "Sustainability",
    date: "May 5, 2025",
    imageUrl: "/blog2.png",
    href: "/blogDetails",
  },
  {
    id: 3,
    title: "Top 10 Smart Building Trends in 2025",
    category: "Innovation",
    date: "April 28, 2025",
    imageUrl: "/blog1.png",
    href: "/blogDetails",
  },
  {
    id: 4,
    title: "How 3D Printing is Revolutionizing Housing Construction",
    category: "Construction Tech",
    date: "April 20, 2025",
    imageUrl: "/blog2.png",
    href: "/blogDetails",
  },
  {
    id: 5,
    title: "Modular Construction: Faster, Greener, Smarter",
    category: "Architecture",
    date: "April 15, 2025",
    imageUrl: "/blog1.png",
    href: "/blogDetails",
  },
];

const BlogPosts = () => {
  return (
    <div className="bg-background-soft">
      <div className="app-section container flex flex-col gap-6 ">
        <div className="flex justify-between items-start">
          <div>
            <h6>Blog Posts</h6>
            <h2>Our Latest News</h2>
          </div>
          <Link href={"/"} className="self-end underline text-sm">
            view all blogs
          </Link>
        </div>

        {/* Blog List */}
        <div className="grid md:grid-cols-3 gap-6">
          {blogs.map((blog) => (
            <Link href={blog.href} key={blog.id}>
              <div className="bg-background rounded-xl overflow-hidden shadow-sm group cursor-pointer">
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
                  <h4>{blog.title}</h4>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPosts;
