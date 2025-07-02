import AboutDescription from "@/components/AboutDescription";
import AboutUsMiddle from "@/components/AboutUsMiddle";
import ExcitedToStart from "@/components/ExcitedToStart";
import Home2Experts from "@/components/ExpertTeam";
import Footer from "@/components/Footer";
import Home2Horizontal from "@/components/Home2Horizontal";
import Home2Navbar from "@/components/Home2Navbar";
import Home3Image from "@/components/Home3Image";
import Home4Blog from "@/components/Home4Blog";
import Home4FeaturedProjects from "@/components/Home4FeaturedProjects";
import Home4Hero from "@/components/Home4Hero";
import Home4Services from "@/components/Home4Services";
import Home4WhereTrustMeets from "@/components/Home4WhereTrustMeets";
import React from "react";

const Home4 = () => {
  return (
    <div>
      {/* Fixed Background Image */}
      <div className="fixed top-0 left-0 w-full h-screen -z-10">
        <Home3Image />
      </div>
      <div className="sticky top-0 z-50 bg-background shadow-md">
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
        <Home4FeaturedProjects />
        <Home4Services />
        <Home4WhereTrustMeets />

        <Home2Experts />
        <Home4Blog />
        <Home2Horizontal />
        <ExcitedToStart />
        <Footer />
      </div>
    </div>
  );
};

export default Home4;
