"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";
import { AuroraText } from "./aurora-text";

export const LayoutTextFlip = ({
  text = "Build Amazing",
  words = ["Landing Pages", "Component Blocks", "Page Sections", "3D Shaders"],
  duration = 3000,
  className= ""
}: {
  text: string;
  words: string[];
  duration?: number;
  className?:string
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, duration);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* <motion.span
        layoutId="subtext"
        className="md:text-7xl text-3xl lg:text-7xl font-bold text-white text-shadow-2xs"
      >
        {text}
      </motion.span> */}

      <motion.span
        layout
        className={cn(className)}
      >
        <AnimatePresence mode="popLayout">
          <motion.span
            key={currentIndex}
            initial={{ y: -40, filter: "blur(10px)" }}
            animate={{
              y: 0,
              filter: "blur(0px)",
            }}
            exit={{ y: 50, filter: "blur(10px)", opacity: 0 }}
            transition={{
              duration: 0.5,
            }}
            className={cn("inline-block whitespace-nowrap md:text-7xl text-3xl lg:text-7xl text-white text-shadow-2xs", className)}
          >
            <AuroraText>{words[currentIndex]}</AuroraText>
          </motion.span>
        </AnimatePresence>
      </motion.span>
    </>
  );
};
