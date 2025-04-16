import React, { useState, useEffect } from 'react'
import bg from '../assets/quoteBG.jpg'
import { Twitter } from 'lucide-react'

const Quote = () => {
  // Local quotes collection to avoid API issues
  const quotes = [
    { content: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
    { content: "Life is what happens when you're busy making other plans.", author: "John Lennon" },
    { content: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
    { content: "Spread love everywhere you go. Let no one ever come to you without leaving happier.", author: "Mother Teresa" },
    { content: "The greatest glory in living lies not in never falling, but in rising every time we fall.", author: "Nelson Mandela" },
    { content: "In the end, it's not the years in your life that count. It's the life in your years.", author: "Abraham Lincoln" },
    { content: "Life is either a daring adventure or nothing at all.", author: "Helen Keller" },
    { content: "Many of life's failures are people who did not realize how close they were to success when they gave up.", author: "Thomas A. Edison" },
    { content: "You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose.", author: "Dr. Seuss" }
  ]
  
  const [currentQuote, setCurrentQuote] = useState({})
  
  // Function to get a random quote
  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length)
    setCurrentQuote(quotes[randomIndex])
  }
  
  // Set initial quote on component mount
  useEffect(() => {
    getRandomQuote()
  }, [])
  
  return (
    <div className='h-screen w-full bg-cover bg-no-repeat flex justify-center items-center flex-wrap'
      style={{ backgroundImage: `url(${bg})` }}>
      <div className='bg-white w-3/5 h-80 opacity-75 rounded-2xl text-black p-4 flex flex-col'>
        <div className='h-4/5 w-full flex flex-col items-center justify-center'>
          <p className='text-xl font-semibold text-center'>"{currentQuote.content}"</p>
          <p className='text-lg mt-4'>- {currentQuote.author}</p>
        </div>
        <div className='flex justify-around items-center'>
        <a href="https://x.com/compose/post"><Twitter/></a>
          <button 
            className='py-2 px-4 bg-blue-600 rounded-2xl text-white'
            onClick={getRandomQuote}
          >
            Generate
          </button>
        </div>
      </div>
    </div>
  )
}

export default Quote