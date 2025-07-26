import ExcitedToStart from "@/components/ExcitedToStart";
import ExpertTeam from "@/components/ExpertTeam";
import Footer from "@/components/Footer";
import NavigationBar from "@/components/NavigationBar";
import TeamContact from "@/components/TeamContact";
import TeamDetailsHero from "@/components/TeamDetailsHero";
import React from "react";

const TeamDetails = () => {
  return (
    <div className="relative">
      <div className="sticky top-0 z-50 bg-background shadow-md">
        <NavigationBar />
      </div>
      <TeamDetailsHero />
      <TeamContact />
      <ExpertTeam />

      <ExcitedToStart />

      <Footer />
    </div>
  );
};

export default TeamDetails;
