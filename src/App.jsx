import React from 'react'
import YourWeather from './components/YourWeather'
import { Route, Routes } from 'react-router-dom'
import Search_Weather from './components/Search_Weather'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<YourWeather/>}/>
        <Route path='search_weather' element={<Search_Weather/>}/>
      </Routes>
    </div>
  )
}

export default App