"use client";

import React from "react";
import Image from "next/image";
import {
  FaFacebookF,
  FaXTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa6"; // using 'fa6' for FaXTwitter (Twitter/X icon)

const BlogDetailsHero = () => {
  const blog = {
    title: "Exploring Trends in Modern Construction Design",
    description:
      "Explore how AI and robotics are transforming the way construction projects are managed and executed.",
    author: "John Doe",
    date: "May 10, 2025",
    category: "Technology",
    commentsCount: 8,
    imageUrl: "/blog1.png",
  };

  return (
    <section className="container app-section">
      {/* Blog Title and Path */}
      <div className="mb-6">
        <h2 className="">{blog.title}</h2>
        <p className="text-lg text-primary/80">blog/{blog.title}</p>
      </div>

      {/* Metadata and Social Links */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        {/* Metadata */}
        <div className="flex flex-wrap text-sm text-muted-foreground divide-x divide-border">
          <div className="pr-4">
            <span className="block text-xs uppercase">Written by</span>
            <span className="font-medium text-foreground">{blog.author}</span>
          </div>
          <div className="px-4">
            <span className="block text-xs uppercase">Post date</span>
            <span className="font-medium text-foreground">{blog.date}</span>
          </div>
          <div className="px-4">
            <span className="block text-xs uppercase">Category</span>
            <span className="font-medium text-foreground">{blog.category}</span>
          </div>
          <div className="pl-4">
            <span className="block text-xs uppercase">Comments</span>
            <span className="font-medium text-foreground">
              {blog.commentsCount}
            </span>
          </div>
        </div>

        {/* Social Icons with Tooltips */}
        <div className="flex gap-4 text-primary text-xl">
          <span title="Share on Facebook">
            <FaFacebookF className="hover:text-blue-600 cursor-pointer transition" />
          </span>
          <span title="Share on X (Twitter)">
            <FaXTwitter className="hover:text-black cursor-pointer transition" />
          </span>
          <span title="Share on LinkedIn">
            <FaLinkedinIn className="hover:text-blue-800 cursor-pointer transition" />
          </span>
          <span title="Share on Instagram">
            <FaInstagram className="hover:text-pink-500 cursor-pointer transition" />
          </span>
        </div>
      </div>

      {/* Hero Image */}
      <div className="relative w-full h-80 md:h-[500px] rounded-xl overflow-hidden">
        <Image
          src={blog.imageUrl}
          alt={blog.title}
          fill
          className="object-cover"
        />
      </div>
    </section>
  );
};

export default BlogDetailsHero;
