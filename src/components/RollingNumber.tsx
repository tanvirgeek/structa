"use client";

import { useEffect, useRef, useState } from "react";
import { useMotionValue, useTransform, animate } from "motion/react";
import { useInView } from "framer-motion";

type RollingNumberProps = {
  target: number;
  duration?: number;
};

export default function RollingNumber({
  target,
  duration = 1,
}: RollingNumberProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  const count = useMotionValue(0);
  const rounded = useTransform(count, (value) =>
    Math.floor(value).toLocaleString()
  );
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    let controls: ReturnType<typeof animate> | null = null;

    if (isInView) {
      controls = animate(count, target, {
        duration,
        ease: [0.16, 1, 0.3, 1],
      });
    } else {
      count.set(0); // Reset when out of view
      setDisplay("0"); // Reset the UI text too
    }

    const unsubscribe = rounded.on("change", (latest) => {
      setDisplay(latest);
    });

    return () => {
      controls?.stop();
      unsubscribe();
    };
  }, [isInView, target, duration]);

  return (
    <span ref={ref} className="text-4xl font-bold">
      {display}
    </span>
  );
}
