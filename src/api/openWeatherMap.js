import axios from "axios"
import { transformCurrentWeatherData, transformWeatherForecastData } from "../utils/transformer";

const API_KEY = import.meta.env.VITE_REACT_APP_API_KEY;

const getCurrentWeatherData = async (lat=24.931137, lon=67.076434, unit) => {
    // console.log(`lat: ${lat}, lon: ${lon}`)
    const API_URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=${unit}&appid=${API_KEY}`
    try {
        const response = await axios.get(API_URL);
        // console.log(response);
        const transformedResponse = transformCurrentWeatherData(response.data);
        // console.log(transformedResponse);
        return transformedResponse;

    } catch (error) {
        return error;
    }
    
}
export {getCurrentWeatherData}

const getWeatherForecastData = async (lat=24.931137, lon=67.076434, unit) => {
    // console.log(`lat: ${lat}, lon: ${lon}`);
    const API_URL = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=${unit}&appid=${API_KEY}`;
    try {
        const response = await axios.get(API_URL);
        // console.log(response);
        const transformedResponse = transformWeatherForecastData(response.data.list);
        // console.log(transformedResponse);
        return transformedResponse;

    } catch (error) {
        return error;
    }
}

export {getWeatherForecastData};