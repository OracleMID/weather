import React from 'react'
import WeatherIMG from '../WeatherIMG'

const WeatherDay = ({ time, temperature_2m, weathercode, windspeed_10m }) => {
    let date = new Date(time[0])
    let weekdays = ["пн", "вт", "ср", "чт", "пт", "сб", "вс"]
    let month = ["янв", "фев", "мар", "апр", "май", "июн", "июл", "авг", "сен", "окт", "ноя", "дек"]
    let weather = weathercode.reduce((a, elem) => {
        a[elem] = (a[elem]||0) + 1
        return a
    },{})
    let weatherModified = Object.entries(weather).reduce((acc, curr) => acc[1] > curr[1] ? acc : curr)[0]

return (
    <div className="weekly_weather_column">
        <a href="#">
            {weekdays[date.getUTCDay()]}<br />
            {date.getDate()} {month[date.getMonth()]}
        </a>
        <WeatherIMG weathercode={weatherModified}/>
        <p>{Math.round(temperature_2m.reduce((a, elem) => a + elem) / 24)}</p>
        <div className='wind_speed'>
            {Math.round(windspeed_10m.reduce((a, elem) => a + elem) / 24)}
        </div>
    </div>
)
}
export default WeatherDay