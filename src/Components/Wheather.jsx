import React, { useState, useEffect } from 'react'
import bg from '../assets/wheatherBg.jpg'
import { Cloud, CloudDrizzle, Sun, CloudRain } from 'lucide-react'

const Weather = () => {
  const [data, setData] = useState(null);
  const [city, setCity] = useState("Indore");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  
  // API key
  const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
  
  useEffect(() => {
    fetchWeatherData();
  }, []);
  
  const fetchWeatherData = async () => {
    if (!city) return;
    
    setLoading(true);
    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`);
      if (!response.ok) {
        throw new Error('City not found');
      }
      const weatherData = await response.json();
      setData(weatherData);
      setError(null);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    fetchWeatherData();
  };
  
  // Format current date and time
  const formatDateTime = () => {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const day = days[now.getDay()];
    const date = now.getDate();
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const month = months[now.getMonth()];
    const year = now.getFullYear().toString().substr(-2);
    
    return `${hours}:${formattedMinutes} - ${day}, ${date}${month} ${year}`;
  };
  
  // Select weather icon based on weather condition
  const getWeatherIcon = (weatherMain) => {
    switch(weatherMain) {
      case 'Clear':
        return <Sun className="m-2 text-3xl text-yellow-400" />;
      case 'Clouds':
        return <Cloud className="m-2 text-3xl text-gray-200" />;
      case 'Rain':
      case 'Drizzle':
        return <CloudRain className="m-2 text-3xl text-blue-300" />;
      default:
        return <CloudDrizzle className="m-2 text-3xl text-blue-200" />;
    }
  };
  
  return (
    <div className='w-full h-screen flex justify-center items-center flex-wrap bg-black text-white'>
      {/* Main card with overlay */}
      <div className='w-2/4 h-3/5 bg-cover bg-top shadow-xl rounded-md flex flex-col justify-between relative overflow-hidden'
        style={{ backgroundImage: `url(${bg})` }}>
        
        {/* Semi-transparent overlay for better visibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
        
        {/* Search Section */}
        <div className='w-full pt-8 px-8 flex justify-start relative z-10'>
          <form onSubmit={handleSubmit} className="w-full max-w-sm">
            <div className="flex items-center">
              <input 
                type="text" 
                placeholder='Enter your City' 
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className='w-full px-4 py-3 rounded-full text-xl border-none font-semibold bg-black/70 focus:outline-none focus:ring-2 focus:ring-white/50' 
              />
              <button type="submit" className="ml-2 px-4 py-3 rounded-full bg-white/20 text-white hover:bg-white/30 transition-colors duration-200">
                Search
              </button>
            </div>
          </form>
        </div>
        
        {/* Weather Info Section */}
        <div className='py-10 px-20 flex gap-5 flex-wrap items-center relative z-10'>
          {loading && <p className="text-xl font-bold">Loading...</p>}
          {error && <p className="text-xl font-bold text-red-500">{error}</p>}
          
          {data && (
            <>
              <p className='text-6xl font-bold text-shadow'>{Math.round(data.main.temp)}°C</p>
              <div className=''>
                <p className='text-3xl font-semibold text-shadow'>
                  {data.name}, {data.sys.country}
                </p>
                <p className='text-shadow'>
                  {formatDateTime()}
                </p>
              </div>
              <p className='text-md flex items-center'>
                {getWeatherIcon(data.weather[0].main)}
                <span className="text-shadow capitalize">{data.weather[0].description}</span>
              </p>
              
              <div className="flex gap-8 mt-6 w-full bg-black/30 p-4 rounded-lg backdrop-blur-sm">
                <div>
                  <p className="text-gray-300">Humidity</p>
                  <p className="font-bold text-lg">{data.main.humidity}%</p>
                </div>
                <div>
                  <p className="text-gray-300">Wind Speed</p>
                  <p className="font-bold text-lg">{data.wind.speed} m/s</p>
                </div>
                <div>
                  <p className="text-gray-300">Feels Like</p>
                  <p className="font-bold text-lg">{Math.round(data.main.feels_like)}°C</p>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

// Add text shadow utility class
const style = document.createElement('style');
style.textContent = `
  .text-shadow {
    text-shadow: 1px 1px 3px rgba(0,0,0,0.8), 0 0 5px rgba(0,0,0,0.5);
  }
`;
document.head.appendChild(style);

export default Weather