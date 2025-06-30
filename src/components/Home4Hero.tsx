"use client";

import Image from "next/image";
import React from "react";
import Button from "./Button";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const fadeRight = {
  hidden: { opacity: 0, x: 50 },
  show: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const Home4Hero: React.FC = () => {
  return (
    <section className="bg-white relative overflow-hidden">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="max-w-7xl mx-auto px-4 py-16 flex flex-col md:flex-row items-center justify-between relative z-10"
      >
        {/* Left Content */}
        <div className="md:w-2/3 w-full">
          {/* Heading */}
          <motion.h1
            variants={fadeUp}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            Building Dreams Into <span className="text-primary">Reality</span>
          </motion.h1>

          {/* Line + Paragraph */}
          <motion.div variants={fadeUp} className="flex items-start gap-4 mb-6">
            <div className="h-1 w-32 hidden md:block bg-gray-400 mt-2" />
            <p className="text-gray-700">
              We are a construction company delivering high-quality
              infrastructure, commercial, and residential projects with
              precision and care.
            </p>
          </motion.div>

          {/* Buttons */}
          <motion.div variants={fadeUp} className="flex gap-4">
            <Button text="Get a Quote" />
            <Button text="Our Work" variant="outline" />
          </motion.div>
        </div>

        {/* Right Image */}
        <motion.div variants={fadeRight} className="hidden md:block">
          <Image
            src="/hat.png"
            alt="Construction site"
            width={220}
            height={220}
            priority
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Home4Hero;
