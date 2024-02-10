import React, { useContext, useEffect, useState } from 'react'
import WeatherMain from './WeatherMain'
import { getCurrentWeatherData } from '../../api/openWeatherMap'
import WeatherFactors from './WeatherFactors';
import './main.css'
import UnitContext from '../../context/UnitContext';
import { DUMMY_MAIN_DATA, DUMMY_FACTOR_DATA } from '../../constants/constant';
const CurrentWeather = (props) => {

    const {unit:{unit}} = useContext(UnitContext)

 


    const [mainData, setMainData] = useState(DUMMY_MAIN_DATA);
    const [factorData, setFactorData] = useState(DUMMY_FACTOR_DATA)
    useEffect(() => {
        const handleGetCurrentWeatherData = async () => {
            const response = await getCurrentWeatherData(props.coords.lat, props.coords.lon, unit);
            // console.log(response);
            setMainData(response.transformedMainData || DUMMY_MAIN_DATA);
            setFactorData(response.transformedFactorData || DUMMY_FACTOR_DATA);
            handleLocationData(response.transformedLocationData);
        }
        handleGetCurrentWeatherData();

    }, [props.coords, unit]);

    const handleLocationData = (data) => {
        props.locationDataHandler(data);
    }

    return (
        <article className='current-weather-wrapper' id='weather'>
            <h1 className='current-weather-title noto-h4-20'>Current Weather Conditions</h1>
            <WeatherMain data={mainData}/>
            <WeatherFactors data={factorData}/>
        </article>
    )
}

export default CurrentWeather