"use client";

import { useEffect, useRef, useState } from "react";

const Loader: React.FC<{ onFinish?: () => void }> = ({ onFinish }) => {
  const [visible, setVisible] = useState(true);
  const [fadingOut, setFadingOut] = useState(false); // track fade-out
  const krRef = useRef<HTMLHeadingElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const krWidth = krRef.current?.offsetWidth || 100; // measure KR width

    const timer = setTimeout(() => {
      if (barRef.current) {
        barRef.current.style.width = `${krWidth}px`;
        barRef.current.style.transition = "width 1.2s ease-in-out";
      }

      // Fade out loader after bar animation
      setTimeout(() => {
        setFadingOut(true); // trigger fade out

        // Wait for fade-out transition before unmounting
        setTimeout(() => {
          setVisible(false);
          if (onFinish) onFinish();
        }, 600); // match fade-out duration
      }, 1400); // slightly longer than bar animation
    }, 800); // wait for KR fade-in

    return () => clearTimeout(timer);
  }, [onFinish]);

  if (!visible) return null;

  return (
    <div
      ref={containerRef}
      className={`fixed inset-0 bg-black flex flex-col items-center justify-center z-[9999]`}
      style={{
        opacity: fadingOut ? 0 : 1,
        transition: "opacity 0.6s ease-in-out",
      }}
    >
      {/* KR */}
      <h1
        ref={krRef}
        className="text-white text-6xl md:text-8xl font-bold select-none opacity-0 animate-fade-in mb-6"
      >
        KR
      </h1>

      {/* Loader bar */}
      <div
        ref={barRef}
        className="h-1 bg-white rounded w-3"
        style={{ transition: "none" }}
      />
    </div>
  );
};

export default Loader;
