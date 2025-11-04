'use client'

import React from "react";
import SubscribeForm from "../components/SubscribeForm";

const Subscribe = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black px-6 sm:px-12 lg:px-24">
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
export const runtime = "edge";
