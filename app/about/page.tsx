export const runtime = "edge";

import React from "react";
import AnimatedComponent from "../components/AnimatedComponent";

const About = () => {
  // Philosophy quote as a single styled card
  const phrases = [
    <div className="relative w-full flex justify-center mt-12 mb-16 cursor-auto">
      <blockquote className="bg-zinc-900 bg-opacity-70 p-8 md:p-12 rounded-2xl shadow-xl max-w-5xl w-full text-center">
        <p className="cursor-text text-2xl sm:text-xl md:text-2xl lg:text-3xl xl:text-3xl 2xl:text-4xl italic text-gray-200 leading-relaxed">
          “The point of philosophy is not just to push the boundaries of complex thought,
          but to also make it simple and accessible
          to those who are simply too busy to think about philosophy.”
        </p>
        <cite className="block mt-6 text-lg md:text-xl not-italic text-gray-400 text-right">
          — Klinik Raiden
        </cite>
      </blockquote>
    </div>
  ];

  // Main author description
  const authorDescription = (
    <div className="text-lg sm:text-xl lg:text-2xl leading-relaxed space-y-6 text-left cursor-text">
      <p className="cursor-text">
        Klinik Raiden is a scientific philosopher who views scientific facts under a philosophical lens, while patiently and quietly writing about it in his little corner of the world.
      </p>

      <p className="cursor-text">
        Why? Because combining science and philosophy is akin to combining truth and meaning: science reveals the reality of our world, and philosophy helps us uncover the deeper significance of that reality.
      </p>

      <p className="cursor-text">
        <i>Here is his message:</i><br /><br />
        <i>Admiration is always the furthest from understanding. Continued admiration even after understanding is called love. The author does not want to be admired, nor loved, but rather understood — that is the purpose of all his work.</i>
      </p>

      <p className="cursor-text">
        Whether or not it impacts you, his thoughts were at least witnessed, and in turn the author's life is indeed witnessed as well. And that is enough for me.
      </p>

      <p className="cursor-text">
        Thank you for reading my work.<br /><br />
        — K. Raiden
      </p>
    </div>
  );

  return (
    <div className="px-6 py-12 sm:px-12 lg:px-24 cursor-auto">
      <div className="flex flex-col items-start justify-center mx-auto w-full max-w-4xl">
        {/* Page heading */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8 text-center sm:text-left cursor-text">
          <AnimatedComponent phrases={["About the Author"]} delay={0} />
        </h1>

        {/* Philosophy quote */}
        <AnimatedComponent phrases={phrases} delay={0.4} />

        {/* Author description */}
        <AnimatedComponent phrases={[authorDescription]} delay={1} />
      </div>
    </div>
  );
};

export default About;
