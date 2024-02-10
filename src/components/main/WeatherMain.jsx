import React, { useContext } from 'react'
import findUrl from '../../utils/iconsUrl';
import BackgroundImage from './BackgroundImage';
import './main.css'
import UnitContext from '../../context/UnitContext';
const WeatherMain = (props) => {

  const { unit: { unitSymbol } } = useContext(UnitContext);

  const time = new Date().toLocaleTimeString([], { hour: 'numeric', minute: 'numeric' });

  let id = props.data.id.toString();
  if (id == '800') {

    const currentTime = (new Date().getTime()) / 1000;
    // openWeatherMap's timestamp are in seconds
    // JS default timestamps are in milliseconds hence conversion
    if ((currentTime > props.data.sunrise && currentTime < props.data.sunset)) {
      // day
      id = '800d';
    } else {
      // night
      id = '800n';
    }
  }
  // console.log(findUrl(id, props.data.sunrise, props.data.sunset));
  // console.log(props.id)
  return (
    <BackgroundImage id={id}>
      <time className={'weather-card__time'}>{time}</time>
      <div className='weather-card__main-info'>
        <figure className='main-info__icon-container'>
          <img src={findUrl(id)} className='icon-container__weather-icon' />
        </figure>
        <p className='main-info__temp-normal'>{props.data.temp_normal} °{unitSymbol}</p>
        <p className='main-info__temp-feelsLike'>Feels like <br /> {props.data.temp_feelsLike} °{unitSymbol}</p>
      </div>
      <div className='weather-card__sec-info'>
        <div className='sec-info__max'>
          <p>Maximum <br /> Temperature</p>
          <p>{props.data.temp_max} °{unitSymbol}</p>
        </div>
        <div className='sec-info__min'>
          <p>Minimum <br /> Temperature</p>
          <p>{props.data.temp_min} °{unitSymbol}</p>
        </div>
        <p className='sec-info__desc'>{props.data.description}</p>
      </div>
    </BackgroundImage>
  )
}

export default WeatherMain

// 'url(findUrl(id, props.data.sunrise, props.data,sunset))'