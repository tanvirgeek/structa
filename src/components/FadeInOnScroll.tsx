"use client";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

type Direction = "up" | "down" | "left" | "right";

interface FadeInOnScrollProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: Direction;
}

const getInitialPosition = (direction: Direction) => {
  switch (direction) {
    case "up":
      return { y: 300, x: 0 };
    case "down":
      return { y: -300, x: 0 };
    case "left":
      return { x: 300, y: 0 };
    case "right":
      return { x: -300, y: 0 };
    default:
      return { y: 300, x: 0 };
  }
};

const FadeInOnScroll: React.FC<FadeInOnScrollProps> = ({
  children,
  className = "",
  delay = 0.0,
  direction = "up",
}) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [inView, controls]);

  const initial = getInitialPosition(direction);

  const variants = {
    hidden: {
      opacity: 0,
      ...initial,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default FadeInOnScroll;
