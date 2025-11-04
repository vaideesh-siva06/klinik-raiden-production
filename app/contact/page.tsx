import React from "react";
import SubscribeForm from "../components/SubscribeForm";
import Head from "next/head";

export const runtime = "edge";

const Subscribe = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black px-6 sm:px-12 lg:px-24">
      <Head>
        <title>Subscribe | Klinik Raiden</title>
        <meta
          name="description"
          content="Subscribe to Klinik Raiden's newsletter to receive the latest updates, insights, and releases directly in your inbox."
        />
        <meta
          name="keywords"
          content="Klinik Raiden, newsletter, subscribe, updates, insights"
        />
        <meta name="robots" content="index,follow" />
        <meta name="author" content="Klinik Raiden" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://klinikraiden.com/contact" />

        {/* Open Graph / Social Sharing */}
        <meta property="og:title" content="Subscribe | Klinik Raiden" />
        <meta
          property="og:description"
          content="Subscribe to Klinik Raiden's newsletter to receive the latest updates, insights, and releases directly in your inbox."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://klinikraiden.com/contact" />
        <meta property="og:site_name" content="Klinik Raiden" />
      </Head>

      <div className="w-full max-w-4xl bg-black rounded-3xl p-12 shadow-2xl text-center">
        {/* Page Header */}
        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 drop-shadow-md">
          Stay Connected with Klinik Raiden
        </h1>
        <p className="text-gray-300 text-lg mb-10 drop-shadow-sm">
          Subscribe to our newsletter and never miss the latest updates, insights, and new releases.
        </p>

        {/* Subscribe Form Component */}
        <SubscribeForm />
      </div>
    </div>
  );
};

export default Subscribe;
