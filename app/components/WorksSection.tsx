"use client";

export const runtime = 'edge';

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Button from "../components/Button";
import { useWorks } from "../context/WorksContext";

const WorksSection = () => {
  const { works } = useWorks(); // ✅ Get works from context
  const [viewportAmount, setViewportAmount] = useState(0.6);

  // Make responsive for framer-motion's viewport
  useEffect(() => {
    const updateViewportAmount = () => {
      setViewportAmount(window.innerWidth < 768 ? 0 : 0.6);
    };

    updateViewportAmount();
    window.addEventListener("resize", updateViewportAmount);
    return () => window.removeEventListener("resize", updateViewportAmount);
  }, []);

  // Only new releases
  const newReleases = works.filter((work) => work.newRelease);

  if (newReleases.length === 0) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4 w-full">

        <h2 className="text-2xl md:text-5xl font-semibold text-gray-300 mb-7">
          No New Releases
        </h2>

        <p className="text-gray-500 max-w-md">
          Check back soon for our latest books and updates. We’re constantly
          adding new works!
        </p>
      </div>
    );
  }


  return (
    <div className="flex flex-col gap-24 mt-10 md:mt-20 md:mb-32 max-w-7xl mx-auto px-5">
      {newReleases.map((work) => (
        <div
          key={work._id}
          className="flex flex-col lg:flex-row items-center lg:items-stretch gap-8 w-full overflow-hidden"
        >
          {/* Image Section */}
          <motion.div
            className="relative w-full lg:w-1/2 order-1 lg:order-2 flex items-center justify-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative flex items-center justify-center rounded-2xl p-6 w-full h-full overflow-visible">
              <img
                src={work.img}
                alt={work.title}
                className="relative w-[200%] ml-24 md:ml-36 md:w-full lg:w-[150%] max-w-none h-auto object-contain object-center transition-transform duration-700 ease-out hover:scale-110 -translate-x-6 lg:-translate-x-10"
              />
            </div>
          </motion.div>

          {/* Text Section */}
          <motion.div
            className="w-full lg:w-1/2 bg-black text-white p-6 md:p-10 flex flex-col justify-center order-2 lg:order-1 text-center lg:text-left"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: viewportAmount }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="mb-4 text-red-500 tracking-wide uppercase">NEW RELEASE</p>

            <h1 className="text-4xl md:text-5xl font-bold leading-tight">{work.title}</h1>

            {work.quote && (
              <p className="mt-5 text-2xl italic text-gray-300">{work.quote}</p>
            )}

            <p className="mt-4 text-lg md:text-xl text-gray-300 whitespace-pre-line leading-relaxed">
              {work.description}
            </p>

            <div className="mt-8 flex justify-center lg:justify-start">
              <Link href={`/works/${work._id}`}>
                <Button text="View Work" delayTime={0} />
              </Link>
            </div>
          </motion.div>
        </div>
      ))}
    </div>
  );
};

export default WorksSection;
