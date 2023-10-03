
const transformCurrentWeatherData = (data) => {
    // temp_max and temp_min are optional: will often give same values as
    // temp_normal: openWeatherMap->Docs
    const transformedMainData = {
        id: (data.weather)[0].id,
        description: data.weather[0].description,
        temp_normal: data.main.temp,
        temp_max: data.main.temp_max,
        temp_min: data.main.temp_min,
        temp_feelsLike: data.main.feels_like,
        sunrise: data.sys.sunrise,
        sunset: data.sys.sunset
    }
    const transformedFactorData = {
        wind: {
            speed: data.wind.speed,
            degree: data.wind.deg
        },
        pressure: data.main.pressure,
        visibility: data.visibility/1000,
        humidity: data.main.humidity
    }

    const transformedLocationData = {
        country: data.sys.country,
        city: data.name
    }
    return {transformedMainData, transformedFactorData, transformedLocationData};
}

export {transformCurrentWeatherData};







const getDate = (timestamp) => {
    const date = new Date(timestamp*1000)
    const dayOfWeek = date.toLocaleDateString('en-US', {weekday: 'long'});
    const day = date.getDate();
    return`${dayOfWeek}, ${day}`;
}

// const getDay = (timestamp) => {
//     const date = new Date(timestamp*1000);
//     return date.getDate();
// }

const getTime = (timestamp) => {
    const date = new Date(timestamp*1000);

    const time = date.toLocaleTimeString('en-US', {
    hour: 'numeric',
    hourCycle: 'h12',
    });
    return time
}
const checkDateEquality = (timestamp1, timestamp2) => {
    const date1 = new Date(timestamp1*1000);
    const date2 = new Date(timestamp2*1000);
    let answer = date1.getDate() === date2.getDate();
    // console.log(`Date1: ${date1} &&& Date2: ${date2}`)
    // console.log(`Equality: ${answer}`)
    return answer;

}

const transformWeatherForecastData = (data) => {
    // console.log(data);
    const transformedForecastData = [];
    const transformedHumidity = [];
    const transformedVisibility = [];
    const transformedPressure = [];

    let timestamp = data[0].dt;
    // console.log(timestamp);
    let tempArray = [];
    let tempHumidity = [];
    let tempVisibility = [];
    let tempPressure = [];

    data.map((day) => {
        if(checkDateEquality(timestamp, day.dt)) {
            let singleDay = {
                date: getDate(day.dt),
                time: getTime(day.dt),
                id: day.weather[0].id,
                temp: Math.round(day.main.temp),
                icon: day.weather[0].icon
            }
            tempArray.push(singleDay);
            tempHumidity.push(day.main.humidity);
            tempPressure.push(day.main.pressure);
            tempVisibility.push(day.visibility/1000);

            // console.log('IF RUN')
            
        } else {
            // Next Day
            // console.log('ELSE RUN')
            transformedForecastData.push(tempArray);
            transformedVisibility.push(tempVisibility);
            transformedHumidity.push(tempHumidity);
            transformedPressure.push(tempPressure);

            tempArray = [];
            tempVisibility = [];
            tempHumidity = [];
            tempPressure = [];
            timestamp = day.dt;
            let singleDay = {
                date: getDate(day.dt),
                time: getTime(day.dt),
                id: day.weather[0].id,
                temp: Math.round(day.main.temp),
                icon: day.weather[0].icon
            }
            
            tempArray.push(singleDay);
            tempHumidity.push(day.main.humidity);
            tempPressure.push(day.main.pressure);
            tempVisibility.push(day.visibility/1000);
        }
    })

    // console.log(transformedForecastData);
    // console.log(transformedHumidity);
    // console.log(transformedPressure);
    // console.log(transformedVisibility);
    return {transformedForecastData, transformedHumidity, transformedPressure, transformedVisibility}
    
}

export {transformWeatherForecastData}

// `${day.main.temp} °C`