"use client";

import { motion } from "framer-motion";

interface AnimatedHeadingProps {
  lines: string[];
  className?: string;
}

const AnimatedHeading: React.FC<AnimatedHeadingProps> = ({
  lines,
  className = "",
}) => {
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.06, // Slightly more space between letter drops
        delayChildren: 0.1,
      },
    },
  };

  const letter = {
    hidden: { y: -180, opacity: 0 }, // Higher drop
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 1200,
        damping: 70,
        mass: 1.5,
        duration: 0.8, // More hang-time per letter
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate="show"
      variants={container}
      className={`overflow-hidden ${className}`}
    >
      <motion.h1 className="text-4xl font-bold leading-tight sm:text-5xl md:text-6xl text-primary space-y-1">
        {lines.map((line, lineIndex) => (
          <div key={lineIndex} className="whitespace-nowrap">
            {line.split("").map((char, charIndex) => (
              <motion.span
                key={char + charIndex}
                variants={letter}
                className="inline-block"
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </div>
        ))}
      </motion.h1>
    </motion.div>
  );
};

export default AnimatedHeading;
