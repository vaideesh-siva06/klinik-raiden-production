export const runtime = 'nodejs';

import React from 'react';
import AnimatedComponent from './components/AnimatedComponent';
import Button from './components/Button';
import WorksSection from './components/WorksSection';
import Link from 'next/link';
import DownArrow from './components/DownArrow';
import ScrollButton from './components/ScrollButton';
import Head from 'next/head';

const Home = () => {
  const phrases = [
    <p className="text-4xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-4xl 2xl:text-5xl text-center md:mb-3">
      All of my works are free to read and use — that was my intent.
    </p>,
    <p className="text-4xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-4xl 2xl:text-5xl text-center md:mb-3">
      I hope you find solace through my writing. The universe has time.
    </p>,
  ];

  const canonicalUrl = "https://klinokraiden.com/";

  return (
    <div>
      <Head>
        <title>Klinik Raiden | Home</title>
        <meta
          name="description"
          content="Explore Klinik Raiden — a collection of free-to-read works and writings meant to inspire and provide solace."
        />
        <meta
          name="keywords"
          content="Klinik Raiden, writing, free works, literature, inspiration, solace"
        />
        <meta name="robots" content="index,follow" />
        <meta name="author" content="Klinik Raiden" />

        {/* Canonical URL */}
        <link rel="canonical" href={canonicalUrl} />

        {/* Open Graph / Social Sharing */}
        <meta property="og:title" content="Klinik Raiden | Home" />
        <meta
          property="og:description"
          content="Explore Klinik Raiden — a collection of free-to-read works and writings meant to inspire and provide solace."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:site_name" content="Klinik Raiden" />
      </Head>

      {/* Full-screen header */}
      <section className="header min-h-dvh flex items-center justify-center mb-29">
        <div className="flex flex-col items-center justify-center w-full max-w-7xl px-6 text-center">
          <AnimatedComponent phrases={phrases} delay={0} />

          <span className="flex flex-col items-center mt-9 gap-9">
            <ScrollButton />

            <div className="h-12 relative w-full flex justify-center">
              <DownArrow delay={3} sectionName={'.books-section'} />
            </div>
          </span>
        </div>
      </section>

      {/* Books section */}
      <section className="books-section relative z-0">
        <div
          className="
            flex flex-col items-start justify-start
            mx-auto w-full max-w-7xl px-6
            -mt-76 sm:-mt-64 md:-mt-48 lg:-mt-48 xl:-mt-56
          "
        >
          <WorksSection />
        </div>
      </section>
    </div>
  );
};

export default Home;
