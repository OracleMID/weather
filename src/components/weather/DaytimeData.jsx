import React from 'react'

import WeatherIMG from '../WeatherIMG'

const DaytimeData = ({ time, temperature_2m, weathercode, windspeed_10m }) => {
    let date = new Date(time[0])
    let weekdays = ["пн", "вт", "ср", "чт", "пт", "сб", "вс"]
    let month = ["янв", "фев", "мар", "апр", "май", "июн", "июл", "авг", "сен", "окт", "ноя", "дек"]
    let weather = weathercode.reduce((a, elem) => {
        a[elem] = (a[elem]||0) + 1
        return a
    },{})
    let weatherModified = Object.entries(weather).reduce((acc, curr) => acc[1] > curr[1] ? acc : curr)[0]
    return (
        <div className='threedays_weather_elem'>
            <p>
                {weekdays[date.getUTCDay()]},
                {date.getDate()}
                {month[date.getMonth()]}
            </p>
            <div className='threedays_weather_block'>
                <div className="threedays_weather_column">
                    <span>Ночь</span>
                    <WeatherIMG weathercode={weatherModified} />
                    <p>{Math.round(temperature_2m.filter((elem, id) => id >= 0 && id < 6).reduce((a, elem) => a + elem) / 6)}</p>
                    <div className='wind_speed'>
                        {Math.round(windspeed_10m.filter((elem, id) => id >= 0 & id < 6).reduce((a, elem) => a + elem) / 6)}
                    </div>
                </div>
                <div className="threedays_weather_column">
                    <span>Утро</span>
                    <WeatherIMG weathercode={weatherModified} />
                    <p>{Math.round(temperature_2m.filter((elem, id) => id >= 6 && id < 12).reduce((a, elem) => a + elem) / 6)}</p>
                    <div className='wind_speed'>
                        {Math.round(windspeed_10m.filter((elem, id) => id >= 6 & id < 12).reduce((a, elem) => a + elem) / 6)}
                    </div>
                </div>
                <div className="threedays_weather_column">
                    <span>День</span>
                    <WeatherIMG weathercode={weatherModified} />
                    <p>{Math.round(temperature_2m.filter((elem, id) => id >= 12 & id < 18).reduce((a, elem) => a + elem) / 6)}</p>
                    <div className='wind_speed'>
                        {Math.round(windspeed_10m.filter((elem, id) => id >= 12 & id < 18).reduce((a, elem) => a + elem) / 6)}
                    </div>
                </div>
                <div className="threedays_weather_column">
                    <span>Вечер</span>
                    <WeatherIMG weathercode={weatherModified} />
                    <p>{Math.round(temperature_2m.filter((elem, id) => id >= 18 & id < 24).reduce((a, elem) => a + elem) / 6)}</p>
                    <div className='wind_speed'>
                        {Math.round(windspeed_10m.filter((elem, id) => id >= 18 & id < 24).reduce((a, elem) => a + elem) / 6)}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DaytimeData