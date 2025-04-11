import React from 'react'
import { motion } from 'framer-motion'
import { CONTACT } from '.'

const Contact = () => {
  return (
    <div className='border-t border-stone-900 pb-20'>
      
      {/* Heading animation */}
      <motion.h2
        className="my-10 text-center text-4xl"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Get in Touch
      </motion.h2>

      <motion.div
        className="text-center tracking-tighter"
        initial="hidden"
        whileInView="visible"
        transition={{ staggerChildren: 0.3 }}
        variants={{
          hidden: {},
          visible: {},
        }}
      >
        {/* Address */}
        <motion.p
          className="my-4"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.8 }}
        >
          {CONTACT.address}
        </motion.p>

        {/* Phone number */}
        <motion.p
          className="my-4"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.8 }}
        >
          {CONTACT.phoneNo}
        </motion.p>

        {/* Email */}
        <motion.a
          href={`mailto:${CONTACT.email}`}
          className='border-b'
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.8 }}
        >
          {CONTACT.email}
        </motion.a>
      </motion.div>
    </div>
  )
}

export default Contact
