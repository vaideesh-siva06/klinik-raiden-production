'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import './Navbar.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {

    const handleResize = () => {
        if(window.innerWidth >= 768)
        {
            setIsOpen(false);
        }
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);

  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full bg-black text-white px-6 py-4 z-9999">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="text-4xl font-bold mt-2">
                <Link href={'/'}>KLINIK RAIDEN</Link>
            </div>

            {/* Desktop Menu */}
            <ul className="hidden md:flex gap-10 text-xl">
            <Link href="/" className="nav-item hover:text-gray-400">HOME</Link>
            <Link href="/works" className="nav-item hover:text-gray-400">WORKS</Link>
            <Link href="/about" className="nav-item hover:text-gray-400">ABOUT</Link>
            </ul>

            {/* Hamburger Button */}
            <button
            className="md:hidden text-white focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                )}
            </svg>
            </button>
        </div>

        {/* Mobile Overlay Menu */}
        <div
            className={`absolute left-0 top-full w-full bg-neutral-950 bg-opacity-95 backdrop-blur-md transition-all duration-300 ease-in-out md:hidden ${
                isOpen
                ? 'max-h-96 opacity-100 pointer-events-auto'
                : 'max-h-0 opacity-0 pointer-events-none'
            }`}
            >
            <ul className="flex flex-col gap-4 p-6" onClick={() => setIsOpen(false)}>
                <Link href="/" className="nav-item hover:text-gray-400 hover:cursor-pointer">HOME</Link>
                <Link href="/works" className="nav-item hover:text-gray-400 hover:cursor-pointer">WORKS</Link>
                <Link href="/about" className="nav-item hover:text-gray-400 hover:cursor-pointer">ABOUT</Link>
            </ul>
        </div>

        </nav>

  );
}
