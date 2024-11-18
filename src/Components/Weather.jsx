
import React from 'react'

const Weather = ({ currentWeather }) => {
    return (
        <div className='flex flex-col items-center mt-4 mb-8'>
            <img
                src={`icons/${currentWeather.weatherIcon}.svg`}
                alt=""
                className='w-32 h-32 my-4'
            />
            <div className='flex items-center gap-2 mt-2'>
                <p className='text-xl tracking-wider text-white'>{currentWeather.temperature}°C,</p>
                <p className='text-xl tracking-wider text-white'>{currentWeather.description}</p>
            </div>
            <p className='mt-2 text-2xl tracking-wider text-white'>{currentWeather.location}</p>
        </div>
    )
}

export default Weather