"use client";
import Image from "next/image";
import React, { useRef, useState } from "react";
import AnimatedHeading from "./AnimatedHeading";
import Home2HeroCard from "./Home2HeroCard";

const Home2Hero = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current
        .play()
        .then(() => {
          setIsPlaying(true); // show controls
        })
        .catch((err) => {
          console.error("Video play failed:", err);
        });
    }
  };

  return (
    <div className="app-section container relative">
      <div className="md:pl-50 md:pb-80">
        <div className="flex gap-5 items-center">
          <AnimatedHeading lines={["Innovative"]} />
          <Image
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

      {/* Full-width video with play button */}
      <div className=" md:absolute md:top-96">
        <div className="relative w-full mt-8">
          {!isPlaying && (
            <button
              className="absolute inset-0 z-10 flex items-center justify-center w-full h-full bg-black/40 hover:bg-black/50 transition"
              onClick={handlePlay}
              aria-label="Play Video"
            >
              <svg
                className="w-16 h-16 text-primary"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </button>
          )}

          <video
            ref={videoRef}
            className="w-full h-auto"
            src="https://videos.pexels.com/video-files/30215872/12954427_2560_1440_60fps.mp4"
            controls={isPlaying}
            playsInline
          />
        </div>
      </div>
    </div>
  );
};

export default Home2Hero;
