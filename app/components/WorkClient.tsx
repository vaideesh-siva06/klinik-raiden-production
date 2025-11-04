import React from "react";
import { Work } from "../types/work";
import Link from "next/link";
import Button from "./Button";
import AnimatedText from "./AnimatedComponent";

interface WorksClientProps {
  works: Work[];
}

const WorksClient: React.FC<WorksClientProps> = ({ works }) => {
  return (
    <div className="px-6 py-12 bg-black text-white min-h-screen">
      <div className="flex flex-col items-start max-w-7xl mx-auto mb-12">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          <AnimatedText phrases={["Works"]} delay={0} />
        </h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {works.map((work) => (
          <Link key={work._id} href={`/works/${work._id}`}>
            <div className="relative flex flex-col bg-zinc-900 rounded-2xl shadow-xl overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl cursor-pointer">
              <div className="relative w-full flex justify-center items-center bg-black min-h-[250px] sm:min-h-[300px] md:min-h-[350px] lg:min-h-[400px] overflow-hidden">
                <img
                  src={work.bookCoverImg}
                  alt={work.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-5 flex flex-col flex-1 justify-between">
                {work.newRelease && (
                  <p className="text-red-500 tracking-wide font-bold mb-6 mt-2">
                    NEW RELEASE
                  </p>
                )}
                <h2 className="text-xl md:text-2xl font-semibold mb-2">{work.title}</h2>
                {work.quote && (
                  <p className="text-gray-400 italic text-sm md:text-base line-clamp-2">
                    {work.quote}
                  </p>
                )}
                <div className="mt-4 text-center">
                  <Button text="View Work" delayTime={0} />
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default WorksClient;
