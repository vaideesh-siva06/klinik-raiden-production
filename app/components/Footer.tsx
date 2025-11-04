"use client";

export const runtime = 'edge';

import React from "react";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-gray-400 py-10 px-5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Branding */}
        <div className="text-white font-bold text-lg">
          Klinik Raiden
        </div>

        {/* Navigation */}
        <div className="flex flex-wrap justify-center gap-6">
          <Link href="/" className="hover:text-white transition-colors">
            Home
          </Link>
          <Link href="/about" className="hover:text-white transition-colors">
            About
          </Link>
          <Link href="/works" className="hover:text-white transition-colors">
            Works
          </Link>
          <Link href="/contact" className="hover:text-white transition-colors">
            Contact
          </Link>
        </div>

        {/* Social / Info */}
        <div className="text-sm text-gray-500 text-center md:text-right">
          &copy; {new Date().getFullYear()} Klinik Raiden. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
