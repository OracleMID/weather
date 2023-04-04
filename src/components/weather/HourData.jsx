import React from 'react'
import WeatherIMG from '../WeatherIMG'
const HourData = ({time, temperature_2m, weathercode, windspeed_10m}) => {
    let date = new Date(time)
    return (
        <div className="daily_weather_column">
            <span>
                {date.getHours()}
                <sup className="time_sup">
                    00
                </sup>
            </span>
            <WeatherIMG weathercode={weathercode}/>
            <p>{Math.round(temperature_2m)}</p>
            <div className='wind_speed'>
                {Math.round(windspeed_10m)}
            </div>
        </div>
    )
}

export default HourData