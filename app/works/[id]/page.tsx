"use client";

export const runtime = "edge";

import React, { useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import { useParams, notFound } from "next/navigation";
import { motion } from "framer-motion";
import Button from "../../components/Button";
import { useWorks } from "../../context/WorksContext";
import Head from "next/head";
import Image from "next/image";

const WorkPage = () => {
  const { works } = useWorks();
  const params = useParams();

  const work = works.find((w) => w._id?.toString() === params.id);

  useEffect(() => {
    if (works.length && !work) notFound();
  }, [works, work]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [work]);

  if (!works.length || !work) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white bg-black">
        <p>Loading...</p>
      </div>
    );
  }

  const canonicalUrl = `https://klinikraiden.com/works/${work._id}`;

  return (
    <>
      {/* Head for SEO */}
      <Head>
        <title>Klinik Raiden | {work.title}</title>
        <meta
          name="description"
          content={work.description || "Explore this free work by Klinik Raiden."}
        />
        <meta
          name="keywords"
          content={`${work.title}, Klinik Raiden, free work, PDF, philosophy, science, writings`}
        />
        <meta name="robots" content="index,follow" />
        <meta name="author" content="Klinik Raiden" />

        {/* Canonical URL */}
        <link rel="canonical" href={canonicalUrl} />

        {/* Open Graph / Social Sharing */}
        <meta property="og:title" content={`Klinik Raiden | ${work.title}`} />
        <meta
          property="og:description"
          content={work.description || "Explore this free work by Klinik Raiden."}
        />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:site_name" content="Klinik Raiden" />
        {work.img && <meta property="og:image" content={work.img} />}
      </Head>

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
            className="hidden lg:flex absolute top-6 left-0 lg:top-40 items-center gap-2 text-gray-400 hover:text-white transition-colors duration-200 z-50"
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

            {/* ✅ Download Button */}
            <div className="flex flex-col md:flex-row gap-4 justify-start mt-8 text-center">
              <Link
                href={work.downloadLink}
                download
                onClick={async (e) => {
                  try {
                    await axios.put(`/api/works/${work._id}/incrementDownload`);
                  } catch (error) {
                    console.error("Error incrementing download:", error);
                  }
                }}
              >
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

          <div className="relative w-full h-[600px] sm:h-[800px] lg:h-[1200px] overflow-visible">
            <Image
              src={work.img}
              alt={work.title}
              fill
              className="object-contain transition-transform duration-700 ease-out scale-110 lg:scale-200 -translate-x-6 lg:-translate-x-10"
            />
          </div>

        </motion.div>
      </div>
    </>
  );
};

export default WorkPage;