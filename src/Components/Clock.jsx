import React, { useState, useEffect } from 'react'

const Clock = () => {
  // Initialize with a Date object
  const [time, setTime] = useState(new Date());
  
  useEffect(() => {
    const interval = setInterval(() => {
      // Update with a new Date object every second
      setTime(new Date());
    }, 1000);
    
    return () => clearInterval(interval);
  }, []);

  // Get current time and date strings
  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();
  
  // Format time with leading zeros
  const formattedTime = 
    `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  
  // Get date parts for display  
  const day = time.getDate();
  const month = time.toLocaleString('default', { month: 'long' });
  const year = time.getFullYear();
  const weekday = time.toLocaleString('default', { weekday: 'long' });
  
  // Format date with proper ordinal suffix
  const ordinalSuffix = getOrdinalSuffix(day);
  const formattedDate = `${weekday} ${day}${ordinalSuffix} ${month} ${year}`;

  return (
    
    <div className="text-white font-orbitron w-full h-screen bg-gradient-to-t from-blue-400 to-slate-900 flex flex-wrap  flex-col justify-center items-center">
      <h1 className='text-6xl font-bold mb-6'>Digital Clock</h1>
      <div className='border p-10 shadow-lg shadow-green-400'>
        <p className="text-6xl font-bold">{formattedTime}</p>
        <p className="text-2xl font-bold">{formattedDate}</p>
      </div>
    </div>
  )
}

// Helper function to get the ordinal suffix for day numbers
function getOrdinalSuffix(day) {
  if (day > 3 && day < 21) return 'th';
  switch (day % 10) {
    case 1: return 'st';
    case 2: return 'nd';
    case 3: return 'rd';
    default: return 'th';
  }
}

export default Clock