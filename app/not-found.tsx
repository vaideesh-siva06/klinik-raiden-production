"use client";

import React from 'react'
import Link from 'next/link'
import { BsFillQuestionCircleFill } from "react-icons/bs";


export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] bg-black text-white text-center px-6">
      <BsFillQuestionCircleFill size={100} className='mb-9'/>
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-2">Page Not Found</h2>
      <p className="text-gray-400 max-w-md mb-8">
        The page you’re looking for doesn’t exist or has been moved.
      </p>

      <Link
        href="/"
        className="px-6 py-3 bg-white text-black rounded-full font-medium hover:bg-transparent hover:text-white hover:border transition-all duration-300"
      >
        Go Back Home
      </Link>
    </div>
  )
}
