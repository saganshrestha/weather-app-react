
import React from 'react'
import { weatherCodes } from '../constants'

const HourlyWeather = ({ hourlyWeather }) => {

    const temperature = Math.floor(hourlyWeather.temp_c)
    const time = hourlyWeather.time.split(" ")[1].substring(0, 5)
    const weatherIcon = Object.keys(weatherCodes).find(icon => weatherCodes[icon].includes(hourlyWeather.condition.code))

    return (
        <li className='flex flex-col items-center gap-2'>
            <p className='text-sm text-white'>{time}</p>
            <img src={`icons/${weatherIcon}.svg`} alt="" />
            <p className='text-sm text-white'>{temperature}°C</p>
        </li>
    )
}

export default HourlyWeather