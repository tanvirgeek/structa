import Home3Expertise from "@/components/Home3Expertise";
import Home3FeaturedProjects from "@/components/Home3FeaturedProjects";
import Home3Hero from "@/components/Home3Hero";
import Home3Image from "@/components/Home3Image";
import Home3Navigation from "@/components/Home3Navigation";
import Home3Services from "@/components/Home3Services";
import TotalProjects from "@/components/TotalProjects";
import Transforming from "@/components/Transforming";
import React from "react";

const Home3 = () => {
  return (
    <div>
      <div className="sticky top-0 z-50 bg-white shadow-md">
        <Home3Navigation />
      </div>
      <Home3Hero />
      <Home3Expertise />
      <Transforming />
      <Home3Services />
      <Home3Image />
      <Home3FeaturedProjects />

      <TotalProjects numberStyle="text-8xl text-primary font-bold" />
    </div>
  );
};

export default Home3;
