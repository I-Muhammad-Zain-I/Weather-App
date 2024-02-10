import React from 'react';
import WindCard from './factor-cards/WindCard';
import PressureCard from './factor-cards/PressureCard';
import VisibilityCard from './factor-cards/VisibilityCard';
import HumidityCard from './factor-cards/HumidityCard';



/**
 * TODO:
 * Store meter.svg in const and display variable in jsx 

 */

const WeatherFactors = (props) => {
  return (
    <section className='factor-container'>
      <WindCard wind={props.data.wind} />
      <PressureCard pressure={props.data.pressure} />
      <VisibilityCard visibility={props.data.visibility} />
      <HumidityCard humidity={props.data.humidity} />
    </section>
  )
}

export default WeatherFactors