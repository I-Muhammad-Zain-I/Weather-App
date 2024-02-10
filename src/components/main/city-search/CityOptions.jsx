import React, { useState } from 'react'
import './citySearch.css'
const CityOptions = (props) => {
  const [selectedOption, setSelectedOption] = useState("");

  const citySelectHandler = (coords) => {
    props.onCitySelect(coords)
  }
  return (
    <select value={selectedOption} onChange={(e) => onChange(e)} className='method-menu__select'>
      {
        props.cities.map((city) => 
          <option 
            value={`${city.name}, ${city.country}`}
            onClick={() => citySelectHandler(city.coords)}
          >
            {city.name}, {city.country}
          </option>
        )
      }
  </select>
  
  )
}

export default CityOptions