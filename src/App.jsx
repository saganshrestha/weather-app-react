
import React from 'react'
import Search from './Components/Search'
import Weather from './Components/Weather'
import FullWeather from './Components/FullWeather'

const App = () => {
  return (
    <div className='bg-purple-800 py-8 px-10 rounded-lg flex flex-col items-center'>
      <Search />
      <Weather />
      <FullWeather />
    </div>
  )
}

export default App