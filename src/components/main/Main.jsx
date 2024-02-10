import React, { useState } from 'react'
import Forecast from './forecast/Forecast'
import CurrentWeather from './CurrentWeather'
import MethodMenu from './MethodMenu'
import WeatherMap from './map/Map'
import ToggleButton from '../UI/ToggleButton'
const Main = () => {
  const DUMMY_LOCATION_DATA = {
    country: 'Pakistan',
    city: 'Karachi'
  }

  const [locationData, setLocationData] = useState(DUMMY_LOCATION_DATA);
  const [coords, setCoords] = useState({ lat: 24.931137, lon: 67.076434 })

  const locationDataHandler = (data) => {
    console.log(data);
    setLocationData(data || DUMMY_LOCATION_DATA);
  }

  const setCoordsHandler = (coordinates) => {
    setCoords(coordinates)
  }
  return (
    <main>

      <MethodMenu setCoordsHandler={setCoordsHandler} locationData={locationData} />
      <ToggleButton />
      <CurrentWeather
        coords={coords}
        locationDataHandler={locationDataHandler} />
      <Forecast coords={coords} />
      <WeatherMap coords={coords} />
    </main>
  )
}

export default Main