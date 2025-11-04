import React from "react";
import WorksClient from "../components/WorkClient";
import { worksData } from "../data/worksData";
import Head from "next/head";

export const runtime = "edge";

const WorksPage = () => {
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
      </Head>

      <WorksClient works={worksData} />
    </>
  );
};

export default WorksPage;
