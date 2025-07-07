import ExcitedToStart from "@/components/ExcitedToStart";
import Footer from "@/components/Footer";
import NavigationBar from "@/components/NavigationBar";
import PageHero from "@/components/PageHero";
import PageHeroImage from "@/components/PageHeroImage";
import PlansToReality from "@/components/PlansToReality";
import Services from "@/components/Services";
import Transforming from "@/components/Transforming";
import React from "react";

const Service = () => {
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
        <Services />
        <Transforming />
        <PlansToReality />
        <ExcitedToStart />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Service;
