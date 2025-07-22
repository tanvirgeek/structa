"use client";
import React, { useRef, useState } from "react";

const VideoPlayer = ({ src }: { src: string }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch((err) => console.error("Video play failed:", err));
    }
  };

  return (
    <div className="relative w-full mt-8">
      {!isPlaying && (
        <button
          className="absolute inset-0 z-10 flex items-center justify-center w-full h-full bg-foreground/40 hover:bg-foreground/50 transition"
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
        src={src}
        controls={isPlaying}
        playsInline
      />
    </div>
  );
};

export default VideoPlayer;
