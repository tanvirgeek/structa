"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Button from "./Button";

const heroData = [
  {
    id: 1,
    title: "We are Building <br /> Sustainable <br/> Future",
    paragraph:
      "We provide immersive and engaging solutions to bring your construction to life.",
    buttonText: "Get a Quote",
    backgroundImage: "/Hero3.png",
  },
  {
    id: 2,
    title: "Innovating Tomorrow's <br/> Landmarks",
    paragraph:
      "Our strategies empower businesses to achieve more in a competitive landscape.",
    buttonText: "Contact Us",
    backgroundImage: "/Hero3.png",
  },
  {
    id: 3,
    title: "Crafting Spaces <br/> That Inspire",
    paragraph:
      "Partner with us to create eco-friendly and impactful solutions.",
    buttonText: "Learn More",
    backgroundImage: "/Hero3.png",
  },
];

export default function Home3Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % heroData.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + heroData.length) % heroData.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext(); // Automatically move to the next slide
    }, 7000); // 5 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []); // Empty dependency array to run only once

  const currentHero = heroData[currentIndex];

  return (
    <div className="relative w-full" style={{ height: "calc(100vh - 50px)" }}>
      {/* Background Image with Zoom Effect */}
      <motion.div
        key={currentHero.id}
        className="absolute inset-0 w-full h-full"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        exit={{ scale: 1.1 }}
        transition={{ duration: 1.5 }}
        style={{ zIndex: 0 }}
      >
        <Image
          src={currentHero.backgroundImage}
          alt={currentHero.title}
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
      </motion.div>

      {/* Hero Content */}
      <div className="relative z-10 text-white p-6 md:px-16 flex flex-col justify-end h-full">
        <div className="flex justify-between items-end w-full mb-4">
          <div className="flex-1 pr-4">
            <AnimatePresence mode="wait">
              <motion.h6
                key={currentHero.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="font-bold !text-white text-xl md:text-2xl !lowercase"
              >
                #1 Construction Company
              </motion.h6>
              <motion.h1
                key={currentHero.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.8 }}
                className="font-bold !text-white text-2xl md:text-4xl lg:text-5xl"
                dangerouslySetInnerHTML={{ __html: currentHero.title }}
              ></motion.h1>
            </AnimatePresence>
          </div>

          <span className="ml-4">
            <Button text={currentHero.buttonText} />
          </span>
        </div>

        {/* Horizontal Divider */}
        <div className="h-[2px] w-full bg-gray-400 mb-4"></div>

        {/* Paragraph and Navigation */}
        <div className="flex justify-between items-center w-full">
          <motion.p
            key={currentHero.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.8 }}
            className="text-lg max-w-md"
          >
            {currentHero.paragraph}
          </motion.p>
          <div className="flex gap-4">
            <button
              onClick={handlePrev}
              className="w-12 h-12 flex justify-center items-center rounded-full bg-black/50 text-white hover:bg-black/70"
            >
              <FaArrowLeft />
            </button>
            <button
              onClick={handleNext}
              className="w-12 h-12 flex justify-center items-center rounded-full bg-black/50 text-white hover:bg-black/70"
            >
              <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
