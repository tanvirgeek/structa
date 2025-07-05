import Commitment from "@/components/Commitment";
import ExcitedToStart from "@/components/ExcitedToStart";
import Home2Blogs from "@/components/Home2Blogs";
import Home3Footer from "@/components/Home3Footer";
import Home3Image from "@/components/Home3Image";
import Home3Services from "@/components/Home3Services";
import Home5Hero from "@/components/Home5Hero";
import Home5Nav from "@/components/Home5Nav";
import Home5Services from "@/components/Home5Services";
import HowWeWork from "@/components/HowWeWork";
import VisionMission from "@/components/VisionMission";
import React from "react";

const Home5 = () => {
  return (
    <div>
      <div className="fixed top-0 left-0 w-full h-screen -z-10">
        <Home3Image />
      </div>

      {/* Sticky Navigation */}
      <div className="sticky top-0 z-50 bg-background shadow-md">
        <Home5Nav />
      </div>
      <div className="bg-background">
        <Home5Hero />
        <Home5Services />
        <Commitment />
        <VisionMission />
      </div>

      {/* Transparent Section */}
      <div className="h-screen"></div>
      <div className="bg-background">
        <HowWeWork />
        <Home3Services />
        <ExcitedToStart />
        <Home2Blogs />
        <Home3Footer />
      </div>
    </div>
  );
};

export default Home5;
