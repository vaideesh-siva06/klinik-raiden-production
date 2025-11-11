'use client';

import React from "react";
import { Work } from "../types/work";
import Link from "next/link";
import Button from "./Button";
import Image from "next/image";
import { motion } from "framer-motion";

interface WorksClientProps {
  works: Work[];
}

const WorksClient: React.FC<WorksClientProps> = ({ works }) => {
  return (
    <div className="px-6 py-12 bg-black text-white min-h-screen">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {works.map((work, index) => (
          <motion.div
            key={work._id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ 
              duration: 0.4,
              delay: index * 0.05,
              ease: "easeOut"
            }}
          >
            <div className="relative flex flex-col bg-zinc-900 rounded-2xl shadow-xl overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl cursor-pointer">
              
              {/* Book Cover */}
              {/* Image / Cover */}
              {work.bookCoverImg ? (
                <div className="relative w-full flex justify-center items-center bg-black min-h-[250px] sm:min-h-[300px] md:min-h-[350px] lg:min-h-[400px] overflow-hidden">
                  <Image
                    src={work.bookCoverImg}
                    width={1800}
                    height={2400}
                    alt={work.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              ) : work.img ? (
                <div className="relative w-full flex justify-center items-center bg-black min-h-[250px] sm:min-h-[300px] md:min-h-[350px] lg:min-h-[400px] overflow-hidden">
                  <Image
                    src={work.img}
                    width={1800}
                    height={2400}
                    alt={work.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              ) : null}


              {/* Content */}
              <div className="p-5 flex flex-col flex-1 justify-between">
                {work.newRelease && (
                  <p className="text-red-500 tracking-wide font-bold mb-6 mt-2">
                    NEW RELEASE
                  </p>
                )}
                <h2 className="text-xl md:text-2xl font-semibold mb-2">{work.title}</h2>
                {work.quote && (
                  <p
                    className={`text-gray-400 italic text-sm md:text-base line-clamp-2 ${
                      !work.bookCoverImg ? "mb-20" : "mb-2"
                    }`}
                  >
                    {work.quote}
                  </p>
                )}

                <div className="mt-4 text-center cursor-pointer">
                  {work.bookCoverImg ? (
                    // Go to work details page
                    <Link href={`/works/${work._id}`}>
                      <Button text="View Work" delayTime={0} />
                    </Link>
                  ) : (
                    // Go to download link if no image
                    <a href={work.downloadLink} target="_blank" rel="noopener noreferrer">
                      <Button text="View Work" delayTime={0} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default WorksClient;
