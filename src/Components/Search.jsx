
import React from 'react'

const Search = ({ getWeatherDetails, searchInputRef }) => {

    const API_KEY = import.meta.env.VITE_API_KEY

    const handleSearch = (e) => {
        e.preventDefault()
        const searchInput = e.target.querySelector(".search-input")
        console.log(searchInput.value)
        const API_URL = `http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${searchInput.value}&days=2`
        getWeatherDetails(API_URL);
    }

    const handleLocationSearch = () => {
        navigator.geolocation.getCurrentPosition(
            position => {
                const { latitude, longitude } = position.coords
                const API_URL = `http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${latitude},${longitude}&days=2`
                getWeatherDetails(API_URL);
                console.log(position)
            },
            () => {
                alert("Location access denied. Please enable permissions to use this feature.")
            }
        )
    }

    return (
        <div className='flex items-center w-full gap-4'>
            <form action="#" onSubmit={handleSearch} className='w-full'>
                <input
                    type="search"
                    placeholder='Enter a city name'
                    required
                    ref={searchInputRef}
                    className='w-full h-12 pl-6 pr-4 border-none rounded-md outline-none search-input'
                />
            </form >
            <button className='flex items-center justify-center h-12 text-gray-600 bg-white rounded-md cursor-pointer w-14' onClick={handleLocationSearch}>
                <span class="material-symbols-rounded">
                    my_location
                </span>
            </button>
        </div>
    )
}

export default Search