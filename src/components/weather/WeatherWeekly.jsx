import React, { useState, useEffect } from 'react'
import WeatherDay from './DayData'


const WeatherWeekly = () => {
    let [data, setData] = useState(null)
    function getWeather() {
        fetch("https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m,weathercode,windspeed_10m&timezone=Europe%2FMoscow")
            .then(response => response.json())
            .then(response => setData(response))
    }
    useEffect(() => {
        getWeather()
        return () => {
        }
    }, [])

    const sortData = (hourlObj) => {
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
    return (
        <div className="weekly_weather">
            <h3 className='t_heading'>Средняя температура, °C</h3>
            <h3 className='ws_heading'>Скорость ветра, м/с</h3>
            {data ? sortData(data.hourly).map(elem => <WeatherDay key={new Date(elem.time[0])} {...elem} />) : ''}
        </div>
    )
}


export default WeatherWeekly