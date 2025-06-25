import Home3Expertise from "@/components/Home3Expertise";
import Home3Hero from "@/components/Home3Hero";
import Home3Navigation from "@/components/Home3Navigation";
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
    </div>
  );
};

export default Home3;
