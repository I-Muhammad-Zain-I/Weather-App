import React, { useContext, useEffect, useState } from 'react'
import WeatherMain from './WeatherMain'
import { getCurrentWeatherData } from '../../api/openWeatherMap'
import WeatherFactors from './WeatherFactors';
import './main.css'
import UnitContext from '../../context/UnitContext';

const CurrentWeather = (props) => {

    const {unit:{unit}} = useContext(UnitContext)

    const DUMMY_MAIN_DATA = {
        id: 721,
        description: "haze",
        temp_normal: 37.94,
        temp_max: 37.94,
        temp_min: 37.94,
        temp_feelsLike: 37.29,
        sunrise: '6:30 AM',
        sunset: '8:10 PM'
    }
    const DUMMY_FACTOR_DATA = {
        wind: {
            speed: 4.63,
            degree: 250,
        },
        pressure: 1006,
        visibility: 5000,
        humidity:  23
    }


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