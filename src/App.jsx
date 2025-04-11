import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Tech from './Components/Tech'
import Projects from './Components/Projects'
import Experiance from './Components/Experiance'
import Contact from './Components/Contact'

const App = () => {
  return (
    <div className='overflow-x-hidden text-stone-300 antialiased'>
      <div className='fixed insert-0 -z-10'>
        <div class="absolute top-0 z-[-2] h-screen w-screen
         bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),
         rgba(255,255,255,0))]"></div>

      </div>
      <div className='mx-auto px-8 container'>
        <Navbar />
        <Hero />
        <Tech/>
        <Projects/>
        <Experiance/>
        <Contact/>
      </div>


    </div>
  )
}

export default App
