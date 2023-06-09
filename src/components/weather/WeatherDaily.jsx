import React, { useState, useEffect } from 'react'
import HourData from './HourData'
import WeatherIMG from '../WeatherIMG'

const WeatherDaily = ({ lat, lng, active }) => {
    let [data, setData] = useState(null)
    function getWeather() {
        fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lng}1&hourly=temperature_2m,weathercode,windspeed_10m&past_days=2&forecast_days=3&timezone=Europe%2FMoscow`)
            .then(response => response.json())
            .then(response => setData(response))
    }
    useEffect(() => {
        getWeather(lat, lng)
        return () => {
        }
    }, [lat,lng])
    const sortData = (hourlObj) => {
        let result = []
        let arr = Object.entries(hourlObj)
        let k = 0
        let day = {}
        for (let i = 0; i < 72; i++) {
            for (let j = 0; j < arr.length; j++) {
                day[arr[j][0]] = arr[j][1][i]
            }
            // k++
            // if (k == 24) {
            result.push({ ...day })
            // k = 0
            day = {}
        }

        return result
    }
    const sortDailyData = (hourlObj) => {
        let result = []
        let arr = Object.entries(hourlObj)
        let k = 0
        let day = {}
        for (let i = 0; i < 168; i++) {
            for (let j = 0; j < arr.length; j++) {
                if (!day[arr[j][0]]) {
                    day[arr[j][0]] = []
                }
                day[arr[j][0]].push(arr[j][1][i])
            }
            k++
            if (k == 24) {
                result.push({ ...day })
                k = 0
                day = {}
            }
        }
        return result
    }
    const weatherModified = (weathercode) => {
        let weather = weathercode.reduce((a, elem) => {
            a[elem] = (a[elem] || 0) + 1
            return a
        }, {})
        return Object.entries(weather).reduce((acc, curr) => acc[1] > curr[1] ? acc : curr)[0]
    }
    let weekdays = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"]
    let month = ["янв", "фев", "мар", "апр", "май", "июн", "июл", "авг", "сен", "окт", "ноя", "дек"]
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

    return (
        <div className={`daily_weather ${active}`}>
            <div className="daily_weather_list">
                <div className="prev_day">
                    <div className="weathertab_content">
                        <a href="#">
                            {data ? weekdays[new Date(sortDailyData(data.hourly)[0].time[0]).getDay()] : ''}, {data ? new Date(sortDailyData(data.hourly)[0].time[0]).getDate() : ''} {data ? month[new Date(sortDailyData(data.hourly)[0].time[0]).getMonth()] : ''}
                        </a>
                        <div className="weathertab_info">
                            <p>{temperatureIdentify(data ? Math.round(sortDailyData(data.hourly)[0].temperature_2m.reduce((a, elem) => a + elem) / 24) : '')} °C</p>
                        </div>
                    </div>
                    <WeatherIMG weathercode={data ? weatherModified(sortDailyData(data.hourly)[0].weathercode) : 0} />
                </div>
                <div className="current_day">
                    <div className="weathertab_content">
                        <a>
                            {data ? weekdays[new Date(sortDailyData(data.hourly)[1].time[0]).getDay()] : ''}, {data ? new Date(sortDailyData(data.hourly)[1].time[0]).getDate() : ''} {data ? month[new Date(sortDailyData(data.hourly)[1].time[0]).getMonth()] : ''}</a>
                        <div className="weathertab_info">
                            <p>{temperatureIdentify(data ? Math.round(sortDailyData(data.hourly)[1].temperature_2m.reduce((a, elem) => a + elem) / 24) : '')} °C</p>
                        </div>
                    </div>
                    <WeatherIMG weathercode={data ? weatherModified(sortDailyData(data.hourly)[1].weathercode) : 0} />
                </div>
                <div className="next_day">
                    <div className="weathertab_content">
                        <a>{data ? weekdays[new Date(sortDailyData(data.hourly)[2].time[0]).getDay()] : ''}, {data ? new Date(sortDailyData(data.hourly)[2].time[0]).getDate() : ''} {data ? month[new Date(sortDailyData(data.hourly)[2].time[0]).getMonth()] : ''}</a>
                        <div className="weathertab_info">
                            <p>{temperatureIdentify(data ? Math.round(sortDailyData(data.hourly)[2].temperature_2m.reduce((a, elem) => a + elem) / 24) : '')} °C</p>
                        </div>
                    </div>
                    <WeatherIMG weathercode={data ? weatherModified(sortDailyData(data.hourly)[2].weathercode) : 0} />
                </div>
            </div>
            <div className="daily_weather_elem">
                <h3 className="t_heading">Средняя температура, °C</h3>
                <h3 className="ws_heading">Скорость ветра, м/с</h3>
                {data ? sortData(data.hourly).filter((elem, id) => id >= 24 & id <= 47 & id % 3 == 0).map(elem => <HourData key={new Date(elem.time)} {...elem} />) : ''}
            </div>
        </div>
    )
}

export default WeatherDaily