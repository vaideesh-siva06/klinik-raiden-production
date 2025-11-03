"use client";

export const runtime = 'edge';

import React, { useState, useEffect } from "react";
import { BsArrowDown } from "react-icons/bs";
import { motion } from "framer-motion";

interface DownArrowProps {
  delay?: number;
  sectionName?: string;
}

const DownArrow: React.FC<DownArrowProps> = ({ delay = 0, sectionName = "" }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), delay * 1000);
    return () => clearTimeout(timer);
  }, [delay]);

 const handleClick = () => {
    const scrollToElement = (targetY: number, duration = 1000) => {
      const startY = window.scrollY;
      const distance = targetY - startY;
      const startTime = performance.now();

      const animateScroll = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easeInOut = 0.5 * (1 - Math.cos(Math.PI * progress));

        window.scrollTo(0, startY + distance * easeInOut);

        if (progress < 1) requestAnimationFrame(animateScroll);
      };

      requestAnimationFrame(animateScroll);
    };

    const section = document.querySelector(".books-section");
    if (section) {
      const rect = section.getBoundingClientRect();

      // ✅ Adjust scroll offset based on screen size
      const isMobile = window.innerWidth < 768;
      const offset = isMobile
        ? window.innerHeight * 0.001 // scrolls a bit more on mobile
        : window.innerHeight * 0.15; // default for larger screens

      const targetY = rect.top + window.scrollY - offset;
      scrollToElement(targetY, 1000);
    }
  };


  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: visible ? 1 : 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      onClick={handleClick}
      className="cursor-pointer"
    >
      {visible && (
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
        >
          <BsArrowDown size={24} className="text-white hover:text-red-500 transition-all duration-200" />
        </motion.div>
      )}
    </motion.div>
  );
};

export default DownArrow;
