'use client';

import React, { useState } from "react";
import WorksClient from "../components/WorkClient";
import { worksData } from "../data/worksData";
import Head from "next/head";
import { FaBook, FaGlobe, FaFileAlt } from "react-icons/fa";

export const runtime = "edge";

const WorksPage = () => {
  const canonicalUrl = "https://klinokraiden.com/works";

  const tabs = [
    { name: "Books", icon: <FaBook className="inline mr-2" /> },
    { name: "Public Writings", icon: <FaGlobe className="inline mr-2" /> },
    { name: "Academic Papers", icon: <FaFileAlt className="inline mr-2" /> },
  ];

  const [activeTab, setActiveTab] = useState(tabs[0].name);

  // Filter works by type
  const filteredWorks = worksData.filter(
    (work) => work.type === activeTab
  );

  return (
    <>
      <Head>
        <title>All Works | Klinik Raiden</title>
        <meta
          name="description"
          content="Explore all works by Klinik Raiden — free-to-read writings, insights, and thought-provoking pieces."
        />
        <meta
          name="keywords"
          content="Klinik Raiden, works, writings, free, literature, philosophy, science"
        />
        <meta name="robots" content="index,follow" />
        <meta name="author" content="Klinik Raiden" />
        <link rel="canonical" href={canonicalUrl} />

        <meta property="og:title" content="All Works | Klinik Raiden" />
        <meta
          property="og:description"
          content="Explore all works by Klinik Raiden — free-to-read writings, insights, and thought-provoking pieces."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:site_name" content="Klinik Raiden" />
      </Head>

      <div className="max-w-5xl mx-auto px-4 py-12">
        {/* Page Title */}
        <h1 className="text-4xl font-bold text-white mb-8 text-center">
          Works
        </h1>

        {/* Tabs */}
        <div className="flex justify-center space-x-6 border-b border-gray-200 mb-1">
          {tabs.map((tab) => (
            <button
              key={tab.name}
              className={`py-2 px-6 font-semibold text-lg rounded-t-md transition-colors duration-200 flex items-center ${
                activeTab === tab.name
                  ? "bg-red-900 text-white border-b-4 border-red-900"
                  : "bg-white text-black hover:bg-red-900 hover:text-white"
              }`}
              onClick={() => setActiveTab(tab.name)}
            >
              {tab.icon}
              {tab.name}
            </button>
          ))}
        </div>

        {/* Works Content */}
        <div className="min-h-[200px]">
          {filteredWorks.length > 0 ? (
            <WorksClient works={filteredWorks} />
          ) : (
            <p className="text-center text-white text-lg mt-[30vh]">
              No {activeTab} Found.
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default WorksPage;
