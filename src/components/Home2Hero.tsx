"use client";
import Image from "next/image";
import React from "react";
import AnimatedHeading from "./AnimatedHeading";
import VideoPlayer from "./VideoPlayer";

const Home2Hero = () => {
  return (
    <div className="app-section container relative">
      <div className="md:pl-50 md:pb-80">
        <div className="flex gap-5 items-center">
          <AnimatedHeading lines={["Innovative"]} />
          <Image
            className="hidden md:block"
            src="/Innovative.png"
            alt="Innovation Image"
            width={250}
            height={10}
          />
        </div>
        <h1 className="!text-primary">
          <AnimatedHeading
            lines={["— Construction"]}
            textClassName="!text-primary"
          />
        </h1>
        <p>
          We combine advanced technologies, sustainable practices craftsmanship
          to
          <br />
          deliver projects that are efficient, durable, built for the future.
        </p>
      </div>

      {/* Full-width video */}
      <div className="md:absolute md:top-96">
        <VideoPlayer src="https://videos.pexels.com/video-files/30215872/12954427_2560_1440_60fps.mp4" />
      </div>
    </div>
  );
};

export default Home2Hero;
