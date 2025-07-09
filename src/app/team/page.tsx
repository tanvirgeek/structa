import ClientRecommendationSlider from "@/components/ClientRecommendationSlider";
import ExcitedToStart from "@/components/ExcitedToStart";
import ExpertTeam from "@/components/ExpertTeam";
import Footer from "@/components/Footer";
import NavigationBar from "@/components/NavigationBar";
import PageHero from "@/components/PageHero";
import PageHeroImage from "@/components/PageHeroImage";
import React from "react";

const Team = () => {
  return (
    <div className="relative">
      <div className="sticky top-0 z-50 bg-background shadow-md">
        <NavigationBar />
        <PageHero
          heading={`Experts crafting\nyour vision`}
          text="Meet Our Team"
        />
        <PageHeroImage imageUrl={"/team.png"} />
        <ExpertTeam />
        <ClientRecommendationSlider />
        <ExcitedToStart />
        <Footer />
      </div>
    </div>
  );
};

export default Team;
