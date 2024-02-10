import React, { useState } from 'react'
import './citySearch.css'
import { getCitiesSuggestions } from '../../../api/GeoDBCities';
import CityOptions from './CityOptions';
const CitySearch = (props) => {
  const [searchValue, setSearchValue] = useState("");
  const [cities, setCities] = useState([]);
  const searchChangeHandler = (e) => {
    setSearchValue(e.target.value)
  }

  const onFormSubmit = async (e) => {
    e.preventDefault();
    if (searchValue.trim() == "") return;
    const response = await getCitiesSuggestions(searchValue);
    console.log(response)
    setCities(response || []);

  }
  const onCitySelect = (coords) => {
    props.setCoordinateHandler(coords);
  }
  return (
    <section className='search__container'>
      <form className='search__form'>
        <input
          className='search__input'
          type='text'
          value={searchValue}
          onChange={(e) => searchChangeHandler(e)}
          placeholder='Enter City Name'
        />
        <button
          className='search__btn'
          onClick={(e) => onFormSubmit(e)}
        >
          Search
        </button>
      </form>
      {
        cities ? <CityOptions cities={cities} onCitySelect={onCitySelect} /> :
          <p className='no-results'>No Results Found</p>
      }

    </section>
  )
}

export default CitySearch