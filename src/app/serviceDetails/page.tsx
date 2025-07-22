import ExcitedToStart from "@/components/ExcitedToStart";
import Footer from "@/components/Footer";
import NavigationBar from "@/components/NavigationBar";
import PageHero from "@/components/PageHero";
import ServiceDetailsBody from "@/components/ServiceDetailsBody";
import VideoPlayer from "@/components/VideoPlayer";
import React from "react";

const ServiceDetails = () => {
  return (
    <div>
      <div className="sticky top-0 z-50 bg-background shadow-md">
        <NavigationBar />
      </div>
      <PageHero
        heading={`Project\nmanagement`}
        text="our services / project management"
      />
      <div className="mb-10">
        <div className="container">
          <VideoPlayer src="https://videos.pexels.com/video-files/30215872/12954427_2560_1440_60fps.mp4" />
        </div>
      </div>

      <ServiceDetailsBody />

      <ExcitedToStart />
      <Footer />
    </div>
  );
};

export default ServiceDetails;
