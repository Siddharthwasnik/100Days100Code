import React from 'react';
import profile from '../assets/profile.png';
import { HERO_CONTENT } from '.';
import { motion } from 'framer-motion';
const containerVariants={
  hidden:{opacity:0,x:-100},
  visible:{
    opacity:1,
    x:0,
    transition:{
      duartion:0.5,
      staggerChidren:0.5,
    }
  }
}
const ChildVariants={
  hidden:{opacity:0,x:-100},
  visible:{opacity:1,x:0, transition:{duration:0.5}}
}

const Hero = () => {
  return (
    < div className='pb-4 lg:mb-36'>
      < motion.div
      initial='hidden'
      animate='visible'
      variants={containerVariants}
       className="flex flex-wrap lg:flex-row-reverse">
        {/* Image Section */}
        <div className="w-full lg:w-1/2">
          <div className="flex justify-center lg:p-8">
            <img
              src={profile}
              alt="profile"
              className='border border-stone-900 rounded-3xl'
            />
          </div>
        </div>

        {/* Text Section */}
        <div className='w-full lg:w-1/2'>
          <div className="flex flex-col items-center lg:items-start mt-10">
            < motion.h2
            variants={ChildVariants}
            
            className='pb-2 text-4xl tracking-tighter lg:text-8xl'>
              Siddharth Wasnik
            </motion.h2>
            <motion.span 
            variants={ChildVariants} className="bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-3xl tracking-tight">
              Full Stack Developer
            </motion.span>
            < motion.p variants={ChildVariants} className='my-2 max-w-lg text-xl leading-relaxed py-6 tracking-tighter'>
              {HERO_CONTENT}
            </motion.p>
            <motion.a
            variants={ChildVariants}
              href="./Resume.pdf"
              target='_blank'
              rel='noopener noreferrer'
              download
              className='rounded-full bg-white text-lg font-bold py-4 px-6 text-stone-800 mb-10'
            >
              Download Resume
            </motion.a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
