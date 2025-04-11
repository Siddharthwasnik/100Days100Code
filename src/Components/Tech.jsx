import React from 'react'
import { DiMongodb } from 'react-icons/di'
import { FaCss3Alt, FaHtml5, FaJs, FaNodeJs } from 'react-icons/fa'
import { RiReactjsLine } from 'react-icons/ri'
import { SiExpress } from 'react-icons/si'
import { motion } from 'framer-motion'

// Animation variant
const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: 'linear',
      repeat: Infinity,
      repeatType: 'reverse',
    },
  },
})

const Tech = () => {
  return (
    <div className='pb-24'>
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className='my-20 text-center text-4xl'
      >
        Technologies
      </motion.h2>

      <div className="flex flex-wrap items-center justify-center gap-4">
        <motion.div
          initial='initial'
          animate='animate'
          variants={iconVariants(2.5)}
        >
          <FaHtml5 className='text-7xl text-red-300' />
        </motion.div>

        <motion.div
          initial='initial'
          animate='animate'
          variants={iconVariants(3)}
          className="p-4"
        >
          <FaCss3Alt className='text-7xl text-blue-400' />
        </motion.div>

        <motion.div
          initial='initial'
          animate='animate'
          variants={iconVariants(5)}
          className="p-4"
        >
          <FaJs className='text-7xl text-yellow-200' />
        </motion.div>

        <motion.div
          className='p-4'
          initial='initial'
          animate='animate'
          variants={iconVariants(2)}
        >
          <DiMongodb className='text-7xl text-green-400' />
        </motion.div>

        <motion.div
          className="p-4"
          initial='initial'
          animate='animate'
          variants={iconVariants(6)}
        >
          <SiExpress className='text-7xl' />
        </motion.div>

        <motion.div
          className="p-4"
          initial='initial'
          animate='animate'
          variants={iconVariants(3)}
        >
          <RiReactjsLine className='text-7xl text-cyan-400' />
        </motion.div>

        <motion.div
          className="p-4"
          initial='initial'
          animate='animate'
          variants={iconVariants(4)}
        >
          <FaNodeJs className='text-7xl text-green-600' />
        </motion.div>
      </div>
    </div>
  )
}

export default Tech
