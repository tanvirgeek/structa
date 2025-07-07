import ExcitedToStart from "@/components/ExcitedToStart";
import Footer from "@/components/Footer";
import Home3Testimonial from "@/components/Home3Testimonial";
import Home4Services from "@/components/Home4Services";
import Home5Services from "@/components/Home5Services";
import NavigationBar from "@/components/NavigationBar";
import PageHero from "@/components/PageHero";
import PageHeroImage from "@/components/PageHeroImage";
import React from "react";

const Services2 = () => {
  return (
    <div className="min-h-screen">
      {/* Sticky Navigation Bar */}
      <div className="sticky top-0 z-50 bg-background shadow-md">
        <NavigationBar />
      </div>

      {/* Page Content */}
      <main>
        <PageHero heading={`Building Timeless\nSpaces`} text="our services" />
        <PageHeroImage imageUrl={"/contact-hero.png"} />
        <Home5Services />
        <Home4Services />
        <Home3Testimonial />
        <ExcitedToStart />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Services2;
