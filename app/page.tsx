'use client';

export const runtime = 'edge';

import React from 'react'
import AnimatedComponent from './components/AnimatedComponent'
import Button from './components/Button'
import WorksSection from './components/WorksSection'
import Link from 'next/link'
import DownArrow from './components/DownArrow'

const Home = () => {

  const phrases = [
      // Other phrases
      <p className="text-4xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-4xl 2xl:text-5xl text-center md:mb-3">
        All of my works are free to read and use — that was my intent.
      </p>,

      <p className="text-4xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-4xl 2xl:text-5xl text-center md:mb-3">
        I hope you find solace through my writing. The universe has time.
      </p>,
    ];

  
   const handleScroll = () => {
    const scrollToElement = (targetY: number, duration = 1000) => {
      const startY = window.scrollY;
      const distance = targetY - startY;
      const startTime = performance.now();

      const animateScroll = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easeInOut = 0.5 * (1 - Math.cos(Math.PI * progress));

        window.scrollTo(0, startY + distance * easeInOut);

        if (progress < 1) requestAnimationFrame(animateScroll);
      };

      requestAnimationFrame(animateScroll);
    };

    const section = document.querySelector(".books-section");
    if (section) {
      const rect = section.getBoundingClientRect();

      // ✅ Adjust scroll offset based on screen size
      const isMobile = window.innerWidth < 768;
      const offset = isMobile
        ? window.innerHeight * 0.001 // scrolls a bit more on mobile
        : window.innerHeight * 0.15; // default for larger screens

      const targetY = rect.top + window.scrollY - offset;
      scrollToElement(targetY, 1000);
    }
  };

  return (
    <div>
      {/* Full-screen header */}
      <section className="header min-h-dvh flex items-center justify-center mb-29">
        <div className="flex flex-col items-center justify-center w-full max-w-7xl px-6 text-center">
          <AnimatedComponent phrases={phrases} delay={0} />

          <span className="flex flex-col items-center mt-9 gap-9">
            <div onClick={handleScroll}>
              <Button text="View Works" delayTime={2} />
            </div>

            {/* Reserve space for the arrow */}
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
  )
}

export default Home
