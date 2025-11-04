'use client';

import React from 'react';
import Button from './Button';

const ScrollButton = () => {
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

    const section = document.querySelector('.books-section');
    if (section) {
      const rect = section.getBoundingClientRect();
      const isMobile = window.innerWidth < 768;
      const offset = isMobile
        ? window.innerHeight * 0.001
        : window.innerHeight * 0.15;

      const targetY = rect.top + window.scrollY - offset;
      scrollToElement(targetY, 1000);
    }
  };

  return (
    <div onClick={handleScroll}>
      <Button text="View Works" delayTime={2} />
    </div>
  );
};

export default ScrollButton;
