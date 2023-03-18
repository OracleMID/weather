import React, { useState, useEffect } from 'react'
import WeatherDay from './WeatherDay'


const Weather = () => {
    let [data, setData] = useState([])
    function getWeather() {
        fetch("https://api.open-meteo.com/v1/forecast?latitude=48.23&longitude=38.21&hourly=temperature_2m,windspeed_10m&windspeed_unit=ms&timezone=Europe%2FMoscow")
            .then(response => response.json())
            .then(response => setData(response,))
    }
    useEffect(() => {
        getWeather()
        weeklyWeather = temperature(data?hourly?temperature_2m)
        return () => {
        }
    })
    let weeklyWeather = [{ temperature: [], windSpeed: [] }]
    function temperature(data) {
        let result = []
        let temp = []
        let k = 0
        for (let i = 0; i <= data.length; i++) {
            temp.push(data[i])
            k++
            if (k == 24) {
                result.push([...temp])
                temp = []
                k = 0
            }
        }
        return result
    }

    return (
        <div className="weather_info">
            {/* <h3 className='t_heading'>Средняя температура, °C</h3>
            <h3 className='ws_heading'>Скорость ветра, м/с</h3> */}
            <WeatherDay />
            <WeatherDay />
            <WeatherDay />
            <WeatherDay />
            <WeatherDay />
            <WeatherDay />
            <WeatherDay />
            {/* {weeklyWeather} */}
        </div>
    )
}


export default Weather