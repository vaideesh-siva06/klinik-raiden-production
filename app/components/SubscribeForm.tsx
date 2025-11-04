'use client'

import React from 'react';
import { motion } from 'framer-motion';

const SubscribeForm = () => {
  return (
    <motion.div
      className="w-full max-w-2xl mx-auto p-12 bg-zinc-800 bg-opacity-80 backdrop-blur-xl rounded-3xl shadow-2xl text-center border border-zinc-700 hover:border-zinc-600 transition-all duration-300"
      initial={{ opacity: 0, y: 0 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
    >
      <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 drop-shadow-md">
        Subscribe
      </h2>
      <p className="text-gray-300 text-base mb-10 drop-shadow-sm">
        Get updates and latest insights delivered straight to your inbox.
      </p>

      <form
        action="https://klinikraiden.us5.list-manage.com/subscribe/post?u=358cadac4e2cbc21d4f558247&amp;id=cd82778554&amp;f_id=009ff1e0f0"
        method="post"
        id="mc-embedded-subscribe-form"
        name="mc-embedded-subscribe-form"
        className="flex flex-col gap-6 w-full"
        target="_blank"
        noValidate
      >
        <input
          type="email"
          name="EMAIL"
          id="mce-EMAIL"
          placeholder="Enter your email"
          required
          className="px-6 py-4 rounded-xl border border-zinc-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent bg-zinc-700 bg-opacity-50 text-gray-100 placeholder-gray-400 w-full text-lg transition-all shadow-sm hover:shadow-md"
        />

        {/* Response messages */}
        <div id="mce-responses" className="text-sm">
          <div id="mce-error-response" className="text-red-500" style={{ display: 'none' }}></div>
          <div id="mce-success-response" className="text-green-500" style={{ display: 'none' }}></div>
        </div>

        {/* Honeypot field for bots (hidden) */}
        <div aria-hidden="true" style={{ position: 'absolute', left: '-5000px' }}>
          <input
            type="text"
            name="b_358cadac4e2cbc21d4f558247_cd82778554"
            tabIndex={-1}
            defaultValue=""
            readOnly
          />
        </div>

        <button
          type="submit"
          name="subscribe"
          id="mc-embedded-subscribe"
          className="px-6 py-4 rounded-xl bg-red-600 hover:bg-red-700 text-white font-semibold text-lg shadow-lg hover:shadow-red-500/50 transition-all duration-300 transform hover:scale-105 w-full"
        >
          Subscribe
        </button>
      </form>

      <p className="text-gray-400 text-sm mt-8">
        Or contact directly at{' '}
        <a
          href="mailto:klinikraiden@gmail.com"
          className="text-red-400 hover:text-red-300 underline underline-offset-2 transition-colors font-medium"
        >
          klinikraiden@gmail.com
        </a>
      </p>
    </motion.div>
  );
};

export default SubscribeForm;
