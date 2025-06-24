import Home3Hero from "@/components/Home3Hero";
import Home3Navigation from "@/components/Home3Navigation";
import React from "react";

const Home3 = () => {
  return (
    <div>
      <div className="sticky top-0 z-50 bg-white shadow-md">
        <Home3Navigation />
      </div>
      <Home3Hero />
    </div>
  );
};

export default Home3;
