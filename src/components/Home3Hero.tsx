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
      handleNext();
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  const currentHero = heroData[currentIndex];

  return (
    <div
      className="relative w-full h-screen max-h-[calc(100vh-50px)]"
      style={{ height: "calc(100vh - 50px)" }}
    >
      {/* Background Image */}
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
      <div className="container px-4 md:px-0 relative z-10 text-white py-4 sm:py-6 md:py-16 flex flex-col justify-center md:justify-end h-full">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end w-full mb-4">
          <div className="flex-1 pr-0 sm:pr-4">
            <AnimatePresence mode="wait">
              <motion.h6
                key={`h6-${currentHero.id}`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="font-bold text-sm sm:text-lg !text-white !lowercase"
              >
                #1 Construction Company
              </motion.h6>
              <motion.h1
                key={currentHero.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.8 }}
                className="font-bold !text-white"
                dangerouslySetInnerHTML={{ __html: currentHero.title }}
              ></motion.h1>
            </AnimatePresence>
          </div>

          <span className="mt-4 sm:mt-0 sm:ml-4">
            <Button text={currentHero.buttonText} />
          </span>
        </div>

        {/* Horizontal Divider */}
        <div className="h-[2px] w-full bg-gray-400 mb-4"></div>

        {/* Paragraph and Navigation */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center w-full gap-4 sm:gap-0">
          <motion.p
            key={`p-${currentHero.id}`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.8 }}
            className="text-sm sm:text-lg max-w-full sm:max-w-md"
          >
            {currentHero.paragraph}
          </motion.p>
          <div className="flex gap-2 sm:gap-4 mt-2 sm:mt-0">
            <button
              onClick={handlePrev}
              className="w-10 h-10 sm:w-12 sm:h-12 flex justify-center items-center rounded-full bg-black/50 text-white hover:bg-black/70"
            >
              <FaArrowLeft />
            </button>
            <button
              onClick={handleNext}
              className="w-10 h-10 sm:w-12 sm:h-12 flex justify-center items-center rounded-full bg-black/50 text-white hover:bg-black/70"
            >
              <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
