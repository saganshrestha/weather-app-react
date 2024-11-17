
import React from 'react'
import clear_icon from '../assets/clear.png'
import cloud_icon from '../assets/cloud.png'
import drizzle_icon from '../assets/drizzle.png'
import rain_icon from '../assets/rain.png'
import snow_icon from '../assets/snow.png'
import wind_icon from '../assets/wind.png'
import humidity_icon from '../assets/humidity.png'

const FullWeather = () => {
    return (
        <div className='pt-8 border-t-2 w-full'>
            <ul className='flex flex-row items-center justify-between gap-12 list-none'>
                <li className='flex flex-col items-center gap-2'>
                    <p className='text-white text-sm'>00:00</p>
                    <img src={cloud_icon} alt="" className='h-10' />
                    <p className='text-white text-sm'>20°C</p>
                </li>
                <li className='flex flex-col items-center gap-2'>
                    <p className='text-white text-sm'>00:00</p>
                    <img src={cloud_icon} alt="" className='h-10' />
                    <p className='text-white text-sm'>20°C</p>
                </li>
                <li className='flex flex-col items-center gap-2'>
                    <p className='text-white text-sm'>00:00</p>
                    <img src={cloud_icon} alt="" className='h-10' />
                    <p className='text-white text-sm'>20°C</p>
                </li>
                <li className='flex flex-col items-center gap-2'>
                    <p className='text-white text-sm'>00:00</p>
                    <img src={cloud_icon} alt="" className='h-10' />
                    <p className='text-white text-sm'>20°C</p>
                </li>
                <li className='flex flex-col items-center gap-2'>
                    <p className='text-white text-sm'>00:00</p>
                    <img src={cloud_icon} alt="" className='h-10' />
                    <p className='text-white text-sm'>20°C</p>
                </li>
                <li className='flex flex-col items-center gap-2'>
                    <p className='text-white text-sm'>00:00</p>
                    <img src={cloud_icon} alt="" className='h-10' />
                    <p className='text-white text-sm'>20°C</p>
                </li>
            </ul>
        </div>
    )
}

export default FullWeather