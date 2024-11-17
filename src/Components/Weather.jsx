
import React from 'react'
import clear_icon from '../assets/clear.png'
import cloud_icon from '../assets/cloud.png'
import drizzle_icon from '../assets/drizzle.png'
import rain_icon from '../assets/rain.png'
import snow_icon from '../assets/snow.png'
import wind_icon from '../assets/wind.png'
import humidity_icon from '../assets/humidity.png'

const Weather = () => {
    return (
        <div className='flex flex-col items-center mt-4 mb-8'>
            <img
                src={clear_icon}
                alt=""
                className='h-44 w-44'
            />
            <div className='flex items-center gap-2 mt-2'>
                <p className='text-white text-2xl tracking-wider'>16°C,</p>
                <p className='text-white text-2xl tracking-wider'>Sunny</p>
            </div>
            <p className='text-white text-2xl tracking-wider mt-2'>Kathmandu</p>
        </div>
    )
}

export default Weather