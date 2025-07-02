import BlogPosts from "@/components/BlogPosts";
import Home3Expertise from "@/components/Home3Expertise";
import Home3FeaturedProjects from "@/components/Home3FeaturedProjects";
import Home3Footer from "@/components/Home3Footer";
import Home3Hero from "@/components/Home3Hero";
import Home3Image from "@/components/Home3Image";
import Home3Navigation from "@/components/Home3Navigation";
import Home3Services from "@/components/Home3Services";
import Home3StartBuilding from "@/components/Home3StartBuilding";
import Home3Testimonial from "@/components/Home3Testimonial";
import TotalProjects from "@/components/TotalProjects";
import Transforming from "@/components/Transforming";
import React from "react";

const Home3 = () => {
  return (
    <div className="relative">
      {/* Fixed Background Image */}
      <div className="fixed top-0 left-0 w-full h-screen -z-10">
        <Home3Image />
      </div>

      {/* Sticky Navigation */}
      <div className="sticky top-0 z-50 bg-background shadow-md">
        <Home3Navigation />
      </div>

      {/* Components with Background */}
      <div className="bg-background">
        <Home3Hero />
        <Home3Expertise />
        <Transforming />
        <Home3Services />
      </div>

      {/* Transparent Section */}
      <div className="h-screen"></div>

      {/* More Components with Background */}
      <div className="bg-background">
        <Home3FeaturedProjects />
        <TotalProjects numberStyle="text-8xl text-primary font-bold" />
        <Home3StartBuilding />
        <Home3Testimonial />
        <BlogPosts />
      </div>

      {/* Footer */}
      <Home3Footer />
    </div>
  );
};

export default Home3;
