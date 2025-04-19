import React, { useState } from 'react'

const Calculator = () => {
   const [value, setValue] = useState("")

  const handleClick = (e) => {
    if(e.target.value === "AC") {
      setValue("")
    } else if(e.target.value === "Del") {
      setValue(value.slice(0, -1))
    } else if(e.target.value === "=") {
      try {
        setValue(eval(value).toString())
      } catch (error) {
        setValue("Error")
      }
    } else {
      setValue(value + e.target.value)
    }
  }

  return (
    <div className='bg-black h-screen  flex justify-center items-center'>
      <div className='w- bg-white p-4 shadow-2xl '>
        <div className=' my-3'>
          <input type="text" value={value} className='  w-96  bg-black text-white text-2xl py-5 text-right px-4 font-bold' readOnly />
        </div>
        <div className=' flex flex-col gap-y-5 justify-center'>
          <div className='flex gap-4'> 
            <input type="button" value="AC" className='bg-blue-400 w-20 p-4 rounded-xl text-xl font-bold' onClick={handleClick} />
            <input type="button" value="Del" className='bg-blue-400 w-20  p-4 rounded-xl text-xl font-bold' onClick={handleClick} />
            <input type="button" value="%" className='bg-blue-400 w-20  p-4 rounded-xl text-xl font-bold' onClick={handleClick} />
            <input type="button" value="/" className='bg-blue-400 w-20  p-4 rounded-xl text-xl font-bold' onClick={handleClick} />
          </div>
          <div className='flex gap-4'> 
            <input type="button" value="7" className='bg-indigo-400 w-20 p-4 rounded-xl text-xl font-bold' onClick={handleClick} />
            <input type="button" value="8" className='bg-indigo-400 w-20  p-4 rounded-xl text-xl font-bold' onClick={handleClick} />
            <input type="button" value="9" className='bg-indigo-400 w-20  p-4 rounded-xl text-xl font-bold' onClick={handleClick} />
            <input type="button" value="*" className='bg-blue-400 w-20  p-4 rounded-xl text-xl font-bold' onClick={handleClick} />
          </div>
          <div className='flex gap-4'> 
            <input type="button" value="4" className='bg-indigo-400 w-20 p-4 rounded-xl text-xl font-bold' onClick={handleClick} />
            <input type="button" value="5" className='bg-indigo-400 w-20  p-4 rounded-xl text-xl font-bold' onClick={handleClick} />
            <input type="button" value="6" className='bg-indigo-400 w-20  p-4 rounded-xl text-xl font-bold' onClick={handleClick} />
            <input type="button" value="-" className='bg-blue-400 w-20  p-4 rounded-xl text-xl font-bold' onClick={handleClick} />
          </div>
          <div className='flex gap-4'> 
            <input type="button" value="1" className='bg-indigo-400 w-20 p-4 rounded-xl text-xl font-bold' onClick={handleClick} />
            <input type="button" value="2" className='bg-indigo-400 w-20  p-4 rounded-xl text-xl font-bold' onClick={handleClick} />
            <input type="button" value="3" className='bg-indigo-400 w-20  p-4 rounded-xl text-xl font-bold' onClick={handleClick} />
            <input type="button" value="+" className='bg-blue-400 w-20  p-4 rounded-xl text-xl font-bold' onClick={handleClick} />
          </div>

          <div className='flex gap-4'> 
            <input type="button" value="0" className='bg-indigo-400 w-20 p-4 rounded-xl text-xl font-bold' onClick={handleClick} />
            <input type="button" value="." className='bg-indigo-400 w-20  p-4 rounded-xl text-xl font-bold' onClick={handleClick} />
          
            <input type="button" value="=" className='bg-amber-400 w-40  p-4 rounded-xl text-xl font-bold' onClick={handleClick} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Calculator
