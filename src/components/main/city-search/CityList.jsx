import React from 'react'
import './citySearch.css'
const CityList = (props) => {

  const citySelectHandler = (coords) => {
    props.onCitySelect(coords)
  }
  return (
    <ul className='city__list'>
      {
        props.cities.map((city, index) =>
           <li 
            className='city-list-item'
            key={index}
            onClick={() => citySelectHandler(city.coords)}
            >{city.country}, {city.city}</li>)
      }
    </ul>
  )
}

export default CityList