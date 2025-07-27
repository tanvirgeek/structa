import ClientRecommendationSlider from "@/components/ClientRecommendationSlider";
import ExcitedToStart from "@/components/ExcitedToStart";
import Footer from "@/components/Footer";
import Navbar from "@/components/NavigationBar";
import PageHero from "@/components/PageHero";
import ProjectDescription from "@/components/ProjectDescription";
import VideoPlayer from "@/components/VideoPlayer";
import React from "react";

const ProjectDetails = () => {
  return (
    <div className="min-h-screen">
      {/* Sticky Navigation Bar */}
      <div className="sticky top-0 z-50 bg-background shadow-md">
        <Navbar />
      </div>

      {/* Page Content */}
      <main>
        <PageHero
          heading={`The Northwest\nBuilding`}
          text="explore our projects / The northwest building"
        />

        <div className="mb-10">
          <div className="container">
            <VideoPlayer src="https://videos.pexels.com/video-files/30215872/12954427_2560_1440_60fps.mp4" />
          </div>
        </div>
        <ProjectDescription />
        <ClientRecommendationSlider />
        <ExcitedToStart />
      </main>
      <Footer />
    </div>
  );
};

export default ProjectDetails;
