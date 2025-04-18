import React from 'react'

import './App.css'
import Slider from './Components/Slider'
import CEOQuotesSlider from './Components/Slider'
import ButtonDemo from './Components/Button'
import StatsSection from './Components/StatSection'
import ProgressBar from './Components/ProgressBar'
import Quote from './Components/Quote'
import Wheather from './Components/Wheather'
import Todo from './Components/Todo'


const App = () => {
  return (
    <div className='flex items-center justify-center h-screen'>
{/* <StatsSection/> */}
{/* <ProgressBar/> */}
{/* <Quote/> */}
{/* <Wheather/> */}
  <Todo/>

    </div>
  )
}

export default App
