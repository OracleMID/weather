import React, { useState, useEffect } from 'react'
import WeatherTXT from '../WeatherTXT'
import WeatherBGC from '../WeatherBGC'

const WeatherCurrent = ({ lat, lng, active }) => {
    let [data, setData] = useState(null)
    function getWeather() {
        fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lng}&hourly=temperature_2m,relativehumidity_2m,apparent_temperature,weathercode,surface_pressure,windspeed_10m,winddirection_10m&daily=sunrise,sunset&forecast_days=1&timezone=Europe%2FMoscow`)
            .then(response => response.json())
            .then(response => setData(sortData(response.hourly)))

    }
    useEffect(() => {
        getWeather(lat, lng)
        return () => {
        }
    }, [lat, lng])
    const sortData = (hourlObj) => {
        let result = {}
        let arr = Object.entries(hourlObj)
        const date = new Date()
        let hours = date.getUTCHours()
        for (let i = 0; i < arr.length; i++) {
            result[arr[i][0]] = arr[i][1][hours]
        }

        console.log(result)
        return result
    }
    const windDirection = (winddirection_10m) => {
        if (winddirection_10m >= 0 && winddirection_10m <= 25 && winddirection_10m > 335 && winddirection_10m <= 360) {
            return "Северный"
        }
        if (winddirection_10m > 25 && winddirection_10m <= 65) {
            return "Северо-восточный"
        }
        if (winddirection_10m > 65 && winddirection_10m <= 115) {
            return "Восточный"
        }
        if (winddirection_10m > 115 && winddirection_10m <= 155) {
            return "Юго-восточный"
        }
        if (winddirection_10m > 155 && winddirection_10m <= 205) {
            return "Южный"
        }
        if (winddirection_10m > 205 && winddirection_10m <= 245) {
            return ">Юго-западный"
        }
        if (winddirection_10m > 245 && winddirection_10m <= 295) {
            return "Западный"
        }
        if (winddirection_10m > 295 && winddirection_10m <= 335) {
            return "Северо-западный"
        }
    }
    const temperatureIdentify = (temperature_2m) => {
        if (temperature_2m > 0) {
            return `+${temperature_2m}`
        }
        if (temperature_2m = 0) {
            return `${temperature_2m}`
        }
        if (temperature_2m < 0) {
            return `-${temperature_2m}`
        }
    }
    const apparentTemperatureIdentify = (apparent_temperature) => {
        if (apparent_temperature > 0) {
            return `+${apparent_temperature}`
        }
        if (apparent_temperature = 0) {
            return `${apparent_temperature}`
        }
        if (apparent_temperature < 0) {
            return `-${apparent_temperature}`
        }
    }

    let date = new Date()
    let weekdays = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"]
    let month = ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октябра", "ноября", "декабря"]
    return (
        <div className={`current_weather ${active}`}>
            <div className="current_content">
                <div className='data_container'>
                    <WeatherBGC weathercode={data ? data.weathercode : ""}/>
                    <div className="current_main">
                        <p className="time_heading">{weekdays[date.getUTCDay()]}, {date.getDate()} {month[date.getMonth()]}, {date.getHours()}:{date.getMinutes()} </p>
                        <p className="temperature_info">{temperatureIdentify(Math.round(data ? data.temperature_2m : ""))}</p>
                        <p className='apparent_temperature_info'>По ощущению {apparentTemperatureIdentify(Math.round(data ? data.apparent_temperature : ""))}</p>
                        <WeatherTXT weathercode={data ? data.weathercode : ""} />
                    </div>
                    <div className="current_sub">
                        <div className="sub_elem">
                            <p>Ветер</p>
                            <div className="sub_info">
                                <p className="current_info">{Math.round(data ? data.windspeed_10m : "")}</p>
                                <p>м/с<br />{data ? windDirection(data.winddirection_10m) : ""}</p>
                            </div>
                        </div>
                        <div className="sub_elem">
                            <p>Давление</p>
                            <div className="sub_info">
                                <p className="current_info">{Math.round(data ? data.surface_pressure : "")}</p>
                                <p>мм<br />рт. ст.</p>
                            </div>
                        </div>
                        <div className="sub_elem">
                            <p>Влажность</p>
                            <div className="sub_info">
                                <p className="current_info">{Math.round(data ? data.relativehumidity_2m : "")}</p>
                                <p>%</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default WeatherCurrent