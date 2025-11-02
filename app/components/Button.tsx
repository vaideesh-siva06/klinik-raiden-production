"use client";

import React from 'react'
import { motion } from 'framer-motion';

interface ButtonProps {
  text: string,
  delayTime: number
}

const Button:React.FC<ButtonProps> = ({ text, delayTime }) => {
  return (
    <div>
        <motion.span
        className="block hover:cursor-pointer whitespace-nowrap"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
            delay: delayTime,
            duration: 1.2,
            ease: 'easeOut',
        }}
        >
            <div className='border py-3 px-16 text-xl hover:bg-red-900 transition-all duration-300'>
                {text}
            </div>
        </motion.span>
    </div>
  )
}

export default Button