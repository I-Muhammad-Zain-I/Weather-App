import React, { useEffect, useState } from 'react'
import './main.css'
import location from '../../assets/location.svg'
import useInput from '../../hooks/use-input'
/* 
    TODO: 
    - Form Permission paragraph will only show if permission is not granted.
    - Convert paragraph list into select menu
    - Lat and long value validity
 * 
 */

const LocationForm = (props) => {

  const {
    value: enteredLat,
    valueIsValid: latIsValid,
    hasError: latitudeIsInvalid,
    isTouched: latIsTouched,
    valueChangeHandler: latChangeHandler,
    inputBlurHandler: setLatIsTouched
  } = useInput((value) => !isNaN(value) && value !== '');
  const {
    value: enteredLon,
    valueIsValid: lonIsValid,
    hasError: longitudeIsInvalid,
    isTouched: lonIsTouched,
    valueChangeHandler: lonChangeHandler,
    inputBlurHandler: setLonIsTouched
  } = useInput((value) => !isNaN(value) && value !== '');


  let formIsTouched = latIsTouched && lonIsTouched;
  let formIsValid = latIsValid && lonIsValid && formIsTouched;

  const latBlurHandler = () => {
    setLatIsTouched();
  }
  const lonBlurHandler = () => {
    setLonIsTouched();
  }

  useEffect(() => {
    let valueString = localStorage.getItem('locationData');
    console.log(valueString);
    if (valueString) {
      console.log('Data is present')
      const locationData = JSON.parse(valueString);
      latChangeHandler(locationData.lat);
      lonChangeHandler(locationData.lon);
      setLatIsTouched();
      setLonIsTouched();
    }
  }, [])

  const formSubmitHandler = (e) => {
    e.preventDefault();
    setLatIsTouched(true);
    setLonIsTouched(true);

    let value = {
      lat: enteredLat,
      lon: enteredLon
    }
    if (formIsValid) {
      props.setCoordinateHandler(value)
      storeToLocal(value);
    }
  }

  const storeToLocal = (localData) => {
    localStorage.setItem('locationData', JSON.stringify(localData))
  }


  const latClasses = (latitudeIsInvalid) ? 'coord-input invalid' : 'coord-input';
  const lonClasses = (longitudeIsInvalid) ? 'coord-input invalid' : 'coord-input';

  let LocationIsInvalid = props.locationData.country == undefined && props.locationData.city == '';
  let content = (!LocationIsInvalid) ? `${props.locationData.country}, ${props.locationData.city}` : 'Random Coordinates'


  return (
    <section className={'location'} onSubmit={formSubmitHandler}>
      <div className={'location__info'}>
        <h2 className={`info__country noto-h3-25`}>{content}</h2>
        <img className={'info__loc-img'} src={location} alt='location-icon' />
      </div>
      <form className={'location__form aleo-h5-16'}>
        <p>Grant Browser Permission For Location</p>
        <p>OR</p>
        <p>Enter Following Coordinates</p>
        {latitudeIsInvalid && <p className='input-invalid-label'>Please provide valid numeric latitude value</p>}
        {longitudeIsInvalid && <p className='input-invalid-label'>Please provide valid numeric longitude value</p>}

        <div className={'form__input'}>
          <label htmlFor="lat">Latitude</label>
          <div>
            <input type="text" id='lat' className={latClasses}
              onChange={(e) => latChangeHandler(e.target.value)}
              onBlur={latBlurHandler}
              value={enteredLat}
            />
          </div>
        </div>
        <div className={'form__input'}>
          <label htmlFor="long">Longitude</label>
          <input type="text" id='long' className={lonClasses}
            onChange={(e) => lonChangeHandler(e.target.value)}
            onBlur={lonBlurHandler}
            value={enteredLon}
          />
        </div>
        <div className='form__button-wrapper'>
          <button type='submit' className={'form__button'}>Find</button>
        </div>
      </form>

    </section>
  )
}

export default LocationForm