import AboutDescription from "@/components/AboutDescription";
import AboutUsMiddle from "@/components/AboutUsMiddle";
import Home2Experts from "@/components/ExpertTeam";
import Footer from "@/components/Footer";
import Home2Horizontal from "@/components/Home2Horizontal";
import Home2Navbar from "@/components/Home2Navbar";
import Home3Image from "@/components/Home3Image";
import Home4Hero from "@/components/Home4Hero";
import React from "react";

const Home4 = () => {
  return (
    <div>
      {/* Fixed Background Image */}
      <div className="fixed top-0 left-0 w-full h-screen -z-10">
        <Home3Image />
      </div>
      <div className="sticky top-0 z-50 bg-white shadow-md">
        <Home2Navbar showQuoteButton={false} />
      </div>

      <div className="bg-background">
        <Home4Hero />
      </div>

      {/* Transparent Section */}
      <div className="h-screen"></div>

      <div className="bg-background">
        <AboutDescription />
        <AboutUsMiddle />
        <Home2Experts />
        <Home2Horizontal />
        <Footer />
      </div>
    </div>
  );
};

export default Home4;
