import BlogComments from "@/components/BlogComments";
import BlogDescription from "@/components/BlogDescription";
import BlogDetailsHero from "@/components/BlogDetailsHero";
import BlogRightbar from "@/components/BlogRightbar";
import ExcitedToStart from "@/components/ExcitedToStart";
import Footer from "@/components/Footer";
import NavigationBar from "@/components/NavigationBar";
import React from "react";

const BlogDetails = () => {
  return (
    <div>
      <div className="sticky top-0 z-50 bg-background shadow-md">
        <NavigationBar />
      </div>
      <BlogDetailsHero />
      <div className="flex flex-col lg:flex-row gap-6 container">
        {/* 2/3 Width Section */}
        <div className="w-full lg:w-2/3 bg-background-soft p-6 rounded-xl">
          <BlogDescription />
          <BlogComments />
        </div>

        {/* 1/3 Width Section */}
        <div className="w-full lg:w-1/3 bg-background p-6 rounded-xl shadow">
          <BlogRightbar />
        </div>
      </div>
      <ExcitedToStart />
      <Footer />
    </div>
  );
};

export default BlogDetails;
