import React, { useState } from 'react'
import './citySearch.css'
const CityOptions = (props) => {
  const [selectedOption, setSelectedOption] = useState("");

  const citySelectHandler = (e) => {
    console.log(props?.cities[e.target?.value].coords);
    props.onCitySelect(props?.cities[e.target?.value].coords)
  }



  return (
    <select value={selectedOption} onChange={(e) => citySelectHandler(e)} className='method-menu__select-city'>
      {
        props.cities.map((city, index) => 
          <option 
            key={index}
            value={`${index}`}
            
          >
            {city.country}, {city.city}, 
          </option>
        )
      }
  </select>
  
  )
}

export default CityOptions