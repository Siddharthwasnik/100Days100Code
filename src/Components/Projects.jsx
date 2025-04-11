import React from 'react'
import { motion } from 'framer-motion'
import { PROJECTS } from '.'

const Projects = () => {
  return (
    <div className='pb-4'>
      <h2 className='my-20 text-center text-4xl'>Projects</h2>
      <div>
        {PROJECTS.map((project, index) => (
          <div key={index} className="mb-20 flex flex-wrap lg:justify-center items-center gap-8">
            
            {/* Left: Project Image with animation */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/4"
            >
              <img
                src={project.image}
                alt={project.title}
                width={250}
                height={250}
                className='mb-6 rounded'
              />
            </motion.div>

            {/* Right: Project Details with animation */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <h3 className='mb-2 font-semibold text-2xl'>{project.title}</h3>
              <p className='mb-4 text-stone-400'>{project.description}</p>
              <div className='flex flex-wrap gap-2'>
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className='rounded bg-stone-900 p-2 text-sm font-medium text-stone-300'
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

export default Projects
