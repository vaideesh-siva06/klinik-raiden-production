"use client";

import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const AnimatedImage = ({ src, alt, className }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: window.innerWidth < 768 ? "-100px" : "-300px" });


  return (
    <motion.img
      ref={ref}
      src={src}
      alt={alt}
      className={className}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4 }}
    />
  );
};

export default AnimatedImage;
