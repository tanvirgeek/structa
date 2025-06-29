import Footer from "@/components/Footer";
import Home2Navbar from "@/components/Home2Navbar";
import React from "react";

const Home4 = () => {
  return (
    <div>
      <div className="sticky top-0 z-50 bg-white shadow-md">
        <Home2Navbar showQuoteButton={false} />
      </div>
      <Footer />
    </div>
  );
};

export default Home4;
