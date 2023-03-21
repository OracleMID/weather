import React from 'react'
import sunny from '../../img/weather_img/clear_weather.png'
let weather_image = sunny
const WeatherDay = ({temperature}) => {
    return (
        <div className="weather_day">
            <a href="#">
                Пн<br/>
                18 мар
            </a>
            <img src = {weather_image} alt="" />
            <p>{temperature}</p>
            <div className='wind_speed'>
                3
            </div>
        </div>
    )
}

export default WeatherDay