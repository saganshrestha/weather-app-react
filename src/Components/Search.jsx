
import React from 'react'
import search_icon from '../assets/search.png'

const Search = () => {
    return (
        <div className='flex items-center gap-4 w-full'>
            <input
                type="text"
                placeholder='Enter a city name'
                required
                className='px-6 h-12 rounded-md border-none outline-none w-full'
            />
            <img
                src={search_icon}
                alt=""
                className='p-[14px] h-12 w-12 bg-white cursor-pointer rounded-md'
            />
        </div>
    )
}

export default Search