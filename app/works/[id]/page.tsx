"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { useParams, notFound } from "next/navigation";
import { motion } from "framer-motion";
import Button from "../../components/Button";
import { useWorks } from "../../context/WorksContext";

const WorkPage = () => {
  const { works } = useWorks();
  const params = useParams();

  const work = works.find((w) => w._id?.toString() === params.id);

  useEffect(() => {
    if (works.length && !work) notFound();
  }, [works, work]);

  useEffect(() => {
    if (work?.title) {
      document.title = `Klinik Raiden | ${work.title}`;
    }
    window.scrollTo(0, 0);
  }, [work]);

  if (!works.length || !work) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white bg-black">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-black text-white flex flex-col lg:flex-row items-stretch gap-8 lg:gap-16 max-w-7xl mx-auto px-5 sm:px-6 md:px-10 py-10 md:py-16 overflow-hidden">
      
      {/* LEFT: TEXT */}
      <motion.div
        key={work._id + "-text"}
        className="relative w-full lg:w-1/2 flex flex-col justify-center order-2 gap-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {/* Desktop Back button */}
        <Link
          href="/works"
          className="hidden lg:flex absolute top-6 left-0 md:top-20 items-center gap-2 text-gray-400 hover:text-white transition-colors duration-200 z-50"
        >
          <span className="text-lg">←</span>
          <span className="text-sm md:text-base">Back</span>
        </Link>

        <div className="lg:mt-16 space-y-4">
          {work.newRelease && (
            <p className="text-red-500 tracking-wide uppercase">NEW RELEASE</p>
          )}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            {work.title}
          </h1>
          {work.quote && (
            <p className="italic text-lg md:text-xl text-gray-300">{work.quote}</p>
          )}
          <p className="text-base md:text-lg text-gray-300 leading-relaxed whitespace-pre-line">
            {work.description}
          </p>

          {/* Download Button */}
          <div className="flex flex-col md:flex-row gap-4 justify-start mt-8 text-center">
            <Link href={work.downloadLink} download>
              <Button text="Download Free PDF" delayTime={0} />
            </Link>
          </div>
        </div>
      </motion.div>

      {/* RIGHT: IMAGE */}
      <motion.div
        key={work._id + "-img"}
        className="relative w-full lg:w-1/2 flex items-center justify-center order-1"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Mobile Back button */}
        <Link
          href="/works"
          className="flex lg:hidden absolute top-0 left-0 items-center gap-2 text-gray-400 hover:text-white transition-colors duration-200 mb-4 z-50"
        >
          <span className="text-lg">←</span>
          <span className="text-base">Back</span>
        </Link>

        <div className="relative flex items-center justify-center w-full h-full overflow-visible">
          <img
            src={work.img}
            alt={work.title}
            className="relative w-[160%] ml-15 md:ml-0 md:w-[150%] max-w-none h-auto object-contain transition-transform duration-700 ease-out hover:scale-110 -translate-x-6 lg:-translate-x-10"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default WorkPage;
