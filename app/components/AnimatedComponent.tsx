'use client'

export const runtime = 'edge';

import { motion } from 'framer-motion'
import React from 'react'

interface AnimatedProp {
    phrases: string[] | React.ReactNode[],
    delay: number
}

export default function AnimatedComponent({ phrases, delay }: AnimatedProp) {
  return (
    <div className="relative text-3xl md:text-4xl leading-relaxed cursor-text">
      {phrases.map((phrase, index) => (
        <motion.span
          key={index}
          className="block cursor-text"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: delay + index * 1, // delay between each phrase
            duration: 1.2,
            ease: 'easeOut',
          }}
        >
          {phrase}
        </motion.span>
      ))}
    </div>
  )
}
