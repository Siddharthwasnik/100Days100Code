import React from 'react'

import logo from '../assets/final_logo.png'
import { FaLinkedin } from 'react-icons/fa'
import { FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa6'

const Navbar = () => {
  return (
<nav className='flex items-center justify-between py-6 text-white'>
  <div className='flex flex-shrink-0 items-center'>
    <a href="/" aria-label='home' >
    <img src={logo} alt="logo" className='mx-2' width={100} height={33} /></a>
  </div>
<div className='flex justify-center items-center gap-4 text-2xl m-8'>
<a href="https://www.linkedin.com/in/siddharthwasnik/"
 aria-label='Linkedin'
  rel='noopner norefrrer 
 'target='_blank'><FaLinkedin/></a>
 <a href="https://github.com/siddw15"
 aria-label='GitHub'
  rel='noopner norefrrer 
 'target='_blank'><FaGithub/></a>
 <a href="https://www.instagram.com/siddw15/"
 aria-label='Instagram'
  rel='noopner norefrrer 
 'target='_blank'><FaInstagram/></a>
 <a href="https://x.com/Arth_sidd15"
 aria-label='Twitter'
  rel='noopner norefrrer 
 'target='_blank'><FaTwitter/></a>
</div>
</nav>
  )
}

export default Navbar
