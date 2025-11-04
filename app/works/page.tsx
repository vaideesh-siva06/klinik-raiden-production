import React from "react";
import WorksClient from "../components/WorkClient";
import { worksData } from "../data/worksData";
import Head from "next/head";

export const runtime = "edge";

const WorksPage = () => {
  const canonicalUrl = "https://klinokraiden.com/works";

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

        {/* Canonical URL */}
        <link rel="canonical" href={canonicalUrl} />

        {/* Open Graph / Social Sharing */}
        <meta property="og:title" content="All Works | Klinik Raiden" />
        <meta
          property="og:description"
          content="Explore all works by Klinik Raiden — free-to-read writings, insights, and thought-provoking pieces."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:site_name" content="Klinik Raiden" />
      </Head>

      <WorksClient works={worksData} />
    </>
  );
};

export default WorksPage;
