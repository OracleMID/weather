import React , {useState, useEffect} from 'react'
import DaytimeData from './DaytimeData'

const WeatherThreeDays = ({ lat, lng, active }) => {
    let [data, setData] = useState(null)
    function getWeather() {
        fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lng}1&hourly=temperature_2m,weathercode,windspeed_10m&forecast_days=3&timezone=Europe%2FMoscow`)
            .then(response => response.json())
            .then(response => setData(response))
    }
    useEffect(() => {
        getWeather(lat, lng)
        return () => {
        }
    }, [lat, lng])

    const sortData = (hourlObj) => {
        let result = []
        let arr = Object.entries(hourlObj)
        let k = 0
        let day = {}
        for (let i = 0; i < 72; i++) {
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
        console.log(result)
        return result
    }

    return (
        <div className={`three_days_weather ${active}`}>
            <h3 className="t_heading">Средняя температура, °C</h3>
            <h3 className="ws_heading">Скорость ветра, м/с</h3>
            {data ? sortData(data.hourly).map(elem => <DaytimeData key={new Date(elem.time[0])} {...elem} />) : ''}
        </div>
    )
}

export default WeatherThreeDays