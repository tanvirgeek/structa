"use client";

import React from "react";
import Image from "next/image";
import Button from "./Button";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const imageVariants = {
  hidden: { opacity: 0, x: 100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const Home5Hero = () => {
  return (
    <section>
      <div className="container flex flex-col md:flex-row items-center gap-12">
        {/* Left: Text Area */}
        <motion.div
          className="flex-1 space-y-3 text-center md:text-left"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.p className="" variants={itemVariants}>
            #1 construction company
          </motion.p>
          <motion.h2 className="" variants={itemVariants}>
            Crafting <br /> structures <br /> for a better <br /> future
          </motion.h2>
          <motion.p className="" variants={itemVariants}>
            Your trusted partner in construction—from innovative designs to
            expert project management—we deliver excellence.
          </motion.p>
          <motion.div
            className="flex justify-center md:justify-start gap-4 pt-4"
            variants={itemVariants}
          >
            <Button text={"Get a Quote"} href="/contact" />
            <Button text={"Learn More"} variant="outline" href="/about" />
          </motion.div>
        </motion.div>

        {/* Right: Image */}
        <motion.div
          className="flex-1 relative w-full h-64 md:h-[600px]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={imageVariants}
        >
          <Image
            src="/Home5Hero.png"
            alt="Hero Image"
            fill
            className="object-cover rounded-xl"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Home5Hero;
