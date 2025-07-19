import BlogsComponent from "@/components/BlogComponent";
import BlogRightbar from "@/components/BlogRightbar";
import NavigationBar from "@/components/NavigationBar";
import PageHero from "@/components/PageHero";
import React from "react";

const Blog = () => {
  return (
    <div>
      <div className="sticky top-0 z-50 bg-background shadow-md">
        <NavigationBar />
      </div>
      <PageHero heading={`latest News\nand blog Posts`} text="blog" />
      <div className="flex flex-col lg:flex-row gap-6 container">
        {/* 2/3 Width Section */}
        <div className="w-full lg:w-2/3 bg-background-soft p-6 rounded-xl">
          <BlogsComponent />
        </div>

        {/* 1/3 Width Section */}
        <div className="w-full lg:w-1/3 bg-background p-6 rounded-xl shadow">
          <BlogRightbar/>
        </div>
      </div>
    </div>
  );
};

export default Blog;
