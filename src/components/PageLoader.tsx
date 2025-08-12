"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function PageLoader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  const orange = "#F97316"; // Tailwind orange-500

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          style={{
            position: "fixed",
            inset: 0,
            pointerEvents: "none", // allow interaction with background
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 9999,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          data-testid="page-loader"
        >
          {/* Loader container with white background, padding, and rounded corners */}
          <motion.div
            style={{
              backgroundColor: "black",
              padding: 32,
              borderRadius: 24,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 24,
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              pointerEvents: "auto", // enable interaction inside loader if needed
              minWidth: 280,
            }}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Large rocking logo */}
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              style={{ width: 96, height: 96 }}
            >
              <Image
                src="/Logo-White.png"
                alt="Logo"
                width={96}
                height={96}
                style={{ borderRadius: 16 }}
              />
            </motion.div>

            {/* Dots container */}
            <div style={{ display: "flex", gap: 16 }}>
              {[0, 1, 2].map((i) => (
                <motion.span
                  key={i}
                  style={{
                    width: 24,
                    height: 24,
                    borderRadius: "50%",
                    backgroundColor: orange,
                  }}
                  animate={{ scale: [1, 0.6, 1] }}
                  transition={{
                    duration: 1.2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.35,
                  }}
                />
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
