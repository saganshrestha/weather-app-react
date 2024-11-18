
import React, { useEffect, useRef, useState } from 'react'
import Search from './Components/Search'
import Weather from './Components/Weather'
import { weatherCodes } from './constants'
import HourlyWeather from './Components/HourlyWeather'
import NoResult from './Components/NoResult'

const App = () => {

  const API_KEY = import.meta.env.VITE_API_KEY

  const [currentWeather, setCurrentWeather] = useState({})
  const [hourlyForecasts, setHourlyForecasts] = useState([])
  const [noResult, setNoResult] = useState(false)

  const searchInputRef = useRef(null)

  const filterHourlyData = (hourlyData) => {
    const currentHour = new Date().setMinutes(0, 0, 0)
    const next24Hours = currentHour + 24 * 60 * 60 * 1000
    const next24HoursData = hourlyData.filter(({ time }) => {
      const forecastTime = new Date(time).getTime()
      return forecastTime >= currentHour && forecastTime <= next24Hours
    })
    setHourlyForecasts(next24HoursData)
  }

  const getWeatherDetails = async (API_URL) => {

    setNoResult(false)

    try {
      const response = await fetch(API_URL)
      if (!response.ok) throw new Error()
      const data = await response.json()

      const temperature = Math.floor(data.current.temp_c);
      const description = data.current.condition.text;
      const weatherIcon = Object.keys(weatherCodes).find(icon => weatherCodes[icon].includes(data.current.condition.code))
      const location = data.location.name;

      setCurrentWeather({ temperature, description, weatherIcon, location })

      const combinedHourlyData = [...data.forecast.forecastday[0].hour, ...data.forecast.forecastday[1].hour]
      filterHourlyData(combinedHourlyData)

      searchInputRef.current.value = data.location.name
    } catch {
      setNoResult(true)
    }
  }

  useEffect(() => {
    const defaultCity = "Kathmandu"
    const API_URL = `http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${defaultCity}&days=2`
    getWeatherDetails(API_URL);
  }, [])

  return (
    <div className='flex flex-col items-center max-w-sm p-6 bg-purple-800 rounded-lg'>
      <Search getWeatherDetails={getWeatherDetails} searchInputRef={searchInputRef} />
      {noResult ? (
        <NoResult />
      ) : (
        <>
          <Weather currentWeather={currentWeather} />
          <div className='w-full'>
            <ul className='flex flex-row items-center justify-between gap-[42px] pb-4 list-none'>
              {hourlyForecasts.map((hourlyWeather) => (
                <HourlyWeather key={hourlyWeather.time_epoch} hourlyWeather={hourlyWeather} />
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  )
}

export default App