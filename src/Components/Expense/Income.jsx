import React from 'react'

const Income = () => {
  return (
    <div className='flex flex-wrap bg-white  ' >
      <p className=''>
        <span>Income</span>
        <p className='text-green-600'>$500.00</p>
      </p>
      <hr className=''/>
      <p>
        <span>Expense</span>
        <p className='text-red-600'> 
          $240.00
        </p>

      </p>
    </div>
  )
}

export default Income
