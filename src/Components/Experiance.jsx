import React from 'react'
import { motion } from 'framer-motion'
import { EXPERIENCES } from '.'

const Experiance = () => {
  return (
    <div className='pb-4'>
      <h2 className='my-20 text-center text-4xl'>Experience</h2>
      <div>
        {EXPERIENCES.map((experience, index) => (
          <div className="mb-12 flex flex-wrap lg:justify-center items-start gap-6" key={index}>

            {/* Left: Year */}
            <motion.div
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className='w-full lg:w-1/4'
            >
              <p className="mb-2 text-sm text-stone-400">
                {experience.year}
              </p>
            </motion.div>

            {/* Right: Role, company, desc, techs */}
            <motion.div
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <h3 className="mb-2 font-semibold">
                {experience.role} -{" "}
                <span className="text-sm text-stone-500">{experience.company}</span>
              </h3>
              <p className='mb-4 text-stone-400'>{experience.description}</p>

              <div className="flex flex-wrap gap-2">
                {experience.tech.map((tech, index) => (
                  <span
                    key={index}
                    className='rounded bg-stone-900 px-2 py-1 text-sm text-stone-300'
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>

          </div>
        ))}
      </div>
    </div>
  )
}

export default Experiance
