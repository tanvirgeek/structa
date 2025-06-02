"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface AnimatedHeadingProps {
  lines: string[]; // Each line of heading
  enableScrollEffect?: boolean; // Scroll-based horizontal movement
  className?: string; // Additional Tailwind classes
}

const AnimatedHeading: React.FC<AnimatedHeadingProps> = ({
  lines,
  enableScrollEffect = true,
  className = "",
}) => {
  const ref = useRef(null);

  // Scroll-based horizontal transform
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // We start with x being 0% and only apply scrolling effect after the scroll happens
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const line = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate="show"
      variants={container}
      className={`overflow-hidden ${className}`}
    >
      <motion.h1
        className="text-4xl font-bold leading-tight sm:text-5xl md:text-6xl text-primary space-y-2"
        style={enableScrollEffect ? { x: "0%" } : {}} // Ensure that no transform is applied initially
      >
        {lines.map((lineText, idx) => (
          <motion.div key={idx} variants={line}>
            {lineText} {/* Line text */}
          </motion.div>
        ))}
      </motion.h1>
    </motion.div>
  );
};

export default AnimatedHeading;
